import { describe, expect, it } from "vitest";
import {
  canCountCorrect,
  classifyMiss,
  formScore,
  nextDueAt,
  parseSqlDate,
  pickStream,
  streamMix,
  toSqlDate,
} from "../src/scheduler";
import type { ProgressRow } from "../src/types";

const baseRow: ProgressRow = {
  questionId: "q",
  level: 1,
  domain: "computer",
  correctCount: 0,
  attempts: 0,
  misses: 0,
  lastAnsweredAt: null,
  lastCorrectAt: null,
  dueAt: null,
  retentionStage: 0,
};

const now = parseSqlDate("2026-07-06 12:00:00");

describe("spacing gates", () => {
  it("always counts the first correct answer", () => {
    expect(canCountCorrect(baseRow, now)).toBe(true);
  });

  it("blocks a second correct answer inside the 2 hour gate", () => {
    const row = { ...baseRow, correctCount: 1, dueAt: "2026-07-06 13:00:00" };
    expect(canCountCorrect(row, now)).toBe(false);
  });

  it("counts again once the due time has passed", () => {
    const row = { ...baseRow, correctCount: 1, dueAt: "2026-07-06 11:00:00" };
    expect(canCountCorrect(row, now)).toBe(true);
  });

  it("schedules 2h, 12h, then retention gates", () => {
    expect(nextDueAt(1, 0, now)).toBe("2026-07-06 14:00:00");
    expect(nextDueAt(2, 0, now)).toBe("2026-07-07 00:00:00");
    expect(nextDueAt(3, 0, now)).toBe("2026-07-08 12:00:00");
    expect(nextDueAt(3, 1, now)).toBe("2026-07-11 12:00:00");
  });

  it("round-trips sql dates", () => {
    expect(toSqlDate(parseSqlDate("2026-07-06 01:02:03"))).toBe("2026-07-06 01:02:03");
  });
});

describe("miss classification", () => {
  it("marks fast misses on nearly mastered questions as slips", () => {
    expect(
      classifyMiss({
        correctCount: 2,
        elapsedMs: 4000,
        priorMissCount: 0,
        sameOptionMissedBefore: false,
      }),
    ).toBe("slip");
  });

  it("marks repeat misses as confusion", () => {
    expect(
      classifyMiss({
        correctCount: 1,
        elapsedMs: 30000,
        priorMissCount: 1,
        sameOptionMissedBefore: true,
      }),
    ).toBe("confusion");
  });

  it("marks first slow misses as unknown", () => {
    expect(
      classifyMiss({
        correctCount: 0,
        elapsedMs: 30000,
        priorMissCount: 0,
        sameOptionMissedBefore: false,
      }),
    ).toBe("unknown");
  });
});

describe("adaptive mix", () => {
  it("returns null score until five answers exist", () => {
    expect(formScore([true, true])).toBeNull();
    expect(formScore([true, true, false, true, true])).toBe(0.8);
  });

  it("shifts the mix by form", () => {
    expect(streamMix(0.9)).toEqual({ new: 50, revenge: 20, retention: 30 });
    expect(streamMix(0.6)).toEqual({ new: 40, revenge: 40, retention: 20 });
    expect(streamMix(0.3)).toEqual({ new: 25, revenge: 60, retention: 15 });
  });

  it("picks streams by roll", () => {
    const mix = streamMix(0.9);
    expect(pickStream(mix, 0)).toBe("new");
    expect(pickStream(mix, 55)).toBe("revenge");
    expect(pickStream(mix, 99)).toBe("retention");
  });
});
