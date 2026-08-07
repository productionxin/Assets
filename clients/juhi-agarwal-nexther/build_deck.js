const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.author = "ProductionX";
pres.title = "neXtHer — Proposal";

// ---- Palette ----
const PLUM   = "3D1B2E"; // dark slide background
const BERRY  = "6D2E46"; // primary
const ROSE   = "A26769"; // secondary
const GOLD   = "D9A441"; // accent
const WHITE  = "FFFFFF";
const TINT   = "F7F2F4"; // light berry tint for cards
const INK    = "2B1620"; // text on light
const MUTED  = "7A6068"; // muted text on light
const MUTEDD = "C9AEB8"; // muted text on dark

const HFONT = "Cambria";
const BFONT = "Calibri";

const M = 0.7;           // left margin
const W = 13.3 - M * 2;  // usable width

// ---- helpers ----
function darkSlide() {
  const s = pres.addSlide();
  s.background = { color: PLUM };
  return s;
}
function lightSlide() {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  return s;
}
function eyebrow(s, text, onDark) {
  s.addText(text.toUpperCase(), {
    x: M, y: 0.45, w: W, h: 0.3, margin: 0,
    fontFace: BFONT, fontSize: 12, bold: true, charSpacing: 2,
    color: onDark ? GOLD : ROSE,
  });
}
function title(s, text, onDark, opts) {
  opts = opts || {};
  s.addText(text, {
    x: M, y: opts.y || 0.85, w: opts.w || W, h: opts.h || 1.0, margin: 0,
    fontFace: HFONT, fontSize: opts.size || 38, bold: true,
    color: onDark ? WHITE : INK, lineSpacing: opts.size ? opts.size * 1.15 : 44,
  });
}
function badge(s, x, y, label, fill, textColor, size) {
  const d = size || 0.55;
  s.addShape(pres.ShapeType.ellipse, {
    x: x, y: y, w: d, h: d, fill: { color: fill },
  });
  s.addText(label, {
    x: x, y: y, w: d, h: d, margin: 0,
    fontFace: BFONT, fontSize: d > 0.5 ? 16 : 13, bold: true,
    color: textColor, align: "center", valign: "middle",
  });
}
function footnote(s, text, onDark) {
  s.addText(text, {
    x: M, y: 6.85, w: W, h: 0.35, margin: 0,
    fontFace: BFONT, fontSize: 11, italic: true,
    color: onDark ? MUTEDD : MUTED,
  });
}

/* ============================ 1. TITLE ============================ */
{
  const s = darkSlide();
  s.addShape(pres.ShapeType.ellipse, { x: 9.6, y: -1.6, w: 5.6, h: 5.6, fill: { color: BERRY } });
  s.addShape(pres.ShapeType.ellipse, { x: 11.4, y: 4.4, w: 3.2, h: 3.2, fill: { color: ROSE }, transparency: 55 });

  s.addText("PROPOSAL  ·  AUGUST 2026", {
    x: M, y: 2.15, w: 8.5, h: 0.3, margin: 0,
    fontFace: BFONT, fontSize: 12, bold: true, charSpacing: 2, color: GOLD,
  });
  s.addText("neXtHer", {
    x: M, y: 2.6, w: 8.5, h: 1.2, margin: 0,
    fontFace: HFONT, fontSize: 60, bold: true, color: WHITE,
  });
  s.addText("Building the brand — content, positioning and the funnel underneath it.", {
    x: M, y: 3.85, w: 7.6, h: 0.9, margin: 0,
    fontFace: BFONT, fontSize: 18, color: MUTEDD, lineSpacing: 26,
  });
  s.addText([
    { text: "Prepared for  ", options: { color: MUTEDD } },
    { text: "Juhi Agarwal, Founder", options: { color: WHITE, bold: true } },
  ], { x: M, y: 5.5, w: 6, h: 0.3, margin: 0, fontFace: BFONT, fontSize: 14 });
  s.addText([
    { text: "Prepared by  ", options: { color: MUTEDD } },
    { text: "ProductionX", options: { color: WHITE, bold: true } },
  ], { x: M, y: 5.9, w: 6, h: 0.3, margin: 0, fontFace: BFONT, fontSize: 14 });

  s.addNotes("Open by acknowledging what she asked for, then say we did the homework before quoting.");
}

