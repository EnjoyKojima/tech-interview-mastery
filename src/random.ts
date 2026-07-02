import type { Option, Question } from "./types";

export type RandomInt = (maxExclusive: number) => number;

export function cryptoRandomInt(maxExclusive: number): number {
  if (maxExclusive <= 0) {
    throw new Error("maxExclusive must be positive");
  }

  const values = new Uint32Array(1);
  crypto.getRandomValues(values);
  return values[0] % maxExclusive;
}

export function shuffle<T>(items: readonly T[], randomInt: RandomInt = cryptoRandomInt): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(index + 1);
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

export function pickMany<T>(
  items: readonly T[],
  count: number,
  randomInt: RandomInt = cryptoRandomInt,
): T[] {
  return shuffle(items, randomInt).slice(0, count);
}

export function correctOptions(question: Question): Option[] {
  return [question.correct, ...(question.corrects ?? [])];
}

export function isCorrectOption(question: Question, optionId: string): boolean {
  return correctOptions(question).some((option) => option.id === optionId);
}

export function buildChoices(question: Question, randomInt: RandomInt = cryptoRandomInt): Option[] {
  const [pickedCorrect] = pickMany(correctOptions(question), 1, randomInt);
  const pickedDistractors = pickMany(question.distractors, 3, randomInt);
  return shuffle([pickedCorrect ?? question.correct, ...pickedDistractors], randomInt);
}
