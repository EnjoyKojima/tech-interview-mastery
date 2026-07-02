export const styles = `
:root {
  color-scheme: light;
  --ink: #18212f;
  --muted: #5c6a78;
  --line: #d9e1e8;
  --paper: #f7f9fb;
  --surface: #ffffff;
  --blue: #2563eb;
  --green: #15803d;
  --amber: #b45309;
  --red: #b91c1c;
  --teal: #0f766e;
  --shadow: 0 12px 32px rgb(24 33 47 / 10%);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.55;
}

a {
  color: inherit;
}

.shell {
  min-height: 100vh;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: 1px solid var(--line);
  background: rgb(255 255 255 / 94%);
  backdrop-filter: blur(10px);
}

.topbar-inner,
.main {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 64px;
}

.brand {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.brand strong {
  font-size: 16px;
}

.brand span {
  color: var(--muted);
  font-size: 12px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.nav a,
.button,
button {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
  color: var(--ink);
  padding: 0 14px;
  font: inherit;
  font-weight: 650;
  text-decoration: none;
  cursor: pointer;
}

.button.primary {
  border-color: var(--blue);
  background: var(--blue);
  color: #ffffff;
}

.button.danger,
button.danger {
  border-color: #fecaca;
  color: var(--red);
}

.main {
  padding: 28px 0 56px;
}

.grid {
  display: grid;
  gap: 16px;
}

.dashboard {
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
  align-items: start;
}

.panel {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--shadow);
  padding: 18px;
}

.panel.flat {
  box-shadow: none;
}

.section-title {
  margin: 0 0 12px;
  font-size: 18px;
}

.eyebrow {
  color: var(--muted);
  font-size: 12px;
  font-weight: 750;
  letter-spacing: 0;
  text-transform: uppercase;
}

.headline {
  margin: 6px 0 8px;
  font-size: clamp(28px, 7vw, 44px);
  line-height: 1.05;
}

.lead {
  max-width: 680px;
  margin: 0;
  color: var(--muted);
  font-size: 16px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.stat-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 18px;
}

.stat {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 12px;
}

.stat b {
  display: block;
  font-size: 24px;
}

.stat span,
.muted {
  color: var(--muted);
}

.level-list,
.domain-list,
.option-list,
.detail-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.level-item,
.domain-item,
.option-item,
.callout,
.diagram-card {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #ffffff;
  padding: 14px;
}

.level-head,
.domain-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.badge {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  border-radius: 999px;
  padding: 0 9px;
  background: #e8f1ff;
  color: #174ea6;
  font-size: 12px;
  font-weight: 750;
}

.badge.green {
  background: #dcfce7;
  color: var(--green);
}

.badge.amber {
  background: #fef3c7;
  color: var(--amber);
}

.badge.red {
  background: #fee2e2;
  color: var(--red);
}

.streak {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border: 1px solid #fed7aa;
  border-radius: 8px;
  background: #fff7ed;
  color: #9a3412;
  margin-top: 12px;
  padding: 10px 12px;
}

.streak strong {
  font-size: 18px;
}

.streak span {
  color: #a16207;
  font-size: 13px;
  font-weight: 650;
}

.progress {
  overflow: hidden;
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: #edf2f7;
  margin-top: 10px;
}

.progress span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--teal);
}

.question {
  max-width: 860px;
  margin: 0 auto;
}

.question h1 {
  margin: 8px 0 18px;
  font-size: clamp(24px, 6vw, 36px);
  line-height: 1.18;
}

.option-item label {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  cursor: pointer;
}

.option-item input {
  width: 18px;
  height: 18px;
  margin-top: 3px;
  accent-color: var(--blue);
}

.result.correct {
  border-color: #bbf7d0;
}

.result.wrong {
  border-color: #fecaca;
}

details {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #ffffff;
  padding: 12px 14px;
}

summary {
  cursor: pointer;
  font-weight: 750;
}

pre {
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #101827;
  color: #e2e8f0;
  padding: 14px;
  line-height: 1.45;
}

.footer-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
}

@media (max-width: 800px) {
  .topbar-inner {
    align-items: flex-start;
    flex-direction: column;
    padding: 12px 0;
  }

  .dashboard,
  .stat-row {
    grid-template-columns: 1fr;
  }
}
`;
