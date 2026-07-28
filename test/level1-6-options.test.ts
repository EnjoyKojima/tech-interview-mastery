import { describe, expect, it } from "vitest";
import { additionalQuestions } from "../src/additional-questions";
import { generatedQuestions } from "../src/generated-questions";
import { questions } from "../src/questions";

const sourceQuestions = [
  ...additionalQuestions.filter((question) => question.level <= 6),
  ...generatedQuestions.filter((question) => question.level <= 2),
];
const targetQuestions = questions.filter((question) => question.level <= 6);

describe("level 1-6 answer options", () => {
  it("replaces every distractor in the targeted question sets", () => {
    const finalById = new Map(targetQuestions.map((question) => [question.id, question]));

    expect(sourceQuestions).toHaveLength(110);

    for (const source of sourceQuestions) {
      const finalQuestion = finalById.get(source.id);

      expect(finalQuestion).toBeDefined();
      expect(finalQuestion?.distractors).toHaveLength(5);
      expect(
        finalQuestion?.distractors.every(
          (option, index) => option.text !== source.distractors[index]?.text,
        ),
      ).toBe(true);
      expect(new Set(finalQuestion?.distractors.map((option) => option.text)).size).toBe(5);
    }
  });

  it("does not reveal the correct answer through an extreme option-length difference", () => {
    expect(targetQuestions).toHaveLength(220);

    for (const question of targetQuestions) {
      const options = [question.correct, ...(question.corrects ?? []), ...question.distractors];
      const lengths = options.map((option) => option.text.length);
      const shortest = Math.min(...lengths);
      const longest = Math.max(...lengths);

      expect(new Set(options.map((option) => option.text)).size).toBe(options.length);
      expect(longest / shortest).toBeLessThan(2);
    }
  });
});
