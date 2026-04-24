# Gradients

The 3iQ brand leans on gradients more than flat color for surface treatments.
The live site uses three named hero gradients — **Forge**, **Growth**, and
**Warmth** — each mapped to a product family.

## Hero gradients

All three are vertical (`180deg`, top → bottom) and dark. Use them as
full-bleed page/section backgrounds, with white text and a single accent
color on top.

| Name | Gradient | Top → Bottom | Accent | Used for |
|---|---|---|---|---|
| **Forge** | `linear-gradient(180deg, #080E23, #4C3D32)` | Navy → warm brown | Yellow `#EDC576` | ETFs, general corporate, default |
| **Growth** | `linear-gradient(180deg, #1E3239, #02393C)` | Deep slate → deep teal | Green `#4C9478` | CEFs, yield products |
| **Warmth** | `linear-gradient(180deg, #1C0E1D, #3A1717)` | Plum-black → oxblood | Orange `#E6704E` | Multi-crypto, thematic products |

### When to pick which

- **Default to Forge.** If the content isn't tied to a specific fund family,
  use Forge. It's the corporate identity gradient.
- **Growth** when the subject is yield, income, or a CEF. The cooler palette
  reinforces "returns / steady".
- **Warmth** when the subject is multi-asset, thematic, or a hedge fund
  product (e.g. QMAP). The warmer palette hints at active / dynamic.

### Don't

- Don't mix two hero gradients on the same surface.
- Don't recolor the text over a gradient. White (`#FDFCFA`) only, with the
  matching accent for eyebrows/rules.
- Don't use these gradients as card fills — use the light card tints below.

## Card tint gradients

Light, top-to-bottom fades for cards, tiles, and testimonial blocks on
light backgrounds.

| Name | Gradient | Top → Bottom |
|---|---|---|
| `card_sand`  | `linear-gradient(180deg, #D6D5BF, #F8F7F5)` | Sand → light paper |
| `card_sky`   | `linear-gradient(180deg, #C9D7D7, #F4ECE5)` | Pale sky → warm cream |
| `card_cream` | `linear-gradient(180deg, #EAE9DD, #FDFCFA)` | Cream → white |
| `card_sage`  | `linear-gradient(180deg, #B8C6C6, #F8F7F5)` | Sage → light paper |

Use these to create subtle color variation across a grid of cards without
reaching for the hero gradients.

## Button gradient

The primary CTA on dark backgrounds uses a horizontal gradient:

```
linear-gradient(to right, #FDFCFA 15%, #D6D5BF 100%)
```

Text on this button is `#080E23` (dark). On hover, opacity drops to 75%.

## Utility

A horizontal dark→transparent fade for edges of dark sections:

```
linear-gradient(90deg, #080E23, #080E231A 65%)
```

Useful for fading masthead imagery into a dark background.
