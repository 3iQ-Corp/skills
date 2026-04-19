# 3iQ Design System

Single source of truth for 3iQ's brand: colors, typography, spacing, logos,
fonts, and voice. Designed to be consumed by **LLMs and rendering scripts**
to produce on-brand marketing content, slides, emails, and web pages.

## Quick reference

| Token | Value |
|---|---|
| Navy (bg) | `#080E23` |
| Green (CTA) | `#4C9478` |
| Gold (accent) | `#EDC576` |
| Off-white (text on dark) | `#FDFCFA` |
| Heading font | Denton Variable Test (serif) |
| Body font | Funnel Sans |

## Structure

```
design-system/
├── AGENTS.md                ← READ FIRST if you are an LLM
├── tokens/
│   ├── tokens.yaml          ← human-readable source of truth
│   ├── tokens.json          ← machine-readable (same data)
│   └── tokens.css           ← CSS custom properties
└── assets/
    ├── logos/3iq_logo.svg
    └── fonts/
        ├── DentonVariableTest-VF.otf
        └── FunnelSans-VariableFont_wght.ttf
```

## Consuming from another project

### Python
```python
import json, pathlib
tokens = json.loads(pathlib.Path("../design-system/tokens/tokens.json").read_text())
navy  = tokens["color"]["navy"]
green = tokens["color"]["role"]["cta"]
```

### HTML / CSS
```html
<link rel="stylesheet" href="../design-system/tokens/tokens.css">
<div style="background: var(--bg-primary); color: var(--text-on-dark);">...</div>
```

### As a git submodule
```bash
git submodule add git@github.com:3iQ-Corp/design-system.git design-system
```

## Updating tokens

1. Edit `tokens/tokens.yaml`.
2. Mirror the change in `tokens/tokens.json` and `tokens/tokens.css`.
3. Commit with a message describing the brand decision (not just the diff).

Keep `.yaml`, `.json`, and `.css` in sync. They're duplicated on purpose so
consumers can pick the easiest format for their runtime.
