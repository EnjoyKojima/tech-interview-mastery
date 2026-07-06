import type { Question } from "./types";

export type ExplanationEnrichment = {
  misconception?: string;
  flow?: string[];
  story?: string;
  nameOrigin?: string;
};

// 質問ID→解説強化データ。本体側に手書きのフィールドがある場合はそちらを優先する。
export const explanationEnrichments: Record<string, ExplanationEnrichment> = {};

export function withExplanationEnrichments(items: readonly Question[]): Question[] {
  return items.map((question) => {
    const enrichment = explanationEnrichments[question.id];

    if (!enrichment) {
      return question;
    }

    return {
      ...question,
      misconception: question.misconception ?? enrichment.misconception,
      flow: question.flow ?? enrichment.flow,
      story: question.story ?? enrichment.story,
      nameOrigin: question.nameOrigin ?? enrichment.nameOrigin,
    };
  });
}
