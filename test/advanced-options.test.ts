import { describe, expect, it } from "vitest";
import { questions } from "../src/questions";

describe("question options", () => {
  it("does not expose the answer as the longest option", () => {
    for (const question of questions) {
      const correctLengths = [question.correct, ...(question.corrects ?? [])].map(
        (option) => [...option.text].length,
      );
      const distractorLengths = question.distractors.map((option) => [...option.text].length);

      expect(Math.max(...correctLengths)).toBeLessThanOrEqual(Math.max(...distractorLengths));
    }
  });

  it("keeps every option within a balanced length band", () => {
    for (const question of questions) {
      const lengths = [question.correct, ...(question.corrects ?? []), ...question.distractors].map(
        (option) => [...option.text].length,
      );

      expect(Math.min(...lengths) / Math.max(...lengths)).toBeGreaterThanOrEqual(0.6);
    }
  });

  it("marks a trap option with dedicated feedback on every question", () => {
    for (const question of questions) {
      const traps = question.distractors.filter((option) => option.kind === "trap");

      expect(traps).toHaveLength(1);
      expect(traps[0].feedback).toContain("引っかかったね");
    }
  });
});