/* ======================= 2. WHAT YOU ASKED FOR ===================== */
{
  const s = lightSlide();
  eyebrow(s, "Where we started", false);
  title(s, "What you asked for");

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 2.0, w: W, h: 1.5, fill: { color: TINT }, rectRadius: 0.12,
  });
  s.addText("“A digital production partner who can help me film, edit, publish, and grow high quality content as we build the brand together.”", {
    x: M + 0.45, y: 2.15, w: W - 0.9, h: 1.2, margin: 0,
    fontFace: HFONT, fontSize: 20, italic: true, color: BERRY, valign: "middle", lineSpacing: 30,
  });

  s.addText("We can do that. But before quoting for filming, we read your account, read your references, and researched the market you're entering.", {
    x: M, y: 3.95, w: 11.0, h: 0.8, margin: 0,
    fontFace: BFONT, fontSize: 17, color: INK, lineSpacing: 26,
  });
  s.addText("What we found changes what we think you should buy — and we'd rather tell you that upfront than sell you the thing you asked for and watch it not work.", {
    x: M, y: 4.85, w: 11.0, h: 0.9, margin: 0,
    fontFace: BFONT, fontSize: 17, bold: true, color: BERRY, lineSpacing: 26,
  });
  s.addNotes("Set the tone: we are willing to disagree with the brief.");
}

/* ==================== 3. FINDING 1 — FOUR BUSINESSES =============== */
{
  const s = lightSlide();
  eyebrow(s, "Finding 01", false);
  title(s, "Your account is advertising four different businesses", false, { h: 1.4 });

  const rows = [
    ["Bio headline", "Overcome burnout"],
    ["Bio sub-line", "Mindset · Healing · Confidence"],
    ["All 34 posts", "Save your marriage"],
    ["Caption CTA", "Book a Relationship Clarity Call"],
    ["neXtHer — the actual company", "AI, income and independence"],
  ];
  let y = 2.35;
  rows.forEach((r, i) => {
    const isLast = i === rows.length - 1;
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y: y, w: W, h: 0.72,
      fill: { color: isLast ? BERRY : TINT }, rectRadius: 0.1,
    });
    s.addText(r[0], {
      x: M + 0.35, y: y, w: 4.2, h: 0.72, margin: 0,
      fontFace: BFONT, fontSize: 14, bold: true,
      color: isLast ? MUTEDD : MUTED, valign: "middle",
    });
    s.addText(r[1], {
      x: M + 4.7, y: y, w: W - 5.1, h: 0.72, margin: 0,
      fontFace: BFONT, fontSize: 16, color: isLast ? WHITE : INK, valign: "middle",
    });
    y += 0.82;
  });

  s.addText("A stranger cannot tell what you do — and relationship content brings in followers who will never buy an AI programme.", {
    x: M, y: 6.6, w: W, h: 0.6, margin: 0,
    fontFace: BFONT, fontSize: 15, bold: true, color: BERRY, lineSpacing: 22,
  });
  s.addNotes("The core diagnosis. At 34 posts this is cheap to fix; at 20,000 followers it costs a year.");
}

/* ==================== 4. FINDING 2 — THESIS PROVEN ================= */
{
  const s = lightSlide();
  eyebrow(s, "Finding 02", false);
  title(s, "Your reference account proves the thesis works");

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 2.3, w: 4.5, h: 3.1, fill: { color: PLUM }, rectRadius: 0.14,
  });
  s.addText("415,000", {
    x: M + 0.35, y: 2.75, w: 3.8, h: 1.0, margin: 0,
    fontFace: HFONT, fontSize: 46, bold: true, color: GOLD,
  });
  s.addText("followers", {
    x: M + 0.35, y: 3.7, w: 3.8, h: 0.35, margin: 0,
    fontFace: BFONT, fontSize: 16, color: MUTEDD,
  });
  s.addText("@upgradingkatie", {
    x: M + 0.35, y: 4.35, w: 3.8, h: 0.35, margin: 0,
    fontFace: BFONT, fontSize: 17, bold: true, color: WHITE,
  });
  s.addText("“Mom routines · money · glowup” — mothers, AI, income. Built in about a year.", {
    x: M + 0.35, y: 4.8, w: 3.8, h: 0.9, margin: 0,
    fontFace: BFONT, fontSize: 13, color: MUTEDD, lineSpacing: 19,
  });

  const pts = [
    ["The concept is proven.", "You are not betting on an untested idea. Only on execution."],
    ["Nobody is doing it in India.", "Not in Hinglish, not for Indian mothers. We checked."],
    ["The window is open now.", "This format found its footing in the last twelve months. It won't be open in 2027."],
  ];
  let y = 2.45;
  pts.forEach((p, i) => {
    badge(s, 5.55, y, String(i + 1), BERRY, WHITE, 0.5);
    s.addText(p[0], {
      x: 6.3, y: y - 0.04, w: 6.3, h: 0.35, margin: 0,
      fontFace: BFONT, fontSize: 17, bold: true, color: INK,
    });
    s.addText(p[1], {
      x: 6.3, y: y + 0.34, w: 6.3, h: 0.7, margin: 0,
      fontFace: BFONT, fontSize: 14, color: MUTED, lineSpacing: 20,
    });
    y += 1.42;
  });
  footnote(s, "Follower figure read from the profile you shared. Instagram blocks automated access, so treat it as a snapshot.", false);
}

