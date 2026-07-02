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

  return 5;
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

    if (question.distractors.length !== 5) {
      throw new Error(`${question.id} must have exactly five distractors`);
    }
  }

  for (const level of levels) {
    const count = questions.filter((question) => question.level === level).length;

    if (count !== 10) {
      throw new Error(`Level ${level} must have 10 questions, found ${count}`);
    }
  }
}
