import type { Option, Question } from "./types";

const supportedLevels = new Set([1, 2, 3, 4, 5, 6, 7]);
const minimumLengthRatio = 0.72;

const shortExpansions = [
  "という説明",
  "という判断である",
  "という前提に立つ説明である",
  "という前提と適用範囲を含む説明である",
] as const;

const evaluationDetails = [
  "前提条件",
  "処理の責務",
  "実行順序",
  "例外時の挙動",
  "適用範囲",
  "運用上の影響",
  "データの寿命",
  "信頼境界",
  "障害時の挙動",
  "観測方法",
  "利用者への影響",
  "実装コスト",
] as const;

function optionLength(option: Option): number {
  return [...option.text].length;
}

function expandToFloor(option: Option, floor: number, seed: number): Option {
  const deficit = floor - optionLength(option);

  if (deficit <= 0) {
    return option;
  }

  const shortExpansion = shortExpansions.find((expansion) => [...expansion].length >= deficit);
  if (shortExpansion) {
    return { ...option, text: `${option.text}${shortExpansion}` };
  }

  const details: string[] = [];
  let detailIndex = seed % evaluationDetails.length;
  let expansion = "";

  while (
    [...`${option.text}${expansion}`].length < floor &&
    details.length < evaluationDetails.length
  ) {
    details.push(evaluationDetails[detailIndex]);
    detailIndex = (detailIndex + 1) % evaluationDetails.length;
    expansion = `。この説明では、${details.join("、")}まで含めて判断する`;
  }

  return { ...option, text: `${option.text}${expansion}` };
}

function trapOption(option: Option): Option {
  return {
    ...option,
    kind: "trap",
    feedback:
      "引っかかったね。この選択肢は一部だけを見ると正しそうですが、前提や適用範囲をずらした引っかけです。",
  };
}

/**
 * 全レベルで、正解だけが長いという見た目の手掛かりを消す。
 * 意味を変えない補足文で極端に短い選択肢を整え、代表的な誤解を引っかけとして明示する。
 */
export function withBalancedOptions(items: readonly Question[]): Question[] {
  return items.map((question) => {
    if (!supportedLevels.has(question.level)) {
      return question;
    }

    const options = [question.correct, ...(question.corrects ?? []), ...question.distractors];
    const longest = Math.max(...options.map(optionLength));
    const floor = Math.ceil(longest * minimumLengthRatio);
    const trapIndex = question.distractors.reduce(
      (longestIndex, option, index, distractors) =>
        optionLength(option) > optionLength(distractors[longestIndex]) ? index : longestIndex,
      0,
    );
    let seed = 0;
    const balance = (option: Option): Option => expandToFloor(option, floor, seed++);

    const correct = balance(question.correct);
    const corrects = question.corrects?.map(balance);
    const longestCorrect = Math.max(optionLength(correct), ...(corrects ?? []).map(optionLength));
    const distractors = question.distractors.map((option, index) => {
      const target = index === trapIndex ? Math.max(floor, longestCorrect + 1) : floor;
      const balanced = expandToFloor(option, target, seed++);
      return index === trapIndex ? trapOption(balanced) : balanced;
    });

    return {
      ...question,
      correct,
      ...(corrects ? { corrects } : {}),
      distractors,
    };
  });
}
