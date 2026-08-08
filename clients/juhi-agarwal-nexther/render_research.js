const { chromium } = require("playwright");
const path = require("path");

const DIR = "/home/user/Assets/clients/juhi-agarwal-nexther";
const SHOTS = "/tmp/claude-0/-home-user-Assets/2e07d02f-33c7-5807-a20c-1be82aad6874/scratchpad/shots2";

(async () => {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
  const page = await browser.newPage({ viewport: { width: 1330, height: 750 } });
  await page.goto("file://" + path.join(DIR, "research-deck.html"), { waitUntil: "networkidle" });

  // 1. PDF — one slide per 13.3x7.5in page
  await page.pdf({
    path: path.join(DIR, "neXtHer-What-I-Found.pdf"),
    width: "13.3in", height: "7.5in",
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
    pageRanges: "1-24",
  });
  console.log("PDF written");

  // 2. Screenshot every slide for visual QA
  const fs = require("fs");
  fs.mkdirSync(SHOTS, { recursive: true });
  const slides = await page.locator(".slide").all();
  console.log("slides found:", slides.length);
  for (let i = 0; i < slides.length; i++) {
    await slides[i].screenshot({ path: `${SHOTS}/s${String(i + 1).padStart(2, "0")}.png` });
  }

  // 3. Report any element overflowing its slide
  const bad = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll(".slide").forEach((sl, si) => {
      const sr = sl.getBoundingClientRect();
      sl.querySelectorAll("*").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        if (el.classList.contains("circ")) return; // deliberate bleed
        if (r.bottom > sr.bottom + 1 || r.right > sr.right + 1 || r.top < sr.top - 1 || r.left < sr.left - 1) {
          out.push(`S${si + 1}: <${el.tagName.toLowerCase()}> spills — ` +
            `${(r.left - sr.left).toFixed(0)},${(r.top - sr.top).toFixed(0)} ` +
            `→ ${(r.right - sr.left).toFixed(0)},${(r.bottom - sr.top).toFixed(0)} ` +
            `:: ${(el.textContent || "").trim().slice(0, 45)}`);
        }
      });
    });
    return out;
  });
  console.log(bad.length ? "OVERFLOW:\n" + bad.join("\n") : "No overflow.");

  const clash = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll(".slide").forEach((sl, si) => {
      // leaf text nodes only: elements with text and no element children
      const leaves = [...sl.querySelectorAll("*")].filter(el =>
        el.children.length === 0 && (el.textContent || "").trim().length > 3);
      for (let i = 0; i < leaves.length; i++)
        for (let j = i + 1; j < leaves.length; j++) {
          const a = leaves[i].getBoundingClientRect(), b = leaves[j].getBoundingClientRect();
          if (leaves[i].contains(leaves[j]) || leaves[j].contains(leaves[i])) continue;
          const ox = Math.min(a.right, b.right) - Math.max(a.left, b.left);
          const oy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
          if (ox > 6 && oy > 6) out.push(`S${si + 1}: "${leaves[i].textContent.trim().slice(0,34)}" <> "${leaves[j].textContent.trim().slice(0,34)}"`);
        }
    });
    return [...new Set(out)];
  });
  console.log(clash.length ? "TEXT CLASH:\n" + clash.join("\n") : "No text clashes.");

  await browser.close();
})();