/* ================= 5. FINDING 3 — MEL IS WRONG TEMPLATE =========== */
{
  const s = lightSlide();
  eyebrow(s, "Finding 03", false);
  title(s, "Mel Robbins is the wrong template — for now");

  s.addShape(pres.ShapeType.roundRect, { x: M, y: 2.3, w: 6.0, h: 2.2, fill: { color: TINT }, rectRadius: 0.12 });
  s.addText("Why copying it fails", {
    x: M + 0.35, y: 2.5, w: 5.3, h: 0.35, margin: 0,
    fontFace: BFONT, fontSize: 15, bold: true, color: BERRY,
  });
  s.addText("Her Instagram is distribution for a #1 bestselling book, a top-tier podcast and a live tour. The account is downstream of the authority, not the cause of it. Quote cards work because they say Mel.", {
    x: M + 0.35, y: 2.95, w: 5.3, h: 1.35, margin: 0,
    fontFace: BFONT, fontSize: 14, color: INK, lineSpacing: 21,
  });

  s.addShape(pres.ShapeType.roundRect, { x: 7.05, y: 2.3, w: 5.55, h: 2.2, fill: { color: BERRY }, rectRadius: 0.12 });
  s.addText("But one thing transfers", {
    x: 7.4, y: 2.5, w: 4.9, h: 0.35, margin: 0,
    fontFace: BFONT, fontSize: 15, bold: true, color: GOLD,
  });
  s.addText("Her whole career rests on naming a mechanism. The 5 Second Rule. The Let Them Theory. Not advice — a named, repeatable thing people describe to each other when she isn't in the room.", {
    x: 7.4, y: 2.95, w: 4.9, h: 1.35, margin: 0,
    fontFace: BFONT, fontSize: 14, color: WHITE, lineSpacing: 21,
  });

  s.addText("neXtHer needs one — and it should exist before we film anything.", {
    x: M, y: 5.0, w: W, h: 0.6, margin: 0,
    fontFace: HFONT, fontSize: 24, bold: true, color: INK,
  });
  s.addText("Katie is the blueprint. Mel is the destination. The distance between them is a named idea and ten years.", {
    x: M, y: 5.75, w: W, h: 0.5, margin: 0,
    fontFace: BFONT, fontSize: 16, italic: true, color: MUTED,
  });
  s.addNotes("This is the most valuable single idea in the deck. Land it slowly.");
}

/* ===================== 6. FINDING 4 — PRODUCTION =================== */
{
  const s = lightSlide();
  eyebrow(s, "Finding 04", false);
  title(s, "We want to sell you less filming than you asked for", false, { h: 1.4 });

  s.addText("Katie's 415,000 followers were built on selfie-camera video — handheld, in her kitchen, in her car. No lighting, no crew. In this niche, low production is a trust signal: she looks like the woman watching her.", {
    x: M, y: 2.45, w: 11.4, h: 1.0, margin: 0,
    fontFace: BFONT, fontSize: 17, color: INK, lineSpacing: 26,
  });

  const cols = [
    ["Lower priority", ["Cinematography and lighting", "Location and b-roll shoots", "Colour grading and polish"], ROSE],
    ["Higher priority", ["Volume — 5 posts a week", "Fast turnaround, every week", "The funnel and the comment engine"], BERRY],
  ];
  cols.forEach((c, i) => {
    const x = M + i * 6.15;
    s.addShape(pres.ShapeType.roundRect, { x: x, y: 3.55, w: 5.75, h: 2.4, fill: { color: c[2] }, rectRadius: 0.12 });
    s.addText(c[0], {
      x: x + 0.4, y: 3.8, w: 5.0, h: 0.35, margin: 0,
      fontFace: BFONT, fontSize: 15, bold: true, color: i === 0 ? WHITE : GOLD,
    });
    s.addText(c[1].map((t, j) => ({
      text: t, options: { bullet: true, breakLine: j !== c[1].length - 1 },
    })), {
      x: x + 0.4, y: 4.3, w: 5.0, h: 1.5, margin: 0,
      fontFace: BFONT, fontSize: 14, color: WHITE, paraSpaceAfter: 8,
    });
  });

  s.addText("Your b-roll shoots are the most expensive thing on your account and the least effective.", {
    x: M, y: 6.25, w: W, h: 0.5, margin: 0,
    fontFace: BFONT, fontSize: 15, bold: true, color: BERRY,
  });
  s.addNotes("Counterintuitive, and it buys credibility for everything after it. Expect pushback if she likes the polished look.");
}

