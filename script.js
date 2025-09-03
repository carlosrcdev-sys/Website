document.addEventListener('DOMContentLoaded', function() {
    // Diccionario de términos (organizado por primera letra en cada idioma)
    const dictionary = [
        {
            spanish: "Haber",
            spanishDef: "parte del asiento contable que representa ingresos o recursos.",
            english: "Credit",
            englishDef: "part of the accounting entry that represents income or resources.",
            japanese: "貸方（かしかた）",
            japaneseDef: "会計仕訳で収入や資源を表す側.",
            romanji: "kashikata",
            initialLetters: {
                spanish: "H",
                english: "C",
                japanese: "k"
            }
        },
        {
            spanish: "Honorarios",
            spanishDef: "pago por servicios profesionales.",
            english: "Fees",
            englishDef: "payment for professional services.",
            japanese: "報酬（ほうしゅう）",
            japaneseDef: "専門的なサービスに対する支払い.",
            romanji: "hōshū",
            initialLetters: {
                spanish: "H",
                english: "F",
                japanese: "h"
            }
        },
        {
            spanish: "Hipoteca",
            spanishDef: "préstamo garantizado con un bien inmueble.",
            english: "Mortgage",
            englishDef: "a loan secured by real estate.",
            japanese: "抵当（ていとう）",
            japaneseDef: "不動産を担保として提供される貸付金.",
            romanji: "teitō",
            initialLetters: {
                spanish: "H",
                english: "M",
                japanese: "t"
            }
        },
        // Términos con O (español), T (english), の (japanese)
        {
            spanish: "Obligación tributaria",
            spanishDef: "deuda con el Estado por concepto de impuestos.",
            english: "Tax obligation",
            englishDef: "debt owed to the State in respect of taxes.",
            japanese: "納税義務（のうぜいぎむ）",
            japaneseDef: "税金を支払う義務.",
            romanji: "nōzei gimu",
            initialLetters: {
                spanish: "O",
                english: "T",
                japanese: "n"
            }
        },
        {
            spanish: "Obligación fiscal",
            spanishDef: "responsabilidad de cumplir con el pago de impuestos.",
            english: "Tax obligation",
            englishDef: "the responsibility to comply with the payment of taxes.",
            japanese: "税務義務（ぜいむぎむ）",
            japaneseDef: "税金を支払う責任.",
            romanji: "zeimu gimu",
            initialLetters: {
                spanish: "O",
                english: "T",
                japanese: "z"
            }
        },
        {
            spanish: "Obligación financiera",
            spanishDef: "compromiso de pago relacionado con finanzas.",
            english: "Financial obligation",
            englishDef: "commitment to pay related to finance.",
            japanese: "財務義務（ざいむぎむ）",
            japaneseDef: "金融に関連する支払いの責任.",
            romanji: "zaimu gimu",
            initialLetters: {
                spanish: "O",
                english: "F",
                japanese: "z"
            }
        },
        {
            spanish: "Otros activos",
            spanishDef: "bienes que no se clasifican dentro de las categorías principales.",
            english: "Other assets",
            englishDef: "assets that are not classified within the main categories.",
            japanese: "その他の資産（そのたのしさん）",
            japaneseDef: "主要な分類に入らない資産.",
            romanji: "sonota no shisan",
            initialLetters: {
                spanish: "O",
                english: "O",
                japanese: "s"
            }
        },
        {
            spanish: "Otros gastos",
            spanishDef: "costos no recurrentes o no clasificados en cuentas específicas.",
            english: "Other expenses",
            englishDef: "non-recurring costs or costs not classified in specific accounts.",
            japanese: "その他の費用（そのたのひよう）",
            japaneseDef: "定期的でなく特定の科目に分類されない支出.",
            romanji: "sonota no hiyō",
            initialLetters: {
                spanish: "O",
                english: "O",
                japanese: "s"
            }
        },
        // Términos con P (español), P (english), ぶ (japanese)
        {
            spanish: "P.P",
            spanishDef: "Acuerdo para pagar en cuotas o plazos.",
            english: "P.P",
            englishDef: "Agreement to pay in installments or terms.",
            japanese: "分割払い（ぶんかつばらい）",
            japaneseDef: "複数の回に分けて支払う合意.",
            romanji: "bunkatsu barai",
            initialLetters: {
                spanish: "P",
                english: "P",
                japanese: "b"
            }
        },
        {
            spanish: "Pagaré",
            spanishDef: "documento en el que se promete pagar una suma de dinero.",
            english: "Promissory note",
            englishDef: "document in which a promise is made to pay a sum of money.",
            japanese: "約束手形（やくそくてがた）",
            japaneseDef: "一定の金額を将来支払うことを約束する文書.",
            romanji: "yakusoku tegata",
            initialLetters: {
                spanish: "P",
                english: "P",
                japanese: "y"
            }
        },
        {
            spanish: "Pago",
            spanishDef: "entrega de dinero a cambio de bienes o servicios.",
            english: "Payment",
            englishDef: "delivery of money in exchange for goods or services.",
            japanese: "支払い（しはらい）",
            japaneseDef: "商品やサービスの対価として金銭を渡すこと.",
            romanji: "shiharai",
            initialLetters: {
                spanish: "P",
                english: "P",
                japanese: "s"
            }
        },
        {
            spanish: "Pago bancario",
            spanishDef: "transacción realizada a través de una cuenta bancaria.",
            english: "Bank payment",
            englishDef: "transaction made through a bank account.",
            japanese: "銀行振込（ぎんこうふりこみ）",
            japaneseDef: "銀行口座を通じた取引による支払い.",
            romanji: "ginkō furikomi",
            initialLetters: {
                spanish: "P",
                english: "B",
                japanese: "g"
            }
        },
        {
            spanish: "Partes sociales",
            spanishDef: "participaciones en el capital de una sociedad.",
            english: "Shares",
            englishDef: "shares in the capital of a company.",
            japanese: "出資持分（しゅっしもちぶん）",
            japaneseDef: "会社の資本への出資比率.",
            romanji: "shusshi mochibun",
            initialLetters: {
                spanish: "P",
                english: "S",
                japanese: "s"
            }
        },
        {
            spanish: "Pasivo",
            spanishDef: "obligaciones financieras de una empresa.",
            english: "Liabilities",
            englishDef: "financial obligations of a company.",
            japanese: "負債（ふさい）",
            japaneseDef: "企業が支払うべき義務や借金.",
            romanji: "fusai",
            initialLetters: {
                spanish: "P",
                english: "L",
                japanese: "h"
            }
        },
        {
            spanish: "Patrimonio",
            spanishDef: "conjunto de bienes, derechos y obligaciones que posee una empresa.",
            english: "Assets",
            englishDef: "a set of assets, rights, and obligations that a company owns.",
            japanese: "資本（しほん）",
            japaneseDef: "企業が保有する資産と負債の差額.",
            romanji: "shihon",
            initialLetters: {
                spanish: "P",
                english: "A",
                japanese: "s"
            }
        },
        {
            spanish: "PEPS",
            spanishDef: "método contable que valora el inventario: primero en entrar, primero en salir.",
            english: "FIFO",
            englishDef: "accounting method that values inventory: first in, first out.",
            japanese: "先入先出法（さきいれさきだしほう）",
            japaneseDef: "最初に購入した在庫を最初に出庫する会計方法.",
            romanji: "sakiire sakidashi hō",
            initialLetters: {
                spanish: "P",
                english: "F",
                japanese: "s"
            }
        },
        {
            spanish: "Préstamo",
            spanishDef: "entrega de dinero con obligación de devolución bajo condiciones acordadas.",
            english: "Loan",
            englishDef: "delivery of money with the obligation to repay it under agreed conditions.",
            japanese: "融資（ゆうし）",
            japaneseDef: "一定期間後に返済義務のある金銭の貸与.",
            romanji: "yūshi",
            initialLetters: {
                spanish: "P",
                english: "L",
                japanese: "y"
            }
        },
        {
            spanish: "Presupuesto Prima",
            spanishDef: "estimación anticipada de ingresos y gastos, generalmente aplicada a seguros.",
            english: "Premium Budget",
            englishDef: "an advance estimate of income and expenses, generally applied to insurance.",
            japanese: "保険料見積（ほけんりょうみつもり）",
            japaneseDef: "保険契約のために予測される収入と支出の計画.",
            romanji: "hokenryō mitsumori",
            initialLetters: {
                spanish: "P",
                english: "P",
                japanese: "h"
            }
        },
        {
            spanish: "Producto",
            spanishDef: "bien o servicio ofrecido al mercado para satisfacer una necesidad.",
            english: "Product",
            englishDef: "a good or service offered to the market to satisfy a need.",
            japanese: "製品（せいひん）",
            japaneseDef: "市場のニーズを満たすために提供される物やサービス.",
            romanji: "seihin",
            initialLetters: {
                spanish: "P",
                english: "P",
                japanese: "s"
            }
        },
        {
            spanish: "Proveedores",
            spanishDef: "persona o empresas que suministran bienes o servicios a otra empresa.",
            english: "Suppliers",
            englishDef: "persons or companies that supply goods or services to another company.",
            japanese: "供給業者（きょうきゅうぎょうしゃ）",
            japaneseDef: "商品やサービスを他の企業に提供する個人または企業.",
            romanji: "kyōkyū gyōsha",
            initialLetters: {
                spanish: "P",
                english: "S",
                japanese: "k"
            }
        },
        { spanish: "Saldo inicial",
  spanishDef: "El monto con el que se inicia una cuenta contable al comienzo de un período.",
  english: "Beginning balance",
  englishDef: "The amount with which an accounting account begins at the beginning of a period.",
  japanese: "期首残高（きしゅざんだか）",
  japaneseDef: "会計期間の初めにおける口座の残高.",
  romanji: "kishu zandaka",
  initialLetters: { spanish: "S", english: "B", japanese: "k" }
},
{
  spanish: "Saldo final",
  spanishDef: "El monto restante en una cuenta al final de un período contable.",
  english: "Ending balance",
  englishDef: "The amount remaining in an account at the end of an accounting period.",
  japanese: "期末残高（きまつざんだか）",
  japaneseDef: "会計期間の終わり時点での口座の残額.",
  romanji: "kimatsu zandaka",
  initialLetters: { spanish: "S", english: "E", japanese: "k" }
},
{
  spanish: "Segregación de funciones",
  spanishDef: "Principio de control interno que separa responsabilidades para reducir riesgos de error o fraude.",
  english: "Segregation of duties",
  englishDef: "An internal control principle that separates responsibilities to reduce the risk of error or fraud.",
  japanese: "職務分離（しょくむぶんり）",
  japaneseDef: "エラーや不正を防ぐために職務を分ける内部統制原則.",
  romanji: "shokumu bunri",
  initialLetters: { spanish: "S", english: "S", japanese: "s" }
},
{
  spanish: "Subvención estatal",
  spanishDef: "Ayuda financiera proporcionada por el gobierno a una entidad para apoyar actividades específicas.",
  english: "State grant",
  englishDef: "Financial assistance that the government provides to an entity to support specific activities.",
  japanese: "政府補助金（せいふほじょきん）",
  japaneseDef: "政府が特定の活動を支援するために提供する財政的支援.",
  romanji: "seifu hojokin",
  initialLetters: { spanish: "S", english: "S", japanese: "s" }
},
{
  spanish: "Superávit",
  spanishDef: "Exceso de ingresos sobre los gastos en un período determinado.",
  english: "Surplus",
  englishDef: "Excess of income over expenses in a given period.",
  japanese: "黒字（くろじ）",
  japaneseDef: "一定期間における収入が支出を上回る状態.",
  romanji: "kuroji",
  initialLetters: { spanish: "S", english: "S", japanese: "k" }
},
{
  spanish: "Tasa de interés",
  spanishDef: "Porcentaje que se cobra por el uso del dinero prestado.",
  english: "Interest rate",
  englishDef: "Percentage charged for the use of borrowed money.",
  japanese: "金利（きんり）",
  japaneseDef: "借りたお金に対して支払う割合.",
  romanji: "kinri",
  initialLetters: { spanish: "T", english: "I", japanese: "k" }
},
{
  spanish: "Tasa de retorno",
  spanishDef: "Ganancia o pérdida obtenida de una inversión en relación con su costo.",
  english: "Rate of return",
  englishDef: "Gain or loss obtained from an investment with its cost.",
  japanese: "収益率（しゅうえきりつ）",
  japaneseDef: "投資に対して得られる利益または損失の割合.",
  romanji: "shūekiritsu",
  initialLetters: { spanish: "T", english: "R", japanese: "s" }
},
{
  spanish: "Tasa efectiva anual",
  spanishDef: "Tasa de interés real que se gana o paga en un año, considerando la capitalización.",
  english: "Annual Percentage Rate",
  englishDef: "The actual interest rate earned or paid in a year, considering compounding.",
  japanese: "実効年率（じっこうねんりつ）",
  japaneseDef: "複利を考慮した実際に得られる年間の利率.",
  romanji: "jikkō nenritsu",
  initialLetters: { spanish: "T", english: "A", japanese: "j" }
},
{
  spanish: "Transferencias electrónicas",
  spanishDef: "Movimiento de dinero entre cuentas bancarias mediante medios electrónicos.",
  english: "Electronic transfers",
  englishDef: "Movement of money between bank accounts by electronic means.",
  japanese: "電子送金（でんしそうきん）",
  japaneseDef: "電子的手段を用いて銀行口座間で行われる資金の移動.",
  romanji: "denshi sōkin",
  initialLetters: { spanish: "T", english: "E", japanese: "d" }
},
{
  spanish: "Tributación",
  spanishDef: "Proceso mediante el cual el gobierno recauda impuestos.",
  english: "Taxation",
  englishDef: "The process by which the government collects taxes.",
  japanese: "課税（かぜい）",
  japaneseDef: "政府が税金を徴収するための制度や過程.",
  romanji: "kazei",
  initialLetters: { spanish: "T", english: "T", japanese: "k" }
},
{
  spanish: "Negociación",
  spanishDef: "Proceso de discusión para llegar a un acuerdo.",
  english: "Negotiation",
  englishDef: "The process of discussion is used to reach an agreement.",
  japanese: "交渉（こうしょう）",
  japaneseDef: "合意に達するための議論の過程.",
  romanji: "kōshō",
  initialLetters: { spanish: "N", english: "N", japanese: "k" }
},
{
  spanish: "No deducible",
  spanishDef: "Gasto que no puede restarse de la base imponible de impuestos.",
  english: "Non-deductible",
  englishDef: "An expense that cannot be subtracted from the tax base.",
  japanese: "控除不可（こうじょふか）",
  japaneseDef: "課税所得から差し引くことができない費用.",
  romanji: "kōjo fuka",
  initialLetters: { spanish: "N", english: "N", japanese: "k" }
},
{
  spanish: "Nómina",
  spanishDef: "Lista de empleados y el pago que reciben.",
  english: "Payroll",
  englishDef: "A list of employees and the payments they receive.",
  japanese: "給与名簿（きゅうよめいぼ）",
  japaneseDef: "従業員とその支払い額の一覧.",
  romanji: "kyūyo meibo",
  initialLetters: { spanish: "N", english: "P", japanese: "k" }
},
{
  spanish: "NIC",
  spanishDef: "Norma Internacional de Contabilidad (NIC).",
  english: "IAS",
  englishDef: "International Accounting Standard (IAS).",
  japanese: "国際会計基準（こくさいかいけいきじゅん）",
  japaneseDef: "会計取引の統一基準.",
  romanji: "kokusai kaikei kijun",
  initialLetters: { spanish: "N", english: "I", japanese: "k" }
},
{
  spanish: "NIFF",
  spanishDef: "Normas Internacionales de Información Financiera.",
  english: "IFRS",
  englishDef: "International Financial Reporting Standards.",
  japanese: "国際財務報告基準（こくさいざいむほうこくきじゅん）",
  japaneseDef: "財務情報の国際的な報告基準.",
  romanji: "kokusai zaimu hōkoku kijun",
  initialLetters: { spanish: "N", english: "I", japanese: "k" }
},{
  spanish: "Activo",
  spanishDef: "Recursos que posee una empresa.",
  english: "Assets",
  englishDef: "Resources owned by a company that provide economic value.",
  japanese: "資産（しさん）",
  japaneseDef: "企業が所有し経済的価値を提供する資源.",
  romanji: "shisan",
  initialLetters: { spanish: "A", english: "A", japanese: "s" }
},
{
  spanish: "Acciones comunes",
  spanishDef: "Títulos que representan la propiedad de una empresa.",
  english: "Common shares",
  englishDef: "Equity securities that represent ownership in a company.",
  japanese: "普通株式（ふつうかぶしき）",
  japaneseDef: "企業の所有権を表す証券.",
  romanji: "futsū kabushiki",
  initialLetters: { spanish: "A", english: "C", japanese: "f" }
},
{
  spanish: "Activo corriente",
  spanishDef: "Bienes y derecho que se espera convertir en efectivo a corto plazo.",
  english: "Current assets",
  englishDef: "Assets expected to be converted into cash in a short period.",
  japanese: "流動資産（りゅうどうしさん）",
  japaneseDef: "短期間で現金に変換されることが期待される財産および権利.",
  romanji: "ryūdō shisan",
  initialLetters: { spanish: "A", english: "C", japanese: "r" }
},
{
  spanish: "Activo fijo",
  spanishDef: "Bienes tangibles de una empresa.",
  english: "Fixed assets",
  englishDef: "Tangible assets used in operations that are not easily sold.",
  japanese: "固定資産（こていしさん）",
  japaneseDef: "企業の有形財産.",
  romanji: "kotei shisan",
  initialLetters: { spanish: "A", english: "F", japanese: "k" }
},
{
  spanish: "Año fiscal",
  spanishDef: "Periodo de 12 meses que una empresa usa para fines contables.",
  english: "Fiscal year",
  englishDef: "12 months used for accounting and tax purposes.",
  japanese: "会計年度（かいけいねんど）",
  japaneseDef: "企業が会計目的で使用する12ヶ月間の期間.",
  romanji: "kaikei nendo",
  initialLetters: { spanish: "A", english: "F", japanese: "k" }
},
{
  spanish: "Autoliquidación",
  spanishDef: "Cálculo y declaración de impuestos.",
  english: "Self-assessment",
  englishDef: "Tax return process where the taxpayer calculates and reports.",
  japanese: "自己申告（じこ しんこく）",
  japaneseDef: "税金の計算と申告.",
  romanji: "jiko shinkoku",
  initialLetters: { spanish: "A", english: "S", japanese: "j" }
},
{
  spanish: "Acciones",
  spanishDef: "Partes en las que se divide el capital social de una empresa.",
  english: "Share",
  englishDef: "A unit of ownership in a company.",
  japanese: "株式（かぶしき）",
  japaneseDef: "企業の資本を分割する部分.",
  romanji: "kabushiki",
  initialLetters: { spanish: "A", english: "S", japanese: "k" }
},
{
  spanish: "Acreedor",
  spanishDef: "Persona o entidad a la que se le debe dinero.",
  english: "Creditor",
  englishDef: "A person or entity to whom money is owed.",
  japanese: "債権者（さいけんしゃ）",
  japaneseDef: "お金を借りている個人または団体.",
  romanji: "saikensha",
  initialLetters: { spanish: "A", english: "C", japanese: "s" }
},
{
  spanish: "Acciones preferentes",
  spanishDef: "Acciones que otorgan prioridad en el pago de dividendos.",
  english: "Preferred shares",
  englishDef: "Shares that give priority in dividend payments and liquidation.",
  japanese: "優先株式（ゆうせんかぶしき）",
  japaneseDef: "配当の支払いにおいて優先権を与える株式.",
  romanji: "yūsen kabushiki",
  initialLetters: { spanish: "A", english: "P", japanese: "y" }
},
{
  spanish: "Activo depreciable",
  spanishDef: "Bien que pierde valor con el tiempo debido al uso o desgaste.",
  english: "Depreciable Assets",
  englishDef: "Assets that lose value over time due to use or wear.",
  japanese: "減価償却資産（げんかしょうきゃくしさん）",
  japaneseDef: "使用や摩耗によって時間とともに価値が減少する財産.",
  romanji: "genka shōkyaku shisan",
  initialLetters: { spanish: "A", english: "D", japanese: "g" }
},
{
  spanish: "Activo no corriente",
  spanishDef: "Bienes que no se convierten en efectivo a corto plazo.",
  english: "Non-current assets",
  englishDef: "Assets not expected to be converted into cash in the short term.",
  japanese: "非流動資産（ひりゅうどうしさん）",
  japaneseDef: "短期間で現金に変換されない財産.",
  romanji: "hiryūdō shisan",
  initialLetters: { spanish: "A", english: "N", japanese: "h" }
},
{
  spanish: "Anticipo",
  spanishDef: "Pago adelantado por un bien.",
  english: "Advance",
  englishDef: "A payment made ahead of receiving goods or services.",
  japanese: "前払金（まえばらいきん）",
  japaneseDef: "商品のために前もって支払う金額.",
  romanji: "maebarai kin",
  initialLetters: { spanish: "A", english: "A", japanese: "m" }
},
{
  spanish: "Activo diferido",
  spanishDef: "Gastos pagados por anticipado que se reconocen como activos.",
  english: "Deferred assets",
  englishDef: "Prepaid expenses are recorded as assets until they are used.",
  japanese: "繰延資産（くりのべしさん）",
  japaneseDef: "前払いで支払った費用が資産として認識されるもの.",
  romanji: "kurinobe shisan",
  initialLetters: { spanish: "A", english: "D", japanese: "k" }
},
{
  spanish: "Ad-valorem",
  spanishDef: "Impuesto calculado como un porcentaje del valor del bien.",
  english: "Ad valorem",
  englishDef: "A tax based on the assessed value of an item.",
  japanese: "アド・バロレム税（あど・ばろれむぜい）",
  japaneseDef: "財産の価値に対する割合で計算される税金.",
  romanji: "ado-baroremuzei",
  initialLetters: { spanish: "A", english: "A", japanese: "a" }
},
{
  spanish: "Auditoría",
  spanishDef: "Revisión sistemática de las cuentas de la empresa para verificarla.",
  english: "Audit",
  englishDef: "A systematic review of a company's accounts to verify accuracy.",
  japanese: "監査（かんさ）",
  japaneseDef: "企業の帳簿を確認するための体系的なレビュー.",
  romanji: "kansa",
  initialLetters: { spanish: "A", english: "A", japanese: "k" }
},
{
  spanish: "Abono",
  spanishDef: "Registro contable que reduce una cuenta o servicio de activo.",
  english: "Credit",
  englishDef: "Accounting record that reduces an account or asset balance.",
  japanese: "仕訳（しわけ）",
  japaneseDef: "資産またはサービスの口座を減少させる会計記録.",
  romanji: "shiwake",
  initialLetters: { spanish: "A", english: "C", japanese: "s" }
},
{
  spanish: "Asiento contable",
  spanishDef: "Registro de una transacción financiera en libros contables.",
  english: "Accounting entry",
  englishDef: "A record of a financial transaction in accounting books.",
  japanese: "会計仕訳（かいけいしわけ）",
  japaneseDef: "会計帳簿に記載された金融取引の記録.",
  romanji: "kaikei shiwake",
  initialLetters: { spanish: "A", english: "A", japanese: "k" }
},
{
  spanish: "Ampliación de capital",
  spanishDef: "Incremento del capital social de una empresa.",
  english: "Capital increase",
  englishDef: "An increase in a company's share capital.",
  japanese: "資本増加（しほん ぞうか）",
  japaneseDef: "企業の株式資本を増やすこと.",
  romanji: "shihon zōka",
  initialLetters: { spanish: "A", english: "C", japanese: "s" }
},
{
  spanish: "Apertura contable",
  spanishDef: "Inicio del registro contable de un nuevo ejercicio económico.",
  english: "Accounting opening",
  englishDef: "Start of accounting records for a new financial year.",
  japanese: "会計年度開始（かいけいねんど かいし）",
  japaneseDef: "新しい会計年度の記録開始.",
  romanji: "kaikei nendo kaishi",
  initialLetters: { spanish: "A", english: "A", japanese: "k" }
},
{
  spanish: "Agencia tributaria",
  spanishDef: "Entidad encargada de la gestión y recaudación de impuestos.",
  english: "Tax agency",
  englishDef: "Entity in charge of tax management and collection.",
  japanese: "税務署（ぜいむしょ）",
  japaneseDef: "税金の管理と徴収を担当する機関.",
  romanji: "zeimusho",
  initialLetters: { spanish: "A", english: "T", japanese: "z" }
},
  {
    spanish: "Activo intangible",
    spanishDef: "Bienes no físicos con valor económico como marcas o patentes.",
    english: "Intangible assets",
    englishDef: "Non-physical assets with economic value, like trademarks, patents.",
    japanese: "無形資産（むけいしさん）",
    japaneseDef: "ブランドや特許などの経済的価値を持つ物理的でない財産.",
    romanji: "mukei shisan",
    initialLetters: { spanish: "A", english: "I", japanese: "m" }
  },
  {
    spanish: "Adelanto",
    spanishDef: "Entrega de dinero antes de recibir el producto o servicio.",
    english: "Advance",
    englishDef: "Payment is given before receiving the product or service.",
    japanese: "前払金（まえばらいきん）",
    japaneseDef: "商品やサービスを受け取る前に支払うお金.",
    romanji: "maebarai kin",
    initialLetters: { spanish: "A", english: "A", japanese: "m" }
  },
  {
    spanish: "Acta",
    spanishDef: "Documento oficial que registra decisiones o hechos importantes.",
    english: "Record",
    englishDef: "The official document that records decisions or important events.",
    japanese: "議事録（ぎじろく）",
    japaneseDef: "重要な決定や出来事を記録する公式な文書.",
    romanji: "gijiroku",
    initialLetters: { spanish: "A", english: "R", japanese: "g" }
  },
  {
    spanish: "Activo tangible",
    spanishDef: "Bienes físicos que posee una empresa.",
    english: "Tangible assets",
    englishDef: "Physical assets owned by a company.",
    japanese: "有形資産（ゆうけいしさん）",
    japaneseDef: "企業が所有する物理的な財産.",
    romanji: "yūkei shisan",
    initialLetters: { spanish: "A", english: "T", japanese: "y" }
  },
  {
    spanish: "Valor contable",
    spanishDef: "Valor de un activo según los registros contables, restando la depreciación.",
    english: "Book value",
    englishDef: "Value of an asset according to accounting records, less depreciation.",
    japanese: "帳簿価額（ちょうぼかがく）",
    japaneseDef: "減価償却を差し引いた帳簿上の資産価値.",
    romanji: "chōbo kagaku",
    initialLetters: { spanish: "V", english: "B", japanese: "c" }
  },
  {
    spanish: "Valor futuro",
    spanishDef: "Monto estimado que tendrá una inversión en el futuro considerando una tasa de interés compuesta.",
    english: "Future value",
    englishDef: "Estimated amount that an investment will have in the future, considering a compound interest rate.",
    japanese: "将来価値（しょうらいかち）",
    japaneseDef: "複利に基づいて将来における投資の予想金額.",
    romanji: "shōrai kachi",
    initialLetters: { spanish: "V", english: "F", japanese: "s" }
  },
  {
    spanish: "Valor nominal",
    spanishDef: "Valor declarado de un activo financiero, como un bono o acción, que aparece en el documento.",
    english: "Face value",
    englishDef: "The stated value of a financial asset, such as a bond or stock, as stated on the document.",
    japanese: "額面価値（がくめんかち）",
    japaneseDef: "債券や株式に記載された公式の価値.",
    romanji: "gakumen kachi",
    initialLetters: { spanish: "V", english: "F", japanese: "g" }
  },
  {
    spanish: "Valor presente",
    spanishDef: "Valor actual de una cantidad futura de dinero, descontado a una tasa de interés.",
    english: "Present value",
    englishDef: "Current value of a future amount of money, discounted at an interest rate.",
    japanese: "現在価値（げんざいかち）",
    japaneseDef: "将来の金額を割引して算出した現在の価値.",
    romanji: "genzai kachi",
    initialLetters: { spanish: "V", english: "P", japanese: "g" }
  },
  {
    spanish: "Valor de activos",
    spanishDef: "Proceso de determinar el valor justo de mercado de los bienes que posee una empresa.",
    english: "Asset valuation",
    englishDef: "The process of determining the fair market value of the assets owned by a company.",
    japanese: "資産評価（しさんひょうか）",
    japaneseDef: "企業が保有する資産の市場価値を決定するプロセス.",
    romanji: "shisan hyōka",
    initialLetters: { spanish: "V", english: "A", japanese: "s" }
  },
  {
    spanish: "Volatilidad financiera",
    spanishDef: "Grado de variación de los precios de los activos financieros en el tiempo.",
    english: "Financial volatility",
    englishDef: "Degree of variation in the prices of financial assets over time.",
    japanese: "金融の変動性（きんゆうのへんどうせい）",
    japaneseDef: "金融資産の価格が時間と共にどれだけ変化するかの程度.",
    romanji: "kin’yū no hendōsei",
    initialLetters: { spanish: "V", english: "F", japanese: "k" }
  },
  {
    spanish: "Zona económica",
    spanishDef: "Área geográfica donde se aplican políticas económicas especiales para fomentar el desarrollo.",
    english: "Economic zone",
    englishDef: "A geographic area where special economic policies are applied to promote development.",
    japanese: "経済特区（けいざいとっく）",
    japaneseDef: "経済発展を促すための特別な政策が適用される地域.",
    romanji: "keizai tokku",
    initialLetters: { spanish: "Z", english: "E", japanese: "k" }
  },
  {
    spanish: "Zona franca",
    spanishDef: "Área donde los productos pueden importarse, almacenarse y exportarse sin intervención aduanera regular.",
    english: "Free zone",
    englishDef: "An area where products can be imported, stored, and exported without regular customs intervention.",
    japanese: "自由貿易地域（じゆうぼうえきちいき）",
    japaneseDef: "関税なしで物品の輸入・保管・再輸出が可能な地域.",
    romanji: "jiyū bōeki chiiki",
    initialLetters: { spanish: "Z", english: "F", japanese: "j" }
  },
  {
    spanish: "Zona tributaria",
    spanishDef: "Región con un régimen fiscal particular, que puede incluir tasas impositivas específicas o beneficios fiscales.",
    english: "Tax zone",
    englishDef: "Region with a particular tax regime, which may include specific tax rates or tax benefits.",
    japanese: "税制区域（ぜいせいくいき）",
    japaneseDef: "特定の税率や税優遇が適用される地域.",
    romanji: "zeisei kuiki",
    initialLetters: { spanish: "Z", english: "T", japanese: "z" }  
  
  },
     // Términos con D
{ spanish: "Debe",
  spanishDef: "parte izquierda de una cuenta contable que registra aumentos en activos o gastos.",
  english: "Debit",
  englishDef: "the left side of an account recording increases in assets or expenses.",
  japanese: "借方（かりかた）",
  japaneseDef: "資産や費用の増加を記録する勘定の左側.",
  romanji: "karikata",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "k" }
},
{ spanish: "Debitar",
  spanishDef: "registrar una cantidad en el debe de una cuenta contable.",
  english: "To debit",
  englishDef: "to record an amount on the debit side of an account.",
  japanese: "借方記入する（かりかたきにゅうする）",
  japaneseDef: "勘定の借方に金額を記録すること.",
  romanji: "karikata kinyū suru",
  initialLetters: {
    spanish: "D",
    english: "T",
    japanese: "k" }
},
{ spanish: "Debitar una cuenta",
  spanishDef: "cargar una cantidad específica en una cuenta determinada.",
  english: "To debit an account",
  englishDef: "to charge a specific amount to an account.",
  japanese: "勘定に借方記入する（かんじょう に かりかたきにゅうする）",
  japaneseDef: "特定の勘定に特定の金額を記録すること.",
  romanji: "kanjō ni karikata kinyū suru",
  initialLetters: {
    spanish: "D",
    english: "T",
    japanese: "k" }
},
{ spanish: "Débito",
  spanishDef: "movimiento que disminuye el saldo de una cuenta.",
  english: "Debit",
  englishDef: "an entry that reduces the balance of an account.",
  japanese: "借方取引（かりかたとりひき）",
  japaneseDef: "勘定残高を減らす取引.",
  romanji: "karikata torihiki",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "k" }
},
{ spanish: "Declaración",
  spanishDef: "documento formal que informa sobre datos financieros o fiscales",
  english: "Statement",
  englishDef: "a formal document reporting financial or tax data.",
  japanese: "申告書（しんこくしょ）",
  japaneseDef: "財務や税に関する情報を報告する正式な文書.",
  romanji: "shinkokusho",
  initialLetters: {
    spanish: "D",
    english: "S",
    japanese: "s" }
},
{ spanish: "Deducible",
  spanishDef: "parte de un gasto que puede restarse de los ingresos antes de calcular impuestos.",
  english: "Deductible",
  englishDef: "the expense amount that can be subtracted from taxable income.",
  japanese: "控除可能（こうじょかのう）",
  japaneseDef: "税額計算前に収入から差し引ける費用の部分.",
  romanji: "kōjo kanō",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "k" }
},
{ spanish: "Déficit",
  spanishDef: "situación donde los gastos superan a los ingresos",
  english: "Deficit",
  englishDef: "a financial situation where expenses exceed income.",
  japanese: "赤字（あかじ）",
  japaneseDef: "支出が収入を上回る状態.",
  romanji: "akaji",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "a" }
},

