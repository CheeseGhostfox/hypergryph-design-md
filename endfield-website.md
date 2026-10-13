---
version: alpha
name: Endfield-design-analysis
description: "A signal-yellow industrial-tech interface built on a near-black #191919 ground with a single high-voltage yellow (#fffa00) that behaves like painted safety marking: it fills the primary action, marks every section edge, and prints the oversized ghost wordmarks that sit behind content. The system is light/dark split rather than dark-only — sub-page headers run a hard white-to-yellow gradient split, container pages are near-white, and #191919 panels float on top of both. Geometry is the opposite of its sibling Arknights: circles and 42px pills for controls, 4–6px corners for cards and buttons, and diagonal-stripe gradients layered inside pill containers. Typography mixes a proprietary Sans family (Regular/Medium/Bold/Black) for UI and CJK with Gilroy for Latin labels, Novecento Sans Wide for tracked display caps, and a stencil face for accents. Only one icon system is colour-coded — the five elements; the six professions stay monochrome glyphs."

colors:
  primary: "#fffa00"
  primary-strong: "#fff500"
  primary-soft: "#ffff21"
  on-primary: "#191919"
  canvas: "#191919"
  canvas-inverse: "#ffffff"
  surface-1: "#1f1f22"
  surface-2: "#2e2e2e"
  surface-3: "#35373c"
  surface-4: "#383838"
  surface-5: "#424242"
  neutral-0: "#fafafa"
  neutral-1: "#f2f2f2"
  neutral-2: "#f0f0f0"
  neutral-3: "#e6e6e6"
  neutral-4: "#d9d9d9"
  neutral-5: "#cccccc"
  neutral-6: "#b3b3b3"
  neutral-7: "#999999"
  neutral-8: "#666666"
  hairline: "#c6c6c6"
  ink: "#ffffff"
  ink-inverse: "#191919"
  ink-muted: "#999999"
  ink-subtle: "#cccccc"
  accent-green: "#00ffa2"
  accent-magenta: "#ff1aac"
  element-fire: "#f86038"
  element-ice: "#20c0d0"
  element-electric: "#f8c000"
  element-nature: "#c0e050"
  element-physic: "#404040"
  scrim: "#000000"

typography:
  display-xl:
    fontFamily: Novecento Sans Wide Bold
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.00
    letterSpacing: -1.4px
  display-lg:
    fontFamily: Sans Bold
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: -1.4px
  headline:
    fontFamily: Novecento Sans Wide DemiBold
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: -0.6px
  card-title:
    fontFamily: Sans Bold
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.6px
  tab:
    fontFamily: Sans Medium
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.00
    letterSpacing: -0.6px
  subhead:
    fontFamily: Sans Regular
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.6px
  body-lg:
    fontFamily: Sans Regular
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: -0.5px
  body:
    fontFamily: Sans Regular
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: -0.4px
  body-sm:
    fontFamily: Sans Regular
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: -0.4px
  label:
    fontFamily: Sans Medium
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  caption:
    fontFamily: Gilroy Medium
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0.6px
  eyebrow:
    fontFamily: Gilroy Medium
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 1px
  stencil:
    fontFamily: Protest Strike Regular
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0
  tech:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  pill: 42px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 100px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.sm}"
    padding: 0 24px 0 140px
    height: 100px
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.sm}"
    padding: 0 24px 0 140px
    height: 100px
  button-secondary:
    backgroundColor: "{colors.surface-4}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.md}"
    padding: 0 32px 0 69px
    height: 67px
  button-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 0 20px
    height: 48px
  filter-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.subhead}"
    rounded: "{rounded.sm}"
    padding: 0 32px
    height: 48px
  filter-chip-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.subhead}"
    rounded: "{rounded.sm}"
    padding: 0 32px
    height: 48px
  subpage-tab:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.tab}"
    rounded: "{rounded.sm}"
    padding: 0 48px
    height: 168px
  subpage-tab-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.tab}"
    rounded: "{rounded.sm}"
    padding: 0 48px
    height: 168px
  operator-card:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 0
  operator-card-namebar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.none}"
    padding: 0 16px
    height: 72px
  operator-card-tile:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
    height: 44px
    width: 44px
  element-tile-fire:
    backgroundColor: "{colors.element-fire}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
    height: 44px
    width: 44px
  element-tile-ice:
    backgroundColor: "{colors.element-ice}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
    height: 44px
    width: 44px
  element-tile-electric:
    backgroundColor: "{colors.element-electric}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
    height: 44px
    width: 44px
  element-tile-nature:
    backgroundColor: "{colors.element-nature}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
    height: 44px
    width: 44px
  element-tile-physic:
    backgroundColor: "{colors.element-physic}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
    height: 44px
    width: 44px
  card-accent-strip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0
    height: 8px
  pagination-pill:
    backgroundColor: "{colors.neutral-3}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 0 60px
    height: 84px
  pagination-button:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 0
    height: 74px
    width: 74px
  pagination-button-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 0
    height: 74px
    width: 74px
  subpage-header:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 0
    height: 506px
  section-marker:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: 0
    width: 132px
  section-marker-icon:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 0
    height: 70px
    width: 70px
  section-tag:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0 12px
    height: 36px
  ghost-display:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.neutral-4}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 0
  progress-bar:
    backgroundColor: "{colors.neutral-4}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 0
    height: 100px
  progress-bar-fill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 0
    height: 100px
  download-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: 0 24px
    height: 60px
  download-tile-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: 0 24px
    height: 60px
  language-item:
    backgroundColor: "{colors.neutral-2}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0 22px
    height: 72px
    width: 372px
  icon-button:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 0
    height: 52px
    width: 52px
  scrim-overlay:
    backgroundColor: "{colors.scrim}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 0
  panel-cool:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  panel-rail:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 0
    width: 46px
  panel-deep:
    backgroundColor: "{colors.surface-5}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  page-field:
    backgroundColor: "{colors.neutral-1}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 0
  divider-light:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0
    height: 1px
  rule-soft:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0
    height: 9px
  text-subtle-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  text-muted-light:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  text-muted-strong:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.neutral-5}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  text-tertiary-light:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.neutral-6}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  text-label-light:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.neutral-7}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0
  text-disabled-light:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.neutral-8}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  status-indicator-live:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent-green}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: 0
    height: 12px
    width: 12px
  status-indicator-alert:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent-magenta}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: 0
    height: 12px
    width: 12px
