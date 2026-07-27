import type { GlossaryEntry } from "./types";

type TermDetail = Pick<GlossaryEntry, "reading" | "fullForm">;

// Level 6〜7で登場する英語・略語を、音読できて展開形まで確認できるようにする。
// 同じ用語が複数の問題に出る場合も、ここで表記を一元管理する。
const advancedTermDetails: Record<string, TermDetail> = {
  "0-RTT": {
    reading: "ゼロ・アールティーティー",
    fullForm: "Zero Round-Trip Time",
  },
  "2PC (2相コミット)": {
    reading: "ツーピーシー（にそうコミット）",
    fullForm: "Two-Phase Commit",
  },
  "ACL（アクセス制御リスト）": {
    reading: "エーシーエル",
    fullForm: "Access Control List",
  },
  Anycast: { reading: "エニーキャスト" },
  BBR: {
    reading: "ビービーアール",
    fullForm: "Bottleneck Bandwidth and Round-trip propagation time",
  },
  BGP: { reading: "ビージーピー", fullForm: "Border Gateway Protocol" },
  "Bounded Context (境界づけられたコンテキスト)": {
    reading: "バウンデッド・コンテキスト",
  },
  "CAS（Compare-And-Swap）": {
    reading: "シーエーエス",
    fullForm: "Compare-And-Swap",
  },
  CDC: { reading: "シーディーシー", fullForm: "Change Data Capture" },
  CRDT: {
    reading: "シーアールディーティー",
    fullForm: "Conflict-free Replicated Data Type",
  },
  CSRF: {
    reading: "シーエスアールエフ",
    fullForm: "Cross-Site Request Forgery",
  },
  CUBIC: { reading: "キュービック" },
  "DDD (ドメイン駆動設計)": {
    reading: "ディーディーディー",
    fullForm: "Domain-Driven Design",
  },
  DDoS: {
    reading: "ディードス",
    fullForm: "Distributed Denial of Service",
  },
  "DNS rebinding": {
    reading: "ディーエヌエス・リバインディング",
    fullForm: "Domain Name System rebinding",
  },
  Gossipプロトコル: { reading: "ゴシップ・プロトコル" },
  "HTTP/3": {
    reading: "エイチティーティーピー・スリー",
    fullForm: "Hypertext Transfer Protocol version 3",
  },
  "Half-Open (半開状態)": { reading: "ハーフオープン（はんかいじょうたい）" },
  "Head-of-Lineブロッキング": { reading: "ヘッド・オブ・ライン・ブロッキング" },
  "L1/L2キャッシュ": {
    reading: "エルワン／エルツー・キャッシュ",
    fullForm: "Level 1 / Level 2 cache",
  },
  MESIプロトコル: {
    reading: "エムイーエスアイ・プロトコル",
    fullForm: "Modified, Exclusive, Shared, Invalid",
  },
  NUMA: {
    reading: "ヌーマ",
    fullForm: "Non-Uniform Memory Access",
  },
  OSコマンドインジェクション: {
    reading: "オーエス・コマンドインジェクション",
    fullForm: "Operating System command injection",
  },
  "Outbox Pattern": { reading: "アウトボックス・パターン" },
  PoP: { reading: "ポップ", fullForm: "Point of Presence" },
  "Prototype Pollution": { reading: "プロトタイプ・ポリューション" },
  QUIC: {
    reading: "クイック",
    fullForm: "略語ではなく固有名（初期名称 Quick UDP Internet Connections に由来）",
  },
  RTT: { reading: "アールティーティー", fullForm: "Round-Trip Time" },
  Raft: { reading: "ラフト" },
  SBOM: {
    reading: "エスボム",
    fullForm: "Software Bill of Materials",
  },
  SSRF: {
    reading: "エスエスアールエフ",
    fullForm: "Server-Side Request Forgery",
  },
  Sagaパターン: { reading: "サガ・パターン" },
  TLB: {
    reading: "ティーエルビー",
    fullForm: "Translation Lookaside Buffer",
  },
  "TLS 1.3": {
    reading: "ティーエルエス・いってんさん",
    fullForm: "Transport Layer Security 1.3",
  },
  TOCTOU: {
    reading: "ティーオーシーティーオーユー",
    fullForm: "Time Of Check To Time Of Use",
  },
  Unicast: { reading: "ユニキャスト" },
  "Zero Trust": { reading: "ゼロトラスト" },
  ["__proto__"]: { reading: "ダンダー・プロト" },
  "ack (確認応答)": {
    reading: "アック（かくにんおうとう）",
    fullForm: "acknowledgment",
  },
  "anti-corruption layer": { reading: "アンチコラプション・レイヤー" },
  "at-least-once delivery": { reading: "アット・リースト・ワンス・デリバリー" },
  capability: { reading: "ケイパビリティ" },
  "capability-based security": { reading: "ケイパビリティ・ベースド・セキュリティ" },
  "circuit breaker": { reading: "サーキットブレーカー" },
  commit: { reading: "コミット" },
  "confused deputy問題": { reading: "コンフューズド・デピュティもんだい" },
  "congestion window": { reading: "コンジェスチョン・ウィンドウ" },
  "context map": { reading: "コンテキスト・マップ" },
  "deputy（代理人）": { reading: "デピュティ（だいりにん）" },
  "egress allowlist": { reading: "イーグレス・アローリスト" },
  "eventual consistency (最終的整合性)": {
    reading: "イベンチュアル・コンシステンシー（さいしゅうてきせいごうせい）",
  },
  "exactly-once": { reading: "イグザクトリー・ワンス" },
  "last-write-wins": { reading: "ラスト・ライト・ウィンズ" },
  "leader election": { reading: "リーダー・エレクション" },
  "linearizability（線形化可能性）": {
    reading: "リニアライザビリティ（せんけいかかのうせい）",
  },
  "log replication": { reading: "ログ・レプリケーション" },
  "mTLS（相互TLS認証）": {
    reading: "エムティーエルエス（そうごティーエルエスにんしょう）",
    fullForm: "mutual Transport Layer Security",
  },
  "monotonic read": { reading: "モノトニック・リード" },
  "page fault（ページフォルト）": { reading: "ページフォルト" },
  "read-your-writes": { reading: "リード・ユア・ライツ" },
  "serializability（直列化可能性）": {
    reading: "シリアライザビリティ（ちょくれつかかのうせい）",
  },
  "slow start": { reading: "スロースタート" },
  "split brain": { reading: "スプリットブレイン" },
  "vector clock": { reading: "ベクタークロック" },
  下流API: {
    reading: "かりゅうエーピーアイ",
    fullForm: "Application Programming Interface",
  },
  "任意コード実行（RCE）": {
    reading: "にんいコードじっこう（アールシーイー）",
    fullForm: "Remote Code Execution",
  },
  内部IP: {
    reading: "ないぶアイピー",
    fullForm: "Internet Protocol address",
  },
  "冪等性キー (Idempotency Key)": {
    reading: "べきとうせいキー（アイデンポテンシー・キー）",
  },
  "分岐予測（branch prediction）": {
    reading: "ぶんきよそく（ブランチ・プレディクション）",
  },
  "可換性 (commutativity)": {
    reading: "かかんせい（コミュタティビティ）",
  },
  "帯域幅遅延積（BDP）": {
    reading: "たいいきはばちえんせき（ビーディーピー）",
    fullForm: "Bandwidth-Delay Product",
  },
  "重複排除 (deduplication)": {
    reading: "ちょうふくはいじょ（デデュプリケーション）",
  },
};

export function withAdvancedTermDetails(entries: readonly GlossaryEntry[]): GlossaryEntry[] {
  return entries.map((entry) => ({
    ...entry,
    ...advancedTermDetails[entry.term],
  }));
}