{ spanish: "Demora",
  spanishDef: "retraso en el cumplimiento de una obligación financiera.",
  english: "Delay",
  englishDef: "Late fulfillment of a financial obligation.",
  japanese: "遅延（ちえん）",
  japaneseDef: "財務的義務の履行の遅れ.",
  romanji: "chien",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "c" }
},
{ spanish: "Depósito",
  spanishDef: "dinero entregado a una entidad financiera para su custodia.",
  english: "Deposit",
  englishDef: "money placed in a financial institution for safekeeping.",
  japanese: "預金（よきん）",
  japaneseDef: "金融機関に保管のために預けた金銭.",
  romanji: "yokin",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "y" }
},
{ spanish: "Depreciar",
  spanishDef: "reducir el valor contable de un activo con el tiempo.",
  english: "Depreciate",
  englishDef: "to reduce the book value of an asset over time.",
  japanese: "減価する（げんかする）",
  japaneseDef: "時間や使用によって資産の価値を下げること.",
  romanji: "genka suru",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "g" }
},
{ spanish: "Depreciación",
  spanishDef: "pérdida de valor de un bien por uso o paso del tiempo.",
  english: "Depreciation",
  englishDef: "loss of asset value due to use or time.",
  japanese: "減価償却（げんかしょうきゃく）",
  japaneseDef: "使用や経過時間による資産の価値の減少.",
  romanji: "genka shōkyaku",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "g" }
},
{ spanish: "Descuento",
  spanishDef: "reducción aplicada sobre el precio de un bien o servicio.",
  english: "Discount",
  englishDef: "reduction applied to the price of goods or services.",
  japanese: "割引（わりびき）",
  japaneseDef: "商品やサービスの価格に適用される減額.",
  romanji: "waribiki",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "w" }
},
{ spanish: "Desfase",
  spanishDef: "desajuste o falta de correspondencia entre datos o tiempos.",
  english: "Mismatch",
  englishDef: "lack of alignment or correspondence in data or timing.",
  japanese: "ずれ",
  japaneseDef: "データや時間の不一致や調整不足.",
  romanji: "zure",
  initialLetters: {
    spanish: "D",
    english: "M",
    japanese: "z" }
},
{ spanish: "Desgravación",
  spanishDef: "reducción legal en la carga impositiva.",
  english: "Tax relief",
  englishDef: "legal reduction in tax burden.",
  japanese: "減税措置（げんぜいそち）",
  japaneseDef: "法的に認められた課税額の減少.",
  romanji: "genzei sochi",
  initialLetters: {
    spanish: "D",
    english: "T",
    japanese: "g" }
},
{ spanish: "Deterioro",
  spanishDef: "pérdida del valor de un activo por daños o condiciones del mercado.",
  english: "Impairment",
  englishDef: "decrease in the value of an asset due to damage or conditions.",
  japanese: "劣化（れっか）",
  japaneseDef: "損傷や市場状況による資産価値の喪失.",
  romanji: "rekka",
  initialLetters: {
    spanish: "D",
    english: "I",
    japanese: "r" }
},
{ spanish: "Deuda",
  spanishDef: "obligación de pago contraída con otra parte.",
  english: "Debt",
  englishDef: "obligation to pay money owed to another party.",
  japanese: "負債（ふさい）",
  japaneseDef: "他者に対する支払い義務.",
  romanji: "fusai",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "f" }
},
{ spanish: "Deudor",
  spanishDef: "persona o entidad que debe dinero a otra.",
  english: "Debtor",
  englishDef: "an individual or entity that owes money to another.",
  japanese: "債務者（さいむしゃ）",
  japaneseDef: "お金を借りている個人または法人.",
  romanji: "saimusha",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "s" }
},
{ spanish: "Devengo",
  spanishDef: "reconocimiento de un ingreso o gasto en el momento en que ocurre, no cuando se cobra o paga.",
  english: "Accrual",
  englishDef: "recognition of income or expenses when they occur, not when paid.",
  japanese: "発生主義（はっせいしゅぎ）",
  japaneseDef: "収支が発生した時点で記録される会計原則.",
  romanji: "hassei shugi",
  initialLetters: {
    spanish: "D",
    english: "A",
    japanese: "h" }
},
{ spanish: "Devolución",
  spanishDef: "retorno de dinero o bienes a su origen.",
  english: "Devolution",
  englishDef: "return of money or goods to their source.",
  japanese: "返却（へんきゃく）",
  japaneseDef: "金銭または商品の元の所有者への返還.",
  romanji: "henkyaku",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "h" }
},
{ spanish: "Diferencia de conversión",
  spanishDef: "variación en valores por cambios de tipo de cambio al convertir divisas.",
  english: "Exchange difference",
  englishDef: "variation in values due to currency exchange rate changes.",
  japanese: "換算差額（かんさんさがく）",
  japaneseDef: "通貨の変動による価値の差.",
  romanji: "kansan sagaku",
  initialLetters: {
    spanish: "D",
    english: "E",
    japanese: "k" }
},
{ spanish: "Diferido",
  spanishDef: "que se pospone o se registra para un periodo posterior.",
  english: "Deferred",
  englishDef: "postponed or recorded for a future period.",
  japanese: "繰延べ（くりのべ）",
  japaneseDef: "後の会計期間に認識される費用や収益.",
  romanji: "kurinobe",
  initialLetters: {
    spanish: "D",
    english: "D",
    japanese: "k" }
},
{ spanish: "Dinero",
  spanishDef: "medio de cambio aceptado para transacciones económicas.",
  english: "Money",
  englishDef: "a medium of exchange used in economic transactions.",
  japanese: "お金（おかね）",
  japaneseDef: "経済取引で使われる交換手段.",
  romanji: "okane",
  initialLetters: {
    spanish: "D",
    english: "M",
    japanese: "o" }
},
{ spanish: "Dinero al contado",
  spanishDef: "pago inmediato con dinero físico o disponible.",
  english: "Cash",
  englishDef: "immediate payment using available money.",
  japanese: "現金払い（げんきんばらい）",
  japaneseDef: "即座に支払われる現金による取引.",
  romanji: "genkin barai",
  initialLetters: {
    spanish: "D",
    english: "C",
    japanese: "g" }
},

