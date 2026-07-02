import { Hono } from "hono";
import type { Child } from "hono/jsx";
import { verifyBasicAuth, unauthorizedResponse } from "./auth";
import {
  loadProgress,
  loadStreakState,
  recordAnswer,
  resetCurrentStreak,
  resetProgress,
} from "./db";
import { buildChoices, correctOptions, cryptoRandomInt } from "./random";
import { questions } from "./questions";
import { styles } from "./styles";
import {
  buildDomainSummaries,
  buildLevelClearanceSummary,
  buildLevelSummaries,
  currentLevel,
  nextFocus,
  pickNextQuestion,
  playableQuestions,
  progressFor,
  reviewQuestions,
  totalMasteryPoints,
} from "./progress";
import {
  masteryTarget,
  type Domain,
  type DomainSummary,
  type LevelClearanceSummary,
  type LevelSummary,
  type ProgressRow,
  type Question,
  type StreakState,
} from "./types";

type AppBindings = {
  Bindings: Env;
};

const app = new Hono<AppBindings>();

app.use("*", async (context, next) => {
  const authorized = await verifyBasicAuth(
    context.req.header("Authorization") ?? null,
    envString(context.env, "BASIC_AUTH_USERNAME"),
    envString(context.env, "BASIC_AUTH_PASSWORD"),
  );

  if (!authorized) {
    return unauthorizedResponse();
  }

  await next();
});

app.get("/", async (context) => {
  await resetCurrentStreak(context.env.DB);
  const rows = await loadProgress(context.env.DB);
  return context.html(<HomePage rows={rows} />);
});

app.get("/play", async (context) => {
  const rows = await loadProgress(context.env.DB);
  const streak = await loadStreakState(context.env.DB);
  const question = pickNextQuestion(playableQuestions(questions, rows), rows, cryptoRandomInt);

  if (!question) {
    return context.html(<CompletePage rows={rows} />);
  }

  return context.html(<QuestionPage mode="play" question={question} rows={rows} streak={streak} />);
});

app.get("/review", async (context) => {
  const rows = await loadProgress(context.env.DB);
  const streak = await loadStreakState(context.env.DB);
  const reviewCandidates = reviewQuestions(questions, rows);
  const question = pickNextQuestion(
    reviewCandidates.length > 0 ? reviewCandidates : playableQuestions(questions, rows),
    rows,
    cryptoRandomInt,
  );

  if (!question) {
    return context.html(<CompletePage rows={rows} />);
  }

  return context.html(
    <QuestionPage mode="review" question={question} rows={rows} streak={streak} />,
  );
});

app.post("/answer", async (context) => {
  const body = await context.req.parseBody();
  const questionId = String(body.questionId ?? "");
  const selectedOptionId = String(body.optionId ?? "");
  const mode = body.mode === "review" ? "review" : "play";
  const question = questions.find((candidate) => candidate.id === questionId);

  if (!question || !selectedOptionId) {
    return context.redirect("/play");
  }

  const answer = await recordAnswer(context.env.DB, question, selectedOptionId);
  const rows = await loadProgress(context.env.DB);

  return context.html(
    <AnswerPage
      correct={answer.correct}
      mode={mode}
      question={question}
      rows={rows}
      selectedOptionId={selectedOptionId}
      streak={answer.streak}
    />,
  );
});

app.get("/status", async (context) => {
  await resetCurrentStreak(context.env.DB);
  const rows = await loadProgress(context.env.DB);
  return context.html(<StatusPage rows={rows} />);
});

app.get("/diagrams", (context) => {
  return context.html(<DiagramsPage />);
});

app.get("/diagrams/:id.svg", (context) => {
  const question = questions.find((candidate) => candidate.id === context.req.param("id"));

  if (!question?.diagram) {
    return context.notFound();
  }

  return context.body(diagramSvg(question), 200, {
    "Content-Type": "image/svg+xml; charset=UTF-8",
    "Cache-Control": "public, max-age=3600",
  });
});

app.get("/reset", (context) => {
  return context.html(<ResetPage />);
});

app.post("/reset", async (context) => {
  const body = await context.req.parseBody();

  if (body.confirm === "RESET") {
    await resetProgress(context.env.DB);
  }

  return context.redirect("/");
});

app.get("/healthz", (context) => context.text("ok"));

function Shell({ title, children }: { title: string; children: Child }) {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <style>{styles}</style>
      </head>
      <body>
        <div class="shell">
          <header class="topbar">
            <div class="topbar-inner">
              <a class="brand" href="/">
                <strong>Tech Interview Mastery</strong>
                <span>Webエンジニア基礎力</span>
              </a>
              <nav class="nav" aria-label="Main navigation">
                <a href="/play">解く</a>
                <a href="/review">復習</a>
                <a href="/status">現在地</a>
                <a href="/diagrams">図解</a>
              </nav>
            </div>
          </header>
          <main class="main">{children}</main>
        </div>
      </body>
    </html>
  );
}

