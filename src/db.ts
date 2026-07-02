import { nextStreakState } from "./streak";
import { isCorrectOption } from "./random";
import type { Domain, Level, ProgressRow, Question, StreakState } from "./types";

type ProgressRecord = {
  question_id: string;
  level: number;
  domain: string;
  correct_count: number;
  attempts: number;
  misses: number;
  last_answered_at: string | null;
};

type StateRecord = {
  key: string;
  value: string;
};

export type AnswerResult = {
  correct: boolean;
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
  };
}

export async function loadProgress(db: D1Database): Promise<ProgressRow[]> {
  const result = await db
    .prepare(
      `SELECT question_id, level, domain, correct_count, attempts, misses, last_answered_at
       FROM question_progress`,
    )
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

export async function recordAnswer(
  db: D1Database,
  question: Question,
  selectedOptionId: string,
): Promise<AnswerResult> {
  const correct = isCorrectOption(question, selectedOptionId) ? 1 : 0;

  await db.batch([
    db
      .prepare(
        `INSERT INTO question_progress (
          question_id,
          level,
          domain,
          correct_count,
          attempts,
          misses,
          last_answered_at
        )
        VALUES (?, ?, ?, CASE WHEN ? = 1 THEN 1 ELSE 0 END, 1, CASE WHEN ? = 1 THEN 0 ELSE 1 END, datetime('now'))
        ON CONFLICT(question_id) DO UPDATE SET
          correct_count = CASE
            WHEN ? = 1 THEN MIN(question_progress.correct_count + 1, 3)
            ELSE question_progress.correct_count
          END,
          attempts = question_progress.attempts + 1,
          misses = question_progress.misses + CASE WHEN ? = 1 THEN 0 ELSE 1 END,
          last_answered_at = datetime('now')`,
      )
      .bind(question.id, question.level, question.domain, correct, correct, correct, correct),
    db
      .prepare(
        `INSERT INTO answer_events (question_id, level, domain, selected_option_id, correct)
         VALUES (?, ?, ?, ?, ?)`,
      )
      .bind(question.id, question.level, question.domain, selectedOptionId, correct),
  ]);

  const streak = nextStreakState(await loadStreakState(db), correct === 1);
  await saveStreakState(db, streak);

  return {
    correct: correct === 1,
    streak,
  };
}

export async function resetProgress(db: D1Database): Promise<void> {
  await db.batch([
    db.prepare("DELETE FROM answer_events"),
    db.prepare("DELETE FROM question_progress"),
    db.prepare("DELETE FROM app_state"),
  ]);
  await saveStreakState(db, { current: 0, best: 0 });
}
