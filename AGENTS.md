# Instructions for LLMs using this repo

This repo is 3iQ's brand design system. Your job when a human asks you to
"make something branded" (slide, email, social card, web page, diagram) is
to pull values from this repo — **never invent brand decisions**.

## Where to look, in order

1. **`tokens/tokens.json`** — canonical machine-readable tokens. Read this first.
   Same data in `tokens/tokens.yaml` (human-readable) and `tokens/tokens.css`
   (CSS custom properties for direct web/email use).
2. **`assets/logos/`** — the only approved logo files.
3. **`assets/fonts/`** — Denton (headlines, serif) and Funnel Sans (body, sans).
4. **`tokens.yaml` → `voice`** — tone rules. Follow them exactly.

## Non-negotiable rules

- **Colors:** use only values from `tokens.color`. Do not introduce new hex codes.
  Navy `#080E23` is the default background. Green `#4C9478` is the only CTA
  color. Gold `#EDC576` is for eyebrows, accent bars, and highlights.
- **Type:** headlines in Denton, everything else in Funnel Sans. If a target
  environment can't load the font (e.g. email clients), fall back to
  `Times New Roman` for Denton and a system sans-serif for Funnel Sans — and
  say so explicitly to the user.
- **Logo:** use `assets/logos/3iq_logo.svg`. Clearspace = height of the "Q".
  Minimum width 80px. Never recolor. Never stretch.
- **Voice:** follow `tokens.voice` — no hype, no emojis in marketing copy,
  no crypto-native slang. Lead with facts.
- **Disclaimer:** when producing anything that looks like marketing,
  include the standard disclaimer from `tokens.disclaimer.standard` unless
  the human explicitly opts out.

## Producing output

- **Web / HTML email:** import `tokens/tokens.css` or inline the `:root`
  variables. Reference `var(--bg-primary)`, `var(--cta)`, etc.
- **Python / rendering scripts:** load `tokens/tokens.json` with `json.load`
  or `tokens/tokens.yaml` with `yaml.safe_load` and pass values into Jinja.
- **Slides / static images:** read the same tokens and map them onto the
  target format (e.g. `python-pptx` RGBColor, Figma API, etc.).

## When you're unsure

If the user asks for something the tokens don't cover (a new layout,
a color for a new product line, a chart palette), **ask before inventing**.
Propose a value derived from the existing palette (e.g. a tint of navy) and
wait for confirmation. Then, if approved, add it to `tokens.yaml` / `.json`
/ `.css` in the same commit so the decision is captured for next time.

## Out of scope (for now)

- React/Vue component library — not yet.
- Icon set — not yet. Use Lucide or the user's choice until we standardize.
- Motion/animation tokens — not yet.
