import {
  canCountCorrect,
  formScore,
  pickStream,
  recentQuestionExclusion,
  retentionDueQuestions,
  streamMix,
  type StreamMix,
} from "./scheduler";
import {
  domains,
  levels,
  masteryTarget,
  type LevelClearanceSummary,
  type DomainSummary,
  type Level,
  type LevelSummary,
  type ProgressRow,
  type Question,
  type RemediationEntry,
  type StreamKind,
} from "./types";

export function emptyProgressFor(question: Question): ProgressRow {
  return {
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
}

export function progressByQuestionId(rows: readonly ProgressRow[]): Map<string, ProgressRow> {
  return new Map(rows.map((row) => [row.questionId, row]));
}

export function progressFor(question: Question, rows: readonly ProgressRow[]): ProgressRow {
  return progressByQuestionId(rows).get(question.id) ?? emptyProgressFor(question);
}

export function isQuestionMastered(question: Question, rows: readonly ProgressRow[]): boolean {
  return progressFor(question, rows).correctCount >= masteryTarget;
}

export function isLevelMastered(
  level: Level,
  questions: readonly Question[],
  rows: readonly ProgressRow[],
): boolean {
  const levelQuestions = questions.filter((question) => question.level === level);
  return (
    levelQuestions.length > 0 &&
    levelQuestions.every((question) => isQuestionMastered(question, rows))
  );
}

export function currentLevel(questions: readonly Question[], rows: readonly ProgressRow[]): Level {
  for (const level of levels) {
    if (!isLevelMastered(level, questions, rows)) {
      return level;
    }
  }

  return levels[levels.length - 1];
}

export function buildLevelSummaries(
  questions: readonly Question[],
  rows: readonly ProgressRow[],
): LevelSummary[] {
  const activeLevel = currentLevel(questions, rows);

  return levels.map((level) => {
    const levelQuestions = questions.filter((question) => question.level === level);
    const masteryPoints = levelQuestions.reduce((sum, question) => {
      const correctCount = progressFor(question, rows).correctCount;
      return sum + Math.min(correctCount, masteryTarget);
    }, 0);

    return {
      level,
      totalQuestions: levelQuestions.length,
      masteredQuestions: levelQuestions.filter((question) => isQuestionMastered(question, rows))
        .length,
      masteryPoints,
      requiredPoints: levelQuestions.length * masteryTarget,
      unlocked: level <= activeLevel,
      current: level === activeLevel,
    };
  });
}

export function buildLevelClearanceSummary(
  level: Level,
  questions: readonly Question[],
  rows: readonly ProgressRow[],
): LevelClearanceSummary {
  const levelQuestions = questions.filter((question) => question.level === level);
  const missingCounts = levelQuestions.map((question) =>
    Math.max(0, masteryTarget - progressFor(question, rows).correctCount),
  );

  return {
    level,
    totalQuestions: levelQuestions.length,
    masteredQuestions: missingCounts.filter((missing) => missing === 0).length,
    remainingQuestions: missingCounts.filter((missing) => missing > 0).length,
    remainingCorrectAnswers: missingCounts.reduce((sum, missing) => sum + missing, 0),
    oneAwayQuestions: missingCounts.filter((missing) => missing === 1).length,
    twoAwayQuestions: missingCounts.filter((missing) => missing === 2).length,
    threeAwayQuestions: missingCounts.filter((missing) => missing === 3).length,
  };
}

export function playableQuestions(
  questions: readonly Question[],
  rows: readonly ProgressRow[],
): Question[] {
  const activeLevel = currentLevel(questions, rows);
  return questions.filter(
    (question) => question.level === activeLevel && !isQuestionMastered(question, rows),
  );
}

export function reviewQuestions(
  questions: readonly Question[],
  rows: readonly ProgressRow[],
): Question[] {
  return questions
    .filter((question) => {
      const progress = progressFor(question, rows);
      return progress.misses > 0 && !isQuestionMastered(question, rows);
    })
    .toSorted((left, right) => {
      const leftProgress = progressFor(left, rows);
      const rightProgress = progressFor(right, rows);
      return (
        rightProgress.misses - leftProgress.misses ||
        leftProgress.correctCount - rightProgress.correctCount
      );
    });
}

export function pickNextQuestion(
  candidates: readonly Question[],
  rows: readonly ProgressRow[],
  randomInt: (maxExclusive: number) => number,
): Question | null {
  if (candidates.length === 0) {
    return null;
  }

  const lowestCorrectCount = Math.min(
    ...candidates.map((question) => progressFor(question, rows).correctCount),
  );
  const weakest = candidates.filter(
    (question) => progressFor(question, rows).correctCount === lowestCorrectCount,
  );
  return weakest[randomInt(weakest.length)] ?? null;
}

export type PickedQuestion = {
  question: Question;
  stream: StreamKind;
  forcedOptionId: string | null;
  mix: StreamMix | null;
  score: number | null;
  // 現レベルが全問間隔待ちのとき、先取り出題しているレベル(通常は null)。
  previewLevel: Level | null;
};

// 今正解すれば加算される問題だけに絞る。
export function countableQuestions(
  candidates: readonly Question[],
  rows: readonly ProgressRow[],
  now: Date,
): Question[] {
  return candidates.filter((question) => canCountCorrect(progressFor(question, rows), now));
}

export function pickAdaptiveQuestion(input: {
  questions: readonly Question[];
  rows: readonly ProgressRow[];
  recentEvents: readonly { questionId: string; correct: boolean }[];
  remediation: RemediationEntry | null;
  randomInt: (maxExclusive: number) => number;
  now: Date;
}): PickedQuestion | null {
  const { questions, rows, recentEvents, remediation, randomInt, now } = input;
  const score = formScore(recentEvents.map((event) => event.correct));
  const mix = streamMix(score);

  if (remediation) {
    const question = questions.find((candidate) => candidate.id === remediation.questionId);

    if (question) {
      return {
        question,
        stream: "remediation",
        forcedOptionId: remediation.errorKind === "confusion" ? remediation.forcedOptionId : null,
        mix,
        score,
        previewLevel: null,
      };
    }
  }

  const recentIds = new Set(
    recentEvents.slice(0, recentQuestionExclusion).map((event) => event.questionId),
  );
  const notRecent = (question: Question) => !recentIds.has(question.id);
  const retention = retentionDueQuestions(questions, rows, now).filter(notRecent);
  const revenge = countableQuestions(reviewQuestions(questions, rows), rows, now).filter(notRecent);
  const revengeIds = new Set(revenge.map((question) => question.id));
  const fresh = countableQuestions(playableQuestions(questions, rows), rows, now).filter(
    (question) => !revengeIds.has(question.id) && notRecent(question),
  );

  // 現レベルが全問間隔待ちなら、上のレベルから加算可能な問題を先取りする。
  const activeLevel = currentLevel(questions, rows);
  let previewLevel: Level | null = null;
  let newPool = fresh;

  if (fresh.length === 0) {
    for (const level of levels) {
      if (level <= activeLevel) {
        continue;
      }

      const pool = countableQuestions(
        questions.filter(
          (question) => question.level === level && !isQuestionMastered(question, rows),
        ),
        rows,
        now,
      ).filter(notRecent);

      if (pool.length > 0) {
        previewLevel = level;
        newPool = pool;
        break;
      }
    }
  }

  const pools: Record<"new" | "revenge" | "retention", Question[]> = {
    new: newPool,
    revenge,
    retention,
  };
  const preferred = pickStream(mix, randomInt(100));
  const fallbackOrder: ("new" | "revenge" | "retention")[] = [
    preferred,
    "new",
    "revenge",
    "retention",
  ];

  for (const stream of fallbackOrder) {
    const pool = pools[stream];

    if (pool.length === 0) {
      continue;
    }

    const question = stream === "new" ? pickNextQuestion(pool, rows, randomInt) : (pool[0] ?? null);

    if (question) {
      return {
        question,
        stream,
        forcedOptionId: null,
        mix,
        score,
        previewLevel: stream === "new" ? previewLevel : null,
      };
    }
  }

  // どのストリームも加算可能な候補がない場合の最終手段:
  // 加算はされないが、現レベルの残り問題を出す(進捗ゼロで止めない)。
  const anyPlayable = playableQuestions(questions, rows);
  const question = pickNextQuestion(anyPlayable, rows, randomInt);
  return question
    ? { question, stream: "new", forcedOptionId: null, mix, score, previewLevel: null }
    : null;
}

export function buildDomainSummaries(
  questions: readonly Question[],
  rows: readonly ProgressRow[],
): DomainSummary[] {
  return domains.map((domain) => {
    const domainQuestions = questions.filter((question) => question.domain === domain);
    const domainProgress = domainQuestions.map((question) => progressFor(question, rows));
    const attempts = domainProgress.reduce((sum, row) => sum + row.attempts, 0);
    const misses = domainProgress.reduce((sum, row) => sum + row.misses, 0);
    const correct = attempts - misses;
    const masteryPoints = domainProgress.reduce(
      (sum, row) => sum + Math.min(row.correctCount, masteryTarget),
      0,
    );
    const tagScores = new Map<string, number>();

    for (const question of domainQuestions) {
      const progress = progressFor(question, rows);
      const score = progress.misses * 2 + Math.max(0, masteryTarget - progress.correctCount);

      for (const tag of question.tags) {
        tagScores.set(tag, (tagScores.get(tag) ?? 0) + score);
      }
    }

    const weakestTags = [...tagScores.entries()]
      .toSorted((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
      .slice(0, 3)
      .map(([tag]) => tag);

    return {
      domain,
      attempts,
      correct,
      accuracy: attempts === 0 ? null : correct / attempts,
      masteryPoints,
      requiredPoints: domainQuestions.length * masteryTarget,
      weakestTags,
    };
  });
}

export function totalMasteryPoints(
  questions: readonly Question[],
  rows: readonly ProgressRow[],
): number {
  return questions.reduce(
    (sum, question) => sum + Math.min(progressFor(question, rows).correctCount, masteryTarget),
    0,
  );
}

export function nextFocus(
  questions: readonly Question[],
  rows: readonly ProgressRow[],
): Question | null {
  return pickNextQuestion(playableQuestions(questions, rows), rows, () => 0);
}

export function assertQuestionBank(questions: readonly Question[]): void {
  const ids = new Set<string>();

  for (const question of questions) {
    if (ids.has(question.id)) {
      throw new Error(`Duplicate question id: ${question.id}`);
    }

    ids.add(question.id);

    if (question.distractors.length < 5) {
      throw new Error(`${question.id} must have at least five distractors`);
    }

    const optionIds = new Set([
      question.correct.id,
      ...(question.corrects ?? []).map((option) => option.id),
    ]);

    if (optionIds.size !== 1 + (question.corrects?.length ?? 0)) {
      throw new Error(`${question.id} has duplicate correct option ids`);
    }
  }

  for (const level of levels) {
    const count = questions.filter((question) => question.level === level).length;

    if (count < 10) {
      throw new Error(`Level ${level} must have at least 10 questions, found ${count}`);
    }
  }
}