/* ================== 7. FINDING 5 — NEVER SPOKEN (dark) ============ */
{
  const s = darkSlide();
  s.addShape(pres.ShapeType.ellipse, { x: 10.2, y: 1.1, w: 4.4, h: 4.4, fill: { color: BERRY } });
  eyebrow(s, "Finding 05", true);

  s.addText("34", {
    x: M, y: 1.65, w: 4.0, h: 1.3, margin: 0,
    fontFace: HFONT, fontSize: 105, bold: true, color: GOLD,
  });
  s.addText("posts published", {
    x: M, y: 3.0, w: 5.0, h: 0.4, margin: 0,
    fontFace: BFONT, fontSize: 18, color: MUTEDD,
  });
  s.addText("Zero of them have you speaking on camera.", {
    x: M, y: 4.1, w: 8.6, h: 1.3, margin: 0,
    fontFace: HFONT, fontSize: 34, bold: true, color: WHITE, lineSpacing: 42,
  });
  s.addText("No talking-head, no voice, no piece to camera. For a brand whose product is your judgement, this is the biggest unlock available to you — and it costs nothing.", {
    x: M, y: 5.5, w: 8.6, h: 1.0, margin: 0,
    fontFace: BFONT, fontSize: 16, color: MUTEDD, lineSpacing: 24,
  });
}

/* ===================== 8. WHAT WE PROPOSE ========================== */
{
  const s = lightSlide();
  eyebrow(s, "The proposal", false);
  title(s, "Not a film crew");

  s.addText("A system that gets you posting five times a week in your own voice, with a funnel underneath it.", {
    x: M, y: 1.9, w: 11.2, h: 0.8, margin: 0,
    fontFace: BFONT, fontSize: 20, color: BERRY, lineSpacing: 28,
  });

  const three = [
    ["01", "Settle the positioning", "Decide the pivot, build the named method and the public experiment — so content has something to be about."],
    ["02", "Run the content engine", "You shoot on your phone. We do everything after that: edit, caption, cover, publish, report."],
    ["03", "Build the funnel", "WhatsApp list, DM automation, store, the paid workshop, then the cohort."],
  ];
  three.forEach((t, i) => {
    const x = M + i * 4.1;
    s.addShape(pres.ShapeType.roundRect, { x: x, y: 3.05, w: 3.7, h: 3.0, fill: { color: TINT }, rectRadius: 0.14 });
    badge(s, x + 0.4, 3.4, t[0], BERRY, WHITE, 0.6);
    s.addText(t[1], {
      x: x + 0.4, y: 4.2, w: 2.95, h: 0.7, margin: 0,
      fontFace: HFONT, fontSize: 18, bold: true, color: INK, lineSpacing: 23,
    });
    s.addText(t[2], {
      x: x + 0.4, y: 4.95, w: 2.95, h: 1.0, margin: 0,
      fontFace: BFONT, fontSize: 13, color: MUTED, lineSpacing: 19,
    });
  });
}

/* ===================== 9. PHASE 0 — SPRINT ========================= */
{
  const s = lightSlide();
  eyebrow(s, "Phase 0 · 2 weeks", false);
  title(s, "Strategy Sprint", false, { w: 7.5 });

  s.addShape(pres.ShapeType.roundRect, { x: 9.3, y: 0.8, w: 3.3, h: 1.2, fill: { color: BERRY }, rectRadius: 0.14 });
  s.addText("₹45,000", {
    x: 9.3, y: 0.95, w: 3.3, h: 0.7, margin: 0,
    fontFace: HFONT, fontSize: 32, bold: true, color: GOLD, align: "center",
  });
  s.addText("one-time · credited back", {
    x: 9.3, y: 1.68, w: 3.3, h: 0.35, margin: 0,
    fontFace: BFONT, fontSize: 12, color: MUTEDD, align: "center",
  });

  s.addText("Nothing else starts until this is done. Filming against unresolved positioning produces expensive noise.", {
    x: M, y: 1.95, w: 8.3, h: 0.7, margin: 0,
    fontFace: BFONT, fontSize: 15, color: MUTED, lineSpacing: 22,
  });

  const items = [
    ["Positioning decision", "Does the account become neXtHer, or does neXtHer get its own?"],
    ["The named method", "Your 5 Second Rule — the thing people repeat when you're not there."],
    ["The public experiment", "Your version of Katie's “86 days” — start date, rule, clock."],
    ["The one thing you teach", "Narrowed to a single sellable skill. Our recommendation is specific."],
    ["Profile rebuild", "Bio, highlights, and the START HERE / HOW IT WORKS pinned set."],
    ["Voice guide", "From a 90-minute interview, so captions sound like you, not like AI."],
    ["Competitive sweep", "Is anyone already doing this in Hinglish for Indian mothers?"],
    ["Insights audit + 90-day plan", "Your real numbers, then content themed and scripted to hook level."],
  ];
  items.forEach((it, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = M + col * 6.15, y = 2.85 + row * 1.05;
    badge(s, x, y, String(i + 1), i % 2 === 0 ? BERRY : ROSE, WHITE, 0.42);
    s.addText(it[0], {
      x: x + 0.62, y: y - 0.05, w: 5.3, h: 0.3, margin: 0,
      fontFace: BFONT, fontSize: 14.5, bold: true, color: INK,
    });
    s.addText(it[1], {
      x: x + 0.62, y: y + 0.27, w: 5.3, h: 0.55, margin: 0,
      fontFace: BFONT, fontSize: 12, color: MUTED, lineSpacing: 17,
    });
  });
  footnote(s, "Your time: two 90-minute calls, plus screen access to your Instagram Insights.", false);
}

