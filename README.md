# 3iQ Design System

Single source of truth for **3iQ Corp's** brand — colors, typography, spacing, gradients, logos, fonts, voice, and the visual language of [3iq.io](https://3iq.io). Built for both designers and LLM-driven rendering so we can produce on-brand marketing content, slides, product pages, and decks without re-inventing brand decisions each time.

> **Tagline:** *Forging new paths in alternative investing.*

3iQ is a Toronto-based digital asset manager (founded 2012, now part of Monex/Coincheck Group) that pioneers institutional-grade digital asset investment products — ETFs, CEFs, and multi-crypto vehicles for forward-thinking institutional allocators. The brand is confident, precise, and institutional. It treats digital assets as a legitimate asset class — no crypto-native slang, no hype, no emojis in marketing copy.

---

## Sources

All tokens, fonts, and structure in this project are derived from:

- **GitHub repo** — [`3iQ-Corp/design-system`](https://github.com/3iQ-Corp/design-system) (main branch) — the canonical token set (`tokens/tokens.{yaml,json,css}`), gradient reference, typography specimens, logo SVG, and AGENTS.md rules for LLM consumers. Verified April 2026.
- **Live site** — [3iq.io](https://3iq.io) — Webflow stylesheet was the upstream source for every color/type/spacing value. Favicon + webclip + the real licensed Denton-Light and Neue Haas Grotesk Display webfonts were pulled from the Webflow CDN (`cdn.prod.website-files.com`).

Nothing in this project is invented. If you find a decision that doesn't trace back to one of those two sources, flag it — it's a bug.

---

## Index

Start here:

| File | What it is |
|---|---|
| `README.md` | This file — brand overview, content + visual + iconography fundamentals |
| `SKILL.md` | Agent-Skills-compatible entry-point for agents |
| `colors_and_type.css` | Drop-in semantic CSS: `.h1 / .p / .eyebrow / --fg1 / --bg1 / --accent-yellow`. Re-exports `tokens/tokens.css`. |
| `tokens/tokens.yaml` | Human-readable source of truth for all tokens |
| `tokens/tokens.json` | Machine-readable mirror (for Python, python-pptx, Jinja) |
| `tokens/tokens.css` | CSS custom properties — `var(--bg)`, `var(--text)`, `var(--gradient-forge)` |
| `reference/gradients.md` | When to use Forge vs Growth vs Warmth |
| `reference/typography/` | Live HTML specimens (dark, light, editorial, numbered-grid, feature-cards, forge-hero) |
| `fonts/` | Real licensed `.woff2` (Denton-Light + Neue Haas Grotesk Display 300/400/500) + variable-font placeholders |
| `assets/logos/3iq_logo.svg` | Primary logo (currentColor fill) |
| `assets/3iq_favicon.png`, `assets/3iq_webclip.png` | Favicons |
| `preview/` | Small HTML cards that populate the Design System tab |
| `ui_kits/website/` | Pixel-faithful recreation of the 3iq.io marketing site, componentised |
| `ui_kits/product/` | Fund product-page UI kit (ticker table, fund hero, fund detail) |

---

## Content fundamentals

### Voice
Confident, precise, institutional. Measured language — *pioneering, forging, institutional-grade, regulated*. Treats digital assets as a legitimate asset class for traditional allocators. No hype, no hedging either — state the fact and let it stand.

### Tone
Third-person or neutral first-person-plural ("we"). Speaks TO institutional investors, allocators, advisors — not retail. Never condescending.

### Casing
- **Headlines:** Sentence case (`Forging new paths in alternative investing`). Never all-caps except for eyebrows and tickers.
- **Eyebrows / UI labels / ticker badges:** `UPPERCASE` with `0.04em` letter-spacing.
- **Body, buttons:** Sentence case.
- **Product names:** Title Case (*3iQ Bitcoin ETF*, *3iQ Solana Staking ETF*).

### Lead with the fact
> *"2020: North America's first major exchange-listed Bitcoin and Ether Funds."*

Not "We're proud to have launched…". The milestone comes first; framing follows if at all.

### "Digital assets," not "crypto"
In institutional contexts use **digital assets** / **digital asset investing**. "Crypto" is acceptable in casual body copy and product-feature lists (e.g. *multi-crypto fund*), never in the headline or hero.

### Numbers + units
Always pair numbers with their unit: `USD 200M`, `4.25% yield`, `bps` for spreads, `AUM` on scale. Prefer explicit regulatory jurisdictions: *"regulated in Canada by the OSC"*, *"listed on Nasdaq Dubai"*.

### Cite firsts
Firsts and regulatory milestones are the brand's central marketing asset. Lead with them when they apply:

- 2017: First regulated Digital Asset Investment Fund Manager in Canada
- 2020: North America's first major exchange-listed Bitcoin and Ether Funds
- 2021: Middle East's first exchange-listed Bitcoin-based fund on Nasdaq Dubai
- 2023: World's first ETH staking ETF
- 2025: Among the first Solana Staking ETFs and XRP ETFs
- 2026: First Canadian commercial-bank-backed actively managed ETF

### Do
- Lead with the milestone or fact; context follows.
- Name specific regulators, exchanges, instruments.
- Use numbers with units.
- Use signature phrases: *"Forging new paths in alternative investing"*, *"Institutional-grade digital asset investments"*, *"Pioneering digital asset investment management since 2012"*.
- Include `tokens.disclaimer.standard` on anything that looks like marketing.

### Don't
- **No emojis** in marketing copy. Ever.
- **No crypto-native slang** (HODL, WAGMI, ape, moon, diamond hands).
- **No exclamation marks.**
- **No hype adjectives** — *revolutionary, game-changing, disruptive, insane, epic*.
- **No all-caps headlines** — eyebrows only.
- **No "we're excited to announce"** openers. Announcement? Lead with what launched.

### Example contrast

| ❌ Off-brand | ✅ On-brand |
|---|---|
| "We're thrilled to launch our insanely innovative ETH staking ETF!! 🚀" | "3iQ launches the world's first ETH staking ETF." |
| "Crypto for everyone" | "Institutional-grade digital asset investments." |
| "Join the digital asset revolution" | "Pioneering digital asset investment management since 2012." |

---

## Visual foundations

### Palette — muted warm neutrals over dark
The brand is **NOT** "navy + gold + green". It's a **muted warm-neutral** palette (sand, sky, cream, sage) sitting on dark gradients, with yellow / green / orange used sparingly as accents.

- **Dark `#080E23`** — default background. Deep navy, almost black.
- **Dark Secondary `#4C3D32`** — warm brown, lives only at the bottom of the Forge gradient.
- **Light `#FDFCFA`** — warm off-white text on dark, page background on light.
- **Brand palette** — sand `#D6D5BF`, sky `#C9D7D7`, cream `#EAE9DD`, sage `#B8C6C6`. These are the primary visual identity.
- **Accents** — yellow `#EDC576` (ETF/corporate), green `#4C9478` (CEF/positive), orange `#E6704E` (multi-crypto/warmth).

### Gradients do the heavy lifting
The brand leans on gradients more than flat colour for hero surfaces. Three named hero gradients, each tied to a product family:

- **Forge** (`#080E23 → #4C3D32`) — navy→warm brown. Yellow accent. ETF / corporate / default.
- **Growth** (`#1E3239 → #02393C`) — deep slate→deep teal. Green accent. CEFs, yield.
- **Warmth** (`#1C0E1D → #3A1717`) — plum-black→oxblood. Orange accent. Multi-crypto, thematic.

Apply with `data-fund-theme="etf|cef|multi-crypto"` on a wrapper; the CSS tokens swap gradient + accent + rule in one step.

For cards on light backgrounds: four light top-to-bottom fades — `card_sand`, `card_sky`, `card_cream`, `card_sage` — for subtle variation across a grid without reaching for the hero gradients.

### Typography
- **Display / H1–H5:** Denton Light (300). Serif. Tight leading (`1em`–`1.1em`), `0.01em` letter-spacing. Sentence case.
- **H6, body, UI, buttons, eyebrows:** Neue Haas Grotesk Display. Sans. Site's default body weight is **500 (Medium)**, not 400 — match that.
- **Scale (desktop):** display `7rem` · h1 `5rem` · h2 `4rem` · h3 `3rem` · h4 `2.5rem` · h5 `2rem` · h6 `1.5rem` · body `1rem` · small `0.875rem`.
- **Line-height:** tight `1em` (display/h1/h2) · snug `1.1em` (h3/h4/h5) · normal `1.25em` (h6, lg, sm) · relaxed `1.5em` (body).
- **Letter-spacing:** `0` body · `0.01em` headings · `0.04em` eyebrows + tickers.

### Backgrounds & imagery
- **Full-bleed gradients** are the default for hero/section backgrounds.
- **Light card tints** for grids of cards on bright sections.
- **Full-bleed photography** is warm, institutional, architectural — never stock-crypto imagery (no glowing orbs, no hoodie hackers, no rocket ships). Imagery skews cool/cinematic with warm highlights. Subtle grain is acceptable; heavy filters aren't.
- **No repeating textures or illustration patterns.** Gradients are the texture.

### Spacing & layout
- Rem-based scale: `0.125`, `0.25`, `0.5`, `0.75`, `1`, `1.25`, `1.5`, `2`, `2.5`, `3`, `3.5`, `4`, `5`, `6`, `7`, `8`, `10`, `12`, `15`.
- Section vertical padding: `x_small 2.5rem · small 5rem · main 7rem · large 10rem · x_large 15rem`.
- Section horizontal: `small 2.5rem · main 5rem`.
- Content max-width: `96rem` (1536px) container.
- Prose max-width: `60ch` (body), `50ch` (lede), `14ch` (display headlines — long lines are never allowed to break the elegance).
- Grids: 2-col and 2×2 are the dominant compositions. 5-col numbered grids for feature lists with `01–05` numerals.

### Cards
- **Radius:** `1rem` (`--radius-main`). No heavy rounding; never pill-shaped cards.
- **Fill:** white (`#FDFCFA`) or a card tint gradient.
- **Shadow:** almost none — `0 1px 0 rgba(8, 14, 35, 0.04)`. Cards sit on tonal background, not on neutral grey with drop-shadow drama.
- **Border:** hairline `rgb(8 14 35 / 0.12)` between list rows inside a card; cards themselves usually have no border.
- **Padding:** `2rem`–`2.5rem` (`--sp-4`/`--sp-5`). Generous.

### Borders & rules
- Only two widths: `1px` and `2px`.
- **Hairline rules** (`--rule-muted`, 25% opacity) divide sections and list rows.
- **Accent rules** (`--rule`, 2px, themed colour) are short — 4rem — and sit under eyebrows or between hero content blocks.
- The tone is **typographic and editorial**, not boxed.

### Buttons
- **Shape:** fully-rounded pill (`border-radius: 100vw`).
- **Dark theme primary CTA:** horizontal gradient `button_dark` — light→sand, `linear-gradient(to right, #FDFCFA 15%, #D6D5BF 100%)`, dark text. On hover opacity drops to 75%.
- **Light theme primary CTA:** solid sand `#D6D5BF` fill, dark text.
- **Secondary:** transparent fill, 1px current-color border, matches text color.
- **Icon:** a small top-right arrow (`↗`) inside the button — never a chevron, never a plain right-arrow.

### Hover / press states
- **Links + buttons hover:** opacity drops to ~75% (not a colour change).
- **Press:** further opacity step to ~60%; no scale/shrink transforms.
- **Card hover:** subtle `translateY(-2px)` or a small hairline-colour shift; no heavy shadows.

### Animation
- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` (standard Webflow "ease-out-quart" feel). Calm, not bouncy.
- **Duration:** 200–400ms for UI, 600–900ms for hero fades on first view.
- **Fades over scale.** Parallax is acceptable in hero sections; bounce is not.
- **No page-load stagger animations** on marketing body copy — too hype-y for the tone.

### Transparency & blur
- `rgb(253 252 250 / 0.25)` (light @ 25%) for hairlines on dark.
- `rgb(8 14 35 / 0.25)` (dark @ 25%) for hairlines on light.
- Backdrop-blur used sparingly on sticky nav over hero gradients. Not used as a decorative effect.

### Corner radii
- `x_small 0.25rem` — input fields, small swatches.
- `small 0.375rem` — internal chips/badges.
- `main 1rem` — cards, images, media.
- `round 100vw` — buttons, avatars, pills.

### Layout rules
- Sticky top nav on marketing pages; otherwise fixed elements are rare.
- Long-form hero headlines break at meaningful phrase endings (`max-width: 14ch` and careful line breaks).
- Right-aligned CTA buttons are common at the end of sections.
- A section nearly always has: eyebrow (accent, uppercase) → display headline (Denton light, sentence case) → 1–2 paragraph lede (sans medium) → content grid → right-aligned CTA.

---

## Iconography

The brand has **no proprietary icon set** yet. 3iQ's AGENTS.md explicitly declares icons out-of-scope — the Forge-hero specimen uses **dot-and-line constellation-style motifs** as stand-ins, not final brand icons.

### Our approach
- **No emoji** anywhere. Not in marketing, UI, or even internal docs.
- **No unicode glyphs** as icons — arrows, checks, etc. are always SVG.
- **SVG only**, 1.5px stroke, square line-caps. Uses `currentColor` so the icon inherits from CSS `color`.
- **Yellow accent for a single element** inside the icon (echoing the Forge-hero stand-ins) — a single highlighted dot or shape, never more.

### Default icon set
Until an owned set exists, we use **Lucide** via CDN (`https://unpkg.com/lucide@latest`). It matches the brand's stroke weight and geometric feel better than Heroicons. Listed as a substitution — flag to the client.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="arrow-up-right"></i>
```

### In-repo icons
- `assets/logos/3iq_logo.svg` — primary wordmark, `currentColor` fill.
- `assets/3iq_favicon.png`, `assets/3iq_webclip.png` — application icons.

### Rules
- **Stroke weight:** `1.5px`. Strokes, not fills.
- **Size:** `16px` / `20px` / `24px` / `80px` (hero feature motifs). Always a rem grid multiple.
- **Color:** inherits from text (`currentColor`). Single accent element allowed in the accent colour (`var(--accent)`).
- **Clearspace for logo:** height of the "Q". Minimum logo width `80px`.
- **Never recolor the logo.** Use it on dark or light by setting CSS `color`, never by filling child paths.

---

## Substitutions flagged

- **Fonts:** both the real Denton-Light and Neue Haas Grotesk Display (`.woff2`) were pulled from the live Webflow CDN and are committed to `/fonts/`. The variable-font placeholders (`DentonVariableTest-VF.otf`, `FunnelSans-VariableFont_wght.ttf`) referenced in the upstream repo are **also** in `/fonts/` but are not used by default. Confirm licensing before distributing the `.woff2` with externally-shared artefacts.
- **Icons:** Lucide CDN is a substitution until 3iQ commissions its own set. Flagged.
- **Neue Haas 600/700:** the site loads only 300/400/500. We map 600/700 → Medium (500) so "semibold" feature titles still render. Not a license issue, but letterforms at 600+ will look a touch lighter than a proper Semibold cut.
