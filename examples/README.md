# Examples

Reference output produced by the skills in [`.claude/skills/`](../.claude/skills/).
These are worked examples, not templates to ship as-is — they show what the
skills produce on a real task and how the pieces fit together.

Kept here rather than under `.claude/skills/` on purpose: a non-skill directory
inside `skills/` clutters skill discovery.

---

## `forgechat-landing.html`

A landing page for [ForgeChat](https://github.com/Forgemind-git/ForgeChat), the
self-hosted WhatsApp inbox and CRM this repository's root README points at.

Built as an end-to-end test of three parts of the system at once.

### What produced what

| Source | Contribution |
| --- | --- |
| `copywriting` skill | Page structure — hero → problem → benefits → how-it-works → FAQ → final CTA. Also its headline formulas, CTA rules ("Deploy ForgeChat with Docker", not "Get Started"), and its style rules: no exclamation points, active voice, benefits over features. |
| `ui-ux-pro-max` skill | Every colour and font, looked up from its data files rather than chosen by eye — the `Developer Tool / IDE` row of `colors.csv` (`#0F172A` background, `#22C55E` accent, `#1B2336` cards) and the `Developer Mono` pairing from `typography.csv` (JetBrains Mono + IBM Plex Sans). |
| ForgeChat's own README | Every product claim — the fair-code Sustainable Use License, the 2 GB VPS floor, the Node/React/PostgreSQL/Docker stack, the 24-hour reply window, AI agents via your own OpenAI or Claude keys. |

### The empty section is deliberate

The social-proof block is a labelled placeholder, not an oversight. The
`copywriting` skill states: *"honest over sensational — fabricated statistics or
testimonials erode trust and create legal liability."* No install counts, GitHub
stars, or testimonials were invented to fill it.

It is also the highest-value section on a page like this. Fill it with real
numbers or real quotes before using the page for anything.

### Before reusing this

- **It carries ForgeChat and ForgeMind branding.** Publishing it anywhere public
  is a decision for whoever owns that brand.
- **Fonts load from Google Fonts.** Self-host them if the page needs to work
  offline or without third-party requests.
- The page is a single self-contained file with no build step — open it directly
  in a browser.