/* ===================== 10. PHASE 1 — PRICING ====================== */
{
  const s = lightSlide();
  eyebrow(s, "Phase 1 · the content engine", false);
  title(s, "Three ways to run it", false, { size: 34 });

  const opts = [
    {
      name: "Lean", price: "₹35,000", per: "per month", fill: TINT, txt: INK, sub: MUTED,
      note: "For starting carefully while cash is tight.",
      items: ["12 reels/month (3 a week)", "Captions, covers, hashtags", "Publishing and scheduling", "WhatsApp list set up", "Monthly report"],
      tag: null,
    },
    {
      name: "Engine", price: "₹65,000", per: "per month", fill: ROSE, txt: WHITE, sub: "F2E4E8",
      note: "The full system. What actually moves an account from 1,209.",
      items: ["20 reels/month (5 a week)", "4 YouTube long-form/month", "DM keyword automation", "Comment triage", "Weekly report + strategy call"],
      tag: null,
    },
    {
      name: "Partnership", price: "₹30,000", per: "per month  +  15% of product revenue", fill: BERRY, txt: WHITE, sub: MUTEDD,
      note: "You said “as we build the brand together.” This is us taking that literally.",
      items: ["Everything in Engine", "Launch support included", "Lower cash risk for you", "No share of your 1:1 income", "We win only if it works"],
      tag: "OUR RECOMMENDATION",
    },
  ];

  opts.forEach((o, i) => {
    const x = M + i * 4.1;
    const y = 2.35, h = 3.45;
    s.addShape(pres.ShapeType.roundRect, { x: x, y: y, w: 3.7, h: h, fill: { color: o.fill }, rectRadius: 0.14 });
    if (o.tag) {
      s.addShape(pres.ShapeType.roundRect, { x: x, y: y - 0.42, w: 3.7, h: 0.38, fill: { color: GOLD }, rectRadius: 0.08 });
      s.addText(o.tag, {
        x: x, y: y - 0.42, w: 3.7, h: 0.38, margin: 0,
        fontFace: BFONT, fontSize: 10.5, bold: true, charSpacing: 1.5,
        color: PLUM, align: "center", valign: "middle",
      });
    }
    s.addText(o.name, {
      x: x + 0.35, y: y + 0.28, w: 3.0, h: 0.35, margin: 0,
      fontFace: BFONT, fontSize: 15, bold: true, charSpacing: 1, color: i === 0 ? BERRY : GOLD,
    });
    s.addText(o.price, {
      x: x + 0.35, y: y + 0.68, w: 3.0, h: 0.6, margin: 0,
      fontFace: HFONT, fontSize: 30, bold: true, color: o.txt,
    });
    s.addText(o.per, {
      x: x + 0.35, y: y + 1.28, w: 3.05, h: 0.45, margin: 0,
      fontFace: BFONT, fontSize: 11.5, color: o.sub, lineSpacing: 15,
    });
    s.addText(o.note, {
      x: x + 0.35, y: y + 1.78, w: 3.0, h: 0.62, margin: 0,
      fontFace: BFONT, fontSize: 11.5, italic: true, color: o.sub, lineSpacing: 16,
    });
    s.addText(o.items.map((t, j) => ({
      text: t, options: { bullet: true, breakLine: j !== o.items.length - 1 },
    })), {
      x: x + 0.35, y: y + 2.48, w: 3.0, h: 1.4, margin: 0,
      fontFace: BFONT, fontSize: 11.5, color: o.txt, paraSpaceAfter: 5,
    });
  });
  footnote(s, "All options carry a 3-month minimum term, then 30 days' notice either side.", false);
}