function HomePage({ rows }: { rows: ProgressRow[] }) {
  const activeLevel = currentLevel(questions, rows);
  const levelSummaries = buildLevelSummaries(questions, rows);
  const domainSummaries = buildDomainSummaries(questions, rows);
  const focus = nextFocus(questions, rows);
  const totalPoints = totalMasteryPoints(questions, rows);
  const requiredPoints = questions.length * masteryTarget;
  const attempts = rows.reduce((sum, row) => sum + row.attempts, 0);
  const misses = rows.reduce((sum, row) => sum + row.misses, 0);

  return (
    <Shell title="Tech Interview Mastery">
      <div class="grid dashboard">
        <section class="panel">
          <span class="eyebrow">Current location</span>
          <h1 class="headline">Level {activeLevel} を攻略中</h1>
          <p class="lead">
            今は {focus ? domainLabel(focus.domain) : "全分野"} の
            {focus ? ` ${focus.tags.join(", ")}` : "仕上げ"} が次の焦点です。
          </p>
          <div class="actions">
            <a class="button primary" href="/play">
              次の問題
            </a>
            <a class="button" href="/review">
              苦手を復習
            </a>
          </div>
          <div class="stat-row">
            <div class="stat">
              <b>
                {totalPoints}/{requiredPoints}
              </b>
              <span>mastery points</span>
            </div>
            <div class="stat">
              <b>{attempts}</b>
              <span>total attempts</span>
            </div>
            <div class="stat">
              <b>{misses}</b>
              <span>misses logged</span>
            </div>
          </div>
        </section>
        <section class="panel flat">
          <h2 class="section-title">次に理解すること</h2>
          {focus ? (
            <div class="callout">
              <strong>{focus.prompt}</strong>
              <p class="muted">{focus.next}</p>
              <span class="badge">{domainLabel(focus.domain)}</span>
            </div>
          ) : (
            <div class="callout">
              <strong>全レベル完了</strong>
              <p class="muted">復習で弱いタグを潰すと、面接の説明がさらに安定します。</p>
            </div>
          )}
        </section>
      </div>
      <div class="grid dashboard" style="margin-top: 16px;">
        <section class="panel flat">
          <h2 class="section-title">Level gates</h2>
          <LevelList summaries={levelSummaries} />
        </section>
        <section class="panel flat">
          <h2 class="section-title">Weakness map</h2>
          <DomainList summaries={domainSummaries} />
        </section>
      </div>
    </Shell>
  );
}

function QuestionPage({
  mode,
  question,
  rows,
  streak,
}: {
  mode: "play" | "review";
  question: Question;
  rows: ProgressRow[];
  streak: StreakState;
}) {
  const choices = buildChoices(question);
  const progress = progressFor(question, rows);
  const clearance = buildLevelClearanceSummary(question.level, questions, rows);

  return (
    <Shell title={`Level ${question.level}: ${domainLabel(question.domain)}`}>
      <section class="question panel">
        <span class="eyebrow">
          Level {question.level} / {domainLabel(question.domain)} / {progress.correctCount}/
          {masteryTarget}
        </span>
        <StreakBadge streak={streak} />
        <h1>{question.prompt}</h1>
        <LevelClearanceCard summary={clearance} />
        <form method="post" action="/answer">
          <input type="hidden" name="questionId" value={question.id} />
          <input type="hidden" name="mode" value={mode} />
          <ol class="option-list">
            {choices.map((choice) => (
              <li class="option-item">
                <button class="option-button" type="submit" name="optionId" value={choice.id}>
                  {choice.text}
                </button>
              </li>
            ))}
          </ol>
          <div class="footer-actions">
            <a class="button" href="/">
              現在地へ戻る
            </a>
          </div>
        </form>
      </section>
    </Shell>
  );
}

