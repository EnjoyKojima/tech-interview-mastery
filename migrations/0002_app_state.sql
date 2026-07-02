CREATE TABLE IF NOT EXISTS app_state (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO app_state (key, value)
VALUES ('current_streak', '0')
ON CONFLICT(key) DO NOTHING;

INSERT INTO app_state (key, value)
VALUES ('best_streak', '0')
ON CONFLICT(key) DO NOTHING;
