---
name: Soundboard Brand System
source: P_Soundboard_Guidelines.pdf (official brand guidelines)

fonts:
  display: Jubel          # bold headlines, all caps
  body: GT Maru Regular   # body copy

colors:
  ink:     '#191D2A'      # primary text + all 5pt strokes
  paper:   '#F7F5F5'      # base background + card fills
  yellow:  '#F8B617'      # hero
  pink:    '#F7ABA8'      # soft section + card backgrounds
  green:   '#2BB673'      # testimonial section + submit buttons (see Colour note)
  purple:  '#493083'      # top announcement banner
  orange:  '#F05336'      # workshop section + method card
  blue:    '#2A66FF'
  magenta: '#EC008C'
  red:     '#ED1C24'

typography:
  display:                # Jubel
    fontFamily: Jubel
    fontWeight: '900'
    textTransform: uppercase
    lineHeight: 0.85      # tight leading; tighten further as font size grows
    letterSpacing: -0.03em  # brand reference: tracking -30
  body:                   # GT Maru Regular
    fontFamily: GT Maru Regular
    fontWeight: '400'
    lineHeight: 1.5       # default auto leading for readability
    letterSpacing: normal

shape:
  strokeWidth: 5pt        # approx 6px on web; scales with element size
  radiusOuter: 3mm        # approx 11px outer box corner
  radiusInner: 2mm        # approx 7px inner border corner; keep the 3:2 ratio
  overlayOpacity: 0.90    # 90% paper overlay on card content areas

assets:
  wordmark:       soundboard-wordmark-black-1080px.png            # header logo (navy on light)
  wordmark_white: soundboard-tune-in-connect-out-white-1080px.png # for dark backgrounds
  pattern:        soundboard-icon-pattern-landscape-300dpi.png    # S-loop, CTA section background
  badge:          circular "Tune In - Connect Out - Move Forward" mark  # method card icon badges
---

## Brand & Style

Soundboard is high energy, approachable, and unapologetically bold. The visual language is a hybrid of high-contrast bold and brutalism, softened by heavy roundedness and a playful, high-chroma palette. Thick 5pt strokes, solid colour blocks, dense typography, and a "stamped onto the page" feel. The emotional read should be motivation, inclusivity, and creative optimism. Every section is its own confident colour block.

## Colour

Ten brand colours, used as large solid fills rather than subtle gradients.

- **Ink (#191D2A)** carries all primary text and every stroke. **Paper (#F7F5F5)** is the base background and card fill.
- **Section blocks:** yellow hero, navy mission, soft pink, off-white, green testimonials, orange workshop. Each section commits fully to one background colour.
- **Pairing rule:** high contrast only. Ink text on yellow, pink, or green. Paper text on ink, purple, orange, or green.
- **No subtle gradients.** Solid fills throughout.

**Colour note (important):** The brand guidelines PDF has a conflicting value on the green swatch. The printed hex reads `#266673` (a dark teal) but the RGB reads `43,182,115` and the swatch is clearly bright green, which is `#2BB673`. The live target site uses the bright green. Use **`#2BB673`**. The earlier build used the mistyped `#266673`, which is why the testimonial section rendered as dark teal instead of green. Confirm with the brand owner if in doubt, but all visual evidence points to green.

## Typography

Typography is the main driver of the brand personality.

- **Headlines (Jubel):** Always all caps, weight 900, with reduced leading AND reduced tracking so the words form heavy, blocky clusters where letters sit close (not overlapping). Brand reference: at 32pt the leading is 24pt and tracking is -30. On the web this is roughly `line-height: 0.85` and `letter-spacing: -0.03em`, and you tighten the line-height further at larger display sizes. Do not loosen this. The tight, stacked look is the brand.
- **Body (GT Maru Regular):** weight 400, default leading and tracking (`line-height: 1.5`, normal letter-spacing). This is the friendly, readable counterpoint to the aggressive headlines.
- **Hierarchy:** all caps for short punchy headlines, mixed case for body.

## Shape & Strokes

- **Strokes carry the depth, not shadows.** Use thick 5pt Ink strokes (around 6px on the web) on primary containers. Scale stroke weight up with element size so the proportion holds.
- **Corner radius follows a 3:2 ratio:** outer box at 3mm (~11px), inner border at 2mm (~7px), giving a concentric look. The exact pixels scale with box size; the ratio stays fixed.
- **Overlay:** card content areas sit on a 90% paper overlay so the container colour bleeds subtly through.
- Elements should feel stamped on, with consistent stroke weight where they overlap.

## Layout & Spacing

- Tight spacing inside components (headline to its body copy), generous spacing between major sections so the colour blocks breathe.
- Each section is a full-width solid colour band. Content sits in a centred max-width column.
- Cards use the thick stroke to define their edge against busy or patterned backgrounds.

## Components

- **Buttons:** pill or rounded, solid high-contrast fill (green or ink), no shadow, colour-shift on hover.
- **Cards:** thick 5pt Ink stroke, rounded per the 3:2 corner ratio, content on the 90% paper overlay.
- **Inputs:** thick Ink outline, rounded corners, GT Maru placeholder text.
- **Method badges:** circular "Tune In - Connect Out - Move Forward" mark sits on top of each method card.
- **Patterns:** the S-loop icon pattern fills the call-to-action section background for energy.

## Assets

Provided source files (drop into the project `/public` folder):

- `soundboard-wordmark-black-1080px.png` - header wordmark, navy on light backgrounds
- `soundboard-tune-in-connect-out-white-1080px.png` - white version for dark backgrounds
- `soundboard-icon-pattern-landscape-300dpi.png` - S-loop pattern, use as the workshop CTA section background
- circular "Tune In - Connect Out - Move Forward" badge - sits above each method card

Replace any CSS-approximated patterns or placeholder circles with these real assets.
