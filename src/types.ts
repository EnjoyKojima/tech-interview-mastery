export const masteryTarget = 3;
export const levels = [1, 2, 3, 4, 5] as const;
export const domains = ["computer", "design", "network", "security"] as const;

export type Level = (typeof levels)[number];
export type Domain = (typeof domains)[number];

export type Option = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  level: Level;
  domain: Domain;
  tags: string[];
  prompt: string;
  correct: Option;
  distractors: Option[];
  brief: string;
  interview: string;
  relevance: string;
  next: string;
  deeper: string[];
  diagram?: string;
};

export type ProgressRow = {
  questionId: string;
  level: Level;
  domain: Domain;
  correctCount: number;
  attempts: number;
  misses: number;
  lastAnsweredAt: string | null;
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
