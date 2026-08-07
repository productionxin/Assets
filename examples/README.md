# Examples

Work produced with the Production X skills toolkit.

---

## `productionx-landing.html`

A cinematic landing page for **Production X Creative**, built end to end with the
toolkit.

### What produced what

| Source | Contribution |
| --- | --- |
| `copywriting` | Page structure — hero → clients → services → contact. Headline formulas, CTA rules, and its style constraints: no exclamation points, active voice, benefits over features. |
| `ui-ux-pro-max` | Structural and motion direction, looked up from its data files rather than chosen by eye — cinematic dark patterns, ambient light blobs, `cubic-bezier(.16,1,.3,1)` easing, never pure black. |
| productionx.in | Every brand token and every fact — the gold `#C9A84C` palette, Cormorant Garamond + Montserrat, the tagline, the three services, the client list, the contact details. |

Notably, `ui-ux-pro-max` proposed an indigo accent for this category. That was
overridden with Production X's real brand gold — the skill supplies structure,
the brand supplies identity.

### No fabricated proof

There are no invented view counts, follower numbers or testimonials. The
`copywriting` skill's rule is explicit: *"honest over sensational — fabricated
statistics or testimonials erode trust and create legal liability."* Client names
are real and already public on productionx.in.

### Before reusing

- Single self-contained file, no build step — open it directly.
- Fonts load from Google Fonts; self-host for offline use.
- `prefers-reduced-motion` is respected: the marquee and drifting blobs stop.
