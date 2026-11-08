/* =========================================================
   Trading Floor Academy — moteur de l’application
   SPA vanilla JS, routage par hash, progression en localStorage
   ========================================================= */
(function () {
  "use strict";

  const MODULES_FR = window.MODULES;
  let MODULES = MODULES_FR;
  const INTERVIEWS = window.INTERVIEWS;
  const STORE_KEY = "tfa-progress-v1";
  const $app = document.getElementById("app");

  /* ---------------- Niveaux & badges ---------------- */
  const LEVELS = [
    { name: "Stagiaire", xp: 0, icon: "fa-seedling" },
    { name: "Analyste 1", xp: 300, icon: "fa-user" },
    { name: "Analyste 2", xp: 800, icon: "fa-user-tie" },
    { name: "Associate", xp: 1500, icon: "fa-briefcase" },
    { name: "Vice President", xp: 2600, icon: "fa-chart-pie" },
    { name: "Director", xp: 4000, icon: "fa-crown" },
    { name: "Managing Director", xp: 6000, icon: "fa-gem" }
  ];

  const BADGES = [
    { id: "first_lesson", name: "Premier pas", desc: "Lire une première leçon", icon: "fa-shoe-prints" },
    { id: "first_quiz", name: "Baptême du feu", desc: "Terminer un premier quiz", icon: "fa-fire" },
    { id: "perfect", name: "Sans faute", desc: "Obtenir 100 % à un quiz", icon: "fa-bullseye" },
    { id: "streak3", name: "Régulier", desc: "3 jours d’affilée", icon: "fa-calendar-check" },
    { id: "streak7", name: "Discipliné", desc: "7 jours d’affilée", icon: "fa-calendar-week" },
    { id: "all_modules", name: "Généraliste", desc: "Un quiz réussi (≥ 70 %) dans chaque module", icon: "fa-layer-group" },
    { id: "interview10", name: "Prêt(e) pour le superday", desc: "10 questions d’entretien maîtrisées", icon: "fa-handshake" },
    { id: "fo_master", name: "Front Office ready", desc: "Toutes les questions FO maîtrisées", icon: "fa-chart-line" },
    { id: "bo_master", name: "Ops ready", desc: "Toutes les questions MO/BO maîtrisées", icon: "fa-gears" },
    { id: "math20", name: "Calculatrice humaine", desc: "20 bonnes réponses au sprint de calcul", icon: "fa-calculator" },
    { id: "mm_profit", name: "Market maker", desc: "P&L cumulé ≥ +20 au jeu de market making", icon: "fa-scale-unbalanced" },
    { id: "flash50", name: "Mémoire d’éléphant", desc: "50 flashcards maîtrisées", icon: "fa-brain" },
    { id: "daily5", name: "Morning meeting", desc: "5 défis du jour réalisés", icon: "fa-mug-hot" },
    { id: "associate", name: "Promotion !", desc: "Atteindre le niveau Associate", icon: "fa-briefcase" },
    { id: "md", name: "Managing Director", desc: "Atteindre le niveau MD", icon: "fa-gem" }
  ];

  /* ---------------- État persistant ---------------- */
  function defaultState() {
    return {
      xp: 0,
      xpLog: {},          // { "2026-11-08": 120 }
      lessons: {},        // { moduleId: [0,2] }
      quizzes: {},        // { moduleId: { best, attempts, history:[pct] } }
      answers: { correct: 0, total: 0 },
      flash: {},          // { "mod:idx": box }
      interview: {},      // { id: "ok" | "review" }
      math: { best: 0, runs: [] },
      mm: { pnl: 0, rounds: 0 },
      daily: { last: null, count: 0 },
      streak: { count: 0, last: null },
      badges: {},         // { id: date }
      name: "",
      lang: "fr"          // langue du contenu : "fr" | "en"
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return defaultState();
      return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) { return defaultState(); }
  }
  let S = load();
  if (S.ivLang === "en" && !S._langMigrated) { S.lang = "en"; }
  S._langMigrated = true;

  /* ---------------- Langue (FR / EN) ---------------- */
  const EN = window.INTERVIEWS_EN || { cats: {}, q: {} };
  const MEN = window.MODULES_EN || {};
  // Questions supplémentaires (FR + EN dans le même objet)
  (window.INTERVIEWS_EXTRA || []).forEach(x => {
    if (INTERVIEWS.some(q => q.id === x.id)) return;
    INTERVIEWS.push({ id: x.id, role: x.role, cat: x.cat, diff: x.diff, q: x.q, a: x.a });
    EN.q[x.id] = { q: x.qEn, a: x.aEn };
  });
  Object.assign(EN.cats, {
    "Exécution & salle de marché": "Execution & trading floor",
    "Taux & financement": "Rates & funding",
    "Crédit, FX & matières premières": "Credit, FX & commodities",
    "Options & volatilité": "Options & volatility",
    "Structuration": "Structuring",
    "Gestion de portefeuille": "Portfolio management",
    "Macro & actualité": "Macro & current affairs",
    "Risque, conformité & données": "Risk, compliance & data"
  });
  const isEn = () => S.lang === "en";
  const T = (fr, en) => isEn() ? en : fr;
  function localize() {
    if (!isEn()) return MODULES_FR;
    return MODULES_FR.map(m => {
      const e = MEN[m.id]; if (!e) return m;
      return Object.assign({}, m, {
        title: e.title, level: e.level, summary: e.summary,
        lessons: m.lessons.map((l, i) => e.lessons[i] || l),
        quiz: m.quiz.map((q, i) => e.quiz[i] ? Object.assign({}, q, e.quiz[i], { a: q.a }) : q),
        flashcards: m.flashcards.map((c, i) => e.flashcards[i] || c)
      });
    });
  }
  function setLang(l) {
    S.lang = l; MODULES = localize(); save();
    document.documentElement.lang = l;
    route();
  }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* stockage indisponible */ } }

  /* ---------------- Utilitaires ---------------- */
  const today = () => dayKey(new Date());
  function dayKey(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  const mod = id => MODULES.find(m => m.id === id);
  const SHORT = { salle: "Salle", taux: "Taux", fx: "FX", actions: "Actions", options: "Options", credit: "Crédit", commo: "Commodities", macro: "Macro", risque: "Risque", posttrade: "Post-trade", maths: "Maths" };
  const fmt = n => n.toLocaleString("fr-FR");

  function levelInfo(xp) {
    let i = 0;
    while (i < LEVELS.length - 1 && xp >= LEVELS[i + 1].xp) i++;
    const cur = LEVELS[i], next = LEVELS[i + 1];
    const pct = next ? (xp - cur.xp) / (next.xp - cur.xp) : 1;
    return { i, cur, next, pct };
  }

  /* ---------------- Gamification ---------------- */
  function touchStreak() {
    const t = today();
    if (S.streak.last === t) return;
    const y = new Date(); y.setDate(y.getDate() - 1);
    S.streak.count = S.streak.last === dayKey(y) ? S.streak.count + 1 : 1;
    S.streak.last = t;
  }

  function addXP(n, label) {
    if (n <= 0) return;
    const before = levelInfo(S.xp).i;
    S.xp += n;
    S.xpLog[today()] = (S.xpLog[today()] || 0) + n;
    touchStreak();
    const after = levelInfo(S.xp).i;
    toast(`+${n} XP${label ? " · " + label : ""}`, "xp");
    if (after > before) {
      setTimeout(() => celebrate(`Promotion : ${LEVELS[after].name} !`, LEVELS[after].icon), 400);
    }
    checkBadges();
    save();
    renderHeader();
  }

  function award(id) {
    if (S.badges[id]) return;
    S.badges[id] = today();
    const b = BADGES.find(x => x.id === id);
    setTimeout(() => celebrate(`Badge débloqué : ${b.name}`, b.icon), 700);
  }

  function checkBadges() {
    const lessonsRead = Object.values(S.lessons).reduce((s, a) => s + a.length, 0);
    if (lessonsRead >= 1) award("first_lesson");
    const qz = Object.values(S.quizzes);
    if (qz.some(q => q.attempts > 0)) award("first_quiz");
    if (qz.some(q => q.best >= 100)) award("perfect");
    if (S.streak.count >= 3) award("streak3");
    if (S.streak.count >= 7) award("streak7");
    if (MODULES.every(m => (S.quizzes[m.id] || {}).best >= 70)) award("all_modules");
    const ok = INTERVIEWS.filter(q => S.interview[q.id] === "ok");
    if (ok.length >= 10) award("interview10");
    if (INTERVIEWS.filter(q => q.role === "FO").every(q => S.interview[q.id] === "ok")) award("fo_master");
    if (INTERVIEWS.filter(q => q.role === "BO").every(q => S.interview[q.id] === "ok")) award("bo_master");
    if (S.math.best >= 20) award("math20");
    if (S.mm.pnl >= 20) award("mm_profit");
    if (Object.values(S.flash).filter(b => b >= 2).length >= 50) award("flash50");
    if (S.daily.count >= 5) award("daily5");
    if (S.xp >= 1500) award("associate");
    if (S.xp >= 6000) award("md");
  }

  /* ---------------- Calculs de maîtrise ---------------- */
  function mastery(m) {
    const l = (S.lessons[m.id] || []).length / m.lessons.length;
    const q = ((S.quizzes[m.id] || {}).best || 0) / 100;
    const f = m.flashcards.filter((_, i) => (S.flash[m.id + ":" + i] || 0) >= 2).length / m.flashcards.length;
    return Math.round((l * 0.3 + q * 0.5 + f * 0.2) * 100);
  }

  /* ---------------- UI : toasts & célébrations ---------------- */
  function toast(msg, type) {
    const el = document.createElement("div");
    el.className = "toast " + (type || "");
    el.innerHTML = msg;
    document.getElementById("toasts").appendChild(el);
    setTimeout(() => el.classList.add("out"), 2200);
    setTimeout(() => el.remove(), 2700);
  }

  function celebrate(msg, icon) {
    const el = document.createElement("div");
    el.className = "celebrate";
    el.innerHTML = `<div class="celebrate-card"><i class="fa-solid ${icon || "fa-trophy"}"></i><div>${esc(msg)}</div><button class="btn">Continuer</button></div>`;
    el.querySelector("button").onclick = () => el.remove();
    el.onclick = e => { if (e.target === el) el.remove(); };
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
    confetti();
  }

  function confetti() {
    const colors = ["#22d3ee", "#a78bfa", "#f472b6", "#facc15", "#34d399"];
    for (let i = 0; i < 60; i++) {
      const c = document.createElement("span");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.background = colors[i % colors.length];
      c.style.animationDelay = Math.random() * 0.4 + "s";
      c.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 2500);
    }
  }

  /* ---------------- En-tête ---------------- */
  function renderHeader() {
    const L = levelInfo(S.xp);
    document.getElementById("hdr-level").innerHTML = `<i class="fa-solid ${L.cur.icon}"></i> ${L.cur.name}`;
    document.getElementById("hdr-xp").textContent = fmt(S.xp) + " XP";
    document.getElementById("hdr-streak").innerHTML = `<i class="fa-solid fa-fire"></i> ${S.streak.count}`;
    document.getElementById("hdr-bar").style.width = Math.round(L.pct * 100) + "%";
    const NAV = { "#/": ["Dashboard", "Dashboard"], "#/modules": ["Modules", "Modules"], "#/flashcards": ["Flashcards", "Flashcards"], "#/entretiens": ["Entretiens", "Interviews"], "#/arena": ["Arena", "Arena"], "#/glossaire": ["Glossaire", "Glossary"], "#/ressources": ["Ressources", "Resources"] };
    document.querySelectorAll(".nav a").forEach(a => { const n = NAV[a.getAttribute("href")]; const sp = a.querySelector("span"); if (n && sp) sp.textContent = T(n[0], n[1]); });
    const ft = document.getElementById("foot");
    if (ft) ft.textContent = T("Trading Floor Academy · contenu pédagogique, pas un conseil en investissement · progression stockée localement dans ton navigateur", "Trading Floor Academy · educational content, not investment advice · progress stored locally in your browser");
    const lb = document.getElementById("lang-btn");
    if (lb) { lb.textContent = isEn() ? "🇬🇧 EN" : "🇫🇷 FR"; lb.title = T("Passer en anglais", "Switch to French"); }
    document.querySelectorAll(".nav a").forEach(a => {
      const r = location.hash || "#/";
      a.classList.toggle("active", a.getAttribute("href") === r || !!(a.dataset.match && r.startsWith(a.dataset.match)));
    });
  }

  /* =========================================================
     VUES
     ========================================================= */

  /* ---------------- Dashboard ---------------- */
  function viewDashboard() {
    const L = levelInfo(S.xp);
    const mods = MODULES.map(m => ({ m, v: mastery(m) }));
    const avg = Math.round(mods.reduce((s, x) => s + x.v, 0) / mods.length);
    const acc = S.answers.total ? Math.round(S.answers.correct / S.answers.total * 100) : 0;
    const foTot = INTERVIEWS.filter(q => q.role === "FO"), boTot = INTERVIEWS.filter(q => q.role === "BO");
    const foOk = foTot.filter(q => S.interview[q.id] === "ok").length;
    const boOk = boTot.filter(q => S.interview[q.id] === "ok").length;
    const weak = mods.slice().sort((a, b) => a.v - b.v).slice(0, 3);
    const dailyDone = S.daily.last === today();
    const flashKnown = Object.values(S.flash).filter(b => b >= 2).length;
    const flashTotal = MODULES.reduce((s, m) => s + m.flashcards.length, 0);

    $app.innerHTML = `
<section class="hero-dash">
  <div class="level-card card">
    <div class="level-top">
      <div class="level-icon"><i class="fa-solid ${L.cur.icon}"></i></div>
      <div>
        <div class="muted small">Niveau actuel</div>
        <div class="level-name">${L.cur.name}</div>
        <div class="muted small">${L.next ? `${fmt(L.next.xp - S.xp)} XP avant <b>${L.next.name}</b>` : "Sommet atteint 🎉"}</div>
      </div>
    </div>
    <div class="bar big"><span style="width:${Math.round(L.pct * 100)}%"></span></div>
    <div class="ladder">${LEVELS.map((l, i) => `<span class="${i <= L.i ? "on" : ""}" title="${l.name} — ${fmt(l.xp)} XP"><i class="fa-solid ${l.icon}"></i></span>`).join("")}</div>
  </div>
  <div class="daily card ${dailyDone ? "done" : ""}">
    <div class="muted small"><i class="fa-solid fa-mug-hot"></i> Morning meeting</div>
    <h3>Défi du jour</h3>
    <p class="muted">5 questions tirées de tous les modules. +30 XP bonus.</p>
    ${dailyDone ? `<div class="pill ok"><i class="fa-solid fa-check"></i> Fait aujourd’hui — reviens demain</div>` : `<a class="btn" href="#/quiz/daily">Lancer le défi</a>`}
  </div>
</section>

<section class="kpis">
  ${kpi("fa-star", fmt(S.xp), "XP total")}
  ${kpi("fa-fire", S.streak.count + " j", "Série en cours")}
  ${kpi("fa-graduation-cap", avg + " %", "Maîtrise moyenne")}
  ${kpi("fa-crosshairs", acc + " %", `Précision (${fmt(S.answers.total)} rép.)`)}
  ${kpi("fa-brain", flashKnown + "/" + flashTotal, "Flashcards maîtrisées")}
  ${kpi("fa-stopwatch", S.math.best, "Record calcul mental")}
</section>

<section class="grid2">
  <div class="card">
    <div class="card-h"><h3>Activité — 30 derniers jours</h3><span class="muted small">XP gagnés par jour</span></div>
    ${xpChart()}
  </div>
  <div class="card">
    <div class="card-h"><h3>Radar des compétences</h3><span class="muted small">Maîtrise par module</span></div>
    ${radar(mods)}
  </div>
</section>

<section class="grid2">
  <div class="card">
    <div class="card-h"><h3>Progression par module</h3><a class="small" href="#/modules">Tout voir →</a></div>
    <div class="mod-bars">
      ${mods.map(({ m, v }) => `
        <a class="mod-bar" href="#/module/${m.id}">
          <span class="mb-name"><i class="fa-solid ${m.icon}" style="color:${m.color}"></i> ${m.title}</span>
          <span class="bar"><span style="width:${v}%;background:${m.color}"></span></span>
          <span class="mb-val">${v}%</span>
        </a>`).join("")}
    </div>
  </div>
  <div class="card">
    <div class="card-h"><h3>Préparation aux entretiens</h3><a class="small" href="#/entretiens">S’entraîner →</a></div>
    ${ring(foOk, foTot.length, "Front Office", "#22d3ee")}
    ${ring(boOk, boTot.length, "Middle / Back Office", "#a78bfa")}
    <div class="card-h" style="margin-top:18px"><h3>À retravailler</h3></div>
    <ul class="weak">
      ${weak.map(({ m, v }) => `<li><a href="#/module/${m.id}"><i class="fa-solid ${m.icon}" style="color:${m.color}"></i> ${m.title}</a><span class="muted">${v}%</span></li>`).join("")}
    </ul>
  </div>
</section>

<section class="card">
  <div class="card-h"><h3>Régularité — 16 dernières semaines</h3><span class="muted small">Chaque case = un jour</span></div>
  ${heatmap()}
</section>

<section class="card">
  <div class="card-h"><h3>Badges</h3><span class="muted small">${Object.keys(S.badges).length}/${BADGES.length} débloqués</span></div>
  <div class="badges">
    ${BADGES.map(b => `<div class="badge ${S.badges[b.id] ? "on" : ""}" title="${esc(b.desc)}"><i class="fa-solid ${b.icon}"></i><b>${b.name}</b><span>${b.desc}</span></div>`).join("")}
  </div>
</section>

<section class="card">
  <div class="card-h"><h3>Historique des quiz</h3></div>
  ${quizHistory()}
</section>

<section class="card settings">
  <div class="card-h"><h3>Mes données</h3><span class="muted small">Sauvegardées dans ce navigateur</span></div>
  <div class="row-btns">
    <button class="btn ghost" id="exp"><i class="fa-solid fa-download"></i> Exporter ma progression</button>
    <label class="btn ghost"><i class="fa-solid fa-upload"></i> Importer<input type="file" id="imp" accept="application/json" hidden></label>
    <button class="btn danger ghost" id="rst"><i class="fa-solid fa-rotate-left"></i> Réinitialiser</button>
  </div>
</section>`;

    document.getElementById("exp").onclick = () => {
      const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "trading-floor-academy-progression.json";
      a.click();
    };
    document.getElementById("imp").onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then(t => { try { S = Object.assign(defaultState(), JSON.parse(t)); save(); route(); toast("Progression importée"); } catch (_) { toast("Fichier invalide", "err"); } });
    };
    document.getElementById("rst").onclick = () => {
      if (confirm("Effacer toute ta progression ? Cette action est irréversible.")) { S = defaultState(); save(); route(); }
    };
  }

  function kpi(icon, v, l) {
    return `<div class="kpi card"><i class="fa-solid ${icon}"></i><div><div class="kpi-v">${v}</div><div class="muted small">${l}</div></div></div>`;
  }

  function xpChart() {
    const days = [];
    for (let i = 29; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); days.push({ k: dayKey(d), d }); }
    const vals = days.map(x => S.xpLog[x.k] || 0);
    const max = Math.max(50, ...vals);
    const W = 600, H = 180, pad = 24, bw = (W - pad) / 30;
    const total = vals.reduce((a, b) => a + b, 0);
    const bars = vals.map((v, i) => {
      const h = v / max * (H - 30);
      return `<rect x="${pad + i * bw + 2}" y="${H - 18 - h}" width="${bw - 4}" height="${Math.max(h, v ? 2 : 0)}" rx="3" class="xpbar"><title>${days[i].d.toLocaleDateString("fr-FR")} : ${v} XP</title></rect>`;
    }).join("");
    const labels = [0, 10, 20, 29].map(i => `<text x="${i === 29 ? W : pad + i * bw + bw / 2}" y="${H - 4}" class="axis" text-anchor="${i === 29 ? "end" : "middle"}">${days[i].d.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" })}</text>`).join("");
    return `<svg viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="XP par jour">
      <line x1="${pad}" x2="${W}" y1="${H - 18}" y2="${H - 18}" class="gridline"/>
      <line x1="${pad}" x2="${W}" y1="${12}" y2="${12}" class="gridline dash"/>
      <text x="0" y="16" class="axis">${max}</text>
      ${bars}${labels}</svg>
      <div class="muted small">${fmt(total)} XP sur 30 jours · moyenne ${Math.round(total / 30)} XP/jour</div>`;
  }

  function radar(mods) {
    const N = mods.length, R = 110, cx = 160, cy = 140;
    const pt = (i, r) => { const a = -Math.PI / 2 + i * 2 * Math.PI / N; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
    let rings = "";
    [0.25, 0.5, 0.75, 1].forEach(f => { rings += `<polygon class="gridline" fill="none" points="${mods.map((_, i) => pt(i, R * f).join(",")).join(" ")}"/>`; });
    const axes = mods.map((_, i) => { const [x, y] = pt(i, R); return `<line class="gridline" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`; }).join("");
    const shape = mods.map((x, i) => pt(i, R * Math.max(0.02, x.v / 100)).join(",")).join(" ");
    const labels = mods.map((x, i) => {
      const [lx, ly] = pt(i, R + 18);
      const anchor = Math.abs(lx - cx) < 10 ? "middle" : lx > cx ? "start" : "end";
      const short = SHORT[x.m.id] || x.m.title;
      return `<text x="${lx}" y="${ly + 4}" text-anchor="${anchor}" class="axis">${esc(short)}<title>${esc(x.m.title)} : ${x.v}%</title></text>`;
    }).join("");
    return `<svg viewBox="-40 0 400 290" class="chart radar">${rings}${axes}<polygon points="${shape}" class="radar-shape"/>${labels}</svg>`;
  }

  function ring(v, t, label, color) {
    const p = t ? v / t : 0, C = 2 * Math.PI * 26;
    return `<div class="ring">
      <svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" class="ring-bg"/><circle cx="32" cy="32" r="26" class="ring-fg" stroke="${color}" stroke-dasharray="${C * p} ${C}"/></svg>
      <div><b>${label}</b><div class="muted small">${v}/${t} questions maîtrisées (${Math.round(p * 100)}%)</div></div></div>`;
  }

  function heatmap() {
    const weeks = 16, cells = [];
    const end = new Date();
    const d0 = new Date(end); d0.setDate(end.getDate() - weeks * 7 + 1 + (6 - (end.getDay() + 6) % 7));
    for (let w = 0; w < weeks; w++) {
      for (let d = 0; d < 7; d++) {
        const dt = new Date(d0); dt.setDate(d0.getDate() + w * 7 + d);
        if (dt > end) continue;
        const v = S.xpLog[dayKey(dt)] || 0;
        const lvl = v === 0 ? 0 : v < 30 ? 1 : v < 80 ? 2 : v < 150 ? 3 : 4;
        cells.push(`<rect x="${w * 15}" y="${d * 15}" width="12" height="12" rx="3" class="hm l${lvl}"><title>${dt.toLocaleDateString("fr-FR")} : ${v} XP</title></rect>`);
      }
    }
    return `<svg viewBox="0 0 ${weeks * 15} ${7 * 15}" class="chart heat">${cells.join("")}</svg>
      <div class="hm-legend muted small">Moins <span class="hm l0"></span><span class="hm l1"></span><span class="hm l2"></span><span class="hm l3"></span><span class="hm l4"></span> Plus</div>`;
  }

  function quizHistory() {
    const rows = MODULES.filter(m => S.quizzes[m.id]).map(m => {
      const q = S.quizzes[m.id];
      const h = q.history.slice(-10);
      const spark = h.length > 1 ? sparkline(h) : "";
      return `<tr><td><i class="fa-solid ${m.icon}" style="color:${m.color}"></i> ${m.title}</td><td>${q.attempts}</td><td><b>${q.best}%</b></td><td>${h[h.length - 1]}%</td><td>${spark}</td></tr>`;
    });
    if (!rows.length) return `<p class="muted">Aucun quiz encore. <a href="#/modules">Commence par un module</a> !</p>`;
    return `<div class="tbl-wrap"><table class="tbl"><tr><th>Module</th><th>Tentatives</th><th>Meilleur</th><th>Dernier</th><th>Tendance</th></tr>${rows.join("")}</table></div>`;
  }

  function sparkline(h) {
    const W = 90, H = 24;
    const pts = h.map((v, i) => `${i / (h.length - 1) * W},${H - v / 100 * H}`).join(" ");
    return `<svg viewBox="-2 -2 ${W + 4} ${H + 4}" class="spark"><polyline points="${pts}"/></svg>`;
  }

  /* ---------------- Liste des modules ---------------- */
  function viewModules() {
    $app.innerHTML = `
<div class="page-h"><h1>${T("Parcours d’apprentissage", "Learning path")}</h1><p class="muted">${T("11 modules couvrant tout ce qu’il faut savoir pour une salle de marchés : produits, macro, risque et post-marché.", "11 modules covering everything you need to know for a trading floor: products, macro, risk and post-trade.")}</p></div>
<div class="mod-grid">
${MODULES.map((m, i) => {
  const v = mastery(m);
  return `<a class="mod-card card" href="#/module/${m.id}" style="--c:${m.color}">
    <div class="mc-top"><span class="mc-icon"><i class="fa-solid ${m.icon}"></i></span><span class="pill">${m.level}</span></div>
    <div class="muted small">Module ${i + 1}</div>
    <h3>${m.title}</h3>
    <p class="muted small">${m.summary}</p>
    <div class="mc-meta small muted"><span><i class="fa-solid fa-book-open"></i> ${m.lessons.length} ${T("leçons", "lessons")}</span><span><i class="fa-solid fa-circle-question"></i> ${m.quiz.length} questions</span><span><i class="fa-solid fa-clone"></i> ${m.flashcards.length} ${T("cartes", "cards")}</span></div>
    <div class="bar"><span style="width:${v}%;background:${m.color}"></span></div>
    <div class="small"><b>${v}%</b> ${T("maîtrisé", "mastered")}</div>
  </a>`;
}).join("")}
</div>`;
  }

  /* ---------------- Détail d’un module ---------------- */
  function viewModule(id, lessonIdx) {
    const m = mod(id); if (!m) return notFound();
    const li = Math.min(Math.max(parseInt(lessonIdx || "0", 10) || 0, 0), m.lessons.length - 1);
    const read = S.lessons[m.id] || [];
    const L = m.lessons[li];
    const q = S.quizzes[m.id];
    $app.innerHTML = `
<div class="crumbs"><a href="#/modules">Modules</a> / ${m.title}</div>
<div class="module-head" style="--c:${m.color}">
  <span class="mc-icon big"><i class="fa-solid ${m.icon}"></i></span>
  <div><h1>${m.title}</h1><p class="muted">${m.summary}</p></div>
  <div class="mh-score"><div class="kpi-v">${mastery(m)}%</div><div class="muted small">${T("maîtrise", "mastery")}</div></div>
</div>
<div class="module-layout">
  <aside class="lesson-nav card">
    <div class="muted small" style="margin-bottom:8px">${T("Leçons", "Lessons")}</div>
    ${m.lessons.map((l, i) => `<a href="#/module/${m.id}/${i}" class="${i === li ? "on" : ""}"><i class="fa-solid ${read.includes(i) ? "fa-circle-check ok" : "fa-circle"}"></i> ${l.title}</a>`).join("")}
    <hr>
    <a href="#/quiz/${m.id}" class="act"><i class="fa-solid fa-circle-question"></i> Quiz (${m.quiz.length} q.) ${q ? `<span class="pill">${q.best}%</span>` : ""}</a>
    <a href="#/flash/${m.id}" class="act"><i class="fa-solid fa-clone"></i> Flashcards (${m.flashcards.length})</a>
  </aside>
  <article class="lesson card">
    <div class="muted small">${T("Leçon", "Lesson")} ${li + 1}/${m.lessons.length}</div>
    <h2>${L.title}</h2>
    <div class="lesson-body">${L.html}</div>
    <div class="lesson-foot">
      ${li > 0 ? `<a class="btn ghost" href="#/module/${m.id}/${li - 1}"><i class="fa-solid fa-arrow-left"></i> ${T("Précédente", "Previous")}</a>` : "<span></span>"}
      <button class="btn" id="done">${read.includes(li) ? '<i class="fa-solid fa-check"></i> ' + T("Lue", "Read") : T("J’ai compris (+10 XP)", "Got it (+10 XP)")}</button>
      ${li < m.lessons.length - 1 ? `<a class="btn ghost" href="#/module/${m.id}/${li + 1}">${T("Suivante", "Next")} <i class="fa-solid fa-arrow-right"></i></a>` : `<a class="btn ghost" href="#/quiz/${m.id}">${T("Passer le quiz", "Take the quiz")} <i class="fa-solid fa-arrow-right"></i></a>`}
    </div>
  </article>
</div>`;
    document.getElementById("done").onclick = () => {
      const arr = S.lessons[m.id] = S.lessons[m.id] || [];
      if (!arr.includes(li)) { arr.push(li); addXP(10, T("Leçon lue", "Lesson read")); }
      if (li < m.lessons.length - 1) location.hash = `#/module/${m.id}/${li + 1}`;
      else location.hash = `#/quiz/${m.id}`;
    };
  }

  /* ---------------- Quiz ---------------- */
  function viewQuiz(id) {
    let questions, title, isDaily = id === "daily", isMix = id === "mix";
    if (isDaily || isMix) {
      const all = [];
      MODULES.forEach(m => m.quiz.forEach(q => all.push(Object.assign({ mod: m.id }, q))));
      questions = shuffle(all).slice(0, isDaily ? 5 : 15);
      title = isDaily ? T("Défi du jour", "Daily challenge") : T("Quiz mixte — tous modules", "Mixed quiz — all modules");
      if (isDaily && S.daily.last === today()) {
        $app.innerHTML = `<div class="card center"><h2>${T("Défi déjà réalisé aujourd’hui ✅", "Challenge already done today ✅")}</h2><p class="muted">${T("Reviens demain pour garder ta série. En attendant :", "Come back tomorrow to keep your streak. In the meantime:")}</p><a class="btn" href="#/quiz/mix">${T("Quiz mixte", "Mixed quiz")}</a></div>`;
        return;
      }
    } else {
      const m = mod(id); if (!m) return notFound();
      questions = shuffle(m.quiz.map(q => Object.assign({ mod: m.id }, q)));
      title = "Quiz — " + m.title;
    }
    let idx = 0, score = 0, combo = 0, xpRun = 0;
    const missed = [];

    function show() {
      if (idx >= questions.length) return finish();
      const q = questions[idx];
      const order = shuffle(q.o.map((t, i) => ({ t, i })));
      const m = mod(q.mod);
      $app.innerHTML = `
<div class="quiz card">
  <div class="quiz-top">
    <span class="muted small">${title}</span>
    <span class="small">${combo >= 2 ? `<span class="combo"><i class="fa-solid fa-bolt"></i> Combo ×${combo}</span>` : ""} Question ${idx + 1}/${questions.length}</span>
  </div>
  <div class="bar"><span style="width:${idx / questions.length * 100}%"></span></div>
  ${(isDaily || isMix) ? `<div class="pill" style="margin-top:14px;border-color:${m.color};color:${m.color}"><i class="fa-solid ${m.icon}"></i> ${m.title}</div>` : ""}
  <h2 class="q">${q.q}</h2>
  <div class="opts">${order.map((o, k) => `<button class="opt" data-i="${o.i}"><span class="key">${"ABCD"[k]}</span>${o.t}</button>`).join("")}</div>
  <div id="fb"></div>
</div>`;
      const btns = $app.querySelectorAll(".opt");
      btns.forEach(b => b.onclick = () => answer(+b.dataset.i, btns, q));
      document.onkeydown = e => {
        const k = "abcd".indexOf(e.key.toLowerCase());
        if (k >= 0 && btns[k] && !btns[k].disabled) btns[k].click();
        else if (e.key === "Enter") { const n = document.getElementById("next"); if (n) n.click(); }
      };
    }

    function answer(i, btns, q) {
      btns.forEach(b => { b.disabled = true; if (+b.dataset.i === q.a) b.classList.add("good"); });
      const ok = i === q.a;
      S.answers.total++;
      if (ok) {
        S.answers.correct++; score++; combo++;
        const gain = 10 + (combo >= 3 ? 5 : 0);
        xpRun += gain;
      } else {
        combo = 0;
        missed.push(q);
        [...btns].find(b => +b.dataset.i === i).classList.add("bad");
      }
      document.getElementById("fb").innerHTML = `
        <div class="feedback ${ok ? "ok" : "ko"}"><b>${ok ? T("✅ Correct !", "✅ Correct!") : T("❌ Raté", "❌ Wrong")}</b> ${q.e}</div>
        <button class="btn" id="next">${idx + 1 < questions.length ? T("Question suivante", "Next question") : T("Voir le résultat", "See result")} <i class="fa-solid fa-arrow-right"></i></button>`;
      document.getElementById("next").onclick = () => { idx++; show(); };
      save();
    }

    function finish() {
      document.onkeydown = null;
      const pct = Math.round(score / questions.length * 100);
      let bonus = 0;
      if (!isDaily && !isMix) {
        const rec = S.quizzes[id] = S.quizzes[id] || { best: 0, attempts: 0, history: [] };
        rec.attempts++; rec.history.push(pct); rec.best = Math.max(rec.best, pct);
        if (pct === 100) bonus = 50;
      }
      if (isDaily) { S.daily.last = today(); S.daily.count++; bonus = 30; }
      if (isMix && pct >= 80) bonus = 40;
      checkBadges(); save();
      addXP(xpRun + bonus, isDaily ? T("Défi du jour", "Daily challenge") : "Quiz");
      const msg = pct === 100 ? T("Parfait — digne d’un desk head !", "Perfect — desk head material!") : pct >= 80 ? T("Excellent travail !", "Excellent work!") : pct >= 60 ? T("Pas mal, encore un effort.", "Not bad, keep pushing.") : T("À retravailler — relis les leçons.", "Needs work — review the lessons.");
      $app.innerHTML = `
<div class="quiz card center">
  <div class="score-ring">${pct}%</div>
  <h2>${msg}</h2>
  <p class="muted">${score}/${questions.length} ${T("bonnes réponses", "correct answers")} · +${xpRun + bonus} XP${bonus ? ` (${T("dont", "incl.")} ${bonus} bonus)` : ""}</p>
  <div class="row-btns center">
    <a class="btn" href="#/quiz/${id}" onclick="setTimeout(()=>window.dispatchEvent(new HashChangeEvent('hashchange')),0)"><i class="fa-solid fa-rotate"></i> ${T("Recommencer", "Try again")}</a>
    ${(!isDaily && !isMix) ? `<a class="btn ghost" href="#/flash/${id}"><i class="fa-solid fa-clone"></i> Flashcards</a><a class="btn ghost" href="#/module/${id}">${T("Revoir le module", "Review the module")}</a>` : `<a class="btn ghost" href="#/">Dashboard</a>`}
  </div>
  ${missed.length ? `<div class="review"><h3>${T("À revoir", "To review")}</h3>${missed.map(q => `<div class="rv"><b>${q.q}</b><div class="muted">${T("Réponse", "Answer")} : ${q.o[q.a]} — ${q.e}</div></div>`).join("")}</div>` : ""}
</div>`;
      if (pct === 100) confetti();
    }
    show();
  }

  /* ---------------- Flashcards (Leitner) ---------------- */
  function viewFlash(id) {
    let cards = [];
    const pick = id === "all" ? MODULES : [mod(id)].filter(Boolean);
    if (!pick.length) return notFound();
    pick.forEach(m => m.flashcards.forEach((c, i) => cards.push({ key: m.id + ":" + i, f: c[0], b: c[1], m })));
    cards = shuffle(cards).sort((a, b) => (S.flash[a.key] || 0) - (S.flash[b.key] || 0)).slice(0, 20);
    let idx = 0, known = 0;
    const title = id === "all" ? T("Toutes les flashcards", "All flashcards") : pick[0].title;

    function show() {
      if (idx >= cards.length) {
        $app.innerHTML = `<div class="card center"><h2>${T("Session terminée 🎯", "Session complete 🎯")}</h2><p class="muted">${known}/${cards.length} ${T("cartes connues.", "cards known.")}</p>
          <div class="row-btns center"><a class="btn" href="#/flash/${id}" onclick="setTimeout(()=>window.dispatchEvent(new HashChangeEvent('hashchange')),0)">${T("Nouvelle session", "New session")}</a><a class="btn ghost" href="#/">Dashboard</a></div></div>`;
        return;
      }
      const c = cards[idx], box = S.flash[c.key] || 0;
      $app.innerHTML = `
<div class="crumbs"><a href="#/flashcards">Flashcards</a> / ${title}</div>
<div class="flash-wrap">
  <div class="quiz-top"><span class="muted small"><i class="fa-solid ${c.m.icon}" style="color:${c.m.color}"></i> ${c.m.title}</span><span class="small">${idx + 1}/${cards.length} · ${T("boîte", "box")} ${box}/4</span></div>
  <div class="flashcard" id="fc"><div class="fc-inner"><div class="fc-front">${esc(c.f)}<span class="muted small">${T("Clique ou appuie sur Espace pour retourner", "Click or press Space to flip")}</span></div><div class="fc-back">${esc(c.b)}</div></div></div>
  <div class="row-btns center" id="fcb" style="visibility:hidden">
    <button class="btn danger ghost" id="no"><i class="fa-solid fa-xmark"></i> ${T("À revoir", "Review again")}</button>
    <button class="btn ok" id="yes"><i class="fa-solid fa-check"></i> ${T("Je savais", "I knew it")}</button>
  </div>
</div>`;
      const fc = document.getElementById("fc");
      const flip = () => { fc.classList.toggle("flipped"); document.getElementById("fcb").style.visibility = "visible"; };
      fc.onclick = flip;
      document.getElementById("yes").onclick = () => { S.flash[c.key] = Math.min(4, box + 1); known++; addXP(2); idx++; show(); };
      document.getElementById("no").onclick = () => { S.flash[c.key] = 0; save(); idx++; show(); };
      document.onkeydown = e => {
        if (e.code === "Space") { e.preventDefault(); flip(); }
        if (fc.classList.contains("flipped")) { if (e.key === "ArrowRight") document.getElementById("yes").click(); if (e.key === "ArrowLeft") document.getElementById("no").click(); }
      };
    }
    show();
  }

  function viewFlashHome() {
    $app.innerHTML = `<div class="page-h"><h1>Flashcards</h1><p class="muted">${T("Répétition espacée (système de Leitner) : les cartes que tu rates reviennent plus souvent. Une carte est « maîtrisée » à partir de la boîte 2.", "Spaced repetition (Leitner system): cards you miss come back more often. A card counts as “mastered” from box 2.")}</p></div>
    <a class="btn" href="#/flash/all" style="margin-bottom:16px"><i class="fa-solid fa-shuffle"></i> ${T("Session mixte (20 cartes)", "Mixed session (20 cards)")}</a>
    <div class="mod-grid">${MODULES.map(m => {
      const k = m.flashcards.filter((_, i) => (S.flash[m.id + ":" + i] || 0) >= 2).length;
      return `<a class="mod-card card" href="#/flash/${m.id}" style="--c:${m.color}"><div class="mc-top"><span class="mc-icon"><i class="fa-solid ${m.icon}"></i></span></div><h3>${m.title}</h3><div class="bar"><span style="width:${k / m.flashcards.length * 100}%;background:${m.color}"></span></div><div class="small muted">${k}/${m.flashcards.length} ${T("maîtrisées", "mastered")}</div></a>`;
    }).join("")}</div>`;
  }

  /* ---------------- Entretiens ---------------- */
  let ivFilter = { role: "FO", cat: "Toutes", status: "Toutes" };
  function viewInterviews() {
    const cats = ["Toutes", ...new Set(INTERVIEWS.filter(q => q.role === ivFilter.role).map(q => q.cat))];
    if (!cats.includes(ivFilter.cat)) ivFilter.cat = "Toutes";
    const list = INTERVIEWS.filter(q => q.role === ivFilter.role && (ivFilter.cat === "Toutes" || q.cat === ivFilter.cat) &&
      (ivFilter.status === "Toutes" || (ivFilter.status === "Maîtrisées" ? S.interview[q.id] === "ok" : ivFilter.status === "À revoir" ? S.interview[q.id] === "review" : !S.interview[q.id])));
    const tot = INTERVIEWS.filter(q => q.role === ivFilter.role);
    const ok = tot.filter(q => S.interview[q.id] === "ok").length;
    $app.innerHTML = `
<div class="page-h"><h1>${T("Questions d’entretien", "Interview questions")}</h1><p class="muted">${T("Réfléchis à ta réponse (à voix haute, idéalement en moins de 2 minutes), puis révèle la réponse modèle et auto-évalue-toi. +15 XP par question maîtrisée.", "Think through your answer (out loud, ideally in under 2 minutes), then reveal the model answer and rate yourself. +15 XP per mastered question.")}</p></div>
${langToggle()}
<div class="tabs">
  <button class="tab ${ivFilter.role === "FO" ? "on" : ""}" data-role="FO"><i class="fa-solid fa-chart-line"></i> Front Office</button>
  <button class="tab ${ivFilter.role === "BO" ? "on" : ""}" data-role="BO"><i class="fa-solid fa-gears"></i> Middle & Back Office</button>
  <a class="tab" href="#/simulation"><i class="fa-solid fa-user-tie"></i> ${T("Simulation d’entretien", "Mock interview")}</a>
</div>
<div class="filters">
  ${cats.map(c => `<button class="chip ${ivFilter.cat === c ? "on" : ""}" data-cat="${esc(c)}">${catLabel(c)}</button>`).join("")}
  <span class="sep"></span>
  ${["Toutes", "Non vues", "À revoir", "Maîtrisées"].map(s => `<button class="chip ${ivFilter.status === s ? "on" : ""}" data-st="${s}">${isEn() ? { "Toutes": "All", "Non vues": "Not seen", "À revoir": "Review again", "Maîtrisées": "Mastered" }[s] : s}</button>`).join("")}
</div>
<div class="muted small" style="margin:6px 0 14px">${ok}/${tot.length} ${T("maîtrisées", "mastered")}</div>
<div class="iv-list">
  ${list.length ? list.map(q => ivCard(q)).join("") : `<p class="muted">Aucune question pour ce filtre.</p>`}
</div>`;
    $app.querySelectorAll("[data-role]").forEach(b => b.onclick = () => { ivFilter.role = b.dataset.role; ivFilter.cat = "Toutes"; viewInterviews(); });
    $app.querySelectorAll("[data-cat]").forEach(b => b.onclick = () => { ivFilter.cat = b.dataset.cat; viewInterviews(); });
    $app.querySelectorAll("[data-st]").forEach(b => b.onclick = () => { ivFilter.status = b.dataset.st; viewInterviews(); });
    bindIv();
    bindLang(viewInterviews);
  }

  const catLabel = c => (isEn() && EN.cats[c]) || (c === "Toutes" && isEn() ? "All" : c);
  function langToggle() {
    return `<div class="lang-toggle" role="group" aria-label="Langue / Language">
      <button class="chip ${!isEn() ? "on" : ""}" data-lang="fr">🇫🇷 Français</button>
      <button class="chip ${isEn() ? "on" : ""}" data-lang="en">🇬🇧 English</button></div>`;
  }
  function bindLang(rerender) {
    $app.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => setLang(b.dataset.lang));
  }

  function ivCard(q) {
    const st = S.interview[q.id];
    const tr = isEn() && EN.q[q.id];
    const qq = tr ? tr.q : q.q, qa = tr ? tr.a : q.a;
    return `<div class="iv card ${st || ""}" data-id="${q.id}">
      <div class="iv-h"><span class="pill">${catLabel(q.cat)}</span><span class="diff">${"●".repeat(q.diff)}${"○".repeat(3 - q.diff)}</span>${st === "ok" ? `<span class="pill ok"><i class="fa-solid fa-check"></i> ${T("Maîtrisée", "Mastered")}</span>` : st === "review" ? `<span class="pill warn">${T("À revoir", "Review again")}</span>` : ""}</div>
      <h3>${qq}</h3>
      <button class="btn ghost reveal"><i class="fa-solid fa-eye"></i> ${T("Voir la réponse modèle", "Show model answer")}</button>
      <div class="iv-a" hidden><div class="answer">${qa}</div>
        <div class="row-btns"><button class="btn danger ghost rv-no">${T("À revoir", "Review again")}</button><button class="btn ok rv-ok"><i class="fa-solid fa-check"></i> ${T("Je maîtrise", "Got it")}</button></div></div>
    </div>`;
  }

  function bindIv(onRate) {
    $app.querySelectorAll(".iv").forEach(card => {
      const id = card.dataset.id;
      card.querySelector(".reveal").onclick = e => { card.querySelector(".iv-a").hidden = false; e.target.remove(); };
      card.querySelector(".rv-ok").onclick = () => {
        if (S.interview[id] !== "ok") { S.interview[id] = "ok"; addXP(15, "Question maîtrisée"); }
        onRate ? onRate(true) : viewInterviews();
      };
      card.querySelector(".rv-no").onclick = () => { S.interview[id] = "review"; save(); onRate ? onRate(false) : viewInterviews(); };
    });
  }

  /* ---------------- Simulation d’entretien (chrono) ---------------- */
  function viewSimulation() {
    $app.innerHTML = `
<div class="page-h"><h1>${T("Simulation d’entretien", "Mock interview")}</h1><p class="muted">${T("Tirage aléatoire de questions. 2 minutes par réponse, à voix haute. Comme en superday.", "Random questions. 2 minutes per answer, out loud. Just like a superday.")}</p></div>
<div class="sim-setup card">
  ${langToggle()}
  <h3>${T("Choisis ton format", "Choose your format")}</h3>
  <div class="row-btns">
    <button class="btn" data-sim="FO"><i class="fa-solid fa-chart-line"></i> Front Office (6 questions)</button>
    <button class="btn" data-sim="BO"><i class="fa-solid fa-gears"></i> Middle/Back Office (6 questions)</button>
    <button class="btn ghost" data-sim="ALL"><i class="fa-solid fa-shuffle"></i> ${T("Mixte", "Mixed")} (8 questions)</button>
  </div>
</div>`;
    $app.querySelectorAll("[data-sim]").forEach(b => b.onclick = () => runSim(b.dataset.sim));
    bindLang(viewSimulation);
  }

  let simTimer = null;
  function runSim(kind) {
    const pool = INTERVIEWS.filter(q => kind === "ALL" || q.role === kind);
    // garantir un mix : comportemental + technique
    const qs = shuffle(pool).slice(0, kind === "ALL" ? 8 : 6);
    let i = 0, ok = 0;
    function next() {
      clearInterval(simTimer);
      if (i >= qs.length) {
        $app.innerHTML = `<div class="card center"><h2>Entretien terminé</h2><p class="muted">Tu estimes maîtriser ${ok}/${qs.length} réponses.</p><div class="score-ring">${Math.round(ok / qs.length * 100)}%</div>
        <div class="row-btns center"><a class="btn" href="#/simulation">Nouvelle simulation</a><a class="btn ghost" href="#/entretiens">Revoir les questions</a></div></div>`;
        addXP(20, "Simulation terminée");
        return;
      }
      const q = qs[i];
      let t = 120;
      $app.innerHTML = `
<div class="quiz-top"><span class="muted small">Simulation ${kind === "ALL" ? "mixte" : kind === "FO" ? "Front Office" : "Middle/Back Office"}</span><span class="small">Question ${i + 1}/${qs.length}</span></div>
<div class="timer" id="tm">2:00</div>
<div class="iv-list">${ivCard(q)}</div>`;
      simTimer = setInterval(() => {
        t--; const el = document.getElementById("tm"); if (!el) return clearInterval(simTimer);
        el.textContent = Math.floor(Math.max(t, 0) / 60) + ":" + String(Math.max(t, 0) % 60).padStart(2, "0");
        if (t <= 20) el.classList.add("warn");
        if (t <= 0) { clearInterval(simTimer); el.textContent = "Temps écoulé"; const r = $app.querySelector(".reveal"); if (r) r.click(); }
      }, 1000);
      bindIv(good => { if (good) ok++; i++; next(); });
    }
    next();
  }

  /* ---------------- Arène : jeux ---------------- */
  function viewArena() {
    $app.innerHTML = `
<div class="page-h"><h1>Trading Arena</h1><p class="muted">Les tests des desks : calcul mental chronométré et jeu de market making.</p></div>
<div class="grid2">
  <a class="card game" href="#/arena/math"><i class="fa-solid fa-stopwatch"></i><h3>Sprint de calcul mental</h3><p class="muted">60 secondes, un maximum de bonnes réponses. Multiplications, pourcentages, fractions, comme aux tests en ligne des banques.</p><div class="pill">Record : ${S.math.best}</div></a>
  <a class="card game" href="#/arena/mm"><i class="fa-solid fa-dice"></i><h3>Market making : 3 dés</h3><p class="muted">Cote un bid/ask sur la somme de 3 dés révélés progressivement. Un trader informé te pique si tu es mal placé ; un client te paie le spread si tu es serré.</p><div class="pill">P&amp;L cumulé : ${S.mm.pnl >= 0 ? "+" : ""}${S.mm.pnl.toFixed(1)}</div></a>
</div>
${S.math.runs.length ? `<div class="card"><div class="card-h"><h3>Tes derniers sprints</h3></div>${sprintChart()}</div>` : ""}`;
  }

  function sprintChart() {
    const r = S.math.runs.slice(-20);
    if (r.length < 2) return `<p class="muted">Dernier score : ${r[0]}</p>`;
    const W = 600, H = 140, max = Math.max(10, ...r);
    const pts = r.map((v, i) => `${20 + i / (r.length - 1) * (W - 30)},${H - 15 - v / max * (H - 30)}`).join(" ");
    return `<svg viewBox="0 0 ${W} ${H}" class="chart"><line class="gridline" x1="20" x2="${W}" y1="${H - 15}" y2="${H - 15}"/><polyline points="${pts}" class="line"/>${r.map((v, i) => `<circle cx="${20 + i / (r.length - 1) * (W - 30)}" cy="${H - 15 - v / max * (H - 30)}" r="3.5" class="dot"><title>${v}</title></circle>`).join("")}<text x="0" y="14" class="axis">${max}</text></svg>`;
  }

  function genMath() {
    const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
    const t = R(0, 7);
    let q, a;
    switch (t) {
      case 0: { const x = R(12, 99), y = R(3, 9); q = `${x} × ${y}`; a = x * y; break; }
      case 1: { const x = R(11, 49), y = R(11, 29); q = `${x} × ${y}`; a = x * y; break; }
      case 2: { const x = R(100, 999), y = R(100, 999); q = `${x} + ${y}`; a = x + y; break; }
      case 3: { const x = R(200, 999), y = R(50, 199); q = `${x} − ${y}`; a = x - y; break; }
      case 4: { const p = [5, 10, 15, 20, 25, 30, 40, 75][R(0, 7)], b = R(2, 40) * 20; q = `${p} % de ${b}`; a = p * b / 100; break; }
      case 5: { const y = R(3, 12), a0 = R(4, 30); q = `${a0 * y} ÷ ${y}`; a = a0; break; }
      case 6: { const f = [[1, 8, 0.125], [3, 8, 0.375], [5, 8, 0.625], [1, 16, 0.0625], [3, 4, 0.75], [1, 32, 0.03125], [7, 8, 0.875], [3, 16, 0.1875]][R(0, 7)]; q = `${f[0]}/${f[1]} en décimal`; a = f[2]; break; }
      default: { const x = R(0.5, 9.5) + R(0, 9) / 10, y = R(2, 9); q = `${x.toLocaleString("fr-FR")} × ${y}`; a = Math.round(x * y * 10) / 10; }
    }
    return { q, a };
  }

  function viewMath() {
    $app.innerHTML = `
<div class="crumbs"><a href="#/arena">Arena</a> / Sprint de calcul</div>
<div class="card center math">
  <h2>Sprint de calcul mental</h2>
  <p class="muted">60 secondes. Tape ta réponse puis Entrée (virgule ou point acceptés). Une erreur = −1 point.</p>
  <button class="btn" id="go"><i class="fa-solid fa-play"></i> Démarrer</button>
  <div class="muted small" style="margin-top:12px">Record : ${S.math.best}</div>
</div>`;
    document.getElementById("go").onclick = () => {
      let t = 60, score = 0, good = 0, cur = genMath();
      $app.querySelector(".math").innerHTML = `
        <div class="timer" id="tm">60</div>
        <div class="math-q" id="mq">${cur.q}</div>
        <input id="mi" class="math-in" inputmode="decimal" autocomplete="off" autofocus>
        <div class="muted" id="ms">Score : 0</div>`;
      const inp = document.getElementById("mi"); inp.focus();
      const timer = setInterval(() => {
        t--; const el = document.getElementById("tm"); if (!el) return clearInterval(timer);
        el.textContent = t; if (t <= 10) el.classList.add("warn");
        if (t <= 0) { clearInterval(timer); end(); }
      }, 1000);
      inp.onkeydown = e => {
        if (e.key !== "Enter" || inp.value.trim() === "") return;
        const v = parseFloat(inp.value.replace(",", ".").replace(/\s/g, ""));
        if (Math.abs(v - cur.a) < 1e-6) { score++; good++; inp.classList.remove("shake"); }
        else { score--; inp.classList.remove("shake"); void inp.offsetWidth; inp.classList.add("shake"); toast(`${cur.q} = ${String(cur.a).replace(".", ",")}`, "err"); }
        cur = genMath(); document.getElementById("mq").textContent = cur.q; inp.value = "";
        document.getElementById("ms").textContent = "Score : " + score;
      };
      function end() {
        const record = score > S.math.best;
        S.math.best = Math.max(S.math.best, score); S.math.runs.push(score);
        addXP(good * 3, "Sprint");
        $app.querySelector(".math").innerHTML = `<h2>${record ? "🏆 Nouveau record !" : "Temps écoulé"}</h2><div class="score-ring">${score}</div><p class="muted">${good} bonnes réponses · record ${S.math.best}</p>
          <div class="row-btns center"><a class="btn" href="#/arena/math" onclick="setTimeout(()=>window.dispatchEvent(new HashChangeEvent('hashchange')),0)">Rejouer</a><a class="btn ghost" href="#/arena">Arena</a></div>`;
        if (record) confetti();
      }
    };
  }

  function viewMM() {
    const dice = [1, 2, 3].map(() => 1 + Math.floor(Math.random() * 6));
    const truth = dice.reduce((a, b) => a + b, 0);
    let step = 0, roundPnl = 0;
    const log = [];
    function fair() { return dice.slice(0, step).reduce((a, b) => a + b, 0) + (3 - step) * 3.5; }

    function render(msg) {
      $app.innerHTML = `
<div class="crumbs"><a href="#/arena">Arena</a> / Market making</div>
<div class="card mm">
  <h2>Fais-moi un marché sur la somme de 3 dés</h2>
  <p class="muted small">Les dés sont révélés un par un. À chaque étape, cote un bid et un ask (écart max 4). Un <b>trader informé</b> connaît la somme : il t’achète si ton ask est trop bas et te vend si ton bid est trop haut. Un <b>client</b> traite au hasard d’autant plus souvent que ton spread est serré. Règlement final à la vraie somme.</p>
  <div class="dice">${dice.map((d, i) => `<div class="die ${i < step ? "shown" : ""}">${i < step ? d : "?"}</div>`).join("")}</div>
  ${step < 3 ? `
  <div class="mm-form">
    <label>Bid <input id="bid" type="number" step="0.5" value="${(Math.floor(fair()) - 0.5).toFixed(1)}"></label>
    <label>Ask <input id="ask" type="number" step="0.5" value="${(Math.ceil(fair()) + 0.5).toFixed(1)}"></label>
    <button class="btn" id="quote">Coter</button>
  </div>
  <div class="muted small">Étape ${step + 1}/3 · indice : juste valeur actuelle = ${dice.slice(0, step).length ? "somme visible + 3,5 par dé caché" : "3 × 3,5"}</div>` : ""}
  ${msg ? `<div class="feedback ${roundPnl >= 0 ? "ok" : "ko"}">${msg}</div>` : ""}
  <div class="mm-log">${log.map(l => `<div>${l}</div>`).join("")}</div>
  <div class="mm-pnl">P&L de la manche : <b class="${roundPnl >= 0 ? "pos" : "neg"}">${roundPnl >= 0 ? "+" : ""}${roundPnl.toFixed(1)}</b> · P&L cumulé : <b>${(S.mm.pnl).toFixed(1)}</b></div>
  ${step >= 3 ? `<div class="row-btns center"><a class="btn" href="#/arena/mm" onclick="setTimeout(()=>window.dispatchEvent(new HashChangeEvent('hashchange')),0)">Nouvelle manche</a><a class="btn ghost" href="#/arena">Arena</a></div>` : ""}
</div>`;
      const q = document.getElementById("quote");
      if (q) q.onclick = quote;
    }

    function quote() {
      const bid = parseFloat(document.getElementById("bid").value), ask = parseFloat(document.getElementById("ask").value);
      if (!(ask > bid)) return toast("L’ask doit être supérieur au bid", "err");
      if (ask - bid > 4) return toast("Spread trop large (max 4)", "err");
      let p = 0; const lines = [];
      if (ask < truth) { p += ask - truth; lines.push(`🦈 Le trader informé t’achète à ${ask} (perte ${(ask - truth).toFixed(1)})`); }
      if (bid > truth) { p += truth - bid; lines.push(`🦈 Le trader informé te vend à ${bid} (perte ${(truth - bid).toFixed(1)})`); }
      const pClient = Math.max(0, 1 - (ask - bid) / 4);
      if (Math.random() < pClient) {
        if (Math.random() < 0.5) { p += ask - truth; lines.push(`🙂 Un client achète à ${ask} (${ask - truth >= 0 ? "+" : ""}${(ask - truth).toFixed(1)})`); }
        else { p += truth - bid; lines.push(`🙂 Un client vend à ${bid} (${truth - bid >= 0 ? "+" : ""}${(truth - bid).toFixed(1)})`); }
      }
      if (!lines.length) lines.push("Personne n’a traité — spread trop large ?");
      roundPnl += p;
      log.push(`<b>Étape ${step + 1}</b> — ${bid} / ${ask} · ${lines.join(" · ")}`);
      step++;
      if (step >= 3) {
        S.mm.pnl += roundPnl; S.mm.rounds++;
        if (roundPnl > 0) addXP(Math.min(30, Math.round(roundPnl * 5) + 5), "Market making"); else { checkBadges(); save(); }
        render(`Somme réelle : <b>${truth}</b>. ${roundPnl > 0 ? "Bien coté !" : "Le marché t’a piqué : cote plus près de la juste valeur."}`);
      } else render();
    }
    render();
  }

  /* ---------------- Glossaire ---------------- */
  function viewGlossary() {
    const all = [];
    MODULES.forEach(m => m.flashcards.forEach(c => all.push({ t: c[0], d: c[1], m })));
    all.sort((a, b) => a.t.localeCompare(b.t, S.lang));
    $app.innerHTML = `
<div class="page-h"><h1>${T("Glossaire", "Glossary")}</h1><p class="muted">${all.length} ${T("termes clés du jargon de salle de marchés.", "key terms of trading floor jargon.")}</p></div>
<input class="search" id="gs" placeholder="${T("Rechercher un terme (ex : duration, CCP, delta)…", "Search a term (e.g. duration, CCP, delta)…")}">
<div class="gloss" id="gl"></div>`;
    const draw = f => {
      const x = f.toLowerCase();
      document.getElementById("gl").innerHTML = all.filter(g => !x || g.t.toLowerCase().includes(x) || g.d.toLowerCase().includes(x))
        .map(g => `<div class="g card"><b>${esc(g.t)}</b><span>${esc(g.d)}</span><a class="small" href="#/module/${g.m.id}" style="color:${g.m.color}">${g.m.title}</a></div>`).join("") || `<p class="muted">${T("Aucun résultat.", "No results.")}</p>`;
    };
    draw("");
    document.getElementById("gs").oninput = e => draw(e.target.value);
  }

  /* ---------------- Ressources ---------------- */
  function viewResources() {
    $app.innerHTML = `
<div class="page-h"><h1>Ressources & routine</h1><p class="muted">Ce qu’un(e) candidat(e) en Sales &amp; Trading doit faire chaque jour, et où se former.</p></div>
<div class="grid2">
<div class="card"><h3><i class="fa-solid fa-sun"></i> Routine du matin (20 min)</h3>
<ol class="list">
<li>Niveaux de clôture : S&amp;P 500, Euro Stoxx 50, CAC 40, 10 ans US et Bund, EUR/USD, USD/JPY, Brent, or, VIX.</li>
<li>Ce qui a bougé la nuit en Asie et pourquoi.</li>
<li>Calendrier économique du jour (inflation, emploi, banques centrales, résultats).</li>
<li>Une idée de trade notée dans ton journal de marché (thèse, véhicule, risque).</li>
<li>Le défi du jour sur cette app 😉</li>
</ol></div>
<div class="card"><h3><i class="fa-solid fa-newspaper"></i> À lire / écouter</h3>
<ul class="list">
<li><b>Presse :</b> Financial Times, Les Échos, Wall Street Journal, Bloomberg, Reuters, Agence Ecofin (Afrique).</li>
<li><b>Podcasts :</b> Odd Lots (Bloomberg), FT Unhedged, Macro Musings, Goldman Sachs Exchanges.</li>
<li><b>Livres :</b> <i>Options, Futures and Other Derivatives</i> (Hull) · <i>Fixed Income Securities</i> (Tuckman) · <i>Trading and Exchanges</i> (Harris) · <i>Heard on the Street</i> (Crack) · <i>A Practical Guide to Quantitative Finance Interviews</i> (Zhou).</li>
<li><b>Calcul mental :</b> Tradermath, Zetamac (arithmetic game).</li>
</ul></div>
<div class="card"><h3><i class="fa-solid fa-route"></i> Plan conseillé (8 semaines)</h3>
<ol class="list">
<li>S1 : Salle de marchés + Maths</li><li>S2 : Actions + Macro</li><li>S3 : Taux & Obligations</li><li>S4 : Change (FX)</li>
<li>S5 : Dérivés & Options</li><li>S6 : Crédit + Matières premières</li><li>S7 : Risque & P&amp;L + Post-trade</li><li>S8 : Simulations d’entretien quotidiennes</li>
</ol></div>
<div class="card"><h3><i class="fa-solid fa-lightbulb"></i> Conseils d’entretien</h3>
<ul class="list">
<li>Prépare 2 pitchs (une action long, une idée macro) et mets-les à jour chaque semaine.</li>
<li>Raisonne à voix haute sur les questions techniques et de calcul.</li>
<li>Méthode STAR pour les questions comportementales.</li>
<li>Prépare 3 questions intelligentes pour l’interviewer (sur le desk, les clients, la stratégie).</li>
<li>Networking : contacte des analystes sur LinkedIn avant les candidatures.</li>
</ul></div>
</div>`;
  }

  function notFound() { $app.innerHTML = `<div class="card center"><h2>Page introuvable</h2><a class="btn" href="#/">Retour au dashboard</a></div>`; }

  /* ---------------- Routeur ---------------- */
  function route() {
    clearInterval(simTimer);
    document.onkeydown = null;
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    const [p, a, b] = parts;
    switch (p) {
      case "": viewDashboard(); break;
      case "modules": viewModules(); break;
      case "module": viewModule(a, b); break;
      case "quiz": viewQuiz(a); break;
      case "flashcards": viewFlashHome(); break;
      case "flash": viewFlash(a); break;
      case "entretiens": viewInterviews(); break;
      case "simulation": viewSimulation(); break;
      case "arena": a === "math" ? viewMath() : a === "mm" ? viewMM() : viewArena(); break;
      case "glossaire": viewGlossary(); break;
      case "ressources": viewResources(); break;
      default: notFound();
    }
    renderHeader();
    window.scrollTo(0, 0);
    document.body.classList.remove("menu-open");
  }

  window.addEventListener("hashchange", route);
  document.getElementById("burger").onclick = () => document.body.classList.toggle("menu-open");
  MODULES = localize();
  document.documentElement.lang = S.lang;
  document.getElementById("lang-btn").onclick = () => setLang(isEn() ? "fr" : "en");
  checkBadges(); save();
  route();
})();
