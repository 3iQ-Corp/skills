---
name: 3iQ brand
description: Design, write, and render artifacts on brand for 3iQ Corp — institutional digital-asset manager. Use this skill when making slides, web pages, product UI, one-pagers, or anything else that needs the 3iQ look, voice, or tokens.
---

# 3iQ brand skill

3iQ Corp is a Toronto-based institutional digital-asset manager (founded 2012, part of Monex/Coincheck Group). Tagline: **"Forging new paths in alternative investing."**

The brand is confident, precise, institutional. Digital assets are treated as a legitimate asset class — no crypto-native slang, no hype, no emojis in marketing copy.

## Do this first

Before designing anything, read the files you'll need in this order:

1. **`README.md`** — brand overview, full content/visual/iconography fundamentals, and the index of every other file. This is the source of truth; internalize it before you start.
2. **`reference/gradients.md`** — when to use Forge (default, sophisticated) vs Growth (thematic for green-forward products) vs Warmth (CTAs, founders, heritage).
3. **`colors_and_type.css`** — drop-in semantic classes (`.h1`, `.p`, `.eyebrow`) and CSS variables (`--fg1`, `--bg1`, `--accent-yellow`, `--gradient-forge`). Link this in `<head>` and most of the typography + color work is done for you.
4. **`ui_kits/website/`** — the only ready-made component source. If you're making something site-shaped (marketing page, product page, investor page), read these JSX files and reuse/adapt. Don't hand-roll nav/hero/footer from scratch.

`tokens/tokens.{css,json,yaml}` are the raw values `colors_and_type.css` re-exports. Read the JSON/YAML if you need to inject tokens into non-CSS contexts (python-pptx, Jinja, etc.).

## Non-negotiables

- **Fonts.** Denton Light (300) for display/serif headlines. Neue Haas Grotesk Display (500 default, 600 for emphasis, 700 for strong titles) for everything else. Real `.woff2` files are in `fonts/`. Never substitute Inter, Roboto, Fraunces, or system serifs.
- **Default body weight is 500**, not 400. Neue Haas Grotesk looks under-weight at 400 on our palette.
- **Colors.** Primary palette is sand `#D6D5BF`, sky `#C9D7D7`, cream `#EAE9DD`, sage `#B8C6C6`, on a near-black `#080E23` or paper `#FDFCFA`. Accent yellow `#EDC576` is the *only* high-chroma color that appears regularly — use it for rules, ticker highlights, link underlines, and the Forge-gradient CTA button. Green `#B5C97A` and orange `#EE9B6C` are reserved for thematic use (Growth, Warmth).
- **Gradients.** Hero sections and section starters should use one of the three gradients (Forge default). Plain flat dark/light is acceptable but gradients are the brand signature.
- **Iconography.** Lucide style, 1.5px stroke, square caps, `currentColor`. Drawn inline as SVG. See `ui_kits/website/Icons.jsx` for the canonical set (`ArrowUpRight`, `Check`, `Caret`, `Logo`). If you need an icon that isn't there, draw it in the same style.
- **Voice.** Clear, calm, institutional. Short sentences. No emojis. No "game-changing," "revolutionary," "crypto bros," "to the moon." Use "digital assets," not "crypto." Use "institutional investors" or "allocators," not "users." See README > CONTENT FUNDAMENTALS for worked examples.

## Composition patterns

- **Section rhythm.** Alternate dark (Forge gradient or flat `#080E23`) and light (cream gradient or flat `#FDFCFA`) sections. Avoid two dark or two light sections in a row.
- **Eyebrow · rule · headline · lede.** The recurring four-part block. Eyebrow is uppercase `Neue Haas 600 14px tracking 0.04em` in accent yellow on dark, or in `--fg1` opacity 0.7 on light. The rule is a 2px · 4rem bar — yellow on dark, dark on light. Headline is Denton 300 at `clamp(3rem, 6vw, 5.5rem)` line-height 1. Lede is Neue Haas 500 at 17–18px line-height 1.5 with `max-width: 38–52ch`.
- **Cards.** `#FDFCFA` background, `border-radius: 16px`, padding `40px 36px`, soft 1px hairline shadow. Never use heavy drop-shadows.
- **Buttons.** Rounded pills (radius-round). Primary-dark = Forge-gradient fill with dark text. Primary-light = flat sand with dark text. Always include a trailing `ArrowUpRight` icon. Hover = opacity 0.75 with `cubic-bezier(.2,.8,.2,1)` 250ms.
- **Numbered grids.** Firsts / milestones / steps → Denton 300 40px numeral, 2×32 yellow rule under it, then eyebrow + title + body. Five-up across; see `CTA.jsx` in the website kit.

## When in doubt

The design system tab (`preview/` cards) is the visual inventory. Scan it before inventing a new pattern — there's probably already one that fits.
