import { describe, expect, it } from "vitest";
import { questions } from "../src/questions";

const advancedQuestions = questions.filter((question) => question.level >= 6);

const abbreviations = [
  "0-RTT",
  "2PC (2相コミット)",
  "ACL（アクセス制御リスト）",
  "BBR",
  "BGP",
  "CAS（Compare-And-Swap）",
  "CDC",
  "CRDT",
  "CSRF",
  "DDD (ドメイン駆動設計)",
  "DDoS",
  "DNS rebinding",
  "HTTP/3",
  "L1/L2キャッシュ",
  "MESIプロトコル",
  "NUMA",
  "OSコマンドインジェクション",
  "PoP",
  "QUIC",
  "RTT",
  "SBOM",
  "SSRF",
  "TLB",
  "TLS 1.3",
  "TOCTOU",
  "ack (確認応答)",
  "mTLS（相互TLS認証）",
  "下流API",
  "任意コード実行（RCE）",
  "内部IP",
  "帯域幅遅延積（BDP）",
];

describe("level 6-7 glossary", () => {
  it("provides terminology for every advanced question", () => {
    expect(advancedQuestions).toHaveLength(40);
    expect(
      advancedQuestions
        .filter((question) => (question.glossary?.length ?? 0) < 4)
        .map((question) => question.id),
    ).toEqual([]);
  });

  it("shows a Japanese reading for every English term", () => {
    expect(
      advancedQuestions.flatMap((question) =>
        (question.glossary ?? [])
          .filter((entry) => /[A-Za-z_]/.test(entry.term) && !entry.reading)
          .map((entry) => `${question.id}: ${entry.term}`),
      ),
    ).toEqual([]);
  });

  it("expands the advanced abbreviations instead of leaving them unexplained", () => {
    const entries = new Map(
      advancedQuestions.flatMap((question) =>
        (question.glossary ?? []).map((entry) => [entry.term, entry]),
      ),
    );

    expect(abbreviations.filter((term) => !entries.get(term)?.fullForm)).toEqual([]);
  });
});
