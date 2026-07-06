import { nextStreakState } from "./streak";
import { isCorrectOption } from "./random";
import {
  canCountCorrect,
  classifyMiss,
  nextDueAt,
  remediationDelayAttempts,
  toSqlDate,
} from "./scheduler";
import {
  masteryTarget,
  type Domain,
  type ErrorKind,
  type Level,
  type ProgressRow,
  type Question,
  type RemediationEntry,
  type StreakState,
} from "./types";

type ProgressRecord = {
  question_id: string;
  level: number;
  domain: string;
  correct_count: number;
  attempts: number;
  misses: number;
  last_answered_at: string | null;
  last_correct_at: string | null;
  due_at: string | null;
  retention_stage: number;
};

type StateRecord = {
  key: string;
  value: string;
};

export type AnswerResult = {
  correct: boolean;
  counted: boolean;
  errorKind: ErrorKind | null;
  wasRetentionCheck: boolean;
  lapsed: boolean;
  nextDueAt: string | null;
  eventId: number | null;
  streak: StreakState;
};

function toProgressRow(record: ProgressRecord): ProgressRow {
  return {
    questionId: record.question_id,
    level: record.level as Level,
    domain: record.domain as Domain,
    correctCount: record.correct_count,
    attempts: record.attempts,
    misses: record.misses,
    lastAnsweredAt: record.last_answered_at,
    lastCorrectAt: record.last_correct_at,
    dueAt: record.due_at,
    retentionStage: record.retention_stage,
  };
}

const progressColumns = `question_id, level, domain, correct_count, attempts, misses,
  last_answered_at, last_correct_at, due_at, retention_stage`;

export async function loadProgress(db: D1Database): Promise<ProgressRow[]> {
  const result = await db
    .prepare(`SELECT ${progressColumns} FROM question_progress`)
    .all<ProgressRecord>();

  return (result.results ?? []).map(toProgressRow);
}

export async function loadStreakState(db: D1Database): Promise<StreakState> {
  const result = await db
    .prepare("SELECT key, value FROM app_state WHERE key IN ('current_streak', 'best_streak')")
    .all<StateRecord>();
  const values = new Map((result.results ?? []).map((row) => [row.key, Number(row.value)]));

  return {
    current: Math.max(0, values.get("current_streak") ?? 0),
    best: Math.max(0, values.get("best_streak") ?? 0),
  };
}

async function saveStreakState(db: D1Database, streak: StreakState): Promise<void> {
  await db.batch([
    db
      .prepare(
        `INSERT INTO app_state (key, value, updated_at)
         VALUES ('current_streak', ?, datetime('now'))
         ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`,
      )
      .bind(String(streak.current)),
    db
      .prepare(
        `INSERT INTO app_state (key, value, updated_at)
         VALUES ('best_streak', ?, datetime('now'))
         ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`,
      )
      .bind(String(streak.best)),
  ]);
}

export async function resetCurrentStreak(db: D1Database): Promise<void> {
  const streak = await loadStreakState(db);
  await saveStreakState(db, {
    current: 0,
    best: streak.best,
  });
}

type AnswerEventRecord = {
  question_id: string;
  selected_option_id: string;
  correct: number;
};

export type RecentAnswerEvent = {
  questionId: string;
  selectedOptionId: string;
  correct: boolean;
};

export async function loadRecentAnswerEvents(
  db: D1Database,
  limit: number,
): Promise<RecentAnswerEvent[]> {
  const result = await db
    .prepare(
      `SELECT question_id, selected_option_id, correct
       FROM answer_events
       ORDER BY id DESC
       LIMIT ?`,
    )
    .bind(limit)
    .all<AnswerEventRecord>();

  return (result.results ?? []).map((record) => ({
    questionId: record.question_id,
    selectedOptionId: record.selected_option_id,
    correct: record.correct === 1,
  }));
}

type RemediationRecord = {
  id: number;
  question_id: string;
  error_kind: string;
  forced_option_id: string | null;
  due_at_attempt: number;
};

function toRemediationEntry(record: RemediationRecord): RemediationEntry {
  return {
    id: record.id,
    questionId: record.question_id,
    errorKind: record.error_kind as ErrorKind,
    forcedOptionId: record.forced_option_id,
    dueAtAttempt: record.due_at_attempt,
  };
}

export async function loadDueRemediation(
  db: D1Database,
  totalAttempts: number,
): Promise<RemediationEntry | null> {
  const record = await db
    .prepare(
      `SELECT id, question_id, error_kind, forced_option_id, due_at_attempt
       FROM remediation_queue
       WHERE resolved = 0 AND due_at_attempt <= ?
       ORDER BY due_at_attempt, id
       LIMIT 1`,
    )
    .bind(totalAttempts)
    .first<RemediationRecord>();

  return record ? toRemediationEntry(record) : null;
}

