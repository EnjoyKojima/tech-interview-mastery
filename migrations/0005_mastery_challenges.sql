CREATE TABLE IF NOT EXISTS mastery_challenge_attempts (
  id TEXT PRIMARY KEY,
  level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 7),
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= total),
  total INTEGER NOT NULL CHECK (total > 0),
  passed INTEGER NOT NULL CHECK (passed IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS mastery_challenge_answer_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  attempt_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  selected_option_id TEXT NOT NULL,
  correct INTEGER NOT NULL CHECK (correct IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (attempt_id) REFERENCES mastery_challenge_attempts(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_mastery_challenge_attempts_level
  ON mastery_challenge_attempts (level, created_at);

CREATE INDEX IF NOT EXISTS idx_mastery_challenge_answers_question
  ON mastery_challenge_answer_events (question_id, selected_option_id);
