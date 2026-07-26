<p align="center">
  <img src="https://task.forgemind.space/forgemind-logo.gif" alt="ForgeMind" width="180"/>
</p>

<h1 align="center">agentic-command-center</h1>

<p align="center">
  <strong>A Claude skill that guides you, step by step, through planning your own AI command center for your business.</strong>
</p>

<p align="center">
  <a href="https://forgemind.in/">Website</a> •
  <a href="https://www.instagram.com/forgemind_ai/">Instagram</a> •
  <a href="https://www.youtube.com/@forgemind_ai">YouTube</a> •
  <a href="https://github.com/Forgemind-git">GitHub</a> •
  <a href="mailto:contact@forgemind.in">Email</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/type-Claude%20Skill-8A2BE2.svg" alt="Claude Skill"/>
  <img src="https://img.shields.io/badge/mode-guidance%20only-blue.svg" alt="Guidance only"/>
  <img src="https://img.shields.io/badge/stack-agnostic-lightgrey.svg" alt="Stack agnostic"/>
  <img src="https://img.shields.io/badge/reference%20system-free%20%26%20open-brightgreen.svg" alt="Free reference system"/>
</p>

---

## 📦 Installing the skills

This repo ships **99 Claude skills** in [`.claude/skills/`](.claude/skills/). They are already installed at **project level**, so they load automatically in any Claude Code session working inside this repository — no setup needed.

