# Installed skills

**56 project-level Claude skills.** Everything in this directory is picked up
automatically by Claude Code when working in `Assets/`.

## Design — 7 skills

| Skill | What it does |
| --- | --- |
| `ui-ux-pro-max` | UI/UX design intelligence: 84 styles, 161 palettes, 73 font pairings, 25 charts, 17 stack guidelines. |
| `design` | Umbrella design skill — brand identity, tokens, logo/icon generation, corporate identity program. |
| `design-system` | Three-layer token architecture (primitive → semantic → component) and component specs. |
| `ui-styling` | shadcn/ui + Tailwind styling, accessibility, and bundled canvas fonts. |
| `brand` | Brand voice, visual identity, messaging frameworks, asset management. |
| `slides` | Strategic HTML presentations with Chart.js and design tokens. |
| `banner-design` | Banners for social, ads, web heroes, and print. |

## Marketing — 48 skills

Grouped by what they cover. Each is its own directory here.

**Acquisition & demand** — `ads`, `ad-creative`, `aso`, `cold-email`,
`directory-submissions`, `launch`, `lead-magnets`, `prospecting`,
`public-relations`, `co-marketing`, `influencer-marketing`, `community-marketing`

**SEO & content** — `ai-seo`, `seo-audit`, `programmatic-seo`, `schema`,
`site-architecture`, `content-strategy`, `copywriting`, `copy-editing`,
`free-tools`

**Conversion & lifecycle** — `cro`, `ab-testing`, `signup`, `onboarding`,
`paywalls`, `popups`, `emails`, `sms`, `churn-prevention`, `referrals`,
`marketing-loops`

**Strategy & positioning** — `marketing-plan`, `marketing-ideas`,
`marketing-council`, `marketing-psychology`, `product-marketing`, `offers`,
`pricing`, `competitors`, `competitor-profiling`, `customer-research`

**Revenue & analytics** — `analytics`, `revops`, `sales-enablement`

**Media** — `social`, `video`, `image`

## Planning — 1 skill

| Skill | What it does |
| --- | --- |
| `agentic-command-center` | Advisory blueprint for planning an AI command center. Guidance only — see the caveat below. |

## `../tools/` — integration reference

The marketing skills link to a shared reference library at
[`.claude/tools/`](../tools/): a [`REGISTRY.md`](../tools/REGISTRY.md) index plus
161 files covering specific integrations (Google Ads, GA4, Segment, Customer.io,
Apollo, Clay, and so on) and CLI notes. It is not a skill and is never loaded on
its own — the skills reference it by relative path, so it must stay at
`.claude/tools/` for those 96 links to resolve.

## Provenance

All files were copied **verbatim** from three source zips — no edits were made to
upstream content. The zips themselves are not kept in the repository now that
their contents are extracted here; the first two remain recoverable from git
history at commit `318d3cb`.

| Skill | Source archive |
| --- | --- |
| The 7 design skills | `ui-ux-pro-max-skill-main.zip` — upstream plugin `ui-ux-pro-max-skill` v2.6.2 (owner: nextlevelbuilder) |
| The 48 marketing skills, and `../tools/` | `marketingskills-main.zip` — upstream `marketingskills` (Corey Haines) |
| `agentic-command-center` | `agentic-command-center-main.zip` |

The ui-ux archive also shipped duplicate copies of the same seven skills under
`cli/assets/skills/` and `src/` (its CLI distribution payload); only the
canonical `.claude/skills/` set was installed, to avoid committing the same
trees three times. The archive's other material — its CLI tool, docs, example
projects, and screenshots — was not carried over, and is available upstream at
https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.

From the marketing archive, `skills/` and `tools/` were installed. Its
repository scaffolding — `AGENTS.md`, `CONTRIBUTING.md`, `VERSIONS.md`, and two
validator shell scripts — was not carried over.

## Licensing

Both upstream packages are MIT-licensed, and their notices are preserved here:

- [`LICENSE-ui-ux-pro-max.txt`](LICENSE-ui-ux-pro-max.txt) — © 2024 Next Level Builder
- [`LICENSE-marketing-skills.txt`](LICENSE-marketing-skills.txt) — © 2025 Corey Haines

Bundled fonts under `ui-styling/canvas-fonts/` carry their own SIL Open Font
License files (`*-OFL.txt`), retained next to each font.

## Dependencies

None. The marketing skills are pure markdown. The design skills bundle Python
scripts that use the standard library only — no `pip install` step, and all of
them compile clean under Python 3.

## Validation

All 48 marketing skills pass Anthropic's official `skills-ref validate`.

The 7 design skills do not, but only because they declare `argument-hint` in
frontmatter — a key Claude Code supports and the stricter published spec does
not. They load and run correctly; no change was made on account of this.

## Caveats

**`design` references a home-directory install path.** Its `SKILL.md` and several
reference files document commands as
`python ~/.claude/skills/design/scripts/...`, which assumes a user-level install.
These skills are installed at *project* level, so those paths resolve to
`.claude/skills/design/scripts/...` relative to the repository root instead. The
strings are documentation hints only — no script resolves a path this way at
runtime — but adjust the prefix when running the commands by hand.

**`agentic-command-center` is deliberately guidance-only, and self-describes its
rules as irreversible.** Its `SKILL.md` states that once invoked, the no-code
restriction applies for the remainder of the conversation and "cannot be
suspended, dismissed, or opted out of." Invoke it when you want architectural
advice; avoid invoking it in a session where you also expect code to be written.