// Términos con E
{ spanish: "Economía",
  spanishDef: "ciencia que estudia cómo se administran recursos escasos.",
  english: "Economics",
  englishDef: "the science that studies the management of scarce resources.",
  japanese: "経済学（けいざいがく）",
  japaneseDef: "希少な資源の管理を研究する学問.",
  romanji: "keizaigaku",
  initialLetters: {
    spanish: "E",
    english: "E",
    japanese: "k" }
},
     { spanish: "Caja",
  spanishDef: "Dinero en efectivo disponible para operaciones inmediatas.",
  english: "Cash",
  englishDef: "Cash available for immediate operations.",
  japanese: "現金（げんきん）",
  japaneseDef: "即時の取引に使えるお金.",
  romanji: "genkin",
  initialLetters: {
    spanish: "c",
    english: "c",
    japanese: "g" }
},
{
    spanish: "Cuenta de ahorros",
    spanishDef: "Cuenta bancaria que genera intereses sobre los depósitos.",
    english: "Savings account",
    englishDef: "A bank account that earns interest on deposits.",
    japanese: "普通預金口座（ふつうよきんこうざ）",
    japaneseDef: "預けたお金に利息がつく銀行口座.",
    romanji: "futsū yokin kōza",
    initialLetters: {
      spanish: "C",
      english: "S",
      japanese: "f"
    }
  },
  {
    spanish: "Compra",
    spanishDef: "Adquisición de bienes o servicios a cambio de dinero.",
    english: "Purchase",
    englishDef: "Acquisition of goods or services in exchange for money.",
    japanese: "購入（こうにゅう）",
    japaneseDef: "商品やサービスをお金で得ること.",
    romanji: "kōnyū",
    initialLetters: {
      spanish: "C",
      english: "P",
      japanese: "k"
    }
  },
  {
    spanish: "Capital",
    spanishDef: "Recursos financieros aportados o acumulados por una empresa.",
    english: "Capital",
    englishDef: "Financial resources contributed or accumulated by a company.",
    japanese: "資本（しほん）",
    japaneseDef: "企業が所有または投資された財源.",
    romanji: "shihon",
    initialLetters: {
      spanish: "C",
      english: "C",
      japanese: "s"
    }
  },
  {
    spanish: "Crédito",
    spanishDef: "Suma de dinero prestada que debe devolverse en el futuro.",
    english: "Credit",
    englishDef: "The sum of money lent to be paid back later.",
    japanese: "信用貸付（しんようかしつけ）",
    japaneseDef: "将来返済する前提で借りるお金.",
    romanji: "shinyō kashitsuke",
    initialLetters: {
      spanish: "C",
      english: "C",
      japanese: "s"
    }
  },
  {
    spanish: "Costo de ventas",
    spanishDef: "Valor de los bienes vendidos durante un periodo.",
    english: "Cost of sales",
    englishDef: "Value of goods sold during a period.",
    japanese: "売上原価（うりあげげんか）",
    japaneseDef: "一定期間に販売された商品の価値.",
    romanji: "uriage genka",
    initialLetters: {
      spanish: "C",
      english: "C",
      japanese: "u"
    }
  },
  {
    spanish: "Costo de producción",
    spanishDef: "Gasto total para fabricar un producto.",
    english: "Cost of production",
    englishDef: "The total expense to manufacture a product.",
    japanese: "製造原価（せいぞうげんか）",
    japaneseDef: "製品を作るためにかかる総費用.",
    romanji: "seizō genka",
    initialLetters: {
      spanish: "C",
      english: "C",
      japanese: "s"
    }
  },
     
     
{ spanish: "Economía de alcance",
  spanishDef: "reducción de costos al producir varios productos conjuntamente.",
  english: "Economies of scope",
  englishDef: "cost savings from producing multiple products together.",
  japanese: "範囲の経済（はんいのけいざい）",
  japaneseDef: "複数の製品を同時に生産することでコストを削減すること.",
  romanji: "han'i no keizai",
  initialLetters: {
    spanish: "E",
    english: "E",
    japanese: "h" }
},
{ spanish: "Economías de escala",
  spanishDef: "disminución de costos por producir a gran escala.",
  english: "Economies of scale",
  englishDef: "cost reduction from large-scale production.",
  japanese: "規模の経済（きぼのけいざい）",
  japaneseDef: "生産量が増えることで単位あたりのコストが下がること.",
  romanji: "kibo no keizai",
  initialLetters: {
    spanish: "E",
    english: "E",
    japanese: "k" }
},
{ spanish: "Efectivo",
  spanishDef: "dinero en forma líquida y disponible.",
  english: "Effective",
  englishDef: "liquid and available money.",
  japanese: "現金（げんきん）",
  japaneseDef: "すぐに使える形での現金資産.",
  romanji: "genkin",
  initialLetters: {
    spanish: "E",
    english: "E",
    japanese: "g" }
},
{ spanish: "Equivalentes de efectivo",
  spanishDef: "activos fácilmente convertibles en efectivo.",
  english: "Cash equivalents",
  englishDef: "assets readily convertible into cash.",
  japanese: "現金同等物（げんきんどうとうぶつ）",
  japaneseDef: "簡単に現金に換えられる資産.",
  romanji: "genkin dōtōbutsu",
  initialLetters: {
    spanish: "E",
    english: "C",
    japanese: "g" }
},
{ spanish: "Efecto de inflación",
  spanishDef: "impacto que la subida de precios genera en el valor del dinero.",
  english: "Inflation effect",
  englishDef: "the impact that rising prices have on the value of money.",
  japanese: "インフレの影響（いんふれ の えいきょう）",
  japaneseDef: "物価上昇によってお金の価値が下がる影響.",
  romanji: "infure no eikyō",
  initialLetters: {
    spanish: "E",
    english: "I",
    japanese: "i" }
},
{ spanish: "Eficiencia financiera",
  spanishDef: "capacidad de usar recursos financieros de forma óptima.",
  english: "Financial efficiency",
  englishDef: "the ability to use financial resources optimally.",
  japanese: "財務効率（ざいむこうりつ）",
  japaneseDef: "財務資源を最適に活用する能力.",
  romanji: "zaimu kōritsu",
  initialLetters: {
    spanish: "E",
    english: "F",
    japanese: "z" }
},
{ spanish: "Eficiencia operativa",
  spanishDef: "capacidad de una empresa para producir con el menor costo posible.",
  english: "Operational efficiency",
  englishDef: "a company's ability to produce at the lowest possible cost.",
  japanese: "業務効率（ぎょうむこうりつ）",
  japaneseDef: "最小限のコストで生産する企業の能力.",
  romanji: "gyōmu kōritsu",
  initialLetters: {
    spanish: "E",
    english: "O",
    japanese: "g" }
},
{ spanish: "Egresos",
  spanishDef: "salidas de dinero por pagos o gastos.",
  english: "Expenses",
  englishDef: "money outflows for payments or expenses.",
  japanese: "支出（ししゅつ）",
  japaneseDef: "支払いや費用によるお金の流出.",
  romanji: "shishutsu",
  initialLetters: {
    spanish: "E",
    english: "E",
    japanese: "s" }
},

