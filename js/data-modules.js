/* =========================================================
   Contenu pédagogique — Modules, leçons, quiz, flashcards
   ========================================================= */
window.MODULES = [
  /* ---------------------------------------------------- */
  {
    id: "salle",
    title: "La salle de marchés",
    icon: "fa-building-columns",
    color: "#6366f1",
    level: "Débutant",
    summary: "Organisation d’une banque d’investissement, rôles front/middle/back office, sell-side vs buy-side, carnet d’ordres.",
    lessons: [
      {
        title: "Sell-side, buy-side et l’écosystème",
        html: `
<p>Les <b>marchés financiers</b> mettent en relation ceux qui ont besoin de capitaux (États, entreprises) et ceux qui en ont à placer (investisseurs).</p>
<ul>
<li><b>Sell-side</b> : banques d’investissement (BNP Paribas, Société Générale, Goldman Sachs, JP Morgan…). Elles <b>vendent</b> des produits, des services d’exécution et de la liquidité. On les appelle aussi <i>dealers</i> ou <i>brokers-dealers</i>.</li>
<li><b>Buy-side</b> : gérants d’actifs (Amundi, BlackRock), hedge funds, fonds de pension, assureurs, fonds souverains, trésoriers d’entreprises. Ils <b>achètent</b> les services du sell-side.</li>
<li><b>Infrastructures</b> : bourses (Euronext, LSE, NYSE, BRVM), chambres de compensation (LCH, Eurex Clearing, CME Clearing), dépositaires centraux (Euroclear, Clearstream, DTCC), réseaux (SWIFT), plateformes électroniques (Bloomberg, Tradeweb, MarketAxess).</li>
<li><b>Régulateurs</b> : AMF, ACPR, BCE/SSM, ESMA, SEC, FCA, CREPMF (UEMOA).</li>
</ul>
<div class="tip"><b>À retenir en entretien :</b> le sell-side gagne de l’argent via le <b>bid-ask spread</b> (market making), les <b>commissions</b> (exécution agency) et la <b>structuration</b> (marge sur produits sur mesure).</div>`
      },
      {
        title: "Front, Middle et Back Office",
        html: `
<table class="tbl">
<tr><th>Fonction</th><th>Rôle</th><th>Métiers</th></tr>
<tr><td><b>Front Office</b></td><td>Génère le revenu, interface client, prise de risque</td><td>Sales, Trader, Structureur, Quant/Strat, Research</td></tr>
<tr><td><b>Middle Office</b></td><td>Contrôle le front : P&amp;L, risques, conformité, validation des deals</td><td>Risk Manager, Product Control, Trade Support, Compliance</td></tr>
<tr><td><b>Back Office</b></td><td>Traitement post-marché : confirmation, règlement-livraison, comptabilité</td><td>Settlements, Confirmations, Collatéral, Réconciliations, Corporate Actions</td></tr>
</table>
<p>Le <b>Sales</b> gère la relation client, comprend ses besoins, apporte des idées (trade ideas) et transmet les ordres au trader. Le <b>Trader</b> fixe les prix (market making), gère le risque de son <i>book</i> et couvre ses positions. Le <b>Structureur</b> conçoit des produits sur mesure (notes structurées, solutions de couverture). Le <b>Strat/Quant</b> construit les modèles de pricing et les outils.</p>
<div class="tip">Le principe de <b>séparation des tâches</b> (segregation of duties) impose que celui qui prend le risque (front) ne soit pas celui qui le valorise et le contrôle (middle/back).</div>`
      },
      {
        title: "Market making vs Agency",
        html: `
<ul>
<li><b>Principal / Market making</b> : la banque est contrepartie du client. Elle cote un <b>bid</b> (prix auquel elle achète) et un <b>ask/offer</b> (prix auquel elle vend). Elle porte le risque et gagne le spread.</li>
<li><b>Agency</b> : la banque exécute l’ordre du client sur le marché pour son compte, sans prendre de risque, contre une commission (typique en actions cash, via algorithmes VWAP/TWAP).</li>
<li><b>Flow trading</b> : traitement d’un grand volume de transactions clients standardisées. <b>Exotic trading</b> : produits complexes, moins liquides, marges plus élevées.</li>
<li>La <b>Volcker Rule</b> (US) et la réglementation européenne limitent le <b>proprietary trading</b> (trading pour compte propre sans lien avec l’activité client).</li>
</ul>
<p><b>Exemple :</b> un trader cote 99,50 / 99,60 sur une obligation. Un client vend 10 M à 99,50 : le trader est <i>long</i> et va chercher à revendre ou couvrir sa position.</p>`
      },
      {
        title: "Carnet d’ordres et types d’ordres",
        html: `
<ul>
<li><b>Carnet d’ordres</b> : liste des ordres d’achat (bids) et de vente (asks) en attente, classés par prix puis par heure.</li>
<li><b>Ordre au marché</b> : exécution immédiate au meilleur prix disponible (risque de slippage).</li>
<li><b>Ordre à cours limité</b> : exécution à un prix fixé ou meilleur.</li>
<li><b>Stop loss</b> : devient un ordre au marché lorsqu’un seuil est atteint (limite les pertes).</li>
<li><b>Fill or Kill (FOK)</b>, <b>Immediate or Cancel (IOC)</b>, <b>Good Till Cancelled (GTC)</b>.</li>
<li><b>Liquidité</b> : capacité à traiter un volume important sans faire bouger le prix. Indicateurs : spread, profondeur du carnet, volume.</li>
<li><b>Dark pools</b> : plateformes où les ordres ne sont pas affichés avant exécution (gros blocs).</li>
</ul>
<div class="tip"><b>Market maker</b> = <i>apporte</i> de la liquidité (ordres limités). <b>Market taker</b> = <i>consomme</i> la liquidité (ordres au marché).</div>`
      }
    ],
    quiz: [
      { q: "Quelle fonction est chargée de calculer et valider le P&L quotidien des traders ?", o: ["Le Sales", "Product Control (Middle Office)", "Le Structureur", "La Research"], a: 1, e: "Le Product Control (middle office) produit et explique le P&L de façon indépendante du front." },
      { q: "Un gérant d’actifs comme Amundi fait partie…", o: ["du sell-side", "du buy-side", "des infrastructures de marché", "des régulateurs"], a: 1, e: "Les gérants d’actifs achètent les services d’exécution et de liquidité des banques : ils sont buy-side." },
      { q: "Un trader cote 101,20 / 101,30. À quel prix le client peut-il ACHETER ?", o: ["101,20", "101,25", "101,30", "Au prix qu’il veut"], a: 2, e: "Le client achète à l’offer (ask) du dealer : 101,30. Le dealer achète au bid : 101,20." },
      { q: "Dans un modèle agency, la banque…", o: ["porte le risque de marché", "exécute pour le compte du client contre commission", "fait du trading pour compte propre", "émet des obligations"], a: 1, e: "En agency, la banque est intermédiaire sans prendre de position." },
      { q: "Quel ordre garantit le prix mais pas l’exécution ?", o: ["Ordre au marché", "Ordre à cours limité", "Stop loss", "Ordre IOC au marché"], a: 1, e: "L’ordre limité garantit un prix maximum (achat) ou minimum (vente), mais peut ne pas être exécuté." },
      { q: "Le principe de « segregation of duties » vise à…", o: ["séparer prise de risque et contrôle", "séparer actions et obligations", "interdire le trading électronique", "séparer clients retail et institutionnels"], a: 0, e: "Celui qui prend le risque ne doit pas pouvoir valider sa propre valorisation ni ses règlements." },
      { q: "Qui conçoit un produit de couverture sur mesure pour un client corporate ?", o: ["Le Settlements", "Le Structureur", "Le Compliance", "Le CSD"], a: 1, e: "Le structureur assemble des briques (options, swaps, obligations) en produit adapté au besoin du client." },
      { q: "Euroclear et Clearstream sont des…", o: ["bourses", "chambres de compensation", "dépositaires centraux (CSD/ICSD)", "hedge funds"], a: 2, e: "Ce sont des (I)CSD : ils tiennent les comptes titres et assurent le règlement-livraison." },
      { q: "Un market maker…", o: ["consomme la liquidité", "apporte de la liquidité en cotant bid et ask", "ne prend jamais de risque", "n’opère que sur les dark pools"], a: 1, e: "Il cote en permanence des prix à l’achat et à la vente." },
      { q: "La Volcker Rule restreint principalement…", o: ["le trading pour compte propre des banques US", "les ventes à découvert", "le trading haute fréquence", "les introductions en bourse"], a: 0, e: "Elle limite le proprietary trading et certains investissements dans les hedge funds." }
    ],
    flashcards: [
      ["Bid", "Prix auquel le market maker est prêt à ACHETER."],
      ["Ask / Offer", "Prix auquel le market maker est prêt à VENDRE."],
      ["Spread", "Ask − Bid : rémunération du market maker et mesure de liquidité."],
      ["Book", "Ensemble des positions d’un trader ou d’un desk."],
      ["Axe", "Intérêt d’un trader à acheter ou vendre un titre précis (il fera un meilleur prix dans ce sens)."],
      ["Slippage", "Écart entre le prix attendu et le prix réellement obtenu."],
      ["Flow vs Exotics", "Flow : produits standards à fort volume. Exotics : produits complexes, peu liquides."],
      ["Sales trader", "Sales qui gère l’exécution des ordres clients (souvent en actions) en lien direct avec le marché."]
    ]
  },

  /* ---------------------------------------------------- */
  {
    id: "taux",
    title: "Taux & Obligations",
    icon: "fa-chart-line",
    color: "#0ea5e9",
    level: "Intermédiaire",
    summary: "Prix/rendement, duration, convexité, DV01, courbe des taux, swaps, repo et banques centrales.",
    lessons: [
      {
        title: "Prix et rendement d’une obligation",
        html: `
<p>Une obligation verse des <b>coupons</b> et rembourse le <b>nominal</b> à maturité. Son prix = somme des flux actualisés au taux de rendement (yield) :</p>
<div class="formula">P = Σ C/(1+y)<sup>t</sup> + N/(1+y)<sup>T</sup></div>
<ul>
<li><b>Relation inverse</b> : quand les taux montent, le prix baisse (et inversement).</li>
<li>Coupon &gt; yield → obligation <b>au-dessus du pair</b> (prix &gt; 100). Coupon &lt; yield → <b>sous le pair</b>.</li>
<li><b>Yield to Maturity (YTM)</b> : taux actuariel si l’on garde le titre jusqu’à l’échéance et réinvestit les coupons au même taux.</li>
<li><b>Prix pied de coupon (clean)</b> vs <b>prix plein coupon (dirty)</b> = clean + coupon couru (accrued interest).</li>
<li>Les prix se cotent en % du nominal. 1 point de base (<b>bp</b>) = 0,01 %.</li>
</ul>`
      },
      {
        title: "Duration, DV01 et convexité",
        html: `
<ul>
<li><b>Duration de Macaulay</b> : durée de vie moyenne pondérée des flux (en années). Un zéro-coupon a une duration égale à sa maturité.</li>
<li><b>Duration modifiée</b> = Macaulay / (1+y). Variation de prix (%) ≈ − D<sub>mod</sub> × Δy.</li>
<li><b>DV01 / PV01</b> : variation de valeur (en €) pour 1 bp de hausse des taux. DV01 ≈ D<sub>mod</sub> × Valeur × 0,0001.</li>
<li><b>Convexité</b> : courbure de la relation prix/taux. Une obligation classique a une convexité positive : elle gagne plus quand les taux baissent qu’elle ne perd quand ils montent.</li>
<li>La duration augmente avec la maturité et diminue quand le coupon ou le yield augmentent.</li>
</ul>
<div class="example"><b>Exemple :</b> 10 M€ d’une obligation de duration modifiée 7. DV01 ≈ 7 × 10 000 000 × 0,0001 = <b>7 000 € par bp</b>. Si les taux montent de 20 bp → perte ≈ 140 000 €.</div>`
      },
      {
        title: "La courbe des taux",
        html: `
<ul>
<li>Courbe = rendements en fonction de la maturité (2 ans, 5 ans, 10 ans, 30 ans…).</li>
<li><b>Normale (pentue)</b> : taux longs &gt; taux courts (prime de terme).</li>
<li><b>Inversée</b> : taux courts &gt; taux longs → souvent anticipation de baisses de taux / récession.</li>
<li><b>Steepening</b> : la pente augmente. <b>Flattening</b> : elle diminue. <i>Bull</i> = taux baissent, <i>Bear</i> = taux montent (ex : bull steepening = taux courts baissent plus vite que les longs).</li>
<li>Le court terme est piloté par la <b>banque centrale</b> (taux directeurs), le long terme par les anticipations de croissance, d’inflation et la prime de terme.</li>
<li><b>Trade de pente</b> : long 2 ans / short 10 ans pondérés en DV01 pour parier sur un steepening, neutre aux mouvements parallèles.</li>
</ul>
<div class="tip"><b>Spreads souverains :</b> OAT-Bund, BTP-Bund mesurent le risque perçu d’un pays par rapport à l’Allemagne.</div>`
      },
      {
        title: "Swaps de taux, repo et taux de référence",
        html: `
<ul>
<li><b>Interest Rate Swap (IRS)</b> : échange de flux fixe contre flux variable sur un notionnel (non échangé). <i>Payer</i> le fixe = gagner si les taux montent.</li>
<li>Taux de référence : <b>€STR</b> (euro), <b>SOFR</b> (USD), <b>SONIA</b> (GBP). Le LIBOR USD a cessé d’être publié en juin 2023 ; l’EURIBOR existe toujours.</li>
<li><b>Swap spread</b> = taux swap − taux souverain de même maturité.</li>
<li><b>Repo</b> : vente d’un titre avec engagement de rachat → prêt de cash garanti par un collatéral. La <b>décote (haircut)</b> protège le prêteur. Reverse repo = l’inverse.</li>
<li><b>Futures de taux</b> : Bund, OAT, Treasury futures ; <b>CTD</b> = cheapest to deliver.</li>
<li>Outils des banques centrales : taux directeurs (taux de dépôt BCE, Fed Funds), QE/QT, forward guidance.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "Si les taux d’intérêt montent, le prix d’une obligation à taux fixe…", o: ["monte", "baisse", "ne change pas", "dépend du coupon uniquement"], a: 1, e: "Les flux futurs sont actualisés à un taux plus élevé : leur valeur présente diminue." },
      { q: "Une obligation a un coupon de 5 % et un rendement de marché de 3 %. Elle cote…", o: ["au pair", "au-dessus du pair", "sous le pair", "à zéro"], a: 1, e: "Coupon > yield : l’investisseur paie une prime pour un coupon supérieur au marché." },
      { q: "Quelle est la duration de Macaulay d’un zéro-coupon de 8 ans ?", o: ["4 ans", "8 ans", "Moins de 8 ans", "Plus de 8 ans"], a: 1, e: "Un seul flux à 8 ans : la duration est égale à la maturité." },
      { q: "Position de 20 M€, duration modifiée 5. DV01 ≈ ?", o: ["1 000 €", "10 000 €", "100 000 €", "5 000 €"], a: 1, e: "5 × 20 000 000 × 0,0001 = 10 000 € par bp." },
      { q: "Une courbe inversée signifie que…", o: ["les taux longs sont supérieurs aux courts", "les taux courts sont supérieurs aux longs", "tous les taux sont négatifs", "l’inflation est nulle"], a: 1, e: "Inversion = court > long, souvent signal d’anticipation de récession et de baisses de taux." },
      { q: "Le « bull steepening » correspond à…", o: ["taux courts qui baissent plus que les longs", "taux longs qui montent plus que les courts", "taux courts qui montent plus que les longs", "taux qui baissent uniformément"], a: 0, e: "Bull = taux en baisse ; steepening = la pente augmente : les courts baissent davantage." },
      { q: "Un client qui « paie le fixe » dans un swap de taux gagne si…", o: ["les taux montent", "les taux baissent", "les taux ne bougent pas", "le spread de crédit s’élargit"], a: 0, e: "Il paie un taux fixe et reçoit un variable qui augmente si les taux montent." },
      { q: "Quel taux a remplacé le LIBOR USD ?", o: ["€STR", "SONIA", "SOFR", "EURIBOR"], a: 2, e: "Le SOFR (Secured Overnight Financing Rate) est le taux de référence USD." },
      { q: "Dans un repo, le haircut…", o: ["est la commission du broker", "protège le prêteur de cash contre la baisse du collatéral", "est le coupon de l’obligation", "est imposé par la BCE uniquement"], a: 1, e: "La décote fait que le cash prêté est inférieur à la valeur du collatéral." },
      { q: "La convexité positive implique que…", o: ["l’obligation gagne plus si les taux baissent qu’elle ne perd s’ils montent du même montant", "le prix est linéaire au taux", "la duration est négative", "l’obligation est callable"], a: 0, e: "La courbure prix/taux joue en faveur du porteur." },
      { q: "Pour parier sur un aplatissement (flattener) neutre en duration, on…", o: ["achète le 2 ans et vend le 10 ans", "vend le 2 ans et achète le 10 ans, pondérés DV01", "achète les deux", "vend les deux"], a: 1, e: "Flattener : les taux longs baissent relativement → long 10 ans, short 2 ans, pondéré en DV01." },
      { q: "Prix dirty =", o: ["prix clean − coupon couru", "prix clean + coupon couru", "nominal + coupon", "prix au pair"], a: 1, e: "L’acheteur paie au vendeur le coupon couru depuis le dernier détachement." }
    ],
    flashcards: [
      ["Point de base (bp)", "0,01 % — unité de mesure des taux et spreads."],
      ["Duration modifiée", "Sensibilité du prix : ΔP/P ≈ −Dmod × Δy."],
      ["DV01", "Variation de valeur en € pour +1 bp de taux."],
      ["Convexité", "Courbure de la relation prix/taux ; positive pour une obligation classique."],
      ["IRS", "Swap de taux : fixe contre variable sur un notionnel."],
      ["€STR / SOFR", "Taux overnight de référence en euro / dollar."],
      ["Repo", "Prêt de cash garanti par des titres, avec rachat à terme."],
      ["CTD", "Cheapest To Deliver : titre le moins cher à livrer dans un future obligataire."],
      ["QE / QT", "Quantitative Easing (achats d’actifs) / Tightening (réduction du bilan)."]
    ]
  },

  /* ---------------------------------------------------- */
  {
    id: "fx",
    title: "Change (FX)",
    icon: "fa-money-bill-transfer",
    color: "#10b981",
    level: "Intermédiaire",
    summary: "Cotations, pips, spot, forward, parité des taux couverte, swaps FX, carry trade, NDF.",
    lessons: [
      {
        title: "Lire une cotation FX",
        html: `
<ul>
<li><b>EUR/USD = 1,0850</b> : 1 euro (devise <b>de base</b>) vaut 1,0850 dollar (devise <b>de cotation</b>).</li>
<li>Si EUR/USD monte, l’euro s’apprécie face au dollar.</li>
<li><b>Pip</b> : 4<sup>e</sup> décimale (0,0001), sauf paires en JPY (0,01). Sur 1 M EUR/USD, 1 pip = 100 USD.</li>
<li><b>Majors</b> : EUR/USD, USD/JPY, GBP/USD, USD/CHF, AUD/USD, USD/CAD. <b>Crosses</b> : EUR/GBP, EUR/JPY. <b>Émergents</b> : USD/ZAR, USD/NGN, EUR/XOF…</li>
<li>Le <b>FCFA (XOF)</b> est arrimé à l’euro : 1 EUR = 655,957 XOF (parité fixe).</li>
<li>Le marché FX est le plus grand marché du monde (≈ 7 500 Md$ par jour selon l’enquête BRI 2022), essentiellement de gré à gré (OTC), ouvert 24h/5j.</li>
<li><b>Spot</b> : règlement en <b>T+2</b> (T+1 pour USD/CAD).</li>
</ul>`
      },
      {
        title: "Forwards et parité des taux couverte",
        html: `
<p>Un <b>forward</b> fixe aujourd’hui un taux de change pour une date future. Il découle d’un arbitrage :</p>
<div class="formula">F = S × (1 + i<sub>cotation</sub> × t) / (1 + i<sub>base</sub> × t)</div>
<ul>
<li>La devise au taux d’intérêt <b>le plus élevé</b> cote avec un <b>report/déport</b> : elle est moins chère à terme (forward discount).</li>
<li><b>Points de terme</b> (forward points) = F − S.</li>
<li>Ce n’est <b>pas</b> une prévision du spot futur : c’est un résultat d’arbitrage (Covered Interest Parity).</li>
</ul>
<div class="example"><b>Exemple :</b> S EUR/USD = 1,10 ; taux USD 4 % ; taux EUR 2 % ; 1 an. F = 1,10 × 1,04 / 1,02 ≈ <b>1,1216</b>. L’euro (taux plus bas) s’apprécie à terme.</div>`
      },
      {
        title: "Swaps FX, NDF et carry trade",
        html: `
<ul>
<li><b>FX swap</b> : achat spot + vente forward (ou inverse) de la même devise. Outil majeur de financement et de gestion de trésorerie.</li>
<li><b>Cross-currency swap</b> : échange de flux d’intérêts et de nominal dans deux devises sur plusieurs années.</li>
<li><b>NDF (Non-Deliverable Forward)</b> : forward réglé en différence dans une devise convertible (USD) pour les devises non convertibles ou contrôlées (INR, BRL, CNY offshore…).</li>
<li><b>Carry trade</b> : emprunter dans une devise à taux bas (JPY, CHF) pour investir dans une devise à taux élevé. Gagne si le change est stable ; risque de débouclage brutal.</li>
<li><b>Options FX</b> : un exportateur européen qui reçoit des USD achète un put USD/call EUR pour se protéger d’une baisse du dollar.</li>
</ul>
<div class="tip"><b>Drivers du FX :</b> différentiel de taux, croissance, balance courante, flux de capitaux, appétit pour le risque (USD, JPY, CHF = valeurs refuges).</div>`
      }
    ],
    quiz: [
      { q: "EUR/USD passe de 1,08 à 1,10. Que s’est-il passé ?", o: ["L’euro s’est déprécié", "L’euro s’est apprécié face au dollar", "Le dollar s’est apprécié", "Rien"], a: 1, e: "Il faut plus de dollars pour 1 euro : l’euro s’apprécie." },
      { q: "Sur 1 M EUR/USD, combien vaut 1 pip ?", o: ["10 USD", "100 USD", "1 000 USD", "1 USD"], a: 1, e: "1 000 000 × 0,0001 = 100 USD." },
      { q: "Le règlement d’un spot EUR/USD se fait en…", o: ["T+0", "T+1", "T+2", "T+5"], a: 2, e: "Le spot FX standard se règle en T+2 (USD/CAD en T+1)." },
      { q: "Taux USD 5 %, taux JPY 0,5 %. À terme, le USD vs JPY cote…", o: ["avec une prime (plus cher)", "avec un déport (moins cher)", "au même niveau", "impossible à dire"], a: 1, e: "La devise au taux le plus élevé est moins chère à terme : le forward USD/JPY est sous le spot." },
      { q: "Un NDF est utilisé pour…", o: ["les devises non convertibles ou contrôlées", "les actions", "le marché repo", "les métaux précieux"], a: 0, e: "Il est réglé en différence dans une devise convertible, sans livraison de la devise locale." },
      { q: "Un exportateur français qui recevra des USD dans 6 mois craint…", o: ["une hausse du USD", "une baisse du USD (hausse de EUR/USD)", "une hausse des taux", "une baisse de l’or"], a: 1, e: "S’il reçoit des USD, une baisse du dollar réduit ses euros encaissés ; il vend des USD à terme." },
      { q: "Le carry trade consiste à…", o: ["emprunter dans une devise à taux bas pour placer dans une devise à taux élevé", "acheter de l’or", "vendre des options", "acheter des obligations longues"], a: 0, e: "On capte le différentiel de taux, avec un risque de change." },
      { q: "Parité fixe EUR/XOF :", o: ["1 EUR = 600 XOF", "1 EUR = 655,957 XOF", "1 EUR = 700 XOF", "flottante"], a: 1, e: "Le franc CFA UEMOA est arrimé à l’euro à 655,957." },
      { q: "Le forward FX est…", o: ["une prévision du spot futur", "le résultat de l’arbitrage entre taux d’intérêt", "fixé par la banque centrale", "toujours égal au spot"], a: 1, e: "C’est la parité des taux d’intérêt couverte, pas une prévision." },
      { q: "Un FX swap combine…", o: ["deux options", "une opération spot et une opération forward inverse", "un swap de taux et une obligation", "deux futures"], a: 1, e: "Ex : achat EUR spot / vente EUR à terme." }
    ],
    flashcards: [
      ["Devise de base", "Première devise de la paire (EUR dans EUR/USD)."],
      ["Pip", "0,0001 (ou 0,01 pour les paires JPY)."],
      ["Forward points", "Différence F − S, reflet du différentiel de taux."],
      ["CIP", "Covered Interest Parity : F = S × (1+i_cot)/(1+i_base)."],
      ["NDF", "Forward réglé en cash pour devise non convertible."],
      ["Carry trade", "Financer en devise à bas taux, investir en devise à haut taux."],
      ["Safe havens", "USD, JPY, CHF (et l’or) en période d’aversion au risque."],
      ["Fixing WM/Reuters", "Taux de référence calculé à 16h Londres, utilisé pour valoriser des portefeuilles."]
    ]
  },

  /* ---------------------------------------------------- */
  {
    id: "actions",
    title: "Actions (Equities)",
    icon: "fa-arrow-trend-up",
    color: "#f59e0b",
    level: "Débutant",
    summary: "Valorisation, multiples, indices, dividendes, delta one, prime brokerage, blocs et ECM.",
    lessons: [
      {
        title: "Valoriser une action",
        html: `
<ul>
<li><b>Capitalisation</b> = cours × nombre d’actions. <b>Enterprise Value (EV)</b> = capitalisation + dette nette (+ intérêts minoritaires…).</li>
<li><b>P/E (PER)</b> = cours / BPA : combien on paie 1 € de bénéfice. Élevé = croissance attendue ou survalorisation.</li>
<li><b>EV/EBITDA</b> : multiple indépendant de la structure financière, utile pour comparer.</li>
<li><b>Dividend yield</b> = dividende / cours.</li>
<li><b>DCF</b> : actualisation des free cash flows futurs au WACC.</li>
<li><b>Bêta</b> : sensibilité au marché (β &gt; 1 = plus volatil que l’indice).</li>
</ul>
<div class="tip"><b>Pitch d’action :</b> thèse (pourquoi le marché se trompe), catalyseurs (résultats, produit, M&amp;A), valorisation (multiples vs pairs), risques, niveau d’entrée/objectif/stop.</div>`
      },
      {
        title: "Indices, dividendes et événements",
        html: `
<ul>
<li>Indices : CAC 40, Euro Stoxx 50, DAX, S&amp;P 500, Nasdaq 100, Nikkei 225, MSCI World, BRVM Composite.</li>
<li>Pondération par capitalisation (flottante) pour la plupart ; le Dow Jones et le Nikkei sont pondérés par les prix.</li>
<li><b>Dates du dividende</b> : date de détachement (ex-date : le cours baisse du montant du dividende), date d’enregistrement (record), date de paiement.</li>
<li><b>Opérations sur titres</b> : split (division du nominal), augmentation de capital avec DPS, rachat d’actions (buyback), OPA.</li>
<li><b>ECM</b> : IPO, placements accélérés (ABB), blocs. Le desk propose des <b>block trades</b> en risque (achat du bloc avec décote).</li>
</ul>`
      },
      {
        title: "Delta one, prime brokerage et dérivés actions",
        html: `
<ul>
<li><b>Delta one</b> : produits dont la valeur évolue 1 pour 1 avec le sous-jacent : futures sur indices, <b>total return swaps (TRS)</b>, ETF, prêt-emprunt de titres.</li>
<li><b>Short selling</b> : vendre un titre emprunté pour le racheter moins cher ; coût d’emprunt (borrow fee).</li>
<li><b>Prime brokerage</b> : services aux hedge funds : financement, prêt de titres, compensation, levier.</li>
<li><b>Dérivés actions</b> : options listées et OTC, produits structurés (autocalls, reverse convertibles), dérivés de dividendes, variance swaps.</li>
<li><b>Exécution</b> : algos VWAP, TWAP, POV, Implementation Shortfall ; <b>best execution</b> imposée par MiFID II.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "Le P/E se calcule comme…", o: ["Cours / Bénéfice par action", "Bénéfice / Chiffre d’affaires", "Dette / Fonds propres", "Dividende / Cours"], a: 0, e: "Price-to-Earnings = cours ÷ BPA." },
      { q: "À la date de détachement du dividende, le cours…", o: ["monte du montant du dividende", "baisse environ du montant du dividende", "ne change pas", "est suspendu"], a: 1, e: "L’acheteur après l’ex-date ne touche plus le dividende : la valeur baisse d’autant." },
      { q: "Une action de bêta 1,5 quand le marché monte de 2 % monte en moyenne de…", o: ["1,5 %", "2 %", "3 %", "0,5 %"], a: 2, e: "1,5 × 2 % = 3 %." },
      { q: "Lequel est un produit delta one ?", o: ["Un straddle", "Un total return swap sur indice", "Une option digitale", "Un CDS"], a: 1, e: "Le TRS réplique 1 pour 1 la performance du sous-jacent." },
      { q: "EV =", o: ["Capitalisation − dette nette", "Capitalisation + dette nette", "Fonds propres comptables", "Chiffre d’affaires × 10"], a: 1, e: "Enterprise Value = valeur des fonds propres + dette nette (approche simplifiée)." },
      { q: "Le prime brokerage s’adresse surtout…", o: ["aux particuliers", "aux hedge funds", "aux banques centrales", "aux PME"], a: 1, e: "Financement, prêt de titres et compensation pour les hedge funds." },
      { q: "Un algorithme VWAP cherche à…", o: ["exécuter au prix moyen pondéré par les volumes", "acheter au plus bas de la journée", "exécuter instantanément", "manipuler le cours"], a: 0, e: "Volume Weighted Average Price : on suit le profil de volume de la journée." },
      { q: "Le CAC 40 est pondéré…", o: ["par les prix", "par la capitalisation flottante", "de manière égale", "par le chiffre d’affaires"], a: 1, e: "Comme la plupart des indices modernes." },
      { q: "Vendre à découvert implique…", o: ["d’emprunter le titre", "d’acheter une option", "de détenir le titre", "d’émettre des actions"], a: 0, e: "On emprunte les titres à vendre et on paie un coût d’emprunt." }
    ],
    flashcards: [
      ["P/E", "Cours / BPA."],
      ["EV/EBITDA", "Multiple de valorisation indépendant de la structure de financement."],
      ["Ex-date", "Date à partir de laquelle l’action cote sans le dividende."],
      ["Delta one", "Produits à exposition linéaire au sous-jacent (futures, TRS, ETF)."],
      ["ABB", "Accelerated Bookbuilding : placement rapide de titres auprès d’investisseurs."],
      ["Short squeeze", "Hausse brutale forçant les vendeurs à découvert à racheter."],
      ["Best execution", "Obligation MiFID II d’obtenir le meilleur résultat pour le client."],
      ["Autocall", "Produit structuré remboursé par anticipation si le sous-jacent dépasse un seuil à une date d’observation."]
    ]
  },

  /* ---------------------------------------------------- */
  {
    id: "options",
    title: "Dérivés & Options",
    icon: "fa-diagram-project",
    color: "#ec4899",
    level: "Avancé",
    summary: "Forwards/futures, calls & puts, parité call-put, Black-Scholes, grecques, volatilité et stratégies.",
    lessons: [
      {
        title: "Forwards, futures et options",
        html: `
<ul>
<li><b>Forward</b> : contrat OTC d’achat/vente à terme à un prix fixé. <b>Future</b> : version standardisée, cotée, compensée, avec appels de marge quotidiens.</li>
<li><b>Call</b> : droit (pas obligation) d’<b>acheter</b> au strike K. Payoff = max(S − K, 0).</li>
<li><b>Put</b> : droit de <b>vendre</b> au strike K. Payoff = max(K − S, 0).</li>
<li><b>Européenne</b> : exerçable à l’échéance seulement. <b>Américaine</b> : à tout moment.</li>
<li><b>Valeur intrinsèque</b> + <b>valeur temps</b> = prime. ITM / ATM / OTM.</li>
<li>L’acheteur paie une prime, sa perte est limitée à la prime. Le vendeur encaisse la prime et a un risque potentiellement illimité (call vendu).</li>
</ul>
<div class="formula">Parité call-put : C − P = S − K·e<sup>−rT</sup></div>`
      },
      {
        title: "Black-Scholes et les grecques",
        html: `
<p>Black-Scholes donne le prix d’une option européenne à partir de : S, K, T, r, dividendes, et <b>σ (volatilité)</b> — seule donnée non observable.</p>
<table class="tbl">
<tr><th>Grecque</th><th>Mesure</th><th>Long call</th></tr>
<tr><td><b>Delta</b> Δ</td><td>Sensibilité au sous-jacent (≈ proba ITM). ATM ≈ 0,5</td><td>+ (0 à 1)</td></tr>
<tr><td><b>Gamma</b> Γ</td><td>Variation du delta ; maximal ATM proche de l’échéance</td><td>+</td></tr>
<tr><td><b>Vega</b> ν</td><td>Sensibilité à la volatilité ; maximal ATM longue maturité</td><td>+</td></tr>
<tr><td><b>Theta</b> Θ</td><td>Érosion du temps</td><td>− (on perd chaque jour)</td></tr>
<tr><td><b>Rho</b> ρ</td><td>Sensibilité aux taux</td><td>+</td></tr>
</table>
<div class="tip"><b>Règle rapide :</b> option ATM ≈ 0,4 × σ × √T × S. Ex : S=100, σ=20 %, T=1 an → ≈ 8.</div>
<p><b>Long gamma / short theta</b> : l’acheteur d’options gagne quand le marché bouge beaucoup (delta-hedging gagnant) mais paie le temps. Le vendeur fait l’inverse.</p>`
      },
      {
        title: "Volatilité : implicite, réalisée, smile",
        html: `
<ul>
<li><b>Volatilité réalisée</b> : écart-type annualisé des rendements passés.</li>
<li><b>Volatilité implicite</b> : vol qui, dans Black-Scholes, redonne le prix de marché. C’est le « prix » des options.</li>
<li><b>Smile / skew</b> : la vol implicite varie selon le strike. En actions, les puts OTM ont une vol plus élevée (skew) car la demande de protection est forte et les krachs sont brutaux.</li>
<li><b>Structure par terme</b> de la vol ; <b>VIX</b> = vol implicite à 30 jours du S&amp;P 500 (« indice de la peur »).</li>
<li>Annualiser : σ<sub>jour</sub> ≈ σ<sub>an</sub> / √252 ≈ σ<sub>an</sub> / 16.</li>
</ul>`
      },
      {
        title: "Stratégies optionnelles",
        html: `
<table class="tbl">
<tr><th>Stratégie</th><th>Construction</th><th>Vue</th></tr>
<tr><td>Covered call</td><td>Long action + short call</td><td>Neutre à légèrement haussier, génère du revenu</td></tr>
<tr><td>Protective put</td><td>Long action + long put</td><td>Assurance contre la baisse</td></tr>
<tr><td>Bull call spread</td><td>Long call K1 + short call K2 (K2&gt;K1)</td><td>Haussier modéré, prime réduite</td></tr>
<tr><td>Straddle</td><td>Long call + long put même strike</td><td>Long volatilité, mouvement fort attendu</td></tr>
<tr><td>Strangle</td><td>Long call OTM + long put OTM</td><td>Long vol, moins cher que le straddle</td></tr>
<tr><td>Butterfly</td><td>Long K1, short 2×K2, long K3</td><td>Marché stable autour de K2</td></tr>
<tr><td>Collar</td><td>Long put + short call (+ action)</td><td>Protection financée</td></tr>
<tr><td>Risk reversal</td><td>Long call OTM + short put OTM</td><td>Haussier, exposition au skew</td></tr>
</table>`
      }
    ],
    quiz: [
      { q: "Le payoff d’un call à l’échéance est…", o: ["max(K − S, 0)", "max(S − K, 0)", "S − K", "K"], a: 1, e: "L’acheteur exerce si S > K." },
      { q: "Le delta d’un call ATM est environ…", o: ["0", "0,25", "0,5", "1"], a: 2, e: "Environ 0,5 (un peu plus avec le drift)." },
      { q: "Le gamma est maximal pour une option…", o: ["très ITM, longue maturité", "ATM proche de l’échéance", "très OTM", "indépendant du strike"], a: 1, e: "Le delta change très vite autour du strike quand l’échéance approche." },
      { q: "Un long straddle est…", o: ["long vol, long gamma, short theta", "short vol, short gamma, long theta", "delta très positif", "sans risque"], a: 0, e: "On achète deux options : on paie le temps mais on gagne sur les gros mouvements." },
      { q: "S=100, σ=20 %, T=1 an, prix approximatif d’un call ATM ?", o: ["2", "4", "8", "20"], a: 2, e: "0,4 × 0,20 × 1 × 100 = 8." },
      { q: "Parité call-put : C − P =", o: ["K − S", "S − K·e^(−rT)", "S + K", "0"], a: 1, e: "Un call long + put short = forward synthétique." },
      { q: "Une vol annuelle de 32 % correspond à une vol journalière d’environ…", o: ["0,5 %", "1 %", "2 %", "3,2 %"], a: 2, e: "32 % / 16 ≈ 2 %." },
      { q: "En actions, le skew signifie que…", o: ["les calls OTM sont plus chers en vol", "les puts OTM ont une vol implicite plus élevée", "la vol est plate", "la vol est négative"], a: 1, e: "La demande de protection contre les baisses renchérit les puts." },
      { q: "Le vendeur d’un call nu a un risque…", o: ["limité à la prime", "potentiellement illimité", "nul", "limité au strike"], a: 1, e: "Le sous-jacent peut monter sans limite." },
      { q: "La différence clé entre future et forward :", o: ["le future est OTC", "le future est standardisé, coté et compensé avec marge quotidienne", "le forward a des appels de marge", "aucune"], a: 1, e: "Le future passe par une chambre de compensation." },
      { q: "Le vega d’une option longue est…", o: ["négatif", "positif", "nul", "toujours égal au delta"], a: 1, e: "Une hausse de vol augmente la valeur des options achetées." },
      { q: "Un client veut une protection à la baisse sans payer de prime. On propose…", o: ["un straddle", "un collar zéro coût (long put, short call)", "un call", "un butterfly"], a: 1, e: "La prime du call vendu finance le put acheté, en abandonnant une partie de la hausse." }
    ],
    flashcards: [
      ["Delta", "∂V/∂S : sensibilité au sous-jacent, ratio de couverture."],
      ["Gamma", "∂²V/∂S² : vitesse de variation du delta."],
      ["Vega", "Sensibilité à 1 point de volatilité implicite."],
      ["Theta", "Perte de valeur quotidienne liée au passage du temps."],
      ["Vol implicite", "Volatilité qui redonne le prix de marché dans Black-Scholes."],
      ["VIX", "Vol implicite 30 jours du S&P 500."],
      ["Straddle", "Call + put même strike : pari sur la volatilité."],
      ["Règle des 16", "σ journalière ≈ σ annuelle / 16 (√256)."],
      ["Delta hedging", "Neutraliser le delta en traitant le sous-jacent ; un long gamma achète bas / vend haut."]
    ]
  },

  /* ---------------------------------------------------- */
  {
    id: "credit",
    title: "Crédit",
    icon: "fa-shield-halved",
    color: "#8b5cf6",
    level: "Intermédiaire",
    summary: "Spreads, notations, Investment Grade vs High Yield, CDS, indices iTraxx/CDX, séniorité.",
    lessons: [
      {
        title: "Risque de crédit et spreads",
        html: `
<ul>
<li><b>Spread de crédit</b> = rendement de l’obligation − taux sans risque (ou swap) de même maturité. Rémunère le risque de défaut et la liquidité.</li>
<li><b>Notations</b> (S&amp;P/Fitch) : AAA à BBB− = <b>Investment Grade</b> ; BB+ et en dessous = <b>High Yield</b> (spéculatif). Moody’s : Aaa à Baa3.</li>
<li><b>Fallen angel</b> : émetteur passé d’IG à HY.</li>
<li><b>Perte attendue</b> = PD × LGD × EAD. Spread ≈ PD × (1 − taux de recouvrement).</li>
<li><b>Séniorité</b> : senior secured &gt; senior unsecured &gt; subordonnée &gt; actions.</li>
<li>Mesures de spread : G-spread, I-spread, Z-spread, OAS (obligations avec options).</li>
</ul>`
      },
      {
        title: "CDS et indices de crédit",
        html: `
<ul>
<li><b>Credit Default Swap</b> : l’<b>acheteur de protection</b> paie une prime périodique ; s’il y a un <b>événement de crédit</b> (défaut, restructuration), le vendeur lui verse (100 − recouvrement).</li>
<li>Acheter de la protection = être <b>short crédit</b> (on gagne si le crédit se dégrade). Vendre de la protection = long crédit.</li>
<li><b>Indices</b> : iTraxx Europe (IG), iTraxx Crossover (HY), CDX IG/HY (US).</li>
<li><b>Basis CDS</b> = spread CDS − spread obligataire.</li>
<li>Événements de crédit décidés par les <b>Determinations Committees</b> de l’ISDA.</li>
</ul>
<div class="example">Un client détient 10 M d’obligations d’une entreprise et craint une dégradation : il achète 10 M de protection CDS 5 ans.</div>`
      }
    ],
    quiz: [
      { q: "BBB− chez S&P est…", o: ["High Yield", "le dernier cran Investment Grade", "en défaut", "AAA"], a: 1, e: "BBB− est la dernière note IG ; BB+ est la première HY." },
      { q: "Acheter de la protection CDS revient à être…", o: ["long crédit", "short crédit", "long taux", "neutre"], a: 1, e: "On gagne si le spread s’élargit ou en cas de défaut." },
      { q: "Un spread de crédit qui s’élargit signifie…", o: ["un risque perçu en hausse", "un risque perçu en baisse", "une hausse du prix de l’obligation", "une meilleure notation"], a: 0, e: "Les investisseurs demandent plus de rémunération." },
      { q: "Perte attendue =", o: ["PD × LGD × EAD", "PD + LGD", "Spread × Duration", "Coupon − Taux"], a: 0, e: "Probabilité de défaut × perte en cas de défaut × exposition." },
      { q: "Un « fallen angel » est…", o: ["un émetteur rétrogradé d’IG à HY", "une start-up", "une obligation perpétuelle", "un CDS"], a: 0, e: "Les ventes forcées de fonds IG créent souvent des opportunités." },
      { q: "En cas de défaut, quel créancier est remboursé en premier ?", o: ["Actionnaire", "Subordonné", "Senior secured", "Hybride"], a: 2, e: "Les créanciers garantis sont prioritaires." },
      { q: "Spread 200 bp, recouvrement 40 %. PD annuelle implicite ≈ ?", o: ["2 %", "3,3 %", "5 %", "0,8 %"], a: 1, e: "PD ≈ spread / (1 − R) = 2 % / 0,6 ≈ 3,3 %." },
      { q: "L’iTraxx Crossover regroupe…", o: ["des émetteurs européens High Yield", "des souverains AAA", "des actions US", "des devises"], a: 0, e: "C’est l’indice CDS européen HY le plus liquide." }
    ],
    flashcards: [
      ["Investment Grade", "Note ≥ BBB− (S&P/Fitch) ou ≥ Baa3 (Moody’s)."],
      ["High Yield", "Note ≤ BB+ : spéculatif, spread élevé."],
      ["CDS", "Assurance contre le défaut d’un émetteur."],
      ["LGD", "Loss Given Default = 1 − taux de recouvrement."],
      ["Z-spread", "Spread constant ajouté à la courbe zéro pour retrouver le prix."],
      ["iTraxx / CDX", "Indices de CDS européens / américains."],
      ["Basis CDS", "Spread CDS − spread de l’obligation."]
    ]
  },

  /* ---------------------------------------------------- */
  {
    id: "commo",
    title: "Matières premières",
    icon: "fa-oil-well",
    color: "#ef4444",
    level: "Intermédiaire",
    summary: "Énergie, métaux, agricoles, futures, contango/backwardation, roll yield et couverture.",
    lessons: [
      {
        title: "Marchés et futures de commodities",
        html: `
<ul>
<li>Catégories : <b>énergie</b> (Brent, WTI, gaz naturel TTF/Henry Hub), <b>métaux précieux</b> (or, argent), <b>métaux de base</b> (cuivre, aluminium — LME), <b>agricoles</b> (blé, cacao, café, coton).</li>
<li>Négociation majoritairement via <b>futures</b> (ICE, CME/NYMEX, LME) et swaps OTC.</li>
<li><b>Contango</b> : futures &gt; spot (coûts de stockage, financement). Un investisseur long qui « roule » ses futures perd (roll yield négatif).</li>
<li><b>Backwardation</b> : futures &lt; spot (pénurie, convenience yield élevé). Roll yield positif.</li>
<li>Prix forward ≈ S × e<sup>(r + coût de stockage − convenience yield)T</sup>.</li>
</ul>
<div class="tip">L’Afrique de l’Ouest est au cœur du marché du <b>cacao</b> (Côte d’Ivoire, Ghana) : un bon exemple de commodity agricole très volatile en entretien.</div>`
      },
      {
        title: "Clients et couverture",
        html: `
<ul>
<li><b>Producteurs</b> (compagnies pétrolières, mines, coopératives) : vendent à terme pour sécuriser leurs revenus.</li>
<li><b>Consommateurs</b> (compagnies aériennes, industriels) : achètent à terme ou des calls pour plafonner leurs coûts.</li>
<li>L’<b>or</b> : valeur refuge, inversement corrélé aux taux réels et au dollar.</li>
<li>Drivers : OPEP+, stocks (rapport EIA), géopolitique, météo, demande chinoise, dollar.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "En contango, les prix futures sont…", o: ["inférieurs au spot", "supérieurs au spot", "égaux au spot", "négatifs"], a: 1, e: "Coûts de portage (stockage, financement) intégrés dans le prix à terme." },
      { q: "Une compagnie aérienne qui craint la hausse du kérosène…", o: ["vend des futures", "achète des futures ou des calls", "achète des puts", "ne fait rien"], a: 1, e: "Elle se couvre contre une hausse de ses coûts." },
      { q: "En backwardation, le roll yield d’une position longue est…", o: ["négatif", "positif", "nul", "indéterminé"], a: 1, e: "On revend le contrat proche plus cher et rachète le suivant moins cher." },
      { q: "L’or tend à monter quand…", o: ["les taux réels baissent", "les taux réels montent", "le dollar s’apprécie fortement", "les marchés sont euphoriques"], a: 0, e: "L’or ne verse pas de coupon : son coût d’opportunité baisse quand les taux réels baissent." },
      { q: "Le LME est la bourse de référence pour…", o: ["le pétrole", "les métaux de base", "le cacao", "le gaz"], a: 1, e: "London Metal Exchange : cuivre, aluminium, nickel, zinc." },
      { q: "Un producteur de cacao qui veut sécuriser son prix de vente…", o: ["achète des futures", "vend des futures", "achète des calls", "vend des puts"], a: 1, e: "Il fixe aujourd’hui le prix de sa récolte future." }
    ],
    flashcards: [
      ["Contango", "Futures > spot ; roll yield négatif pour un long."],
      ["Backwardation", "Futures < spot ; tension sur l’offre."],
      ["Convenience yield", "Avantage de détenir physiquement la marchandise."],
      ["Brent vs WTI", "Pétrole de mer du Nord (ICE) vs américain (NYMEX)."],
      ["TTF", "Prix de référence du gaz naturel en Europe."],
      ["OPEP+", "Cartel de producteurs de pétrole élargi (dont la Russie)."]
    ]
  },

  /* ---------------------------------------------------- */
  {
    id: "macro",
    title: "Macroéconomie & Marchés",
    icon: "fa-earth-europe",
    color: "#14b8a6",
    level: "Intermédiaire",
    summary: "Indicateurs clés, banques centrales, inflation, impact des annonces sur les classes d’actifs.",
    lessons: [
      {
        title: "Indicateurs économiques à suivre",
        html: `
<ul>
<li><b>Inflation</b> : CPI/IPC, PCE (indicateur préféré de la Fed), core (hors énergie et alimentation), HICP en zone euro.</li>
<li><b>Emploi</b> : Non-Farm Payrolls (NFP, 1<sup>er</sup> vendredi du mois aux US), taux de chômage, salaires horaires.</li>
<li><b>Activité</b> : PIB, PMI (&gt;50 = expansion), ventes au détail, production industrielle, ISM.</li>
<li><b>Sentiment</b> : IFO, ZEW, confiance des consommateurs.</li>
<li><b>Banques centrales</b> : FOMC (8 réunions/an), BCE (Conseil des gouverneurs), BoE, BoJ, BCEAO.</li>
<li><b>Point mort d’inflation (breakeven)</b> = taux nominal − taux réel (obligations indexées : TIPS, OATi).</li>
</ul>
<div class="tip">En entretien, sachez donner les <b>niveaux actuels</b> : taux directeurs Fed/BCE, 10 ans US et Bund, EUR/USD, S&amp;P 500, Brent, or, VIX, dernière inflation. Consultez-les chaque matin !</div>`
      },
      {
        title: "Impact d’une hausse surprise des taux",
        html: `
<table class="tbl">
<tr><th>Actif</th><th>Réaction typique</th><th>Pourquoi</th></tr>
<tr><td>Obligations</td><td>Prix ↓ (surtout le court terme) ; courbe qui s’aplatit</td><td>Taux plus élevés</td></tr>
<tr><td>Devise</td><td>↑</td><td>Rendement plus attractif, flux entrants</td></tr>
<tr><td>Actions</td><td>↓ (surtout croissance/tech)</td><td>Taux d’actualisation ↑, coût du financement ↑</td></tr>
<tr><td>Or</td><td>↓</td><td>Taux réels ↑, dollar ↑</td></tr>
<tr><td>Crédit</td><td>Spreads ↑</td><td>Risque de refinancement</td></tr>
</table>
<p>Le marché réagit à la <b>surprise</b> par rapport au consensus, pas à l’annonce elle-même (« buy the rumour, sell the news »).</p>`
      },
      {
        title: "Régimes de marché",
        html: `
<ul>
<li><b>Risk-on</b> : actions ↑, spreads ↓, devises émergentes ↑, vol ↓.</li>
<li><b>Risk-off</b> : obligations souveraines ↑, USD/JPY/CHF/or ↑, actions ↓, VIX ↑.</li>
<li><b>Stagflation</b> : inflation élevée + croissance faible — mauvais pour actions et obligations.</li>
<li><b>Goldilocks</b> : croissance solide, inflation maîtrisée.</li>
<li>Corrélation actions/obligations : négative en régime d’inflation basse, souvent positive quand l’inflation domine (comme en 2022).</li>
</ul>`
      }
    ],
    quiz: [
      { q: "Un PMI de 47 indique…", o: ["une expansion", "une contraction", "une inflation élevée", "une hausse des taux"], a: 1, e: "En dessous de 50, l’activité se contracte." },
      { q: "La Fed relève ses taux plus que prévu. Le dollar…", o: ["baisse", "monte", "ne bouge pas", "devient fixe"], a: 1, e: "Les rendements en USD deviennent plus attractifs." },
      { q: "L’indicateur d’inflation préféré de la Fed est…", o: ["le CPI", "le PCE core", "le PPI", "le PIB"], a: 1, e: "La Fed cible 2 % sur le PCE." },
      { q: "Breakeven d’inflation =", o: ["taux nominal − taux réel", "taux réel − taux nominal", "CPI − PIB", "taux directeur − inflation"], a: 0, e: "Inflation anticipée par le marché (avec une prime de risque)." },
      { q: "En régime risk-off, typiquement…", o: ["le VIX baisse", "les obligations souveraines montent", "les devises émergentes montent", "les spreads se resserrent"], a: 1, e: "Fuite vers la qualité." },
      { q: "Les NFP sont publiés…", o: ["chaque jeudi", "le 1er vendredi du mois", "chaque trimestre", "par la BCE"], a: 1, e: "Données d’emploi américaines, très suivies." },
      { q: "Une hausse surprise de l’inflation impacte surtout les actions…", o: ["value", "de croissance (longue duration)", "défensives", "aucune"], a: 1, e: "Leurs cash flows lointains sont plus sensibles au taux d’actualisation." },
      { q: "La banque centrale de l’UEMOA est…", o: ["la BEAC", "la BCEAO", "la BCE", "la BoE"], a: 1, e: "Banque Centrale des États de l’Afrique de l’Ouest." }
    ],
    flashcards: [
      ["CPI / PCE", "Mesures de l’inflation aux US (PCE = cible de la Fed)."],
      ["NFP", "Créations d’emplois non agricoles US."],
      ["PMI", "Indice des directeurs d’achat ; 50 = seuil expansion/contraction."],
      ["FOMC", "Comité de politique monétaire de la Fed."],
      ["Breakeven", "Inflation anticipée = nominal − réel."],
      ["Risk-on / Risk-off", "Appétit vs aversion pour le risque."],
      ["Hawkish / Dovish", "Faucon (resserrement) / Colombe (assouplissement)."]
    ]
  },

  /* ---------------------------------------------------- */
  {
    id: "risque",
    title: "Risque & P&L",
    icon: "fa-scale-balanced",
    color: "#f97316",
    level: "Avancé",
    summary: "Mark-to-market, P&L explain, VaR, stress tests, limites, risque de contrepartie, XVA.",
    lessons: [
      {
        title: "P&L et mark-to-market",
        html: `
<ul>
<li><b>Mark-to-market</b> : valorisation quotidienne des positions aux prix de marché. <b>Mark-to-model</b> pour les produits illiquides.</li>
<li><b>P&amp;L réalisé</b> (positions clôturées) vs <b>latent / non réalisé</b>.</li>
<li><b>P&amp;L explain / attribution</b> : décomposer le P&amp;L par facteurs (delta, gamma, vega, theta, carry, nouveaux deals). Le <b>P&amp;L inexpliqué</b> doit rester faible.</li>
<li><b>IPV (Independent Price Verification)</b> : le Product Control vérifie les prix de valorisation du front.</li>
<li>Le P&amp;L « day one » sur un produit structuré peut être différé si les paramètres ne sont pas observables.</li>
</ul>`
      },
      {
        title: "VaR, stress tests et limites",
        html: `
<ul>
<li><b>Value at Risk</b> : perte maximale sur un horizon donné avec un niveau de confiance donné. Ex : VaR 1 jour 99 % = 2 M€ → la perte ne devrait dépasser 2 M€ qu’un jour sur 100.</li>
<li>Méthodes : historique, paramétrique (variance-covariance), Monte Carlo.</li>
<li>Limites de la VaR : ne dit rien de la taille des pertes extrêmes → <b>Expected Shortfall (ES)</b>, utilisée par FRTB (Bâle).</li>
<li><b>Stress tests</b> : scénarios extrêmes (Covid 2020, crise 2008, choc de taux 2022).</li>
<li><b>Limites</b> : VaR, delta, DV01, vega, stop-loss, concentration. Dépassement = escalade au risk management.</li>
<li><b>Backtesting</b> : comparer pertes réelles et VaR prévue.</li>
</ul>`
      },
      {
        title: "Risque de contrepartie et capital",
        html: `
<ul>
<li><b>Risque de contrepartie</b> : la contrepartie d’un dérivé fait défaut alors que la valeur du contrat est en notre faveur.</li>
<li>Mitigation : <b>collatéral</b> (CSA), compensation centrale (CCP), netting (ISDA Master Agreement).</li>
<li><b>XVA</b> : ajustements de valorisation — <b>CVA</b> (risque de défaut de la contrepartie), DVA, FVA (financement), KVA (capital), MVA (marge initiale).</li>
<li><b>Bâle III</b> : ratios de solvabilité (CET1), liquidité (LCR, NSFR), levier. <b>FRTB</b> : nouvelle réglementation du risque de marché.</li>
<li><b>Risque opérationnel</b> : erreurs de saisie (fat finger), fraude (rogue trader), défaillance des systèmes.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "VaR 1 jour 99 % = 5 M€ signifie…", o: ["on ne peut jamais perdre plus de 5 M€", "1 jour sur 100, on s’attend à perdre plus de 5 M€", "on perd 5 M€ par jour", "on gagne 5 M€ 99 % du temps"], a: 1, e: "La VaR est un quantile, pas un maximum absolu." },
      { q: "Quelle mesure capture mieux les pertes extrêmes ?", o: ["La VaR", "L’Expected Shortfall", "Le delta", "Le bêta"], a: 1, e: "L’ES est la moyenne des pertes au-delà de la VaR." },
      { q: "La CVA mesure…", o: ["le risque de défaut de la contrepartie", "le coût de financement", "le risque de change", "le coupon couru"], a: 0, e: "Credit Valuation Adjustment." },
      { q: "Qui réalise l’IPV ?", o: ["Le trader", "Le Product Control", "Le Sales", "Le client"], a: 1, e: "Vérification indépendante des prix par le middle office." },
      { q: "Le ratio LCR concerne…", o: ["la liquidité à 30 jours", "le capital", "le levier", "le risque de marché"], a: 0, e: "Liquidity Coverage Ratio : actifs liquides vs sorties de trésorerie sur 30 jours de stress." },
      { q: "Un « fat finger » est un risque…", o: ["de marché", "opérationnel", "de crédit", "de liquidité"], a: 1, e: "Erreur de saisie humaine." },
      { q: "Le netting ISDA permet…", o: ["de compenser les expositions positives et négatives avec une même contrepartie", "d’éviter les impôts", "de supprimer le collatéral", "de doubler l’exposition"], a: 0, e: "En cas de défaut, seul le solde net est dû." }
    ],
    flashcards: [
      ["VaR", "Quantile de perte sur un horizon et un niveau de confiance."],
      ["Expected Shortfall", "Perte moyenne au-delà de la VaR."],
      ["P&L explain", "Décomposition du P&L par grecques et facteurs."],
      ["IPV", "Independent Price Verification."],
      ["CVA", "Ajustement pour risque de défaut de la contrepartie."],
      ["FRTB", "Fundamental Review of the Trading Book (Bâle)."],
      ["CET1", "Fonds propres de base de catégorie 1."]
    ]
  },

  /* ---------------------------------------------------- */
  {
    id: "posttrade",
    title: "Post-trade : Middle & Back Office",
    icon: "fa-gears",
    color: "#64748b",
    level: "Intermédiaire",
    summary: "Cycle de vie d’un trade, confirmation, compensation, règlement-livraison, T+1, collatéral, réconciliations, OST, réglementation.",
    lessons: [
      {
        title: "Le cycle de vie d’une transaction",
        html: `
<ol>
<li><b>Pré-trade</b> : KYC/onboarding du client, vérification des limites, contrôles de conformité.</li>
<li><b>Exécution</b> : le trader conclut la transaction (téléphone, chat Bloomberg, plateforme électronique).</li>
<li><b>Capture</b> : saisie dans le système de booking (Murex, Calypso, Summit, Sophis…) avec données statiques (contrepartie, SSI).</li>
<li><b>Validation</b> : contrôle par le middle office / trade support.</li>
<li><b>Confirmation / matching</b> : les deux contreparties confirment les termes (MarkitWire, DTCC CTM, SWIFT MT300 pour FX, MT320 pour les dépôts).</li>
<li><b>Compensation (clearing)</b> : une CCP s’interpose entre acheteur et vendeur (novation) et calcule les marges.</li>
<li><b>Règlement-livraison (settlement)</b> : échange titres contre espèces, idéalement en <b>DvP</b> (Delivery versus Payment).</li>
<li><b>Post-règlement</b> : réconciliations, comptabilité, reporting réglementaire, gestion des OST (corporate actions), gestion du collatéral.</li>
</ol>`
      },
      {
        title: "Règlement-livraison et cycles T+1 / T+2",
        html: `
<ul>
<li><b>T</b> = date de négociation (trade date). <b>Date de valeur / settlement date</b> = date d’échange effectif.</li>
<li>Les <b>actions US</b> sont passées en <b>T+1</b> le 28 mai 2024 (aussi le Canada et le Mexique). L’<b>UE, le Royaume-Uni et la Suisse</b> prévoient le passage en T+1 le <b>11 octobre 2027</b>. En attendant : T+2.</li>
<li><b>SSI (Standard Settlement Instructions)</b> : coordonnées de règlement de la contrepartie (compte, dépositaire, BIC). Une SSI erronée est une cause fréquente de suspens.</li>
<li><b>Suspens / fail</b> : un règlement qui n’a pas eu lieu à la date prévue. Causes : titres manquants, cash insuffisant, instructions non appariées, SSI erronées.</li>
<li><b>CSDR</b> (Europe) : pénalités en cas de fail et règles de discipline de règlement.</li>
<li>Messages SWIFT : MT540–543 (instructions de règlement titres), MT103/MT202 (paiements), migration vers <b>ISO 20022</b>.</li>
<li><b>T2S (TARGET2-Securities)</b> : plateforme de règlement titres de l’Eurosystème.</li>
</ul>`
      },
      {
        title: "Réconciliations, collatéral et OST",
        html: `
<ul>
<li><b>Réconciliation cash (nostro)</b> : comparer les écritures internes et les relevés des banques correspondantes. <b>Nostro</b> = notre compte chez une autre banque ; <b>vostro</b> = leur compte chez nous.</li>
<li><b>Réconciliation de positions</b> : stocks de titres internes vs dépositaire. Un écart = un <b>break</b>, à investiguer et à résoudre.</li>
<li><b>Gestion du collatéral</b> : calcul quotidien des <b>appels de marge</b> (variation margin) selon le CSA, marge initiale (UMR), gestion des litiges.</li>
<li><b>ISDA Master Agreement</b> : contrat-cadre des dérivés OTC ; <b>CSA</b> : annexe de collatéral. <b>GMRA</b> pour les repos, <b>GMSLA</b> pour le prêt de titres.</li>
<li><b>Opérations sur titres (OST / corporate actions)</b> : dividendes, coupons, splits, OPA, droits de souscription — obligatoires ou volontaires (avec choix du client).</li>
</ul>`
      },
      {
        title: "Réglementation et contrôle",
        html: `
<ul>
<li><b>MiFID II / MiFIR</b> : transparence, best execution, transaction reporting, enregistrement des conversations.</li>
<li><b>EMIR</b> : obligation de compensation des dérivés OTC standards, reporting aux trade repositories, techniques de réduction des risques.</li>
<li><b>Dodd-Frank</b> (US) : équivalent pour les swaps.</li>
<li><b>MAR</b> (Market Abuse Regulation) : délit d’initié, manipulation de cours.</li>
<li><b>KYC / AML</b> : connaissance client, lutte contre le blanchiment.</li>
<li><b>SFTR</b> : reporting des opérations de financement sur titres (repos, prêts de titres).</li>
<li><b>Bâle III</b> et <b>FRTB</b> pour les exigences en fonds propres.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "DvP signifie…", o: ["Delivery versus Payment : livraison des titres contre paiement simultané", "Daily Value Price", "Deposit versus Pledge", "Derivative Valuation Process"], a: 0, e: "Élimine le risque en principal lors du règlement." },
      { q: "Depuis le 28 mai 2024, les actions US se règlent en…", o: ["T+0", "T+1", "T+2", "T+3"], a: 1, e: "Les États-Unis sont passés de T+2 à T+1." },
      { q: "Le passage de l’UE au T+1 est prévu le…", o: ["1er janvier 2025", "11 octobre 2027", "28 mai 2024", "Jamais"], a: 1, e: "Date retenue par les autorités européennes, alignée avec le Royaume-Uni et la Suisse." },
      { q: "Une CCP…", o: ["s’interpose entre acheteur et vendeur et mutualise le risque", "conserve les titres", "émet des obligations", "fixe les taux directeurs"], a: 0, e: "Par novation, elle devient l’acheteur de tout vendeur et le vendeur de tout acheteur." },
      { q: "Un compte nostro est…", o: ["le compte d’une autre banque chez nous", "notre compte chez une autre banque", "un compte titres", "un compte client"], a: 1, e: "Nostro = « le nôtre chez vous »." },
      { q: "Quelle est une cause fréquente de suspens (fail) ?", o: ["SSI erronées ou titres manquants", "Une hausse des taux", "Un P&L négatif", "Une note de crédit"], a: 0, e: "Mauvaises instructions, titres insuffisants, cash insuffisant." },
      { q: "Le CSA est…", o: ["l’annexe de collatéral à l’ISDA", "une chambre de compensation", "un message SWIFT", "un indice de crédit"], a: 0, e: "Credit Support Annex : définit les règles d’échange de collatéral." },
      { q: "EMIR impose notamment…", o: ["le reporting des dérivés aux trade repositories", "la cotation des actions", "le passage en T+1", "la notation des émetteurs"], a: 0, e: "Ainsi que la compensation centrale des dérivés standards." },
      { q: "Différence entre clearing et settlement ?", o: ["Aucune", "Clearing : calcul des obligations et gestion du risque ; settlement : échange effectif titres/cash", "Le settlement précède le clearing", "Le clearing ne concerne que le FX"], a: 1, e: "Le clearing prépare le règlement ; le settlement le réalise." },
      { q: "Le message SWIFT MT300 sert à…", o: ["confirmer une opération de change", "payer un fournisseur", "instruire un règlement titres", "déclarer un dividende"], a: 0, e: "MT300 = confirmation FX ; MT320 = prêts/emprunts." },
      { q: "CSDR prévoit…", o: ["des pénalités en cas de fail de règlement", "le plafonnement des bonus", "la séparation des banques", "le passage en T+0"], a: 0, e: "Règlement européen sur les dépositaires centraux et la discipline de règlement." },
      { q: "Un break de réconciliation est…", o: ["une pause déjeuner", "un écart entre deux sources de données à investiguer", "une rupture de contrat", "un défaut de crédit"], a: 1, e: "Il faut identifier la cause, corriger et documenter." }
    ],
    flashcards: [
      ["Trade date / Value date", "Date de négociation / date de règlement effectif."],
      ["SSI", "Standard Settlement Instructions."],
      ["DvP", "Delivery versus Payment."],
      ["CCP", "Contrepartie centrale (LCH, Eurex Clearing, CME)."],
      ["Novation", "Remplacement d’un contrat bilatéral par deux contrats avec la CCP."],
      ["Nostro / Vostro", "Notre compte chez eux / leur compte chez nous."],
      ["Variation margin", "Appel de marge quotidien selon le mark-to-market."],
      ["Initial margin", "Garantie déposée à l’ouverture contre le risque futur."],
      ["CSDR", "Discipline de règlement européenne (pénalités sur fails)."],
      ["ISO 20022", "Nouveau standard de messagerie financière remplaçant les MT SWIFT."]
    ]
  },

  /* ---------------------------------------------------- */
  {
    id: "maths",
    title: "Maths & Probabilités du trader",
    icon: "fa-calculator",
    color: "#22c55e",
    level: "Tous niveaux",
    summary: "Calcul mental, espérance, probabilités, raisonnement de market making et estimations.",
    lessons: [
      {
        title: "Astuces de calcul mental",
        html: `
<ul>
<li>× 5 : multiplier par 10 et diviser par 2. × 25 : × 100 / 4.</li>
<li>Carrés proches de 50 : 48² = 2500 − 2×2×50 + 4 = 2304. Formule : (a−b)² = a² − 2ab + b².</li>
<li>(a+b)(a−b) = a² − b² : 47 × 53 = 2500 − 9 = 2491.</li>
<li>Pourcentages : 15 % de 80 = 10 % (8) + 5 % (4) = 12. x % de y = y % de x.</li>
<li>Règle de 72 : temps de doublement ≈ 72 / taux (%). À 6 % → 12 ans.</li>
<li>Fractions utiles : 1/8 = 0,125 ; 1/16 = 0,0625 ; 1/32 = 0,03125 (cotation des Treasuries en 32<sup>e</sup>).</li>
</ul>`
      },
      {
        title: "Espérance et market making",
        html: `
<ul>
<li><b>Espérance</b> : E[X] = Σ x·p(x). Un dé : (1+…+6)/6 = 3,5.</li>
<li>Un trader cote un marché autour de sa <b>juste valeur</b> (espérance) avec un spread qui reflète l’<b>incertitude</b> et le risque d’<b>information asymétrique</b>.</li>
<li>Si l’on vous achète systématiquement, votre ask est trop bas → remontez vos prix (gestion de l’inventaire, « skew » de la cotation).</li>
<li><b>Jeu classique</b> : « Faites-moi un marché sur la somme de 3 dés » → juste valeur 10,5 ; cotez par ex. 10 / 11.</li>
<li><b>Kelly</b> : fraction optimale à miser f* = (bp − q)/b.</li>
</ul>`
      },
      {
        title: "Probabilités et estimations",
        html: `
<ul>
<li>P(au moins un 6 en 4 lancers) = 1 − (5/6)<sup>4</sup> ≈ 51,8 %.</li>
<li>Deux dés, somme = 7 : 6/36 = 1/6.</li>
<li>Bayes : P(A|B) = P(B|A)·P(A)/P(B).</li>
<li><b>Questions de Fermi</b> (« Combien de stations-service en France ? ») : structurez, posez des hypothèses chiffrées, vérifiez l’ordre de grandeur. L’interviewer juge la démarche.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "48 × 52 = ?", o: ["2 496", "2 504", "2 400", "2 516"], a: 0, e: "(50−2)(50+2) = 2500 − 4 = 2496." },
      { q: "Espérance d’un lancer de dé à 6 faces ?", o: ["3", "3,5", "4", "6"], a: 1, e: "21 / 6 = 3,5." },
      { q: "Juste valeur de la somme de 3 dés ?", o: ["9", "10,5", "12", "18"], a: 1, e: "3 × 3,5 = 10,5." },
      { q: "Avec la règle de 72, à 8 % un capital double en…", o: ["6 ans", "9 ans", "12 ans", "18 ans"], a: 1, e: "72 / 8 = 9." },
      { q: "Probabilité que deux dés fassent une somme de 7 ?", o: ["1/6", "1/12", "7/36", "1/3"], a: 0, e: "6 combinaisons sur 36." },
      { q: "Angle entre les aiguilles à 3h15 ?", o: ["0°", "7,5°", "15°", "90°"], a: 1, e: "L’aiguille des heures a avancé d’1/4 de 30° = 7,5°." },
      { q: "On lance un dé ; on peut relancer une fois et garder le 2e résultat. Espérance optimale ?", o: ["3,5", "4", "4,25", "4,5"], a: 2, e: "On garde 4, 5, 6 (moyenne 5, proba 1/2), sinon on relance (3,5) : 0,5×5 + 0,5×3,5 = 4,25." },
      { q: "Somme des entiers de 1 à 100 ?", o: ["5 000", "5 050", "10 100", "4 950"], a: 1, e: "n(n+1)/2 = 5050." },
      { q: "Un Treasury cote 99-16. Quel prix en décimal ?", o: ["99,16", "99,50", "99,1600", "99,25"], a: 1, e: "16/32 = 0,50." }
    ],
    flashcards: [
      ["(a+b)(a−b)", "= a² − b²"],
      ["Règle de 72", "Doublement ≈ 72 / taux"],
      ["Racine de 252", "≈ 15,9 → règle des 16 pour la vol"],
      ["E[dé]", "3,5"],
      ["1/32", "0,03125"],
      ["P(au moins 1)", "1 − P(aucun)"]
    ]
  }
];