function AnswerPage({
  correct,
  mode,
  question,
  rows,
  selectedOptionId,
  streak,
}: {
  correct: boolean;
  mode: "play" | "review";
  question: Question;
  rows: ProgressRow[];
  selectedOptionId: string;
  streak: StreakState;
}) {
  const progress = progressFor(question, rows);
  const selectedText =
    [...correctOptions(question), ...question.distractors].find(
      (choice) => choice.id === selectedOptionId,
    )?.text ?? "未選択";

  return (
    <Shell title={correct ? "正解" : "復習ポイント"}>
      <section class={`question panel result ${correct ? "correct" : "wrong"}`}>
        <span class={`badge ${correct ? "green" : "red"}`}>
          {correct ? "正解" : "復習ポイント"}
        </span>
        <StreakBadge streak={streak} />
        <h1>
          {correct
            ? "いい感じです。この理解は積み上がっています。"
            : "ここは伸びしろです。短く直して次へ行きましょう。"}
        </h1>
        <div class="callout">
          <p>
            <strong>あなたの回答:</strong> {selectedText}
          </p>
          <p>
            <strong>正解:</strong> {question.correct.text}
          </p>
          <p>{question.brief}</p>
        </div>
        <div class="stat-row">
          <div class="stat">
            <b>
              {progress.correctCount}/{masteryTarget}
            </b>
            <span>この問題の正解数</span>
          </div>
          <div class="stat">
            <b>{progress.attempts}</b>
            <span>attempts</span>
          </div>
          <div class="stat">
            <b>{progress.misses}</b>
            <span>misses</span>
          </div>
        </div>
        <details style="margin-top: 16px;">
          <summary>詳しく見る</summary>
          <div class="detail-list" style="margin-top: 12px;">
            <div class="callout">
              <strong>面接での答え方</strong>
              <p>{question.interview}</p>
            </div>
            <div class="callout">
              <strong>Webエンジニア実務との関係</strong>
              <p>{question.relevance}</p>
            </div>
            <div class="callout">
              <strong>次に理解すること</strong>
              <p>{question.next}</p>
            </div>
            {question.diagram ? <pre>{question.diagram}</pre> : null}
            {question.deeper.map((line) => (
              <div class="callout">{line}</div>
            ))}
          </div>
        </details>
        <div class="footer-actions">
          <a class="button primary" href={mode === "review" ? "/review" : "/play"}>
            次へ
          </a>
          <a class="button" href="/status">
            現在地を見る
          </a>
        </div>
      </section>
    </Shell>
  );
}

function StatusPage({ rows }: { rows: ProgressRow[] }) {
  const levelSummaries = buildLevelSummaries(questions, rows);
  const domainSummaries = buildDomainSummaries(questions, rows);
  const focus = nextFocus(questions, rows);

  return (
    <Shell title="現在地">
      <div class="grid dashboard">
        <section class="panel flat">
          <h1 class="section-title">現在地</h1>
          <LevelList summaries={levelSummaries} />
        </section>
        <section class="panel flat">
          <h2 class="section-title">苦手分野</h2>
          <DomainList summaries={domainSummaries} />
          {focus ? (
            <div class="callout" style="margin-top: 16px;">
              <strong>次の焦点</strong>
              <p>{focus.next}</p>
            </div>
          ) : null}
          <div class="footer-actions">
            <a class="button primary" href="/play">
              解く
            </a>
            <a class="button" href="/reset">
              リセット
            </a>
          </div>
        </section>
      </div>
    </Shell>
  );
}

function CompletePage({ rows }: { rows: ProgressRow[] }) {
  return (
    <Shell title="完了">
      <section class="question panel">
        <span class="badge green">Complete</span>
        <h1>全レベルの通常出題は完了しています。</h1>
        <p class="lead">ここからは復習でミスの多いタグを潰すと、説明の安定感が上がります。</p>
        <div class="footer-actions">
          <a class="button primary" href="/review">
            復習する
          </a>
          <a class="button" href="/status">
            現在地を見る
          </a>
        </div>
        <div style="margin-top: 16px;">
          <DomainList summaries={buildDomainSummaries(questions, rows)} />
        </div>
      </section>
    </Shell>
  );
}