{ spanish: "Cuentas contables",
  spanishDef: "registros clasificados para organizar información financiera.",
  english: "Accounting accounts",
  englishDef: "Classified records used to organize financial data.",
  japanese: "会計勘定（かいけいかんじょう）",
  japaneseDef: "財務情報を分類して整理する記録.",
  romanji: "kaikei kanjō",
  initialLetters: {
    spanish: "C",
    english: "A",
    japanese: "k" }
},
{ spanish: "Cuentas de activo",
  spanishDef: "cuentas que reflejan los bienes de una empresa.",
  english: "Assets Accounts",
  englishDef: "accounts that reflect a company's assets.",
  japanese: "資産勘定（しさんかんじょう）",
  japaneseDef: "企業の資産を表す勘定.",
  romanji: "shisan kanjō",
  initialLetters: {
    spanish: "C",
    english: "A",
    japanese: "s" }
},
{ spanish: "Cuentas de gasto",
  spanishDef: "cuentas que registran los costos o salidas de dinero.",
  english: "Expenditure Account",
  englishDef: "Accounts recording costs or money outflows.",
  japanese: "費用勘定（ひようかんじょう）",
  japaneseDef: "支出やコストを記録するための勘定.",
  romanji: "hiyō kanjō",
  initialLetters: {
    spanish: "C",
    english: "E",
    japanese: "h" }
},
{ spanish: "Cuentas de ingreso",
  spanishDef: "cuentas donde se registran las entradas de dinero.",
  english: "Income accounts",
  englishDef: "Accounts that track money inflows.",
  japanese: "収益勘定（しゅうえきかんじょう）",
  japaneseDef: "収入や利益を記録する勘定.",
  romanji: "shūeki kanjō",
  initialLetters: {
    spanish: "C",
    english: "I",
    japanese: "s" }
},
{ spanish: "Cuentas de orden deudoras",
  spanishDef: "cuentas usadas para control sin efecto directo en el balance.",
  english: "Memorandum Accounts",
  englishDef: "Accounts used for control without direct impact on the balance sheet.",
  japanese: "備忘記録勘定（びぼうきろくかんじょう）",
  japaneseDef: "貸借対照表に影響しない管理用勘.",
  romanji: "bibō kiroku kanjō",
  initialLetters: {
    spanish: "C",
    english: "M",
    japanese: "b" }
},
{ spanish: "Cuentas de orden a acreedores",
  spanishDef: "cuentas para registrar compromisos con acreedores sin afectar el balance.",
  english: "Memorandum accounts creditors",
  englishDef: "Accounts for recording obligations to creditors without affecting the balance.",
  japanese: "債権者管理勘定（さいけんしゃかんりかんじょう）",
  japaneseDef: "債権者との約束を記録するが、財務諸表には影響しない.",
  romanji: "saikensha kanri kanjō",
  initialLetters: {
    spanish: "C",
    english: "M",
    japanese: "s" }
},
{ spanish: "Ciclo contable",
  spanishDef: "proceso completo de registro y cierre contable en un periodo.",
  english: "Accounting cycle",
  englishDef: "the complete process of recording and closing accounts in a period.",
  japanese: "会計サイクル（かいけいさいくる）",
  japaneseDef: "一会計期間における記録と決算の一連の流れ.",
  romanji: "kaikei saikuru",
  initialLetters: {
    spanish: "C",
    english: "A",
    japanese: "k" }
},
{ spanish: "Comprobación de saldos",
  spanishDef: "revisión para asegurar que los saldos contables estén correctos.",
  english: "Balance check",
  englishDef: "Review to ensure accounting balances are accurate",
  japanese: "残高確認（ざんだかかくにん）",
  japaneseDef: "会計帳簿の正確性を確認する手続き。",
  romanji: "zandaka kakunin",
  initialLetters: {
    spanish: "C",
    english: "B",
    japanese: "z" }
},
     {
  spanish: "Beneficio neto",
  spanishDef: "ganancia total después de impuestos y gastos.",
  english: "Net profit",
  englishDef: "total profit after taxes and expenses.",
  japanese: "純利益（じゅんりえき）",
  japaneseDef: "税金や費用を差し引いた後の最終的な利益.",
  romanji: "junrieki",
  initialLetters: { spanish: "B", english: "N", japanese: "j" }
},
{ spanish: "Contrato",
  spanishDef: "acuerdo legal entre dos o más partes con obligaciones mutuas.",
  english: "Contract",
  englishDef: "legal agreement between two or more parties with mutual obligations.",
  japanese: "契約（けいやく）",
  japaneseDef: "複数の当事者間の法的合意.",
  romanji: "keiyaku",
  initialLetters: {
    spanish: "C",
    english: "C",
    japanese: "k" }
},
{ spanish: "Cuenta corriente",
  spanishDef: "cuenta bancaria que permite depósitos y retiros frecuentes.",
  english: "Current account",
  englishDef: "a bank account that allows frequent deposits and withdrawals.",
  japanese: "当座預金口座（とうざよきんこうざ）",
  japaneseDef: "頻繁に入出金ができる銀行口座.",
  romanji: "tōza yokin kōza",
  initialLetters: {
    spanish: "C",
    english: "C",
    japanese: "t" }
},
{ spanish: "Cámara de comercio",
  spanishDef: "organización que representa los intereses de empresas locales.",
  english: "Chamber of commerce",
  englishDef: "an organization that represents local business interests.",
  japanese: "商工会議所（しょうこうかいぎしょ）",
  japaneseDef: "地域企業の利益を代表する組織.",
  romanji: "shōkō kaigisho",
  initialLetters: {
    spanish: "C",
    english: "C",
    japanese: "s" }
},
{ spanish: "Capitalización",
  spanishDef: "conversión de ingresos o reservas en capital.",
  english: "Capitalization",
  englishDef: "conversion of income or reserves into capital.",
  japanese: "資本化（しほんか）",
  japaneseDef: "収入や準備金を資本に変換すること.",
  romanji: "shihonka",
  initialLetters: {
    spanish: "C",
    english: "C",
    japanese: "s" }
},
{ spanish: "Causaciones",
  spanishDef: "reconocimiento contable de obligaciones o ingresos devengados.",
  english: "Causation",
  englishDef: "an accounting recognition of accrued obligations or revenues.",
  japanese: "発生主義記帳（はっせいしゅぎきちょう）",
  japaneseDef: "発生した義務や収益を会計に記録すること.",
  romanji: "hassei shugi kichō",
  initialLetters: {
    spanish: "C",
    english: "C",
    japanese: "h" }
},
{ spanish: "Cesantías",
  spanishDef: "prestación económica otorgada al trabajador cuando termina su relación laboral.",
  english: "Severance pay",
  englishDef: "Economic benefit granted to an employee after job termination.",
  japanese: "退職金（たいしょくきん）",
  japaneseDef: "雇用関係が終了した際に労働者に支払われる給付.",
  romanji: "taishokukin",
  initialLetters: {
    spanish: "C",
    english: "S",
    japanese: "t" }
},
{ spanish: "Cargos diferidos",
  spanishDef: "gastos pagados por anticipado que se reconocen con el tiempo",
  english: "Deferred charges",
  englishDef: "prepaid expenses recognized over time.",
  japanese: "繰延費用（くりのべひよう）",
  japaneseDef: "時間の経過とともに認識される前払い費用.",
  romanji: "kurinobe hiyō",
  initialLetters: {
    spanish: "C",
    english: "D",
    japanese: "k" }
},
{ spanish: "Comerciante",
  spanishDef: "persona que se dedica a actividades comerciales.",
  english: "Merchant",
  englishDef: "Person engaged in commercial activities.",
  japanese: "商人（しょうにん）",
  japaneseDef: "商取引に従事する個人.",
  romanji: "shōnin",
  initialLetters: {
    spanish: "C",
    english: "M",
    japanese: "s" }
},
{ spanish: "Comisión",
  spanishDef: "pago recibido por intermediación en una transacción.",
  english: "Commission",
  englishDef: "a payment received for brokering a transaction.",
  japanese: "手数料（てすうりょう）",
  japaneseDef: "取引の仲介で受け取る報酬.",
  romanji: "tesūryō",
  initialLetters: {
    spanish: "C",
    english: "C",
    japanese: "t" }
},
{ spanish: "Compraventa",
  spanishDef: "contrato mediante el cual se transfiere la propiedad de un bien a cambio de un precio.",
  english: "Purchase and sale",
  englishDef: "contract transferring ownership of a good for a price.",
  japanese: "売買契約（ばいばいけいやく）",
  japaneseDef: "商品の所有権を代金と引き換えに移す契約.",
  romanji: "baibai keiyaku",
  initialLetters: {
    spanish: "C",
    english: "P",
    japanese: "b" }
},
{ spanish: "Conciliación bancaria",
  spanishDef: "proceso de comparación entre los registros contables y el estado bancario.",
  english: "Bank accounting",
  englishDef: "the process of reconciling accounting records with the bank statement.",
  japanese: "銀行調整（ぎんこうちょうせい）",
  japaneseDef: "帳簿と銀行明細を照合する手続き.",
  romanji: "ginkō chōsei",
  initialLetters: {
    spanish: "C",
    english: "B",
    japanese: "g" }
},
{ spanish: "Comprobante de ingresos",
  spanishDef: "documento que acredita el dinero recibido por una persona o empresa.",
  english: "Proof of income",
  englishDef: "a document that shows income received by a person or company.",
  japanese: "収入証明書（しゅうにゅうしょうめいしょ）",
  japaneseDef: "個人や企業の収入を証明する書類.",
  romanji: "shūnyū shōmeisho",
  initialLetters: {
    spanish: "C",
    english: "P",
    japanese: "s" }
},
{ spanish: "Contabilidad",
  spanishDef: "disciplina que registra, clasifica y resume las operaciones económicas.",
  english: "Accounting",
  englishDef: "a discipline that records, classifies, and summarizes financial operations.",
  japanese: "会計（かいけい）",
  japaneseDef: "経済取引を記録・分類・要約する学問.",
  romanji: "kaikei",
  initialLetters: {
    spanish: "C",
    english: "A",
    japanese: "k" }
},
{ spanish: "Costo fijo",
  spanishDef: "gasto que no cambia con el nivel de producción o ventas.",
  english: "Fixed cost",
  englishDef: "an expense that remains constant regardless of production levels.",
  japanese: "固定費（こていひ）",
  japaneseDef: "生産や販売量に関係なく一定の費用.",
  romanji: "koteihi",
  initialLetters: {
    spanish: "C",
    english: "F",
    japanese: "k" }
},
{ spanish: "Ejercicio contable",
  spanishDef: "intervalo de tiempo en el que se registran operaciones contables.",
  english: "Accounting period",
  englishDef: "a time interval in which accounting transactions are recorded.",
  japanese: "会計年度（かいけいねんど）",
  japaneseDef: "会計処理が行われる一定の期間.",
  romanji: "kaikei nendo",
  initialLetters: {
    spanish: "E",
    english: "A",
    japanese: "k" }
},
{ spanish: "Ejecución presupuestaria",
  spanishDef: "implementación y control del presupuesto aprobado.",
  english: "Budget execution",
  englishDef: "implementation and control of the approved budget.",
  japanese: "予算執行（よさんしっこう）",
  japaneseDef: "承認された予算の実施と管理.",
  romanji: "yosan shikkō",
  initialLetters: {
    spanish: "E",
    english: "B",
    japanese: "y" }
},
{ spanish: "Empleado",
  spanishDef: "persona que trabaja bajo contrato para una empresa.",
  english: "Employee",
  englishDef: "a person who works under contract for a company.",
  japanese: "従業員（じゅうぎょういん）",
  japaneseDef: "企業と契約して働く人.",
  romanji: "jūgyōin",
  initialLetters: {
    spanish: "E",
    english: "E",
    japanese: "j" }
},
{ spanish: "Empresa",
  spanishDef: "organización dedicada a actividades comerciales, industriales o de servicios.",
  english: "Company",
  englishDef: "an organization dedicated to commercial, industrial or service activities.",
  japanese: "企業（きぎょう）",
  japaneseDef: "商業、工業、またはサービスを行う組織.",
  romanji: "kigyō",
  initialLetters: {
    spanish: "E",
    english: "C",
    japanese: "k" }
},
{ spanish: "Entidad contable",
  spanishDef: "unidad independiente para fines contables y financieros.",
  english: "Accounting entity",
  englishDef: "an independent unit for accounting and financial purposes.",
  japanese: "会計主体（かいけいしゅたい）",
  japaneseDef: "会計および財務のための独立した単位.",
  romanji: "kaikei shutai",
  initialLetters: {
    spanish: "E",
    english: "A",
    japanese: "k" }
},
     {
  spanish: "Rendimiento financiero",
  spanishDef: "ganancia obtenida de una inversión.",
  english: "Financial return",
  englishDef: "profit obtained from an investment.",
  japanese: "金融収益（きんゆうしゅうえき）",
  japaneseDef: "投資から得られる利益.",
  romanji: "kin'yū shūeki",
  initialLetters: { spanish: "R", english: "F", japanese: "k" }
},
{
  spanish: "Rentabilidad",
  spanishDef: "capacidad de una inversión de generar beneficios en relación a sus recursos.",
  english: "Profitability",
  englishDef: "the ability of an investment to generate profits from its resources.",
  japanese: "収益性（しゅうえきせい）",
  japaneseDef: "投資された資源に対する利益の生産能力.",
  romanji: "shūekisei",
  initialLetters: { spanish: "R", english: "P", japanese: "s" }
},
{
  spanish: "Revalorización de activos",
  spanishDef: "Incremento del valor contable de un activo.",
  english: "Asset revaluation",
  englishDef: "Increase in the book value of an asset.",
  japanese: "資産再評価（しさんさいひょうか）",
  japaneseDef: "資産の帳簿価額が増加すること.",
  romanji: "shisan saihyōka",
  initialLetters: { spanish: "R", english: "A", japanese: "s" }
},
{
  spanish: "Rotación de activos",
  spanishDef: "indicador que mide cuántas veces los activos generan ingresos en un periodo.",
  english: "Asset turnover",
  englishDef: "an indicator that measures how many times assets generate income in a period.",
  japanese: "資産回転率（しさんかいてんりつ）",
  japaneseDef: "資産が一定期間でどれだけ売上を生むかを示す指標.",
  romanji: "shisan kaitenritsu",
  initialLetters: { spanish: "R", english: "A", japanese: "s" }
},
{
  spanish: "Rotación de inventarios",
  spanishDef: "indicador que mide cuántas veces se vende y repone el inventario en un período determinado.",
  english: "Inventory turnover",
  englishDef: "an indicator that measures how many times inventory is sold and replenished in a given period.",
  japanese: "棚卸資産回転率（たなおろししさんかいてんりつ）",
  japaneseDef: "在庫が一定期間に何度売れて補充されるかを示す指標.",
  romanji: "tanaoroshi shisan kaitenritsu",
  initialLetters: { spanish: "R", english: "I", japanese: "t" }
},
{ spanish: "Entradas",
  spanishDef: "documentos que respaldan una transacción.",
  english: "Entries",
  englishDef: "documents that support a transaction.",
  japanese: "伝票（でんぴょう）",
  japaneseDef: "取引を裏付ける書類.",
  romanji: "denpyō",
  initialLetters: {
    spanish: "E",
    english: "E",
    japanese: "d" }
},
{ spanish: "Entradas de diario",
  spanishDef: "registro de una transacción en el libro diario contable.",
  english: "Journal entries",
  englishDef: "recording a transaction in the accounting journal.",
  japanese: "仕訳帳記入（しわけちょうきにゅう）",
  japaneseDef: "会計日誌への取引の記録.",
  romanji: "shiwaakechō kinyū",
  initialLetters: {
    spanish: "E",
    english: "J",
    japanese: "s" }
},
{ spanish: "Equilibrio financiero",
  spanishDef: "relación equilibrada entre ingresos y egresos.",
  english: "Financial balance",
  englishDef: "a balanced relationship between income and expenses.",
  japanese: "財務均衡（ざいむきんこう）",
  japaneseDef: "収入と支出の均衡した関係.",
  romanji: "zaimu kinkō",
  initialLetters: {
    spanish: "E",
    english: "F",
    japanese: "z" }
},
{ spanish: "Estado de cambios en el patrimonio",
  spanishDef: "informe que muestra variaciones en el patrimonio de una entidad.",
  english: "Statement of changes in equity",
  englishDef: "report showing changes in an entity's equity.",
  japanese: "純資産変動計算書（じゅんしさんへんどうけいさんしょ）",
  japaneseDef: "純資産の変動を示す報告書.",
  romanji: "junshisan hendō keisansho",
  initialLetters: {
    spanish: "E",
    english: "S",
    japanese: "j" }
},
{ spanish: "Estado de resultados",
  spanishDef: "informe que muestra ingresos, gastos y utilidades o pérdidas de un período.",
  english: "Income statement",
  englishDef: "A report showing income, expenses, and profit or loss for a period.",
  japanese: "損益計算書（そんえきけいさんしょ）",
  japaneseDef: "一定期間の収益、費用、利益または損失を示す報告書.",
  romanji: "son'eki keisansho",
  initialLetters: {
    spanish: "E",
    english: "I",
    japanese: "s" }
},
{ spanish: "Estados financieros",
  spanishDef: "conjunto de informes que reflejan la situación económica de una entidad.",
  english: "Financial statements",
  englishDef: "a set of reports that reflect the economic situation of an entity.",
  japanese: "財務諸表（ざいむしょひょう）",
  japaneseDef: "企業の経済状況を反映する一連の報告書.",
  romanji: "zaimu shohyō",
  initialLetters: {
    spanish: "E",
    english: "F",
    japanese: "z" }
},
{ spanish: "Estructura de capital",
  spanishDef: "composición del financiamiento de una empresa (deuda y capital).",
  english: "Capital structure",
  englishDef: "composition of a company's financing (debt and equity).",
  japanese: "資本構成（しほんこうせい）",
  japaneseDef: "企業の資金調達構造（負債と資本).",
  romanji: "shihon kōsei",
  initialLetters: {
    spanish: "E",
    english: "C",
    japanese: "s" }
},
{ spanish: "Evaluación de activos",
  spanishDef: "valoración del valor económico de los bienes de una empresa.",
  english: "Asset valuation",
  englishDef: "assessment of the economic value of a company's assets.",
  japanese: "資産評価（しさんひょうか）",
  japaneseDef: "企業が保有する財産の経済的価値の評価.",
  romanji: "shisan hyōka",
  initialLetters: {
    spanish: "E",
    english: "A",
    japanese: "s" }
},
{ spanish: "Excedente de capital",
  spanishDef: "diferencia entre el valor nominal y el valor de emisión de acciones.",
  english: "Capital surplus",
  englishDef: "difference between the nominal value and the issue value of shares.",
  japanese: "資本剰余金（しほんじょうよきん）",
  japaneseDef: "額面価額と発行価額の差額.",
  romanji: "shihon jōyokin",
  initialLetters: {
    spanish: "E",
    english: "C",
    japanese: "s" }
},
{ spanish: "Existencias",
  spanishDef: "bienes o productos disponibles para la venta o producción.",
  english: "Stock",
  englishDef: "goods or products available for sale or production.",
  japanese: "在庫（ざいこ）",
  japaneseDef: "販売または生産のために保有されている商品や製品.",
  romanji: "zaiko",
  initialLetters: {
    spanish: "E",
    english: "S",
    japanese: "z" }
},