| Group | Count | Covers |
| --- | --- | --- |
| **Marketing** | 51 | SEO, ads, copywriting, email, CRO, pricing, positioning, analytics, social, PR, lifecycle, competitor research |
| **Brand** | 27 | Strategy, architecture, naming, identity, voice, messaging, story, audit, measurement, rebranding, launch, plus D2C/B2B/personal-brand playbooks |
| **Design** | 6 | [`ui-ux-pro-max`](.claude/skills/ui-ux-pro-max/), [`ui-styling`](.claude/skills/ui-styling/), [`design-system`](.claude/skills/design-system/), [`brand`](.claude/skills/brand/), [`slides`](.claude/skills/slides/), [`banner-design`](.claude/skills/banner-design/) |
| **Backend** | 10 | API design, PostgreSQL, Redis, migrations, FastAPI, Docker, deployment, CI/CD, DevOps |
| **Build & test** | 2 | [`webapp-testing`](.claude/skills/webapp-testing/) (Playwright), [`theme-factory`](.claude/skills/theme-factory/) |
| **Research** | 3 | `competitive-ads-extractor`, `domain-name-brainstormer`, `twitter-algorithm-optimizer` — [unlicensed upstream](.claude/skills/README.md#unlicensed-skills) |

👉 **[Full catalogue, grouped by topic →](.claude/skills/README.md)**
👉 **[Worked example of the skills' output →](examples/)**

The marketing skills also draw on [`.claude/tools/`](.claude/tools/) — a 161-file integration reference (Google Ads, GA4, Segment, Customer.io, Apollo, Clay, and more) indexed by [`REGISTRY.md`](.claude/tools/REGISTRY.md). It is not a skill; it must stay at that path for the skills' relative links to resolve.

### Using them in *every* project

The skills above load automatically only inside this repository. To get them in **any** project, install this repo as a plugin marketplace — run these once, from anywhere:

```
/plugin marketplace add productionxin/Assets
/plugin install one-man-army@productionx-skills
```

That's it. The skills are then available in every project on that machine, and `/plugin marketplace update` pulls any changes made here.

#### Install only what a project needs

`one-man-army` loads all 99 skills, which is ~17,500 tokens of descriptions in every session. On a project that only needs one area, install a focused plugin instead:

| Command | Skills |
| --- | --- |
| `/plugin install brand@productionx-skills` | 27 — strategy, naming, identity, voice, messaging, audit, launch |
| `/plugin install marketing@productionx-skills` | 51 — SEO, ads, copy, email, CRO, pricing, analytics, PR, market research, CRM |
| `/plugin install backend@productionx-skills` | 10 — API design, Postgres, Redis, migrations, Docker, deploy, DevOps |
| `/plugin install design@productionx-skills` | 6 — UI/UX intelligence, Tailwind/shadcn, tokens, slides, banners |
| `/plugin install toolkit@productionx-skills` | 5 — Playwright testing, theming, ad extraction, domain and tweet tools |

They can be combined: `brand` + `design` on a branding job, `marketing` alone on a growth engagement.

#### One external plugin

```
/plugin install digital-marketing-pro@productionx-skills
```

[digital-marketing-pro](https://github.com/indranilbanerjee/digital-marketing-pro) (158 skills, MIT) is **referenced from upstream, not copied into this repo** — it's a coupled platform with its own `~/.claude-marketing/` state, so forking it would break it and freeze it. It adds client/agency operations, CRM sync, localisation and reputation management.

Install it *instead of* `marketing` on a given project, not alongside — they overlap heavily and together run to ~244 skills. See [the notes](.claude/skills/README.md#external-plugins).

#### Notes

- **No dependencies.** The marketing and brand skills are pure markdown; the design skills' Python uses the standard library only.
- **`.claude/tools/` travels with the plugin.** All 96 integration links inside the marketing skills resolve from the installed copy — verified against a fresh checkout.
- **Manual alternative.** If you'd rather not use plugins, `cp -r Assets/.claude/skills/* ~/.claude/skills/` and `cp -r Assets/.claude/tools ~/.claude/tools` still works — but it's per-machine, unversioned, and needs redoing on every update.
- **Two skills are deliberately absent** — `design` (duplicated `slides`/`banner-design`, needed a Gemini API key) and `agentic-command-center` (declines to write code for the rest of any conversation it enters). See [the audit notes](.claude/skills/README.md#removed-after-audit).

> See [`.claude/skills/README.md`](.claude/skills/README.md) for provenance, upstream versions, and known caveats.

---

## 🤔 What is this?

The skill this repo was originally built around is **agentic-command-center** — a guided playbook you drop into your AI assistant. When you run it, the AI becomes an architect and advisor that walks you, phase by phase, through planning your own **AI command center**: one chat or voice interface where you (or your team) type a request and one AI figures out which of your business systems to touch and does it.

> **📐 It's a blueprint, not a builder.**
> This skill deliberately writes **no code** and builds **nothing** — not in Claude Code, not in the Claude app. It gives you the **thinking, the principles, and the order of operations**, and leaves the *how* entirely up to you and the stack you choose. If you want something concrete to study or run today, that's what [ForgeChat](https://github.com/Forgemind-git/ForgeChat) is for.

## 🚀 How to use it

There are two ways, depending on how you work.

**A. If you use Claude Code**
1. This one is **not** installed as an auto-loading skill here — it declines to write code for the rest of any conversation it enters, which does not mix with a working repo. To use it deliberately, copy the root [`SKILL.md`](SKILL.md) into your home skills directory:
   ```bash
   mkdir -p ~/.claude/skills/agentic-command-center
   cp SKILL.md ~/.claude/skills/agentic-command-center/
   ```
2. Start Claude Code and run:
   ```
   /agentic-command-center
   ```
3. Answer its questions and let it walk you through each phase.

**B. If you use the Claude app (or any AI assistant)**
1. Open [`SKILL.md`](SKILL.md).
2. Copy everything in it and paste it into a new chat.
3. Say: *"Walk me through building my command center, one phase at a time."*

## 🧭 What you'll plan

The skill takes you through four phases, in order:

1. **Own your systems** — map your business into internal dashboards that hold *your* data on *your* server.
2. **Connect your tools** — wire each system to the services you already use (WhatsApp, Instagram, email, calendars, ads…).
3. **Expose them over MCP** — turn each system into a safe, read-first set of tools an AI can call.
4. **Unify under one command layer** — put a single AI in front of everything: understand → route → act.

## 🆓 Don't start from scratch

The hardest part of Phase 1 is building your first internal system. So we made ours free.

**[ForgeChat](https://github.com/Forgemind-git/ForgeChat)** is a complete, real-world example — a self-hosted WhatsApp inbox and CRM that keeps all your customer data on your own server. It's **completely free and open**. Study it as a reference, or just run it as-is and skip straight to connecting your tools.

**➡️ https://github.com/Forgemind-git/ForgeChat**

---

## 🎓 Want to learn this properly?

This blueprint tells you **what** to build and **in what order**. If you want to learn **how** — hands-on, from zero — that's exactly what our course was built for.

<p align="center">
  <a href="https://forgemind.in/course/applied-ai-with-claude">
    <img src="assets/course-applied-ai-with-claude.jpg" alt="Applied AI with Claude — in Tamil" width="720"/>
  </a>
</p>

<p align="center">
  <a href="https://forgemind.in/course/applied-ai-with-claude"><strong>👉 Click here to see the details of the course</strong></a>
</p>

### Applied AI with Claude — taught in Tamil

A **6-week, hands-on** program that takes you from "what even is an LLM?" to **shipping a deployed, full-stack AI system you built yourself.** No prior coding background assumed — we start at the foundations and don't leave anyone behind.

It follows the same arc as this blueprint, but with a teacher, a cohort, and real projects at every step:

| Week | What you'll learn |
|:--|:--|
| **1** | Foundations — how AI actually works, and running AI locally |
| **2** | Claude in depth — the interface, prompting mastery, context engineering |
| **3** | Grounding & building — research, projects, artifacts, dashboards, skills |
| **4** | **Agents & MCP** — build your own MCP server, compose and run agents |
| **5** | **Claude Code** — APIs, frontend, build and host a dashboard *live* |
| **6** | Backend, automation, deploy — then ship your **final capstone** |

**What you get:** 19 modules · 11 live sessions · **16 hands-on projects** that become your GitHub portfolio · a peer-reviewed capstone — *your own deployed AI solution*, end to end.

If Phases 3 and 4 of this blueprint (MCP servers, agent orchestration, a command layer) are where you feel the gap, **Weeks 4–6 are written for exactly that gap.** You leave with the skill to build the command center yourself — not a template, the ability.

**➡️ [forgemind.in/course/applied-ai-with-claude](https://forgemind.in/course/applied-ai-with-claude)**

---

<p align="center">
  <strong>Built by ForgeMind</strong>
</p>

<p align="center">
  <a href="https://forgemind.in/">Website</a> •
  <a href="https://www.instagram.com/forgemind_ai/">Instagram</a> •
  <a href="https://www.youtube.com/@forgemind_ai">YouTube</a> •
  <a href="https://github.com/Forgemind-git">GitHub</a> •
  <a href="mailto:contact@forgemind.in">contact@forgemind.in</a>
</p>
