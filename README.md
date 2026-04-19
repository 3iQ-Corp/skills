# 3iQ Design System

Single source of truth for 3iQ's brand: colors, typography, spacing, logos,
fonts, gradients, voice, and product taxonomy. Designed to be consumed by
**LLMs and rendering scripts** to produce on-brand marketing content,
slides, emails, and web pages.

All tokens are derived from the live [3iq.io](https://3iq.io) Webflow
stylesheet (verified April 2026).

## Quick reference

| Token | Value | Notes |
|---|---|---|
| `dark` (bg) | `#080E23` | Default background |
| `dark_secondary` | `#4C3D32` | Forge gradient bottom |
| `light` (text on dark) | `#FDFCFA` | |
| `brand` (sand) | `#D6D5BF` | Primary brand fill on light |
| `yellow` (aka gold) | `#EDC576` | Eyebrow / accent |
| `green` | `#4C9478` | CEF / positive |
| `orange` | `#E6704E` | Multi-crypto / warmth |
| Heading font | Denton Light (300) | Serif; fallback Georgia / Times New Roman |
| Body font | Neue Haas Grotesk Display Medium (500) | Sans; fallback Inter / Arial |

**Default theme is dark.** The brand leans heavily on **gradients** for
surfaces — see `tokens.gradient.forge` / `growth` / `warmth`.

## Structure

```
design-system/
├── AGENTS.md                ← READ FIRST if you are an LLM
├── tokens/
│   ├── tokens.yaml          ← human-readable source of truth
│   ├── tokens.json          ← machine-readable (same data)
│   └── tokens.css           ← CSS custom properties
├── reference/
│   └── gradients.md         ← when to use forge vs growth vs warmth
└── assets/
    ├── logos/3iq_logo.svg
    └── fonts/               ← placeholders until licensed fonts added
        ├── DentonVariableTest-VF.otf
        └── FunnelSans-VariableFont_wght.ttf
```

## Consuming from another project

### Python
```python
import json, pathlib
tokens = json.loads(pathlib.Path("../design-system/tokens/tokens.json").read_text())

bg       = tokens["color"]["role"]["dark"]["bg"]         # "#080E23"
accent   = tokens["color"]["role"]["dark"]["accent"]     # "#EDC576"
forge    = tokens["gradient"]["forge"]                    # linear-gradient(...)
headline = tokens["typography"]["secondary"]["family"]    # Denton, ...
```

### HTML / CSS
```html
<link rel="stylesheet" href="../design-system/tokens/tokens.css">
<div data-theme="dark" data-fund-theme="etf"
     style="background: var(--bg-gradient); color: var(--text);">
  <span style="color: var(--accent); font: var(--fs-text-small)/var(--lh-normal) var(--font-primary);
               letter-spacing: var(--ls-wide); text-transform: uppercase;">
    Eyebrow
  </span>
  <h1 style="font: var(--fw-light) var(--fs-h1)/var(--lh-tight) var(--font-secondary);
             letter-spacing: var(--ls-heading);">
    Forging new paths
  </h1>
</div>
```

### As a git submodule
```bash
git submodule add https://github.com/3iQ-Corp/design-system.git design-system
```

## Updating tokens

1. Edit `tokens/tokens.yaml` (the readable source).
2. Mirror the change in `tokens/tokens.json` and `tokens/tokens.css`.
3. Commit with a message describing the **brand decision**, not just the diff.

Keep `.yaml`, `.json`, and `.css` in sync. They're duplicated on purpose so
consumers can pick the easiest format for their runtime.

## Known limitations

- **Font files in `assets/fonts/` are placeholders.** Denton-Light and
  Neue Haas Grotesk Display are licensed; the real files should be
  obtained from the brand team and dropped in to replace the current
  stand-ins.
- No chart palette, icon set, or motion tokens yet — add when needed.
