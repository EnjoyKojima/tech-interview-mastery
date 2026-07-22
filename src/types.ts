export const masteryTarget = 3;
export const levels = [1, 2, 3, 4, 5, 6, 7] as const;
export const domains = ["computer", "design", "network", "security"] as const;

export type Level = (typeof levels)[number];
export type Domain = (typeof domains)[number];

export type Option = {
  id: string;
  text: string;
  kind?: "trap";
  feedback?: string;
};

export type GlossaryEntry = {
  term: string;
  description: string;
};

export type Question = {
  id: string;
  level: Level;
  domain: Domain;
  tags: string[];
  prompt: string;
  correct: Option;
  corrects?: Option[];
  distractors: Option[];
  brief: string;
  interview: string;
  relevance: string;
  next: string;
  deeper: string[];
  glossary?: GlossaryEntry[];
  diagram?: string;
  // 「アクター: 行動」形式のステップ列。誰が何をどの順でするかを示す。
  flow?: string[];
  // 実害や内部動作が想像できる具体的な1シーン。
  story?: string;
  // 混同・逆向き理解など、ありがちな誤解の先回り訂正。
  misconception?: string;
  // 用語の語源・略語の展開。記憶のフックにする。
  nameOrigin?: string;
};

export type ProgressRow = {
  questionId: string;
  level: Level;
  domain: Domain;
  correctCount: number;
  attempts: number;
  misses: number;
  lastAnsweredAt: string | null;
  lastCorrectAt: string | null;
  dueAt: string | null;
  retentionStage: number;
};

export type ErrorKind = "slip" | "confusion" | "unknown";

export type StreamKind = "new" | "revenge" | "retention" | "remediation";

export type RemediationEntry = {
  id: number;
  questionId: string;
  errorKind: ErrorKind;
  forcedOptionId: string | null;
  dueAtAttempt: number;
};

export type LevelSummary = {
  level: Level;
  totalQuestions: number;
  masteredQuestions: number;
  masteryPoints: number;
  requiredPoints: number;
  unlocked: boolean;
  current: boolean;
};

export type LevelClearanceSummary = {
  level: Level;
  totalQuestions: number;
  masteredQuestions: number;
  remainingQuestions: number;
  remainingCorrectAnswers: number;
  oneAwayQuestions: number;
  twoAwayQuestions: number;
  threeAwayQuestions: number;
};

export type DomainSummary = {
  domain: Domain;
  attempts: number;
  correct: number;
  accuracy: number | null;
  masteryPoints: number;
  requiredPoints: number;
  weakestTags: string[];
};

export type StreakState = {
  current: number;
  best: number;
};
