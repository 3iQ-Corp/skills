# Logo

The 3iQ wordmark is a single canonical asset. **Always use the file. Never improvise, redraw, retype, or substitute a text rendering.**

- **Canonical file:** `assets/logos/3iq_logo.svg`
- **JSX component (ui_kits/website):** `ui_kits/website/Icons.jsx` → `Logo`
- **viewBox:** `0 0 96 30`
- **Fill:** `currentColor` — the logo inherits from CSS `color`, which is how it adapts to dark and light surfaces without recoloring the artwork.

If you're about to type "3iQ" in a display font and call it the logo — stop. Use the SVG.

## How to use it

### Raw SVG (HTML, email, anything static)

Read the file and paste its contents inline so it picks up `currentColor`:

```html
<!-- Inherits color from the surrounding CSS color. Set width, not height. -->
<span style="color: var(--fg1); display: inline-block; width: 96px;">
  <!-- contents of assets/logos/3iq_logo.svg -->
</span>
```

### `<img>` (when inlining isn't an option)

Loses `currentColor` inheritance. Only acceptable if the host can't render inline SVG (some email clients, some CMS fields). In those cases ship two pre-colored copies of the file — one with `fill="#080E23"` for light surfaces, one with `fill="#FDFCFA"` for dark.

```html
<img src="assets/logos/3iq_logo.svg" alt="3iQ" width="96">
```

### React / JSX

Import the `Logo` component. Do not re-inline the SVG in another component.

```jsx
import { Logo } from './Icons';

<Logo width={96} />  // inherits color from parent
```

### Slides / python-pptx

Embed the SVG as a picture from `assets/logos/3iq_logo.svg`. For backgrounds that don't support SVG, export two PNGs at 3× the needed width (one dark-text, one light-text) and embed the appropriate one. Do not substitute a text frame styled in Denton.

## Color

- **On dark surfaces:** set CSS `color: #FDFCFA` (light). The `currentColor` fill picks it up.
- **On light surfaces:** set CSS `color: #080E23` (dark).
- Never set `fill=` on a child `<path>`. Never recolor the wordmark to yellow, green, orange, or any accent.
- Never apply a filter, shadow, outline, or emboss.

## Size

- **Minimum width:** `80px`. Below that, clarity of the `3iQ` mark falls apart.
- **Standard sizes:** 80px (nav), 96px (footer, email signature), 128px+ (hero, print).
- Set `width` only — let the aspect ratio (`viewBox 0 0 96 30`) drive the height.
- Always a rem-grid multiple on marketing surfaces (80 / 96 / 128 / 160 / 192 / 256).

## Clearspace

- **Height of the uppercase "Q"** on all four sides. Nothing crosses into that space — no text, no rules, no card edges, no photography.
- Clearspace scales with the logo. At 96px wide, the "Q" is ~18px tall; reserve 18px of breathing room all around.

## Placement

- **Top-left** of a page or slide is the default — all marketing pages on 3iq.io anchor the logo there.
- **Footer-left** or **footer-center** are both acceptable for long-form pages.
- Do not center the logo over hero imagery; do not scale it to dominate a layout; do not use it as a watermark repeat.

## Never

- Never **retype** "3iQ" in Denton, Neue Haas, or any other font and call it the logo. It's a specific piece of custom artwork, not a typeset string.
- Never **redraw** from memory or trace an approximation.
- Never **recolor child paths**. Use CSS `color` only.
- Never **add a tagline, "since 2012", or other lockup** underneath without a committed lockup asset — none exists in this repo.
- Never **stretch, rotate, skew, or mirror** the wordmark.
- Never **place on visually busy photography** without a solid color or 25% scrim behind it.
- Never **put the logo inside a shape** (circle, square, pill) unless that container is itself a committed asset. None exists in this repo.
- Never use the **favicon PNG** (`assets/3iq_favicon.png`) or **webclip PNG** (`assets/3iq_webclip.png`) as a substitute wordmark. Those are application icons only.

## In-repo references

- `assets/logos/3iq_logo.svg` — the file.
- `ui_kits/website/Icons.jsx` → `Logo` — JSX component, inherits `currentColor`.
- `ui_kits/website/Nav.jsx` — canonical nav usage (`<Logo width={80}/>`).
- `ui_kits/website/Footer.jsx` — canonical footer usage (`<Logo width={96}/>`).
- `preview/brand-logo.html` — visual specimen showing on-dark and on-light, with clearspace + min-width callouts.
