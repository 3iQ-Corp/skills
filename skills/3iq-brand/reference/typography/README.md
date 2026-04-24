# Specimens

Self-contained HTML pages showing the brand typography, color, and layout
in context. All values resolve to `var(--…)` from `tokens/tokens.css` —
no new brand decisions are introduced in this folder.

Start at [`index.html`](./index.html) for a navigable gallery.

## Type scale

| File | Theme | Background |
|---|---|---|
| `dark.html`  | `data-theme="dark"` (default) | `#080E23` |
| `light.html` | `data-theme="light"`          | `#FDFCFA` |

Each page walks down the scale: Display → H1–H6 → Eyebrow → Body
(large / main / small) → Weights → Headline-body pairing. The left
column labels each block with the token metadata (family · weight ·
size · leading) so the spec is visible in the rendered output.

Shared styles: `_specimen.css`.

## Layout compositions

| File | Background | Pattern |
|---|---|---|
| `editorial-hero.html` | `gradient-card-cream` | Split headline + 2-column body + "Industry Recognition" footer link |
| `numbered-grid.html`  | `gradient-card-cream` | Intro + 5-column numbered feature grid (01–05, hairline rules, sans-bold sub-heads) |
| `feature-cards.html`  | `gradient-card-sky`   | Intro + 2-up white rounded cards with check-list rows (sand + sage swatches) |
| `forge-hero.html`     | `gradient-forge`      | Dark 2×2 feature grid with stand-in dot-line icons, ETF/yellow accent, CTA button gradient |

Shared styles: `_layouts.css`.

### Note on the sky-gradient section

`reference/gradients.md` describes `gradient-card-sky` as a card-tint
gradient, not a section background. The live site applies it as a soft
full-bleed on the "Our digital asset solutions" section. `feature-cards.html`
follows the site; if that usage is off-brand, flag it and I'll pull the
gradient back to the cards themselves.

### Note on the forge-hero icons

The four SVGs in `forge-hero.html` are **stand-in dot-and-line motifs**,
not final brand icons. They illustrate the layout (white primary strokes
with a single yellow accent shape) but should not be reused as-is. The
real icon set is out of scope for this repo (see `AGENTS.md`).

## How to view

Open any file directly in a browser. The `<link>` to `tokens.css` and
the `@font-face` declarations to `assets/fonts/*` both use relative
paths from this folder, so serving is not required.

## Font caveat

Both stylesheets register `Denton` and `Neue Haas Grotesk Display`
against the two variable fonts in `assets/fonts/`
(`DentonVariableTest-VF.otf` and `FunnelSans-VariableFont_wght.ttf`).
Per `AGENTS.md`, **those files are placeholders** — not the licensed
brand faces. Letterforms will look close but not identical to 3iq.io
until the real fonts are added. The `--font-primary` /
`--font-secondary` stacks in `tokens.css` still fall back cleanly
(Inter / Palatino Linotype) if the `@font-face` rules are removed.

## What to change here vs. in tokens

- Want a different size, weight, color, or gradient? → edit
  `tokens/tokens.css` (and the YAML/JSON siblings). These pages will
  pick it up automatically.
- Want a different specimen layout? → edit `_specimen.css` (type scale)
  or `_layouts.css` (compositions). Those files only hold presentation
  rules for the specimens, never brand decisions.