// Términos con F
{ spanish: "Factura",
  spanishDef: "documento que detalla una transacción de venta.",
  english: "Invoice",
  englishDef: "A document detailing a sales transaction.",
  japanese: "請求書（せいきゅうしょ）",
  japaneseDef: "販売取引の内容を記載した書類.",
  romanji: "seikyūsho",
  initialLetters: {
    spanish: "F",
    english: "I",
    japanese: "s" }
},
{ spanish: "Fondo",
  spanishDef: "reserva de dinero destinada a un propósito específico.",
  english: "Fund",
  englishDef: "a reserve of money designated for a specific purpose.",
  japanese: "基金（ききん）",
  japaneseDef: "特定の目的のために用意された金銭の予備.",
  romanji: "kikin",
  initialLetters: {
    spanish: "F",
    english: "F",
    japanese: "k" }
},
{ spanish: "Flujo",
  spanishDef: "movimiento de dinero u otros recursos en un sistema.",
  english: "Flow",
  englishDef: "movement of money or other resources in a system.",
  japanese: "流れ（ながれ）",
  japaneseDef: "金銭や他の資源がシステム内を移動すること.",
  romanji: "nagare",
  initialLetters: {
    spanish: "F",
    english: "F",
    japanese: "n" }
},
{ spanish: "Financiamiento",
  spanishDef: "provisión de fondos para un proyecto o actividad.",
  english: "Financing",
  englishDef: "provision of funds for a project or activity.",
  japanese: "資金調達（しきんちょうたつ）",
  japaneseDef: "プロジェクトや活動のために資金を提供すること.",
  romanji: "shikin chōtatsu",
  initialLetters: {
    spanish: "F",
    english: "F",
    japanese: "s" }
},

