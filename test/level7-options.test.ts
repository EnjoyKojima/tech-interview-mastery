import { describe, expect, it } from "vitest";
import { additionalQuestions } from "../src/additional-questions";
import { questions } from "../src/questions";

const sourceQuestions = additionalQuestions.filter((question) => question.level === 7);
const level7Questions = questions.filter((question) => question.level === 7);

describe("level 7 answer options", () => {
  it("replaces every source distractor with a deliberate near-miss", () => {
    const sourceById = new Map(sourceQuestions.map((question) => [question.id, question]));

    expect(level7Questions).toHaveLength(20);

    for (const question of level7Questions) {
      const source = sourceById.get(question.id);

      expect(source).toBeDefined();
      expect(question.distractors).toHaveLength(5);
      expect(
        question.distractors.every(
          (option, index) => option.text !== source?.distractors[index]?.text,
        ),
      ).toBe(true);
      expect(new Set(question.distractors.map((option) => option.text)).size).toBe(5);
    }
  });

  it("varies the correct wording and avoids answer-length giveaways", () => {
    for (const question of level7Questions) {
      expect(question.corrects).toHaveLength(1);

      const lengths = [question.correct, ...(question.corrects ?? []), ...question.distractors].map(
        (option) => option.text.length,
      );
      const shortest = Math.min(...lengths);
      const longest = Math.max(...lengths);

      expect(shortest).toBeGreaterThanOrEqual(30);
      expect(longest / shortest).toBeLessThan(1.75);
    }
  });
});
