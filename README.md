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

This repo ships **56 Claude skills** in [`.claude/skills/`](.claude/skills/). They are already installed at **project level**, so they load automatically in any Claude Code session working inside this repository — no setup needed.

| Group | Count | Covers |
| --- | --- | --- |
| **Marketing** | 48 | SEO, ads, copywriting, email, CRO, pricing, positioning, analytics, social, PR, lifecycle, competitor research |
| **Design** | 7 | [`ui-ux-pro-max`](.claude/skills/ui-ux-pro-max/), [`ui-styling`](.claude/skills/ui-styling/), [`design`](.claude/skills/design/), [`design-system`](.claude/skills/design-system/), [`brand`](.claude/skills/brand/), [`slides`](.claude/skills/slides/), [`banner-design`](.claude/skills/banner-design/) |
| **Planning** | 1 | [`agentic-command-center`](.claude/skills/agentic-command-center/) — the advisory blueprint described below |

👉 **[Full catalogue, grouped by topic →](.claude/skills/README.md)**

The marketing skills also draw on [`.claude/tools/`](.claude/tools/) — a 161-file integration reference (Google Ads, GA4, Segment, Customer.io, Apollo, Clay, and more) indexed by [`REGISTRY.md`](.claude/tools/REGISTRY.md). It is not a skill; it must stay at that path for the skills' relative links to resolve.

### Using them in *every* project

Project-level install means these skills work **inside this repo only**. To make them available in all your work, copy them into your home skills directory:

```bash
git clone https://github.com/productionxin/Assets.git
mkdir -p ~/.claude/skills
cp -r Assets/.claude/skills/* ~/.claude/skills/
cp -r Assets/.claude/tools ~/.claude/tools   # keeps the marketing skills' links working
```

Three things to know about this route:

- It is **per-machine and not version-controlled** — re-run it on each machine you work from, and again whenever this repo updates.
- Copy `tools/` too, or 96 integration links inside the marketing skills will break. The skills reference it as `../../tools/`, so it belongs beside `skills/`, not inside it.
- It also makes `agentic-command-center` loadable everywhere. That skill refuses to write code for the remainder of any conversation it is invoked in, so you may prefer to leave that one project-scoped and copy the rest.

There are no dependencies to install — the marketing skills are pure markdown, and the design skills' Python scripts use the standard library only.

> See [`.claude/skills/README.md`](.claude/skills/README.md) for provenance, upstream versions, and known caveats.

---

## 🤔 What is this?

The skill this repo was originally built around is **agentic-command-center** — a guided playbook you drop into your AI assistant. When you run it, the AI becomes an architect and advisor that walks you, phase by phase, through planning your own **AI command center**: one chat or voice interface where you (or your team) type a request and one AI figures out which of your business systems to touch and does it.

> **📐 It's a blueprint, not a builder.**
> This skill deliberately writes **no code** and builds **nothing** — not in Claude Code, not in the Claude app. It gives you the **thinking, the principles, and the order of operations**, and leaves the *how* entirely up to you and the stack you choose. If you want something concrete to study or run today, that's what [ForgeChat](https://github.com/Forgemind-git/ForgeChat) is for.

## 🚀 How to use it

There are two ways, depending on how you work.

**A. If you use Claude Code**
1. Already installed in this repo. To use it elsewhere, copy the skill into your home skills directory:
   ```bash
   cp -r .claude/skills/agentic-command-center ~/.claude/skills/
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
