# Instructions for LLMs using this repo

This repo is 3iQ's brand design system. Tokens are derived from the live
3iq.io stylesheet (verified April 2026). Your job when a human asks you
to "make something branded" (slide, email, social card, web page, diagram)
is to pull values from this repo — **never invent brand decisions**.

## Where to look, in order

1. **`tokens/tokens.json`** — canonical machine-readable tokens. Read this
   first. Same data in `tokens/tokens.yaml` (human-readable) and
   `tokens/tokens.css` (CSS custom properties for direct web/email use).
2. **`reference/gradients.md`** — when to use forge vs growth vs warmth.
3. **`assets/logos/`** — the only approved logo files.
4. **`assets/fonts/`** — local font files (see Typography notes below).

## Non-negotiable rules

### Color
Use only values from `tokens.color.swatch` or the semantic `tokens.color.role.{dark,light}` maps. Do not introduce new hex codes.

- **Default theme is dark.** Background `#080E23`, text `#FDFCFA`.
- **The brand is NOT "navy + gold + green".** It is a *muted warm neutral* palette (sand `#D6D5BF`, sky `#C9D7D7`, cream `#EAE9DD`, sage `#B8C6C6`) with dark backgrounds and limited yellow/green/orange accents.
- **Gradients do most of the heavy lifting.** Prefer `gradient.forge` (dark navy→warm brown) for hero backgrounds over flat navy.
- **Yellow `#EDC576`** (not "gold") is the primary accent — eyebrows, ticker badges, rules, highlights.
- **Green `#4C9478`** = positive / accent / CEF fund theme. Not the default CTA color.
- **Orange `#E6704E`** = warmth accent / multi-crypto fund theme.
- CTA buttons on dark backgrounds use `gradient.button_dark` (light→sand), NOT a solid green.

### Fund-theme colorways
If the output is tied to a specific fund family, apply the matching theme:
- **ETF products** → `color.fund_theme.etf` (Forge gradient, yellow accent)
- **CEF products** → `color.fund_theme.cef` (Growth gradient, green accent)
- **Multi-crypto products** → `color.fund_theme.multi_crypto` (Warmth gradient, orange accent)

In CSS, apply via `data-fund-theme="etf|cef|multi-crypto"` on a wrapper. The
tokens.css file handles the rest.

### Typography
- **Headlines H1–H5 and display:** Denton (serif, light 300). Tight leading (`1em`–`1.1em`), `0.01em` letter-spacing.
- **Body, UI, H6, buttons, eyebrows:** Neue Haas Grotesk Display (sans).
- Site's "regular" body weight is **500 (medium)**, not 400. Match that in rendered output.

**Fallback policy — state your fallback to the user:**
| Target | Denton fallback | Neue Haas fallback |
|---|---|---|
| Web (modern browsers) | `Palatino Linotype, Georgia, serif` | `Inter, system-ui, sans-serif` |
| Email (HTML) | `Georgia, "Times New Roman", serif` | `Arial, Helvetica, sans-serif` |
| PowerPoint / Word | `Times New Roman` | `Arial` |
| PDF (embedded) | Use local `assets/fonts/DentonVariableTest-VF.otf` (placeholder — the real Denton-Light is licensed) | Use a locally-available sans until Neue Haas is licensed |

**Important caveat on local font files:** the two files in `assets/fonts/` are **placeholders** inherited from a prior rendering pipeline. They are *not* the true brand fonts. Until the licensed Denton-Light and Neue Haas Grotesk Display files are added, rendered outputs will look close but not identical to 3iq.io. Flag this in your output to the user when relevant.

### Logo
- Use `assets/logos/3iq_logo.svg`. Clearspace = height of the "Q". Minimum width 80px.
- Never recolor outside of `currentColor` (the SVG uses `fill="currentColor"` so it inherits from CSS color). Never stretch.

### Voice
Follow `tokens.voice` — no hype, no emojis in marketing copy, no crypto-native slang. Lead with facts. See `voice.signature_phrases` for on-brand framings you can reuse.

### Disclaimer
When producing anything that looks like marketing, include `tokens.disclaimer.standard` verbatim unless the human explicitly opts out.

## Producing output

- **Web / HTML email:** import `tokens/tokens.css` or inline the `:root` block. Reference `var(--bg)`, `var(--cta-text)`, `var(--gradient-forge)`, etc.
- **Python / rendering scripts:** load `tokens/tokens.json` with `json.load` and pass values into Jinja / python-pptx / Playwright.
- **Slides (`.pptx`):** map colors via `RGBColor.from_string(tokens["color"]["swatch"]["dark"][1:])`. Use `Times New Roman` and `Arial` as the font fallbacks.
- **Static images / posters:** read the same tokens and map them onto the target format.

## When you're unsure

If the user asks for something tokens don't cover (a chart palette, a new product-line gradient, icon styles), **ask before inventing**. Propose a value derived from the existing palette and wait for confirmation. If approved, add it to `tokens.yaml` / `.json` / `.css` in the same commit so the decision is captured.

## Out of scope (for now)

- React/Vue component library — not yet.
- Icon set — not yet. Use Lucide or the user's choice until we standardize.
- Motion/animation tokens — not yet.
- Chart color palettes — not yet. Derive from brand/fund-theme palette and flag.