/* ================= 11. WHY OPTION C (dark) ======================== */
{
  const s = darkSlide();
  s.addShape(pres.ShapeType.ellipse, { x: 10.6, y: 3.9, w: 4.0, h: 4.0, fill: { color: BERRY } });
  eyebrow(s, "Our recommendation", true);
  title(s, "Why we'd rather share the risk", true, { w: 9.5 });

  s.addText("You're pre-revenue on neXtHer. A ₹65,000 monthly cheque is a real risk for you right now.", {
    x: M, y: 2.1, w: 9.3, h: 0.6, margin: 0,
    fontFace: BFONT, fontSize: 17, color: MUTEDD, lineSpacing: 25,
  });

  const rs = [
    ["Cuts your cash exposure by more than half", "₹30,000 a month instead of ₹65,000."],
    ["Ties our income to whether it actually works", "15% of workshops, cohorts and digital products — during the engagement and 6 months after."],
    ["If we're right, we do better than Option B", "If we're wrong, we've earned less. Which is how it should be."],
  ];
  let y = 3.0;
  rs.forEach((r, i) => {
    badge(s, M, y, String(i + 1), GOLD, PLUM, 0.5);
    s.addText(r[0], {
      x: M + 0.75, y: y - 0.05, w: 9.0, h: 0.35, margin: 0,
      fontFace: BFONT, fontSize: 17, bold: true, color: WHITE,
    });
    s.addText(r[1], {
      x: M + 0.75, y: y + 0.33, w: 9.0, h: 0.6, margin: 0,
      fontFace: BFONT, fontSize: 14, color: MUTEDD, lineSpacing: 20,
    });
    y += 1.15;
  });
  s.addText("Your 1:1 coaching income stays entirely yours.", {
    x: M, y: 6.5, w: 9.3, h: 0.4, margin: 0,
    fontFace: BFONT, fontSize: 15, italic: true, color: GOLD,
  });
}

/* ==================== 12. WHO DOES WHAT =========================== */
{
  const s = lightSlide();
  eyebrow(s, "How we work", false);
  title(s, "What you do, and what we do");

  const you = ["Shoot on your phone — about 30 minutes a week", "20 minutes a day in your own DMs and comments", "Teach, run calls, close sales", "Show up on camera, talking, in Hinglish"];
  const us  = ["Everything after the footage lands", "Draft replies for the repetitive messages", "Build the funnel that fills your calendar", "Coach you through the first month of it"];

  [["YOU", you, ROSE], ["US", us, BERRY]].forEach((c, i) => {
    const x = M + i * 6.15;
    s.addShape(pres.ShapeType.roundRect, { x: x, y: 2.2, w: 5.75, h: 3.1, fill: { color: c[2] }, rectRadius: 0.14 });
    s.addText(c[0], {
      x: x + 0.45, y: 2.45, w: 4.8, h: 0.4, margin: 0,
      fontFace: BFONT, fontSize: 15, bold: true, charSpacing: 2, color: i === 0 ? WHITE : GOLD,
    });
    s.addText(c[1].map((t, j) => ({
      text: t, options: { bullet: true, breakLine: j !== c[1].length - 1 },
    })), {
      x: x + 0.45, y: 3.0, w: 4.8, h: 2.1, margin: 0,
      fontFace: BFONT, fontSize: 14, color: WHITE, paraSpaceAfter: 10, lineSpacing: 20,
    });
  });

  s.addShape(pres.ShapeType.roundRect, { x: M, y: 5.6, w: W, h: 1.1, fill: { color: TINT }, rectRadius: 0.12 });
  s.addText("The 20 minutes a day is a condition, not a preference. The funnel dies without you in it, and no agency can fake being the coach.", {
    x: M + 0.45, y: 5.6, w: W - 0.9, h: 1.1, margin: 0,
    fontFace: BFONT, fontSize: 15, bold: true, color: BERRY, valign: "middle", lineSpacing: 22,
  });
}

