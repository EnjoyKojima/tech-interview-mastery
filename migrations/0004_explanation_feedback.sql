CREATE TABLE IF NOT EXISTS explanation_feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id TEXT NOT NULL,
  verdict TEXT NOT NULL CHECK (verdict IN ('clear', 'unclear')),
  note TEXT,
  resolved INTEGER NOT NULL DEFAULT 0 CHECK (resolved IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_explanation_feedback_open
  ON explanation_feedback (resolved, question_id);
