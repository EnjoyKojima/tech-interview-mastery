ALTER TABLE question_progress ADD COLUMN last_correct_at TEXT;
ALTER TABLE question_progress ADD COLUMN due_at TEXT;
ALTER TABLE question_progress ADD COLUMN retention_stage INTEGER NOT NULL DEFAULT 0;

ALTER TABLE answer_events ADD COLUMN error_kind TEXT;
ALTER TABLE answer_events ADD COLUMN elapsed_ms INTEGER;

CREATE TABLE IF NOT EXISTS remediation_queue (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id TEXT NOT NULL,
  error_kind TEXT NOT NULL CHECK (error_kind IN ('slip', 'confusion', 'unknown')),
  forced_option_id TEXT,
  due_at_attempt INTEGER NOT NULL,
  resolved INTEGER NOT NULL DEFAULT 0 CHECK (resolved IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_remediation_queue_open
  ON remediation_queue (resolved, due_at_attempt);

-- Backfill last_correct_at from answer history.
UPDATE question_progress
SET last_correct_at = (
  SELECT MAX(created_at)
  FROM answer_events
  WHERE answer_events.question_id = question_progress.question_id
    AND answer_events.correct = 1
);

-- Backfill due_at: mastered questions get their first retention check,
-- in-progress questions get their next countable-correct time.
UPDATE question_progress
SET due_at = CASE
  WHEN correct_count >= 3 THEN datetime(last_correct_at, '+2 days')
  WHEN correct_count = 2 THEN datetime(last_correct_at, '+12 hours')
  WHEN correct_count = 1 THEN datetime(last_correct_at, '+2 hours')
  ELSE NULL
END
WHERE last_correct_at IS NOT NULL;