// Términos con G
{ spanish: "Ganancia",
  spanishDef: "beneficio obtenido tras deducir los costos.",
  english: "Profit",
  englishDef: "profit obtained after deducting costs.",
  japanese: "利益（りえき）",
  japaneseDef: "費用を差し引いた後に得られる利益.",
  romanji: "rieki",
  initialLetters: {
    spanish: "G",
    english: "P",
    japanese: "r" }
},
{ spanish: "Gasto",
  spanishDef: "desembolso de dinero para adquirir bienes o servicios.",
  english: "Expense",
  englishDef: "disbursement of money to acquire goods or services.",
  japanese: "支出（ししゅつ）",
  japaneseDef: "商品やサービスを得るために金銭を支払うこと.",
  romanji: "shishutsu",
  initialLetters: {
    spanish: "G",
    english: "E",
    japanese: "s" }
},
{ spanish: "Gestión",
  spanishDef: "proceso de administración y control de recursos.",
  english: "Management",
  englishDef: "process of administration and control of resources.",
  japanese: "管理（かんり）",
  japaneseDef: "資源の運営と統制のプロセス.",
  romanji: "kanri",
  initialLetters: {
    spanish: "G",
    english: "M",
    japanese: "k" }
},
{ spanish: "Grupo",
  spanishDef: "conjunto de elementos con características comunes.",
  english: "Group",
  englishDef: "set of elements with common characteristics.",
  japanese: "集団（しゅうだん）",
  japaneseDef: "共通の特徴を持つ要素の集まり.",
  romanji: "shūdan",
  initialLetters: {
    spanish: "G",
    english: "G",
    japanese: "s" }
},
     // Términos con I  
{ spanish: "Ingreso",  
  spanishDef: "dinero recibido por una persona o empresa.",  
  english: "Income",  
  englishDef: "money received by a person or company.",  
  japanese: "収入（しゅうにゅう）",  
  japaneseDef: "個人または企業が受け取る金銭.",  
  romanji: "shūnyū",  
  initialLetters: {  
    spanish: "I",  
    english: "I",  
    japanese: "s" }  
},  
{ spanish: "Inversión",  
  spanishDef: "colocación de recursos para generar ganancias futuras.",  
  english: "Investment",  
  englishDef: "placement of resources to generate future profits.",  
  japanese: "投資（とうし）",  
  japaneseDef: "将来の利益を得るために資源を使うこと.",  
  romanji: "tōshi",  
  initialLetters: {  
    spanish: "I",  
    english: "I",  
    japanese: "t" }  
},  
{ spanish: "Impuesto",  
  spanishDef: "carga obligatoria impuesta por el gobierno.",  
  english: "Tax",  
  englishDef: "a mandatory charge imposed by the government.",  
  japanese: "税金（ぜいきん）",  
  japaneseDef: "政府によって課される義務的な負担.",  
  romanji: "zeikin",  
  initialLetters: {  
    spanish: "I",  
    english: "T",  
    japanese: "z" }  
},  
{ spanish: "Interés",  
  spanishDef: "costo del dinero prestado o rendimiento de una inversión.",  
  english: "Interest",  
  englishDef: "cost of borrowed money or return on an investment.",  
  japanese: "利息（りそく）",  
  japaneseDef: "貸付金の使用に対する費用または投資の利益.",  
  romanji: "risoku",  
  initialLetters: {  
    spanish: "I",  
    english: "I",  
    japanese: "r" }  
},  

// Términos con J  
{ spanish: "Jerarquía contable",  
  spanishDef: "organización estructurada de elementos contables por nivel de importancia.",  
  english: "Accounting hierarchy",  
  englishDef: "structured organization of accounting elements by level of importance.",  
  japanese: "会計の階層（かいけいのかいそう）",  
  japaneseDef: "会計要素を重要度で構成した構造.",  
  romanji: "kaikei no kaisō",  
  initialLetters: {  
    spanish: "J",  
    english: "A",  
    japanese: "k" }  
},  
{ spanish: "Justo valor",  
  spanishDef: "valor estimado al que se podría vender un activo o transferir un pasivo entre partes interesadas y bien informadas.",  
  english: "Fair value",  
  englishDef: "estimated value at which an asset could be sold or a liability transferred between knowledgeable and interested parties.",  
  japanese: "公正価値（こうせいかち）",  
  japaneseDef: "当事者間で合意できる資産や負債の評価額.",  
  romanji: "kōsei kachi",  
  initialLetters: {  
    spanish: "J",  
    english: "F",  
    japanese: "k" }  
},  
{ spanish: "Jurisdicción fiscal",  
  spanishDef: "área geográfica donde una autoridad tiene poder para imponer impuestos.",  
  english: "Fiscal jurisdiction",  
  englishDef: "geographic area where a tax authority has the power to levy taxes.",  
  japanese: "税務管轄（ぜいむかんかつ）",  
  japaneseDef: "税金を課す権限を持つ地理的な区域.",  
  romanji: "zeimu kankatsu",  
  initialLetters: {  
    spanish: "J",  
    english: "F",  
    japanese: "z" }  
},  
{ spanish: "Jefe de contabilidad",  
  spanishDef: "persona responsable de supervisar las actividades contables de una organización.",  
  english: "Chief accountant",  
  englishDef: "the person responsible for overseeing an organization’s accounting activities.",  
  japanese: "会計部長（かいけいぶちょう）",  
  japaneseDef: "組織の会計活動を監督する責任者.",  
  romanji: "kaikei buchō",  
  initialLetters: {  
    spanish: "J",  
    english: "C",  
    japanese: "k" }  
},  
{ spanish: "Justificación de gastos",  
  spanishDef: "documento o explicación que respalda un gasto realizado.",  
  english: "Justification of expenses",  
  englishDef: "a document or explanation that supports a cost incurred.",  
  japanese: "経費の証明（けいひのしょうめい）",  
  japaneseDef: "支出の根拠を示す書類や説明.",  
  romanji: "keihi no shōmei",  
  initialLetters: {  
    spanish: "J",  
    english: "J",  
    japanese: "k" }  
},  

// Términos con K  
{ spanish: "KPI",  
  spanishDef: "Indicador clave de rendimiento, métrica utilizada para medir el éxito de una actividad empresarial o proyecto.",  
  english: "KPI",  
  englishDef: "Key Performance Indicator, a metric used to measure the success of a business activity or project.",  
  japanese: "主要業績評価指標（しゅようぎょうせきひょうかしひょう）",  
  japaneseDef: "企業活動やプロジェクトの成功を測るための指標.",  
  romanji: "shuyō gyōseki hyōka shihyō",  
  initialLetters: {  
    spanish: "K",  
    english: "K",  
    japanese: "s" }  
},  

// Términos con L  
{ spanish: "Largo plazo",  
  spanishDef: "Refiere a un periodo de tiempo que supera los 12 meses.",  
  english: "Long term",  
  englishDef: "A period that exceeds 12 months.",  
  japanese: "長期（ちょうき）",  
  japaneseDef: "12か月を超える期間を指す.",  
  romanji: "chōki",  
  initialLetters: {  
    spanish: "L",  
    english: "L",  
    japanese: "c" }  
},  
{ spanish: "Letra de cambio",  
  spanishDef: "Documento financiero que ordena el pago de una suma en una fecha futura.",  
  english: "Bill of exchange",  
  englishDef: "A Financial document ordering payment of a sum on a future date.",  
  japanese: "為替手形（かわせてがた）",  
  japaneseDef: "将来の一定日に支払いを命じる金融文書.",  
  romanji: "kawase tegata",  
  initialLetters: {  
    spanish: "L",  
    english: "B",  
    japanese: "k" }  
},  
{ spanish: "Libro diario",  
  spanishDef: "registro cronológico de todas las transacciones contables.",  
  english: "Journal",  
  englishDef: "a chronological record of all accounting transactions.",  
  japanese: "仕訳帳（しわけちょう）",  
  japaneseDef: "すべての会計取引を時系列で記録する帳簿.",  
  romanji: "shiwakechō",  
  initialLetters: {  
    spanish: "L",  
    english: "J",  
    japanese: "s" }  
},  
{ spanish: "Libro mayor",  
  spanishDef: "registro contable que agrupa todas las cuentas de una empresa.",  
  english: "General ledger",  
  englishDef: "an accounting record that groups all the company's accounts.",  
  japanese: "総勘定元帳（そうかんじょうもとちょう）",  
  japaneseDef: "企業のすべての勘定をまとめた記録.",  
  romanji: "sōkanjō motochō",  
  initialLetters: {  
    spanish: "L",  
    english: "G",  
    japanese: "s" }  
},  
{ spanish: "Liquidación",  
  spanishDef: "proceso de pago final de una obligación o cierre de una cuenta.",  
  english: "Settlement",  
  englishDef: "process of final payment of an obligation or closing of an account.",  
  japanese: "清算（せいさん）",  
  japaneseDef: "債務の最終的な支払いや口座の締め.",  
  romanji: "seisan",  
  initialLetters: {  
    spanish: "L",  
    english: "S",  
    japanese: "s" }  
},  
{ spanish: "Liquidez",  
  spanishDef: "capacidad de una empresa para cumplir sus obligaciones de corto plazo.",  
  english: "Liquidity",  
  englishDef: "a company's ability to meet its short-term obligations.",  
  japanese: "流動性（りゅうどうせい）",  
  japaneseDef: "短期間で支払い能力を果たす力.",  
  romanji: "ryūdōsei",  
  initialLetters: {  
    spanish: "L",  
    english: "L",  
    japanese: "r" }  
},  
{ spanish: "Local",  
  spanishDef: "espacio físico donde se lleva a cabo una actividad comercial.",  
  english: "Premises or store",  
  englishDef: "physical space where a commercial activity is carried out.",  
  japanese: "店舗（てんぽ）",  
  japaneseDef: "商業活動が行われる物理的な場所.",  
  romanji: "tenpo",  
  initialLetters: {  
    spanish: "L",  
    english: "P",  
    japanese: "t" }  
},  