export async function updateErrorKind(
  db: D1Database,
  eventId: number,
  errorKind: ErrorKind,
): Promise<void> {
  const event = await db
    .prepare("SELECT question_id FROM answer_events WHERE id = ?")
    .bind(eventId)
    .first<{ question_id: string }>();

  if (!event) {
    return;
  }

  const totalAttempts = await countAnswerEvents(db);
  await db.batch([
    db.prepare("UPDATE answer_events SET error_kind = ? WHERE id = ?").bind(errorKind, eventId),
    db
      .prepare(
        `UPDATE remediation_queue
         SET error_kind = ?, due_at_attempt = ?,
             forced_option_id = CASE WHEN ? = 'confusion' THEN forced_option_id ELSE NULL END
         WHERE question_id = ? AND resolved = 0`,
      )
      .bind(
        errorKind,
        totalAttempts + remediationDelayAttempts[errorKind],
        errorKind,
        event.question_id,
      ),
  ]);
}

async function countAnswerEvents(db: D1Database): Promise<number> {
  const record = await db
    .prepare("SELECT COUNT(*) AS total FROM answer_events")
    .first<{ total: number }>();
  return record?.total ?? 0;
}

async function loadProgressRecord(
  db: D1Database,
  questionId: string,
): Promise<ProgressRecord | null> {
  return db
    .prepare(`SELECT ${progressColumns} FROM question_progress WHERE question_id = ?`)
    .bind(questionId)
    .first<ProgressRecord>();
}

