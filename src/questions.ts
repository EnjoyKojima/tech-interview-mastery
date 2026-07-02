import type { Question } from "./types";

export const questions: Question[] = [
  {
    id: "l1-computer-binary",
    level: 1,
    domain: "computer",
    tags: ["binary", "data-representation"],
    prompt: "面接官: コンピュータが最終的に0と1で情報を扱う理由として、最も近い説明はどれですか?",
    correct: {
      id: "correct",
      text: "物理的な状態を2種類に分けると、ノイズに強く、回路で安定して扱いやすいから",
    },
    distractors: [
      { id: "d1", text: "人間が10進数を使うので、変換しやすいから" },
      { id: "d2", text: "インターネットの通信が必ず2文字ずつ送られるから" },
      { id: "d3", text: "プログラミング言語が英語で書かれているから" },
      { id: "d4", text: "CPUが文字列しか処理できないから" },
      { id: "d5", text: "0と1を使うとデータ容量が必ず最小になるから" },
    ],
    brief: "0/1は物理状態の安定した区別として扱いやすい、という理解が土台です。",
    interview:
      "回路では電圧の高低のような状態を2値に分けると、多少の揺れがあっても判定しやすいです。その上に数値、文字、画像などの表現を積み上げます。",
    relevance:
      "Webエンジニアでも文字コード、圧縮、画像、暗号、ネットワークパケットを理解するとき、最終的にはビット列をどう解釈するかが効きます。",
    next: "文字がビット列になる流れとして、文字コードとUTF-8を見ていきましょう。",
    deeper: [
      "2値だから単純というより、2値を組み合わせることで複雑な情報を表せるのが重要です。",
      "バイト、文字コード、ファイル形式、プロトコルは、ビット列に意味を与える約束です。",
    ],
  },
  {
    id: "l1-computer-memory-storage",
    level: 1,
    domain: "computer",
    tags: ["memory", "storage"],
    prompt: "面接官: メモリとストレージの違いとして、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "メモリは実行中の作業場所、ストレージは電源を切っても残る保存場所",
    },
    distractors: [
      { id: "d1", text: "メモリは画像専用、ストレージはテキスト専用" },
      { id: "d2", text: "メモリはネットワーク上、ストレージはCPU内部にある" },
      { id: "d3", text: "メモリは必ず暗号化され、ストレージは暗号化できない" },
      { id: "d4", text: "メモリは低速で大容量、ストレージは高速で小容量" },
      { id: "d5", text: "Webアプリではメモリもストレージも同じ意味で使う" },
    ],
    brief: "メモリは作業台、ストレージは棚です。速度、容量、永続性が違います。",
    interview:
      "実行中のプログラムや一時データはメモリに置かれます。ファイルやDBのデータはストレージに残り、再起動後も参照できます。",
    relevance:
      "キャッシュ、アップロード処理、DB保存、メモリリークの説明で必ず出ます。大きなレスポンスを全部メモリに載せるとWorkerでもサーバでも危険です。",
    next: "プロセスがメモリをどう使うか、スタックとヒープに進みましょう。",
    deeper: [
      "メモリは速いが揮発性、ストレージは相対的に遅いが永続化できます。",
      "RedisのようなインメモリDBでも、永続化設定があるかどうかは別問題です。",
    ],
  },
  {
    id: "l1-computer-process",
    level: 1,
    domain: "computer",
    tags: ["process", "os"],
    prompt: "面接官: プロセスを一言で説明するなら、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "OS上で実行中のプログラムの単位で、独自のメモリ空間などを持つ",
    },
    distractors: [
      { id: "d1", text: "HTTPリクエストの別名" },
      { id: "d2", text: "データベースのテーブルを分割する単位" },
      { id: "d3", text: "CSSを画面に適用する順序" },
      { id: "d4", text: "暗号化されたパスワードの形式" },
      { id: "d5", text: "ブラウザのURLバーに表示される文字列" },
    ],
    brief: "プロセスはOSから見た実行単位です。Webサーバもプロセスとして動きます。",
    interview:
      "プログラムが起動されるとプロセスになり、OSがCPU時間やメモリなどの資源を割り当てます。プロセス同士は基本的にメモリ空間が分かれます。",
    relevance:
      "Node.js、アプリサーバ、コンテナ、Workerの実行モデルを理解するときに必要です。落ちる、詰まる、メモリを食う、という障害分析にも直結します。",
    next: "次はプロセスとスレッドの違いを押さえると、並行処理が見えます。",
    deeper: [
      "プロセス分離は安定性とセキュリティに効きます。",
      "Webブラウザもタブやサイト分離で複数プロセスを使うことがあります。",
    ],
  },
  {
    id: "l1-design-abstraction",
    level: 1,
    domain: "design",
    tags: ["abstraction", "interface"],
    prompt: "面接官: 設計における抽象化の目的として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "細部を隠し、重要な関心だけを扱えるようにして変更に強くすること",
    },
    distractors: [
      { id: "d1", text: "コードを必ず短くして、コメントをすべて消すこと" },
      { id: "d2", text: "実装を誰にも読めないように複雑にすること" },
      { id: "d3", text: "すべての処理を1つの関数に集めること" },
      { id: "d4", text: "データベースを使わずに画面だけ作ること" },
      { id: "d5", text: "HTTPのステータスコードを隠すことだけ" },
    ],
    brief: "抽象化は、変わりやすい細部から呼び出し側を守るための道具です。",
    interview:
      "呼び出し側が知るべき約束を小さくし、内部実装を交換できるようにするのが抽象化です。ただし抽象化しすぎると理解コストが上がります。",
    relevance:
      "Webアプリでは認証、DBアクセス、外部API、メール送信などで抽象化が効きます。テストしやすさや変更容易性にも関係します。",
    next: "抽象化の次は、インターフェースと責務分割を見ましょう。",
    deeper: [
      "よい抽象化は利用者にとって自然な言葉で表現されます。",
      "早すぎる抽象化は、まだ見えていない変化に合わせてしまう危険があります。",
    ],
  },
  {
    id: "l1-design-interface",
    level: 1,
    domain: "design",
    tags: ["interface", "contract"],
    prompt: "面接官: インターフェースを設計するとき、最も重要な観点はどれですか?",
    correct: {
      id: "correct",
      text: "利用側が何を渡せば何が返るか、どんな約束で使えるかを明確にすること",
    },
    distractors: [
      { id: "d1", text: "内部実装の変数名をすべて公開すること" },
      { id: "d2", text: "引数を多くして、どんな値でも受け取れるようにすること" },
      { id: "d3", text: "返り値を毎回ランダムに変えること" },
      { id: "d4", text: "UIの色だけを決めること" },
      { id: "d5", text: "データベースの接続文字列を利用者に渡すこと" },
    ],
    brief: "インターフェースは利用者との契約です。入出力と失敗条件が重要です。",
    interview:
      "よいインターフェースは、利用側が内部実装を知らなくても正しく使えます。型、エラー、境界条件まで約束として考えます。",
    relevance:
      "API設計、コンポーネント設計、ライブラリ設計で必須です。面接では『後から壊れにくいAPI』の話に広がります。",
    next: "APIの後方互換性とエラー設計に進むと、実務寄りになります。",
    deeper: [
      "契約が曖昧だと、利用側が内部事情に依存し始めます。",
      "入力検証とエラー形式もインターフェースの一部です。",
    ],
  },
  {
    id: "l1-network-dns",
    level: 1,
    domain: "network",
    tags: ["dns", "name-resolution"],
    prompt: "面接官: DNSの役割として、最も近い説明はどれですか?",
    correct: {
      id: "correct",
      text: "example.com のような名前を、通信先のIPアドレスなどへ対応づけること",
    },
    distractors: [
      { id: "d1", text: "HTMLをCSSに変換すること" },
      { id: "d2", text: "パスワードをハッシュ化して保存すること" },
      { id: "d3", text: "ブラウザのJavaScriptを必ず高速化すること" },
      { id: "d4", text: "HTTPレスポンスの本文を暗号化すること" },
      { id: "d5", text: "DBの重複行を削除すること" },
    ],
    brief: "DNSは名前解決です。URL入力後の最初の重要ステップです。",
    interview:
      "ブラウザはホスト名から接続先を知る必要があります。DNSは階層的な仕組みで名前をIPアドレスなどに解決します。",
    relevance:
      "『サイトが見えない』原因がアプリではなくDNS、CDN、証明書設定にあることがあります。URLから表示までの面接質問でも必ず出ます。",
    next: "DNSの次は、IP、TCP、TLS、HTTPの順に通信の流れを積みましょう。",
    deeper: [
      "A/AAAA/CNAME/TXTなど、DNSレコードには用途があります。",
      "TTLにより変更がすぐ反映されないことがあります。",
    ],
    diagram:
      "Browser -> DNS resolver -> authoritative DNS\nBrowser <- IP address -------- authoritative DNS",
  },
  {
    id: "l1-network-http-request-response",
    level: 1,
    domain: "network",
    tags: ["http", "request-response"],
    prompt: "面接官: HTTPの基本的な通信モデルとして、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "クライアントがリクエストを送り、サーバがレスポンスを返す",
    },
    distractors: [
      { id: "d1", text: "サーバが常にクライアントへ一方的に命令を送る" },
      { id: "d2", text: "DNSがHTMLを生成してブラウザに返す" },
      { id: "d3", text: "DBが直接ブラウザの画面を描画する" },
      { id: "d4", text: "CSSがネットワーク接続を確立する" },
      { id: "d5", text: "CookieがIPアドレスを割り当てる" },
    ],
    brief: "HTTPはリクエストとレスポンスを中心に考えます。",
    interview:
      "ブラウザやAPIクライアントがメソッド、パス、ヘッダー、必要ならボディを送り、サーバがステータス、ヘッダー、ボディを返します。",
    relevance:
      "Web開発のデバッグはほぼ『どんなリクエストに、どんなレスポンスが返ったか』を見るところから始まります。",
    next: "HTTPメソッド、ステータスコード、ヘッダー、ボディを分解しましょう。",
    deeper: [
      "DevToolsのNetworkタブはこの構造を観察する道具です。",
      "SSR、API、画像取得、認証もHTTP上のやり取りとして見られます。",
    ],
    diagram: "Client -- GET /articles --> Server\nClient <-- 200 OK + HTML -- Server",
  },
  {
    id: "l1-network-status-codes",
    level: 1,
    domain: "network",
    tags: ["http", "status-code"],
    prompt: "面接官: HTTPステータスコードの 404 は通常何を意味しますか?",
    correct: {
      id: "correct",
      text: "要求されたリソースが見つからない",
    },
    distractors: [
      { id: "d1", text: "ログインに成功した" },
      { id: "d2", text: "サーバ内部で必ずデータベースが壊れた" },
      { id: "d3", text: "リクエストが永遠に処理中である" },
      { id: "d4", text: "ブラウザがCSSを読み込めない専用のコード" },
      { id: "d5", text: "DNSのTTLが切れた" },
    ],
    brief: "404はNot Foundです。クライアントが指定した場所に対象がない状態です。",
    interview:
      "4xxはクライアント側のリクエストに問題があるカテゴリです。404はパスやIDに対応するリソースがないことを表します。",
    relevance:
      "APIのエラー設計や画面遷移で重要です。存在しない記事ID、削除済みユーザー、間違ったURLなどを正しく扱えます。",
    next: "2xx、3xx、4xx、5xxのカテゴリをまとめて覚えましょう。",
    deeper: [
      "404と403は違います。存在しないのか、権限がないのかで意味が変わります。",
      "セキュリティ上、あえて404を返して存在を隠す場合もあります。",
    ],
  },
  {
    id: "l1-security-authn-authz",
    level: 1,
    domain: "security",
    tags: ["authentication", "authorization"],
    prompt: "面接官: 認証と認可の違いとして、最も正しいのはどれですか?",
    correct: {
      id: "correct",
      text: "認証は誰かを確認すること、認可は何をしてよいかを判断すること",
    },
    distractors: [
      { id: "d1", text: "認証は画面デザイン、認可はDB設計のこと" },
      { id: "d2", text: "認証はHTTPS、認可はHTTPのこと" },
      { id: "d3", text: "認証はログアウト、認可はログインのこと" },
      { id: "d4", text: "認証はパスワード保存、認可はパスワード生成だけのこと" },
      { id: "d5", text: "Webアプリでは同じ意味なので区別しない" },
    ],
    brief: "認証は本人確認、認可は権限判断です。",
    interview:
      "ログインでユーザーが誰かを確認するのが認証です。そのユーザーが管理画面に入れるか、他人のデータを見られるかを決めるのが認可です。",
    relevance:
      "Webアプリの重大事故は、認証済みでも認可が漏れて他人の情報が見える、という形で起きがちです。",
    next: "次はセッション、Cookie、権限チェックの場所を理解しましょう。",
    deeper: [
      "認証済みユーザーなら何でも許可、は危険です。",
      "認可はUIだけでなくサーバ側で必ず検証します。",
    ],
  },
  {
    id: "l1-security-hash-encryption",
    level: 1,
    domain: "security",
    tags: ["hash", "encryption"],
    prompt: "面接官: ハッシュ化と暗号化の違いとして、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "暗号化は鍵で復号できるが、通常のハッシュは元に戻す用途ではない",
    },
    distractors: [
      { id: "d1", text: "ハッシュ化は画像専用、暗号化はテキスト専用" },
      { id: "d2", text: "ハッシュ化は必ず元に戻せるが、暗号化は戻せない" },
      { id: "d3", text: "どちらもHTTPメソッドの一種" },
      { id: "d4", text: "暗号化はCSS、ハッシュ化はHTMLにしか使えない" },
      { id: "d5", text: "パスワードは復号できる暗号化だけで保存するべき" },
    ],
    brief: "ハッシュは照合、暗号化は秘密を保ったまま復号可能にする用途です。",
    interview:
      "パスワード保存では復号できない形で検証できることが重要なので、ソルト付きの遅いパスワードハッシュを使います。",
    relevance:
      "ログイン機能、APIキー管理、署名、改ざん検知で出ます。面接では『パスワードをどう保存するか』で聞かれます。",
    next: "パスワード保存ではsalt、pepper、ストレッチングも見ましょう。",
    deeper: [
      "一般的なハッシュ関数は同じ入力に同じ出力を返します。",
      "パスワードには汎用ハッシュではなく、bcryptやArgon2のような方式が使われます。",
    ],
  },
  {
    id: "l2-computer-latency",
    level: 2,
    domain: "computer",
    tags: ["latency", "cpu", "io"],
    prompt: "面接官: CPU処理よりI/O待ちがWebアプリで問題になりやすい理由はどれですか?",
    correct: {
      id: "correct",
      text: "ネットワークやディスクなど外部資源の応答待ちはCPU計算より桁違いに遅いことが多いから",
    },
    distractors: [
      { id: "d1", text: "CPUはHTTPを理解できないから" },
      { id: "d2", text: "I/Oは必ずメモリ内だけで完結するから" },
      { id: "d3", text: "WebアプリではCPUを一切使わないから" },
      { id: "d4", text: "I/O待ちはCSSの優先順位だけで決まるから" },
      { id: "d5", text: "ディスクアクセスは常にCPUレジスタより速いから" },
    ],
    brief: "Webの遅さはDB、外部API、ネットワークなどの待ち時間に出やすいです。",
    interview:
      "CPUで計算している時間より、DBや外部APIの応答、ファイル読み書き、ネットワーク往復の待ちが支配的になることがあります。",
    relevance:
      "パフォーマンス改善では、闇雲にコードを短くするより、どこで待っているかを測ることが大事です。",
    next: "同期I/Oと非同期I/O、イベントループを理解しましょう。",
    deeper: [
      "レイテンシとスループットは別の指標です。",
      "待ち時間は並列化やキャッシュで隠せる場合がありますが、整合性や複雑さとのトレードオフがあります。",
    ],
  },
  {
    id: "l2-computer-stack-heap",
    level: 2,
    domain: "computer",
    tags: ["memory", "stack", "heap"],
    prompt: "面接官: スタックとヒープの違いを説明するとき、最も妥当なのはどれですか?",
    correct: {
      id: "correct",
      text: "スタックは関数呼び出しに沿った短命な領域、ヒープは動的に確保される領域として説明できる",
    },
    distractors: [
      { id: "d1", text: "スタックは画像、ヒープは動画だけを保存する領域" },
      { id: "d2", text: "スタックはネットワーク、ヒープはDNSの別名" },
      { id: "d3", text: "スタックは永続DB、ヒープはブラウザ履歴" },
      { id: "d4", text: "どちらもHTTPステータスコードの分類" },
      { id: "d5", text: "JavaScriptではメモリを使わないので関係ない" },
    ],
    brief: "ざっくり、関数呼び出しの流れに沿うのがスタック、動的なオブジェクト置き場がヒープです。",
    interview:
      "言語やランタイムで詳細は違いますが、関数呼び出しの管理と動的確保の違いとして説明できます。再帰やメモリリークの理解に繋がります。",
    relevance:
      "Node.jsのメモリリーク、巨大配列、クロージャ、再帰のスタックオーバーフローを説明するときに役立ちます。",
    next: "ガベージコレクションと参照が残る問題を見ましょう。",
    deeper: [
      "JavaScriptは手動でfreeしませんが、参照が残るとGCが回収できません。",
      "ブラウザやサーバのメモリ使用量を読むときの基礎になります。",
    ],
  },
  {
    id: "l2-computer-process-thread",
    level: 2,
    domain: "computer",
    tags: ["process", "thread", "concurrency"],
    prompt: "面接官: プロセスとスレッドの違いとして、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "プロセスは独立した実行単位、スレッドは同じプロセス内でメモリを共有しやすい実行の流れ",
    },
    distractors: [
      { id: "d1", text: "プロセスはCSS、スレッドはHTMLを処理する単位" },
      { id: "d2", text: "プロセスは必ず1秒で終了し、スレッドは永遠に続く" },
      { id: "d3", text: "スレッドはDBの行、プロセスはDBの列" },
      { id: "d4", text: "Webサーバではどちらも存在しない" },
      { id: "d5", text: "プロセスは暗号化、スレッドはハッシュ化のこと" },
    ],
    brief: "スレッドは軽いが共有による競合に注意、プロセスは分離が強いが重めです。",
    interview:
      "プロセスはメモリ空間が分かれ、スレッドは同じプロセス内でメモリを共有します。そのためスレッドは通信しやすい一方、競合やデッドロックに注意します。",
    relevance: "Webサーバの並行処理、Node.jsのWorker Threads、ブラウザ、DB接続プールの話で出ます。",
    next: "並行と並列、イベントループ、ロックを次に学ぶと繋がります。",
    deeper: [
      "共有メモリは便利ですが、同時更新のバグを生みます。",
      "プロセス分離は障害の封じ込めにも使われます。",
    ],
  },
  {
    id: "l2-design-coupling-cohesion",
    level: 2,
    domain: "design",
    tags: ["coupling", "cohesion"],
    prompt: "面接官: 疎結合・高凝集を目指す理由として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "変更の影響範囲を小さくし、関係する責務をまとまりとして扱いやすくするため",
    },
    distractors: [
      { id: "d1", text: "ファイル数を必ず1つにするため" },
      { id: "d2", text: "すべての関数からDBへ直接アクセスするため" },
      { id: "d3", text: "HTTPヘッダーを短くするため" },
      { id: "d4", text: "テストを書けないようにするため" },
      { id: "d5", text: "UIの色を統一するためだけ" },
    ],
    brief: "疎結合は依存を減らすこと、高凝集は関係ある責務をまとめることです。",
    interview:
      "依存が強すぎると小さな変更が広く壊れます。凝集度が低いと、1つの変更に複数箇所を触る必要が出ます。",
    relevance:
      "Webアプリではルーティング、ユースケース、DB、外部API、UIをどう分けるかに直結します。",
    next: "責務分割と依存方向を見て、設計判断に進みましょう。",
    deeper: [
      "疎結合だけを狙うと抽象化が増えすぎることがあります。",
      "高凝集は『同じ理由で変更されるものを近くに置く』という発想と相性が良いです。",
    ],
  },
  {
    id: "l2-design-idempotency",
    level: 2,
    domain: "design",
    tags: ["idempotency", "api-design"],
    prompt: "面接官: API設計で冪等性を気にする主な理由はどれですか?",
    correct: {
      id: "correct",
      text: "同じ操作を複数回実行しても結果が壊れにくく、リトライ設計がしやすいから",
    },
    distractors: [
      { id: "d1", text: "レスポンスの文字数を必ず偶数にするため" },
      { id: "d2", text: "POSTを常にGETに変換するため" },
      { id: "d3", text: "DNSのTTLをゼロにするため" },
      { id: "d4", text: "パスワードを復号できるようにするため" },
      { id: "d5", text: "CSSのセレクタを短くするため" },
    ],
    brief: "冪等性は、失敗時の再試行で二重登録や二重決済を避ける発想です。",
    interview:
      "通信は失敗するのでリトライが必要です。同じリクエストが複数回来ても状態が意図せず増えない設計だと、信頼性を上げやすいです。",
    relevance:
      "注文、決済、メール送信、Webhook処理で重要です。面接では『タイムアウト時に再送してよいか』と聞かれます。",
    next: "HTTPメソッドの意味と、Idempotency-Keyの使い方を見ましょう。",
    deeper: [
      "GET/PUT/DELETEは一般に冪等として設計されますが、実装がそうなっているかは別です。",
      "POSTでもキーを使って冪等にできます。",
    ],
  },
  {
    id: "l2-network-tcp-ip",
    level: 2,
    domain: "network",
    tags: ["tcp-ip", "layers"],
    prompt: "面接官: HTTPとTCP/IPの関係として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "HTTPはアプリケーション層のプロトコルで、通常はTCP/TLS/IPなどの上で動く",
    },
    distractors: [
      { id: "d1", text: "HTTPはIPアドレスを割り当てるプロトコル" },
      { id: "d2", text: "TCPはHTMLを描画するための言語" },
      { id: "d3", text: "IPはパスワードのハッシュ方式" },
      { id: "d4", text: "TLSはDBの正規化ルール" },
      { id: "d5", text: "HTTPとTCPは同じ層なので区別しない" },
    ],
    brief: "HTTPは上位の約束、TCP/IPは通信を運ぶ土台です。",
    interview:
      "IPが宛先へ届ける役割、TCPが信頼性のあるバイトストリームを提供する役割、TLSが暗号化、HTTPがリクエスト/レスポンスの意味を扱います。",
    relevance:
      "『ブラウザにURLを入れてから表示まで』を説明するときの中心です。障害切り分けも層で考えると楽になります。",
    next: "DNS、TCPハンドシェイク、TLSハンドシェイク、HTTPの順に流れを追いましょう。",
    deeper: [
      "HTTP/3はQUIC上で動くため、必ずTCPとは限りません。",
      "層を分けて理解すると、どこで失敗しているかを切り分けやすいです。",
    ],
    diagram: "HTTP request\n  over TLS\n    over TCP\n      over IP",
  },
  {
    id: "l2-network-dns-ttl",
    level: 2,
    domain: "network",
    tags: ["dns", "ttl", "cache"],
    prompt: "面接官: DNSのTTLが長い場合に起きやすいことはどれですか?",
    correct: {
      id: "correct",
      text: "DNSレコード変更後も、古い結果がキャッシュされ続ける可能性がある",
    },
    distractors: [
      { id: "d1", text: "HTTPレスポンス本文が必ず圧縮されなくなる" },
      { id: "d2", text: "DBのインデックスが自動で削除される" },
      { id: "d3", text: "ブラウザがJavaScriptを実行できなくなる" },
      { id: "d4", text: "TLS証明書が必ず失効する" },
      { id: "d5", text: "CookieがすべてHttpOnlyになる" },
    ],
    brief: "TTLはDNS回答をどのくらいキャッシュしてよいかの目安です。",
    interview:
      "TTLが長いと問い合わせが減って効率は良いですが、切り替え時に古い向き先が残りやすくなります。移行前にはTTLを短くすることがあります。",
    relevance:
      "本番ドメイン移行、CDN切り替え、障害復旧で効きます。『反映されない』を説明できると強いです。",
    next: "DNSキャッシュとCDNキャッシュの違いを区別しましょう。",
    deeper: [
      "TTLを短くしても、すべての環境が即時に新しい値を見るとは限りません。",
      "権威DNS、リゾルバ、OS、ブラウザなど複数のキャッシュが関わることがあります。",
    ],
  },
  {
    id: "l2-network-http-methods",
    level: 2,
    domain: "network",
    tags: ["http", "method", "semantics"],
    prompt: "面接官: GETとPOSTの使い分けとして、最も妥当なのはどれですか?",
    correct: {
      id: "correct",
      text: "GETは主に取得、POSTは主に新規作成や処理実行など状態変更を伴う操作に使う",
    },
    distractors: [
      { id: "d1", text: "GETは必ず安全でない操作、POSTは必ず読み取り専用" },
      { id: "d2", text: "GETはJSON不可、POSTはHTML不可" },
      { id: "d3", text: "GETはHTTPSで使えず、POSTはHTTPで使えない" },
      { id: "d4", text: "GETとPOSTはDNSのレコード種別" },
      { id: "d5", text: "POSTならCSRF対策が不要になる" },
    ],
    brief: "メソッドはサーバへの意図を表します。GETは取得、POSTは処理・作成寄りです。",
    interview:
      "GETは安全でキャッシュや共有に向きます。POSTは状態変更やサーバ側の処理に使われます。実装だけでなく意味を合わせることが大切です。",
    relevance: "API設計、フォーム、キャッシュ、CSRF、リトライ判断に関係します。",
    next: "safe、idempotent、cacheable の違いを押さえましょう。",
    deeper: [
      "GETに副作用を持たせると、クローラやプリフェッチで事故が起きます。",
      "POSTもIdempotency-Keyなどで安全に再試行できる設計にできます。",
    ],
  },
  {
    id: "l2-security-tls",
    level: 2,
    domain: "security",
    tags: ["tls", "https"],
    prompt: "面接官: HTTPSがHTTPに追加する重要な性質として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "通信の暗号化、改ざん検知、接続先の正当性確認を提供する",
    },
    distractors: [
      { id: "d1", text: "HTMLを自動で正しい文法に修正する" },
      { id: "d2", text: "SQLインジェクションを完全に防ぐ" },
      { id: "d3", text: "DNSの設定ミスを自動で直す" },
      { id: "d4", text: "パスワードをDBに保存しなくてよくする" },
      { id: "d5", text: "HTTPステータスコードをすべて200にする" },
    ],
    brief: "HTTPSはHTTP over TLSです。盗聴や改ざんから通信を守ります。",
    interview:
      "TLSにより、クライアントは証明書で接続先を確認し、通信内容を暗号化し、途中改ざんを検出できます。",
    relevance:
      "ログイン、Cookie、決済、個人情報を扱うWebでは必須です。証明書期限切れや混在コンテンツ障害の理解にも必要です。",
    next: "証明書、CA、SNI、HSTSを次に見ましょう。",
    deeper: [
      "HTTPSでもアプリの認可バグやXSSは防げません。",
      "Secure CookieはHTTPS上でのみ送られるようにする属性です。",
    ],
  },
  {
    id: "l2-security-password-storage",
    level: 2,
    domain: "security",
    tags: ["password", "hash", "salt"],
    prompt: "面接官: パスワード保存で最も望ましい方針はどれですか?",
    correct: {
      id: "correct",
      text: "平文や復号可能な暗号化ではなく、salt付きのパスワードハッシュで保存する",
    },
    distractors: [
      { id: "d1", text: "ユーザーが忘れたときに見せられるよう平文で保存する" },
      { id: "d2", text: "全ユーザーに同じsaltを使えば十分なので高速なMD5を使う" },
      { id: "d3", text: "Base64にすれば暗号化なので安全" },
      { id: "d4", text: "フロントエンドだけでハッシュしてサーバでは検証しない" },
      { id: "d5", text: "Cookieにパスワードを直接入れて毎回送る" },
    ],
    brief: "パスワードは漏れても元に戻しにくい形で保存します。",
    interview:
      "bcrypt、scrypt、Argon2など、総当たりに強い遅いハッシュを使います。ユーザーごとのsaltで同じパスワードでも結果を変えます。",
    relevance: "ログイン機能を作るなら必須です。面接で『パスワードをどう保存するか』は定番です。",
    next: "salt、pepper、レート制限、多要素認証まで繋げましょう。",
    deeper: [
      "Base64はエンコードであり、秘密を守る仕組みではありません。",
      "パスワードリセットでは元のパスワードを教えず、再設定フローにします。",
    ],
  },
  {
    id: "l3-computer-concurrency-parallelism",
    level: 3,
    domain: "computer",
    tags: ["concurrency", "parallelism"],
    prompt: "面接官: 並行処理と並列処理の違いとして、最もよい説明はどれですか?",
    correct: {
      id: "correct",
      text: "並行は複数タスクを扱う構造、並列は実際に同時実行されること",
    },
    distractors: [
      { id: "d1", text: "並行はCSS、並列はHTMLの概念" },
      { id: "d2", text: "並行は必ず速くなり、並列は必ず遅くなる" },
      { id: "d3", text: "並行はDBだけ、並列はDNSだけで使う" },
      { id: "d4", text: "どちらも完全に同じ意味で区別しない" },
      { id: "d5", text: "並列は1つのCPUコアでしか起きない" },
    ],
    brief: "並行は設計上同時に扱うこと、並列は物理的に同時に走ることです。",
    interview:
      "イベントループは並行性を提供しますが、CPU処理が必ず並列になるわけではありません。複数コアや複数Workerなら並列実行になります。",
    relevance: "Node.js、ブラウザ、バックエンドのスケーリング、キュー処理の説明で必要です。",
    next: "イベントループとCPU bound / I/O boundを区別しましょう。",
    deeper: [
      "並行化は待ち時間の利用に効きますが、共有状態のバグを増やします。",
      "並列化はCPU負荷を分散できますが、同期コストがあります。",
    ],
  },
  {
    id: "l3-computer-sync-async",
    level: 3,
    domain: "computer",
    tags: ["sync-async", "event-loop"],
    prompt: "面接官: 非同期処理を使う主な理由として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "I/O待ちの間に他の処理を進め、スレッドや実行資源を効率よく使うため",
    },
    distractors: [
      { id: "d1", text: "非同期なら例外処理が不要になるから" },
      { id: "d2", text: "非同期なら処理順序を考えなくてよいから" },
      { id: "d3", text: "非同期ならDBが不要になるから" },
      { id: "d4", text: "非同期なら全ての処理がCPUで並列実行されるから" },
      { id: "d5", text: "非同期はHTTPS専用の機能だから" },
    ],
    brief: "非同期は待ち時間を有効活用するための仕組みです。",
    interview:
      "外部APIやDBを待つ間、実行資源を塞ぎ続けないようにできます。ただしエラー処理やキャンセル、順序の管理は必要です。",
    relevance:
      "fetch、DBアクセス、ジョブキュー、UI操作で日常的に使います。Promiseの扱いは面接でも実務でも見られます。",
    next: "await忘れ、Promise.all、タイムアウト、キャンセルを理解しましょう。",
    deeper: [
      "非同期は自動的に高速化する魔法ではありません。",
      "CPUが重い処理は非同期にしても同じスレッドを塞ぐことがあります。",
    ],
  },
  {
    id: "l3-design-cache-invalidation",
    level: 3,
    domain: "design",
    tags: ["cache", "invalidation"],
    prompt: "面接官: キャッシュ設計で難しい点として、最も本質的なのはどれですか?",
    correct: {
      id: "correct",
      text: "速さと引き換えに、古いデータをいつ無効化するかを設計する必要があること",
    },
    distractors: [
      { id: "d1", text: "キャッシュは必ずデータを暗号化できないこと" },
      { id: "d2", text: "キャッシュを使うとHTTPが使えなくなること" },
      { id: "d3", text: "キャッシュは画面の色だけを保存すること" },
      { id: "d4", text: "キャッシュはDBより常に正確になること" },
      { id: "d5", text: "キャッシュは小規模アプリでは必ず禁止されること" },
    ],
    brief: "キャッシュは速さを得る代わりに、鮮度と無効化の問題を持ち込みます。",
    interview:
      "TTLで自然に古くする、更新時に削除する、バージョンをキーに含めるなどの戦略があります。どれも一長一短です。",
    relevance:
      "CDN、ブラウザキャッシュ、Redis、APIレスポンスキャッシュで必須です。バグると『更新したのに反映されない』になります。",
    next: "TTL、write-through、cache-aside、stale-while-revalidateを見ましょう。",
    deeper: [
      "どの層でキャッシュしているかを把握しないと原因切り分けが難しくなります。",
      "キャッシュキーに認可情報を含めないと情報漏洩に繋がることがあります。",
    ],
  },
  {
    id: "l3-design-api-versioning",
    level: 3,
    domain: "design",
    tags: ["api", "versioning", "compatibility"],
    prompt: "面接官: 公開APIの変更で最も避けたいものはどれですか?",
    correct: {
      id: "correct",
      text: "既存クライアントが期待しているフィールドや意味を突然壊す変更",
    },
    distractors: [
      { id: "d1", text: "新しい任意フィールドを追加すること" },
      { id: "d2", text: "ドキュメントに例を追加すること" },
      { id: "d3", text: "レスポンス時間を測定すること" },
      { id: "d4", text: "テストケースを増やすこと" },
      { id: "d5", text: "エラーの説明を詳しくすること" },
    ],
    brief: "APIは利用者との契約なので、破壊的変更には慎重さが必要です。",
    interview:
      "既存クライアントが依存している項目の削除、型変更、意味変更は壊れやすいです。バージョニングや段階的移行を考えます。",
    relevance:
      "スマホアプリ、外部連携、社内マイクロサービスで特に重要です。デプロイタイミングが揃わない世界で効きます。",
    next: "後方互換、非推奨期間、feature flag、contract testを見ましょう。",
    deeper: [
      "追加は比較的安全ですが、クライアントが未知フィールドを許容する設計かも関係します。",
      "APIレスポンスの意味変更は型変更より見つけにくいことがあります。",
    ],
  },
  {
    id: "l3-design-normalization",
    level: 3,
    domain: "design",
    tags: ["database", "normalization"],
    prompt: "面接官: DBの正規化を行う主な目的はどれですか?",
    correct: {
      id: "correct",
      text: "重複や更新不整合を減らし、データの一貫性を保ちやすくするため",
    },
    distractors: [
      { id: "d1", text: "すべての検索を必ず最速にするため" },
      { id: "d2", text: "テーブルを1つだけにするため" },
      { id: "d3", text: "HTTPリクエストを暗号化するため" },
      { id: "d4", text: "CSSの命名規則を統一するため" },
      { id: "d5", text: "ログイン画面を不要にするため" },
    ],
    brief: "正規化は重複と矛盾を減らす設計です。速度だけが目的ではありません。",
    interview:
      "同じ情報を複数箇所に持つと更新漏れが起きます。正規化でデータの責務を分け、一貫性を保ちます。ただし読み取り性能のために非正規化する場合もあります。",
    relevance:
      "ユーザー、注文、商品、権限などのデータ設計で出ます。面接ではトレードオフまで言えると強いです。",
    next: "正規化と非正規化、インデックス、JOINのコストを繋げましょう。",
    deeper: [
      "正規化しすぎるとJOINが増え、読み取りが複雑になることもあります。",
      "非正規化はキャッシュや集計テーブルとして意図的に使うことがあります。",
    ],
  },
  {
    id: "l3-network-http-cache",
    level: 3,
    domain: "network",
    tags: ["http-cache", "headers"],
    prompt: "面接官: Cache-Control: no-store の意味として、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "リクエストやレスポンスをキャッシュに保存しないよう指示する",
    },
    distractors: [
      { id: "d1", text: "レスポンスを永遠にキャッシュしてよいという意味" },
      { id: "d2", text: "DNSのTTLを更新するという意味" },
      { id: "d3", text: "Cookieをすべて削除するという意味" },
      { id: "d4", text: "TLS証明書を自動更新するという意味" },
      { id: "d5", text: "HTMLをJSONに変換するという意味" },
    ],
    brief: "no-storeは保存自体を避けたいときに使います。",
    interview:
      "機密情報を含むレスポンスなどで、ブラウザや中間キャッシュに保存してほしくない場合に使います。no-cacheとは意味が違います。",
    relevance:
      "個人情報ページ、ログイン後画面、APIレスポンスで重要です。キャッシュ事故は情報漏洩や古い表示に繋がります。",
    next: "no-cache、max-age、private、public、ETagの違いを見ましょう。",
    deeper: [
      "no-cacheは保存禁止ではなく、再利用前に検証が必要という意味です。",
      "認可付きレスポンスを共有キャッシュに置くと危険です。",
    ],
  },
  {
    id: "l3-network-cors",
    level: 3,
    domain: "network",
    tags: ["cors", "browser-security"],
    prompt: "面接官: CORSが主に関係するものはどれですか?",
    correct: {
      id: "correct",
      text: "ブラウザが別オリジンへのリクエスト結果をJavaScriptに渡してよいかを制御する仕組み",
    },
    distractors: [
      { id: "d1", text: "サーバ同士の通信をすべて禁止する仕組み" },
      { id: "d2", text: "DNSレコードを暗号化する仕組み" },
      { id: "d3", text: "DBの外部キー制約の一種" },
      { id: "d4", text: "CSSのレイアウトアルゴリズム" },
      { id: "d5", text: "パスワードをsalt付きで保存する仕組み" },
    ],
    brief: "CORSはブラウザの同一オリジン制約とAPI公開範囲に関係します。",
    interview:
      "サーバがAccess-Control-Allow-Originなどのヘッダーで許可を示すと、ブラウザは別オリジンのレスポンスをJSに渡せます。",
    relevance:
      "フロントエンドとAPIのドメインが違う構成で頻出です。『CORSエラー』を正しく切り分けられると実務で強いです。",
    next: "Origin、preflight、credentials、SameSite Cookieとの関係を見ましょう。",
    deeper: [
      "CORSはサーバへのリクエスト自体を常に防ぐものではなく、ブラウザがJSへ結果を渡す制御です。",
      "curlやサーバ間通信ではCORSエラーは通常起きません。",
    ],
  },
  {
    id: "l3-security-cookie-session",
    level: 3,
    domain: "security",
    tags: ["cookie", "session"],
    prompt: "面接官: セッションCookieの説明として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "ブラウザに識別子を保存し、サーバ側のセッション情報と対応づけるために使われることが多い",
    },
    distractors: [
      { id: "d1", text: "ユーザーのパスワード平文を保存する場所" },
      { id: "d2", text: "DBのインデックスを作るためのHTTPメソッド" },
      { id: "d3", text: "DNSの名前解決結果だけを保存する仕組み" },
      { id: "d4", text: "CSSを圧縮するためだけの仕組み" },
      { id: "d5", text: "TLS証明書をブラウザに保存する場所" },
    ],
    brief: "Cookieはブラウザがリクエストに付けて送る小さなデータです。",
    interview:
      "セッションIDをCookieに入れ、サーバ側でログイン状態や権限を管理します。HttpOnly、Secure、SameSiteなどの属性が重要です。",
    relevance:
      "ログイン状態、CSRF、サブドメイン、HTTPS移行で必ず出ます。Cookie属性の理解はセキュリティに直結します。",
    next: "HttpOnly、Secure、SameSite、セッション固定攻撃を見ましょう。",
    deeper: [
      "Cookieに機密情報を直接入れる場合は署名や暗号化を検討します。",
      "JWTをCookieに入れる設計でもCookie属性は重要です。",
    ],
  },
  {
    id: "l3-security-xss",
    level: 3,
    domain: "security",
    tags: ["xss", "output-encoding"],
    prompt: "面接官: XSSの本質として、最も近い説明はどれですか?",
    correct: {
      id: "correct",
      text: "攻撃者の入力がブラウザでスクリプトとして実行されてしまう脆弱性",
    },
    distractors: [
      { id: "d1", text: "DBのJOINが遅くなる性能問題" },
      { id: "d2", text: "DNSのTTLが長すぎる設定ミス" },
      { id: "d3", text: "TLS証明書の有効期限が切れること" },
      { id: "d4", text: "CSSの詳細度が高すぎること" },
      { id: "d5", text: "サーバのCPU使用率が常に0%になること" },
    ],
    brief: "XSSはユーザー入力が意図せずコードとして実行される問題です。",
    interview:
      "出力時のエスケープ、危険なHTML挿入の回避、CSP、HttpOnly Cookieなどで被害を抑えます。入力検証だけでは不十分です。",
    relevance:
      "コメント、プロフィール、検索語、管理画面など、ユーザー入力を表示するWebアプリ全般で重要です。",
    next: "コンテキスト別エスケープ、dangerouslySetInnerHTML、CSPを見ましょう。",
    deeper: [
      "HTML本文、属性、URL、JavaScript文字列では必要なエスケープが違います。",
      "HttpOnly CookieはCookie窃取の被害を下げますが、XSS自体を消すものではありません。",
    ],
  },
  {
    id: "l3-security-csrf",
    level: 3,
    domain: "security",
    tags: ["csrf", "cookie", "same-site"],
    prompt: "面接官: CSRFが成立しやすい条件として、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "ブラウザが認証Cookieを自動送信する状態で、別サイトから状態変更リクエストを送られる",
    },
    distractors: [
      { id: "d1", text: "パスワードがsalt付きで保存されている" },
      { id: "d2", text: "GETリクエストがキャッシュされているだけ" },
      { id: "d3", text: "DNSレコードがCNAMEである" },
      { id: "d4", text: "レスポンスがJSONであるだけ" },
      { id: "d5", text: "CSSファイルが大きい" },
    ],
    brief: "CSRFはログイン済みブラウザを利用して、意図しない操作を送らせる攻撃です。",
    interview:
      "CSRFトークン、SameSite Cookie、重要操作の再認証、状態変更をGETにしない設計などで対策します。",
    relevance:
      "ログイン後のフォーム、設定変更、送金、削除操作などで必須です。Cookie認証のAPI設計にも関係します。",
    next: "SameSite=Lax/Strict/None、preflight、トークン検証を見ましょう。",
    deeper: [
      "CORSとCSRFは別問題です。",
      "Authorizationヘッダーにトークンを入れる設計では、Cookie自動送信とは性質が変わります。",
    ],
  },
  {
    id: "l4-computer-db-index",
    level: 4,
    domain: "computer",
    tags: ["database", "index", "performance"],
    prompt: "面接官: 検索が遅いテーブルにインデックスを貼る前に確認すべきことはどれですか?",
    correct: {
      id: "correct",
      text: "実際のクエリ、条件、件数、実行計画を見て、どの列に効くか確認する",
    },
    distractors: [
      { id: "d1", text: "すべての列に無条件でインデックスを貼る" },
      { id: "d2", text: "CSSを圧縮してDBを高速化する" },
      { id: "d3", text: "DNSのTTLを短くすればDB検索は速くなる" },
      { id: "d4", text: "HTTPメソッドをPOSTに変えれば必ず速くなる" },
      { id: "d5", text: "インデックスは書き込みに影響しないので考えなくてよい" },
    ],
    brief: "インデックスは読み取りを助けますが、貼り方と書き込みコストが重要です。",
    interview:
      "WHERE、JOIN、ORDER BYに使われる列、選択度、複合インデックスの順序を実行計画で確認します。不要なインデックスは書き込みや容量を悪化させます。",
    relevance:
      "一覧画面、検索、管理画面、API遅延で最頻出です。感覚ではなく計測で語れると面接でも強いです。",
    next: "実行計画、カーディナリティ、複合インデックスを見ましょう。",
    deeper: [
      "インデックスは本の索引に近いですが、更新のたびに索引も更新する必要があります。",
      "小さいテーブルではフルスキャンの方が安いこともあります。",
    ],
  },
  {
    id: "l4-computer-n-plus-one",
    level: 4,
    domain: "computer",
    tags: ["database", "n-plus-one"],
    prompt: "面接官: N+1問題の説明として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "一覧取得後、各行ごとに追加クエリを発行してクエリ数が膨らむ問題",
    },
    distractors: [
      { id: "d1", text: "DNSサーバが1台多く起動している問題" },
      { id: "d2", text: "HTTPステータスコードが1増える問題" },
      { id: "d3", text: "パスワードが1文字長すぎる問題" },
      { id: "d4", text: "CSSのmarginが1pxずれる問題" },
      { id: "d5", text: "TLS証明書が1日前に切れる問題" },
    ],
    brief: "N+1はDBアクセスが行数に比例して爆増する典型的な性能問題です。",
    interview:
      "例えば記事一覧10件を取った後、各記事の著者を1件ずつ取りにいくと1+N回になります。JOIN、preload、batchingなどで改善します。",
    relevance:
      "ORMを使うWebアプリで頻出です。小さい開発データでは気づかず、本番データで遅くなります。",
    next: "JOIN、eager loading、DataLoader、クエリログの見方を押さえましょう。",
    deeper: [
      "Nが増えるとDB往復回数とレイテンシが効いてきます。",
      "解決策はJOINだけではなく、必要な形と件数に合わせます。",
    ],
  },
  {
    id: "l4-design-retry-backoff",
    level: 4,
    domain: "design",
    tags: ["reliability", "retry", "backoff"],
    prompt: "面接官: 外部API呼び出しのリトライ設計で重要なことはどれですか?",
    correct: {
      id: "correct",
      text: "リトライ可能な失敗か判断し、バックオフと冪等性を考えること",
    },
    distractors: [
      { id: "d1", text: "失敗したら無限に即時リトライすること" },
      { id: "d2", text: "4xxも5xxも必ず同じ扱いにすること" },
      { id: "d3", text: "リトライすれば二重決済は絶対に起きないと考えること" },
      { id: "d4", text: "タイムアウトを設定しないこと" },
      { id: "d5", text: "ログを残さないこと" },
    ],
    brief: "リトライは信頼性を上げますが、やり方を間違えると事故を増やします。",
    interview:
      "一時的な5xxやタイムアウトはリトライ候補です。指数バックオフ、ジッター、最大回数、冪等キー、タイムアウトを考えます。",
    relevance:
      "決済、メール、Webhook、外部SaaS連携で必須です。障害時に相手をさらに落とさない配慮も必要です。",
    next: "timeout、circuit breaker、dead letter queueを見ましょう。",
    deeper: [
      "即時リトライはスパイクを増やし、障害を悪化させます。",
      "成功したかわからないタイムアウトが一番難しく、冪等性が効きます。",
    ],
  },
  {
    id: "l4-design-graceful-degradation",
    level: 4,
    domain: "design",
    tags: ["resilience", "degradation"],
    prompt: "面接官: graceful degradation の考え方として、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "一部機能が失敗しても、重要な体験やコア機能を可能な範囲で維持する",
    },
    distractors: [
      { id: "d1", text: "失敗したら全画面を必ず真っ白にする" },
      { id: "d2", text: "すべてのエラーを握りつぶしてログも残さない" },
      { id: "d3", text: "本番ではテストをしない" },
      { id: "d4", text: "DBを使わずにCSSだけで保存する" },
      { id: "d5", text: "認可チェックを省略して使いやすくする" },
    ],
    brief: "壊れる前提で、壊れ方を設計する発想です。",
    interview:
      "おすすめ欄が落ちても購入はできる、検索が遅くてもトップページは出す、のように優先度を分けます。観測とアラートも必要です。",
    relevance:
      "外部API、画像、レコメンド、分析タグなど、Web画面には落ちてもよいものと落ちてはいけないものがあります。",
    next: "依存関係の重要度、フォールバック、タイムアウトを設計しましょう。",
    deeper: [
      "全部を守ろうとすると、重要な機能まで巻き添えになります。",
      "劣化時の表示もユーザー体験の一部です。",
    ],
  },
  {
    id: "l4-design-contract-compatibility",
    level: 4,
    domain: "design",
    tags: ["contract", "compatibility", "api"],
    prompt: "面接官: APIレスポンスに必須フィールドを追加するとき、最も注意すべきことはどれですか?",
    correct: {
      id: "correct",
      text: "既存クライアントが新しい必須前提に追従できるか、段階的移行できるか",
    },
    distractors: [
      { id: "d1", text: "レスポンスJSONの順番だけを固定すればよい" },
      { id: "d2", text: "サーバだけ先に変えれば全クライアントも自動更新される" },
      { id: "d3", text: "ステータスコードを常に200にすれば互換性は保てる" },
      { id: "d4", text: "認証を消せば互換性問題はなくなる" },
      { id: "d5", text: "DNSのTTLを短くすれば型変更は安全になる" },
    ],
    brief: "API変更は、サーバとクライアントのデプロイタイミングが違う前提で考えます。",
    interview:
      "追加フィールド自体は比較的安全ですが、それを必須前提にして古いクライアントを壊すなら移行設計が必要です。バージョンやfeature flagも候補です。",
    relevance:
      "SPA、モバイル、外部連携、マイクロサービスで起きます。『一緒にリリースすればよい』が通用しない現場があります。",
    next: "consumer-driven contract testとdeprecation policyを見ましょう。",
    deeper: [
      "レスポンスの追加とリクエスト必須項目の追加はリスクが違います。",
      "古いクライアントをどこまでサポートするかはプロダクト判断でもあります。",
    ],
  },
  {
    id: "l4-network-reverse-proxy",
    level: 4,
    domain: "network",
    tags: ["reverse-proxy", "headers", "load-balancer"],
    prompt: "面接官: リバースプロキシ配下のアプリで X-Forwarded-For を扱うときの注意はどれですか?",
    correct: {
      id: "correct",
      text: "信頼できるプロキシが付与した値だけを信用し、クライアント直送の偽装に注意する",
    },
    distractors: [
      { id: "d1", text: "ヘッダーなら必ず改ざんできないので無条件に信じる" },
      { id: "d2", text: "X-Forwarded-For はCSSの圧縮形式である" },
      { id: "d3", text: "このヘッダーがあるとTLSは不要になる" },
      { id: "d4", text: "DBの外部キー制約として扱う" },
      { id: "d5", text: "CookieのSameSite属性と同じ意味である" },
    ],
    brief: "ヘッダーはクライアントが偽装できるため、信頼境界を考えます。",
    interview:
      "ロードバランサやCDNが上書き・付与する構成なら、その手前から来たヘッダーを捨てるなどの設計が必要です。",
    relevance:
      "IP制限、レート制限、監査ログ、地域判定で重要です。間違えると制限回避やログ汚染になります。",
    next: "trust proxy、Forwardedヘッダー、CDNの接続元IPヘッダーを見ましょう。",
    deeper: [
      "信頼できるネットワーク境界の外から来るヘッダーは入力値です。",
      "Cloudflare環境ではCF-Connecting-IPなど、プラットフォーム固有ヘッダーもあります。",
    ],
  },
  {
    id: "l4-network-cdn-cache",
    level: 4,
    domain: "network",
    tags: ["cdn", "cache", "ttl"],
    prompt: "面接官: CDNキャッシュで事故りやすい設計はどれですか?",
    correct: {
      id: "correct",
      text: "ユーザーごとに違う認可付きレスポンスを、共有キャッシュキーで保存してしまう",
    },
    distractors: [
      { id: "d1", text: "静的画像に長めのキャッシュを設定する" },
      { id: "d2", text: "ハッシュ付きファイル名のCSSを長くキャッシュする" },
      { id: "d3", text: "ETagで再検証する" },
      { id: "d4", text: "公開ニュース記事のHTMLを短時間キャッシュする" },
      { id: "d5", text: "キャッシュヒット率を監視する" },
    ],
    brief: "共有キャッシュに個人別レスポンスを置くと情報漏洩の危険があります。",
    interview:
      "Cache-Control: private、Vary、CookieやAuthorizationの扱い、キャッシュキー設計を確認します。公開コンテンツと個人情報は分けます。",
    relevance: "CDNはWebの速度に効きますが、認可とキャッシュキーを間違えると重大事故になります。",
    next: "public/private、Vary、Surrogate-Key、cache purgeを見ましょう。",
    deeper: [
      "速くするためにキャッシュしたものが、誰に見えてよいデータかを必ず確認します。",
      "キャッシュ削除だけでなく、そもそもキーに何を含めるかが重要です。",
    ],
  },
  {
    id: "l4-security-rate-limit",
    level: 4,
    domain: "security",
    tags: ["rate-limit", "abuse-prevention"],
    prompt: "面接官: ログインAPIにレート制限を入れる主な理由はどれですか?",
    correct: {
      id: "correct",
      text: "総当たりや認証試行の乱用を抑え、サービスとアカウントを守るため",
    },
    distractors: [
      { id: "d1", text: "正しいユーザーだけログインできないようにするため" },
      { id: "d2", text: "パスワードを平文保存するため" },
      { id: "d3", text: "TLS証明書を発行するため" },
      { id: "d4", text: "DNSの名前解決を高速化するため" },
      { id: "d5", text: "CSSファイルを小さくするため" },
    ],
    brief: "レート制限は攻撃や乱用のコストを上げる基本対策です。",
    interview:
      "IP、アカウント、デバイス、失敗回数など複数軸で考えます。強すぎると正規ユーザーを巻き込むため、ロックアウトや追加認証も設計します。",
    relevance:
      "ログイン、パスワードリセット、メール送信、検索APIなどで必要です。攻撃とユーザー体験のバランスを取ります。",
    next: "アカウントロック、CAPTCHA、MFA、監査ログを見ましょう。",
    deeper: [
      "IPだけの制限はNATやプロキシで正規ユーザーを巻き込むことがあります。",
      "ユーザー名の存在確認につながるエラーメッセージにも注意します。",
    ],
  },
  {
    id: "l4-security-least-privilege",
    level: 4,
    domain: "security",
    tags: ["least-privilege", "authorization"],
    prompt: "面接官: 最小権限の原則として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "必要な主体に、必要な範囲と期間だけ権限を与える",
    },
    distractors: [
      { id: "d1", text: "開発を速くするため全員に本番管理者権限を渡す" },
      { id: "d2", text: "認証に成功したら全データを見せる" },
      { id: "d3", text: "権限チェックはUIだけで行う" },
      { id: "d4", text: "ログを残さないことで安全にする" },
      { id: "d5", text: "すべての秘密情報をソースコードに書く" },
    ],
    brief: "必要最小限の権限にすると、漏洩やミスの被害範囲を小さくできます。",
    interview:
      "人、サービスアカウント、APIキー、DBユーザーなどに広すぎる権限を与えないようにします。定期的な棚卸しも重要です。",
    relevance:
      "管理画面、CI/CD、クラウド権限、DB接続、社内ツールで効きます。Webエンジニアも日常的に扱います。",
    next: "RBAC、ABAC、監査ログ、secret rotationを見ましょう。",
    deeper: [
      "漏れたキーが読み取り専用か管理者かで被害は大きく変わります。",
      "一時的に強い権限を与えた後、戻し忘れる事故もあります。",
    ],
  },
  {
    id: "l4-security-secrets",
    level: 4,
    domain: "security",
    tags: ["secrets", "configuration"],
    prompt: "面接官: APIキーなどのシークレット管理として、最も望ましいものはどれですか?",
    correct: {
      id: "correct",
      text: "ソースコードに書かず、環境ごとのシークレット管理機構から注入する",
    },
    distractors: [
      { id: "d1", text: "READMEに貼って全員が見られるようにする" },
      { id: "d2", text: "フロントエンドのJavaScriptに埋め込む" },
      { id: "d3", text: "Git履歴に残してから削除すれば安全" },
      { id: "d4", text: "Base64にすれば公開しても安全" },
      { id: "d5", text: "ログに毎回出力して監視しやすくする" },
    ],
    brief: "シークレットはコードと分離し、漏れたときのローテーションも考えます。",
    interview:
      "環境変数、Secret Manager、Wrangler secretsなどを使い、アクセス権限を絞ります。ログやエラーにも出さないようにします。",
    relevance: "DB接続情報、外部APIキー、Basic認証のパスワードなど、Webアプリ運用で必ず出ます。",
    next: "secret rotation、権限分離、ログマスキングを見ましょう。",
    deeper: [
      "一度Gitに入った秘密は、削除コミットだけでは安全になりません。",
      "ビルド時に埋め込まれる値と実行時に注入される値を区別します。",
    ],
  },
  {
    id: "l5-computer-url-to-render",
    level: 5,
    domain: "computer",
    tags: ["browser", "network", "rendering"],
    prompt: "面接官: URLを入力してから画面が表示されるまでの説明で、最も筋がよいものはどれですか?",
    correct: {
      id: "correct",
      text: "DNS、接続確立、TLS、HTTP、HTML解析、追加リソース取得、レンダリングの流れで説明する",
    },
    distractors: [
      { id: "d1", text: "CSSが最初にDBへ接続し、DNSを生成する流れで説明する" },
      { id: "d2", text: "ブラウザはURLを直接SQLとして実行すると説明する" },
      { id: "d3", text: "HTTPだけを説明し、DNSやTLSやレンダリングは存在しないと言う" },
      { id: "d4", text: "サーバがユーザーの画面を遠隔操作すると説明する" },
      { id: "d5", text: "CookieがIPアドレスを決め、HTMLを暗号化すると説明する" },
    ],
    brief: "面接定番です。層を順番に説明できると、理解が一気に伝わります。",
    interview:
      "まずURLを解釈し、DNSで接続先を解決し、TCP/QUIC接続とTLSを確立し、HTTPリクエストを送ります。HTMLを受け取り、CSS/JS/画像を取得し、DOM/CSSOMから描画します。",
    relevance:
      "Webエンジニアの総合問題です。遅い、見えない、証明書エラー、CORS、キャッシュなどの切り分けにも繋がります。",
    next: "各ステップで失敗したときの症状とデバッグ方法を言えるようにしましょう。",
    deeper: [
      "HTTP/2やHTTP/3、CDN、Service Workerが入ると流れは変化します。",
      "面接では全部を暗記するより、層ごとに責務を説明できることが重要です。",
    ],
    diagram:
      "URL -> DNS -> TCP/QUIC -> TLS -> HTTP\nHTML -> CSS/JS/images -> render tree -> pixels",
  },
  {
    id: "l5-computer-race-condition",
    level: 5,
    domain: "computer",
    tags: ["race-condition", "concurrency", "database"],
    prompt:
      "面接官: 在庫が1つの商品を同時に2人が購入できてしまう。原因として最も疑うべきものはどれですか?",
    correct: {
      id: "correct",
      text: "同時更新に対する排他制御やトランザクション境界が不十分で、競合が起きている",
    },
    distractors: [
      { id: "d1", text: "CSSの読み込み順が違うため在庫が増える" },
      { id: "d2", text: "DNSのTTLが長いとDBの行数が増える" },
      { id: "d3", text: "TLS証明書があると必ず二重購入になる" },
      { id: "d4", text: "HTTP 404が返ったから購入が成功する" },
      { id: "d5", text: "画像サイズが大きいと在庫チェックが無効になる" },
    ],
    brief: "同時実行では、読み取りと更新の間に別処理が割り込むことがあります。",
    interview:
      "在庫確認と減算をトランザクションで扱う、条件付きUPDATEを使う、ロックや一意制約を使うなど、DB側で守る設計を考えます。",
    relevance:
      "予約、決済、クーポン、在庫、ポイント消費で実務事故になりやすいです。面接でも設計力を見られます。",
    next: "トランザクション分離レベル、楽観ロック、悲観ロックを見ましょう。",
    deeper: [
      "アプリ側のifだけでは、同時リクエストで壊れることがあります。",
      "DB制約を最後の防衛線として使う考え方が重要です。",
    ],
  },
  {
    id: "l5-design-availability-consistency",
    level: 5,
    domain: "design",
    tags: ["distributed-systems", "consistency", "availability"],
    prompt:
      "面接官: 分散システムで可用性と整合性のトレードオフを説明するなら、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "障害や遅延がある環境では、常に最新で一貫した結果と、常に応答することを同時に満たしにくい",
    },
    distractors: [
      { id: "d1", text: "整合性を上げるとCSSの色が変わる" },
      { id: "d2", text: "可用性はログイン画面のデザインだけを指す" },
      { id: "d3", text: "分散システムではネットワーク障害が絶対に起きない" },
      { id: "d4", text: "DBを1台にすれば全てのトレードオフが消える" },
      { id: "d5", text: "HTTPSを使えば整合性問題は完全に解決する" },
    ],
    brief: "分散ではネットワーク遅延や分断があるため、設計上の優先順位が必要です。",
    interview:
      "例えば在庫や決済は強い整合性を重視し、いいね数や閲覧数は多少遅れても可用性を重視する、というようにドメインで判断します。",
    relevance:
      "CDN、レプリカDB、キュー、マイクロサービス、キャッシュで日常的に出ます。全部を強整合にすると遅く脆くなることもあります。",
    next: "read replica、eventual consistency、補償トランザクションを見ましょう。",
    deeper: [
      "トレードオフは理論だけではなく、ユーザー体験と事業リスクで決めます。",
      "不整合が起きたときの検知と修復も設計に含めます。",
    ],
  },
  {
    id: "l5-design-monolith-microservices",
    level: 5,
    domain: "design",
    tags: ["architecture", "monolith", "microservices"],
    prompt: "面接官: モノリスからマイクロサービスへ分ける判断で、最も健全なものはどれですか?",
    correct: {
      id: "correct",
      text: "チーム境界、変更頻度、独立デプロイ、データ所有、運用負荷を見て判断する",
    },
    distractors: [
      { id: "d1", text: "流行っているので最初から必ず細かく分ける" },
      { id: "d2", text: "マイクロサービスにすればDB設計は不要になる" },
      { id: "d3", text: "サービスを分ければネットワーク障害は起きない" },
      { id: "d4", text: "モノリスは必ず悪で、保守できない" },
      { id: "d5", text: "CSSファイルの数だけサービスを作る" },
    ],
    brief: "マイクロサービスは組織と運用の複雑さを引き受ける設計です。",
    interview:
      "境界が明確で独立して変更・スケールしたい理由があるなら有効です。一方で通信、監視、デプロイ、データ整合性は難しくなります。",
    relevance:
      "Webサービスの成長段階で必ず議論になります。面接では銀の弾丸扱いしない姿勢が重要です。",
    next: "境界づけられたコンテキスト、分散トランザクション、観測性を見ましょう。",
    deeper: [
      "まずモジュラーモノリスで境界を整える選択もあります。",
      "データベース共有はサービス境界を曖昧にしがちです。",
    ],
  },
  {
    id: "l5-design-observability",
    level: 5,
    domain: "design",
    tags: ["observability", "metrics", "logs", "traces"],
    prompt:
      "面接官: 障害調査におけるメトリクス、ログ、トレースの使い分けとして、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "メトリクスで傾向を見て、ログで事実を確認し、トレースでリクエストの経路と遅延を追う",
    },
    distractors: [
      { id: "d1", text: "ログだけあればメトリクスもトレースも常に不要" },
      { id: "d2", text: "メトリクスはHTML、ログはCSS、トレースは画像のこと" },
      { id: "d3", text: "トレースはDNS設定を変更するための機能" },
      { id: "d4", text: "ログにはパスワードを必ず出力する" },
      { id: "d5", text: "メトリクスは本番では取得しない" },
    ],
    brief: "観測性は、何が起きているかを外から理解できるようにする設計です。",
    interview:
      "メトリクスは数値の変化、ログはイベントの詳細、トレースは分散した処理の流れを追うために使います。相関IDがあると調査しやすいです。",
    relevance:
      "Webサービス運用で必須です。遅い、落ちた、特定ユーザーだけ失敗する、を説明できるようになります。",
    next: "SLI/SLO、構造化ログ、correlation ID、samplingを見ましょう。",
    deeper: [
      "ログを増やしすぎるとコストとノイズが増えます。",
      "個人情報や秘密情報をログに出さない設計も重要です。",
    ],
  },
  {
    id: "l5-network-dns-tls-failure",
    level: 5,
    domain: "network",
    tags: ["dns", "tls", "incident"],
    prompt:
      "面接官: 独自ドメイン公開後に『安全ではない』警告が出る。最初に見るべき観点として最も妥当なのはどれですか?",
    correct: {
      id: "correct",
      text: "DNSが正しい向き先か、証明書が対象ドメインを含み有効か、HTTPS設定が完了しているか",
    },
    distractors: [
      { id: "d1", text: "CSSの色が青かどうかだけ確認する" },
      { id: "d2", text: "DBの正規化を解除する" },
      { id: "d3", text: "Cookieの値をパスワード平文にする" },
      { id: "d4", text: "HTTP 404を必ず200に変える" },
      { id: "d5", text: "レート制限を全部削除する" },
    ],
    brief: "ドメイン公開の障害は、DNS、証明書、HTTPS設定のどこかに出やすいです。",
    interview:
      "まず名前解決、接続先、証明書のSAN、期限、発行状態、リダイレクト、混在コンテンツを確認します。アプリのコード以前の層か切り分けます。",
    relevance:
      "Webエンジニアはデプロイ後のドメイン・証明書トラブルにも向き合います。インフラとの会話がしやすくなります。",
    next: "dig、curl -v、ブラウザ証明書表示、DevTools Securityを使えるようにしましょう。",
    deeper: [
      "証明書が正しくても、HTTP画像を読み込む混在コンテンツで警告が出ることがあります。",
      "DNS変更直後はTTLやキャッシュで環境差が出ることがあります。",
    ],
  },
  {
    id: "l5-security-secure-cookie",
    level: 5,
    domain: "security",
    tags: ["cookie", "https", "session-security"],
    prompt:
      "面接官: セッションCookieに HttpOnly, Secure, SameSite を付ける理由として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "XSSや盗聴やCSRFのリスクを下げるため、Cookieの読み取り・送信条件を制御する",
    },
    distractors: [
      { id: "d1", text: "CookieをDBインデックスとして使うため" },
      { id: "d2", text: "HTMLを自動生成するため" },
      { id: "d3", text: "DNSのTTLを設定するため" },
      { id: "d4", text: "パスワードを復号できるようにするため" },
      { id: "d5", text: "HTTPステータスコードを固定するため" },
    ],
    brief: "Cookie属性は、ログイン状態を守る実務的な防御線です。",
    interview:
      "HttpOnlyはJSからの読み取りを防ぎ、SecureはHTTPS時のみ送信し、SameSiteはクロスサイト送信を制御してCSRFリスクを下げます。",
    relevance:
      "ログイン実装、管理画面、API認証で必須です。属性の意味を説明できるとWebセキュリティの基礎が伝わります。",
    next: "SameSite=NoneにはSecureが必要、サブドメインとDomain属性も見ましょう。",
    deeper: [
      "HttpOnlyはXSSそのものを止めるわけではありませんが、Cookie窃取を難しくします。",
      "SameSiteは万能ではないため、重要操作にはCSRFトークンも検討します。",
    ],
  },
  {
    id: "l5-security-threat-modeling",
    level: 5,
    domain: "security",
    tags: ["threat-modeling", "signup", "abuse"],
    prompt: "面接官: 新規登録機能の脅威を洗い出すとき、最も良い観点はどれですか?",
    correct: {
      id: "correct",
      text: "なりすまし、bot乱用、メール確認、パスワード保護、個人情報、レート制限を考える",
    },
    distractors: [
      { id: "d1", text: "ボタンの角丸だけを考える" },
      { id: "d2", text: "DBを使えばセキュリティ検討は不要" },
      { id: "d3", text: "HTTPSならbot対策は不要" },
      { id: "d4", text: "登録フォームではログを一切取らない" },
      { id: "d5", text: "パスワードをメールで送り返せるようにする" },
    ],
    brief: "脅威モデリングは、誰が何を悪用できるかを先に考える作業です。",
    interview:
      "攻撃者、守る資産、入口、悪用シナリオ、対策、残るリスクを整理します。登録機能ならbot、メール所有確認、弱いパスワード、情報漏洩を考えます。",
    relevance:
      "Web機能追加の設計レビューで使えます。セキュリティを後付けでなく設計に入れられるようになります。",
    next: "STRIDE、abuse case、セキュリティレビューの観点を見ましょう。",
    deeper: [
      "全リスクをゼロにするのではなく、影響度と可能性で優先順位をつけます。",
      "攻撃者にとってのコストを上げることも重要な対策です。",
    ],
  },
  {
    id: "l5-network-performance-bottleneck",
    level: 5,
    domain: "network",
    tags: ["performance", "bottleneck", "web-vitals"],
    prompt: "面接官: Webページが遅いと言われたとき、最初の対応として最も良いものはどれですか?",
    correct: {
      id: "correct",
      text: "計測して、DNS/接続/TTFB/リソース/JS実行/レンダリングのどこが支配的か切り分ける",
    },
    distractors: [
      { id: "d1", text: "計測せずに全コードを書き直す" },
      { id: "d2", text: "ステータスコードを200にすれば必ず速くなる" },
      { id: "d3", text: "CSSを消せばセキュリティが上がるので速くなる" },
      { id: "d4", text: "DNSを使わないようにユーザーへIP直打ちを依頼する" },
      { id: "d5", text: "ログを削除して原因を見えなくする" },
    ],
    brief: "パフォーマンス改善は計測と切り分けからです。",
    interview:
      "DevTools、RUM、サーバメトリクスで、ネットワーク、サーバ処理、JS、レンダリングのどこがボトルネックかを見ます。改善策は原因ごとに違います。",
    relevance:
      "Webエンジニアの価値が出やすい領域です。速くする技ではなく、どこを速くすべきかを説明できることが大切です。",
    next: "Core Web Vitals、TTFB、LCP、INP、waterfallを見ましょう。",
    deeper: [
      "CDNで効く遅さと、クライアントJS削減で効く遅さは違います。",
      "平均値だけでなく、p95や低速回線の体験も見ます。",
    ],
  },
  {
    id: "l5-security-incident-explanation",
    level: 5,
    domain: "security",
    tags: ["incident", "communication", "root-cause"],
    prompt: "面接官: セキュリティインシデント後の説明で、最も信頼できるものはどれですか?",
    correct: {
      id: "correct",
      text: "影響範囲、原因、封じ込め、再発防止、残るリスクを事実ベースで説明する",
    },
    distractors: [
      { id: "d1", text: "原因は不明でも、何も起きていないと断言する" },
      { id: "d2", text: "ログを見ずに犯人探しだけをする" },
      { id: "d3", text: "ユーザーへの影響を確認せずに完了扱いにする" },
      { id: "d4", text: "再発防止策を考えずにコードだけ戻す" },
      { id: "d5", text: "秘密情報を説明文にすべて書く" },
    ],
    brief: "インシデント対応は技術とコミュニケーションの両方が問われます。",
    interview:
      "まず封じ込めと影響範囲確認、次に原因分析、復旧、再発防止、関係者への報告を行います。推測と事実を分けることが重要です。",
    relevance:
      "Webサービス運用では障害や脆弱性対応が避けられません。落ち着いて説明できる人は信頼されます。",
    next: "postmortem、timeline、blast radius、action itemを見ましょう。",
    deeper: [
      "責任追及より、システムとして再発しにくくする姿勢が重要です。",
      "報告では公開してよい情報と秘密にすべき情報を分けます。",
    ],
  },
];
