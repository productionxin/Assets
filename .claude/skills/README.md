# Installed skills

Project-level Claude skills for this repository. Anything in this directory is
picked up automatically by Claude Code when working in `Assets/`.

| Skill | Source | What it does |
| --- | --- | --- |
| `agentic-command-center` | `agentic-command-center-main.zip` | Advisory blueprint for planning an AI command center. Guidance only — see the caveat below. |
| `ui-ux-pro-max` | `ui-ux-pro-max-skill-main.zip` | UI/UX design intelligence: 84 styles, 161 palettes, 73 font pairings, 25 charts, 17 stack guidelines. |
| `design` | `ui-ux-pro-max-skill-main.zip` | Umbrella design skill — brand identity, tokens, logo/icon generation, corporate identity program. |
| `design-system` | `ui-ux-pro-max-skill-main.zip` | Three-layer token architecture (primitive → semantic → component) and component specs. |
| `ui-styling` | `ui-ux-pro-max-skill-main.zip` | shadcn/ui + Tailwind styling, accessibility, and bundled canvas fonts. |
| `brand` | `ui-ux-pro-max-skill-main.zip` | Brand voice, visual identity, messaging frameworks, asset management. |
| `slides` | `ui-ux-pro-max-skill-main.zip` | Strategic HTML presentations with Chart.js and design tokens. |
| `banner-design` | `ui-ux-pro-max-skill-main.zip` | Banners for social, ads, web heroes, and print. |

## Provenance

All files were copied **verbatim** from two source zips — no edits were made to
upstream content. Those zips have since been removed from the repository root
now that their contents are extracted here; they remain recoverable from git
history at commit `318d3cb` if ever needed.

| Skill | Source archive |
| --- | --- |
| The seven design skills | `ui-ux-pro-max-skill-main.zip` — upstream plugin `ui-ux-pro-max-skill` v2.6.2 (owner: nextlevelbuilder) |
| `agentic-command-center` | `agentic-command-center-main.zip` |

The ui-ux archive also shipped duplicate copies of the same seven skills under
`cli/assets/skills/` and `src/` (its CLI distribution payload); only the
canonical `.claude/skills/` set was installed, to avoid committing the same
trees three times. The archive's other material — its CLI tool, docs, example
projects, and screenshots — was not carried over, and is available upstream at
https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.

## Licensing

The seven design skills are MIT-licensed; the upstream notice is preserved
alongside them in [`LICENSE-ui-ux-pro-max.txt`](LICENSE-ui-ux-pro-max.txt).
Bundled fonts under `ui-styling/canvas-fonts/` carry their own SIL Open Font
License files (`*-OFL.txt`), which are retained next to each font.

## Dependencies

The bundled Python scripts use the standard library only — no `pip install` step.
All of them compile clean under Python 3.

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
