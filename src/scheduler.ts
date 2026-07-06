import type { ErrorKind, ProgressRow, Question } from "./types";
import { masteryTarget } from "./types";

// 閾値はすべて本番D1の回答履歴(2026-07-02〜07-06, 245回答)の実測に合わせている。
// 回答時間: 中央値17秒 / p25=8秒。セッション: 1日1〜4回、間隔1.5〜6時間。

// これより速い誤答は「読まずに答えた」領域(実測で下位25%)。
export const slipElapsedMs = 8_000;

// correct_count n → n+1 の加算に必要な、前回正解からの最短間隔(時間)。
// 一律1時間: 同一セッション連打は防ぎつつ、1日2〜3セッションでマスターに届く。
export const spacingGateHours = [0, 1, 1] as const;

// マスター後の保持チェック間隔(日)。stage 0から順に拡張。
// 現在のペース(1日13〜24問)なら25%混入で1日3〜6問の保持チェックを消化できる。
export const retentionIntervalDays = [2, 5, 14, 30] as const;

// /play でマスター済み問題の保持チェックを混ぜる確率(%)。
export const retentionMixPercent = 25;

// 調子スコアの参照窓。実測の1セッション回答数(直近は10〜14問)に合わせる。
export const formWindowSize = 10;

// 誤答種別ごとの再出題までの問題数。
export const remediationDelayAttempts: Record<ErrorKind, number> = {
  slip: 1,
  unknown: 3,
  confusion: 5,
};

// 同一問題の連続出題を防ぐ距離。
export const recentQuestionExclusion = 3;

export type StreamMix = {
  new: number;
  revenge: number;
  retention: number;
};

export function parseSqlDate(value: string): Date {
  return new Date(`${value.replace(" ", "T")}Z`);
}

export function toSqlDate(date: Date): string {
  return date.toISOString().slice(0, 19).replace("T", " ");
}

function addHours(date: Date, hours: number): Date {
  return new Date(date.getTime() + hours * 3_600_000);
}

export function isDue(row: ProgressRow, now: Date): boolean {
  return row.dueAt === null || parseSqlDate(row.dueAt).getTime() <= now.getTime();
}

// 正解したとき correct_count を加算してよいか。
// 未着手はいつでも可、以降は間隔ゲート(due_at)を過ぎている場合のみ。
export function canCountCorrect(row: ProgressRow, now: Date): boolean {
  if (row.correctCount === 0) {
    return true;
  }

  return isDue(row, now);
}

// 正解を加算した後の次の期日。マスター到達後は保持チェックの期日になる。
export function nextDueAt(newCorrectCount: number, retentionStage: number, now: Date): string {
  if (newCorrectCount >= masteryTarget) {
    const stage = Math.min(retentionStage, retentionIntervalDays.length - 1);
    return toSqlDate(addHours(now, retentionIntervalDays[stage] * 24));
  }

  const gate = spacingGateHours[Math.min(newCorrectCount, spacingGateHours.length - 1)];
  return toSqlDate(addHours(now, gate));
}

export function classifyMiss(input: {
  correctCount: number;
  elapsedMs: number | null;
  priorMissCount: number;
  sameOptionMissedBefore: boolean;
}): ErrorKind {
  if (input.priorMissCount > 0 || input.sameOptionMissedBefore) {
    return "confusion";
  }

  if (input.elapsedMs !== null && input.elapsedMs < slipElapsedMs && input.correctCount >= 2) {
    return "slip";
  }

  return "unknown";
}

// 直近の正答率。履歴が足りないうちは null。
export function formScore(recentCorrect: readonly boolean[]): number | null {
  if (recentCorrect.length < 5) {
    return null;
  }

  const window = recentCorrect.slice(0, formWindowSize);
  return window.filter(Boolean).length / window.length;
}

export function streamMix(score: number | null): StreamMix {
  if (score === null) {
    return { new: 60, revenge: 25, retention: 15 };
  }

  if (score >= 0.8) {
    return { new: 50, revenge: 20, retention: 30 };
  }

  if (score >= 0.5) {
    return { new: 40, revenge: 40, retention: 20 };
  }

  return { new: 25, revenge: 60, retention: 15 };
}

export function pickStream(mix: StreamMix, roll: number): "new" | "revenge" | "retention" {
  if (roll < mix.new) {
    return "new";
  }

  if (roll < mix.new + mix.revenge) {
    return "revenge";
  }

  return "retention";
}

export function retentionDueQuestions(
  questions: readonly Question[],
  rows: readonly ProgressRow[],
  now: Date,
): Question[] {
  const byId = new Map(rows.map((row) => [row.questionId, row]));

  return questions
    .filter((question) => {
      const row = byId.get(question.id);
      return (
        row !== undefined &&
        row.correctCount >= masteryTarget &&
        row.dueAt !== null &&
        parseSqlDate(row.dueAt).getTime() <= now.getTime()
      );
    })
    .toSorted((left, right) => {
      const leftDue = byId.get(left.id)?.dueAt ?? "";
      const rightDue = byId.get(right.id)?.dueAt ?? "";
      return leftDue.localeCompare(rightDue);
    });
}
