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
    misconception:
      "見分け方の軸は「攻撃者のコードがどこで動くか」です。XSSは攻撃者のJavaScriptが被害サイト上で動く（だからCookieや画面の中身を読める）。CSRFはJavaScriptが動かなくても、リクエストを1本送らせるだけで成立する（だからCookieは読めないが、操作は実行される）。",
    nameOrigin:
      "XSS = Cross-Site Scripting（CSSと紛らわしいためXで略す）。CSRF = Cross-Site Request Forgery。Scripting（スクリプトを動かす）とRequest Forgery（リクエストを偽造する）という名前に、攻撃の本質がそのまま入っています。",
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
    misconception:
      "「共通鍵をサーバが送ってくる」のではありません。DH系の鍵交換では共通鍵そのものは回線を一度も流れず、交換した部品から両者がそれぞれ手元で同じ値を計算します。盗聴者は流れた部品をすべて見ても、同じ計算ができません。",
    flow: [
      "クライアント: 対応するTLSバージョン・暗号スイートと、鍵交換用の値を送る（ClientHello）",
      "サーバ: 選んだ方式・証明書・鍵交換用の値を返す（ServerHello）",
      "クライアント: 証明書チェーンをルートCAまでたどり、署名とホスト名を検証する",
      "両者: 交換した値から、同じ共有秘密をそれぞれの手元で計算する",
      "両者: 共有秘密から対称鍵を導出し、Finishedで確認後、アプリデータを暗号化して通信する",
    ],
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
  {
    id: "l3-computer-file-descriptor",
    level: 3,
    domain: "computer",
    tags: ["file-descriptor", "os"],
    prompt:
      "面接官: プログラムがファイルを開いたときに得られる「ファイルディスクリプタ」とは何ですか?",
    correct: {
      id: "correct",
      text: "プロセスごとに管理される、開いているリソースを指す小さな整数の識別子",
    },
    distractors: [
      { id: "d1", text: "ファイルの内容そのものを保持するメモリ領域" },
      { id: "d2", text: "ファイルシステム上でのファイルの物理的な保存位置を表すアドレス" },
      { id: "d3", text: "ファイルの暗号化に使われる鍵" },
      { id: "d4", text: "ファイルの拡張子からOSが自動生成するハッシュ値" },
      { id: "d5", text: "ネットワーク越しにファイルを共有するためのURL" },
    ],
    brief:
      "ファイルディスクリプタは、OSがプロセスに割り当てる「開いているリソースへの手札番号」のようなものです。",
    interview:
      "open()のようなシステムコールを呼ぶと、OSはそのプロセス専用のテーブルにエントリを作り、小さな整数を返します。以降のread/writeはこの番号を介して行われ、実際のファイルやソケットの状態はOS側で管理されます。ソケットやパイプも同じ仕組みで扱われます。",
    relevance:
      "Webサーバーが「too many open files」エラーを出す場面や、ソケットやDB接続のリークを調査するとき、ディスクリプタの上限や解放漏れの理解が役立ちます。",
    next: "この仕組みを土台に、メモリマップドファイルでファイルをどう扱うか見ていきましょう。",
    deeper: [
      "ファイルディスクリプタはプロセスごとのテーブルであり、fork後は複製されて親子で同じ番号を共有することがあります。",
      "ソケット、パイプ、デバイスなど「ファイルのように扱えるもの」はすべて同じディスクリプタの仕組みに乗ります。",
    ],
  },
  {
    id: "l4-computer-mmap",
    level: 4,
    domain: "computer",
    tags: ["mmap", "memory", "file-io"],
    prompt:
      "面接官: メモリマップドファイル（mmap）を使うと、通常のread/write呼び出しと比べて何が変わりますか?",
    correct: {
      id: "correct",
      text: "ファイルの内容を仮想メモリ空間に直接マッピングし、メモリアクセスとして読み書きできるようになる",
    },
    distractors: [
      {
        id: "d1",
        text: "ファイルの内容が必ずディスクからメモリへ全量コピーされ、以後は完全に独立したコピーになる",
      },
      { id: "d2", text: "ファイルの読み書きがネットワーク経由に変換される" },
      { id: "d3", text: "OSがファイルを自動的に圧縮して保存するようになる" },
      { id: "d4", text: "複数プロセスからの同時アクセスが自動的に禁止される" },
      { id: "d5", text: "ファイルの内容がすべてCPUキャッシュに固定される" },
    ],
    brief:
      "mmapはファイルをプロセスの仮想アドレス空間に貼り付け、通常のメモリアクセスとして扱えるようにする仕組みです。",
    interview:
      "read/writeはシステムコールのたびにカーネルとユーザー空間の間でデータをコピーしますが、mmapはページ単位でファイルを仮想メモリにマッピングし、アクセス時にページフォルトで必要な部分だけ読み込みます。これにより大きなファイルの部分アクセスや複数プロセス間の共有が効率化されます。",
    relevance:
      "大きなログファイルの解析や、DBエンジンがデータファイルを扱う実装、共有メモリでのプロセス間通信を理解する際にmmapの考え方が出てきます。",
    next: "仮想メモリの仕組みをさらに掘り下げて、キャッシュコヒーレンシの話に進みましょう。",
    deeper: [
      "mmapされたページは遅延ロードされ、実際にアクセスされるまでディスクから読み込まれません。",
      "書き込みも即座にディスクへ反映されるとは限らず、OSが後でページをフラッシュするタイミングを制御します。",
    ],
  },
  {
    id: "l5-computer-copy-on-write",
    level: 5,
    domain: "computer",
    tags: ["copy-on-write", "process", "memory"],
    prompt:
      "面接官: fork()でプロセスを複製するとき、コピーオンライト(copy-on-write)はどのように働きますか?",
    correct: {
      id: "correct",
      text: "親子プロセスは最初メモリページを共有し、どちらかが書き込もうとした時点で初めてそのページが複製される",
    },
    distractors: [
      { id: "d1", text: "fork()の時点で親のメモリ全体が即座に物理的に複製される" },
      { id: "d2", text: "子プロセスは常にメモリを共有し続け、書き込みも親子間で同期される" },
      { id: "d3", text: "コピーオンライトはディスク上のファイルコピーを遅延させる機能である" },
      { id: "d4", text: "子プロセスが終了するまでメモリは一切割り当てられない" },
      { id: "d5", text: "書き込み時ではなく読み込み時にページが複製される" },
    ],
    brief:
      "copy-on-writeは、複製を「必要になるまで」先延ばしにして無駄なコピーを避ける最適化です。",
    interview:
      "fork()直後、親子プロセスは同じ物理ページを指す形で仮想メモリを共有し、ページテーブルは書き込み禁止として設定されます。どちらかのプロセスがそのページに書き込もうとすると、ページフォルトが発生し、その時点で初めて物理ページが複製されて分離されます。読み取りだけなら複製は起きません。",
    relevance:
      "大きなプロセスをforkしてサブプロセスを起動するサーバーの起動コストや、Redisのようなミドルウェアがスナップショット取得時にfork+copy-on-writeを使う仕組みを理解する上で重要です。",
    next: "プロセスやメモリ管理の理解を発展させて、GCアルゴリズムの違いを見てみましょう。",
    deeper: [
      "copy-on-writeにより、forkして即execするような使い方（多くのプロセス起動パターン）では実質的にコピーコストがほぼゼロになります。",
      "書き込みが多いワークロードでは結局大半のページが複製されるため、copy-on-writeの恩恵は読み取り中心の場合ほど大きくなります。",
    ],
  },
  {
    id: "l6-computer-memory-barrier",
    level: 6,
    domain: "computer",
    tags: ["memory-barrier", "concurrency", "cpu"],
    prompt:
      "面接官: マルチコアCPUにおける「メモリバリア(メモリフェンス)」は何のために使われますか?",
    correct: {
      id: "correct",
      text: "CPUやコンパイラによる命令の並び替えを制限し、コア間でメモリ操作の順序が期待通りに見えるよう保証するため",
    },
    distractors: [
      { id: "d1", text: "特定のメモリ領域への物理的なアクセスを永久に禁止するため" },
      { id: "d2", text: "メモリの使用量を強制的に制限し、上限を超えるとプロセスを終了させるため" },
      { id: "d3", text: "キャッシュの内容をディスクに書き出す頻度を上げるため" },
      { id: "d4", text: "複数のスレッドが同じ変数名を使えないようにコンパイル時に検出するため" },
      { id: "d5", text: "ガベージコレクションの実行タイミングを固定するため" },
    ],
    brief:
      "メモリバリアは、最適化のための命令並び替えが「他のコアから見える順序」を壊さないように歯止めをかける仕組みです。",
    interview:
      "CPUやコンパイラは性能のために命令の実行順序を並び替えることがありますが、単一コア内では問題なくても、複数コアが同じメモリを見ているとその並び替えが他コアから見た順序の不整合として現れます。メモリバリアは『このバリアより前の書き込みは後の書き込みより先に他コアから見える』といった順序を保証します。ロックフリーアルゴリズムやアトミック変数の実装で明示的、あるいは暗黙的に使われます。",
    relevance:
      "高性能なロックフリーキューやアトミック操作を扱うライブラリの内部実装や、なぜvolatileだけではスレッド安全にならないかを説明する際に、メモリバリアの理解が必要になります。",
    next: "この延長として、複数コアのキャッシュを一貫させるキャッシュコヒーレンシの仕組みを見ていきましょう。",
    deeper: [
      "x86は比較的強いメモリ順序モデルを持ちますが、ARMなどはより弱く並び替えが起きやすいため、明示的なバリアがより重要になります。",
      "言語レベルのメモリモデル（Javaのvolatile、C++のstd::atomicの順序指定など）は、このハードウェアのバリアを抽象化して提供しています。",
    ],
  },
  {
    id: "l6-computer-cache-coherence",
    level: 6,
    domain: "computer",
    tags: ["cache-coherence", "multicore", "cpu"],
    prompt: "面接官: マルチコアCPUにおける「キャッシュコヒーレンシ」問題とは何を指しますか?",
    correct: {
      id: "correct",
      text: "各コアが独自のキャッシュに同じメモリアドレスの値を保持しているとき、それらの値の一貫性をどう保つかという問題",
    },
    distractors: [
      { id: "d1", text: "ディスクとメモリの間でデータが同期されないという問題" },
      { id: "d2", text: "異なるプログラミング言語間で変数の型が一致しないという問題" },
      { id: "d3", text: "ネットワーク越しに複数サーバーのキャッシュを同期する問題全般を指す用語" },
      { id: "d4", text: "GCが古い世代のオブジェクトを回収し忘れる問題" },
      { id: "d5", text: "コンパイラの最適化によりコードの意味が変わってしまう問題" },
    ],
    brief:
      "キャッシュコヒーレンシは、複数コアが持つ同じアドレスのキャッシュコピー同士をどう一致させるかという問題です。",
    interview:
      "各コアはL1/L2キャッシュを個別に持つため、同じメモリアドレスの値が複数のキャッシュに別々にコピーされ得ます。あるコアがその値を書き換えたとき、他コアが古い値を見続けてしまうと不整合が起きます。これを防ぐためMESIプロトコルのような仕組みで、あるキャッシュラインが書き換えられたら他コアのコピーを無効化したり更新したりして一貫性を保ちます。",
    relevance:
      "false sharingと呼ばれる、隣接する変数を別コアが頻繁に書き換えて性能が落ちる現象や、ロックフリーデータ構造の性能特性を説明する上でキャッシュコヒーレンシの理解が前提になります。",
    next: "ハードウェアの視点をさらに進めて、CPUのパイプラインと分岐予測を見てみましょう。",
    deeper: [
      "MESIプロトコルでは、キャッシュラインがModified/Exclusive/Shared/Invalidのいずれかの状態を持ち、他コアの読み書きに応じて状態遷移します。",
      "false sharingは論理的には別々の変数なのに、同じキャッシュライン上にあるために無用なコヒーレンシトラフィックが発生する現象です。",
    ],
  },
  {
    id: "l7-computer-lock-free",
    level: 7,
    domain: "computer",
    tags: ["lock-free", "cas", "concurrency"],
    prompt:
      "面接官: ロックフリーなデータ構造を実装する際、CAS(Compare-And-Swap)命令はどのような役割を果たしますか?",
    correct: {
      id: "correct",
      text: "ある変数の値が期待値と一致する場合にのみ、アトミックに新しい値へ更新することで、ロックなしで安全な状態遷移を可能にする",
    },
    distractors: [
      { id: "d1", text: "複数スレッドの実行順序をOSスケジューラに固定させる命令である" },
      { id: "d2", text: "メモリ上の複数の変数を一度にまとめてロックする命令である" },
      { id: "d3", text: "キャッシュラインを常に無効化し続けることで一貫性を保証する命令である" },
      { id: "d4", text: "スレッドを一時停止させ、優先度の高いスレッドに実行権を譲る命令である" },
      { id: "d5", text: "ディスクI/Oをアトミックに行うための命令である" },
    ],
    brief:
      "CASは「期待していた値のままなら書き換える」をアトミックに行うことで、排他ロックなしの安全な更新を実現する基本命令です。",
    interview:
      "ロックフリーアルゴリズムでは、複数スレッドが同じ共有変数を読み、その読んだ値をもとに新しい値を計算し、CASで『まだその値のままなら更新』を試みます。他スレッドが先に値を変えていた場合はCASが失敗し、再度読み直してリトライします。ロックを取らないためデッドロックが起きにくい一方、競合が激しいとリトライが増え性能が落ちることもあります。",
    relevance:
      "並行キューやカウンタなど高スループットが求められるライブラリの内部実装、あるいはAtomicIntegerやatomic<T>のようなプリミティブの動作原理を説明する際に必要になります。",
    next: "ロックフリー実装の正しさを議論するため、線形化可能性の定義に戻って確認してみましょう。",
    deeper: [
      "CASにはABA問題と呼ばれる落とし穴があり、値がAからBを経て再びAに戻った場合、変化がなかったと誤認してしまうことがあります。",
      "ロックフリーは『あるスレッドは進む』ことを保証しますが、ウェイトフリーとは異なり特定スレッドが飢餓状態になる可能性は排除しません。",
    ],
  },
  {
    id: "l7-computer-numa",
    level: 7,
    domain: "computer",
    tags: ["numa", "memory", "architecture"],
    prompt:
      "面接官: NUMA(Non-Uniform Memory Access)構成のマシンで性能を考える際、何に注意する必要がありますか?",
    correct: {
      id: "correct",
      text: "CPUがどのメモリノードにアクセスするかによってレイテンシが異なるため、スレッドとメモリの配置を近づける必要がある",
    },
    distractors: [
      {
        id: "d1",
        text: "すべてのメモリアクセスが常に同じ速度になるよう設計されているため、特別な配慮は不要である",
      },
      { id: "d2", text: "ディスクI/Oの速度がCPUコア数に比例して自動的に向上する" },
      { id: "d3", text: "NUMAは仮想メモリを廃止し、物理アドレスを直接扱う仕組みである" },
      { id: "d4", text: "ネットワーク越しのメモリアクセスを高速化するプロトコルである" },
      { id: "d5", text: "GCのstop-the-worldを完全に無くすためのハードウェア機構である" },
    ],
    brief:
      "NUMAでは『どのメモリがどのCPUに近いか』が性能を左右するため、局所性を意識した配置が重要になります。",
    interview:
      "NUMA構成では、CPUソケットごとにローカルなメモリノードがあり、自分のノードのメモリへのアクセスは高速ですが、他ソケットのノードへのアクセスはインターコネクトを経由するため遅くなります。スレッドが実行されるコアと、そのスレッドが使うメモリが別ノードにまたがると、レイテンシが増加し性能が劣化します。OSやランタイムはスレッドとメモリの割り当てをできるだけ同じノードに揃えることで、この影響を抑えようとします。",
    relevance:
      "大規模なDBサーバーやJVMのようなランタイムをマルチソケットマシンでチューニングする際、NUMAを意識したスレッドアフィニティやメモリ割り当ての設定が性能に直結します。",
    next: "ハードウェア特性の理解を踏まえ、分散システムにおける一貫性の定義である直列化可能性を再確認してみましょう。",
    deeper: [
      "多くのOSはfirst-touchポリシーを採用し、あるメモリページに最初にアクセスしたスレッドが属するノードにそのページを割り当てます。",
      "NUMA非対応のまま書かれたソフトウェアは、コア数を増やしても遠隔ノードアクセスの増加により期待通りにスケールしないことがあります。",
    ],
  },
  {
    id: "l7-computer-branch-prediction",
    level: 7,
    domain: "computer",
    tags: ["branch-prediction", "pipeline", "cpu"],
    prompt:
      "面接官: CPUの分岐予測(branch prediction)を外した場合、性能にどのような影響がありますか?",
    correct: {
      id: "correct",
      text: "パイプラインに投機的に読み込んでいた命令が無効になり、パイプラインをフラッシュしてやり直すコストが発生する",
    },
    distractors: [
      { id: "d1", text: "メモリ上のデータが自動的に破損し、再起動が必要になる" },
      { id: "d2", text: "常にディスクI/Oが発生し、処理が完全に停止する" },
      { id: "d3", text: "ネットワーク経由で他のコアに処理を移譲する" },
      { id: "d4", text: "GCが強制的に実行され、メモリが解放される" },
      { id: "d5", text: "分岐予測ミスはコンパイル時に検出され、実行時には影響しない" },
    ],
    brief:
      "分岐予測はif文などの分岐先を先読みしてパイプラインを埋める最適化で、外すとやり直しコストがかかります。",
    interview:
      "CPUはパイプライン化により複数命令を並行して処理しますが、分岐命令の結果が確定するまで次に実行すべき命令が分かりません。そこで過去の実行パターンから分岐先を予測し、投機的に命令を読み込んで実行します。予測が外れると、投機的に進めていた処理を破棄してパイプラインを再構築する必要があり、これがペナルティとして性能に響きます。",
    relevance:
      "ホットパスのループでランダムな分岐が多いと性能が落ちる理由や、ソート済み配列に対する条件分岐が速くなる現象を説明する際の基礎になります。",
    next: "ここまでCPUアーキテクチャの深いところまで見てきました。分散システムの一貫性モデルに話を戻しましょう。",
    deeper: [
      "予測しやすいパターン(単純なループ条件など)は的中率が高く、ランダムな分岐は外れやすくなります。",
      "Spectreのような脆弱性は、投機的実行の副作用を悪用してキャッシュ経由で秘密情報を読み取る手法として知られています。",
    ],
  },
  {
    id: "l1-design-dry",
    level: 1,
    domain: "design",
    tags: ["dry"],
    prompt: "面接官: 「DRY原則」とは何ですか?",
    correct: { id: "correct", text: "同じ知識やロジックを複数箇所に重複させないこと" },
    distractors: [
      { id: "d1", text: "コードをできるだけドライ(簡潔)な見た目にすること" },
      { id: "d2", text: "テストコードを書かないこと" },
      { id: "d3", text: "変数をすべてグローバルに定義すること" },
      { id: "d4", text: "1つのファイルにすべての処理をまとめること" },
      { id: "d5", text: "コメントを重複して書くこと" },
    ],
    brief:
      "DRY(Don't Repeat Yourself)は、同じ知識を一箇所にまとめ、変更時の修正漏れを防ぐ原則です。",
    interview: "同じロジックが複数箇所にあると、片方だけ修正してバグが生まれることがあります。",
    relevance: "共通処理の関数化やモジュール分割の判断基準になります。",
    next: "YAGNI原則との違いも押さえておきましょう。",
    deeper: [
      "見た目が似ているだけで意味が異なるコードを無理に共通化すると、逆に結合度が上がります。",
      "DRYは「コードの重複」ではなく「知識の重複」を避けることが本質です。",
    ],
  },
  {
    id: "l1-design-yagni",
    level: 1,
    domain: "design",
    tags: ["yagni"],
    prompt: "面接官: 「YAGNI」とはどのような考え方ですか?",
    correct: { id: "correct", text: "今必要ない機能はまだ実装しないという考え方" },
    distractors: [
      { id: "d1", text: "将来使うかもしれない機能をあらかじめすべて実装すること" },
      { id: "d2", text: "設計書を一切書かずに実装すること" },
      { id: "d3", text: "テストを後回しにしてリリースを優先すること" },
      { id: "d4", text: "コードレビューを省略すること" },
      { id: "d5", text: "ライブラリを使わず自前実装すること" },
    ],
    brief: "YAGNI(You Aren't Gonna Need It)は、今使わない機能を先回りして作らない考え方です。",
    interview:
      "「将来必要になりそうだから」と過剰に汎用化すると、複雑さだけが増えることがあります。",
    relevance: "オーバーエンジニアリングを避け、必要になった時点で設計を拡張する判断に使います。",
    next: "疎結合な設計との関係を見ていきましょう。",
    deeper: [
      "YAGNIは「拡張性を捨てる」ことではなく、不確実な未来への投資を後回しにする戦略です。",
      "変更しやすい設計にしておけば、必要になったときに安全に拡張できます。",
    ],
  },
  {
    id: "l2-design-loose-coupling",
    level: 2,
    domain: "design",
    tags: ["coupling", "layered-architecture"],
    prompt:
      "面接官: レイヤードアーキテクチャで上位層が下位層の実装詳細に依存しないようにする一般的な手法は?",
    correct: { id: "correct", text: "インターフェースを介して依存し、実装の差し替えを可能にする" },
    distractors: [
      { id: "d1", text: "すべての層を1つのクラスにまとめる" },
      { id: "d2", text: "下位層から上位層を直接呼び出す" },
      { id: "d3", text: "全ての層でグローバル変数を共有する" },
      { id: "d4", text: "層ごとに別のプログラミング言語を使う" },
      { id: "d5", text: "下位層の実装クラスを上位層にコピーする" },
    ],
    brief:
      "インターフェースへの依存により、上位層は下位層の具体的な実装を知らずに済み、疎結合になります。",
    interview:
      "DBアクセス層をインターフェース越しに呼べば、実装をMySQLからPostgreSQLに変えても上位層は変更不要です。",
    relevance: "依存性逆転の原則(DIP)やクリーンアーキテクチャの基礎になります。",
    next: "凝集度との関係を見ていきましょう。",
    deeper: [
      "疎結合すぎるとインターフェースの数が増え、逆に見通しが悪くなることもあります。",
      "レイヤーを跨いだ直接参照が増えると、テスト時のモック化が難しくなります。",
    ],
  },
  {
    id: "l2-design-open-closed",
    level: 2,
    domain: "design",
    tags: ["solid", "open-closed"],
    prompt: "面接官: SOLID原則の「オープン・クローズドの原則」とはどのような考え方ですか?",
    correct: {
      id: "correct",
      text: "拡張に対して開き、既存コードの修正に対して閉じているべきという原則",
    },
    distractors: [
      { id: "d1", text: "すべてのクラスをfinalにして継承を禁止すべきという原則" },
      { id: "d2", text: "ソースコードを常にオープンソースにすべきという原則" },
      { id: "d3", text: "新機能追加時は必ず既存コードを書き換えるべきという原則" },
      { id: "d4", text: "クラスのメンバーはすべてpublicにすべきという原則" },
      { id: "d5", text: "1つのクラスに機能を追加し続けるべきという原則" },
    ],
    brief:
      "既存コードを変更せずに、新しい振る舞いを追加(拡張)できるように設計すべきという原則です。",
    misconception:
      "「修正に閉じる」は「既存コードを絶対に直すな」という意味ではありません。「新しい仕様が来るたびに、動いている既存コードを書き換えなくて済む形にしておく」という設計の方向性です。バグ修正やリファクタリングは普通に行います。",
    story:
      '決済に「コンビニ払い」を追加する場面を想像してください。if (method === "card") ... else if (method === "bank") ... という分岐に1本足すのではなく、PaymentMethodインターフェースを実装するConbiniPaymentクラスを1つ追加するだけで済む設計なら、既存のカード決済のコードには触れないので、そちらを壊す心配もテストのやり直しも不要です。',
    nameOrigin:
      "Open-Closed Principle = 「拡張（extension）にはOpen、修正（modification）にはClosed」。SOLIDのOにあたります。",
    interview:
      "新しい支払い方法を追加する際、既存のif分岐を書き換えず、新しいクラスを追加するだけで済む設計が理想です。",
    relevance: "ストラテジーパターンやプラグイン機構の設計判断に直結します。",
    next: "リスコフの置換原則との関係も見ていきましょう。",
    deeper: [
      "完全に修正不要な設計は難しく、変更頻度の高い箇所から優先的に適用するのが現実的です。",
      "抽象化しすぎると、シンプルな変更でも多くのクラスを追加する必要が出ることがあります。",
    ],
  },
  {
    id: "l3-design-cqrs",
    level: 3,
    domain: "design",
    tags: ["cqrs"],
    prompt: "面接官: CQRS(コマンドクエリ責務分離)パターンの基本的な考え方は?",
    correct: {
      id: "correct",
      text: "データの更新(コマンド)と参照(クエリ)のモデル・経路を分離すること",
    },
    distractors: [
      { id: "d1", text: "すべてのSQLクエリをストアドプロシージャにまとめること" },
      { id: "d2", text: "読み取り専用のレプリカを使わずマスターDBのみで運用すること" },
      { id: "d3", text: "コマンドラインインターフェースのみでシステムを操作すること" },
      { id: "d4", text: "1つのAPIエンドポイントですべての操作を処理すること" },
      { id: "d5", text: "更新と参照を必ず同じトランザクション内で行うこと" },
    ],
    brief:
      "CQRSは更新用モデルと参照用モデルを分けることで、それぞれを独立に最適化できるようにする設計手法です。",
    interview:
      "参照が多いシステムでは、更新用の正規化されたDBとは別に、参照専用の非正規化ビューを用意することがあります。",
    relevance: "イベントソーシングや大規模読み取り最適化を伴うシステム設計で登場します。",
    next: "結果整合性とのセットで検討されることが多い点を見ていきましょう。",
    deeper: [
      "コマンド側とクエリ側でデータストアを分ける場合、同期の遅延をどう扱うか設計が必要です。",
      "小規模なシステムに導入すると、複雑さだけが増して見合わないことがあります。",
    ],
  },
  {
    id: "l4-design-feature-flag",
    level: 4,
    domain: "design",
    tags: ["feature-flag", "release"],
    prompt: "面接官: フィーチャーフラグ(Feature Flag)を使うことの設計上の主な利点は?",
    correct: { id: "correct", text: "コードのデプロイとリリース(機能の有効化)を切り離せること" },
    distractors: [
      { id: "d1", text: "テストコードを書かなくてもよくなること" },
      { id: "d2", text: "常に全ユーザーに新機能を即座に公開できること" },
      { id: "d3", text: "コードレビューの工程を省略できること" },
      { id: "d4", text: "データベースのスキーマ変更が不要になること" },
      { id: "d5", text: "本番環境でのロールバック作業が完全に不要になること" },
    ],
    brief:
      "フィーチャーフラグは機能のON/OFFを設定で切り替え可能にし、デプロイとリリースタイミングを分離する仕組みです。",
    interview:
      "カナリアリリースやA/Bテストで、一部ユーザーだけに新機能を段階的に公開する際に使われます。",
    relevance: "継続的デリバリーやトランクベース開発と組み合わせて使われることが多い設計要素です。",
    next: "フラグが増えすぎた際の技術的負債の管理も論点になります。",
    deeper: [
      "フラグの組み合わせが増えると、テストすべきパスが指数的に増える課題があります。",
      "長期間残ったフラグはコードの複雑度を上げるため、計画的な削除が必要です。",
    ],
  },
  {
    id: "l5-design-backpressure",
    level: 5,
    domain: "design",
    tags: ["backpressure", "queue"],
    prompt: "面接官: システム設計における「バックプレッシャー」とはどのような仕組みですか?",
    correct: { id: "correct", text: "処理能力を超えた流入を検知し、送信側の速度を抑制する仕組み" },
    distractors: [
      { id: "d1", text: "サーバーのCPUクロックを強制的に引き上げる仕組み" },
      { id: "d2", text: "受信したリクエストを無条件にすべて破棄する仕組み" },
      { id: "d3", text: "ネットワーク帯域を常に最大まで使い切る仕組み" },
      { id: "d4", text: "データベースのレプリカ数を自動的に増減する仕組み" },
      { id: "d5", text: "キューを無限に拡張してすべてのリクエストを蓄積する仕組み" },
    ],
    brief:
      "バックプレッシャーは、受け手の処理能力を超えるデータ流入を抑えるためのフロー制御メカニズムです。",
    interview:
      "メッセージキューの消費が追いつかない場合、生産側にシグナルを送って送信レートを落とすことがあります。",
    relevance: "リアクティブシステムやストリーム処理基盤の安定運用に不可欠な設計要素です。",
    next: "サーキットブレーカーなど他の耐障害パターンとの組み合わせを見ていきましょう。",
    deeper: [
      "バックプレッシャーを無視してキューを無制限に伸ばすと、メモリ枯渇によるカスケード障害を招きます。",
      "同期的な仕組みと非同期的な仕組みでバックプレッシャーの実装方法が異なります。",
    ],
  },
  {
    id: "l6-design-circuit-breaker",
    level: 6,
    domain: "design",
    tags: ["circuit-breaker", "resilience"],
    prompt: "面接官: サーキットブレーカーパターンが解決しようとする問題は何ですか?",
    correct: {
      id: "correct",
      text: "障害中の依存先への呼び出しを一時的に遮断し、カスケード障害を防ぐこと",
    },
    distractors: [
      { id: "d1", text: "データベースのスキーマ変更を自動化すること" },
      { id: "d2", text: "常にリクエストをリトライし続けて成功率を上げること" },
      { id: "d3", text: "ネットワークの物理的な断線を検知して自動修復すること" },
      { id: "d4", text: "複数のサービスを1つのプロセスに統合すること" },
      { id: "d5", text: "ログの出力先を切り替えること" },
    ],
    brief:
      "サーキットブレーカーは、依存先の障害を検知すると呼び出しを一定期間遮断し、システム全体への影響拡大を防ぎます。",
    interview:
      "決済APIが応答しなくなった際、リトライを繰り返すとスレッドが枯渇するため、一定回数失敗したら回路を開いて即座にエラーを返します。",
    relevance: "マイクロサービス間通信での耐障害設計として広く使われるパターンです。",
    next: "バルクヘッドパターンとの組み合わせも見ていきましょう。",
    deeper: [
      "半開状態(Half-Open)を設けて段階的に呼び出しを再開する設計が一般的です。",
      "しきい値やタイムアウトの設定を誤ると、正常なサービスまで遮断してしまうことがあります。",
    ],
  },
  {
    id: "l6-design-bulkhead",
    level: 6,
    domain: "design",
    tags: ["bulkhead", "resilience"],
    prompt: "面接官: バルクヘッド(隔壁)パターンとはどのような設計手法ですか?",
    correct: {
      id: "correct",
      text: "リソースを区画分割し、一部の障害が全体に波及しないようにすること",
    },
    distractors: [
      { id: "d1", text: "すべてのサービスで同一のスレッドプールを共有すること" },
      { id: "d2", text: "データベースを1つの巨大なテーブルに統合すること" },
      { id: "d3", text: "すべてのリクエストを同じキューで処理すること" },
      { id: "d4", text: "障害発生時にシステム全体を即座に停止すること" },
      { id: "d5", text: "複数サービスのログを1つのファイルにまとめること" },
    ],
    brief:
      "船の隔壁のように、リソース(スレッドプールや接続プールなど)を区画に分け、一部の過負荷が他に波及しないようにする設計です。",
    interview:
      "ある外部APIの呼び出しが遅延しても、別の重要な処理用のスレッドプールを専用に確保しておけば全体停止を防げます。",
    relevance: "マルチテナントシステムやマイクロサービスのリソース分離設計に応用されます。",
    next: "サーキットブレーカーとバルクヘッドを組み合わせた耐障害設計を見ていきましょう。",
    deeper: [
      "区画を細かくしすぎるとリソースの利用効率が下がり、粗すぎると隔離効果が薄れます。",
      "コンテナのリソース制限やスレッドプールの分離など、複数のレベルで実装され得ます。",
    ],
  },
  {
    id: "l7-design-idempotency-key",
    level: 7,
    domain: "design",
    tags: ["idempotency-key", "distributed-systems"],
    prompt: "面接官: 分散システムで決済APIなどに冪等性キー(Idempotency Key)を導入する主な目的は?",
    correct: { id: "correct", text: "クライアントの再送信時に同一リクエストの重複実行を防ぐため" },
    distractors: [
      { id: "d1", text: "APIのレスポンス速度を高速化するため" },
      { id: "d2", text: "リクエストの暗号化強度を高めるため" },
      { id: "d3", text: "サーバーのログ出力量を削減するため" },
      { id: "d4", text: "クライアント側のキャッシュを完全に無効化するため" },
      { id: "d5", text: "データベースのインデックスを自動生成するため" },
    ],
    brief:
      "冪等性キーはクライアントが生成する一意な識別子で、同じキーでの再送を検知して二重処理を防ぐ仕組みです。",
    interview:
      "ネットワークタイムアウトでクライアントが決済APIを再送しても、サーバー側で同じキーを検知して二重課金を回避します。",
    relevance: "リトライを前提とする分散システムの信頼性設計で必須の考え方です。",
    next: "サガパターンなど分散トランザクションの補償処理との関係も見ていきましょう。",
    deeper: [
      "キーの保存期間や処理結果のキャッシュ方法など、実装上の詳細設計が重要になります。",
      "リクエストの内容が異なるのに同じキーが再利用された場合の扱いも設計で決める必要があります。",
    ],
  },
  {
    id: "l7-design-sharding-strategy",
    level: 7,
    domain: "design",
    tags: ["sharding", "scalability"],
    prompt:
      "面接官: データベースのシャーディング戦略として「レンジベース」と「ハッシュベース」の違いは?",
    correct: {
      id: "correct",
      text: "レンジベースはキーの範囲で分割し、ハッシュベースはハッシュ値で分散配置する",
    },
    distractors: [
      { id: "d1", text: "レンジベースはレプリカを持たず、ハッシュベースは必ずレプリカを持つ" },
      { id: "d2", text: "レンジベースは読み取り専用で、ハッシュベースは書き込み専用に使われる" },
      { id: "d3", text: "レンジベースはNoSQL専用、ハッシュベースはRDB専用の手法である" },
      { id: "d4", text: "両者に技術的な違いはなく、名称だけが異なる" },
      { id: "d5", text: "ハッシュベースは常に単一のシャードにすべてのデータを格納する" },
    ],
    brief:
      "レンジベースはキーの範囲ごとにシャードを割り当て、ハッシュベースはキーのハッシュ値で分散させる方式です。",
    interview:
      "日付範囲で検索が多いデータはレンジベースが有利ですが、特定範囲にアクセスが偏るホットスポットが起きやすい弱点があります。",
    relevance: "大規模データベースの水平分割設計で、アクセスパターンに応じた選択が求められます。",
    next: "リシャーディング(再分割)時の移行コストについても検討しましょう。",
    deeper: [
      "ハッシュベースは負荷を均等に分散しやすい反面、範囲検索が非効率になりやすい特性があります。",
      "コンシステントハッシングを使うことで、シャード数変更時のデータ再配置コストを抑えられます。",
    ],
  },
  {
    id: "l1-network-http-header",
    level: 1,
    domain: "network",
    tags: ["http"],
    prompt: "面接官: HTTPヘッダーの役割として最も適切なものはどれですか?",
    correct: { id: "correct", text: "リクエストやレスポンスに関する付加情報をやり取りする仕組み" },
    distractors: [
      { id: "d1", text: "HTMLの構造そのものを定義する仕組み" },
      { id: "d2", text: "データベースへのクエリを実行する仕組み" },
      { id: "d3", text: "画像を圧縮してファイルサイズを小さくする仕組み" },
      { id: "d4", text: "OSのプロセス間通信を行う仕組み" },
      { id: "d5", text: "サーバーのディスク容量を管理する仕組み" },
    ],
    brief:
      "HTTPヘッダーは本文とは別に、Content-TypeやAuthorizationなどのメタ情報を伝える部分です。",
    interview:
      "リクエストヘッダーとレスポンスヘッダーの両方があり、それぞれ用途の異なる情報を運びます。",
    relevance: "APIの認証や本文形式の指定など、実務ではヘッダー操作が頻繁に発生します。",
    next: "代表的なヘッダーの種類を見ていきましょう。",
    deeper: [
      "Content-Typeは本文のデータ形式をクライアントとサーバー間で共有します。",
      "Authorizationヘッダーは認証情報をリクエストに付与するために使われます。",
    ],
  },
  {
    id: "l2-network-port-number",
    level: 2,
    domain: "network",
    tags: ["port", "tcp-ip"],
    prompt: "面接官: ポート番号の役割として最も適切なものはどれですか?",
    correct: { id: "correct", text: "同一ホスト上で動作する複数のアプリケーションを識別する番号" },
    distractors: [
      { id: "d1", text: "ネットワーク機器の物理的な接続口を識別する番号" },
      { id: "d2", text: "IPアドレスの上位ビットを表す番号" },
      { id: "d3", text: "パケットの送信順序を保証するための番号" },
      { id: "d4", text: "ドメイン名を一意に識別するための番号" },
      { id: "d5", text: "暗号化アルゴリズムの種類を示す番号" },
    ],
    brief: "ポート番号はIPアドレスと組み合わせて、同じホスト上の異なるサービスを区別します。",
    interview: "HTTPは80番、HTTPSは443番のように、well-knownポートが慣習的に割り当てられています。",
    relevance: "ファイアウォール設定やデバッグ時にポート番号の理解は欠かせません。",
    next: "IPアドレスの構造についても見ていきましょう。",
    deeper: [
      "ポート番号は0から65535まであり、well-known・registered・dynamicの範囲に分かれます。",
      "同一マシンで複数のWebサーバーを動かす場合、異なるポートを割り当てて区別します。",
    ],
  },
  {
    id: "l3-network-websocket",
    level: 3,
    domain: "network",
    tags: ["websocket"],
    prompt: "面接官: WebSocketの特徴として最も適切なものはどれですか?",
    correct: { id: "correct", text: "1本のTCPコネクション上で双方向の通信を継続的に行える" },
    distractors: [
      { id: "d1", text: "リクエストごとに新しいTCPコネクションを毎回確立する" },
      { id: "d2", text: "サーバーからクライアントへの通信は一切できない" },
      { id: "d3", text: "UDPの上でのみ動作するプロトコルである" },
      { id: "d4", text: "常にポーリングによってサーバーの状態を確認する" },
      { id: "d5", text: "HTTPとは全く互換性のない独立したポートで動作する" },
    ],
    brief:
      "WebSocketはHTTPのハンドシェイクでコネクションをアップグレードし、双方向通信を実現します。",
    interview: "チャットやリアルタイム通知など、サーバーから随時プッシュしたい場面で利用されます。",
    relevance: "ポーリングとの違いやコネクション維持コストを理解しているかが問われます。",
    next: "HTTP/2の多重化についても見ていきましょう。",
    deeper: [
      "WebSocketはHandshake時にUpgradeヘッダーを使いHTTPからプロトコルを切り替えます。",
      "接続を維持するためハートビート(ping/pong)で生存確認を行うことが一般的です。",
    ],
  },
  {
    id: "l3-network-http2-multiplexing",
    level: 3,
    domain: "network",
    tags: ["http2"],
    prompt: "面接官: HTTP/2の多重化(マルチプレクシング)の特徴として最も適切なものはどれですか?",
    correct: {
      id: "correct",
      text: "1本のTCPコネクション上で複数のリクエストとレスポンスを並行してやり取りできる",
    },
    distractors: [
      { id: "d1", text: "リクエストごとに別々のTCPコネクションを並列に開くことで高速化する仕組み" },
      { id: "d2", text: "レスポンスをすべてキャッシュしてリクエストを送らずに済ませる仕組み" },
      { id: "d3", text: "サーバー側でのみ有効で、クライアントの実装には影響しない仕組み" },
      { id: "d4", text: "通信内容を圧縮せずそのまま送信する仕組み" },
      { id: "d5", text: "HTTP/1.1のKeep-Aliveを完全に廃止するための仕組み" },
    ],
    brief:
      "HTTP/2はストリームという単位でリクエストを分割し、1本のコネクション上で並行処理します。",
    interview: "HTTP/1.1でのリクエストの直列待ちを解消し、ページ表示の高速化に寄与します。",
    relevance: "パフォーマンス改善の議論でHTTP/1.1との違いを説明できるかが問われます。",
    next: "TCPレベルのHead-of-Lineブロッキングとの関係も見ていきましょう。",
    deeper: [
      "多重化によりドメインシャーディングのような回避策が不要になりました。",
      "ただしTCP層でパケットロスが起きるとストリーム間で待ちが発生することがあります。",
    ],
  },
  {
    id: "l4-network-load-balancing-algorithm",
    level: 4,
    domain: "network",
    tags: ["load-balancer"],
    prompt: "面接官: ロードバランサーのラウンドロビン方式の特徴として最も適切なものはどれですか?",
    correct: {
      id: "correct",
      text: "各サーバーの負荷状況に関係なく順番にリクエストを振り分ける方式",
    },
    distractors: [
      { id: "d1", text: "常に応答時間が最も短いサーバーへ振り分ける方式" },
      { id: "d2", text: "セッション情報を元に特定の1台のみへ振り分け続ける方式" },
      { id: "d3", text: "CPU使用率を毎回計測してから振り分け先を決める方式" },
      { id: "d4", text: "リクエストの内容をすべて解析してから振り分け先を決める方式" },
      { id: "d5", text: "常に地理的に最も近いサーバーへ振り分ける方式" },
    ],
    brief:
      "ラウンドロビンはシンプルに順番でサーバーへ割り振る方式で、実装が容易な反面、負荷の偏りに弱い場合があります。",
    interview: "サーバーの性能差がある場合は重み付けラウンドロビンなどが用いられます。",
    relevance: "アーキテクチャ設計でどの分散方式を選ぶかは可用性と性能に直結します。",
    next: "Keep-Aliveとコネクションプーリングについても見ていきましょう。",
    deeper: [
      "最小コネクション数方式は現在の接続数が少ないサーバーを優先する方式です。",
      "ヘルスチェックと組み合わせることで異常なサーバーを振り分け対象から除外できます。",
    ],
  },
  {
    id: "l4-network-connection-pooling",
    level: 4,
    domain: "network",
    tags: ["tcp", "performance"],
    prompt: "面接官: コネクションプーリングを用いる目的として最も適切なものはどれですか?",
    correct: {
      id: "correct",
      text: "TCPコネクションの確立コストを削減し再利用によって通信を高速化するため",
    },
    distractors: [
      { id: "d1", text: "リクエストの内容を暗号化するため" },
      { id: "d2", text: "サーバーのメモリ使用量を意図的に増やすため" },
      { id: "d3", text: "DNSの名前解決結果をキャッシュするため" },
      { id: "d4", text: "リクエストの順序を並び替えて処理するため" },
      { id: "d5", text: "HTTPステータスコードの互換性を保つため" },
    ],
    brief:
      "コネクションプーリングは確立済みのTCPコネクションを保持し、再接続のオーバーヘッドを避ける仕組みです。",
    interview:
      "データベース接続やHTTPクライアントで、毎回の3ウェイハンドシェイクを避けるために使われます。",
    relevance: "高負荷なシステムでのレイテンシ削減やリソース管理の観点で問われます。",
    next: "QUICやHTTP/3のコネクション確立の違いも見ていきましょう。",
    deeper: [
      "プールサイズが小さすぎると待機が発生し、大きすぎるとリソースを浪費します。",
      "Keep-Aliveタイムアウトの設定次第でプール内の接続が意図せず切断されることがあります。",
    ],
  },
  {
    id: "l5-network-grpc-http2",
    level: 5,
    domain: "network",
    tags: ["grpc", "http2"],
    prompt: "面接官: gRPCがHTTP/2を基盤に採用している理由として最も適切なものはどれですか?",
    correct: {
      id: "correct",
      text: "多重化やストリーミングなどHTTP/2の機能を利用して双方向の効率的な通信を実現するため",
    },
    distractors: [
      { id: "d1", text: "HTTP/1.1より古い規格であり互換性を重視したため" },
      { id: "d2", text: "テキストベースの可読性を最優先したかったため" },
      { id: "d3", text: "UDPを使う必要があったため" },
      { id: "d4", text: "ブラウザのCookieをそのまま利用したかったため" },
      { id: "d5", text: "TLSを利用できないようにするため" },
    ],
    brief:
      "gRPCはProtocol BuffersによるバイナリシリアライズとHTTP/2のストリーム機能を組み合わせています。",
    interview:
      "サーバーストリーミングやクライアントストリーミングなど、HTTP/2の双方向性を活かした通信パターンが特徴です。",
    relevance: "マイクロサービス間通信でREST/JSONとgRPCのどちらを選ぶかの判断材料になります。",
    next: "QUICを使うHTTP/3との違いも見ていきましょう。",
    deeper: [
      "gRPCはIDLとしてProtocol Buffersを使い、型安全なインターフェースを定義します。",
      "HTTP/2のフロー制御を利用して、大量データのストリーミングでも安定した通信が可能です。",
    ],
  },
  {
    id: "l5-network-failover-strategy",
    level: 5,
    domain: "network",
    tags: ["failover", "availability"],
    prompt:
      "面接官: アクティブ-スタンバイ構成におけるフェイルオーバーの説明として最も適切なものはどれですか?",
    correct: {
      id: "correct",
      text: "稼働中のノードに障害が発生した際、待機系のノードへ処理を自動的に切り替える仕組み",
    },
    distractors: [
      { id: "d1", text: "複数のノードに常に均等にトラフィックを振り分け続ける仕組み" },
      { id: "d2", text: "障害発生後に人手でのみ切り替えを行う仕組み" },
      { id: "d3", text: "データベースのバックアップを定期的に取得するだけの仕組み" },
      { id: "d4", text: "ノード間の時刻を同期させるための仕組み" },
      { id: "d5", text: "負荷が高いときにのみリクエストを拒否する仕組み" },
    ],
    brief:
      "フェイルオーバーは障害検知後、自動的にスタンバイ系へ切り替えて可用性を維持する仕組みです。",
    interview: "ヘルスチェックとVIP(仮想IP)の切り替えなどを組み合わせて実現されることが多いです。",
    relevance: "可用性要件の高いシステム設計でSPOF(単一障害点)をどう排除するかが問われます。",
    next: "Gossipプロトコルによる障害検知の仕組みも見ていきましょう。",
    deeper: [
      "フェイルオーバー時にはスプリットブレイン(二重に主系が動く状態)を防ぐ設計が重要です。",
      "フェイルバックとは、障害から復旧した旧主系へ処理を戻す動作を指します。",
    ],
  },
  {
    id: "l6-network-quic-http3",
    level: 6,
    domain: "network",
    tags: ["quic", "http3"],
    prompt:
      "面接官: QUIC(HTTP/3の基盤)がTCPではなくUDP上に構築された理由として最も適切なものはどれですか?",
    correct: {
      id: "correct",
      text: "TCPのHead-of-Lineブロッキングを回避し、独自の輻輳制御やコネクション確立の高速化を実現するため",
    },
    distractors: [
      { id: "d1", text: "UDPの方がパケットロスを完全に防げるため" },
      { id: "d2", text: "TCPが暗号化に対応していないため" },
      { id: "d3", text: "UDPの方がヘッダーサイズが大きく信頼性が高いため" },
      { id: "d4", text: "ファイアウォールを回避して通信を隠蔽するため" },
      { id: "d5", text: "TCPよりもポート番号の範囲が広いため" },
    ],
    brief:
      "QUICはUDP上にトランスポート層の機能を独自実装し、ストリーム単位でロス回復や暗号化を行います。",
    interview:
      "QUICはTLS 1.3をプロトコルに統合しており、コネクション確立とハンドシェイクを同時に行えます。",
    relevance:
      "モバイル環境でのコネクション切り替えや低遅延通信の要件でHTTP/3採用理由を説明できるかが問われます。",
    next: "輻輳制御アルゴリズムの違いについても見ていきましょう。",
    deeper: [
      "QUICのストリームは独立しており、1つのストリームでパケットロスが起きても他のストリームは影響を受けません。",
      "0-RTT接続再開により、以前接続したサーバーへは往復なしでデータ送信を開始できる場合があります。",
    ],
  },
  {
    id: "l6-network-congestion-control-algorithms",
    level: 6,
    domain: "network",
    tags: ["tcp", "congestion-control"],
    prompt:
      "面接官: BBRのような輻輳制御アルゴリズムがCUBICと異なる点として最も適切なものはどれですか?",
    correct: {
      id: "correct",
      text: "パケットロスではなく帯域幅と往復遅延の推定値を基に送信レートを制御する",
    },
    distractors: [
      {
        id: "d1",
        text: "パケットロスが発生するまで送信レートを増やし続け、ロス検知後に急減させる",
      },
      { id: "d2", text: "常に固定のウィンドウサイズで送信を続け、状況に応じて変化させない" },
      { id: "d3", text: "TCPではなくUDPでのみ動作するアルゴリズムである" },
      { id: "d4", text: "受信側の処理速度のみを基準に送信レートを決定する" },
      { id: "d5", text: "暗号化強度に応じて送信レートを調整する" },
    ],
    brief:
      "CUBICはロスベースでウィンドウサイズを増減させるのに対し、BBRは帯域幅とRTTのモデルに基づいて制御します。",
    interview:
      "高遅延・高帯域のネットワークではロスベースの輻輳制御が非効率になりやすく、BBRのような手法が有利とされます。",
    relevance:
      "パフォーマンスチューニングやネットワーク基盤の選定で輻輳制御の違いを理解しているかが問われます。",
    next: "分散システムにおけるGossipプロトコルについても見ていきましょう。",
    deeper: [
      "CUBICは損失をシグナルとするため、バッファブロート(過大なバッファによる遅延増加)を招きやすいとされます。",
      "BBRは帯域幅遅延積(BDP)を推定し、その範囲内でインフライトデータ量を制御します。",
    ],
  },
  {
    id: "l7-network-gossip-protocol",
    level: 7,
    domain: "network",
    tags: ["distributed-systems", "gossip"],
    prompt: "面接官: 分散システムにおけるGossipプロトコルの特徴として最も適切なものはどれですか?",
    correct: {
      id: "correct",
      text: "各ノードがランダムに選んだ他ノードと情報を交換し合い、確率的に全体へ伝播させる仕組み",
    },
    distractors: [
      { id: "d1", text: "中央のマスターノードが全ノードへ一括でブロードキャストする仕組み" },
      { id: "d2", text: "常に固定の順序でノードを巡回して情報を伝える仕組み" },
      { id: "d3", text: "リーダー選出を必須の前提とする合意アルゴリズムの一種" },
      { id: "d4", text: "TCPコネクションを常に全ノード間で維持し続ける仕組み" },
      { id: "d5", text: "情報の伝播に必ずDNSを経由する仕組み" },
    ],
    brief:
      "Gossipプロトコルはノード同士がランダムに通信し合うことで、障害に強く緩やかに情報を伝播させます。",
    interview: "Cassandraなどの分散データベースでメンバーシップ管理や障害検知に利用されています。",
    relevance:
      "大規模分散システムでのスケーラビリティと耐障害性のトレードオフを説明できるかが問われます。",
    next: "オリジンシールドを用いたCDN構成についても見ていきましょう。",
    deeper: [
      "Gossipは中央集権的な仕組みを持たないため、ノード数が増えてもボトルネックになりにくい特性があります。",
      "情報が全ノードへ伝わるまでには確率的な時間がかかり、即時の一貫性は保証されません。",
    ],
  },
  {
    id: "l7-network-cdn-origin-shield",
    level: 7,
    domain: "network",
    tags: ["cdn", "caching"],
    prompt: "面接官: CDNにおけるオリジンシールドの目的として最も適切なものはどれですか?",
    correct: {
      id: "correct",
      text: "複数のエッジロケーションからのキャッシュミスを集約し、オリジンサーバーへのリクエスト数を抑える",
    },
    distractors: [
      { id: "d1", text: "オリジンサーバーへのすべてのアクセスを完全に遮断する" },
      { id: "d2", text: "エッジロケーションのキャッシュを常に無効化する" },
      { id: "d3", text: "クライアントとエッジ間の通信を暗号化するためだけの仕組み" },
      { id: "d4", text: "DNSの名前解決をエッジ側で完結させる仕組み" },
      { id: "d5", text: "リクエストのルーティングをラウンドロビンのみに固定する仕組み" },
    ],
    brief:
      "オリジンシールドは中間キャッシュ層として機能し、複数エッジからの重複したオリジンリクエストを集約します。",
    interview:
      "キャッシュミス時に多数のエッジが同時にオリジンへアクセスする「サンダリングハード」問題を緩和します。",
    relevance: "大規模配信システムでのオリジン負荷軽減とキャッシュ階層設計の理解が問われます。",
    next: "ここまでネットワーク分野の幅広いトピックを扱ってきました。",
    deeper: [
      "オリジンシールドを単一リージョンに集約することで、キャッシュヒット率を高めやすくなります。",
      "階層型キャッシュはCDNだけでなく、CPUキャッシュなど他分野にも共通する設計パターンです。",
    ],
  },
  {
    id: "l1-security-sql-injection",
    level: 1,
    domain: "security",
    tags: ["sql-injection"],
    prompt: "面接官: SQLインジェクションとはどのような攻撃ですか?",
    correct: {
      id: "correct",
      text: "入力値をそのままSQL文に組み込むことで、意図しないSQLを実行させる攻撃",
    },
    distractors: [
      { id: "d1", text: "大量のリクエストを送りサーバーを停止させる攻撃" },
      { id: "d2", text: "通信経路を盗聴してパスワードを盗む攻撃" },
      { id: "d3", text: "偽のメールでパスワードを入力させる攻撃" },
      { id: "d4", text: "他人のセッションIDを推測してなりすます攻撃" },
      { id: "d5", text: "DNSの応答を書き換えて別サイトに誘導する攻撃" },
    ],
    brief: "SQLインジェクションは入力値の扱いに起因する典型的な脆弱性です。",
    interview:
      "例えばフォームの入力をそのまま文字列結合でSQLに埋め込むと、攻撃者が条件式を書き換えて認証を回避したりデータを抜き出したりできます。",
    relevance: "プレースホルダやORMを使った実装レビューで必ず確認される観点です。",
    next: "対策であるプレースホルダの仕組みを見ていきましょう。",
    deeper: [
      "プレースホルダ(パラメータ化クエリ)を使うことで値とSQL構造を分離できます。",
      "ORMを使っていても生SQLを組み立てる箇所があれば同様のリスクが残ります。",
    ],
  },
  {
    id: "l1-security-https-certificate",
    level: 1,
    domain: "security",
    tags: ["https", "certificate"],
    prompt: "面接官: HTTPS通信でサーバー証明書はどんな役割を果たしますか?",
    correct: {
      id: "correct",
      text: "接続先サーバーの正当性を証明し、通信の暗号化に使う鍵を安全に配布する",
    },
    distractors: [
      { id: "d1", text: "サーバーの処理速度を向上させる" },
      { id: "d2", text: "クライアントのIPアドレスを隠蔽する" },
      { id: "d3", text: "パスワードをブラウザに自動保存する" },
      { id: "d4", text: "画像や動画のサイズを圧縮する" },
      { id: "d5", text: "サーバーの負荷を複数台に分散する" },
    ],
    brief: "サーバー証明書は認証局(CA)によって発行され、なりすましを防ぎます。",
    misconception:
      "ブラウザはサーバー自身を直接信用しているのではありません。「あらかじめ信頼しているCAがこの証明書に署名したか」を確認しています。信頼の起点は、OSやブラウザに最初から同梱されているルートCAの証明書リストです。",
    flow: [
      "サーバ運営者: CAに「このドメインは自分のもの」と申請し、所有確認を受ける",
      "CA: 確認が取れたら、サーバの公開鍵とドメイン名を含む証明書に自分の秘密鍵で署名して発行する",
      "サーバ: 接続してきたブラウザに証明書を提示する",
      "ブラウザ: 同梱されている信頼済みCAの公開鍵で署名を検証する",
      "ブラウザ: 検証が通れば「このドメインの持ち主だとCAが保証している」と判断し、鍵マークを表示する",
    ],
    nameOrigin:
      "CA = Certificate Authority（認証局）。「証明書に権威を与える機関」で、Let's EncryptやDigiCertなどが該当します。",
    interview:
      "証明書には公開鍵とドメイン情報が含まれ、信頼できるCAの署名があることでブラウザが正当なサーバーだと判断できます。",
    relevance: "中間者攻撃対策やフィッシング対策の基本として面接で問われやすいです。",
    next: "証明書チェーンと自己署名証明書の違いを見ていきましょう。",
    deeper: [
      "証明書チェーンはルートCAから末端証明書までの信頼の連鎖を表します。",
      "自己署名証明書は開発環境などで使われますが、本番では信頼されません。",
    ],
  },
  {
    id: "l2-security-password-policy",
    level: 2,
    domain: "security",
    tags: ["password-policy", "mfa"],
    prompt: "面接官: パスワードポリシーとして今日推奨される方向性は次のうちどれですか?",
    correct: {
      id: "correct",
      text: "長く複雑なパスフレーズを許容し、定期的な強制変更よりも多要素認証を重視する",
    },
    distractors: [
      { id: "d1", text: "全ユーザーに90日ごとの強制変更を必ず課す" },
      { id: "d2", text: "8文字固定で数字のみ使用を許可する" },
      { id: "d3", text: "パスワードを平文でログに記録し監査に使う" },
      { id: "d4", text: "同じパスワードを全サービスで使い回すよう推奨する" },
      { id: "d5", text: "パスワードのヒント質問だけで本人確認を完結させる" },
    ],
    brief: "近年のガイドラインは強制的な定期変更よりも多要素認証を重視する方向にシフトしています。",
    interview:
      "頻繁な変更は使い回しや単純化を招くため、長いパスフレーズと多要素認証(MFA)の組み合わせが推奨されています。",
    relevance: "認証周りの設計や社内ポリシー策定で根拠を説明できることが求められます。",
    next: "多要素認証の具体的な方式を見ていきましょう。",
    deeper: [
      "NIST SP 800-63Bなどのガイドラインが定期変更の強制を非推奨としています。",
      "MFAはパスワード漏洩時の被害を大きく抑える効果があります。",
    ],
  },
  {
    id: "l2-security-mfa-methods",
    level: 2,
    domain: "security",
    tags: ["mfa"],
    prompt: "面接官: 多要素認証(MFA)の『要素』として正しい分類はどれですか?",
    correct: {
      id: "correct",
      text: "知識(パスワード)、所持(スマホ・トークン)、生体(指紋など)の組み合わせ",
    },
    distractors: [
      { id: "d1", text: "ユーザー名、メールアドレス、電話番号の組み合わせ" },
      { id: "d2", text: "IPアドレス、ブラウザ、OSの組み合わせ" },
      { id: "d3", text: "パスワードを3回入力させること" },
      { id: "d4", text: "セッションIDとクッキーの組み合わせ" },
      { id: "d5", text: "ログイン試行回数とロック時間の組み合わせ" },
    ],
    brief: "MFAは異なる種類の認証要素を組み合わせることで安全性を高めます。",
    interview:
      "同じ種類の情報を2つ使ってもMFAとは呼ばず、知識・所持・生体など異なるカテゴリを組み合わせることが重要です。",
    relevance: "認証設計のレビューで『それは本当に多要素か』を問われる場面があります。",
    next: "所持要素であるTOTPの仕組みを見ていきましょう。",
    deeper: [
      "TOTP(ワンタイムパスワード)は時刻と秘密鍵から生成される所持要素の一種です。",
      "SMS認証は利便性が高い一方でSIMスワップ攻撃のリスクがあります。",
    ],
  },
  {
    id: "l3-security-clickjacking",
    level: 3,
    domain: "security",
    tags: ["clickjacking"],
    prompt: "面接官: クリックジャッキング攻撃とその基本的な対策を説明してください。",
    correct: {
      id: "correct",
      text: "透明なiframeで正規ページを重ねてクリックを騙す攻撃で、X-Frame-OptionsやCSPのframe-ancestorsで防ぐ",
    },
    distractors: [
      { id: "d1", text: "URLのタイポドメインに誘導してフィッシングする攻撃で、DNSSECで防ぐ" },
      { id: "d2", text: "SQL文にコードを埋め込む攻撃で、プレースホルダで防ぐ" },
      { id: "d3", text: "セッションIDを推測する攻撃で、長いランダム値で防ぐ" },
      { id: "d4", text: "大量アクセスでサーバーを落とす攻撃で、レートリミットで防ぐ" },
      { id: "d5", text: "Cookieを盗聴する攻撃で、HTTPS化のみで防ぐ" },
    ],
    brief: "クリックジャッキングはUI偽装によってユーザーに意図しない操作をさせる攻撃です。",
    interview:
      "攻撃者は透明なiframeで正規サイトのボタンを重ね、別の見た目のボタンをクリックさせることで意図しない操作を実行させます。X-Frame-OptionsヘッダーやCSPのframe-ancestorsディレクティブでiframe埋め込みを制限するのが基本対策です。",
    relevance: "決済ボタンや設定変更ボタンを持つ画面のセキュリティレビューで頻出します。",
    next: "CSP全体の設計思想を見ていきましょう。",
    deeper: [
      "SameSite Cookieだけではクリックジャッキングは防げず、フレーム制御が必要です。",
      "フレームバスティングJSは回避策があるため、ヘッダーによる制御が推奨されます。",
    ],
  },
  {
    id: "l4-security-csp",
    level: 4,
    domain: "security",
    tags: ["csp"],
    prompt: "面接官: Content Security Policy(CSP)はどのようにXSSの被害を軽減しますか?",
    correct: {
      id: "correct",
      text: "スクリプトの読み込み元やインライン実行を許可リストで制限し、悪意あるスクリプトの実行を防ぐ",
    },
    distractors: [
      { id: "d1", text: "全てのCookieに自動でSecure属性を付与する" },
      { id: "d2", text: "SQL文の特殊文字を自動でエスケープする" },
      { id: "d3", text: "通信内容を自動的に暗号化する" },
      { id: "d4", text: "パスワードの強度を自動でチェックする" },
      { id: "d5", text: "セッションIDを一定時間ごとに再発行する" },
    ],
    brief: "CSPはブラウザに対しリソースの読み込み元を指示するHTTPヘッダーです。",
    interview:
      "XSSはHTMLエスケープなどの入力対策をすり抜けることがあるため、CSPで許可されたドメイン以外のスクリプトやインラインスクリプトの実行をブロックする多層防御として機能します。",
    relevance: "フロントエンドのセキュリティヘッダー設計でXSS対策の仕上げとして問われます。",
    next: "nonceやhashを使った厳格なCSP運用を見ていきましょう。",
    deeper: [
      "unsafe-inlineを許可すると防御効果が大きく下がるため、nonceやhashの利用が推奨されます。",
      "report-uriやreport-toディレクティブで違反を検知し運用改善に活かせます。",
    ],
  },
  {
    id: "l5-security-cors-misconfig",
    level: 5,
    domain: "security",
    tags: ["cors"],
    prompt: "面接官: CORS設定の誤りが招く典型的なセキュリティリスクを説明してください。",
    correct: {
      id: "correct",
      text: "リクエストのOriginを検証せずAccess-Control-Allow-Originへ反映し、Allow-Credentialsも有効にすると、任意サイトから認証済みレスポンスを読み取られる",
    },
    distractors: [
      {
        id: "d1",
        text: "ワイルドカード指定でもAllow-Credentialsを有効にすれば、ブラウザが安全な送信元だけを自動判定して認証済みレスポンスを渡す",
      },
      {
        id: "d2",
        text: "許可オリジンをリクエストのOriginからそのまま反映しても、Originヘッダーをブラウザが生成するため任意サイトには悪用されない",
      },
      {
        id: "d3",
        text: "CORSはクロスオリジンのリクエスト送信自体を止める仕組みなので、CSRFトークンやSameSite属性の代わりとして利用できる",
      },
      {
        id: "d4",
        text: "プリフライトに成功した通信はサーバー側でも安全性を確認済みなので、その後の認証や認可チェックを省略しても問題ない",
      },
      {
        id: "d5",
        text: "Access-Control-Allow-Originを自社ドメインに限定すれば、同じオリジン内で発生したXSSによる情報窃取も防止できる",
      },
    ],
    brief:
      "CORSはブラウザが実装するオリジン間リクエスト制御の仕組みで、設定ミスが情報漏洩に直結します。",
    interview:
      "OriginをリクエストヘッダーからそのままAllow-Originに反映しつつAllow-Credentials: trueを付けてしまうと、悪意あるサイトが被害者のCookieを使ったリクエストを送り、レスポンスを読み取れてしまいます。オリジンは許可リストで厳密に検証する必要があります。",
    relevance: "APIサーバーの認証まわりの設計レビューで頻繁に指摘される観点です。",
    next: "Same-Origin Policyとpreflightリクエストの仕組みを見ていきましょう。",
    deeper: [
      "preflightリクエスト(OPTIONS)はブラウザが本リクエスト前に許可を確認する仕組みです。",
      "credentials付きリクエストではワイルドカードOriginは仕様上許可されません。",
    ],
  },
  {
    id: "l6-security-supply-chain",
    level: 6,
    domain: "security",
    tags: ["supply-chain", "sbom"],
    prompt: "面接官: ソフトウェアサプライチェーン攻撃のリスクとSBOMの役割を説明してください。",
    correct: {
      id: "correct",
      text: "依存パッケージやビルドツールの改ざんを通じた攻撃であり、SBOMは構成要素を可視化し脆弱性の影響範囲を素早く特定するのに役立つ",
    },
    distractors: [
      { id: "d1", text: "サーバーへの物理的な侵入を防ぐための入退室管理台帳である" },
      { id: "d2", text: "ネットワーク帯域を可視化しDDoS対策に使う設計図である" },
      { id: "d3", text: "コードレビューの承認履歴を残すだけの仕組みである" },
      { id: "d4", text: "本番環境のみに存在するログファイルの一覧である" },
      { id: "d5", text: "パスワードの使い回しを検知するためのハッシュ台帳である" },
    ],
    brief:
      "サプライチェーン攻撃は自組織ではなく依存先や配布経路を狙う攻撃で、影響範囲が広くなりやすいです。",
    interview:
      "攻撃者は人気パッケージのメンテナ権限を乗っ取ったりビルド環境に侵入したりして悪意あるコードを混入させます。SBOM(Software Bill of Materials)は使用しているライブラリとそのバージョンを一覧化したもので、新たな脆弱性が発表された際に影響範囲を即座に特定できます。",
    relevance: "OSS依存が多い現代のシステムでは経営層からも問われる重要なリスク管理領域です。",
    next: "依存パッケージの脆弱性を継続的にスキャンする仕組みを見ていきましょう。",
    deeper: [
      "npm auditやDependabotのようなツールは既知の脆弱性をSBOM相当の情報と突き合わせて検出します。",
      "ビルドの再現性(reproducible build)や署名検証も改ざん検知の一助になります。",
    ],
  },
  {
    id: "l6-security-timing-attack",
    level: 6,
    domain: "security",
    tags: ["timing-attack", "side-channel"],
    prompt: "面接官: 文字列比較におけるタイミング攻撃とはどのような脆弱性ですか?",
    correct: {
      id: "correct",
      text: "比較処理の時間差から秘密情報を推測する攻撃で、定数時間比較を使うことで対策する",
    },
    distractors: [
      { id: "d1", text: "サーバーの応答が遅いことをユーザーに通知する仕組み" },
      { id: "d2", text: "一定時間ごとにセッションを強制的にタイムアウトさせる仕組み" },
      { id: "d3", text: "リクエストのタイムスタンプを改ざんしてキャッシュを汚染する攻撃" },
      { id: "d4", text: "サーバー間の時刻同期のずれを利用してログを改ざんする攻撃" },
      { id: "d5", text: "処理速度を落とすことでブルートフォース攻撃を難しくする防御手法" },
    ],
    brief:
      "タイミング攻撃はサイドチャネル攻撃の一種で、処理時間という副次情報から秘密を推測します。",
    interview:
      "通常の文字列比較は不一致箇所が見つかった時点で処理を打ち切るため、正解に近いほど比較時間がわずかに長くなります。攻撃者はこの微小な時間差を統計的に観測し、APIキーやトークンを1文字ずつ推測できてしまいます。対策として、比較にかかる時間が入力内容によらず一定になる定数時間比較関数を用います。",
    relevance: "認証トークンやHMAC検証の実装レビューで見落とされがちな観点として問われます。",
    next: "他のサイドチャネル攻撃であるキャッシュタイミング攻撃を見ていきましょう。",
    deeper: [
      "多くの言語には crypto.timingSafeEqual のような定数時間比較APIが用意されています。",
      "サイドチャネルには処理時間の他に消費電力や電磁波を利用するものもあります。",
    ],
  },
  {
    id: "l6-security-injection-types",
    level: 6,
    domain: "security",
    tags: ["injection"],
    prompt:
      "面接官: SQLインジェクション以外に、システムが注意すべきインジェクション攻撃の種類を1つ挙げてください。",
    correct: {
      id: "correct",
      text: "OSコマンドインジェクション(外部入力をシェルコマンドに渡すことで任意コマンドを実行される攻撃)",
    },
    distractors: [
      { id: "d1", text: "セッションフィクセーション(既知のセッションIDを固定させる攻撃)" },
      { id: "d2", text: "ブルートフォース攻撃(総当たりでパスワードを試す攻撃)" },
      { id: "d3", text: "リプレイ攻撃(過去の正当な通信を再送する攻撃)" },
      { id: "d4", text: "DNSキャッシュポイズニング(DNS応答を偽装する攻撃)" },
      { id: "d5", text: "ソーシャルエンジニアリング(人的な心理的隙を突く攻撃)" },
    ],
    brief:
      "インジェクション系の脆弱性はSQLに限らず、外部入力を解釈・実行する箇所全般に存在し得ます。",
    interview:
      "OSコマンドインジェクションは、ユーザー入力をそのままシェルコマンドの引数に組み込んでしまうことで、攻撃者が「; rm -rf /」のような文字列を注入し任意コマンドを実行できてしまう脆弱性です。他にもLDAPインジェクションやテンプレートインジェクションなど、構造化言語を組み立てる箇所全てが対象になり得ます。",
    relevance: "外部コマンド実行やファイル操作を伴う機能のコードレビューで重要な観点です。",
    next: "サーバーサイドテンプレートインジェクション(SSTI)についても見ていきましょう。",
    deeper: [
      "シェル呼び出しはできる限り避け、配列引数を渡す実行APIを使うことでシェル解釈を回避できます。",
      "SSTIはテンプレートエンジンに入力を直接埋め込むことでサーバー側コード実行につながる危険な派生型です。",
    ],
  },
  {
    id: "l7-security-mtls",
    level: 7,
    domain: "security",
    tags: ["mtls"],
    prompt: "面接官: mTLS(相互TLS認証)が通常のTLSと比べて提供する追加のセキュリティ価値は何ですか?",
    correct: {
      id: "correct",
      text: "サーバーだけでなくクライアント側も証明書で認証することで、サービス間通信のなりすましを双方向で防止できる",
    },
    distractors: [
      { id: "d1", text: "通信の暗号化強度を2倍にすることで盗聴を防ぐ" },
      { id: "d2", text: "パスワード認証を完全に不要にする唯一の手段である" },
      { id: "d3", text: "通信速度を大幅に向上させるための最適化技術である" },
      { id: "d4", text: "DNSの名前解決を暗号化することでキャッシュポイズニングを防ぐ" },
      { id: "d5", text: "ロードバランサーの負荷分散アルゴリズムを改善する技術である" },
    ],
    brief: "mTLSはマイクロサービス間やゼロトラスト環境でよく採用される相互認証の仕組みです。",
    interview:
      "通常のTLSはクライアントがサーバー証明書を検証して正当性を確認しますが、mTLSではサーバーもクライアント証明書を検証します。これによりサービスメッシュ内で『どのサービスが通信してきたか』を暗号学的に確認でき、不正なサービスやなりすましたクライアントからの通信を遮断できます。",
    relevance:
      "マイクロサービス基盤やゼロトラストネットワークの設計面接で問われる発展的トピックです。",
    next: "証明書のローテーションや失効管理の運用課題を見ていきましょう。",
    deeper: [
      "サービスメッシュ(Istioなど)はmTLSの証明書発行・ローテーションを自動化して運用負荷を下げます。",
      "証明書失効リストやOCSPの確認が抜けると、漏洩した証明書が使い続けられるリスクが残ります。",
    ],
  },
  {
    id: "l7-security-sandbox-escape",
    level: 7,
    domain: "security",
    tags: ["sandbox-escape"],
    prompt: "面接官: サンドボックス脱出(サンドボックスエスケープ)とはどのような脅威ですか?",
    correct: {
      id: "correct",
      text: "隔離された実行環境の境界の脆弱性を突いて、ホストシステムやより高い権限のリソースにアクセスする攻撃",
    },
    distractors: [
      { id: "d1", text: "テスト環境から本番環境へ自動的にデプロイされてしまう設定ミス" },
      { id: "d2", text: "ブラウザのタブを閉じずにメモリリークを起こす不具合" },
      { id: "d3", text: "開発者が誤ってステージング用の認証情報を使う人的ミス" },
      { id: "d4", text: "コンテナイメージのビルド時間が想定より長くなる問題" },
      { id: "d5", text: "ユーザーが利用規約に同意せずにサービスを使い続ける状態" },
    ],
    brief:
      "サンドボックスはコンテナやブラウザ、WASMランタイムなどコードを安全に隔離実行するための仕組みです。",
    interview:
      "サンドボックスはカーネルのシステムコールフィルタや権限分離によって隔離を実現しますが、その実装自体にバグがあると、攻撃者は隔離境界を破ってホストのファイルシステムや他のプロセスにアクセスできてしまいます。コンテナのカーネル共有アーキテクチャ上、カーネルの脆弱性が直接サンドボックス脱出に繋がる点が特に警戒されます。",
    relevance:
      "マルチテナント基盤やコード実行サービス(FaaS、CIランナーなど)の設計で重要な脅威モデルです。",
    next: "多層防御としてのgVisorやFirecrackerなど軽量VM分離の仕組みを見ていきましょう。",
    deeper: [
      "gVisorはユーザー空間でシステムコールをエミュレートし、カーネルへの攻撃面を減らすアプローチです。",
      "Firecrackerのような軽量マイクロVMはハードウェア仮想化により、コンテナより強い隔離境界を提供します。",
    ],
  },
];
