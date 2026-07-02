import type { StreakState } from "./types";

export function nextStreakState(previous: StreakState, correct: boolean): StreakState {
  if (!correct) {
    return {
      current: 0,
      best: previous.best,
    };
  }

  const current = previous.current + 1;

  return {
    current,
    best: Math.max(previous.best, current),
  };
}