/* ==================== 13. WHY THREE MONTHS ======================== */
{
  const s = lightSlide();
  eyebrow(s, "Terms", false);
  title(s, "Why three months", false, { w: 6.2 });

  s.addText("When you stop posting marriage content, your reach will drop for roughly 3–6 weeks while Instagram re-learns who to show you to.", {
    x: M, y: 2.0, w: 5.9, h: 1.0, margin: 0,
    fontFace: BFONT, fontSize: 15.5, color: INK, lineSpacing: 24,
  });
  s.addText("This is normal, it is expected, and it is the single most likely way this plan fails — because month two feels like proof it isn't working.", {
    x: M, y: 3.05, w: 5.9, h: 1.0, margin: 0,
    fontFace: BFONT, fontSize: 15.5, color: MUTED, lineSpacing: 24,
  });
  s.addShape(pres.ShapeType.roundRect, { x: M, y: 4.3, w: 5.9, h: 1.75, fill: { color: BERRY }, rectRadius: 0.12 });
  s.addText("We'd rather agree it now, in writing, than argue about it in week three. The minimum term protects you from your own reasonable panic — and us from being judged on a dip we told you was coming.", {
    x: M + 0.4, y: 4.3, w: 5.1, h: 1.75, margin: 0,
    fontFace: BFONT, fontSize: 14, color: WHITE, valign: "middle", lineSpacing: 21,
  });

  s.addChart(pres.ChartType.line, [{
    name: "Reach (indexed)",
    labels: ["Wk 0", "Wk 2", "Wk 4", "Wk 6", "Wk 8", "Wk 10", "Wk 12"],
    values: [100, 68, 55, 82, 125, 175, 230],
  }], {
    x: 7.05, y: 2.0, w: 5.55, h: 4.05,
    chartColors: [BERRY], lineSize: 4, lineSmooth: true,
    showTitle: true, title: "What the first quarter looks like",
    titleColor: INK, titleFontSize: 14, titleFontFace: BFONT,
    showLegend: false,
    catAxisLabelColor: MUTED, catAxisLabelFontSize: 11, catAxisLabelFontFace: BFONT,
    valAxisLabelColor: MUTED, valAxisLabelFontSize: 11, valAxisLabelFontFace: BFONT,
    valGridLine: { color: "E8DDE2", size: 1 },
    catGridLine: { style: "none" },
    valAxisMinVal: 0,
  });
  footnote(s, "Illustrative shape, not a forecast. The dip is the part people quit during.", false);
}

/* ==================== 14. 90-DAY TARGETS ========================== */
{
  const s = lightSlide();
  eyebrow(s, "Accountability", false);
  title(s, "What success looks like at 90 days");

  s.addText("Follower count is the least useful number you have. This is what we'll report against.", {
    x: M, y: 1.95, w: 11.2, h: 0.45, margin: 0,
    fontFace: BFONT, fontSize: 16, color: MUTED,
  });

  const stats = [
    ["3×", "saves + shares per reel", "vs your current baseline"],
    ["500", "on your WhatsApp list", "the asset Instagram can't take"],
    ["2", "paid workshops run", "real buyers, not free signups"],
    ["₹1.5–3L", "cash collected", "the only number that settles arguments"],
  ];
  stats.forEach((st, i) => {
    const x = M + (i % 4) * 3.05;
    s.addShape(pres.ShapeType.roundRect, { x: x, y: 2.65, w: 2.7, h: 2.15, fill: { color: i === 3 ? BERRY : TINT }, rectRadius: 0.14 });
    s.addText(st[0], {
      x: x + 0.3, y: 2.95, w: 2.1, h: 0.75, margin: 0,
      fontFace: HFONT, fontSize: st[0].length > 4 ? 27 : 38, bold: true, color: i === 3 ? GOLD : BERRY,
    });
    s.addText(st[1], {
      x: x + 0.3, y: 3.75, w: 2.15, h: 0.55, margin: 0,
      fontFace: BFONT, fontSize: 13, bold: true, color: i === 3 ? WHITE : INK, lineSpacing: 17,
    });
    s.addText(st[2], {
      x: x + 0.3, y: 4.3, w: 2.15, h: 0.42, margin: 0,
      fontFace: BFONT, fontSize: 10.5, color: i === 3 ? MUTEDD : MUTED, lineSpacing: 14,
    });
  });

  s.addText("Followers will land around 5,000 — engaged and correctly shaped.", {
    x: M, y: 5.15, w: 11.4, h: 0.4, margin: 0,
    fontFace: BFONT, fontSize: 16, bold: true, color: INK,
  });
  s.addText("Anyone promising you 100,000 followers in 90 days is selling something. Katie took about a year, and she posted 369 times. You've posted 34. Volume is the gap — and it's the least glamorous item on this list.", {
    x: M, y: 5.6, w: 11.4, h: 0.9, margin: 0,
    fontFace: BFONT, fontSize: 14.5, color: MUTED, lineSpacing: 22,
  });
}

