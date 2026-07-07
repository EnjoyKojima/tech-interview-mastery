import type { Domain, Level, Question } from "./types";

export type ExplanationEnrichment = {
  misconception?: string;
  flow?: string[];
  story?: string;
  nameOrigin?: string;
};

const explanationTargetLevels = new Set<Level>([1, 2, 3, 4, 5]);

const misconceptionFrames: Record<Domain, string> = {
  computer:
    "この問題は用語の暗記ではなく、処理がどこで起き、データがどこに置かれ、どのタイミングで状態が変わるかを問うています。",
  design:
    "この問題は設計用語の名前ではなく、変更しやすさ、責務の境界、利用者との契約のどれを守る話かを問うています。",
  network:
    "この問題は通信名の暗記ではなく、どの層で、どの登場人物が、何を送受信しているかを問うています。",
  security:
    "この問題は対策名の暗記ではなく、攻撃者が何をできて、何を守る必要があり、どこで防ぐかを問うています。",
};

const storyFrames: Record<Domain, (question: Question) => string> = {
  computer: (question) =>
    `障害調査や性能改善で、ログ・メモリ・CPU・DBのどこを見るかを決める場面です。${question.relevance} この問題の軸を使うと、似た用語を丸暗記するのではなく、実行中のシステムで何が起きているかから説明できます。`,
  design: (question) =>
    `新機能追加やリファクタリングのレビューで、どこを変えるべきかを判断する場面です。${question.relevance} この問題の軸を使うと、ただ抽象化するのではなく、将来の変更で壊れにくい境界を説明できます。`,
  network: (question) =>
    `ユーザーから「ページが遅い」「つながらない」と言われたとき、DNS、接続、HTTP、キャッシュ、プロキシのどこを疑うかを切り分ける場面です。${question.relevance} この問題の軸を使うと、通信の順番に沿って原因を説明できます。`,
  security: (question) =>
    `ログイン、入力フォーム、外部連携、管理画面をレビューする場面です。${question.relevance} この問題の軸を使うと、攻撃者の能力と守る資産を分けて、対策がどこに効くかを説明できます。`,
};

export function defaultExplanationEnrichment(question: Question): ExplanationEnrichment | null {
  if (!explanationTargetLevels.has(question.level)) {
    return null;
  }

  return {
    misconception: defaultMisconception(question),
    flow: defaultFlow(question),
    story: storyFrames[question.domain](question),
  };
}

function defaultMisconception(question: Question): string {
  return `${misconceptionFrames[question.domain]}正解の芯は「${question.correct.text}」です。違う選択肢は、対象の層・責務・攻撃者の能力・データの寿命のどこかを取り違えていることが多いです。`;
}

function defaultFlow(question: Question): string[] {
  const tagText = question.tags.join(", ");

  switch (question.domain) {
    case "computer":
      return [
        `あなた: 問題文から ${tagText} がCPU・メモリ・OS・DB・実行時間のどの話かを切り分ける`,
        "システム: 関係するデータの置き場所、寿命、所有者、実行タイミングを確認する",
        `判断: 正解の「${question.correct.text}」に合う説明を選ぶ`,
        `面接回答: ${question.interview}`,
      ];
    case "design":
      return [
        `あなた: 問題文から ${tagText} が責務・依存・契約・変更容易性のどれを問うかを見る`,
        "設計対象: 何が変わりやすく、何を安定させたいかを分ける",
        `判断: 正解の「${question.correct.text}」に合う説明を選ぶ`,
        `面接回答: ${question.interview}`,
      ];
    case "network":
      return [
        `あなた: 問題文から ${tagText} がDNS・IP・TCP/TLS・HTTP・キャッシュのどの層かを見る`,
        "通信経路: クライアント、ブラウザ、リゾルバ、プロキシ、サーバの誰が動くかを並べる",
        `判断: 正解の「${question.correct.text}」に合う説明を選ぶ`,
        `面接回答: ${question.interview}`,
      ];
    case "security":
      return [
        `あなた: 問題文から ${tagText} で守る資産と攻撃者の能力を分ける`,
        "攻撃経路: 入力、Cookie、権限、外部連携、ブラウザ挙動のどこが悪用されるかを見る",
        `判断: 正解の「${question.correct.text}」に合う説明を選ぶ`,
        `面接回答: ${question.interview}`,
      ];
  }
}