export async function recordAnswer(
  db: D1Database,
  question: Question,
  selectedOptionId: string,
  elapsedMs: number | null,
): Promise<AnswerResult> {
  const correct = isCorrectOption(question, selectedOptionId);
  const now = new Date();
  const record = await loadProgressRecord(db, question.id);
  const row: ProgressRow = record
    ? toProgressRow(record)
    : {
        questionId: question.id,
        level: question.level,
        domain: question.domain,
        correctCount: 0,
        attempts: 0,
        misses: 0,
        lastAnsweredAt: null,
        lastCorrectAt: null,
        dueAt: null,
        retentionStage: 0,
      };

  const wasMastered = row.correctCount >= masteryTarget;
  const totalAttempts = await countAnswerEvents(db);

  let counted = false;
  let errorKind: ErrorKind | null = null;
  let lapsed = false;
  let nextCorrectCount = row.correctCount;
  let nextRetentionStage = row.retentionStage;
  let nextLastCorrectAt = row.lastCorrectAt;
  let nextDue = row.dueAt;

  if (correct) {
    counted = canCountCorrect(row, now);

    if (counted) {
      if (wasMastered) {
        nextRetentionStage = row.retentionStage + 1;
      } else {
        nextCorrectCount = Math.min(row.correctCount + 1, masteryTarget);

        if (nextCorrectCount >= masteryTarget) {
          nextRetentionStage = 0;
        }
      }

      nextLastCorrectAt = toSqlDate(now);
      nextDue = nextDueAt(nextCorrectCount, nextRetentionStage, now);
    }
  } else {
    const missHistory = await db
      .prepare("SELECT selected_option_id FROM answer_events WHERE question_id = ? AND correct = 0")
      .bind(question.id)
      .all<{ selected_option_id: string }>();
    const priorMisses = (missHistory.results ?? []).map(
      (missRecord) => missRecord.selected_option_id,
    );

    errorKind = classifyMiss({
      correctCount: row.correctCount,
      elapsedMs,
      priorMissCount: priorMisses.length,
      sameOptionMissedBefore: priorMisses.includes(selectedOptionId),
    });

    if (wasMastered) {
      lapsed = true;
      nextCorrectCount = masteryTarget - 1;
      nextRetentionStage = 0;
    }

    nextDue = toSqlDate(now);
  }

  const statements = [
    db
      .prepare(
        `INSERT INTO question_progress (
          question_id, level, domain, correct_count, attempts, misses,
          last_answered_at, last_correct_at, due_at, retention_stage
        )
        VALUES (?, ?, ?, ?, ?, ?, datetime('now'), ?, ?, ?)
        ON CONFLICT(question_id) DO UPDATE SET
          correct_count = excluded.correct_count,
          attempts = excluded.attempts,
          misses = excluded.misses,
          last_answered_at = excluded.last_answered_at,
          last_correct_at = excluded.last_correct_at,
          due_at = excluded.due_at,
          retention_stage = excluded.retention_stage`,
      )
      .bind(
        question.id,
        question.level,
        question.domain,
        nextCorrectCount,
        row.attempts + 1,
        row.misses + (correct ? 0 : 1),
        nextLastCorrectAt,
        nextDue,
        nextRetentionStage,
      ),
    db
      .prepare(
        `INSERT INTO answer_events (question_id, level, domain, selected_option_id, correct, error_kind, elapsed_ms)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(
        question.id,
        question.level,
        question.domain,
        selectedOptionId,
        correct ? 1 : 0,
        errorKind,
        elapsedMs,
      ),
  ];

  if (correct) {
    statements.push(
      db
        .prepare("UPDATE remediation_queue SET resolved = 1 WHERE question_id = ? AND resolved = 0")
        .bind(question.id),
    );
  } else if (errorKind) {
    // 再誤答は既存の処方を混同扱いに引き上げ、なければ新規予約する。
    statements.push(
      db
        .prepare(
          `UPDATE remediation_queue
           SET error_kind = 'confusion', forced_option_id = ?, due_at_attempt = ?
           WHERE question_id = ? AND resolved = 0`,
        )
        .bind(
          selectedOptionId,
          totalAttempts + 1 + remediationDelayAttempts.confusion,
          question.id,
        ),
      db
        .prepare(
          `INSERT INTO remediation_queue (question_id, error_kind, forced_option_id, due_at_attempt)
           SELECT ?, ?, ?, ?
           WHERE NOT EXISTS (
             SELECT 1 FROM remediation_queue WHERE question_id = ? AND resolved = 0
           )`,
        )
        .bind(
          question.id,
          errorKind,
          errorKind === "confusion" ? selectedOptionId : null,
          totalAttempts + 1 + remediationDelayAttempts[errorKind],
          question.id,
        ),
    );
  }

  const results = await db.batch(statements);
  const eventId = results[1]?.meta.last_row_id ?? null;

  const streak = nextStreakState(await loadStreakState(db), correct);
  await saveStreakState(db, streak);

  return {
    correct,
    counted,
    errorKind,
    wasRetentionCheck: wasMastered,
    lapsed,
    nextDueAt: nextDue,
    eventId,
    streak,
  };
}

export type ClarityVerdict = "clear" | "unclear";

export type GapEntry = {
  id: number;
  questionId: string;
  note: string | null;
  createdAt: string;
};

type GapRecord = {
  id: number;
  question_id: string;
  note: string | null;
  created_at: string;
};

export async function recordClarityFeedback(
  db: D1Database,
  questionId: string,
  verdict: ClarityVerdict,
  note: string | null,
): Promise<void> {
  const statements = [
    db
      .prepare("INSERT INTO explanation_feedback (question_id, verdict, note) VALUES (?, ?, ?)")
      .bind(questionId, verdict, note),
  ];

  // スッキリした時点で、その問題の未解消モヤモヤは解消済みにする。
  if (verdict === "clear") {
    statements.push(
      db
        .prepare(
          "UPDATE explanation_feedback SET resolved = 1 WHERE question_id = ? AND verdict = 'unclear' AND resolved = 0",
        )
        .bind(questionId),
    );
  }

  await db.batch(statements);
}

export async function loadOpenGaps(db: D1Database): Promise<GapEntry[]> {
  const result = await db
    .prepare(
      `SELECT id, question_id, note, created_at
       FROM explanation_feedback
       WHERE verdict = 'unclear' AND resolved = 0
       ORDER BY created_at DESC, id DESC`,
    )
    .all<GapRecord>();

  return (result.results ?? []).map((record) => ({
    id: record.id,
    questionId: record.question_id,
    note: record.note,
    createdAt: record.created_at,
  }));
}

export async function countOpenGaps(db: D1Database): Promise<number> {
  const record = await db
    .prepare(
      "SELECT COUNT(*) AS total FROM explanation_feedback WHERE verdict = 'unclear' AND resolved = 0",
    )
    .first<{ total: number }>();
  return record?.total ?? 0;
}

export async function resolveGap(db: D1Database, id: number): Promise<void> {
  await db.prepare("UPDATE explanation_feedback SET resolved = 1 WHERE id = ?").bind(id).run();
}

export async function resetProgress(db: D1Database): Promise<void> {
  await db.batch([
    db.prepare("DELETE FROM answer_events"),
    db.prepare("DELETE FROM question_progress"),
    db.prepare("DELETE FROM remediation_queue"),
    db.prepare("DELETE FROM app_state"),
  ]);
  await saveStreakState(db, { current: 0, best: 0 });
}
