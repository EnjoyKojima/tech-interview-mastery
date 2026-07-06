import { describe, expect, it } from "vitest";
import { buildChoices, isCorrectOption } from "../src/random";
import { questions } from "../src/questions";
import {
  assertQuestionBank,
  buildDomainSummaries,
  buildLevelClearanceSummary,
  currentLevel,
  playableQuestions,
} from "../src/progress";
import { nextStreakState } from "../src/streak";
import { masteryTarget, type ProgressRow } from "../src/types";

describe("question bank", () => {
  it("has at least ten valid questions for every level", () => {
    expect(() => assertQuestionBank(questions)).not.toThrow();
  });

  it("builds four choices and always includes a correct answer", () => {
    const choices = buildChoices(questions[0], () => 0);
    expect(choices).toHaveLength(4);
    expect(choices.some((choice) => isCorrectOption(questions[0], choice.id))).toBe(true);
  });
});

describe("streaks", () => {
  it("increments on correct answers and resets the current streak on a miss", () => {
    const one = nextStreakState({ current: 0, best: 0 }, true);
    const two = nextStreakState(one, true);
    const missed = nextStreakState(two, false);

    expect(one).toEqual({ current: 1, best: 1 });
    expect(two).toEqual({ current: 2, best: 2 });
    expect(missed).toEqual({ current: 0, best: 2 });
  });
});

describe("progression", () => {
  it("keeps the learner in level 1 until every level 1 question reaches three correct answers", () => {
    const levelOneQuestions = questions.filter((question) => question.level === 1);
    const rows: ProgressRow[] = questions
      .filter((question) => question.level === 1)
      .slice(0, levelOneQuestions.length - 1)
      .map((question) => ({
        questionId: question.id,
        level: question.level,
        domain: question.domain,
        correctCount: masteryTarget,
        attempts: masteryTarget,
        misses: 0,
        lastAnsweredAt: null,
        lastCorrectAt: null,
        dueAt: null,
        retentionStage: 0,
      }));

    expect(currentLevel(questions, rows)).toBe(1);
    expect(playableQuestions(questions, rows)).toHaveLength(1);
  });

  it("unlocks level 2 after all level 1 questions are mastered", () => {
    const rows: ProgressRow[] = questions
      .filter((question) => question.level === 1)
      .map((question) => ({
        questionId: question.id,
        level: question.level,
        domain: question.domain,
        correctCount: masteryTarget,
        attempts: masteryTarget,
        misses: 0,
        lastAnsweredAt: null,
        lastCorrectAt: null,
        dueAt: null,
        retentionStage: 0,
      }));

    expect(currentLevel(questions, rows)).toBe(2);
  });

  it("summarizes how many answers remain to clear the level", () => {
    const levelOneQuestions = questions.filter((question) => question.level === 1);
    const rows: ProgressRow[] = levelOneQuestions.slice(0, 3).map((question, index) => ({
      questionId: question.id,
      level: question.level,
      domain: question.domain,
      correctCount: index,
      attempts: index,
      misses: 0,
      lastAnsweredAt: null,
      lastCorrectAt: null,
      dueAt: null,
      retentionStage: 0,
    }));

    expect(buildLevelClearanceSummary(1, questions, rows)).toMatchObject({
      totalQuestions: levelOneQuestions.length,
      masteredQuestions: 0,
      remainingQuestions: levelOneQuestions.length,
      remainingCorrectAnswers: levelOneQuestions.length * masteryTarget - 3,
      oneAwayQuestions: 1,
      twoAwayQuestions: 1,
      threeAwayQuestions: levelOneQuestions.length - 2,
    });
  });

  it("surfaces weak tags by misses and unmastered points", () => {
    const firstSecurity = questions.find((question) => question.domain === "security");

    if (!firstSecurity) {
      throw new Error("Expected a security question");
    }

    const rows: ProgressRow[] = [
      {
        questionId: firstSecurity.id,
        level: firstSecurity.level,
        domain: firstSecurity.domain,
        correctCount: 0,
        attempts: 3,
        misses: 3,
        lastAnsweredAt: null,
        lastCorrectAt: null,
        dueAt: null,
        retentionStage: 0,
      },
    ];

    const security = buildDomainSummaries(questions, rows).find(
      (summary) => summary.domain === "security",
    );
    expect(security?.weakestTags).toContain(firstSecurity.tags[0]);
  });
});
