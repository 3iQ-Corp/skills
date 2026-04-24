# 3iQ Website UI Kit

Pixel-faithful recreation of the 3iq.io marketing site. Compositional JSX components, interactive click-through between sections, wired to the shared tokens in `../../tokens/tokens.css` and the real webfonts in `../../fonts/`.

## Components
- `Icons.jsx` — `Logo`, `ArrowUpRight`, `Check`, `Caret` (the kit's entire icon surface).
- `Nav.jsx` — sticky dark header with blur + right CTA.
- `Hero.jsx` — Forge-gradient hero with eyebrow · rule · display headline · lede · CTA row + FeatureGrid.
- `FeatureGrid.jsx` — the 2×2 constellation feature grid.
- `Solutions.jsx` — "Our digital asset solutions" section (sky-gradient + 2-up white cards).
- `Editorial.jsx` — cream-gradient editorial split headline + 2-col body.
- `CTA.jsx` — 01–05 numbered firsts grid on Forge gradient.
- `Footer.jsx` — dark footer w/ contact + standard disclaimer.
- `App.jsx` — composes all of the above with page-state nav (`home / solutions / about / contact`).

## Run
Open `index.html`. No build required; Babel in-browser handles JSX.

## Cut corners
- Contact form submit re-routes to home; no backend.
- "Insights" / "Investors" routes re-use the CTA section as placeholder.
- Mobile layout not tuned past container `max-width`.