// Términos con M  
{ spanish: "Maquinaria",  
  spanishDef: "conjunto de máquinas utilizadas en procesos productivos.",  
  english: "Machinery",  
  englishDef: "a set of machines used in production processes.",  
  japanese: "機械類（きかいるい）",  
  japaneseDef: "生産過程で使用される機械の集合.",  
  romanji: "kikairui",  
  initialLetters: {  
    spanish: "M",  
    english: "M",  
    japanese: "k" }  
},  
{ spanish: "Materia prima",  
  spanishDef: "recursos básicos que se transforman en productos terminados mediante proceso de producción.",  
  english: "Raw material",  
  englishDef: "basic resources that are transformed into finished products through a production process.",  
  japanese: "原材料（げんざいりょう）",  
  japaneseDef: "製品に加工される前の基本的な資源.",  
  romanji: "genzairyō",  
  initialLetters: {  
    spanish: "M",  
    english: "R",  
    japanese: "g" }  
},  
{ spanish: "Mensualidad",  
  spanishDef: "pago que se realiza cada mes, generalmente por servicios, préstamos o suscripciones.",  
  english: "Monthly fee",  
  englishDef: "Payment made each month, usually for services, loans, or subscriptions.",  
  japanese: "月額（げつがく）",  
  japaneseDef: "サービス、ローン、またはサブスクリプションのために毎月支払われる金額.",  
  romanji: "getsugaku",  
  initialLetters: {  
    spanish: "M",  
    english: "M",  
    japanese: "g" }  
},  
{ spanish: "Mercancía",  
  spanishDef: "bienes que se compran y venden en el comercio.",  
  english: "Merchandise",  
  englishDef: "goods that are bought and sold in commerce.",  
  japanese: "商品（しょうひん）",  
  japaneseDef: "商取引で売買される物品.",  
  romanji: "shōhin",  
  initialLetters: {  
    spanish: "M",  
    english: "M",  
    japanese: "s" }  
},  
{ spanish: "Moneda",  
  spanishDef: "medio de intercambio comúnmente aceptado (dinero).",  
  english: "Currency",  
  englishDef: "commonly accepted medium of exchange (money).",  
  japanese: "通貨（つうか）",  
  japaneseDef: "一般的に受け入れられている交換手段.",  
  romanji: "tsūka",  
  initialLetters: {  
    spanish: "M",  
    english: "C",  
    japanese: "t" }  
},
     {
    spanish: "Balance de apertura",
    spanishDef: "Estado financiero inicial que muestra la situación patrimonial.",
    english: "Opening balance sheet",
    englishDef: "Initial financial statement showing the company's equity.",
    japanese: "開業時の貸借対照表（かいぎょうじ の たいしゃく たいしょうひょう）",
    japaneseDef: "財務状況を示す初期の財務状態.",
    romanji: "kaigyōji no taishaku taishōhyō",
    initialLetters: { spanish: "B", english: "O", japanese: "k" }
  },
  {
    spanish: "Balance de prueba",
    spanishDef: "Lista de todas las cuentas contables con sus saldos.",
    english: "Trial balance",
    englishDef: "A list of all accounting accounts with their balances.",
    japanese: "試算表（しさんひょう）",
    japaneseDef: "すべての会計口座とその残高を示すリスト.",
    romanji: "shisanhyō",
    initialLetters: { spanish: "B", english: "T", japanese: "s" }
  },
  {
    spanish: "Balance general",
    spanishDef: "Estado financiero que muestra los activos, pasivos y patrimonio.",
    english: "Balance sheet",
    englishDef: "A financial statement showing assets, liabilities, and equity.",
    japanese: "貸借対照表（たいしゃく たいしょうひょう）",
    japaneseDef: "企業の資産、負債、資本を示す財務状態.",
    romanji: "taishaku taishōhyō",
    initialLetters: { spanish: "B", english: "B", japanese: "t" }
  },
  {
    spanish: "Banca",
    spanishDef: "Conjunto de actividades relacionadas con la gestión de dinero.",
    english: "Banking",
    englishDef: "The set of activities related to money management.",
    japanese: "銀行業（ぎんこうぎょう）",
    japaneseDef: "お金の管理に関連する活動のセット.",
    romanji: "ginkōgyō",
    initialLetters: { spanish: "B", english: "B", japanese: "g" }
  },
  {
    spanish: "Banca de inversiones",
    spanishDef: "Sector bancario que asesora fusiones.",
    english: "Investment banking",
    englishDef: "A banking sector that advises on mergers.",
    japanese: "投資銀行業（とうし ぎんこうぎょう）",
    japaneseDef: "合併の助言を行う銀行部門.",
    romanji: "tōshi ginkōgyō",
    initialLetters: { spanish: "B", english: "I", japanese: "t" }
  },
  {
    spanish: "Bancarrota",
    spanishDef: "Situación legal en la que una empresa no puede pagar sus deudas.",
    english: "Bankruptcy",
    englishDef: "A legal situation where a company can't pay its debts.",
    japanese: "破産（はさん）",
    japaneseDef: "企業が借金を返済できない法的な状態.",
    romanji: "hasan",
    initialLetters: { spanish: "B", english: "B", japanese: "h" }
  },
  {
    spanish: "Banco",
    spanishDef: "Institución financiera.",
    english: "Bank",
    englishDef: "A financial institution.",
    japanese: "銀行（ぎんこう）",
    japaneseDef: "金融機関.",
    romanji: "ginkō",
    initialLetters: { spanish: "B", english: "B", japanese: "g" }
  },
  {
    spanish: "Base fiscal",
    spanishDef: "Valor sobre el cual se calcula un impuesto.",
    english: "Tax base",
    englishDef: "The value on which a tax is calculated.",
    japanese: "課税基準（かぜい きじゅん）",
    japaneseDef: "税金が計算されるための基準となる価値.",
    romanji: "kazei kijun",
    initialLetters: { spanish: "B", english: "T", japanese: "k" }
  },
  {
    spanish: "Beneficiario",
    spanishDef: "Persona que recibe un beneficio económico.",
    english: "Beneficiary",
    englishDef: "A person who receives an economic benefit.",
    japanese: "受益者（じゅえきしゃ）",
    japaneseDef: "経済的利益を受け取る個人.",
    romanji: "jueki-sha",
    initialLetters: { spanish: "B", english: "B", japanese: "j" }
  },
  {
    spanish: "Beneficio",
    spanishDef: "Ganancia obtenida.",
    english: "Profit",
    englishDef: "Obtained profit.",
    japanese: "利益（りえき）",
    japaneseDef: "得られた利益.",
    romanji: "rieki",
    initialLetters: { spanish: "B", english: "P", japanese: "r" }
  },
  {
    spanish: "Beneficio fiscal",
    spanishDef: "Reducción legal de la carga tributaria.",
    english: "Tax benefit",
    englishDef: "Legal reduction of the tax burden.",
    japanese: "税制上の優遇（ぜいせいじょう の ゆうぐう）",
    japaneseDef: "法的に認められた税負担の軽減.",
    romanji: "zeiseijō no yūgū",
    initialLetters: { spanish: "B", english: "T", japanese: "z" }
  },
  {
    spanish: "Beneficio neto",
    spanishDef: "Ganancia total después de impuestos y gastos.",
    english: "Net profit",
    englishDef: "Total profit after taxes and expenses.",
    japanese: "純利益（じゅんりえき）",
    japaneseDef: "税金や費用を差し引いた後の最終的な利益.",
    romanji: "junrieki",
    initialLetters: { spanish: "B", english: "N", japanese: "j" },
     spanish: "Bienes intangibles",
    spanishDef: "activos sin forma física.",
    english: "Intangible assets",
    englishDef: "assets without physical form.",
    japanese: "無形資産（むけいしさん）",
    japaneseDef: "形のないが経済的価値のある資産.",
    romanji: "mukei shisan",
    initialLetters: { spanish: "B", english: "I", japanese: "m" }
  },
  {
    spanish: "Bienes muebles",
    spanishDef: "bienes transportables.",
    english: "Personal property",
    englishDef: "transportable goods.",
    japanese: "動産（どうさん）",
    japaneseDef: "移動可能な財産.",
    romanji: "dōsan",
    initialLetters: { spanish: "B", english: "P", japanese: "d" }
  },
  {
    spanish: "Bienes públicos",
    spanishDef: "bienes de propiedad colectiva.",
    english: "Public Assets",
    englishDef: "collectively owned goods.",
    japanese: "公共財（こうきょうざい）",
    japaneseDef: "集団で所有される財産.",
    romanji: "kōkyōzai",
    initialLetters: { spanish: "B", english: "P", japanese: "k" }
  },
  {
    spanish: "Bienes raíces",
    spanishDef: "término general para terrenos.",
    english: "Real estate",
    englishDef: "a general term for land.",
    japanese: "不動産（ふどうさん）",
    japaneseDef: "土地を含む一般的な用語.",
    romanji: "fudōsan",
    initialLetters: { spanish: "B", english: "R", japanese: "f" }
  },
  {
    spanish: "Bienes tangibles",
    spanishDef: "activos físicos visibles.",
    english: "Tangible assets",
    englishDef: "visible physical assets.",
    japanese: "有形資産（ゆうけいしさん）",
    japaneseDef: "目に見える物理的資産.",
    romanji: "yūkei shisan",
    initialLetters: { spanish: "B", english: "T", japanese: "y" }
  },
  {
    spanish: "Billete",
    spanishDef: "papel moneda de recurso legal.",
    english: "Banknote",
    englishDef: "paper currency with legal tender status.",
    japanese: "紙幣（しへい）",
    japaneseDef: "法的に使用できる紙のお金.",
    romanji: "shihei",
    initialLetters: { spanish: "B", english: "B", japanese: "s" }
  },
  {
    spanish: "Bolsa de valores",
    spanishDef: "mercado donde se compran y venden acciones.",
    english: "Stock exchange",
    englishDef: "a market where stocks and shares are bought and sold.",
    japanese: "証券取引所（しょうけんとりひきじょ）",
    japaneseDef: "株式が売買される市場.",
    romanji: "shōken torihikijo",
    initialLetters: { spanish: "B", english: "S", japanese: "s" }
  },
  {
    spanish: "Bono",
    spanishDef: "instrumento de deuda emitido por entidades y venden acciones.",
    english: "Bond",
    englishDef: "A Debt instrument issued by entities and sold to investors.",
    japanese: "債券（さいけん）",
    japaneseDef: "企業や団体が発行する借入証書.",
    romanji: "saiken",
    initialLetters: { spanish: "B", english: "B", japanese: "s" }
  },
  {
    spanish: "Bruto",
    spanishDef: "valor total sin deducciones de impuestos o costos.",
    english: "Gross",
    englishDef: "Total amount before deductions like taxes or costs.",
    japanese: "総額（そうがく）",
    japaneseDef: "税金や費用を差し引く前の金額.",
    romanji: "sōgaku",
    initialLetters: { spanish: "B", english: "G", japanese: "s" }
  },
  {
    spanish: "Bien",
    spanishDef: "Cualquier recurso con valor económico.",
    english: "Assets",
    englishDef: "Any resource with economic value.",
    japanese: "財（ざい）",
    japaneseDef: "経済的価値のあるあらゆる資源.",
    romanji: "zai",
    initialLetters: { spanish: "B", english: "A", japanese: "z" }
  },
     {
  spanish: "Unidad monetaria",
  spanishDef: "Unidad de medida del dinero usada en un país.",
  english: "Monetary unit",
  englishDef: "Unit of measurement of money used in a country.",
  japanese: "通貨単位（つうかたんい）",
  japaneseDef: "国で使われるお金の基準となる単位.",
  romanji: "tsūka tan’i",
  initialLetters: { spanish: "U", english: "M", japanese: "t" }
},
{
  spanish: "Utilidad neta",
  spanishDef: "Ganancia total de una empresa después de restar todos los gastos e impuestos.",
  english: "Net income",
  englishDef: "A company's total profit after subtracting all expenses and taxes.",
  japanese: "純利益（じゅんりえき）",
  japaneseDef: "すべての費用と税金を差し引いた後の最終的な利益.",
  romanji: "junrieki",
  initialLetters: { spanish: "U", english: "N", japanese: "j" }
},
{
  spanish: "Utilidad operativa",
  spanishDef: "Ganancia obtenida de las operaciones principales del negocio, antes de impuestos e intereses.",
  english: "Operating profit",
  englishDef: "Profit obtained from the main operations of the business, before taxes and interest.",
  japanese: "営業利益（えいぎょうりえき）",
  japaneseDef: "企業の本業によって得られる利益（利息・税金控除前）.",
  romanji: "eigyou rieki",
  initialLetters: { spanish: "U", english: "O", japanese: "e" }
},
{
  spanish: "Utilidad retenida",
  spanishDef: "Ganancias que no se distribuyen como dividendos, sino que se reinvierten en la empresa.",
  english: "Retained earnings",
  englishDef: "Earnings that are not distributed as dividends, but are reinvested in the company.",
  japanese: "留保利益（りゅうほりえき）",
  japaneseDef: "配当として分配されず、企業内に再投資される利益.",
  romanji: "ryūho rieki",
  initialLetters: { spanish: "U", english: "R", japanese: "r" }
},
     {
  spanish: "Quiebra",
  spanishDef: "situación legal financiera en la que una empresa no puede cumplir con sus obligaciones financieras.",
  english: "Bankruptcy",
  englishDef: "a legal financial situation in which a company cannot meet its financial obligations.",
  japanese: "倒産（とうさん）",
  japaneseDef: "企業が財務上の義務を果たせなくなる法的状態.",
  romanji: "tōsan",
  initialLetters: { spanish: "Q", english: "B", japanese: "t" }
},
{
  spanish: "Quórum",
  spanishDef: "número mínimo de miembros para tomar decisiones.",
  english: "Quorum",
  englishDef: "minimum number of members to make decisions.",
  japanese: "定足数（ていそくすう）",
  japaneseDef: "意思決定に必要な最小限の出席者数.",
  romanji: "teisokusū",
  initialLetters: { spanish: "Q", english: "Q", japanese: "t" }
},
  {
    spanish: "Bienes de consumo",
    spanishDef: "Bienes destinados al uso final.",
    english: "Consumer asset",
    englishDef: "Goods intended for final use.",
    japanese: "消費財（しょうひざい）",
    japaneseDef: "最終的に消費者が使用するための財.",
    romanji: "shōhizai",
    initialLetters: { spanish: "B", english: "C", japanese: "s" }
  },
  {
    spanish: "Bienes inmuebles",
    spanishDef: "Propiedades físicas.",
    english: "Real estate",
    englishDef: "Physical properties.",
    japanese: "不動産（ふどうさん）",
    japaneseDef: "移動できない物理的な財産.",
    romanji: "fudōsan",
    initialLetters: { spanish: "B", english: "R", japanese: "f" }
  },
        {
            spanish: "Punto de equilibrio",
            spanishDef: "momento en que los ingresos igualan a los costos, sin ganancias ni pérdidas.",
            english: "Break-even point",
            englishDef: "the moment at which revenues equal costs, with no profit or loss.",
            japanese: "損益分岐点（そんえきぶんきてん）",
            japaneseDef: "収益と費用が等しくなる時点で、利益も損失も出ない状態.",
            romanji: "son'eki bunkiten",
            initialLetters: {
                spanish: "P",
                english: "B",
                japanese: "s"
            }
        }
     ]; 
