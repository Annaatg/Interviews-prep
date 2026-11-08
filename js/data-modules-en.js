/* =========================================================
   English version of the learning modules (keyed by module id).
   Lessons, quiz questions and flashcards are in the SAME ORDER as the
   French version; quiz answers keep the same index (a).
   ========================================================= */
window.MODULES_EN = {
  /* ---------------------------------------------------- */
  salle: {
    title: "The Trading Floor",
    level: "Beginner",
    summary: "How an investment bank is organized, front/middle/back office roles, sell-side vs buy-side, the order book.",
    lessons: [
      {
        title: "Sell-side, buy-side and the ecosystem",
        html: `
<p><b>Financial markets</b> connect those who need capital (governments, companies) with those who have capital to invest (investors).</p>
<ul>
<li><b>Sell-side</b>: investment banks (BNP Paribas, Société Générale, Goldman Sachs, JP Morgan…). They <b>sell</b> products, execution services and liquidity. Also called <i>dealers</i> or <i>broker-dealers</i>.</li>
<li><b>Buy-side</b>: asset managers (Amundi, BlackRock), hedge funds, pension funds, insurers, sovereign wealth funds, corporate treasurers. They <b>buy</b> the sell-side’s services.</li>
<li><b>Market infrastructure</b>: exchanges (Euronext, LSE, NYSE, BRVM), clearing houses (LCH, Eurex Clearing, CME Clearing), central securities depositories (Euroclear, Clearstream, DTCC), networks (SWIFT), electronic platforms (Bloomberg, Tradeweb, MarketAxess).</li>
<li><b>Regulators</b>: AMF, ACPR, ECB/SSM, ESMA, SEC, FCA, CREPMF (WAEMU).</li>
</ul>
<div class="tip"><b>Interview takeaway:</b> the sell-side makes money from the <b>bid-ask spread</b> (market making), <b>commissions</b> (agency execution) and <b>structuring</b> (margin on tailor-made products).</div>`
      },
      {
        title: "Front, Middle and Back Office",
        html: `
<table class="tbl">
<tr><th>Function</th><th>Role</th><th>Jobs</th></tr>
<tr><td><b>Front Office</b></td><td>Generates revenue, faces clients, takes risk</td><td>Sales, Trader, Structurer, Quant/Strat, Research</td></tr>
<tr><td><b>Middle Office</b></td><td>Controls the front: P&amp;L, risk, compliance, trade validation</td><td>Risk Manager, Product Control, Trade Support, Compliance</td></tr>
<tr><td><b>Back Office</b></td><td>Post-trade processing: confirmation, settlement, accounting</td><td>Settlements, Confirmations, Collateral, Reconciliations, Corporate Actions</td></tr>
</table>
<p>The <b>Salesperson</b> manages the client relationship, understands needs, brings trade ideas and passes orders to the trader. The <b>Trader</b> makes prices (market making), manages the risk of their <i>book</i> and hedges positions. The <b>Structurer</b> designs tailor-made products (structured notes, hedging solutions). The <b>Strat/Quant</b> builds pricing models and tools.</p>
<div class="tip">The principle of <b>segregation of duties</b> requires that whoever takes the risk (front) is not the one who values and controls it (middle/back).</div>`
      },
      {
        title: "Market making vs Agency",
        html: `
<ul>
<li><b>Principal / Market making</b>: the bank is the client’s counterparty. It quotes a <b>bid</b> (price at which it buys) and an <b>ask/offer</b> (price at which it sells). It carries the risk and earns the spread.</li>
<li><b>Agency</b>: the bank executes the client’s order in the market on the client’s behalf, without taking risk, for a commission (typical in cash equities, using VWAP/TWAP algorithms).</li>
<li><b>Flow trading</b>: handling a large volume of standardized client trades. <b>Exotic trading</b>: complex, less liquid products with higher margins.</li>
<li>The <b>Volcker Rule</b> (US) and European regulation restrict <b>proprietary trading</b> (trading on the bank’s own account, unrelated to client activity).</li>
</ul>
<p><b>Example:</b> a trader quotes 99.50 / 99.60 on a bond. A client sells 10M at 99.50: the trader is now <i>long</i> and will look to sell or hedge the position.</p>`
      },
      {
        title: "The order book and order types",
        html: `
<ul>
<li><b>Order book</b>: the list of resting buy orders (bids) and sell orders (asks), ranked by price then by time.</li>
<li><b>Market order</b>: immediate execution at the best available price (slippage risk).</li>
<li><b>Limit order</b>: execution at a set price or better.</li>
<li><b>Stop loss</b>: becomes a market order once a trigger level is hit (limits losses).</li>
<li><b>Fill or Kill (FOK)</b>, <b>Immediate or Cancel (IOC)</b>, <b>Good Till Cancelled (GTC)</b>.</li>
<li><b>Liquidity</b>: the ability to trade size without moving the price. Measures: spread, order book depth, volume.</li>
<li><b>Dark pools</b>: venues where orders are not displayed before execution (large blocks).</li>
</ul>
<div class="tip"><b>Market maker</b> = <i>provides</i> liquidity (limit orders). <b>Market taker</b> = <i>consumes</i> liquidity (market orders).</div>`
      }
    ],
    quiz: [
      { q: "Which function calculates and validates traders’ daily P&L?", o: ["The Salesperson", "Product Control (Middle Office)", "The Structurer", "Research"], e: "Product Control (middle office) produces and explains the P&L independently from the front office." },
      { q: "An asset manager such as Amundi belongs to…", o: ["the sell-side", "the buy-side", "market infrastructure", "the regulators"], e: "Asset managers buy banks’ execution and liquidity services: they are buy-side." },
      { q: "A trader quotes 101.20 / 101.30. At what price can the client BUY?", o: ["101.20", "101.25", "101.30", "Any price they like"], e: "The client buys at the dealer’s offer (ask): 101.30. The dealer buys at the bid: 101.20." },
      { q: "In an agency model, the bank…", o: ["carries market risk", "executes on the client’s behalf for a commission", "trades on its own account", "issues bonds"], e: "In agency, the bank is an intermediary that takes no position." },
      { q: "Which order guarantees the price but not the execution?", o: ["Market order", "Limit order", "Stop loss", "IOC market order"], e: "A limit order guarantees a maximum (buy) or minimum (sell) price, but may not be filled." },
      { q: "The principle of “segregation of duties” aims to…", o: ["separate risk taking from control", "separate equities from bonds", "ban electronic trading", "separate retail and institutional clients"], e: "Whoever takes the risk must not be able to validate their own valuation or settlements." },
      { q: "Who designs a tailor-made hedging product for a corporate client?", o: ["Settlements", "The Structurer", "Compliance", "The CSD"], e: "The structurer combines building blocks (options, swaps, bonds) into a product that fits the client’s need." },
      { q: "Euroclear and Clearstream are…", o: ["stock exchanges", "clearing houses", "(international) central securities depositories", "hedge funds"], e: "They are (I)CSDs: they hold securities accounts and handle settlement." },
      { q: "A market maker…", o: ["consumes liquidity", "provides liquidity by quoting a bid and an ask", "never takes risk", "only trades in dark pools"], e: "It continuously quotes buy and sell prices." },
      { q: "The Volcker Rule mainly restricts…", o: ["proprietary trading by US banks", "short selling", "high-frequency trading", "IPOs"], e: "It limits proprietary trading and certain investments in hedge funds." }
    ],
    flashcards: [
      ["Bid", "The price at which the market maker is willing to BUY."],
      ["Ask / Offer", "The price at which the market maker is willing to SELL."],
      ["Spread", "Ask − Bid: the market maker’s compensation and a measure of liquidity."],
      ["Book", "All the positions of a trader or a desk."],
      ["Axe", "A trader’s interest in buying or selling a specific security (they will show a better price in that direction)."],
      ["Slippage", "The gap between the expected price and the price actually obtained."],
      ["Flow vs Exotics", "Flow: standard, high-volume products. Exotics: complex, illiquid products."],
      ["Sales trader", "A salesperson who handles client order execution (often in equities) in direct contact with the market."]
    ]
  },

  /* ---------------------------------------------------- */
  taux: {
    title: "Rates & Bonds",
    level: "Intermediate",
    summary: "Price/yield, duration, convexity, DV01, the yield curve, swaps, repo and central banks.",
    lessons: [
      {
        title: "Bond price and yield",
        html: `
<p>A bond pays <b>coupons</b> and repays the <b>face value</b> at maturity. Its price = the sum of cash flows discounted at the yield:</p>
<div class="formula">P = Σ C/(1+y)<sup>t</sup> + N/(1+y)<sup>T</sup></div>
<ul>
<li><b>Inverse relationship</b>: when yields rise, the price falls (and vice versa).</li>
<li>Coupon &gt; yield → bond trades <b>above par</b> (price &gt; 100). Coupon &lt; yield → <b>below par</b>.</li>
<li><b>Yield to Maturity (YTM)</b>: the return if you hold to maturity and reinvest coupons at the same rate.</li>
<li><b>Clean price</b> vs <b>dirty price</b> = clean + accrued interest.</li>
<li>Prices are quoted as a % of face value. 1 <b>basis point</b> (bp) = 0.01%.</li>
</ul>`
      },
      {
        title: "Duration, DV01 and convexity",
        html: `
<ul>
<li><b>Macaulay duration</b>: the weighted average life of the cash flows (in years). A zero-coupon bond’s duration equals its maturity.</li>
<li><b>Modified duration</b> = Macaulay / (1+y). Price change (%) ≈ − D<sub>mod</sub> × Δy.</li>
<li><b>DV01 / PV01</b>: change in value (in €/$) for a 1 bp rise in yields. DV01 ≈ D<sub>mod</sub> × Value × 0.0001.</li>
<li><b>Convexity</b>: the curvature of the price/yield relationship. A plain bond has positive convexity: it gains more when yields fall than it loses when they rise.</li>
<li>Duration increases with maturity and decreases when the coupon or the yield rises.</li>
</ul>
<div class="example"><b>Example:</b> €10M of a bond with a modified duration of 7. DV01 ≈ 7 × 10,000,000 × 0.0001 = <b>€7,000 per bp</b>. If yields rise by 20 bp → loss ≈ €140,000.</div>`
      },
      {
        title: "The yield curve",
        html: `
<ul>
<li>The curve = yields plotted against maturity (2y, 5y, 10y, 30y…).</li>
<li><b>Normal (upward sloping)</b>: long rates &gt; short rates (term premium).</li>
<li><b>Inverted</b>: short rates &gt; long rates → often an expectation of rate cuts / recession.</li>
<li><b>Steepening</b>: the slope increases. <b>Flattening</b>: it decreases. <i>Bull</i> = yields fall, <i>Bear</i> = yields rise (e.g. bull steepening = short rates fall faster than long rates).</li>
<li>The front end is driven by the <b>central bank</b> (policy rates); the long end by growth and inflation expectations and the term premium.</li>
<li><b>Curve trade</b>: long 2y / short 10y, DV01-weighted, to bet on a steepening while staying neutral to parallel moves.</li>
</ul>
<div class="tip"><b>Sovereign spreads:</b> OAT-Bund and BTP-Bund measure a country’s perceived risk relative to Germany.</div>`
      },
      {
        title: "Interest rate swaps, repo and benchmark rates",
        html: `
<ul>
<li><b>Interest Rate Swap (IRS)</b>: exchange of fixed cash flows for floating cash flows on a notional (not exchanged). <i>Paying</i> fixed = gaining if rates rise.</li>
<li>Benchmark rates: <b>€STR</b> (euro), <b>SOFR</b> (USD), <b>SONIA</b> (GBP). USD LIBOR stopped being published in June 2023; EURIBOR still exists.</li>
<li><b>Swap spread</b> = swap rate − government bond yield of the same maturity.</li>
<li><b>Repo</b>: sale of a security with an agreement to buy it back → a cash loan secured by collateral. The <b>haircut</b> protects the lender. A reverse repo is the opposite.</li>
<li><b>Rate futures</b>: Bund, OAT, Treasury futures; <b>CTD</b> = cheapest to deliver.</li>
<li>Central bank tools: policy rates (ECB deposit rate, Fed Funds), QE/QT, forward guidance.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "If interest rates rise, the price of a fixed-rate bond…", o: ["rises", "falls", "does not change", "depends only on the coupon"], e: "Future cash flows are discounted at a higher rate: their present value falls." },
      { q: "A bond has a 5% coupon and a market yield of 3%. It trades…", o: ["at par", "above par", "below par", "at zero"], e: "Coupon > yield: investors pay a premium for a coupon above the market." },
      { q: "What is the Macaulay duration of an 8-year zero-coupon bond?", o: ["4 years", "8 years", "Less than 8 years", "More than 8 years"], e: "A single cash flow at 8 years: duration equals maturity." },
      { q: "€20M position, modified duration 5. DV01 ≈ ?", o: ["€1,000", "€10,000", "€100,000", "€5,000"], e: "5 × 20,000,000 × 0.0001 = €10,000 per bp." },
      { q: "An inverted yield curve means that…", o: ["long rates are above short rates", "short rates are above long rates", "all rates are negative", "inflation is zero"], e: "Inversion = short > long, often a sign that the market expects a recession and rate cuts." },
      { q: "A “bull steepening” means…", o: ["short rates fall more than long rates", "long rates rise more than short rates", "short rates rise more than long rates", "rates fall uniformly"], e: "Bull = yields falling; steepening = the slope increases: short rates fall more." },
      { q: "A client who “pays fixed” on an interest rate swap gains if…", o: ["rates rise", "rates fall", "rates don’t move", "credit spreads widen"], e: "They pay a fixed rate and receive a floating rate that rises when rates rise." },
      { q: "Which rate replaced USD LIBOR?", o: ["€STR", "SONIA", "SOFR", "EURIBOR"], e: "SOFR (Secured Overnight Financing Rate) is the USD benchmark." },
      { q: "In a repo, the haircut…", o: ["is the broker’s fee", "protects the cash lender against a drop in collateral value", "is the bond’s coupon", "is set only by the ECB"], e: "The haircut means the cash lent is lower than the value of the collateral." },
      { q: "Positive convexity means that…", o: ["the bond gains more when yields fall than it loses when they rise by the same amount", "price is linear in yield", "duration is negative", "the bond is callable"], e: "The curvature of the price/yield relationship works in the holder’s favour." },
      { q: "To bet on a duration-neutral flattening (flattener), you…", o: ["buy the 2y and sell the 10y", "sell the 2y and buy the 10y, DV01-weighted", "buy both", "sell both"], e: "Flattener: long yields fall relative to short yields → long 10y, short 2y, DV01-weighted." },
      { q: "Dirty price =", o: ["clean price − accrued interest", "clean price + accrued interest", "face value + coupon", "par price"], e: "The buyer pays the seller the coupon accrued since the last payment date." }
    ],
    flashcards: [
      ["Basis point (bp)", "0.01% — the unit for rates and spreads."],
      ["Modified duration", "Price sensitivity: ΔP/P ≈ −Dmod × Δy."],
      ["DV01", "Change in value for a +1 bp move in yields."],
      ["Convexity", "Curvature of the price/yield relationship; positive for a plain bond."],
      ["IRS", "Interest rate swap: fixed vs floating on a notional."],
      ["€STR / SOFR", "Overnight benchmark rate in euro / dollar."],
      ["Repo", "A cash loan secured by securities, with a forward buy-back."],
      ["CTD", "Cheapest To Deliver: the cheapest bond to deliver into a bond future."],
      ["QE / QT", "Quantitative Easing (asset purchases) / Tightening (balance sheet reduction)."]
    ]
  },

  /* ---------------------------------------------------- */
  fx: {
    title: "Foreign Exchange (FX)",
    level: "Intermediate",
    summary: "Quotes, pips, spot, forwards, covered interest parity, FX swaps, carry trade, NDFs.",
    lessons: [
      {
        title: "Reading an FX quote",
        html: `
<ul>
<li><b>EUR/USD = 1.0850</b>: 1 euro (the <b>base</b> currency) is worth 1.0850 dollars (the <b>quote</b> currency).</li>
<li>If EUR/USD rises, the euro appreciates against the dollar.</li>
<li><b>Pip</b>: the 4th decimal (0.0001), except for JPY pairs (0.01). On 1M EUR/USD, 1 pip = 100 USD.</li>
<li><b>Majors</b>: EUR/USD, USD/JPY, GBP/USD, USD/CHF, AUD/USD, USD/CAD. <b>Crosses</b>: EUR/GBP, EUR/JPY. <b>Emerging</b>: USD/ZAR, USD/NGN, EUR/XOF…</li>
<li>The <b>CFA franc (XOF)</b> is pegged to the euro: 1 EUR = 655.957 XOF (fixed parity).</li>
<li>FX is the largest market in the world (≈ $7.5 trillion per day according to the 2022 BIS survey), mostly over-the-counter (OTC), open 24/5.</li>
<li><b>Spot</b>: settles <b>T+2</b> (T+1 for USD/CAD).</li>
</ul>`
      },
      {
        title: "Forwards and covered interest parity",
        html: `
<p>A <b>forward</b> locks in today an exchange rate for a future date. It follows from arbitrage:</p>
<div class="formula">F = S × (1 + i<sub>quote</sub> × t) / (1 + i<sub>base</sub> × t)</div>
<ul>
<li>The currency with the <b>higher</b> interest rate trades at a <b>forward discount</b>: it is cheaper forward.</li>
<li><b>Forward points</b> = F − S.</li>
<li>It is <b>not</b> a forecast of the future spot rate: it is an arbitrage result (Covered Interest Parity).</li>
</ul>
<div class="example"><b>Example:</b> EUR/USD spot = 1.10; USD rate 4%; EUR rate 2%; 1 year. F = 1.10 × 1.04 / 1.02 ≈ <b>1.1216</b>. The euro (lower rate) is more expensive forward.</div>`
      },
      {
        title: "FX swaps, NDFs and the carry trade",
        html: `
<ul>
<li><b>FX swap</b>: buy spot + sell forward (or the reverse) of the same currency. A key funding and cash management tool.</li>
<li><b>Cross-currency swap</b>: exchange of interest and principal in two currencies over several years.</li>
<li><b>NDF (Non-Deliverable Forward)</b>: a forward cash-settled in a convertible currency (USD) for non-convertible or restricted currencies (INR, BRL, offshore CNY…).</li>
<li><b>Carry trade</b>: borrow in a low-yielding currency (JPY, CHF) to invest in a high-yielding one. Profitable if FX is stable; risk of a violent unwind.</li>
<li><b>FX options</b>: a European exporter receiving USD buys a USD put/EUR call to protect against a weaker dollar.</li>
</ul>
<div class="tip"><b>FX drivers:</b> interest rate differentials, growth, current account, capital flows, risk appetite (USD, JPY, CHF = safe havens).</div>`
      }
    ],
    quiz: [
      { q: "EUR/USD moves from 1.08 to 1.10. What happened?", o: ["The euro depreciated", "The euro appreciated against the dollar", "The dollar appreciated", "Nothing"], e: "It takes more dollars to buy 1 euro: the euro has appreciated." },
      { q: "On 1M EUR/USD, how much is 1 pip worth?", o: ["10 USD", "100 USD", "1,000 USD", "1 USD"], e: "1,000,000 × 0.0001 = 100 USD." },
      { q: "A spot EUR/USD trade settles…", o: ["T+0", "T+1", "T+2", "T+5"], e: "Standard spot FX settles T+2 (USD/CAD is T+1)." },
      { q: "USD rate 5%, JPY rate 0.5%. Forward, USD against JPY trades…", o: ["at a premium (more expensive)", "at a discount (cheaper)", "at the same level", "impossible to say"], e: "The higher-yielding currency is cheaper forward: the USD/JPY forward is below spot." },
      { q: "An NDF is used for…", o: ["non-convertible or restricted currencies", "equities", "the repo market", "precious metals"], e: "It is cash-settled in a convertible currency, with no delivery of the local currency." },
      { q: "A French exporter who will receive USD in 6 months fears…", o: ["a stronger USD", "a weaker USD (higher EUR/USD)", "higher rates", "lower gold"], e: "If they receive USD, a weaker dollar means fewer euros: they sell USD forward." },
      { q: "The carry trade consists of…", o: ["borrowing in a low-yielding currency to invest in a high-yielding one", "buying gold", "selling options", "buying long-dated bonds"], e: "You capture the rate differential, while bearing FX risk." },
      { q: "Fixed EUR/XOF parity:", o: ["1 EUR = 600 XOF", "1 EUR = 655.957 XOF", "1 EUR = 700 XOF", "floating"], e: "The WAEMU CFA franc is pegged to the euro at 655.957." },
      { q: "An FX forward is…", o: ["a forecast of the future spot rate", "the result of arbitrage between interest rates", "set by the central bank", "always equal to spot"], e: "It reflects covered interest parity, not a forecast." },
      { q: "An FX swap combines…", o: ["two options", "a spot trade and an offsetting forward trade", "an interest rate swap and a bond", "two futures"], e: "E.g. buy EUR spot / sell EUR forward." }
    ],
    flashcards: [
      ["Base currency", "The first currency in the pair (EUR in EUR/USD)."],
      ["Pip", "0.0001 (or 0.01 for JPY pairs)."],
      ["Forward points", "F − S, reflecting the interest rate differential."],
      ["CIP", "Covered Interest Parity: F = S × (1+i_quote)/(1+i_base)."],
      ["NDF", "A cash-settled forward for a non-convertible currency."],
      ["Carry trade", "Fund in a low-yield currency, invest in a high-yield one."],
      ["Safe havens", "USD, JPY, CHF (and gold) in risk-off periods."],
      ["WM/Reuters fix", "Benchmark rate set at 4pm London, used to value portfolios."]
    ]
  },

  /* ---------------------------------------------------- */
  actions: {
    title: "Equities",
    level: "Beginner",
    summary: "Valuation, multiples, indices, dividends, delta one, prime brokerage, block trades and ECM.",
    lessons: [
      {
        title: "Valuing a stock",
        html: `
<ul>
<li><b>Market capitalization</b> = share price × number of shares. <b>Enterprise Value (EV)</b> = market cap + net debt (+ minority interests…).</li>
<li><b>P/E</b> = price / EPS: how much you pay for €1 of earnings. High = expected growth or overvaluation.</li>
<li><b>EV/EBITDA</b>: a multiple independent of capital structure, useful for comparisons.</li>
<li><b>Dividend yield</b> = dividend / price.</li>
<li><b>DCF</b>: discounting future free cash flows at the WACC.</li>
<li><b>Beta</b>: sensitivity to the market (β &gt; 1 = more volatile than the index).</li>
</ul>
<div class="tip"><b>Stock pitch:</b> thesis (why the market is wrong), catalysts (earnings, product, M&amp;A), valuation (multiples vs peers), risks, entry/target/stop levels.</div>`
      },
      {
        title: "Indices, dividends and events",
        html: `
<ul>
<li>Indices: CAC 40, Euro Stoxx 50, DAX, S&amp;P 500, Nasdaq 100, Nikkei 225, MSCI World, BRVM Composite.</li>
<li>Most are weighted by (free-float) market cap; the Dow Jones and the Nikkei are price-weighted.</li>
<li><b>Dividend dates</b>: ex-date (the price drops by the dividend amount), record date, payment date.</li>
<li><b>Corporate actions</b>: stock split, rights issue, share buyback, takeover bid.</li>
<li><b>ECM</b>: IPOs, accelerated bookbuilds (ABB), blocks. The desk offers risk <b>block trades</b> (buying the block at a discount).</li>
</ul>`
      },
      {
        title: "Delta one, prime brokerage and equity derivatives",
        html: `
<ul>
<li><b>Delta one</b>: products whose value moves 1-for-1 with the underlying: index futures, <b>total return swaps (TRS)</b>, ETFs, securities lending.</li>
<li><b>Short selling</b>: selling a borrowed security to buy it back cheaper; borrow fee.</li>
<li><b>Prime brokerage</b>: services for hedge funds: financing, securities lending, clearing, leverage.</li>
<li><b>Equity derivatives</b>: listed and OTC options, structured products (autocalls, reverse convertibles), dividend derivatives, variance swaps.</li>
<li><b>Execution</b>: VWAP, TWAP, POV, Implementation Shortfall algos; <b>best execution</b> required under MiFID II.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "The P/E ratio is calculated as…", o: ["Price / Earnings per share", "Earnings / Revenue", "Debt / Equity", "Dividend / Price"], e: "Price-to-Earnings = price ÷ EPS." },
      { q: "On the ex-dividend date, the share price…", o: ["rises by the dividend amount", "falls by roughly the dividend amount", "does not change", "is suspended"], e: "A buyer after the ex-date no longer gets the dividend: the value drops accordingly." },
      { q: "A stock with a beta of 1.5 rises on average by … when the market rises 2%.", o: ["1.5%", "2%", "3%", "0.5%"], e: "1.5 × 2% = 3%." },
      { q: "Which one is a delta one product?", o: ["A straddle", "A total return swap on an index", "A digital option", "A CDS"], e: "A TRS replicates the underlying’s performance 1-for-1." },
      { q: "EV =", o: ["Market cap − net debt", "Market cap + net debt", "Book equity", "Revenue × 10"], e: "Enterprise Value = equity value + net debt (simplified)." },
      { q: "Prime brokerage is mainly for…", o: ["retail investors", "hedge funds", "central banks", "SMEs"], e: "Financing, securities lending and clearing for hedge funds." },
      { q: "A VWAP algorithm aims to…", o: ["execute at the volume-weighted average price", "buy at the day’s low", "execute instantly", "manipulate the price"], e: "Volume Weighted Average Price: it follows the day’s volume profile." },
      { q: "The CAC 40 is weighted…", o: ["by price", "by free-float market cap", "equally", "by revenue"], e: "Like most modern indices." },
      { q: "Short selling requires…", o: ["borrowing the security", "buying an option", "owning the security", "issuing shares"], e: "You borrow the shares to sell and pay a borrow fee." }
    ],
    flashcards: [
      ["P/E", "Price / EPS."],
      ["EV/EBITDA", "A valuation multiple independent of the financing structure."],
      ["Ex-date", "The date from which the share trades without the dividend."],
      ["Delta one", "Products with linear exposure to the underlying (futures, TRS, ETFs)."],
      ["ABB", "Accelerated Bookbuilding: a fast placement of shares with investors."],
      ["Short squeeze", "A sharp rally forcing short sellers to buy back."],
      ["Best execution", "MiFID II obligation to obtain the best result for the client."],
      ["Autocall", "A structured product redeemed early if the underlying is above a barrier on an observation date."]
    ]
  },

  /* ---------------------------------------------------- */
  options: {
    title: "Derivatives & Options",
    level: "Advanced",
    summary: "Forwards/futures, calls & puts, put-call parity, Black-Scholes, Greeks, volatility and strategies.",
    lessons: [
      {
        title: "Forwards, futures and options",
        html: `
<ul>
<li><b>Forward</b>: an OTC contract to buy/sell in the future at a fixed price. <b>Future</b>: the standardized, exchange-traded, cleared version, with daily margin calls.</li>
<li><b>Call</b>: the right (not the obligation) to <b>buy</b> at strike K. Payoff = max(S − K, 0).</li>
<li><b>Put</b>: the right to <b>sell</b> at strike K. Payoff = max(K − S, 0).</li>
<li><b>European</b>: exercisable at expiry only. <b>American</b>: at any time.</li>
<li><b>Intrinsic value</b> + <b>time value</b> = premium. ITM / ATM / OTM.</li>
<li>The buyer pays a premium and their loss is limited to it. The seller collects the premium and has potentially unlimited risk (short call).</li>
</ul>
<div class="formula">Put-call parity: C − P = S − K·e<sup>−rT</sup></div>`
      },
      {
        title: "Black-Scholes and the Greeks",
        html: `
<p>Black-Scholes prices a European option from: S, K, T, r, dividends, and <b>σ (volatility)</b> — the only unobservable input.</p>
<table class="tbl">
<tr><th>Greek</th><th>Measures</th><th>Long call</th></tr>
<tr><td><b>Delta</b> Δ</td><td>Sensitivity to the underlying (≈ probability of ending ITM). ATM ≈ 0.5</td><td>+ (0 to 1)</td></tr>
<tr><td><b>Gamma</b> Γ</td><td>Change in delta; highest ATM close to expiry</td><td>+</td></tr>
<tr><td><b>Vega</b> ν</td><td>Sensitivity to volatility; highest ATM for long maturities</td><td>+</td></tr>
<tr><td><b>Theta</b> Θ</td><td>Time decay</td><td>− (you lose every day)</td></tr>
<tr><td><b>Rho</b> ρ</td><td>Sensitivity to rates</td><td>+</td></tr>
</table>
<div class="tip"><b>Rule of thumb:</b> ATM option ≈ 0.4 × σ × √T × S. E.g. S=100, σ=20%, T=1 year → ≈ 8.</div>
<p><b>Long gamma / short theta</b>: an option buyer gains when the market moves a lot (profitable delta hedging) but pays for time. The seller is the reverse.</p>`
      },
      {
        title: "Volatility: implied, realized, smile",
        html: `
<ul>
<li><b>Realized volatility</b>: annualized standard deviation of past returns.</li>
<li><b>Implied volatility</b>: the vol that, in Black-Scholes, gives back the market price. It is the “price” of options.</li>
<li><b>Smile / skew</b>: implied vol varies with strike. In equities, OTM puts trade at higher vol (skew) because demand for protection is strong and crashes are sudden.</li>
<li><b>Term structure</b> of vol; the <b>VIX</b> = 30-day implied vol of the S&amp;P 500 (the “fear index”).</li>
<li>Annualizing: σ<sub>daily</sub> ≈ σ<sub>annual</sub> / √252 ≈ σ<sub>annual</sub> / 16.</li>
</ul>`
      },
      {
        title: "Option strategies",
        html: `
<table class="tbl">
<tr><th>Strategy</th><th>Construction</th><th>View</th></tr>
<tr><td>Covered call</td><td>Long stock + short call</td><td>Neutral to mildly bullish, generates income</td></tr>
<tr><td>Protective put</td><td>Long stock + long put</td><td>Insurance against a fall</td></tr>
<tr><td>Bull call spread</td><td>Long call K1 + short call K2 (K2&gt;K1)</td><td>Moderately bullish, cheaper premium</td></tr>
<tr><td>Straddle</td><td>Long call + long put, same strike</td><td>Long volatility, big move expected</td></tr>
<tr><td>Strangle</td><td>Long OTM call + long OTM put</td><td>Long vol, cheaper than a straddle</td></tr>
<tr><td>Butterfly</td><td>Long K1, short 2×K2, long K3</td><td>Market stable around K2</td></tr>
<tr><td>Collar</td><td>Long put + short call (+ stock)</td><td>Financed protection</td></tr>
<tr><td>Risk reversal</td><td>Long OTM call + short OTM put</td><td>Bullish, exposure to skew</td></tr>
</table>`
      }
    ],
    quiz: [
      { q: "The payoff of a call at expiry is…", o: ["max(K − S, 0)", "max(S − K, 0)", "S − K", "K"], e: "The buyer exercises if S > K." },
      { q: "The delta of an ATM call is roughly…", o: ["0", "0.25", "0.5", "1"], e: "About 0.5 (slightly more with drift)." },
      { q: "Gamma is highest for an option that is…", o: ["deep ITM, long maturity", "ATM close to expiry", "deep OTM", "independent of strike"], e: "Delta changes very fast around the strike as expiry approaches." },
      { q: "A long straddle is…", o: ["long vol, long gamma, short theta", "short vol, short gamma, long theta", "strongly positive delta", "risk-free"], e: "You buy two options: you pay for time but gain on big moves." },
      { q: "S=100, σ=20%, T=1 year: approximate price of an ATM call?", o: ["2", "4", "8", "20"], e: "0.4 × 0.20 × 1 × 100 = 8." },
      { q: "Put-call parity: C − P =", o: ["K − S", "S − K·e^(−rT)", "S + K", "0"], e: "Long call + short put = synthetic forward." },
      { q: "An annual vol of 32% corresponds to a daily vol of about…", o: ["0.5%", "1%", "2%", "3.2%"], e: "32% / 16 ≈ 2%." },
      { q: "In equities, skew means that…", o: ["OTM calls are more expensive in vol", "OTM puts have higher implied vol", "vol is flat", "vol is negative"], e: "Demand for downside protection makes puts more expensive." },
      { q: "The seller of a naked call has risk that is…", o: ["limited to the premium", "potentially unlimited", "zero", "limited to the strike"], e: "The underlying can rise without limit." },
      { q: "The key difference between a future and a forward:", o: ["the future is OTC", "the future is standardized, exchange-traded and cleared with daily margin", "the forward has margin calls", "none"], e: "A future goes through a clearing house." },
      { q: "The vega of a long option is…", o: ["negative", "positive", "zero", "always equal to delta"], e: "A rise in vol increases the value of options you own." },
      { q: "A client wants downside protection without paying a premium. You offer…", o: ["a straddle", "a zero-cost collar (long put, short call)", "a call", "a butterfly"], e: "The premium of the call sold finances the put bought, giving up part of the upside." }
    ],
    flashcards: [
      ["Delta", "∂V/∂S: sensitivity to the underlying, hedge ratio."],
      ["Gamma", "∂²V/∂S²: how fast delta changes."],
      ["Vega", "Sensitivity to 1 point of implied volatility."],
      ["Theta", "Daily loss of value from the passage of time."],
      ["Implied vol", "The volatility that gives back the market price in Black-Scholes."],
      ["VIX", "30-day implied vol of the S&P 500."],
      ["Straddle", "Call + put at the same strike: a bet on volatility."],
      ["Rule of 16", "Daily σ ≈ annual σ / 16 (√256)."],
      ["Delta hedging", "Neutralizing delta by trading the underlying; a long gamma position buys low / sells high."]
    ]
  },

  /* ---------------------------------------------------- */
  credit: {
    title: "Credit",
    level: "Intermediate",
    summary: "Spreads, ratings, Investment Grade vs High Yield, CDS, iTraxx/CDX indices, seniority.",
    lessons: [
      {
        title: "Credit risk and spreads",
        html: `
<ul>
<li><b>Credit spread</b> = bond yield − risk-free (or swap) rate of the same maturity. It compensates for default risk and liquidity.</li>
<li><b>Ratings</b> (S&amp;P/Fitch): AAA to BBB− = <b>Investment Grade</b>; BB+ and below = <b>High Yield</b> (speculative). Moody’s: Aaa to Baa3.</li>
<li><b>Fallen angel</b>: an issuer downgraded from IG to HY.</li>
<li><b>Expected loss</b> = PD × LGD × EAD. Spread ≈ PD × (1 − recovery rate).</li>
<li><b>Seniority</b>: senior secured &gt; senior unsecured &gt; subordinated &gt; equity.</li>
<li>Spread measures: G-spread, I-spread, Z-spread, OAS (bonds with embedded options).</li>
</ul>`
      },
      {
        title: "CDS and credit indices",
        html: `
<ul>
<li><b>Credit Default Swap</b>: the <b>protection buyer</b> pays a periodic premium; on a <b>credit event</b> (default, restructuring) the seller pays them (100 − recovery).</li>
<li>Buying protection = being <b>short credit</b> (you gain if credit deteriorates). Selling protection = long credit.</li>
<li><b>Indices</b>: iTraxx Europe (IG), iTraxx Crossover (HY), CDX IG/HY (US).</li>
<li><b>CDS basis</b> = CDS spread − bond spread.</li>
<li>Credit events are decided by ISDA’s <b>Determinations Committees</b>.</li>
</ul>
<div class="example">A client holds 10M of a company’s bonds and fears a downgrade: they buy 10M of 5-year CDS protection.</div>`
      }
    ],
    quiz: [
      { q: "BBB− at S&P is…", o: ["High Yield", "the lowest Investment Grade notch", "in default", "AAA"], e: "BBB− is the last IG rating; BB+ is the first HY rating." },
      { q: "Buying CDS protection means being…", o: ["long credit", "short credit", "long rates", "neutral"], e: "You gain if the spread widens or in case of default." },
      { q: "A widening credit spread means…", o: ["higher perceived risk", "lower perceived risk", "a higher bond price", "a better rating"], e: "Investors demand more compensation." },
      { q: "Expected loss =", o: ["PD × LGD × EAD", "PD + LGD", "Spread × Duration", "Coupon − Rate"], e: "Probability of default × loss given default × exposure at default." },
      { q: "A “fallen angel” is…", o: ["an issuer downgraded from IG to HY", "a start-up", "a perpetual bond", "a CDS"], e: "Forced selling by IG funds often creates opportunities." },
      { q: "In a default, which creditor is repaid first?", o: ["Shareholder", "Subordinated", "Senior secured", "Hybrid"], e: "Secured creditors have priority." },
      { q: "Spread 200 bp, recovery 40%. Implied annual PD ≈ ?", o: ["2%", "3.3%", "5%", "0.8%"], e: "PD ≈ spread / (1 − R) = 2% / 0.6 ≈ 3.3%." },
      { q: "The iTraxx Crossover includes…", o: ["European High Yield issuers", "AAA sovereigns", "US equities", "currencies"], e: "It is the most liquid European HY CDS index." }
    ],
    flashcards: [
      ["Investment Grade", "Rating ≥ BBB− (S&P/Fitch) or ≥ Baa3 (Moody’s)."],
      ["High Yield", "Rating ≤ BB+: speculative, wide spread."],
      ["CDS", "Insurance against an issuer’s default."],
      ["LGD", "Loss Given Default = 1 − recovery rate."],
      ["Z-spread", "The constant spread added to the zero curve to match the price."],
      ["iTraxx / CDX", "European / US CDS indices."],
      ["CDS basis", "CDS spread − bond spread."]
    ]
  },

  /* ---------------------------------------------------- */
  commo: {
    title: "Commodities",
    level: "Intermediate",
    summary: "Energy, metals, agriculture, futures, contango/backwardation, roll yield and hedging.",
    lessons: [
      {
        title: "Commodity markets and futures",
        html: `
<ul>
<li>Categories: <b>energy</b> (Brent, WTI, natural gas TTF/Henry Hub), <b>precious metals</b> (gold, silver), <b>base metals</b> (copper, aluminium — LME), <b>agriculture</b> (wheat, cocoa, coffee, cotton).</li>
<li>Mostly traded via <b>futures</b> (ICE, CME/NYMEX, LME) and OTC swaps.</li>
<li><b>Contango</b>: futures &gt; spot (storage and financing costs). A long investor who “rolls” futures loses (negative roll yield).</li>
<li><b>Backwardation</b>: futures &lt; spot (shortage, high convenience yield). Positive roll yield.</li>
<li>Forward price ≈ S × e<sup>(r + storage cost − convenience yield)T</sup>.</li>
</ul>
<div class="tip">West Africa is at the heart of the <b>cocoa</b> market (Côte d’Ivoire, Ghana): a good example of a very volatile agricultural commodity for interviews.</div>`
      },
      {
        title: "Clients and hedging",
        html: `
<ul>
<li><b>Producers</b> (oil companies, miners, cooperatives): sell forward to lock in revenues.</li>
<li><b>Consumers</b> (airlines, manufacturers): buy forward or buy calls to cap their costs.</li>
<li><b>Gold</b>: a safe haven, inversely correlated with real rates and the dollar.</li>
<li>Drivers: OPEC+, inventories (EIA report), geopolitics, weather, Chinese demand, the dollar.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "In contango, futures prices are…", o: ["below spot", "above spot", "equal to spot", "negative"], e: "Carry costs (storage, financing) are built into the forward price." },
      { q: "An airline worried about rising jet fuel prices…", o: ["sells futures", "buys futures or calls", "buys puts", "does nothing"], e: "It hedges against higher costs." },
      { q: "In backwardation, the roll yield of a long position is…", o: ["negative", "positive", "zero", "undetermined"], e: "You sell the front contract higher and buy the next one cheaper." },
      { q: "Gold tends to rise when…", o: ["real rates fall", "real rates rise", "the dollar strengthens sharply", "markets are euphoric"], e: "Gold pays no coupon: its opportunity cost falls when real rates fall." },
      { q: "The LME is the benchmark exchange for…", o: ["oil", "base metals", "cocoa", "gas"], e: "London Metal Exchange: copper, aluminium, nickel, zinc." },
      { q: "A cocoa producer who wants to lock in a selling price…", o: ["buys futures", "sells futures", "buys calls", "sells puts"], e: "They fix today the price of their future harvest." }
    ],
    flashcards: [
      ["Contango", "Futures > spot; negative roll yield for a long."],
      ["Backwardation", "Futures < spot; tight supply."],
      ["Convenience yield", "The benefit of physically holding the commodity."],
      ["Brent vs WTI", "North Sea oil (ICE) vs US oil (NYMEX)."],
      ["TTF", "European natural gas benchmark price."],
      ["OPEC+", "Expanded oil producers’ cartel (including Russia)."]
    ]
  },

  /* ---------------------------------------------------- */
  macro: {
    title: "Macroeconomics & Markets",
    level: "Intermediate",
    summary: "Key indicators, central banks, inflation, and how announcements move each asset class.",
    lessons: [
      {
        title: "Economic indicators to follow",
        html: `
<ul>
<li><b>Inflation</b>: CPI, PCE (the Fed’s preferred gauge), core (ex food and energy), HICP in the euro area.</li>
<li><b>Jobs</b>: Non-Farm Payrolls (NFP, first Friday of the month in the US), unemployment rate, average hourly earnings.</li>
<li><b>Activity</b>: GDP, PMIs (&gt;50 = expansion), retail sales, industrial production, ISM.</li>
<li><b>Sentiment</b>: IFO, ZEW, consumer confidence.</li>
<li><b>Central banks</b>: FOMC (8 meetings a year), ECB Governing Council, BoE, BoJ, BCEAO.</li>
<li><b>Inflation breakeven</b> = nominal yield − real yield (inflation-linked bonds: TIPS, OATi).</li>
</ul>
<div class="tip">In interviews, know the <b>current levels</b>: Fed/ECB policy rates, US 10y and Bund yields, EUR/USD, S&amp;P 500, Brent, gold, VIX, latest inflation print. Check them every morning!</div>`
      },
      {
        title: "Impact of a surprise rate hike",
        html: `
<table class="tbl">
<tr><th>Asset</th><th>Typical reaction</th><th>Why</th></tr>
<tr><td>Bonds</td><td>Price ↓ (especially the front end); curve flattens</td><td>Higher rates</td></tr>
<tr><td>Currency</td><td>↑</td><td>More attractive yield, inflows</td></tr>
<tr><td>Equities</td><td>↓ (especially growth/tech)</td><td>Higher discount rate, higher funding cost</td></tr>
<tr><td>Gold</td><td>↓</td><td>Real rates ↑, dollar ↑</td></tr>
<tr><td>Credit</td><td>Spreads ↑</td><td>Refinancing risk</td></tr>
</table>
<p>Markets react to the <b>surprise</b> relative to consensus, not to the announcement itself (“buy the rumour, sell the news”).</p>`
      },
      {
        title: "Market regimes",
        html: `
<ul>
<li><b>Risk-on</b>: equities ↑, spreads ↓, EM currencies ↑, vol ↓.</li>
<li><b>Risk-off</b>: government bonds ↑, USD/JPY/CHF/gold ↑, equities ↓, VIX ↑.</li>
<li><b>Stagflation</b>: high inflation + weak growth — bad for both equities and bonds.</li>
<li><b>Goldilocks</b>: solid growth, contained inflation.</li>
<li>Equity/bond correlation: negative when inflation is low, often positive when inflation dominates (as in 2022).</li>
</ul>`
      }
    ],
    quiz: [
      { q: "A PMI of 47 indicates…", o: ["an expansion", "a contraction", "high inflation", "a rate hike"], e: "Below 50, activity is contracting." },
      { q: "The Fed hikes more than expected. The dollar…", o: ["falls", "rises", "doesn’t move", "becomes fixed"], e: "USD yields become more attractive." },
      { q: "The Fed’s preferred inflation gauge is…", o: ["CPI", "core PCE", "PPI", "GDP"], e: "The Fed targets 2% on PCE." },
      { q: "Inflation breakeven =", o: ["nominal yield − real yield", "real yield − nominal yield", "CPI − GDP", "policy rate − inflation"], e: "Market-implied inflation (with a risk premium)." },
      { q: "In a risk-off regime, typically…", o: ["the VIX falls", "government bonds rally", "EM currencies rise", "spreads tighten"], e: "Flight to quality." },
      { q: "NFP is released…", o: ["every Thursday", "on the first Friday of the month", "every quarter", "by the ECB"], e: "US jobs data, closely watched." },
      { q: "An inflation surprise mostly hits which stocks?", o: ["value", "growth (long duration)", "defensives", "none"], e: "Their distant cash flows are more sensitive to the discount rate." },
      { q: "The WAEMU central bank is…", o: ["the BEAC", "the BCEAO", "the ECB", "the BoE"], e: "Central Bank of West African States." }
    ],
    flashcards: [
      ["CPI / PCE", "US inflation measures (PCE = the Fed’s target)."],
      ["NFP", "US non-farm job creation."],
      ["PMI", "Purchasing managers’ index; 50 = expansion/contraction threshold."],
      ["FOMC", "The Fed’s monetary policy committee."],
      ["Breakeven", "Expected inflation = nominal − real."],
      ["Risk-on / Risk-off", "Risk appetite vs risk aversion."],
      ["Hawkish / Dovish", "Leaning to tightening / to easing."]
    ]
  },

  /* ---------------------------------------------------- */
  risque: {
    title: "Risk & P&L",
    level: "Advanced",
    summary: "Mark-to-market, P&L explain, VaR, stress tests, limits, counterparty risk, XVA.",
    lessons: [
      {
        title: "P&L and mark-to-market",
        html: `
<ul>
<li><b>Mark-to-market</b>: daily valuation of positions at market prices. <b>Mark-to-model</b> for illiquid products.</li>
<li><b>Realized P&amp;L</b> (closed positions) vs <b>unrealized</b> P&amp;L.</li>
<li><b>P&amp;L explain / attribution</b>: breaking the P&amp;L down by factor (delta, gamma, vega, theta, carry, new trades). <b>Unexplained P&amp;L</b> must stay small.</li>
<li><b>IPV (Independent Price Verification)</b>: Product Control checks the front office’s valuation prices.</li>
<li>“Day one” P&amp;L on a structured product may be deferred if inputs are not observable.</li>
</ul>`
      },
      {
        title: "VaR, stress tests and limits",
        html: `
<ul>
<li><b>Value at Risk</b>: the maximum loss over a given horizon at a given confidence level. E.g. 1-day 99% VaR = €2M → the loss should exceed €2M only one day in 100.</li>
<li>Methods: historical, parametric (variance-covariance), Monte Carlo.</li>
<li>VaR limitations: says nothing about the size of extreme losses → <b>Expected Shortfall (ES)</b>, used by FRTB (Basel).</li>
<li><b>Stress tests</b>: extreme scenarios (Covid 2020, 2008 crisis, 2022 rate shock).</li>
<li><b>Limits</b>: VaR, delta, DV01, vega, stop-loss, concentration. A breach = escalation to risk management.</li>
<li><b>Backtesting</b>: comparing actual losses with predicted VaR.</li>
</ul>`
      },
      {
        title: "Counterparty risk and capital",
        html: `
<ul>
<li><b>Counterparty risk</b>: a derivative counterparty defaults while the contract is in our favour.</li>
<li>Mitigation: <b>collateral</b> (CSA), central clearing (CCP), netting (ISDA Master Agreement).</li>
<li><b>XVA</b>: valuation adjustments — <b>CVA</b> (counterparty default risk), DVA, FVA (funding), KVA (capital), MVA (initial margin).</li>
<li><b>Basel III</b>: solvency ratios (CET1), liquidity (LCR, NSFR), leverage. <b>FRTB</b>: the new market risk framework.</li>
<li><b>Operational risk</b>: input errors (fat finger), fraud (rogue trader), system failures.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "1-day 99% VaR = €5M means…", o: ["you can never lose more than €5M", "1 day in 100, you expect to lose more than €5M", "you lose €5M a day", "you make €5M 99% of the time"], e: "VaR is a quantile, not an absolute maximum." },
      { q: "Which measure better captures extreme losses?", o: ["VaR", "Expected Shortfall", "Delta", "Beta"], e: "ES is the average loss beyond the VaR." },
      { q: "CVA measures…", o: ["the counterparty’s default risk", "the funding cost", "FX risk", "accrued interest"], e: "Credit Valuation Adjustment." },
      { q: "Who performs IPV?", o: ["The trader", "Product Control", "The salesperson", "The client"], e: "Independent price verification by the middle office." },
      { q: "The LCR ratio relates to…", o: ["30-day liquidity", "capital", "leverage", "market risk"], e: "Liquidity Coverage Ratio: liquid assets vs cash outflows over a 30-day stress." },
      { q: "A “fat finger” is a risk that is…", o: ["market", "operational", "credit", "liquidity"], e: "A human input error." },
      { q: "ISDA netting allows…", o: ["offsetting positive and negative exposures with the same counterparty", "avoiding taxes", "removing collateral", "doubling exposure"], e: "In a default, only the net balance is due." }
    ],
    flashcards: [
      ["VaR", "Loss quantile over a horizon and confidence level."],
      ["Expected Shortfall", "Average loss beyond the VaR."],
      ["P&L explain", "Breakdown of P&L by Greeks and risk factors."],
      ["IPV", "Independent Price Verification."],
      ["CVA", "Adjustment for counterparty default risk."],
      ["FRTB", "Fundamental Review of the Trading Book (Basel)."],
      ["CET1", "Common Equity Tier 1 capital."]
    ]
  },

  /* ---------------------------------------------------- */
  posttrade: {
    title: "Post-trade: Middle & Back Office",
    level: "Intermediate",
    summary: "Trade lifecycle, confirmation, clearing, settlement, T+1, collateral, reconciliations, corporate actions, regulation.",
    lessons: [
      {
        title: "The lifecycle of a trade",
        html: `
<ol>
<li><b>Pre-trade</b>: client KYC/onboarding, limit checks, compliance checks.</li>
<li><b>Execution</b>: the trader closes the deal (phone, Bloomberg chat, electronic platform).</li>
<li><b>Capture</b>: booking in the system (Murex, Calypso, Summit, Sophis…) with static data (counterparty, SSIs).</li>
<li><b>Validation</b>: checks by the middle office / trade support.</li>
<li><b>Confirmation / matching</b>: both counterparties confirm the terms (MarkitWire, DTCC CTM, SWIFT MT300 for FX, MT320 for deposits).</li>
<li><b>Clearing</b>: a CCP steps in between buyer and seller (novation) and calculates margins.</li>
<li><b>Settlement</b>: exchange of securities for cash, ideally <b>DvP</b> (Delivery versus Payment).</li>
<li><b>Post-settlement</b>: reconciliations, accounting, regulatory reporting, corporate actions, collateral management.</li>
</ol>`
      },
      {
        title: "Settlement and the T+1 / T+2 cycles",
        html: `
<ul>
<li><b>T</b> = trade date. <b>Value date / settlement date</b> = the date of actual exchange.</li>
<li><b>US equities</b> moved to <b>T+1</b> on 28 May 2024 (as did Canada and Mexico). The <b>EU, the UK and Switzerland</b> plan to move to T+1 on <b>11 October 2027</b>. Until then: T+2.</li>
<li><b>SSI (Standard Settlement Instructions)</b>: a counterparty’s settlement details (account, custodian, BIC). A wrong SSI is a frequent cause of fails.</li>
<li><b>Fail</b>: a settlement that did not happen on the intended date. Causes: missing securities, insufficient cash, unmatched instructions, wrong SSIs.</li>
<li><b>CSDR</b> (Europe): penalties for fails and settlement discipline rules.</li>
<li>SWIFT messages: MT540–543 (securities settlement instructions), MT103/MT202 (payments), migration to <b>ISO 20022</b>.</li>
<li><b>T2S (TARGET2-Securities)</b>: the Eurosystem’s securities settlement platform.</li>
</ul>`
      },
      {
        title: "Reconciliations, collateral and corporate actions",
        html: `
<ul>
<li><b>Cash (nostro) reconciliation</b>: comparing internal entries with correspondent banks’ statements. <b>Nostro</b> = our account with another bank; <b>vostro</b> = their account with us.</li>
<li><b>Position reconciliation</b>: internal securities holdings vs the custodian. A difference = a <b>break</b>, to be investigated and resolved.</li>
<li><b>Collateral management</b>: daily calculation of <b>margin calls</b> (variation margin) under the CSA, initial margin (UMR), dispute management.</li>
<li><b>ISDA Master Agreement</b>: the framework contract for OTC derivatives; <b>CSA</b>: the collateral annex. <b>GMRA</b> for repos, <b>GMSLA</b> for securities lending.</li>
<li><b>Corporate actions</b>: dividends, coupons, splits, tender offers, rights — mandatory or voluntary (with a client election).</li>
</ul>`
      },
      {
        title: "Regulation and control",
        html: `
<ul>
<li><b>MiFID II / MiFIR</b>: transparency, best execution, transaction reporting, recording of communications.</li>
<li><b>EMIR</b>: mandatory clearing of standard OTC derivatives, reporting to trade repositories, risk mitigation techniques.</li>
<li><b>Dodd-Frank</b> (US): the equivalent for swaps.</li>
<li><b>MAR</b> (Market Abuse Regulation): insider dealing, market manipulation.</li>
<li><b>KYC / AML</b>: know your customer, anti-money laundering.</li>
<li><b>SFTR</b>: reporting of securities financing transactions (repos, securities lending).</li>
<li><b>Basel III</b> and <b>FRTB</b> for capital requirements.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "DvP stands for…", o: ["Delivery versus Payment: securities delivered against simultaneous payment", "Daily Value Price", "Deposit versus Pledge", "Derivative Valuation Process"], e: "It removes principal risk at settlement." },
      { q: "Since 28 May 2024, US equities settle…", o: ["T+0", "T+1", "T+2", "T+3"], e: "The US moved from T+2 to T+1." },
      { q: "The EU’s move to T+1 is planned for…", o: ["1 January 2025", "11 October 2027", "28 May 2024", "Never"], e: "The date set by European authorities, aligned with the UK and Switzerland." },
      { q: "A CCP…", o: ["steps in between buyer and seller and mutualizes risk", "holds the securities", "issues bonds", "sets policy rates"], e: "Through novation, it becomes the buyer to every seller and the seller to every buyer." },
      { q: "A nostro account is…", o: ["another bank’s account with us", "our account with another bank", "a securities account", "a client account"], e: "Nostro = “ours, held with you”." },
      { q: "What is a common cause of a fail?", o: ["Wrong SSIs or missing securities", "A rate rise", "A negative P&L", "A credit rating"], e: "Wrong instructions, insufficient securities, insufficient cash." },
      { q: "The CSA is…", o: ["the collateral annex to the ISDA", "a clearing house", "a SWIFT message", "a credit index"], e: "Credit Support Annex: it sets the rules for exchanging collateral." },
      { q: "EMIR notably requires…", o: ["reporting derivatives to trade repositories", "listing shares", "the move to T+1", "rating issuers"], e: "As well as central clearing of standard derivatives." },
      { q: "Difference between clearing and settlement?", o: ["None", "Clearing: calculating obligations and managing risk; settlement: the actual exchange of securities/cash", "Settlement comes before clearing", "Clearing only applies to FX"], e: "Clearing prepares settlement; settlement completes it." },
      { q: "The SWIFT MT300 message is used to…", o: ["confirm an FX trade", "pay a supplier", "instruct a securities settlement", "announce a dividend"], e: "MT300 = FX confirmation; MT320 = loans/deposits." },
      { q: "CSDR provides for…", o: ["penalties for settlement fails", "a bonus cap", "bank separation", "the move to T+0"], e: "The EU regulation on central securities depositories and settlement discipline." },
      { q: "A reconciliation break is…", o: ["a lunch break", "a difference between two data sources to investigate", "a contract termination", "a credit default"], e: "You must find the cause, fix it and document it." }
    ],
    flashcards: [
      ["Trade date / Value date", "Date of the trade / date of actual settlement."],
      ["SSI", "Standard Settlement Instructions."],
      ["DvP", "Delivery versus Payment."],
      ["CCP", "Central counterparty (LCH, Eurex Clearing, CME)."],
      ["Novation", "Replacing a bilateral contract with two contracts facing the CCP."],
      ["Nostro / Vostro", "Our account with them / their account with us."],
      ["Variation margin", "Daily margin call based on mark-to-market."],
      ["Initial margin", "Collateral posted upfront against future risk."],
      ["CSDR", "European settlement discipline (penalties on fails)."],
      ["ISO 20022", "The new financial messaging standard replacing SWIFT MT messages."]
    ]
  },

  /* ---------------------------------------------------- */
  maths: {
    title: "Trader Maths & Probability",
    level: "All levels",
    summary: "Mental arithmetic, expected value, probability, market-making reasoning and estimation.",
    lessons: [
      {
        title: "Mental math tricks",
        html: `
<ul>
<li>× 5: multiply by 10 and halve. × 25: × 100 / 4.</li>
<li>Squares near 50: 48² = 2500 − 2×2×50 + 4 = 2304. Formula: (a−b)² = a² − 2ab + b².</li>
<li>(a+b)(a−b) = a² − b²: 47 × 53 = 2500 − 9 = 2491.</li>
<li>Percentages: 15% of 80 = 10% (8) + 5% (4) = 12. x% of y = y% of x.</li>
<li>Rule of 72: doubling time ≈ 72 / rate (%). At 6% → 12 years.</li>
<li>Useful fractions: 1/8 = 0.125; 1/16 = 0.0625; 1/32 = 0.03125 (Treasuries are quoted in 32nds).</li>
</ul>`
      },
      {
        title: "Expected value and market making",
        html: `
<ul>
<li><b>Expected value</b>: E[X] = Σ x·p(x). One die: (1+…+6)/6 = 3.5.</li>
<li>A trader quotes a market around their <b>fair value</b> (expected value) with a spread that reflects <b>uncertainty</b> and the risk of <b>information asymmetry</b>.</li>
<li>If people keep buying from you, your offer is too low → raise your prices (inventory management, “skewing” your quote).</li>
<li><b>Classic game</b>: “Make me a market on the sum of 3 dice” → fair value 10.5; quote e.g. 10 / 11.</li>
<li><b>Kelly</b>: optimal fraction to bet f* = (bp − q)/b.</li>
</ul>`
      },
      {
        title: "Probability and estimation",
        html: `
<ul>
<li>P(at least one 6 in 4 rolls) = 1 − (5/6)<sup>4</sup> ≈ 51.8%.</li>
<li>Two dice summing to 7: 6/36 = 1/6.</li>
<li>Bayes: P(A|B) = P(B|A)·P(A)/P(B).</li>
<li><b>Fermi questions</b> (“How many petrol stations are there in France?”): structure the problem, state numerical assumptions, sanity-check the order of magnitude. The interviewer is judging your approach.</li>
</ul>`
      }
    ],
    quiz: [
      { q: "48 × 52 = ?", o: ["2,496", "2,504", "2,400", "2,516"], e: "(50−2)(50+2) = 2500 − 4 = 2496." },
      { q: "Expected value of one roll of a six-sided die?", o: ["3", "3.5", "4", "6"], e: "21 / 6 = 3.5." },
      { q: "Fair value of the sum of 3 dice?", o: ["9", "10.5", "12", "18"], e: "3 × 3.5 = 10.5." },
      { q: "Using the rule of 72, at 8% capital doubles in…", o: ["6 years", "9 years", "12 years", "18 years"], e: "72 / 8 = 9." },
      { q: "Probability that two dice sum to 7?", o: ["1/6", "1/12", "7/36", "1/3"], e: "6 combinations out of 36." },
      { q: "Angle between the clock hands at 3:15?", o: ["0°", "7.5°", "15°", "90°"], e: "The hour hand has moved 1/4 of 30° = 7.5°." },
      { q: "You roll a die and may re-roll once, keeping the 2nd result. Optimal expected value?", o: ["3.5", "4", "4.25", "4.5"], e: "Keep 4, 5, 6 (average 5, probability 1/2), otherwise re-roll (3.5): 0.5×5 + 0.5×3.5 = 4.25." },
      { q: "Sum of the integers from 1 to 100?", o: ["5,000", "5,050", "10,100", "4,950"], e: "n(n+1)/2 = 5050." },
      { q: "A Treasury is quoted 99-16. What is the decimal price?", o: ["99.16", "99.50", "99.1600", "99.25"], e: "16/32 = 0.50." }
    ],
    flashcards: [
      ["(a+b)(a−b)", "= a² − b²"],
      ["Rule of 72", "Doubling time ≈ 72 / rate"],
      ["Square root of 252", "≈ 15.9 → the rule of 16 for vol"],
      ["E[die]", "3.5"],
      ["1/32", "0.03125"],
      ["P(at least 1)", "1 − P(none)"]
    ]
  }
};