function DiagramsPage() {
  const diagramQuestions = questions.filter((question) => question.diagram);

  return (
    <Shell title="図解">
      <section class="panel flat">
        <h1 class="section-title">図解</h1>
        <div class="grid">
          {diagramQuestions.map((question) => (
            <article class="diagram-card">
              <div class="level-head">
                <strong>{question.tags.join(", ")}</strong>
                <span class="badge">Level {question.level}</span>
              </div>
              <pre>{question.diagram}</pre>
              <div class="footer-actions">
                <a class="button" href={`/diagrams/${question.id}.svg`}>
                  SVGを開く
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}

function ResetPage() {
  return (
    <Shell title="リセット">
      <section class="question panel">
        <span class="badge red">Reset</span>
        <h1>進捗をリセットします。</h1>
        <p class="lead">D1に保存された正解数、ミス数、回答履歴を削除します。</p>
        <form method="post" action="/reset" class="footer-actions">
          <label class="option-item">
            <input type="text" name="confirm" placeholder="RESET" required />
          </label>
          <button class="danger" type="submit">
            リセット
          </button>
          <a class="button" href="/status">
            戻る
          </a>
        </form>
      </section>
    </Shell>
  );
}

function LevelList({ summaries }: { summaries: LevelSummary[] }) {
  return (
    <ol class="level-list">
      {summaries.map((summary) => (
        <li class="level-item">
          <div class="level-head">
            <strong>
              Level {summary.level}: {levelTitle(summary.level)}
            </strong>
            <span class={`badge ${summary.current ? "green" : summary.unlocked ? "" : "amber"}`}>
              {summary.current ? "current" : summary.unlocked ? "open" : "locked"}
            </span>
          </div>
          <div class="progress" aria-label={`Level ${summary.level} progress`}>
            <span style={widthStyle(summary.masteryPoints, summary.requiredPoints)} />
          </div>
          <p class="muted">
            {summary.masteryPoints}/{summary.requiredPoints} points · {summary.masteredQuestions}/
            {summary.totalQuestions} questions mastered
          </p>
        </li>
      ))}
    </ol>
  );
}

function DomainList({ summaries }: { summaries: DomainSummary[] }) {
  return (
    <ol class="domain-list">
      {summaries.map((summary) => (
        <li class="domain-item">
          <div class="domain-head">
            <strong>{domainLabel(summary.domain)}</strong>
            <span
              class={`badge ${summary.accuracy === null ? "" : summary.accuracy >= 0.75 ? "green" : "amber"}`}
            >
              {summary.accuracy === null ? "no data" : `${Math.round(summary.accuracy * 100)}%`}
            </span>
          </div>
          <div class="progress" aria-label={`${summary.domain} mastery`}>
            <span style={widthStyle(summary.masteryPoints, summary.requiredPoints)} />
          </div>
          <p class="muted">
            {summary.masteryPoints}/{summary.requiredPoints} points · focus:{" "}
            {summary.weakestTags.join(", ")}
          </p>
        </li>
      ))}
    </ol>
  );
}

function StreakBadge({ streak }: { streak: StreakState }) {
  if (streak.current <= 0) {
    return null;
  }

  return (
    <div class="streak" aria-label={`${streak.current} correct answer streak`}>
      <strong>{streak.current} streak</strong>
      <span>連続正解中 · best {streak.best}</span>
    </div>
  );
}

function LevelClearanceCard({ summary }: { summary: LevelClearanceSummary }) {
  return (
    <div class="clearance">
      <div>
        <strong>Level {summary.level} クリアまで</strong>
        <span>
          {summary.masteredQuestions}/{summary.totalQuestions}問 master
        </span>
      </div>
      <div>
        <b>{summary.remainingQuestions}</b>
        <span>未完了</span>
      </div>
      <div>
        <b>{summary.remainingCorrectAnswers}</b>
        <span>残り正解</span>
      </div>
      <div>
        <b>{summary.oneAwayQuestions}</b>
        <span>あと1回</span>
      </div>
      <div>
        <b>{summary.twoAwayQuestions}</b>
        <span>あと2回</span>
      </div>
      <div>
        <b>{summary.threeAwayQuestions}</b>
        <span>あと3回</span>
      </div>
    </div>
  );
}

function domainLabel(domain: Domain): string {
  const labels: Record<Domain, string> = {
    computer: "Computer Science",
    design: "Design",
    network: "Network",
    security: "Security",
  };

  return labels[domain];
}

function levelTitle(level: LevelSummary["level"]): string {
  const titles: Record<LevelSummary["level"], string> = {
    1: "CSの土台",
    2: "仕組みを追う",
    3: "境界を見分ける",
    4: "実務で設計する",
    5: "障害を説明する",
    6: "OS/DB/分散を深掘る",
    7: "面接で設計を守る",
  };

  return titles[level];
}

function widthStyle(value: number, max: number): string {
  const width = max === 0 ? 0 : Math.round((value / max) * 100);
  return `width: ${Math.max(0, Math.min(width, 100))}%`;
}

function diagramSvg(question: Question): string {
  const lines = (question.diagram ?? "").split("\n");
  const width = 820;
  const height = Math.max(180, 86 + lines.length * 28);
  const body = lines
    .map((line, index) => `<text x="36" y="${92 + index * 28}">${escapeXml(line)}</text>`)
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" rx="10" fill="#101827"/>
  <text x="36" y="46" fill="#93c5fd" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="18" font-weight="700">${escapeXml(question.tags.join(", "))}</text>
  <g fill="#e2e8f0" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="20">${body}</g>
</svg>`;
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export default app;

function envString(env: Env, key: string): string | undefined {
  const value = Reflect.get(env, key) as unknown;
  return typeof value === "string" ? value : undefined;
}