---

## Overview

Endfield runs on **two grounds, not one**. Near-black `{colors.canvas}` (#191919 — deliberately not pure black) carries panels, media and the icon rail; a **near-white** `{colors.canvas-inverse}` carries container pages, the operator grid and every light card. The two are stacked rather than split: on `/operator` a white card grid sits on white, with `{colors.canvas}` name bars inside each card, while the home page is a full-bleed key visual with dark chrome floating over it.

The single chromatic accent is **signal yellow** `{colors.primary}` (#fffa00) — 57 declarations in 370 KB of shipped CSS, and the only saturated colour that appears at scale. It behaves like painted safety marking rather than a brand tint: it fills the primary action, it is the left edge of the primary button, it is the vertical bar that marks each section's start, it is the fill of the progress bar, and it is the top half of every sub-page header. A slightly deeper `{colors.primary-strong}` (#fff500) draws the inner rules *inside* yellow surfaces, and `{colors.primary-soft}` (#ffff21) draws the thin hairline rules around them.

Geometry is where Endfield separates hard from its sibling Arknights. Controls are **circular or pill**: the pagination control is a 42px-radius pill with a diagonal-stripe gradient painted inside it, its two buttons are 37px-radius circles with a texture overlay and a double ring border, and the icon tiles are effectively circles at 21px on a 52px square. Cards and buttons take only `{rounded.sm}` 4px. Endfield is also the first surface in this pair that **uses shadows** (`box-shadow: 0 0 10px rgba(2,2,2,.3)` on pagination buttons) and **drops every blend-mode trick** its sibling relies on (zero `mix-blend-mode`, zero `backdrop-filter`).

Typographically the system is a working Sans family — `SansRegular` / `SansMedium` / `SansBold` / `SansBlack` carry all UI and CJK at negative tracking (−0.02em to −0.03em) — supported by **Gilroy** for Latin labels and eyebrows, **Novecento Sans Wide** for tracked display caps (the one family shared with Arknights), **Space Grotesk** for technical strings, and a **stencil face** (Protest Strike) for accents.

The layout is **rem-scaled, not breakpoint-scaled**: a script recomputes the root font size from the viewport against a 1080×1920 design canvas, which is why every measurement in the shipped CSS is expressed in `rem`. Portrait and landscape are handled by 366 + 113 orientation queries rather than width breakpoints.

**Key Characteristics:**
- **Two grounds** — `{colors.canvas}` #191919 for chrome and panels, `{colors.canvas-inverse}` near-white for container pages and cards.
- **One saturated accent** — `{colors.primary}` #fffa00, used as safety marking: action fill, section bar, progress fill, header split.
- **Yellow-within-yellow** — `{colors.primary-strong}` #fff500 draws rules inside yellow surfaces; `{colors.primary-soft}` #ffff21 draws hairlines.
- **Pills and circles for controls, 4px for cards** — `{rounded.pill}` 42px, `{rounded.full}`, and `{rounded.sm}` 4px. Nothing in between at scale.
- **Shadows are back.** Soft 10px ambient shadows on floating controls — the opposite of Arknights' zero-shadow rule.
- **Diagonal stripes and texture overlays** inside pill containers instead of blend modes.
- **One colour-coded icon system only**: the five **elements** carry colour; the six **professions** are monochrome dark glyphs on light tiles.
- **rem-scaled layout** against a 1080×1920 canvas, with orientation (not width) queries.
- **Heavy ghost wordmark** — a light-grey `{colors.neutral-4}` display word behind the operator grid, the light-mode sibling of Arknights' dark ghost type.

## Colors

> Source surfaces: `endfield.hypergryph.com` (official CN site — home, `/operator`, `/news`; 370,417 bytes of shipped CSS across 9 stylesheets), cross-checked against the Arknights family core and the local client installed at `E:\Hypergryph Launcher\games\Endfield Game`.

### Brand & Accent
- **Signal Yellow** ({colors.primary}): #fffa00 — the system's only saturated colour at scale. Fills the primary button, the section marker bar, the progress fill and the top half of sub-page headers.
- **Signal Yellow Strong** ({colors.primary-strong}): #fff500 — a marginally deeper yellow used for rules *inside* yellow surfaces (the 4px divider inside the primary button, the 12px left edge of the same button).
- **Signal Yellow Soft** ({colors.primary-soft}): #ffff21 — thin 9px and 5px hairline bars that bracket the home page's begin-control.
- **On Primary** ({colors.on-primary}): #191919 — the canvas colour reused as text on yellow. Yellow never carries white type.
- **Accent Green** ({colors.accent-green}): #00ffa2 — used sparingly as a secondary signal (live/success states, a few progress contexts).
- **Accent Magenta** ({colors.accent-magenta}): #ff1aac — the rarest accent; appears in highlight/alert contexts only.

### Surface
- **Canvas** ({colors.canvas}): #191919 — the most-declared colour in the stylesheet (85 uses). Panels, icon rail, name bars, footer.
- **Canvas Inverse** ({colors.canvas-inverse}): #ffffff — container pages, operator cards, sub-page content fields.
- **Surface 1** ({colors.surface-1}): #1f1f22 — the coolest of the dark steps.
- **Surface 2** ({colors.surface-2}): #2e2e2e — icon tiles, download-button glyph wells.
- **Surface 3** ({colors.surface-3}): #35373c — the cool grey panel step, most used of the mid darks.
- **Surface 4** ({colors.surface-4}): #383838 — the secondary button fill.
- **Surface 5** ({colors.surface-5}): #424242 — the deepest observed panel.
- **Hairline** ({colors.hairline}): #c6c6c6 — a 16px heavy rule under sub-page headers and a 1px divider between pagination blocks. Endfield borders are light grey on light, not white-on-black.
- **Scrim** ({colors.scrim}): pure black, used only at alpha (0.1 / 0.25 / 0.3 / 0.5 / 0.6 / 0.7 / 0.75) over artwork.

### Neutrals
A full ten-step light ramp, which the dark-ground Arknights core does not have. Endfield's container pages are built from it rather than from tinted surfaces.

- **Neutral 0** ({colors.neutral-0}): #fafafa — pagination button fill, arrow chips on hover.
- **Neutral 1** ({colors.neutral-1}): #f2f2f2 — page field.
- **Neutral 2** ({colors.neutral-2}): #f0f0f0 — language selectors, form-scale blocks.
- **Neutral 3** ({colors.neutral-3}): #e6e6e6 — the pagination pill container and its inner ring.
- **Neutral 4** ({colors.neutral-4}): #d9d9d9 — divider rules, progress track, and the **ghost display** type on light ground.
- **Neutral 5** ({colors.neutral-5}): #cccccc — muted text.
- **Neutral 6** ({colors.neutral-6}): #b3b3b3 — tertiary text.
- **Neutral 7** ({colors.neutral-7}): #999999 — the most common muted ink (19 uses).
- **Neutral 8** ({colors.neutral-8}): #666666 — disabled and footnote ink.

### Text
- **Ink** ({colors.ink}): #ffffff — type on `{colors.canvas}` and on dark element tiles.
- **Ink Inverse** ({colors.ink-inverse}): #191919 — type on white cards, tabs, chips and the light ground. The same value as the canvas; Endfield does not define a separate "black ink".
- **Ink Muted** ({colors.ink-muted}): #999999 — labels and metadata on light.
- **Ink Subtle** ({colors.ink-subtle}): #cccccc — lowest-emphasis type on dark.

### Element Attributes
The only colour-coded data dimension in the system. Sampled from the game's own element icon assets served by the official CDN (`ele-*.jpg`, 120×120, 5-bit quantised, JPEG-sourced so values are approximate).

- **Fire** ({colors.element-fire}): #f86038 — 91.4% of the icon's non-background pixels.
- **Ice** ({colors.element-ice}): #20c0d0 — 82.4%.
- **Electric** ({colors.element-electric}): #f8c000 — 90.9%. Note this sits deliberately close to `{colors.primary}`; element tiles are always read against a card, never against the yellow section bar.
- **Nature** ({colors.element-nature}): #c0e050 — 89.4%.
- **Physic** ({colors.element-physic}): #404040 — 96.1%, a neutral grey rather than a hue. The physical element is the uncoloured one.

## Typography

### Font Family

- **Sans** — the product's own family, shipped as four cuts: `SansRegular`, `SansMedium`, `SansBold`, `SansBlack`. These are the workhorses — 38 declarations for Medium, 23 for Regular, 8 for Bold, 2 for Black — and carry every CJK glyph, card title, tab label and body string. Fallback `HarmonyOS Sans SC, MiSans, Noto Sans SC, sans-serif`.
- **Gilroy** — geometric sans in Light / Medium / ExtraBold. Carries Latin-only labels, eyebrows and the uppercase `// OPERATORS`-style tags. Fallback `Outfit, Manrope, sans-serif` (both are close free matches).
- **Novecento Sans Wide** — the wide grotesque in Medium / DemiBold / Bold, used for tracked display caps on the yellow deco bars and for pagination-block headings. **This is the family shared with the Arknights core** and the strongest single link between the two systems. Fallback `Archivo, Encode Sans Expanded, sans-serif`.
- **Space Grotesk** — technical strings and counters. Fallback `Space Grotesk, IBM Plex Mono, monospace`.
- **Protest Strike** — a stencil face used for accent lettering. Fallback `Saira Stencil One, Allerta Stencil, sans-serif`.
- **Roboto** (Regular / Black) ships as a base Latin fallback inside the same `@font-face` block and is not used as a voice.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 700 | 1.00 | -1.4px | Giant ghost wordmark behind content |
| `{typography.display-lg}` | 72px | 700 | 1.14 | -1.4px | Sub-page header title |
| `{typography.headline}` | 56px | 600 | 1.00 | -0.6px | Novecento caps on the yellow deco bar |
| `{typography.subhead}` | 30px | 400 | 1.25 | -0.6px | Filter chip label, lead copy |
| `{typography.card-title}` | 28px | 700 | 1.20 | -0.6px | Operator name in the card name bar |
| `{typography.tab}` | 28px | 500 | 1.00 | -0.6px | Sub-page tab label |
| `{typography.body-lg}` | 24px | 400 | 1.40 | -0.5px | Lead body |
| `{typography.body}` | 20px | 400 | 1.40 | -0.4px | Default body |
| `{typography.body-sm}` | 18px | 400 | 1.40 | -0.4px | Card body, dense lists |
| `{typography.stencil}` | 24px | 400 | 1.00 | 0 | Stencil accent lettering |
| `{typography.caption}` | 18px | 500 | 1.20 | 0.6px | Latin card metadata — Gilroy |
| `{typography.label}` | 16px | 500 | 1.20 | 0 | Button and control labels |
| `{typography.eyebrow}` | 14px | 500 | 1.20 | 1px | `// OPERATORS`-style tags |
| `{typography.tech}` | 16px | 400 | 1.40 | 0 | Technical strings, counters |

### Principles

- **Track in, not out.** Body and UI sit at −0.02em to −0.03em; even the 72px display only reaches −1.4px. Where the Arknights core tracks caps *out* (+1px to +3px), Endfield tightens. The only positive tracking is on Gilroy captions and eyebrows, where the uppercase needs air.
- **Colour is reserved for elements, not professions.** Profession icons are monochrome — a `#202020` glyph on a `#e0e0e0` field across all six (`assault`, `caster`, `guard`, `shielder`, `support`, `vanguard`). Only the five elements get a hue (see Colors). Any new coded dimension must pick one of those two treatments, not invent a third.
- **Latin and CJK stay in different families.** Gilroy for Latin labels and tags, the Sans family for CJK. Mixing them on one line is the norm, not an exception.
- **Uppercase is a Latin-only device.** The `// SECTION` tags and Novecento deco headings are uppercase; CJK never is.

### Note on Font Substitutes

The Sans family, Gilroy, Novecento Sans Wide and Protest Strike are all proprietary or narrowly distributed. Novecento Sans Wide → **Archivo** (expanded width axis). Gilroy → **Outfit** or **Manrope**. Sans → **HarmonyOS Sans SC**, **MiSans**, or **Noto Sans SC**; a designer-curated font library at `ignoredone.space/index.php/fontlab/` recommends exactly this class of substitute (Manrope, Outfit, Google Sans Flex, Inter Tight, MiSans, HarmonyOS Sans) for this kind of Chinese industrial-UI work and is a good starting catalogue. **Space Grotesk** is free and should be used as shipped.

## Layout

### Spacing System

- **Base unit**: 4px, expressed in the shipped CSS as `rem` against a 16px root.
- **Tokens (front matter)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 100px.
- The working rhythm is multiples of 8, with a large jump at the component scale: 8 / 16 / 24 / 32 / 48 / 60 / 100px.
- **Primary button**: 100px tall, `padding: 0 24px 0 140px` — a deep left indent that reserves space for the yellow's internal divider and mark.
- **Secondary button**: 67px tall, `padding: 0 32px 0 69px`.
- **Sub-page tab**: 168px tall, `padding: 0 48px`.
- **Operator card**: portrait area on top, a 72px `{colors.canvas}` name bar beneath, then a 8px accent strip.
- **Sub-page header**: 506px tall with a 16px `{colors.hairline}` bottom rule.

### Grid & Container

- The operator grid is **6-up at desktop** with a ~35px gutter, cards sized by the column rather than fixed.
- Sub-page headers set their content against a `calc(50% - 80rem + …)` offset — the layout is computed against a **variable-width centre**, so the header title tracks the viewport rather than a fixed container.
- A **132px yellow vertical bar** marks the start of each content section; it carries the section's icon and its Novecento title in `{colors.on-primary}`.
- The home page is a fixed composition: a 46px-wide icon rail pinned left, the key visual full-bleed, and a dark control cluster in the lower middle.

### Whitespace Philosophy

Endfield's whitespace is **architectural, not atmospheric**. On light pages, whitespace is literal white; on dark pages, it is `{colors.canvas}`. Separation is done with a 16px heavy `{colors.hairline}` rule (sub-page headers) or a 1px light rule (pagination blocks) — never with a shadow — while floating controls are separated by a 10px ambient shadow instead. The two grounds are stacked, so a page can hold large white fields and dark panels at once; the yellow bar is what tells the eye which section it is in.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Page grounds, text, icon rail |
| 1 (hairline) | 1px `{colors.hairline}` on light, 16px heavy rule for header closes | Pagination block dividers, sub-page header base |
| 2 (ambient float) | `box-shadow: 0 0 10px rgba(2,2,2,.3)` | Circular pagination buttons, floating chips |
| 3 (inner rule) | A 4–6px rule in a *different* yellow (`{colors.primary-strong}`) drawn inside a yellow surface | Primary button divider, section marker edges |
| 4 (texture overlay) | A `png` texture (`pag-button-texture`) at full bleed inside a circular button, plus a double ring (`6px #e6e6e6` then `4px #fff`) | Pagination buttons |
| 5 (scrim) | Black gradient at 0.6–0.85 over artwork | Home key visual behind the control cluster |

Depth is carried by **three devices that never mix**: hairline rules on light, ambient shadows on floating controls, and black scrims on artwork. The Arknights core's blend-mode texture stack is entirely absent here — `mix-blend-mode` and `backdrop-filter` both count zero in the shipped CSS.

### Decorative Depth

- **Diagonal stripes.** Pill containers paint a `linear-gradient(−45deg, transparent …, black …, transparent …, black …)` band across their own fill — a caution-tape motif rather than a texture overlay.
- **Deco colour bars.** Vertical yellow strips carry inverted text: a Novecento caps title, the Endfield wordmark, and a Gilroy `AK` label, all in `{colors.on-primary}`.
- **Split header gradient.** `linear-gradient(180deg, white 249px, #fffa00 0)` gives the sub-page header a hard white-to-yellow edge rather than a soft fade.
- **Ghost display.** `{typography.display-xl}` in `{colors.neutral-4}` behind the operator grid — the light-ground counterpart of the sibling system's #242424 watermark.
- **Texture plates.** Assets named `points-bg`, `tape-wave-bg`, `mask`, `triangles` and `color-bar` are laid as flat plates, never blended.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Name bars, deco bars, headers, strips, tags |
| `{rounded.xs}` | 2px | Smallest chips |
| `{rounded.sm}` | 4px | Primary/secondary buttons, filter chips, cards, element tiles |
| `{rounded.md}` | 6px | Secondary button, larger controls |
| `{rounded.lg}` | 8px | Download tiles |
| `{rounded.pill}` | 42px | Pagination container, icon buttons |
| `{rounded.full}` | 9999px | Circular pagination buttons, ring borders |

The distribution is **bimodal**: 26 declarations at `50%` and 27 at 2–4px, with a second cluster at 30–54px pills and almost nothing between 8px and 30px. Controls are round or barely rounded; there is no "soft card" middle ground.

### Decorative Geometry

- **Circle-plus-ring.** A circular control is built from a filled circle, a texture plate, then two concentric borders (`6px #e6e6e6`, `4px #fff`) — the ring reads as gauge hardware.
- **The 12px left edge.** The primary button carries `border-left: 12px solid {colors.primary-strong}` — a two-tone edge on an otherwise flat yellow slab.
- **Diagonal caution band.** See Elevation — the stripe gradient is the system's only pattern.
- **Icon tiles.** Operator cards close with two 44px tiles side by side: a monochrome profession glyph on `{colors.surface-2}` and a colour-filled element tile. The pairing is fixed; neither tile appears alone.
- **Bottom accent strip.** Every operator card terminates in an 8px full-width colour strip, which is the card's only colour at rest.

## Components

### Buttons

**`button-primary`** — the yellow slab. The only filled action in the system.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.card-title}`, `{rounded.sm}` 4px, height 100px, `padding: 0 24px 0 140px`.
- A 12px `{colors.primary-strong}` left border and a 4px `{colors.primary-strong}` divider at ~114px split the slab into a mark zone and a label zone.
- Carries `box-shadow: 0 0 12px rgba(0,0,0,…)`.
- Hover shifts to `{colors.primary-strong}`; the geometry does not move.

**`button-secondary`** — the dark counterpart for "back"-class actions.
- Background `{colors.surface-4}` (#383838), text `{colors.ink}`, `{rounded.md}` 6px, height 67px, `padding: 0 32px 0 69px`. Grows to fit its label (`width: max-content`) with a 238px minimum.

**`button-dark`** — 48px black control used inside light clusters (download and payment tiles on dark media).

**`icon-button`** — 52px, `{rounded.pill}`, `{colors.surface-2}` fill. Used for the icon-rail entries and circular affordances at small size.

### Navigation & Filters

**`filter-chip`** — the operator-page filter row (职业 / 属性).
- Default: `{colors.canvas}` fill, `{colors.ink}` label at `{typography.subhead}`, `{rounded.sm}`, 48px tall, `padding: 0 32px`, with a chevron glyph pinned right.
- Active: the same geometry filled with `{colors.primary}` and `{colors.on-primary}` text.
- Selection is communicated **by the fill only** — no border, no underline.

**`section-tag`** — the `// OPERATORS`-style label. `{colors.canvas-inverse}` fill, `{colors.ink-inverse}` Gilroy caps at `{typography.eyebrow}`, `{rounded.none}`, 36px tall. It marks the top-left corner of a card grid and the top of each yellow bar.

**`subpage-tab`** — 168px tall, `padding: 0 48px`, `{rounded.sm}` 4px, `{colors.ink-inverse}` Sans Medium at `{typography.tab}`.
- Hover fills the tab with `{colors.primary}` and reveals a 37px circular arrow chip on the right at full opacity (it sits at `opacity: 0` at rest).
- The transition is `background-color .2s ease` — the only motion in the component.

### Cards & Lists

**`operator-card`** — the system's core content unit.
- White `{rounded.sm}` 4px card, 1px border, portrait art filling the upper area.
- **`operator-card-namebar`**: a 72px `{colors.canvas}` bar with the CJK name in `{colors.ink}` at `{typography.card-title}` and the Latin name beneath at `{typography.caption}`; two 44px tiles sit right-aligned in the same bar.
- **`operator-card-tile`** (profession) and **`element-tile-*`** (element): the fixed pair described under Shapes.
- **`card-accent-strip`**: an 8px full-width colour strip closing the card.

**`pagination-pill`** — the carousel control.
- `{colors.neutral-3}` container, `{rounded.pill}` 42px, height 84px, `padding: 0 60px`, with a 36px inner radius and a diagonal caution band painted across the fill.
- Contains `{typography.label}` block links separated by 1px `{colors.hairline}`; the active block switches to Novecento Sans Wide Bold in `{colors.ink-inverse}`.

**`pagination-button`** — the two circular arrows inside the pill.
- 74px circles, `{rounded.full}`, `{colors.neutral-0}` fill, a texture plate and a double ring, `box-shadow: 0 0 10px rgba(2,2,2,.3)`.
- Hover fills `{colors.primary}` (`pagination-button-hover`) — the yellow arrives on hover, not at rest.

### Headers & Section Marks

**`subpage-header`** — the white-to-yellow split masthead.
- 506px tall, `linear-gradient(180deg, white 249px, {colors.primary} 0)`, closed by a 16px `{colors.hairline}` rule.
- A 70px `{colors.canvas}` tile with a `{colors.primary}` glyph sits at the leading corner, followed by a colon glyph and the uppercase Latin title in `{colors.caption}` on yellow.
- The CJK title runs the full 1532px width in `{typography.display-lg}` at `{colors.on-primary}`.

**`section-marker`** — the vertical yellow bar that opens each content section.
- 132px wide, `{colors.primary}`, running the section's full height, with `{typography.headline}` Novecento caps turned to sit against it and the wordmark pinned to its bottom.
- **`section-marker-icon`**: a 70px `{colors.canvas}` square on the bar carrying a yellow glyph — dark-on-yellow inverted.

### Feedback & Progress

**`progress-bar`** — a 100px-tall `{colors.neutral-4}` track with a `{colors.primary}` fill (`progress-bar-fill`) that grows as content loads.
- The progress readout is set in `{colors.primary}` numerals, preceded by a 8×30px `{rounded.sm}` yellow bar.

**`scrim-overlay`** — the black protection layer between artwork and the control cluster. Always black, always at alpha (0.6–0.85), never tinted.

### Download Cluster

**`download-tile`** — 60px tall, `{rounded.lg}` 8px, `{colors.canvas}` fill with `{colors.ink}` label and a store glyph.
**`download-tile-primary`** — the same geometry in `{colors.primary}` with `{colors.on-primary}` text. This is the one download affordance allowed to be yellow.

**`language-item`** — 372×72px, `{colors.neutral-2}` fill, `{rounded.none}`, `{colors.ink-inverse}` label, with a globe glyph pinned left and a chevron pinned right that rotates 90° on a 0.2s transition.

## Do's and Don'ts

### Do

- Pick the ground first: `{colors.canvas}` #191919 for chrome and panels, `{colors.canvas-inverse}` for container pages and cards. Never invent a third ground.
- Reserve `{colors.primary}` #fffa00 for: the primary action fill, the section marker bar, the progress fill, the sub-page header band, and hover state on circular controls.
- Use `{colors.primary-strong}` #fff500 for rules *inside* yellow surfaces and `{colors.primary-soft}` #ffff21 for hairlines around them. Three yellows, three jobs.
- Set `{colors.on-primary}` #191919 on every yellow fill. Yellow never carries white type.
- Choose a shape from the two clusters: `{rounded.sm}` 4px for cards and buttons, `{rounded.pill}` 42px or `{rounded.full}` for controls. Avoid the 8–30px middle.
- Give floating controls an ambient `0 0 10px rgba(2,2,2,.3)` shadow; give flat content a 1px or 16px `{colors.hairline}` rule. Do not swap them.
- Colour **elements** and leave **professions** monochrome. The five element values are the entire coded palette.
- Pair the profession tile and the element tile on every operator card; close the card with the 8px accent strip.
- Track body and UI text slightly negative (−0.02em to −0.03em); reserve positive tracking for uppercase Gilroy.
- Gate hover styling behind `@media (any-hover:hover)`.

### Don't

- Don't use pure black (#000000) as the canvas — the ground is #191919, and pure black is reserved for scrims.
- Don't use two saturated accents in one view. Yellow is the system; green and magenta are signals, not decoration.
- Don't put white type on `{colors.primary}`, or `{colors.ink-inverse}` on `{colors.canvas}`.
- Don't mix the shape clusters — a 14px radius on a button is neither round nor square and reads as neither.
- Don't use `mix-blend-mode` or `backdrop-filter`. The sibling Arknights system does; this one does not, and that difference is what keeps them distinguishable.
- Don't use a width breakpoint. Scale the root font size against the 1080×1920 canvas and switch on orientation.
- Don't colour-code a third dimension. Elements have colour, professions have glyphs — that is the whole system.
- Don't let a card carry more than one colour strip; the strip is the card's only resting colour.
- Don't soften the 12px `{colors.primary-strong}` left edge on the primary button — the two-tone edge is the button's identity.
- Don't set CJK in the Latin label faces (Gilroy, Novecento, Protest Strike); they lack the glyph coverage and the tone.

## Responsive Behavior

### Layout Model

This surface does **not** use width breakpoints. A boot script measures the viewport and recomputes `documentElement.style.fontSize` against a **1080×1920 design canvas**, so every dimension in the shipped CSS is a `rem` proportional to that canvas. The stylesheet then switches on orientation: **366 `@media (orientation: portrait)` blocks** and **113 `@media (orientation: landscape)` blocks**, plus 26 `@media (any-hover: hover)` blocks for pointer affordances.

| Condition | Key Changes |
|---|---|
| Landscape (default desktop) | Design canvas rotated; 6-up operator grid; 132px section bars run full height; sub-page header 506px |
| `orientation: portrait` | Grid reflows to fewer columns; section bars shorten and move; deco text re-anchors; compresses toward a 1080×1920 phone composition |
| `any-hover: hover` (26 blocks) | Hover fills are added — `{colors.primary}` arrives on pagination and tab controls |
| `any-hover: none` | Those blocks never apply; the resting and active states alone carry the interaction |

### Touch Targets

- Primary CTA holds 100px height; secondary 67px; filter chips 48px; tabs 168px.
- Circular pagination buttons are 74px with a 10px shadow halo — comfortably above 44px.
- Icon-rail entries are 52px square.

### Collapsing Strategy

- **Operator grid**: 6-up on desktop, stepping down by column count rather than by breakpoint constant.
- **Sub-page header**: the 249px white band and the yellow band keep their hard edge; the title scales with the root font size rather than re-wrapping.
- **Section bars**: the 132px yellow bar remains, but its Novecento caps rotate and shorten in portrait.
- **Download cluster**: the horizontal row of store tiles reflows into a wrapped group inside the dark cluster.

### Image Behavior

- The home page is a **full-bleed key visual** with a black scrim between it and the control cluster; the artwork never crops to a card.
- Operator portraits are cropped to a fixed aspect inside the card's upper area and are never letterboxed.
- Texture plates (`points-bg`, `tape-wave-bg`) tile or stretch inside their containers and are **never** blended with the layer beneath.

## Family

Endfield is a **sibling IP** of Arknights, not a variant of it. Both are Hypergryph titles and the two design systems are genuinely distinct — but they share exactly enough that the relationship is worth stating rather than hiding.

**Shared with the Arknights core:**
- **Novecento Sans Wide.** Both systems ship this family for tracked display caps. It is the single strongest link between them; neither ships the other's other faces.
- **A ghost display wordmark.** Both put an oversized display word behind content as texture — Arknights in `#242424` on pure black, Endfield in `#d9d9d9` on near-white. Same device, inverted polarity.
- **Orientation-driven responsive logic.** Both use `@media (orientation: …)` plus `any-hover: hover` gating instead of width breakpoints.
- **A single dominant accent** and a strong resistance to a second one.

**Deliberately different:**
- **Ground**: pure #000000 and a dark-only surface versus #191919 with a full light ground and a ten-step neutral ramp.
- **Accent hue**: electric cyan (`#18d1ff`) versus signal yellow (`#fffa00`).
- **Shape**: square by decree versus circles, 42px pills and 4px cards.
- **Depth technique**: zero shadows, blend-mode texture and masked edges versus ambient shadows, flat texture plates and pre-blended gradients.
- **Density and voice**: a poster-like marketing surface versus a dense, data-coded container UI with a colour-coded element system.

A document for either system is **self-contained** — the DESIGN.md format has no inheritance, so nothing here references the Arknights file and nothing there references this one. Use this file alone when building Endfield-flavoured UI.

## Iteration Guide

1. Focus on one component at a time and reference it by its `components:` token name.
2. Decide the ground before anything else — dark chrome or light container.
3. Before adding a radius, ask whether the element is a card/button (`{rounded.sm}`) or a control (`{rounded.pill}` / `{rounded.full}`). There is no middle.
4. When adding a coded dimension, extend the elements (colour) or the professions (monochrome glyph). Never a third treatment.
5. Default body copy to `{typography.body}` in the Sans family and Latin labels to `{typography.caption}` in Gilroy.
6. Reach for `{colors.primary}` for its five sanctioned roles only.
7. Verify the two-grey discipline: light separations use `{colors.hairline}`, floating separations use the 10px shadow.
8. Keep transitions at 0.2s; this system is faster than its sibling (0.3s) by design.
9. Test in portrait before declaring done — the rem-scale recompute is where layouts break.

## Known Gaps

- **Colour tokens are extracted from the shipped stylesheet**, not a design-token file. #fffa00 appears 57 times in 370,417 bytes of CSS across 9 stylesheets and is treated as the canonical accent; the near-duplicates #fff000 (6), #fdfd1f (6) and #ffff21 (3) are treated as the same family — #fff500 and #ffff21 are kept as tokens because they appear in structurally distinct roles (inside-yellow rules and hairlines).
- **Neutral steps are observed values, not a documented ladder.** The ten-step ramp is ordered by luminance from usage context; the intended ordering between #f2f2f2, #f0f0f0 and #fafafa is inferred rather than published.
- **Element colours are sampled, not specified.** They are 5-bit-quantised dominant colours from the official `ele-*.jpg` icons (120×120, served by the official CDN), so each value is within roughly ±8 per channel of the source art. They are trustworthy as a *system* (five hues, one per element, with physical deliberately neutral) but should be re-sampled from lossless art before being used as production tokens.
- **Profession colours do not exist.** All six `prof-*.jpg` icons quantise to a `#202020` glyph on a `#e0e0e0` field; profession is expressed by glyph shape, not hue. That is reported as the rule, not as missing data.
- **rem values are canvas-relative.** Every dimension in this document is stated at the 16px root for the 1080×1920 reference canvas. The runtime root font size is computed from the viewport by a boot script, so a "100px" button is 100px only at that reference scale.
- **The local client yielded no in-game design data.** `E:\Hypergryph Launcher\games\Endfield Game` (45.05 GB) has a Unity IL2CPP layout, but `Endfield_Data\il2cpp_data\Metadata\global-metadata.dat` is a **0 KB placeholder** on this install, and `StreamingAssets` holds only 411 index/manifest files. No font, palette or layout evidence was obtainable from the client, and no bundle was decrypted. Everything in this document is from the official web surface.
- **The home page's key visual is campaign art, not system colour.** The cold blue/violet hero (`雪松幽梦 / DREAMSCAPE OF WIND AND SNOW`) carries no tokens — the yellow, the black chrome and the white icon rail are the system; the art is content.
- **One pairing in the token set fails WCAG AA by design**, and a linter will flag it: `{colors.neutral-4}` on `{colors.canvas-inverse}` inside `ghost-display` measures 1.41:1. It is a watermark read as texture, not as text, and is preserved because it is the light-ground counterpart of the sibling system's ghost type. The element tiles deliberately carry `{colors.on-primary}` dark type rather than white, so they stay legible without a second exception.
- **The light grey ramp is below WCAG AA as text on white, and this is a real property of the shipped surface, not a transcription error.** `{colors.ink-muted}` #999999 measures 2.85:1 on `{colors.canvas-inverse}`, `{colors.neutral-6}` 2.10:1 and `{colors.neutral-5}` 1.61:1. On the live site these steps carry large metadata, Latin labels and inactive states rather than body copy. A production build that needs AA compliance for small text on white should darken toward `{colors.neutral-8}` (#666666) or `{colors.ink-inverse}`; the token values are preserved here because they are what the official CSS declares.
- **No official style guide is public.** The system was reconstructed from CSS, shipped assets and rendered pages; section names, rationale and the "one coded dimension" rule are this analysis's reading of consistent evidence, not a quotation of Hypergryph documentation.
