import { describe, expect, it } from "vitest";
import {
  assertMasteryChallengeBank,
  challengeQuestionsForLevel,
  isCorrectChallengeOption,
  masteryChallengeQuestions,
  masteryChallengeSize,
  pickMasteryChallenge,
} from "../src/mastery-challenges";
import { levels } from "../src/types";

describe("mastery challenge bank", () => {
  it("provides eight valid application questions for every level", () => {
    expect(() => assertMasteryChallengeBank()).not.toThrow();
    expect(masteryChallengeQuestions).toHaveLength(levels.length * 8);

    for (const level of levels) {
      expect(challengeQuestionsForLevel(level)).toHaveLength(8);
    }
  });

  it("uses every correct option id within each level instead of exposing a fixed pattern", () => {
    for (const level of levels) {
      const correctOptionIds = new Set(
        challengeQuestionsForLevel(level).map((question) => question.correctOptionId),
      );
      expect(correctOptionIds).toEqual(new Set(["option-a", "option-b", "option-c", "option-d"]));
    }
  });

  it("does not make the correct answer systematically longest or shortest", () => {
    for (const level of levels) {
      const levelQuestions = challengeQuestionsForLevel(level);
      const longestCorrect = levelQuestions.filter((question) => {
        const correctLength =
          question.options.find((option) => option.id === question.correctOptionId)?.text.length ??
          0;
        return correctLength === Math.max(...question.options.map((option) => option.text.length));
      });
      const shortestCorrect = levelQuestions.filter((question) => {
        const correctLength =
          question.options.find((option) => option.id === question.correctOptionId)?.text.length ??
          0;
        return correctLength === Math.min(...question.options.map((option) => option.text.length));
      });

      expect(
        longestCorrect.length,
        `Level ${level} longest correct options: ${longestCorrect.map((question) => question.id).join(", ")}`,
      ).toBeLessThanOrEqual(levelQuestions.length / 2);
      expect(
        shortestCorrect.length,
        `Level ${level} shortest correct options: ${shortestCorrect.map((question) => question.id).join(", ")}`,
      ).toBeLessThanOrEqual(levelQuestions.length / 2);
    }
  });

  it("picks five unique questions from the requested level", () => {
    const picked = pickMasteryChallenge(6, (maxExclusive) => maxExclusive - 1);

    expect(picked).toHaveLength(masteryChallengeSize);
    expect(new Set(picked.map((question) => question.id))).toHaveLength(masteryChallengeSize);
    expect(picked.every((question) => question.level === 6)).toBe(true);
  });

  it("checks answers against each question's configured correct option", () => {
    const [question] = challengeQuestionsForLevel(1);

    if (!question) {
      throw new Error("Expected a Level 1 mastery challenge question");
    }

    expect(isCorrectChallengeOption(question, question.correctOptionId)).toBe(true);
    expect(
      question.options
        .filter((option) => option.id !== question.correctOptionId)
        .every((option) => !isCorrectChallengeOption(question, option.id)),
    ).toBe(true);
  });
});
