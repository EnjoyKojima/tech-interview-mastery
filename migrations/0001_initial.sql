CREATE TABLE IF NOT EXISTS question_progress (
  question_id TEXT PRIMARY KEY,
  level INTEGER NOT NULL,
  domain TEXT NOT NULL,
  correct_count INTEGER NOT NULL DEFAULT 0 CHECK (correct_count >= 0 AND correct_count <= 3),
  attempts INTEGER NOT NULL DEFAULT 0,
  misses INTEGER NOT NULL DEFAULT 0,
  last_answered_at TEXT
);

CREATE TABLE IF NOT EXISTS answer_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id TEXT NOT NULL,
  level INTEGER NOT NULL,
  domain TEXT NOT NULL,
  selected_option_id TEXT NOT NULL,
  correct INTEGER NOT NULL CHECK (correct IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_answer_events_question_id ON answer_events (question_id);
CREATE INDEX IF NOT EXISTS idx_answer_events_created_at ON answer_events (created_at);
CREATE INDEX IF NOT EXISTS idx_question_progress_level ON question_progress (level);