/* ==================== 15. HONEST RISKS =========================== */
{
  const s = lightSlide();
  eyebrow(s, "Before you decide", false);
  title(s, "The honest risks");
  s.addText("We'd rather you hear these from us than discover them in month two.", {
    x: M, y: 1.9, w: 11.2, h: 0.4, margin: 0,
    fontFace: BFONT, fontSize: 16, color: MUTED,
  });

  const risks = [
    ["Your audience may not pay for AI training.", "We don't know this yet. The ₹999 workshop in week 5 is the cheapest possible test — run it before anyone builds a cohort. If it doesn't sell, you've lost no build cost and we'll say so."],
    ["You may not have a result of your own to teach from.", "Then the first 60 days are you landing your own paying clients, on camera. That becomes the content, the proof and the curriculum at once."],
    ["“AI income” has bad neighbours.", "Demonstration over claims. Screen recordings, real outputs, no income figure without the work behind it. This is a positioning asset, not a limitation."],
  ];
  let y = 2.6;
  risks.forEach((r, i) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y: y, w: W, h: 1.3, fill: { color: TINT }, rectRadius: 0.12 });
    badge(s, M + 0.35, y + 0.38, "!", BERRY, WHITE, 0.5);
    s.addText(r[0], {
      x: M + 1.05, y: y + 0.2, w: 10.5, h: 0.32, margin: 0,
      fontFace: BFONT, fontSize: 15.5, bold: true, color: INK,
    });
    s.addText(r[1], {
      x: M + 1.05, y: y + 0.55, w: 10.5, h: 0.65, margin: 0,
      fontFace: BFONT, fontSize: 13, color: MUTED, lineSpacing: 19,
    });
    y += 1.45;
  });
}

/* ==================== 16. CLOSE (dark) =========================== */
{
  const s = darkSlide();
  s.addShape(pres.ShapeType.ellipse, { x: -2.9, y: 6.2, w: 4.0, h: 4.0, fill: { color: BERRY } });
  s.addShape(pres.ShapeType.ellipse, { x: 11.0, y: -1.3, w: 4.0, h: 4.0, fill: { color: ROSE }, transparency: 60 });

  eyebrow(s, "Recommended start", true);
  title(s, "Where we'd begin", true, { w: 8 });

  const steps = [["Week 0", "Strategy Sprint — ₹45,000"], ["Weeks 1–12", "Partnership — ₹30,000/mo + 15%"], ["Week 5", "First paid workshop"], ["Week 12", "Review. Cohort, or stop."]];
  let y = 2.15;
  steps.forEach((st) => {
    s.addText(st[0], {
      x: M, y: y, w: 1.9, h: 0.42, margin: 0,
      fontFace: BFONT, fontSize: 14, bold: true, color: GOLD, valign: "middle",
    });
    s.addText(st[1], {
      x: M + 2.0, y: y, w: 5.9, h: 0.42, margin: 0,
      fontFace: BFONT, fontSize: 16, color: WHITE, valign: "middle",
    });
    y += 0.62;
  });

  s.addShape(pres.ShapeType.roundRect, { x: 9.1, y: 2.05, w: 3.5, h: 1.95, fill: { color: BERRY }, rectRadius: 0.14 });
  s.addText("₹90,000", {
    x: 9.1, y: 2.45, w: 3.5, h: 0.75, margin: 0,
    fontFace: HFONT, fontSize: 34, bold: true, color: GOLD, align: "center",
  });
  s.addText("across three months", {
    x: 9.1, y: 3.2, w: 3.5, h: 0.35, margin: 0,
    fontFace: BFONT, fontSize: 13, color: WHITE, align: "center",
  });
  s.addText("after the sprint is credited back", {
    x: 9.1, y: 3.62, w: 3.5, h: 0.5, margin: 0,
    fontFace: BFONT, fontSize: 11.5, color: MUTEDD, align: "center", lineSpacing: 15,
  });

  s.addText("One 45-minute call.", {
    x: M, y: 5.1, w: 8.5, h: 0.55, margin: 0,
    fontFace: HFONT, fontSize: 30, bold: true, color: WHITE,
  });
  s.addText("We'll walk you through the positioning finding and the named-method idea before you commit to anything. If you disagree with the diagnosis, there's no point discussing the price.", {
    x: M, y: 5.75, w: 8.2, h: 0.8, margin: 0,
    fontFace: BFONT, fontSize: 15, color: MUTEDD, lineSpacing: 22,
  });
  s.addText("Bring your Instagram Insights.", {
    x: M, y: 6.6, w: 8.2, h: 0.35, margin: 0,
    fontFace: BFONT, fontSize: 15, bold: true, italic: true, color: GOLD,
  });
}

pres.writeFile({ fileName: "/home/user/Assets/clients/juhi-agarwal-nexther/neXtHer-Proposal.pptx" })
  .then(f => console.log("WROTE", f));