// Colores para los bordes
    const borderColors = ['yellow', 'pink', 'blue', 'green', 'red', 'orange'];

    // Variables de estado
    let currentLanguage = 'spanish';
    let currentLetter = '';
    let isViewAll = false;

    // Elementos del DOM
    const languageSelect = document.getElementById('language-select');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchSuggestions = document.getElementById('search-suggestions');
    const termDisplay = document.getElementById('term-display');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const viewAllBtn = document.getElementById('view-all-btn');
    const alphabetIndex = document.getElementById('alphabet-index');
    const termsContainer = document.getElementById('terms-container');

    // Inicializar la aplicación
    init();

    function init() {
        setupEventListeners();
        generateAlphabetIndex();
        showTermsByLanguage(currentLanguage);
    }

    function setupEventListeners() {
        searchBtn.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleSearch();
        });
        
        searchInput.addEventListener('input', handleSearchInput);
        searchInput.addEventListener('focus', function() {
            if (searchInput.value.trim() !== '') {
                showSuggestions(searchInput.value.trim());
            }
        });
        
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
                searchSuggestions.classList.add('hidden');
            }
        });
        
        languageSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            isViewAll = false;
            updateActiveTab();
            generateAlphabetIndex();
            showTermsByLanguage(currentLanguage);
        });
        
        tabBtns.forEach(btn => {
            if (btn.id !== 'view-all-btn') {
                btn.addEventListener('click', function() {
                    currentLanguage = this.dataset.lang;
                    isViewAll = false;
                    updateActiveTab();
                    generateAlphabetIndex();
                    showTermsByLanguage(currentLanguage);
                });
            }
        });
        
        viewAllBtn.addEventListener('click', function() {
            isViewAll = true;
            updateActiveTab();
            showAllTerms();
        });
    }

    function handleSearchInput() {
        const searchTerm = searchInput.value.trim();
        showSuggestions(searchTerm);
    }

    function showSuggestions(searchTerm) {
        searchSuggestions.innerHTML = '';
        
        if (searchTerm === '') {
            searchSuggestions.classList.add('hidden');
            return;
        }
        
        const lang = languageSelect.value;
        const suggestions = dictionary.filter(term => {
            const termText = getTermText(term, lang).toLowerCase();
            const romanji = term.romanji ? term.romanji.toLowerCase() : '';
            return termText.includes(searchTerm.toLowerCase()) || 
                   (lang === 'japanese' && romanji.includes(searchTerm.toLowerCase()));
        });
        
        if (suggestions.length > 0) {
            suggestions.slice(0, 5).forEach(term => {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'suggestion-item';
                suggestionItem.textContent = getTermText(term, lang);
                suggestionItem.addEventListener('click', () => {
                    searchInput.value = getTermText(term, lang);
                    searchSuggestions.classList.add('hidden');
                    showTermDefinition(term, lang);
                });
                searchSuggestions.appendChild(suggestionItem);
            });
            searchSuggestions.classList.remove('hidden');
        } else {
            const noSuggestions = document.createElement('div');
            noSuggestions.className = 'no-suggestions';
            noSuggestions.textContent = 'No se encontraron coincidencias';
            searchSuggestions.appendChild(noSuggestions);
            searchSuggestions.classList.remove('hidden');
        }
    }

    function updateActiveTab() {
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
            if (!isViewAll && btn.dataset.lang === currentLanguage) {
                btn.classList.add('active');
            } else if (isViewAll && btn.id === 'view-all-btn') {
                btn.classList.add('active');
            }
        });
    }

    function generateAlphabetIndex() {
        alphabetIndex.innerHTML = '';
        
        if (isViewAll) return;
        
        const letters = new Set();
        const romanjiMap = {};
        
        dictionary.forEach(term => {
            const initial = term.initialLetters[currentLanguage].charAt(0).toUpperCase();
            letters.add(initial);
            
            if (currentLanguage === 'japanese') {
                const romanjiInitial = term.romanji.charAt(0).toUpperCase();
                romanjiMap[initial] = romanjiInitial;
            }
        });
        
        const sortedLetters = Array.from(letters).sort((a, b) => {
            if (currentLanguage === 'japanese') {
                return a.localeCompare(b, 'ja');
            }
            return a.localeCompare(b);
        });
        
        sortedLetters.forEach(letter => {
            const letterBtn = document.createElement('button');
            letterBtn.className = 'letter-btn';
            
            if (currentLanguage === 'japanese') {
                letterBtn.textContent = romanjiMap[letter] || letter;
                letterBtn.title = `Letra japonesa: ${letter}`;
            } else {
                letterBtn.textContent = letter;
            }
            
            letterBtn.addEventListener('click', () => {
                document.querySelectorAll('.letter-btn').forEach(btn => btn.classList.remove('active'));
                letterBtn.classList.add('active');
                currentLetter = letter;
                showTermsByLanguage(currentLanguage, letter);
            });
            alphabetIndex.appendChild(letterBtn);
        });
    }

    function showTermsByLanguage(lang, letter = '') {
        termsContainer.innerHTML = '';
        termsContainer.className = 'terms-grid';
        isViewAll = false;
        
        const filteredTerms = dictionary.filter(term => {
            if (!letter) return true;
            return term.initialLetters[lang].charAt(0).toUpperCase() === letter;
        });
        
        const sortedTerms = [...filteredTerms].sort((a, b) => {
            const termA = getTermText(a, lang).toLowerCase();
            const termB = getTermText(b, lang).toLowerCase();
            return termA.localeCompare(termB);
        });
        
        sortedTerms.forEach(term => {
            const termCard = createTermCard(term, lang);
            termCard.addEventListener('click', () => {
                showTermDefinition(term, lang, true); // true indica que viene del índice
            });
            termsContainer.appendChild(termCard);
        });
    }

    function showAllTerms() {
        termsContainer.innerHTML = '';
        
        const tableContainer = document.createElement('div');
        tableContainer.className = 'terms-table-container';
        
        const table = document.createElement('table');
        table.className = 'terms-table';
        
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `
            <th>#</th>
            <th>Término (${getLanguageName(currentLanguage)})</th>
            <th>Equivalentes</th>
            <th>Definición</th>
        `;
        table.appendChild(headerRow);
        
        const sortedTerms = [...dictionary].sort((a, b) => {
            const termA = getTermText(a, currentLanguage).toLowerCase();
            const termB = getTermText(b, currentLanguage).toLowerCase();
            return termA.localeCompare(termB);
        });
        
        sortedTerms.forEach((term, index) => {
            const row = document.createElement('tr');
            row.className = 'term-row';
            
            const termText = getTermText(term, currentLanguage);
            const termDef = getTermDef(term, currentLanguage);
            
            const otherLangs = [];
            if (currentLanguage !== 'spanish') otherLangs.push(`ES: ${term.spanish}`);
            if (currentLanguage !== 'english') otherLangs.push(`EN: ${term.english}`);
            if (currentLanguage !== 'japanese') otherLangs.push(`JP: ${term.japanese}`);
            
            const otherLangsHTML = otherLangs.map(lang => 
                `<div class="lang-item">${lang}</div>`
            ).join('');
            
            row.innerHTML = `
                <td><div class="number-circle">${index + 1}</div></td>
                <td>${termText}</td>
                <td><div class="other-languages">${otherLangsHTML}</div></td>
                <td>${termDef}</td>
            `;
            
            row.addEventListener('click', () => {
                showTermDefinition(term, currentLanguage); // Redirecciona al índice
            });
            
            table.appendChild(row);
        });
        
        tableContainer.appendChild(table);
        termsContainer.appendChild(tableContainer);
        alphabetIndex.innerHTML = '';
        isViewAll = true;
    }

    function createTermCard(term, lang) {
        const termCard = document.createElement('div');
        termCard.className = 'term-card';
        
        const randomColor = borderColors[Math.floor(Math.random() * borderColors.length)];
        termCard.classList.add(`border-${randomColor}`);
        
        const termText = getTermText(term, lang);
        
        termCard.innerHTML = `
            <h3>${termText}</h3>
        `;
        
        return termCard;
    }

    function showTermDefinition(termObj, lang = currentLanguage, fromIndex = false) {
        const termText = getTermText(termObj, lang);
        
        // Si viene de "Ver Todos" o búsqueda, redirigir al índice primero
        if (!fromIndex) {
            const initialLetter = termObj.initialLetters[lang].charAt(0).toUpperCase();
            
            // Ocultar la ficha temporalmente
            termDisplay.style.display = 'none';
            termDisplay.classList.add('hidden');
            
            // Redirigir al índice alfabético
            currentLetter = initialLetter;
            isViewAll = false;
            updateActiveTab();
            generateAlphabetIndex();
            showTermsByLanguage(lang, initialLetter);
            
            // Pequeño retraso para permitir la transición
            setTimeout(() => {
                // Resaltar la letra correspondiente
                activateLetterButton(initialLetter);
                
                // Mostrar la ficha después de la transición
                showTermCard(termObj, lang, termText);
                
                // Resaltar el término en la lista
                setTimeout(() => {
                    highlightTerm(termText);
                }, 100);
            }, 300);
            
            return;
        }
        
        // Si viene del índice, mostrar directamente
        showTermCard(termObj, lang, termText);
    }

    function showTermCard(termObj, lang, termText) {
        termDisplay.style.display = 'block';
        termDisplay.classList.remove('hidden');
        
        const termDef = getTermDef(termObj, lang);
        
        // Obtener equivalentes
        const equivalents = [];
        if (lang !== 'spanish') equivalents.push(`ES: ${termObj.spanish}`);
        if (lang !== 'english') equivalents.push(`EN: ${termObj.english}`);
        if (lang !== 'japanese') equivalents.push(`JP: ${termObj.japanese}`);
        
        // Crear HTML
        termDisplay.innerHTML = `
            <div class="term-display-card">
                <button class="close-btn" aria-label="Cerrar">×</button>
                <div class="term-display-title">${termText}</div>
                <div class="term-display-equivalents">(${equivalents.join(' | ')})</div>
                <div class="term-display-definition">${termDef}</div>
            </div>
        `;
        
        // Configurar el botón de cerrar
        const closeBtn = termDisplay.querySelector('.close-btn');
        closeBtn.addEventListener('click', function(e) {
            e.stopImmediatePropagation();
            termDisplay.classList.add('hidden');
            setTimeout(() => {
                termDisplay.style.display = 'none';
            }, 300);
        });
        
        termDisplay.scrollIntoView({ behavior: 'smooth' });
    }

    function highlightTerm(termText) {
        setTimeout(() => {
            const termCards = document.querySelectorAll('.term-card');
            termCards.forEach(card => {
                if (card.querySelector('h3').textContent === termText) {
                    card.classList.add('highlighted');
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setTimeout(() => {
                        card.classList.remove('highlighted');
                    }, 2000);
                }
            });
        }, 300);
    }

    function activateLetterButton(letter) {
        const letterButtons = document.querySelectorAll('.letter-btn');
        letterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent === letter || 
                (btn.title && btn.title.includes(letter))) {
                btn.classList.add('active');
            }
        });
    }

    function handleSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (!searchTerm) return;
        
        const lang = languageSelect.value;
        const foundTerm = dictionary.find(term => {
            const termText = getTermText(term, lang).toLowerCase();
            const termDef = getTermDef(term, lang).toLowerCase();
            return termText.includes(searchTerm) || termDef.includes(searchTerm) ||
                   (lang === 'japanese' && term.romanji.toLowerCase().includes(searchTerm));
        });
        
        if (foundTerm) {
            showTermDefinition(foundTerm, lang);
        } else {
            alert('Término no encontrado');
        }
    }

    // Funciones auxiliares
    function getTermText(term, lang) {
        switch(lang) {
            case 'english': return term.english;
            case 'japanese': return term.japanese;
            default: return term.spanish;
        }
    }

    function getTermDef(term, lang) {
        switch(lang) {
            case 'english': return term.englishDef;
            case 'japanese': return term.japaneseDef;
            default: return term.spanishDef;
        }
    }

    function getLanguageName(lang) {
        switch(lang) {
            case 'spanish': return 'Español';
            case 'english': return 'English';
            case 'japanese': return '日本語';
            default: return '';
        }
    }

    // Cerrar al hacer clic fuera de la ficha
    document.addEventListener('click', function(e) {
        if (termDisplay.style.display === 'block' && 
            !termDisplay.contains(e.target) && 
            !e.target.classList.contains('term-card') &&
            !e.target.classList.contains('letter-btn')) {
            termDisplay.classList.add('hidden');
            setTimeout(() => {
                termDisplay.style.display = 'none';
            }, 300);
        }
    });
});
