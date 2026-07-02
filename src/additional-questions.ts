import type { Question } from "./types";

export const additionalQuestions: Question[] = [
  {
    id: "l1-computer-cpu-ram",
    level: 1,
    domain: "computer",
    tags: ["cpu", "ram", "acronym"],
    prompt: "面接官: CPU と RAM の略語と役割を説明するなら、最もよいものはどれですか?",
    correct: {
      id: "correct",
      text: "CPUはCentral Processing Unitで命令を実行する装置、RAMはRandom Access Memoryで実行中データを置く主記憶",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "CPUは計算や制御を担う処理装置、RAMはプログラム実行中に高速アクセスする揮発性メモリ",
      },
    ],
    distractors: [
      { id: "d1", text: "CPUは長期保存用の装置、RAMはネットワーク通信を暗号化する装置" },
      { id: "d2", text: "CPUはRandom Access Unitで、RAMはCentral Processing Memoryの略" },
      { id: "d3", text: "CPUとRAMはどちらも永続ストレージで、違いは容量の大きさだけ" },
      { id: "d4", text: "CPUはOSだけが使い、Webアプリのコード実行にはRAMだけが使われる" },
      { id: "d5", text: "RAMは命令を実行する装置で、CPUは実行中の変数を保存する場所" },
    ],
    brief: "略語を言えるだけでなく、実行装置と作業場所の違いまで説明できると強いです。",
    interview:
      "CPUは命令を実行し、RAMはCPUが扱う命令やデータを置く主記憶です。RAMは高速ですが通常は揮発性です。",
    relevance:
      "WebアプリのCPU負荷、メモリ使用量、メモリリーク、スケール判断を説明するときの土台です。",
    next: "CPU cache、レジスタ、メモリ階層を見ましょう。",
    deeper: [
      "CPUとRAMの間にもキャッシュがあり、速度差を埋めています。",
      "RAMが大きくてもCPU boundな処理が速くなるとは限りません。",
    ],
  },
  {
    id: "l1-computer-os-kernel",
    level: 1,
    domain: "computer",
    tags: ["os", "kernel", "syscall"],
    prompt: "面接官: OSカーネルの役割として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "CPU、メモリ、ファイル、ネットワークなどの資源を管理し、プロセスへ安全な抽象を提供する",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "アプリが直接ハードウェアを触らなくてよいように、資源管理と保護境界を担当する中核部分",
      },
    ],
    distractors: [
      { id: "d1", text: "HTMLやCSSを解析して画面に描画するブラウザ内部の部品" },
      { id: "d2", text: "アプリケーションの業務ロジックを配置するレイヤー" },
      { id: "d3", text: "ユーザーごとのパスワードハッシュを保存する専用DB" },
      { id: "d4", text: "HTTPステータスコードを生成するWebフレームワークの部品" },
      { id: "d5", text: "CPUの中にあり、JavaScriptのPromiseだけをスケジューリングする装置" },
    ],
    brief: "OSカーネルは資源管理と保護の中心です。",
    interview:
      "プロセス、メモリ、ファイル、ソケットなどを管理し、システムコールを通じてアプリに機能を提供します。",
    relevance: "ファイルI/O、ソケット、プロセス、権限、コンテナの理解に直結します。",
    next: "ユーザーモード、カーネルモード、システムコールを押さえましょう。",
    deeper: [
      "アプリは通常、直接ハードウェアを触らずOSの抽象を使います。",
      "保護境界があるから、あるプロセスのバグが全体を壊しにくくなります。",
    ],
  },
  {
    id: "l1-network-tcp-udp",
    level: 1,
    domain: "network",
    tags: ["tcp", "udp", "acronym"],
    prompt: "面接官: TCP と UDP の違いを最初に説明するなら、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "TCPは順序や再送などで信頼性あるストリームを提供し、UDPは軽量なデータグラムを送る",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "TCPは接続を作って欠落や順序を扱い、UDPは低オーバーヘッドでアプリ側に制御を寄せる",
      },
    ],
    distractors: [
      { id: "d1", text: "TCPは暗号化あり、UDPは暗号化なしという違いだけ" },
      { id: "d2", text: "TCPはDNS専用、UDPはHTTP専用のプロトコル" },
      { id: "d3", text: "TCPはIPアドレスを決め、UDPはドメイン名を解決する" },
      { id: "d4", text: "UDPは必ずTCPより安全で、パケット順序も保証する" },
      { id: "d5", text: "TCPとUDPはアプリケーション層なので、HTTPと同じ粒度で使い分ける" },
    ],
    brief: "TCPは信頼性、UDPは軽量性と制御自由度が入口です。",
    interview:
      "TCPは再送、順序、輻輳制御などを持ちます。UDPはそれらを薄くし、リアルタイム性や独自制御を優先できます。",
    relevance: "HTTP/1.1やHTTP/2はTCP、HTTP/3はQUICでUDP上に作られるため、Webでも重要です。",
    next: "TCPの3-way handshake、QUIC、輻輳制御を見ましょう。",
    deeper: [
      "UDPだから信頼性が絶対にないのではなく、必要ならアプリやQUICが上で実装します。",
      "TLSはTCP専用ではなく、QUICではTLS 1.3の仕組みが統合されています。",
    ],
  },
  {
    id: "l1-security-cia",
    level: 1,
    domain: "security",
    tags: ["cia", "acronym", "security-basics"],
    prompt: "面接官: セキュリティのCIAを説明するなら、最も正しいものはどれですか?",
    correct: {
      id: "correct",
      text: "Confidentiality、Integrity、Availabilityで、機密性・完全性・可用性を表す",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "情報を見せない、改ざんさせない、必要なとき使える、という3つの基本観点",
      },
    ],
    distractors: [
      { id: "d1", text: "Cookie、Identity、Authorizationで、Webログインの3要素を表す" },
      { id: "d2", text: "Cache、Index、APIで、Web性能改善の3要素を表す" },
      { id: "d3", text: "Confidentiality、Integrity、Authenticationで、可用性は含まれない" },
      { id: "d4", text: "暗号化、ハッシュ化、署名だけをまとめた暗号技術の分類" },
      { id: "d5", text: "認証、認可、監査ログの3つだけを指すWebアプリ専用の用語" },
    ],
    brief: "CIAはセキュリティ要求を整理する入口です。",
    interview:
      "機密性は見られないこと、完全性は改ざんされないこと、可用性は必要時に使えることです。",
    relevance: "個人情報漏洩、データ改ざん、DDoSなどを別々の観点で説明できます。",
    next: "それぞれに対する攻撃例と対策を対応づけましょう。",
    deeper: [
      "HTTPSは主に機密性と完全性に効きますが、可用性は別途考えます。",
      "セキュリティは秘密を守るだけではなく、サービスを使える状態に保つことも含みます。",
    ],
  },
  {
    id: "l1-design-abstraction-leak",
    level: 1,
    domain: "design",
    tags: ["abstraction", "leaky-abstraction"],
    prompt: "面接官: 抽象化が漏れている状態として、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "利用側が本来知らなくてよい内部実装や制約を意識しないと正しく使えない状態",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "外側は単純なAPIに見えるが、内部のDBや外部APIの都合が呼び出し側へ染み出している状態",
      },
    ],
    distractors: [
      { id: "d1", text: "抽象化した関数の名前が短すぎて、処理内容を推測しにくい状態" },
      { id: "d2", text: "内部実装を全て隠しているため、利用側が詳細を一切知らない状態" },
      { id: "d3", text: "テストコードが実装コードと別ファイルに分かれている状態" },
      { id: "d4", text: "APIのレスポンスから不要なフィールドを削っている状態" },
      { id: "d5", text: "依存関係を減らすためにインターフェースを導入した状態そのもの" },
    ],
    brief: "漏れた抽象化は、隠したはずの都合を利用側に押し付けます。",
    interview:
      "例えばRepositoryの利用側が特定DBのロックやクエリ順序を知らないと壊れるなら、抽象化が漏れています。",
    relevance: "DB差し替え、外部APIラップ、UIコンポーネント設計で起きます。",
    next: "よい抽象の境界と、抽象化しない判断も見ましょう。",
    deeper: [
      "抽象化は完全に漏れないものではありません。何を隠し、何を契約にするかが設計です。",
      "漏れを見つけたら、契約に含めるか、内部に閉じ込めるかを判断します。",
    ],
  },
  {
    id: "l2-computer-two-complement",
    level: 2,
    domain: "computer",
    tags: ["integer", "twos-complement", "binary"],
    prompt: "面接官: 2の補数表現を使う主な利点として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "負数も含めた加減算を、同じ加算回路で扱いやすくできる",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "符号付き整数の負数表現を、桁あふれを含む通常の2進加算と相性よく扱える",
      },
    ],
    distractors: [
      { id: "d1", text: "全ての小数を誤差なく表現できるようにするため" },
      { id: "d2", text: "文字列比較を数値比較と同じ命令で行うため" },
      { id: "d3", text: "負数を保存するときだけメモリ使用量を半分にするため" },
      { id: "d4", text: "CPUが浮動小数点演算を使わずに暗号化できるようにするため" },
      { id: "d5", text: "符号ビットをなくし、正負を区別しない整数だけにするため" },
    ],
    brief: "2の補数は符号付き整数と加算回路の相性がよい表現です。",
    interview:
      "負数を反転+1で表すことで、減算を加算として扱いやすくなります。オーバーフローもビット幅に依存します。",
    relevance: "整数オーバーフロー、境界値、バイナリプロトコル、DB整数型の理解に繋がります。",
    next: "符号付き/符号なし整数、オーバーフロー、ビット幅を見ましょう。",
    deeper: [
      "JavaScriptのnumberは整数専用ではなくIEEE 754倍精度浮動小数点です。",
      "ビット演算では32bit整数への変換が関わります。",
    ],
  },
  {
    id: "l2-computer-utf8",
    level: 2,
    domain: "computer",
    tags: ["unicode", "utf-8", "encoding"],
    prompt: "面接官: Unicode と UTF-8 の関係として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "Unicodeは文字へ番号を割り当てる体系で、UTF-8はその番号をバイト列へ符号化する方式",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "Unicodeは文字集合とコードポイントの考え方、UTF-8はそれを可変長バイト列にするエンコーディング",
      },
    ],
    distractors: [
      { id: "d1", text: "Unicodeは英数字専用で、UTF-8は日本語専用の文字集合" },
      { id: "d2", text: "UTF-8は文字の見た目を決めるフォント形式で、UnicodeはCSSの単位" },
      { id: "d3", text: "UnicodeとUTF-8は完全に同じ意味で、どちらも1文字を必ず1バイトで表す" },
      { id: "d4", text: "UTF-8は通信暗号化方式なので、文字化けとは関係しない" },
      { id: "d5", text: "UnicodeはDB専用、UTF-8はHTTPヘッダー専用の規格" },
    ],
    brief: "文字の番号付けと、バイト列への表現は分けて考えます。",
    interview: "Unicodeのコードポイントを、UTF-8やUTF-16のような方式で実際のバイト列にします。",
    relevance: "文字化け、URLエンコード、DB照合順序、JSON処理で効きます。",
    next: "コードポイント、grapheme cluster、正規化を見ましょう。",
    deeper: [
      "見た目の1文字とコードポイント1つは一致しないことがあります。",
      "絵文字や濁点などは文字数カウントの罠になります。",
    ],
  },
  {
    id: "l2-network-http-acronyms",
    level: 2,
    domain: "network",
    tags: ["http", "tls", "dns", "acronym"],
    prompt: "面接官: HTTP、TLS、DNS の略語と役割の組み合わせとして、最も正しいものはどれですか?",
    correct: {
      id: "correct",
      text: "HTTPはHypertext Transfer Protocol、TLSはTransport Layer Security、DNSはDomain Name System",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "HTTPはリクエスト/レスポンスの約束、TLSは通信保護、DNSは名前解決を担う",
      },
    ],
    distractors: [
      { id: "d1", text: "HTTPは暗号化、TLSは名前解決、DNSはHTML転送を担う" },
      {
        id: "d2",
        text: "HTTPはHost Transfer Type、TLSはToken Login System、DNSはData Network Socket",
      },
      { id: "d3", text: "HTTPとTLSは同じ層の代替プロトコルで、DNSはHTTPヘッダーの一種" },
      { id: "d4", text: "TLSはHTTP/3で不要になり、DNSだけで接続先の正当性も保証する" },
      { id: "d5", text: "DNSはURLのパスまで解決し、HTTPはIPアドレスだけを転送する" },
    ],
    brief: "略語と層の責務をセットで言えると、URL入力後の説明が安定します。",
    interview:
      "DNSで名前を解決し、TLSで通信を守り、HTTPでアプリケーションの要求と応答を表現します。",
    relevance: "デプロイ障害、証明書エラー、API通信、キャッシュの切り分けに必要です。",
    next: "各プロトコルが失敗したときの症状を対応づけましょう。",
    deeper: [
      "TLSはHTTPだけでなく他のプロトコルにも使われます。",
      "DNSは正当性保証そのものではなく、証明書検証とは役割が違います。",
    ],
  },
  {
    id: "l2-security-xss-csrf-acronyms",
    level: 2,
    domain: "security",
    tags: ["xss", "csrf", "acronym"],
    prompt: "面接官: XSS と CSRF の違いとして、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "XSSはブラウザで攻撃者のスクリプトが実行される問題、CSRFはログイン済みブラウザに意図しないリクエストを送らせる問題",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "XSSはCross-Site Scripting、CSRFはCross-Site Request Forgeryで、攻撃の成立条件と対策が違う",
      },
    ],
    distractors: [
      {
        id: "d1",
        text: "XSSはCookie自動送信、CSRFはJavaScript実行の問題なので、名前と内容が逆である",
      },
      { id: "d2", text: "XSSもCSRFもSQLをDBへ注入する攻撃で、対策はプレースホルダだけでよい" },
      { id: "d3", text: "XSSはHTTPSで防げるが、CSRFはDNSSECで防ぐ必要がある" },
      { id: "d4", text: "XSSはサーバ間通信、CSRFはブラウザ表示だけに関係する攻撃である" },
      {
        id: "d5",
        text: "XSSとCSRFはどちらも同一オリジンポリシーが完全に防ぐため、アプリ側対策は不要",
      },
    ],
    brief: "名前が似ていても、攻撃者が利用する仕組みが違います。",
    interview:
      "XSSは出力エスケープやCSP、CSRFはトークンやSameSite、状態変更GET禁止などで考えます。",
    relevance: "ログイン付きWebアプリのフォーム、Cookie、API設計で必須です。",
    next: "Cookie認証とAuthorizationヘッダー方式でCSRF条件がどう変わるか見ましょう。",
    deeper: [
      "XSSがあるとCSRFトークンを盗まれる可能性もあります。",
      "複数の脆弱性は組み合わさるため、単体対策だけでは不十分なことがあります。",
    ],
  },
  {
    id: "l2-design-solid-srp",
    level: 2,
    domain: "design",
    tags: ["solid", "srp", "acronym"],
    prompt: "面接官: SOLID の SRP を説明するなら、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "Single Responsibility Principleで、モジュールが変更される理由をできるだけ一つに寄せる考え方",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "単に関数を小さくする話ではなく、責務と変更理由を揃えるための設計原則",
      },
    ],
    distractors: [
      { id: "d1", text: "Single Runtime Processで、Webアプリを必ず1プロセスで動かす原則" },
      { id: "d2", text: "責務を一つにするため、全機能を同じクラスへ集めて入口を単純にする" },
      { id: "d3", text: "SRPはUIコンポーネント専用で、APIやドメインロジックには適用しない" },
      { id: "d4", text: "関数が10行以下ならSRPを満たすため、変更理由は考えなくてよい" },
      { id: "d5", text: "SRPは依存注入を必ず使うという意味で、責務分割とは別の話" },
    ],
    brief: "SRPはサイズより変更理由に注目します。",
    interview: "同じ理由で変わるものを近くに置き、違う理由で変わるものを分けると説明できます。",
    relevance: "画面、API、ユースケース、DBアクセスの分け方に関係します。",
    next: "凝集度、依存方向、境界づけられたコンテキストを見ましょう。",
    deeper: [
      "小さい関数でも責務が混ざっていればSRP違反になり得ます。",
      "責務を分けすぎると追跡コストが上がります。",
    ],
  },
  {
    id: "l3-computer-cache-locality",
    level: 3,
    domain: "computer",
    tags: ["cpu-cache", "locality"],
    prompt: "面接官: キャッシュ局所性を説明するなら、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "近い時間や近いアドレスのデータが再利用されやすい性質を利用し、CPU cacheの効果を上げる考え方",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "時間的局所性と空間的局所性により、連続アクセスや再利用がメモリアクセスを速くしやすい",
      },
    ],
    distractors: [
      {
        id: "d1",
        text: "HTTPキャッシュと同じ意味で、CPUはCache-Controlヘッダーに従ってメモリを読む",
      },
      {
        id: "d2",
        text: "局所性が高いほど必ずネットワークI/Oが減るため、DBアクセスも自動的に高速化する",
      },
      {
        id: "d3",
        text: "キャッシュ局所性はオブジェクト指向の凝集度の別名で、ハードウェアとは関係しない",
      },
      { id: "d4", text: "ランダムアクセスの方がCPU cacheに乗りやすく、配列の連続走査は不利になる" },
      { id: "d5", text: "GCがある言語ではメモリ配置を考えられないため、局所性は性能に影響しない" },
    ],
    brief: "CPUはメモリより速く、近くのデータをまとめてcacheに載せます。",
    interview:
      "配列の連続走査が速い理由や、ポインタを辿る構造が遅くなり得る理由として説明できます。",
    relevance:
      "大量データ処理、Node.jsの配列操作、DBのページ読み取り、インデックス理解にも繋がります。",
    next: "CPU cache line、メモリ階層、B-treeのページ局所性を見ましょう。",
    deeper: [
      "Webエンジニアでも、性能問題を深掘るとメモリ配置や局所性が出ます。",
      "ただし最初にやるべきは計測です。",
    ],
  },
  {
    id: "l3-computer-virtual-memory",
    level: 3,
    domain: "computer",
    tags: ["virtual-memory", "page", "os"],
    prompt: "面接官: 仮想メモリの説明として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "各プロセスに独立したアドレス空間を見せ、OSとMMUが物理メモリへ対応づける仕組み",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "プロセス分離、ページング、メモリ保護を支える、仮想アドレスから物理アドレスへの変換機構",
      },
    ],
    distractors: [
      { id: "d1", text: "メモリが足りないときにクラウド上のRAMを自動で借りる仕組み" },
      { id: "d2", text: "JavaScriptの仮想DOMと同じ考え方で、画面差分をメモリへ保存する仕組み" },
      { id: "d3", text: "全プロセスが同じ物理アドレスを直接共有し、コピーを減らすための仕組み" },
      { id: "d4", text: "HTTPレスポンスをブラウザメモリへ一時保存するキャッシュ機構" },
      { id: "d5", text: "DBの仮想テーブルを作り、JOINを高速化するSQL機能" },
    ],
    brief: "仮想メモリはプロセス分離とメモリ保護の土台です。",
    interview:
      "プロセスごとに独立したアドレス空間を持つよう見せ、ページテーブルで物理メモリに対応づけます。",
    relevance: "メモリリーク、OOM、コンテナのメモリ制限、fork、mmapの理解に効きます。",
    next: "ページ、TLB、page fault、swapを見ましょう。",
    deeper: [
      "仮想メモリにより、プロセスは自分だけの連続したメモリを持つように見えます。",
      "page faultは必ずエラーではなく、遅延読み込みにも関係します。",
    ],
  },
  {
    id: "l3-network-tls-handshake",
    level: 3,
    domain: "network",
    tags: ["tls", "handshake"],
    prompt: "面接官: TLS handshakeの目的として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "接続先の証明書を検証し、以後の通信に使う鍵を安全に合意すること",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "サーバ認証と鍵共有を行い、暗号化・改ざん検知できる通信路を作ること",
      },
    ],
    distractors: [
      { id: "d1", text: "HTTPメソッドがGETかPOSTかをサーバと相談して決めること" },
      { id: "d2", text: "DNSのAレコードを取得し、IPアドレスを証明書へ埋め込むこと" },
      { id: "d3", text: "ユーザーのログインIDとパスワードを検証し、認可ロールを決めること" },
      { id: "d4", text: "レスポンス本文をgzip圧縮するかどうかを決めること" },
      { id: "d5", text: "ブラウザキャッシュを削除し、最新HTMLを強制取得すること" },
    ],
    brief: "TLS handshakeは、誰と安全に話すかと、どの鍵で話すかを決めます。",
    interview:
      "証明書チェーンやホスト名を検証し、鍵交換で共有秘密を作り、以後のHTTP通信を保護します。",
    relevance: "証明書エラー、HTTPS化、mTLS、CDNとオリジン間通信の説明で使います。",
    next: "CA、証明書チェーン、SNI、ALPNを見ましょう。",
    deeper: [
      "TLSは通信路を守りますが、アプリの認可バグは防ぎません。",
      "HTTP/2ではALPNでプロトコル交渉も関係します。",
    ],
  },
  {
    id: "l3-security-threat-asset",
    level: 3,
    domain: "security",
    tags: ["threat-modeling", "asset"],
    prompt: "面接官: 脅威モデリングで最初に明確にすべきこととして、最も重要なのはどれですか?",
    correct: {
      id: "correct",
      text: "守る資産、攻撃者、入口、悪用シナリオ、影響を整理すること",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "何を守るのか、誰がどう攻撃できるのか、どこから入れるのかを先に定義すること",
      },
    ],
    distractors: [
      { id: "d1", text: "最初に全ての脆弱性へ同じ優先度を付け、網羅的に修正計画を立てること" },
      { id: "d2", text: "使う暗号方式を決めれば、資産や攻撃者の整理は後回しでよい" },
      { id: "d3", text: "脅威モデリングは障害後の振り返りなので、実装前には行わない" },
      { id: "d4", text: "攻撃者視点は危険なので、通常のユーザーフローだけを見て設計すること" },
      { id: "d5", text: "守る資産を増やすほど安全になるので、全データを同じ強度で保護すること" },
    ],
    brief: "何を誰から守るかが曖昧だと、対策の優先順位も曖昧になります。",
    interview: "資産、攻撃者、信頼境界、入口、影響を整理し、リスクに応じて対策します。",
    relevance: "新規登録、管理画面、Webhook、ファイルアップロードなどの設計レビューで使います。",
    next: "STRIDE、信頼境界、abuse caseを見ましょう。",
    deeper: [
      "全てを同じ強度で守るのではなく、影響度と可能性で優先順位をつけます。",
      "Webでは入口が多く、API、フォーム、管理画面、外部連携が攻撃面になります。",
    ],
  },
  {
    id: "l3-design-acid",
    level: 3,
    domain: "design",
    tags: ["acid", "transaction", "acronym"],
    prompt: "面接官: ACIDの説明として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "Atomicity、Consistency、Isolation、Durabilityで、トランザクションの性質を表す",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "全部成功か全部失敗、一貫性維持、同時実行の分離、コミット後の永続性を表す性質",
      },
    ],
    distractors: [
      {
        id: "d1",
        text: "Availability、Consistency、Integrity、Durabilityで、CAP定理の4要素を表す",
      },
      { id: "d2", text: "API、Cache、Index、Databaseで、Webアプリの性能改善手順を表す" },
      { id: "d3", text: "ACIDはNoSQL専用の用語で、RDBのトランザクションには関係しない" },
      { id: "d4", text: "Atomicityは処理を高速化する性質で、失敗時のロールバックとは関係しない" },
      { id: "d5", text: "Isolationは永続化のことで、Durabilityは同時実行制御のことである" },
    ],
    brief: "ACIDはDBトランザクションの基本語彙です。",
    interview:
      "決済や在庫のような処理で、途中失敗や同時更新からデータを守るための性質として説明できます。",
    relevance: "注文、決済、予約、ポイント消費、在庫減算の設計で必須です。",
    next: "分離レベル、ロック、楽観/悲観制御を見ましょう。",
    deeper: [
      "ConsistencyはDB制約だけでなく、アプリが定義する不変条件とも関係します。",
      "ACIDを強く求めるほど性能や可用性とのトレードオフが出ます。",
    ],
  },
  {
    id: "l4-computer-gc",
    level: 4,
    domain: "computer",
    tags: ["garbage-collection", "memory"],
    prompt: "面接官: GCがある言語でもメモリリークが起きる理由として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "不要になったオブジェクトへの参照が残っていると、GCはまだ到達可能と判断して回収できないから",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "GCは到達不能なメモリを回収する仕組みなので、キャッシュやイベントリスナが参照を持ち続けると残る",
      },
    ],
    distractors: [
      { id: "d1", text: "GCはメモリを回収せず、CPU使用率だけを下げる仕組みだから" },
      { id: "d2", text: "GCがある言語ではメモリリークは定義上起きないため、原因はOSだけにある" },
      { id: "d3", text: "参照が残っていても、変数名が使われていなければ必ず回収されるから" },
      { id: "d4", text: "GCはDB接続やファイルディスクリプタも自動で安全に閉じるから" },
      {
        id: "d5",
        text: "メモリリークはC/C++専用の問題で、JavaScriptでは配列サイズだけが問題になる",
      },
    ],
    brief: "GCは万能ではなく、到達可能なものは回収しません。",
    interview:
      "キャッシュ、グローバル配列、イベントリスナ、クロージャなどが参照を保持するとメモリが残り続けます。",
    relevance: "Node.jsサーバ、ブラウザSPA、Workersのメモリ制限で重要です。",
    next: "ヒープスナップショット、参照グラフ、WeakMapを見ましょう。",
    deeper: [
      "リソースリークとメモリリークは近いですが、ファイルやソケットは明示的closeが必要な場合があります。",
      "GCの停止時間もレイテンシに影響します。",
    ],
  },
  {
    id: "l4-computer-backpressure",
    level: 4,
    domain: "computer",
    tags: ["backpressure", "stream", "queue"],
    prompt: "面接官: バックプレッシャーの説明として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "下流が処理しきれないとき、上流の生成や読み込みを抑えてメモリやキューの爆発を防ぐ仕組み",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "生産者が消費者の処理速度を考慮し、流量制御することで過負荷を避ける考え方",
      },
    ],
    distractors: [
      { id: "d1", text: "レスポンスを圧縮してネットワーク帯域を減らすHTTPヘッダーのこと" },
      { id: "d2", text: "DBが遅いときに、アプリが全リクエストを無限キューへ積む設計" },
      { id: "d3", text: "エラーが起きたら即時リトライを増やして、成功するまで圧力をかけること" },
      { id: "d4", text: "CPU使用率が低いときに、あえて処理を遅くしてログを増やすこと" },
      { id: "d5", text: "キャッシュが古いときに、上流CDNへ削除リクエストを送ること" },
    ],
    brief: "バックプレッシャーは流量制御です。",
    interview:
      "ストリーム、キュー、外部API呼び出しで、消費側が遅いのに生産し続けるとメモリや待ち行列が膨らみます。",
    relevance:
      "CSVアップロード、ログ処理、メール送信、ジョブキュー、ストリーミングレスポンスで効きます。",
    next: "ストリーム、キュー長、レート制限、ドロップ戦略を見ましょう。",
    deeper: [
      "無限キューは障害を先送りして悪化させます。",
      "負荷を受け止めるだけでなく、早く失敗させる設計も必要です。",
    ],
  },
  {
    id: "l4-network-head-of-line",
    level: 4,
    domain: "network",
    tags: ["http2", "http3", "head-of-line-blocking"],
    prompt: "面接官: Head-of-Line blocking を説明するなら、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "先頭の処理やパケットが詰まることで、後続の独立して見える処理まで待たされる問題",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "キューやTCPストリームで前の単位が失われると、後続が届いていても処理できず遅延する現象",
      },
    ],
    distractors: [
      { id: "d1", text: "HTTPヘッダーが大きすぎて、HTMLの先頭行だけが圧縮される問題" },
      { id: "d2", text: "DNSの最初の問い合わせが速いほど、後続リクエストが遅くなる現象" },
      { id: "d3", text: "サーバがレスポンスを返す前に必ず全画像を読み込むブラウザ仕様" },
      { id: "d4", text: "キューの後ろの処理から優先的に実行することで公平性が崩れる問題" },
      { id: "d5", text: "TLS証明書チェーンの先頭証明書が期限切れになる問題" },
    ],
    brief: "先頭が詰まると後ろも待つ、という遅延の形です。",
    interview:
      "HTTP/2は多重化しますがTCP上のパケットロスでストリーム全体が待つことがあり、HTTP/3/QUICはそこを改善します。",
    relevance: "Web性能、HTTP/2/3、キュー処理、ロードバランサの説明で出ます。",
    next: "HTTP/2 multiplexing、QUIC、キューイング理論を見ましょう。",
    deeper: [
      "HoL blockingはネットワークだけでなく、アプリ内キューでも起きます。",
      "多重化しても下位層の性質で詰まることがあります。",
    ],
  },
  {
    id: "l4-security-ssrf",
    level: 4,
    domain: "security",
    tags: ["ssrf", "acronym", "server-side-request-forgery"],
    prompt: "面接官: SSRF の説明として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "Server-Side Request Forgeryで、攻撃者がサーバに任意の内部/外部URLへリクエストさせる攻撃",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "サーバ側のHTTPクライアント機能を悪用し、メタデータサービスや内部管理APIへアクセスさせる攻撃",
      },
    ],
    distractors: [
      { id: "d1", text: "Stored Script Response Forgeryで、保存済みXSSだけを指す古い名称" },
      { id: "d2", text: "CSRFの別名で、ログイン済みブラウザに状態変更リクエストを送らせる攻撃" },
      { id: "d3", text: "SQLのFROM句を偽造し、DBから別テーブルを読ませる攻撃" },
      { id: "d4", text: "TLS証明書を偽造して、ブラウザの鍵交換を省略させる攻撃" },
      { id: "d5", text: "DNSキャッシュを汚染し、ユーザーのブラウザだけを別IPへ向ける攻撃" },
    ],
    brief: "SSRFはサーバを踏み台にする攻撃です。",
    interview:
      "URLプレビュー、Webhook、画像取得などで入力URLをサーバがfetchする場合、内部ネットワークへアクセスされる危険があります。",
    relevance: "クラウドメタデータ、社内API、管理画面、Webhook実装で重要です。",
    next: "allowlist、DNS rebinding、プライベートIP拒否、egress制御を見ましょう。",
    deeper: [
      "URLの文字列チェックだけではDNS解決後のIP変化に弱いことがあります。",
      "リダイレクト先の検証も必要です。",
    ],
  },
  {
    id: "l4-design-slo-sli",
    level: 4,
    domain: "design",
    tags: ["slo", "sli", "availability", "acronym"],
    prompt: "面接官: SLI と SLO の違いとして、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "SLIは測る指標、SLOはその指標に対する目標値や許容水準",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "Service Level Indicatorは実測値、Service Level Objectiveは守りたい目標として説明できる",
      },
    ],
    distractors: [
      { id: "d1", text: "SLIは契約上の罰則、SLOはログの出力形式を指す" },
      { id: "d2", text: "SLIはユーザー認証、SLOはユーザー認可の別名" },
      { id: "d3", text: "SLOは必ず100%に設定し、未達なら全リリースを停止する" },
      { id: "d4", text: "SLI/SLOはインフラだけの用語で、WebアプリのAPI品質には関係しない" },
      { id: "d5", text: "SLIは主観的な満足度、SLOは個別障害の原因ログを表す" },
    ],
    brief: "SLIは測るもの、SLOは目標です。",
    interview:
      "例えば成功率、p95 latency、可用性などをSLIにし、99.9%などの目標をSLOとして設定します。",
    relevance: "障害対応、リリース判断、エラーバジェット、運用優先順位に効きます。",
    next: "SLA、error budget、burn rateを見ましょう。",
    deeper: [
      "SLOは高すぎても開発速度を不必要に落とします。",
      "ユーザー体験に近いSLIを選ぶのが大事です。",
    ],
  },
  {
    id: "l5-computer-mvcc",
    level: 5,
    domain: "computer",
    tags: ["mvcc", "database", "concurrency"],
    prompt: "面接官: MVCCを説明するなら、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "Multi-Version Concurrency Controlで、データの複数バージョンを使って読み書きの競合を減らす仕組み",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "読み取りはある時点のスナップショットを見て、書き込みと読み取りが互いにブロックしにくくなる方式",
      },
    ],
    distractors: [
      { id: "d1", text: "DBの全行を1つの最新版だけに保つことで、同時実行時の競合をなくす仕組み" },
      { id: "d2", text: "複数DBへ同時に書き込めば強整合になるという分散トランザクションの別名" },
      { id: "d3", text: "SQLのSELECTを全て排他ロックに変換し、読み取り中の更新を禁止する方式" },
      { id: "d4", text: "インデックスを複数作ることで、クエリプランの選択肢を増やす最適化" },
      { id: "d5", text: "HTTPキャッシュのETagを使って、ブラウザ側でDB整合性を保つ仕組み" },
    ],
    brief: "MVCCはDBの同時実行制御を理解する重要語です。",
    interview:
      "読み取りが古いバージョンを見ることで、書き込みと読み取りのブロックを減らします。ただし掃除や競合検出も必要です。",
    relevance: "PostgreSQLなどのDBで、分離レベル、ロック、遅いクエリ、VACUUM理解に繋がります。",
    next: "snapshot isolation、phantom read、VACUUMを見ましょう。",
    deeper: [
      "MVCCでも書き込み同士の競合は考える必要があります。",
      "長いトランザクションは古いバージョンの掃除を妨げることがあります。",
    ],
  },
  {
    id: "l5-computer-btree",
    level: 5,
    domain: "computer",
    tags: ["btree", "database-index"],
    prompt: "面接官: DBでB-tree系インデックスがよく使われる理由として、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "木の高さを低く保ち、範囲検索や順序付きアクセスをディスク/ページI/Oと相性よく行えるから",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "分岐数の多い平衡木で、探索・挿入・範囲走査をページ単位のアクセスに向いた形で扱えるから",
      },
    ],
    distractors: [
      { id: "d1", text: "B-treeはハッシュなので、範囲検索より完全一致だけに最適化されているから" },
      { id: "d2", text: "木構造は必ずメモリ上だけで完結し、ディスクI/Oを発生させないから" },
      { id: "d3", text: "B-treeはデータを正規化する仕組みなので、重複更新を防げるから" },
      { id: "d4", text: "B-treeは全ての列に自動で作られ、書き込みコストがないから" },
      { id: "d5", text: "B-treeはJSON専用インデックスで、数値や文字列の比較には向かないから" },
    ],
    brief: "B-treeは範囲と順序に強い、DBインデックスの代表です。",
    interview: "DBはページ単位でI/Oするため、分岐数を多くして高さを低く保つ木構造が実用的です。",
    relevance: "WHERE、ORDER BY、範囲検索、複合インデックス、実行計画を読む土台です。",
    next: "hash index、GIN/GiST、covering indexを比較しましょう。",
    deeper: [
      "完全一致だけならハッシュも候補ですが、範囲検索や順序ではB-treeが強いです。",
      "複合インデックスでは左端からの条件が効くかが重要です。",
    ],
  },
  {
    id: "l5-network-consensus-quorum",
    level: 5,
    domain: "network",
    tags: ["quorum", "consensus", "distributed-systems"],
    prompt: "面接官: quorumを使う理由として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "複数ノードの過半数などから応答を得ることで、一部障害があっても整合性判断をしやすくするため",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "全ノード一致を待たずに、重なりを持つ多数派で読み書きの衝突や古い値を扱いやすくするため",
      },
    ],
    distractors: [
      { id: "d1", text: "1台だけが成功すれば必ず最新値とみなせるようにするため" },
      { id: "d2", text: "全ノードの応答を必ず待つことで、可用性を最大化するため" },
      { id: "d3", text: "HTTPリクエストのヘッダー数を減らし、レイテンシを下げるため" },
      { id: "d4", text: "DNSのTTLを短くし、名前解決の反映を速めるため" },
      { id: "d5", text: "レプリカ間のネットワーク分断を完全に防止するため" },
    ],
    brief: "quorumは多数派の重なりで判断する分散システムの考え方です。",
    interview:
      "読み取り/書き込みquorumが重なるようにすると、古い値だけを読むリスクを減らせます。ただし遅延や可用性とのトレードオフがあります。",
    relevance: "分散DB、レプリケーション、障害時の可用性設計で出ます。",
    next: "Raft、leader election、read/write quorumを見ましょう。",
    deeper: [
      "quorumは魔法ではなく、ネットワーク分断時の進め方を設計する道具です。",
      "多数派に届かない側は可用性を失うことがあります。",
    ],
  },
  {
    id: "l5-security-oauth-oidc",
    level: 5,
    domain: "security",
    tags: ["oauth", "oidc", "acronym"],
    prompt: "面接官: OAuth 2.0 と OpenID Connect の違いとして、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "OAuth 2.0は認可の枠組み、OpenID Connectはその上に本人確認のIDトークンなどを足した認証レイヤー",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "OAuthは第三者アプリへのアクセス許可、OIDCはログインしたユーザーが誰かを標準的に伝える仕組み",
      },
    ],
    distractors: [
      { id: "d1", text: "OAuth 2.0は認証専用で、OpenID ConnectはAPI権限委譲専用である" },
      { id: "d2", text: "OIDCはOAuth 2.0と無関係な古いプロトコルで、JWTやIDトークンを使わない" },
      {
        id: "d3",
        text: "OAuthを使えば認可も認証も自動的に安全になり、redirect URI検証は不要になる",
      },
      { id: "d4", text: "OIDCはCookie認証の別名で、外部IdPとは関係しない" },
      { id: "d5", text: "OAuthとOIDCはどちらもパスワードハッシュ保存方式の規格である" },
    ],
    brief: "OAuthは認可、OIDCは認証を標準化するレイヤーとして押さえます。",
    interview:
      "OAuthだけで『誰がログインしたか』を扱うと危険です。OIDCではID TokenやUserInfoで認証情報を扱います。",
    relevance: "Googleログイン、GitHubログイン、外部API連携、SaaS認証設計で必須です。",
    next: "Authorization Code + PKCE、state、nonce、redirect URIを見ましょう。",
    deeper: [
      "access tokenをIDとして扱うのは危険です。",
      "stateはCSRF、nonceはID token replay対策に関係します。",
    ],
  },
  {
    id: "l5-design-cap-pacelc",
    level: 5,
    domain: "design",
    tags: ["cap", "pacelc", "distributed-systems", "acronym"],
    prompt: "面接官: CAPとPACELCを説明するとき、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "CAPは分断時の整合性/可用性の選択を扱い、PACELCは平常時にも遅延と整合性のトレードオフがあると見る",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "ネットワーク分断時だけでなく、通常時も低レイテンシと強い整合性の間で設計判断が必要という考え方",
      },
    ],
    distractors: [
      { id: "d1", text: "CAPはCPU、API、Processの略で、PACELCはフロントエンド性能指標である" },
      {
        id: "d2",
        text: "CAPは常に3つ全てを満たせることを示し、PACELCはそれを実装するアルゴリズムである",
      },
      {
        id: "d3",
        text: "PACELCはCAPを否定し、分散システムでは整合性を考えなくてよいとする理論である",
      },
      { id: "d4", text: "CAPはDB単体のトランザクション分離レベルだけを説明する用語である" },
      { id: "d5", text: "CAPやPACELCはCDNキャッシュ専用で、DBレプリケーションには関係しない" },
    ],
    brief: "分散のトレードオフは障害時だけではありません。",
    interview:
      "CAPはPartition時のC/A選択を強調します。PACELCはPartitionがないElse時にもLatencyとConsistencyの選択があると説明します。",
    relevance:
      "グローバルDB、レプリカ読み取り、キャッシュ、ユーザー体験と正しさの設計判断に出ます。",
    next: "read-your-writes、linearizability、eventual consistencyを見ましょう。",
    deeper: [
      "CAPを『3つのうち2つ』だけで暗記すると誤解しやすいです。",
      "実務ではデータごとに整合性要求を分けることが多いです。",
    ],
  },
  {
    id: "l6-computer-scheduler",
    level: 6,
    domain: "computer",
    tags: ["scheduler", "os", "context-switch"],
    prompt:
      "面接官: OSのスケジューラとコンテキストスイッチを説明するなら、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "スケジューラは実行するタスクを選び、コンテキストスイッチはCPU状態を保存・復元して実行対象を切り替える",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "CPU時間を複数プロセス/スレッドへ配分し、レジスタなどの実行状態を切り替える仕組み",
      },
    ],
    distractors: [
      {
        id: "d1",
        text: "スケジューラはHTTPリクエストの順序を決め、コンテキストスイッチはCSSの適用順を変える",
      },
      {
        id: "d2",
        text: "コンテキストスイッチはメモリを解放するGC処理なので、CPU実行状態とは関係しない",
      },
      { id: "d3", text: "スケジューラはDBのクエリプランナの別名で、OSの実行制御には関係しない" },
      {
        id: "d4",
        text: "コンテキストスイッチはコストがゼロなので、スレッド数は多いほど必ず性能が上がる",
      },
      {
        id: "d5",
        text: "イベントループがある言語ではOSスケジューラは使われず、CPUは常に1タスクだけ実行する",
      },
    ],
    brief: "並行処理はOSのスケジューリングと切り替えコストの上に成り立ちます。",
    interview:
      "実行状態を保存・復元する切り替えにはコストがあり、多すぎるスレッドは性能低下を招きます。",
    relevance:
      "Node.jsのCPU bound処理、Worker Threads、コンテナリソース、レイテンシ理解に効きます。",
    next: "preemptive scheduling、run queue、context switch overheadを見ましょう。",
    deeper: [
      "アプリの非同期処理とOSのスケジューリングは別レイヤーです。",
      "I/O待ちが多い処理とCPU bound処理では適切な並行度が違います。",
    ],
  },
  {
    id: "l6-computer-tlb-pagefault",
    level: 6,
    domain: "computer",
    tags: ["tlb", "page-fault", "virtual-memory"],
    prompt: "面接官: TLBとpage faultの説明として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "TLBは仮想アドレス変換のキャッシュで、page faultは必要なページが未対応/未常駐などのときに起きる割り込み",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "仮想メモリの変換を高速化するのがTLBで、ページが物理メモリにない場合などにOSへ制御が移るのがpage fault",
      },
    ],
    distractors: [
      { id: "d1", text: "TLBはHTTPキャッシュで、page faultは404レスポンスのOS内部名である" },
      { id: "d2", text: "TLBはDBのB-treeページを保存し、page faultはSQL制約違反を表す" },
      {
        id: "d3",
        text: "page faultは常にプロセス異常終了を意味し、正常な遅延読み込みでは発生しない",
      },
      { id: "d4", text: "TLBはCPUレジスタそのもので、仮想メモリやページテーブルとは関係しない" },
      { id: "d5", text: "TLBがあるとページテーブルは不要になり、OSはメモリ保護を行わない" },
    ],
    brief: "仮想メモリは変換コストがあり、TLBがそれを緩和します。",
    interview:
      "TLB missやpage faultはメモリアクセスの遅さに関係します。page faultは必ずバグではなく、遅延割り当てもあります。",
    relevance: "大きなメモリ使用、コンテナOOM、mmap、DBバッファキャッシュの理解に繋がります。",
    next: "ページサイズ、huge page、copy-on-writeを見ましょう。",
    deeper: [
      "TLBは小さいため、ランダムな巨大メモリアクセスは不利になることがあります。",
      "page faultが多いとレイテンシスパイクの原因になります。",
    ],
  },
  {
    id: "l6-computer-endianness",
    level: 6,
    domain: "computer",
    tags: ["endianness", "binary-protocol"],
    prompt: "面接官: エンディアンを説明するなら、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "複数バイトの数値をメモリやバイト列に並べるとき、上位/下位バイトの順序をどう置くかの規約",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "同じ整数でもlittle endianとbig endianではバイト列の順序が変わるため、バイナリ解釈に必要な約束",
      },
    ],
    distractors: [
      { id: "d1", text: "文字列をUTF-8にするかUTF-16にするかだけを表す文字コードの分類" },
      { id: "d2", text: "ネットワークが暗号化されているかどうかを示すTLSの設定値" },
      { id: "d3", text: "CPUが命令を並列実行する順番を決めるスケジューリング方式" },
      { id: "d4", text: "DBのインデックスを昇順に作るか降順に作るかだけの指定" },
      { id: "d5", text: "HTTPヘッダーの大文字小文字を区別するかどうかの規約" },
    ],
    brief: "バイト列を読むとき、順序の約束を間違えると値が変わります。",
    interview:
      "ネットワークバイトオーダーは一般にbig endianです。ファイル形式やバイナリプロトコルでは明示的に確認します。",
    relevance:
      "画像/音声/バイナリファイル、WebAssembly、ネットワークプロトコル、Buffer処理で出ます。",
    next: "network byte order、ArrayBuffer/DataViewを見ましょう。",
    deeper: [
      "JSONのようなテキスト形式では普段見えにくいですが、低レイヤーでは重要です。",
      "同じバイト列でも解釈規則で値が変わります。",
    ],
  },
  {
    id: "l6-network-tcp-congestion",
    level: 6,
    domain: "network",
    tags: ["tcp", "congestion-control"],
    prompt: "面接官: TCPの輻輳制御の目的として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "ネットワークが混雑している兆候を見て送信量を調整し、崩壊や過剰なロスを避けること",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "受信者だけでなくネットワーク全体の混雑も考慮し、送信ウィンドウを増減させる制御",
      },
    ],
    distractors: [
      { id: "d1", text: "受信側アプリのCPU使用率を見て、JavaScriptの実行量を自動調整すること" },
      { id: "d2", text: "TLS証明書の更新が集中しないよう、CAへのリクエストを分散すること" },
      { id: "d3", text: "HTTPキャッシュが古いとき、CDNへ削除要求を送る制御" },
      { id: "d4", text: "DNSリゾルバが混雑したとき、TTLを自動で長くする仕組み" },
      { id: "d5", text: "DB接続プールが満杯のとき、SQLを並べ替えて高速化する仕組み" },
    ],
    brief: "TCPは相手だけでなくネットワークの混雑も見ます。",
    interview:
      "slow start、congestion window、packet loss、RTTなどを使い、送信レートを調整します。",
    relevance: "大容量配信、モバイル回線、CDN、HTTP/2のパケットロス影響を説明できます。",
    next: "flow controlとcongestion controlの違いを見ましょう。",
    deeper: [
      "flow controlは受信側を守る制御、congestion controlはネットワークを守る制御です。",
      "HTTP/3/QUICでも輻輳制御は重要です。",
    ],
  },
  {
    id: "l6-network-dns-rebinding",
    level: 6,
    domain: "network",
    tags: ["dns-rebinding", "ssrf", "browser-security"],
    prompt: "面接官: DNS rebindingが問題になる理由として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "同じホスト名の解決先IPを変え、ブラウザやサーバの信頼判断をすり抜けて内部IPへ到達させ得るから",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "名前は同じまま解決先を外部IPから内部IPへ変えることで、ホスト名ベースの検証を回避できる場合があるから",
      },
    ],
    distractors: [
      { id: "d1", text: "DNSのTTLを長くしすぎると、証明書の秘密鍵が漏洩する攻撃だから" },
      {
        id: "d2",
        text: "CORSが許可されていないAPIへ、サーバが自動でAccess-Control-Allow-Originを付けるから",
      },
      {
        id: "d3",
        text: "HTTPレスポンスのETagを改ざんし、ブラウザキャッシュを永続化する攻撃だから",
      },
      { id: "d4", text: "TLSのSNIを変えることで、DNS問い合わせを完全に省略できるから" },
      { id: "d5", text: "DNSSECが有効なドメインでのみ成立し、署名検証を悪用する攻撃だから" },
    ],
    brief: "DNS rebindingはホスト名検証だけの危うさを突きます。",
    interview:
      "SSRF対策でURLのホストだけを見ると、解決後IPが後から内部向きになるケースを見落とします。",
    relevance: "URL fetch、Webhook、画像取得、ローカル管理画面保護で重要です。",
    next: "解決後IP検証、再解決、リダイレクト検証、egress allowlistを見ましょう。",
    deeper: [
      "DNSは名前とIPの対応を返すだけで、アプリの信頼境界を保証しません。",
      "検証時と接続時で解決結果が変わるTOCTOUにも注意します。",
    ],
  },
  {
    id: "l6-security-deserialization",
    level: 6,
    domain: "security",
    tags: ["deserialization", "rce"],
    prompt: "面接官: 安全でないデシリアライズが危険な理由として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "信頼できない入力からオブジェクトを復元する過程で、意図しない型や処理が実行される可能性があるから",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "データ復元のつもりが、言語やライブラリのフックにより任意コード実行や状態改ざんへ繋がることがあるから",
      },
    ],
    distractors: [
      { id: "d1", text: "JSON.parseは常に任意コードを実行するため、JSONを扱うAPIは全て危険だから" },
      { id: "d2", text: "シリアライズは暗号化と同じなので、復元すると秘密鍵が公開されるから" },
      { id: "d3", text: "デシリアライズはDBの正規化を崩し、必ずN+1問題を起こすから" },
      { id: "d4", text: "オブジェクトを復元するとHTTPキャッシュが無効化され、可用性が下がるから" },
      { id: "d5", text: "デシリアライズはブラウザだけの機能で、サーバ側では発生しないから" },
    ],
    brief: "データだと思って受け取ったものが、実行や危険な型生成につながる場合があります。",
    interview:
      "信頼できない入力を言語固有のオブジェクト形式で復元せず、JSONなど単純な形式でもschema validationを行います。",
    relevance: "セッション、キャッシュ、キュー、Webhook、ファイルアップロードで重要です。",
    next: "schema validation、allowlist型、RCE、prototype pollutionを見ましょう。",
    deeper: [
      "JSON自体が常に危険というより、復元後の扱いと型の信頼が問題です。",
      "署名付きデータでも署名鍵が漏れた場合の影響を考えます。",
    ],
  },
  {
    id: "l6-security-prototype-pollution",
    level: 6,
    domain: "security",
    tags: ["prototype-pollution", "javascript"],
    prompt: "面接官: Prototype Pollutionを説明するなら、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "JavaScriptのprototypeへ攻撃者入力が混入し、他のオブジェクトの既定プロパティや挙動へ影響する脆弱性",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "__proto__などを経由してObject.prototype等を汚染し、権限判定や設定値を意図せず変え得る問題",
      },
    ],
    distractors: [
      { id: "d1", text: "CSSのprototypeプロパティを上書きして、ブラウザ表示だけを崩す攻撃" },
      { id: "d2", text: "DBのプロトタイプ行を変更し、全テーブルの外部キーを無効化する攻撃" },
      { id: "d3", text: "HTTPヘッダーの大文字小文字を変え、TLS証明書検証を回避する攻撃" },
      { id: "d4", text: "クラス継承を使っているコードだけに起き、plain objectでは起きない問題" },
      { id: "d5", text: "Node.jsではprototypeが凍結されているため、ブラウザ専用の古い問題" },
    ],
    brief: "JSの継承モデルと入力マージ処理が絡む脆弱性です。",
    interview:
      "深いmergeやquery parserで__proto__/constructor/prototypeを許すと、全体のオブジェクト挙動に影響します。",
    relevance: "Node.js API、設定merge、リクエストbody解析、権限判定で実害が出ます。",
    next: "Object.create(null)、危険キー拒否、schema validationを見ましょう。",
    deeper: [
      "ライブラリのmerge関数に依存していても、入力境界で防御する意識が必要です。",
      "汚染が即RCEになるとは限りませんが、条件次第で深刻化します。",
    ],
  },
  {
    id: "l6-design-eventual-consistency",
    level: 6,
    domain: "design",
    tags: ["eventual-consistency", "read-your-writes"],
    prompt: "面接官: eventual consistencyでユーザー体験上注意すべきことはどれですか?",
    correct: {
      id: "correct",
      text: "書き込み直後に別レプリカを読むと古い値が見える可能性があり、read-your-writesなどの体験保証を考えること",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "最終的には揃うが一時的にズレるため、更新直後の画面や確認APIで古い状態を見せない工夫が必要",
      },
    ],
    distractors: [
      {
        id: "d1",
        text: "eventual consistencyなら常に最新値を読めるため、ユーザー体験上の注意は少ない",
      },
      {
        id: "d2",
        text: "最終的整合性はデータを二度と修復しない設計なので、監視や補正は不要である",
      },
      {
        id: "d3",
        text: "書き込み直後に古い値が見えるのはブラウザキャッシュだけが原因で、DBレプリカとは関係しない",
      },
      {
        id: "d4",
        text: "eventual consistencyを採用すると、認可チェックも最終的に合えばよいので遅延を許容できる",
      },
      {
        id: "d5",
        text: "ユーザーには必ず全レプリカの同期状況を表示し、アプリ側の工夫はしない方がよい",
      },
    ],
    brief: "最終的整合性は、UX設計まで含めて使うものです。",
    interview:
      "更新後は同じリーダーから読む、クライアント側で楽観表示する、確認画面では強い読み取りを使うなどの選択があります。",
    relevance: "プロフィール更新、注文履歴、通知、検索インデックス反映遅延でよく起きます。",
    next: "read-after-write consistency、monotonic read、leader/follower readを見ましょう。",
    deeper: [
      "データの種類によって許容できるズレは違います。",
      "認可や決済のような領域では最終的整合性だけでは危険なことがあります。",
    ],
  },
  {
    id: "l6-design-outbox",
    level: 6,
    domain: "design",
    tags: ["outbox-pattern", "transaction", "message"],
    prompt: "面接官: Outbox Patternの目的として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "DB更新とイベント送信を同じトランザクション境界で記録し、後で確実に配送して二重/欠落を扱いやすくする",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "業務データ更新時に送信予定イベントをoutbox表へ保存し、別プロセスが送ることで整合性を保つ",
      },
    ],
    distractors: [
      {
        id: "d1",
        text: "メール送信APIを同期的に呼べば、DB更新と外部送信は常に原子的になるという設計",
      },
      {
        id: "d2",
        text: "イベントを送ってからDBを更新することで、失敗時に必ず自動ロールバックされる仕組み",
      },
      { id: "d3", text: "キューを使えばDBトランザクションは不要になり、欠落や重複は発生しない" },
      {
        id: "d4",
        text: "HTTPレスポンスのoutboxヘッダーにイベントを入れ、ブラウザに配送させる設計",
      },
      { id: "d5", text: "DBの更新ログを一切保存せず、外部APIの成功レスポンスだけを信頼する設計" },
    ],
    brief: "DB更新とメッセージ送信の間の失敗を扱うパターンです。",
    interview:
      "DB更新は成功したがイベント送信に失敗した、または逆、という中間状態を避けるためにoutboxへ記録します。",
    relevance: "注文作成後のメール、Webhook、非同期ジョブ、マイクロサービス連携で重要です。",
    next: "idempotent consumer、at-least-once delivery、CDCを見ましょう。",
    deeper: [
      "多くのメッセージ配送はat-least-onceなので、受け手の冪等性も必要です。",
      "Exactly-onceは簡単な約束ではなく、境界を明確にする必要があります。",
    ],
  },
  {
    id: "l6-design-ddd-boundary",
    level: 6,
    domain: "design",
    tags: ["ddd", "bounded-context"],
    prompt: "面接官: Bounded Contextを説明するなら、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "同じ言葉やモデルが一貫した意味を持つ境界を定め、境界ごとにモデルを分けるDDDの考え方",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "注文、請求、配送などで同じ用語が違う意味を持つ場合に、文脈ごとにモデルと責務を切る境界",
      },
    ],
    distractors: [
      { id: "d1", text: "DBトランザクションの境界を必ず1テーブルに限定するRDBの正規化ルール" },
      { id: "d2", text: "マイクロサービスの数を先に決め、その数に合わせてドメインを分割する手法" },
      { id: "d3", text: "全社で同じUserモデルを共有し、意味の違いを継承で吸収する設計" },
      { id: "d4", text: "HTTPリクエストの境界で、1リクエスト1モデルに制限するAPI設計原則" },
      { id: "d5", text: "UIコンポーネントをページ単位に分けるフロントエンド専用の用語" },
    ],
    brief: "同じ言葉が文脈で違う意味を持つことを受け入れる設計です。",
    interview:
      "全システムで1つの巨大モデルを共有せず、文脈ごとにモデルを分け、境界間は変換します。",
    relevance: "モノリス分割、マイクロサービス境界、チーム境界、API設計で効きます。",
    next: "ubiquitous language、context map、anti-corruption layerを見ましょう。",
    deeper: [
      "境界を技術都合だけで切ると、変更理由とずれることがあります。",
      "Bounded Contextは必ずマイクロサービスにするという意味ではありません。",
    ],
  },
  {
    id: "l6-network-bgp-anycast",
    level: 6,
    domain: "network",
    tags: ["bgp", "anycast", "cdn"],
    prompt: "面接官: CDNでAnycastが使われる理由として、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "同じIPを複数拠点で広告し、BGP経路選択により近い/到達しやすい拠点へ誘導しやすくするため",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "複数PoPが同じアドレスを持つよう見せ、ネットワーク経路で利用者を近い拠点へ向けるため",
      },
    ],
    distractors: [
      { id: "d1", text: "DNSのTTLをゼロにして、毎回アプリサーバが最寄りリージョンを計算するため" },
      { id: "d2", text: "HTTPヘッダーに複数IPを入れ、ブラウザがJavaScriptで最速IPを選ぶため" },
      { id: "d3", text: "TLS証明書を複数拠点で共有できなくすることで、セキュリティを高めるため" },
      { id: "d4", text: "同じTCP接続を全拠点へ同時に複製し、必ず全拠点からレスポンスを返すため" },
      { id: "d5", text: "DBレプリカの整合性をBGPが保証し、アプリ側の同期を不要にするため" },
    ],
    brief: "Anycastは同じIPを複数場所で使い、経路制御で近い場所へ寄せます。",
    interview:
      "BGPが経路を選ぶため、地理的最短とは限りませんが、CDNやDNSで低遅延・耐障害性に使われます。",
    relevance: "CloudflareやCDNの仕組み、DDoS吸収、グローバル配信の説明に繋がります。",
    next: "BGP、PoP、Unicastとの違いを見ましょう。",
    deeper: [
      "Anycastはアプリのセッション設計と相性を考える必要があります。",
      "経路変動により接続が別拠点へ流れる可能性もあります。",
    ],
  },
  {
    id: "l7-computer-linearizability",
    level: 7,
    domain: "computer",
    tags: ["linearizability", "consistency"],
    prompt: "面接官: linearizabilityを説明するなら、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "並行操作があっても、各操作がある一瞬で実行されたかのように見え、リアルタイム順序を保つ強い整合性",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "完了した書き込みの後に始まった読み取りは、その書き込みを反映した値を見るべきという強い一貫性モデル",
      },
    ],
    distractors: [
      {
        id: "d1",
        text: "最終的に値が揃えばよく、読み取り直後に古い値が見えても常にlinearizableである",
      },
      { id: "d2", text: "単一プロセス内の関数を上から下へ読むコードスタイルのこと" },
      { id: "d3", text: "DBのインデックスを線形探索に変え、実行計画を単純にする最適化" },
      { id: "d4", text: "レスポンス時間がリクエスト数に比例して増える性能特性だけを指す" },
      { id: "d5", text: "複数レプリカへ非同期に書けば必ず満たせる、弱い整合性モデル" },
    ],
    brief: "linearizabilityは分散システムの強い整合性モデルです。",
    interview:
      "外から見ると全操作が実時間順に1点で起きたように説明できる性質です。実装コストや可用性とのトレードオフがあります。",
    relevance: "残高、ロック、在庫、リーダー選出、分散DBの整合性説明で重要です。",
    next: "serializability、sequential consistency、read-your-writesと比較しましょう。",
    deeper: [
      "serializabilityはトランザクション順序、linearizabilityはリアルタイム順序が重要です。",
      "強い整合性はユーザー体験を単純にしますが、遅延や障害に弱くなることがあります。",
    ],
  },
  {
    id: "l7-computer-serializability",
    level: 7,
    domain: "computer",
    tags: ["serializability", "transaction"],
    prompt: "面接官: serializabilityの説明として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "並行実行されたトランザクションの結果が、何らかの直列順序で実行した結果と同じになる性質",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "同時に走っていても、結果だけ見れば一つずつ順番に実行したのと等価になる分離性",
      },
    ],
    distractors: [
      { id: "d1", text: "全トランザクションを実際に必ず1つずつ実行する実装方式だけを指す" },
      { id: "d2", text: "コミット後にディスクへ永続化されるDurabilityの別名" },
      { id: "d3", text: "JSONへ変換できるオブジェクトだけをDBに保存する制約" },
      { id: "d4", text: "読み取りが常に最新値を見るlinearizabilityと完全に同じ意味" },
      { id: "d5", text: "トランザクションを短く書けば自動的に満たされるコード品質の指標" },
    ],
    brief: "serializabilityはDBトランザクションの強い分離性です。",
    interview:
      "実際には並行実行しても、結果がある直列実行と等価ならserializableです。性能とのトレードオフがあります。",
    relevance: "在庫、予約、二重消費、集計不整合を説明するときに必要です。",
    next: "write skew、phantom read、SSIを見ましょう。",
    deeper: [
      "serializableでも外部API送信などDB外の副作用は別に考える必要があります。",
      "分離レベル名はDB製品で実装差があります。",
    ],
  },
  {
    id: "l7-network-raft",
    level: 7,
    domain: "network",
    tags: ["raft", "consensus", "leader-election"],
    prompt: "面接官: Raftの中心的な考え方として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "leaderを選出し、ログ複製を通じて複数ノードが同じ順序の状態遷移へ合意する",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "leader election、log replication、commitにより、分散ノード間で一貫した状態を作る合意アルゴリズム",
      },
    ],
    distractors: [
      {
        id: "d1",
        text: "各ノードが独立に書き込みを受け付け、後でタイムスタンプ最大の値だけを採用する方式",
      },
      { id: "d2", text: "HTTPリクエストを最も空いているサーバへ振り分けるロードバランシング方式" },
      { id: "d3", text: "DNSのTTLを使ってleaderをキャッシュし、投票を不要にする仕組み" },
      { id: "d4", text: "全ノードが常に同時に同じCPU命令を実行することで合意する方式" },
      { id: "d5", text: "単一DB内のインデックス更新順序を決めるクエリ最適化アルゴリズム" },
    ],
    brief: "Raftは理解しやすさを意識した分散合意アルゴリズムです。",
    interview: "leaderがログを受け取り、過半数に複製されるとcommitできる、という流れで説明します。",
    relevance: "分散DB、設定ストア、キュー、オーケストレーション基盤の理解に繋がります。",
    next: "term、leader election、log replication、split brainを見ましょう。",
    deeper: [
      "Raftはネットワーク分断をなくすのではなく、分断時に安全に進める側を決めます。",
      "過半数を失うと可用性を失いますが、整合性を守ります。",
    ],
  },
  {
    id: "l7-network-vector-clock",
    level: 7,
    domain: "network",
    tags: ["vector-clock", "causality"],
    prompt: "面接官: vector clockが扱う主な問題として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "分散システムでイベントの因果関係や並行更新を判断するための論理時計",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "物理時刻だけでは分からない、どの更新がどれに先行したか/競合したかを表すための仕組み",
      },
    ],
    distractors: [
      { id: "d1", text: "全ノードの物理時計を完全同期し、時刻ずれをゼロにするNTPの別名" },
      { id: "d2", text: "画像やベクトルDBの類似検索を高速化するインデックス方式" },
      { id: "d3", text: "CPUのSIMD命令で複数データを同時処理するためのクロック信号" },
      { id: "d4", text: "HTTPキャッシュのmax-ageを複数CDNで統一するためのヘッダー" },
      { id: "d5", text: "DBトランザクションを必ずserializableにするロック方式" },
    ],
    brief: "分散では物理時刻だけで因果関係を決めるのは危険です。",
    interview:
      "各ノードのカウンタを持ち、イベントの先後関係や並行性を比較できます。競合解決に使われます。",
    relevance: "マルチリージョン同期、オフライン更新、競合解決の説明で出ます。",
    next: "Lamport clock、last-write-wins、CRDTを見ましょう。",
    deeper: [
      "last-write-winsは単純ですが、ユーザー更新を失う可能性があります。",
      "因果関係と実時刻は同じではありません。",
    ],
  },
  {
    id: "l7-security-capability",
    level: 7,
    domain: "security",
    tags: ["capability-security", "authorization"],
    prompt: "面接官: capability-based securityの考え方として、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "主体の名前ではなく、特定操作を行う権限を表すcapabilityを持っているかでアクセスを制御する",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "権限そのものを渡せるトークンや参照として扱い、持っている能力に基づき操作を許可する考え方",
      },
    ],
    distractors: [
      { id: "d1", text: "ユーザー名がadminなら全操作を許可する、ロール名中心の固定的な認可方式" },
      { id: "d2", text: "全リクエストを同じ共有シークレットで認証し、細かい権限は持たない方式" },
      { id: "d3", text: "能力が高い開発者だけに本番権限を渡す、組織上の権限管理のこと" },
      { id: "d4", text: "パスワードの複雑度を上げることで、認可チェックを省略する考え方" },
      { id: "d5", text: "OAuthのaccess tokenを常にlocalStorageへ保存する実装パターン" },
    ],
    brief: "capabilityは『何ができるか』を表す権限の持ち物です。",
    interview:
      "署名付きURLや限定スコープtokenのように、持っていること自体が特定操作の権限になる例で説明できます。",
    relevance:
      "アップロードURL、招待リンク、一時アクセス、オブジェクトストレージの署名URLで出ます。",
    next: "bearer token、macaroon、least privilege、期限付き権限を見ましょう。",
    deeper: [
      "capabilityが漏れたら持った人が使えるため、期限やスコープが重要です。",
      "IDベース認可と組み合わせることもあります。",
    ],
  },
  {
    id: "l7-security-confused-deputy",
    level: 7,
    domain: "security",
    tags: ["confused-deputy", "authorization"],
    prompt: "面接官: confused deputy問題として、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "権限を持つサービスが、攻撃者の意図した操作を正当な権限で代行してしまう問題",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "利用者には権限がない操作でも、権限を持つ中間サービスをだまして実行させてしまう認可の問題",
      },
    ],
    distractors: [
      { id: "d1", text: "ユーザーが自分のパスワードを忘れ、管理者がリセットする通常運用のこと" },
      { id: "d2", text: "ロードバランサが一時的に別サーバへ通信を振る、可用性の問題" },
      { id: "d3", text: "DBの外部キーが循環し、削除順序が分からなくなるスキーマ設計の問題" },
      { id: "d4", text: "TLS証明書の中間CAが多すぎて、ブラウザ検証が遅くなる問題" },
      { id: "d5", text: "CPUが分岐予測を誤り、命令パイプラインを巻き戻す性能問題" },
    ],
    brief: "権限を持つ代理人が混乱させられる問題です。",
    interview:
      "CSRFやSSRF、クラウドIAMの外部IDなどと関連づけ、誰の権限で何をしているかを明確にします。",
    relevance: "Webhook、外部連携、署名URL、クラウド権限委譲で重要です。",
    next: "audience、nonce、external ID、明示的な権限委譲を見ましょう。",
    deeper: [
      "認証済みだから安全ではなく、要求の意図と権限主体を確認します。",
      "サービス間連携では特に起きやすいです。",
    ],
  },
  {
    id: "l7-design-saga",
    level: 7,
    domain: "design",
    tags: ["saga", "distributed-transaction"],
    prompt: "面接官: Sagaパターンの説明として、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "分散トランザクションを一連のローカルトランザクションと補償処理に分けて整合性を保つ設計",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "全体を一つのACIDトランザクションにせず、失敗時はキャンセルや返金などの補償アクションで戻す方式",
      },
    ],
    distractors: [
      {
        id: "d1",
        text: "全サービスで同じDBトランザクションを共有し、2PCなしで原子的にcommitする方式",
      },
      { id: "d2", text: "イベントを使わず、同期HTTPだけで全サービスを直列に呼ぶこと" },
      {
        id: "d3",
        text: "失敗した処理を無限リトライし、補償処理を設計しないことで整合性を保つ方式",
      },
      { id: "d4", text: "マイクロサービス間でDBを共有し、JOINで整合性を保証する設計" },
      { id: "d5", text: "単一プロセス内の例外処理をtry/catchでまとめるコードパターン" },
    ],
    brief: "Sagaは分散した業務処理の失敗を補償で扱う考え方です。",
    interview:
      "注文、決済、在庫、配送のような複数サービス処理で、各ステップの成功/失敗と補償を設計します。",
    relevance: "決済、予約、EC、マイクロサービス設計で出ます。",
    next: "orchestration/choreography、idempotency、outboxを見ましょう。",
    deeper: [
      "補償は完全なロールバックではなく、業務上の打ち消しです。",
      "ユーザーへ途中状態をどう見せるかも設計です。",
    ],
  },
  {
    id: "l7-design-crdt",
    level: 7,
    domain: "design",
    tags: ["crdt", "conflict-resolution"],
    prompt: "面接官: CRDTの目的として、最も近いものはどれですか?",
    correct: {
      id: "correct",
      text: "分散・オフライン環境で別々に更新しても、マージすれば衝突なく同じ状態へ収束しやすくするデータ型",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "Conflict-free Replicated Data Typeで、特定の演算性質によりレプリカ間の更新を安全に合流させる仕組み",
      },
    ],
    distractors: [
      { id: "d1", text: "全更新を中央leaderへ同期送信し、オフライン更新を禁止するための方式" },
      { id: "d2", text: "DBの外部キー制約を自動生成し、正規化を強制するデータモデリング手法" },
      { id: "d3", text: "TLS証明書の失効情報をCDNへ複製するためのWeb PKI用語" },
      { id: "d4", text: "HTTPレスポンスを圧縮し、コンフリクトを通信量として削減するアルゴリズム" },
      {
        id: "d5",
        text: "トランザクションをserializableにするため、全ての書き込みを排他ロックする方式",
      },
    ],
    brief: "CRDTは競合を避けるのではなく、合流できる形にデータを設計します。",
    interview:
      "カウンタ、集合、共同編集などで、演算の可換性や単調性を使って最終的に同じ状態へ収束させます。",
    relevance: "共同編集、オフラインファースト、マルチリージョン更新で重要です。",
    next: "commutativity、idempotency、operation/state based CRDTを見ましょう。",
    deeper: [
      "全てのデータ構造をCRDTにできるわけではありません。",
      "業務上の制約と合流ルールをどう定義するかが難しいです。",
    ],
  },
  {
    id: "l7-design-queue-semantics",
    level: 7,
    domain: "design",
    tags: ["queue", "delivery-semantics"],
    prompt: "面接官: at-least-once deliveryを使うとき、受け手側で重要な設計はどれですか?",
    correct: {
      id: "correct",
      text: "同じメッセージが複数回届いても壊れないよう、冪等な処理や重複排除を設計すること",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "配送重複を前提に、idempotency keyや処理済みIDで二重実行の副作用を防ぐこと",
      },
    ],
    distractors: [
      { id: "d1", text: "at-least-onceは必ず1回だけ届く保証なので、重複や冪等性は考えなくてよい" },
      {
        id: "d2",
        text: "重複が怖い場合はackを返さなければ、キューが自動的に一度だけ処理に変換してくれる",
      },
      {
        id: "d3",
        text: "受け手で例外を握りつぶせば再配送されないため、処理成功として扱うのが安全",
      },
      {
        id: "d4",
        text: "メッセージにタイムスタンプがあれば、古いものを全て捨てれば順序も整合性も保証できる",
      },
      { id: "d5", text: "キューを使えばDBトランザクションや外部APIの失敗は自動ロールバックされる" },
    ],
    brief: "at-least-onceは重複を受け入れる代わりに欠落を減らす考え方です。",
    interview: "重複配送、順序入れ替わり、部分失敗を前提に、冪等性と再試行可能性を設計します。",
    relevance: "メール送信、決済Webhook、非同期ジョブ、イベント駆動設計で必須です。",
    next: "at-most-once、exactly-once、deduplication windowを比較しましょう。",
    deeper: [
      "exactly-onceは境界内での実現であり、外部副作用まで簡単に保証できるわけではありません。",
      "失敗時に再実行してよい処理かを業務的に考えます。",
    ],
  },
  {
    id: "l7-security-zero-trust",
    level: 7,
    domain: "security",
    tags: ["zero-trust", "network-security"],
    prompt: "面接官: Zero Trustを説明するなら、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "ネットワーク内側だから信頼するのではなく、各アクセスで主体・端末・文脈を検証し最小権限で許可する考え方",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "境界防御だけに頼らず、内部通信でも認証・認可・端末状態・監査を継続的に確認するモデル",
      },
    ],
    distractors: [
      {
        id: "d1",
        text: "社内ネットワークに入れたユーザーは全て信頼し、以後の認可チェックを省略する考え方",
      },
      { id: "d2", text: "全アクセスを禁止し、管理者だけが手動でDBを操作する運用モデル" },
      { id: "d3", text: "VPNを使っていれば内部は安全なので、アプリ認証を簡略化する設計" },
      { id: "d4", text: "パスワードをなくし、IPアドレスだけでユーザーを識別する方式" },
      { id: "d5", text: "外部公開サービスだけにMFAを付け、内部管理画面はネットワークで守る方針" },
    ],
    brief: "Zero Trustは『内側なら安全』を前提にしない考え方です。",
    interview:
      "主体、デバイス、場所、リスク、リソースごとに継続的に評価し、最小権限でアクセスを許可します。",
    relevance: "管理画面、社内ツール、クラウド権限、リモートワーク、サービス間通信で重要です。",
    next: "mTLS、device posture、continuous authorization、auditを見ましょう。",
    deeper: [
      "Zero Trustは製品名ではなく設計原則です。",
      "ユーザー体験と運用負荷も含めて設計する必要があります。",
    ],
  },
  {
    id: "l7-network-backend-timeout-budget",
    level: 7,
    domain: "network",
    tags: ["timeout", "latency-budget", "resilience"],
    prompt:
      "面接官: 複数の下流APIを呼ぶWeb APIでタイムアウト設計をするなら、最も適切なのはどれですか?",
    correct: {
      id: "correct",
      text: "全体のレイテンシ予算から各下流のタイムアウトを決め、リトライを含めても呼び出し元の期限を超えないようにする",
    },
    corrects: [
      {
        id: "correct-alt-1",
        text: "エンドツーエンドの期限を先に置き、下流ごとの重要度・フォールバック・リトライ回数を設計する",
      },
    ],
    distractors: [
      { id: "d1", text: "各下流APIに同じ長いタイムアウトを設定し、成功率を最大化するのが基本" },
      { id: "d2", text: "タイムアウトは障害時だけ必要なので、通常時のp95 latencyからは決めない" },
      { id: "d3", text: "リトライを増やすほど成功率は上がるため、全体期限は最後に考えればよい" },
      { id: "d4", text: "重要でない下流APIも、失敗したら全体を必ず500にする方が整合的である" },
      {
        id: "d5",
        text: "ブラウザのタイムアウトだけに任せれば、サーバ側の下流タイムアウトは不要である",
      },
    ],
    brief: "タイムアウトは全体予算から逆算します。",
    interview:
      "呼び出し元の期限、下流のp95/p99、リトライとバックオフ、フォールバックを含めて設計します。",
    relevance: "API gateway、BFF、外部SaaS連携、マイクロサービスで重要です。",
    next: "deadline propagation、circuit breaker、bulkheadを見ましょう。",
    deeper: [
      "長すぎるタイムアウトはリソースを占有して障害を広げます。",
      "短すぎるタイムアウトは成功可能な処理まで失敗させます。",
    ],
  },
];
