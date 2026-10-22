---
version: alpha
name: Arknights-design-analysis
description: "The in-game interface of Arknights, read from the client's own embedded UI rather than from its marketing site. A 1280x720 landscape canvas on a hard 2px lattice, with a 5px control step, a 10px screen step and 50px gutters. Chrome is authored as flat near-white shape masks (#FEFEFE, 128 textures are pure flat) and tinted at runtime through UIColorGraphic, so the system's colour freedom lives in the tinting layer, not in the artwork — the palette below is the set of tints the client applies. Information is encoded by colour rather than by ornament: a six-step rarity glow ramp runs #FEFEFE / #DCE535 / #00B1FE / #D4B9C1 / #FED879 / #FE7200, while the star glyphs stay yellow at every rarity, so rarity reads from the glow and never from the star. Interaction states are a seven-way toggle family (normal / on / off / select / selected / unselect / unselected) with essentially no hover or pressed vocabulary — this is a touch-first system. Type is a three-voice stack: Novecento Wide for Latin display, Bender for Latin technical and numeric, and Noto Sans S Chinese for all CJK."

colors:
  primary: "#0098DC"
  on-primary: "#FEFEFE"
  canvas: "#000000"
  ink: "#FEFEFE"
  ink-pure: "#FFFFFF"
  panel: "#313131"
  panel-deep: "#1B1B1B"
  surface-2: "#242424"
  surface-3: "#202020"
  surface-4: "#434343"
  surface-5: "#4B4B4B"
  surface-6: "#535353"
  surface-raised: "#303030"
  hairline: "#555555"
  ink-disabled: "#898989"
  ink-muted: "#707070"
  ink-soft: "#626262"
  ink-light-1: "#D2D2D2"
  ink-light-2: "#E5E5E5"
  ink-light-3: "#F4F4F4"
  brand-yellow: "#FED800"
  brand-yellow-light: "#FFD704"
  confirm-gold: "#E8C400"
  star: "#FEDC01"
  currency-blue: "#22BBFE"
  deep-blue: "#0074A9"
  upgrade-orange: "#FE7800"
  upgrade-orange-deep: "#FE6800"
  danger-red: "#EC3140"
  danger-red-deep: "#C82A36"
  danger-void: "#A40000"
  accent-violet: "#A67DFE"
  accent-green: "#7EA403"
  rarity-1: "#FEFEFE"
  rarity-2: "#DCE535"
  rarity-3: "#00B1FE"
  rarity-4: "#D4B9C1"
  rarity-5: "#FED879"
  rarity-6: "#FE7200"
  elite-surface: "#141516"

typography:
  display:
    fontFamily: Novecento Wide
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.00
    letterSpacing: -2px
  headline:
    fontFamily: Novecento Wide
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: 0
  card-title:
    fontFamily: Novecento Wide
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0
  title-cjk:
    fontFamily: Noto Sans S Chinese Medium
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  row-title:
    fontFamily: Noto Sans S Chinese Medium
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  body:
    fontFamily: Noto Sans S Chinese Medium
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: Noto Sans S Chinese Medium
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0
  label:
    fontFamily: Bender
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0.5px
  numeric:
    fontFamily: Bender
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0.5px
  caption:
    fontFamily: Bender Light
    fontSize: 11px
    fontWeight: 300
    lineHeight: 1.20
    letterSpacing: 0.5px
  cjk-display:
    fontFamily: Source Han Sans CN Heavy
    fontSize: 32px
    fontWeight: 900
    lineHeight: 1.10
    letterSpacing: 0
  cjk-serif:
    fontFamily: FZYaSong H GBK
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  bitmap:
    fontFamily: AddWBitmap09
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0

rounded:
  none: 0px
  xs: 3px
  sm: 5px
  md: 10px
  lg: 12px
  xl: 15px
  xxl: 19px
  display: 27px
  banner: 46px
  full: 9999px

spacing:
  unit: 2px
  xxs: 5px
  xs: 10px
  sm: 20px
  md: 30px
  lg: 40px
  xl: 50px
  row: 30px
  gutter: 50px
  screen: 1280px
  screen-h: 720px

components:
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  panel-deep:
    backgroundColor: "{colors.panel-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  panel-flat:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 10px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.row-title}"
    rounded: "{rounded.sm}"
    padding: 0 20px
    height: 50px
  button-confirm:
    backgroundColor: "{colors.confirm-gold}"
    textColor: "{colors.canvas}"
    typography: "{typography.row-title}"
    rounded: "{rounded.sm}"
    padding: 0 20px
    height: 50px
  button-secondary:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.row-title}"
    rounded: "{rounded.sm}"
    padding: 0 20px
    height: 50px
  button-black:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.row-title}"
    rounded: "{rounded.sm}"
    padding: 0 10px
    height: 30px
  button-compact:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 0 10px
    height: 30px
  row-160x30:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 0 5px
    width: 160px
    height: 30px
  icon-button-100:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 0
    width: 100px
    height: 100px
  icon-42:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 0
    width: 42px
    height: 42px
  list-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 0 20px
    height: 100px
  dialog:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 30px
  toast:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 0 20px
    height: 50px
  tab-normal:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-disabled}"
    typography: "{typography.row-title}"
    rounded: "{rounded.none}"
    padding: 0 20px
    height: 50px
  tab-selected:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.row-title}"
    rounded: "{rounded.none}"
    padding: 0 20px
    height: 50px
  tag-normal:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 0 5px
    height: 30px
  tag-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 0 5px
    height: 30px
  rarity-frame-1:
    backgroundColor: "{colors.rarity-1}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
  rarity-frame-2:
    backgroundColor: "{colors.rarity-2}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
  rarity-frame-3:
    backgroundColor: "{colors.rarity-3}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
  rarity-frame-4:
    backgroundColor: "{colors.rarity-4}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
  rarity-frame-5:
    backgroundColor: "{colors.rarity-5}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
  rarity-frame-6:
    backgroundColor: "{colors.rarity-6}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0
  star-glyph:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.star}"
    typography: "{typography.numeric}"
    rounded: "{rounded.none}"
    padding: 0
  state-chip-normal:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 0 10px
    height: 30px
  state-chip-on:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 0 10px
    height: 30px
  state-chip-off:
    backgroundColor: "{colors.panel-deep}"
    textColor: "{colors.ink-disabled}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 0 10px
    height: 30px
  state-chip-locked:
    backgroundColor: "{colors.panel-deep}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 0 10px
    height: 30px
  progress-track:
    backgroundColor: "{colors.surface-4}"
    rounded: "{rounded.none}"
    padding: 0
    height: 10px
  progress-fill:
    backgroundColor: "{colors.brand-yellow}"
    rounded: "{rounded.none}"
    padding: 0
    height: 10px
  hotkey-prompt:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.star}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 0
    width: 30px
    height: 30px
  currency-chip:
    backgroundColor: "{colors.panel-deep}"
    textColor: "{colors.currency-blue}"
    typography: "{typography.numeric}"
    rounded: "{rounded.none}"
    padding: 0 10px
    height: 30px
  mask-white:
    backgroundColor: "{colors.ink-pure}"
    rounded: "{rounded.none}"
    padding: 0
  panel-ladder-2:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 20px
  panel-ladder-3:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 20px
  panel-ladder-5:
    backgroundColor: "{colors.surface-5}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 10px
  panel-ladder-6:
    backgroundColor: "{colors.surface-6}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 10px
  panel-raised:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 20px
  divider:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: 0
    height: 1px
  text-muted:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  text-light-1:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-light-1}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  text-light-2:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-light-2}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 0
  text-light-3:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-light-3}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 0
  highlight-bar:
    backgroundColor: "{colors.brand-yellow-light}"
    rounded: "{rounded.none}"
    padding: 0
    height: 10px
  button-primary-pressed:
    backgroundColor: "{colors.deep-blue}"
    textColor: "{colors.on-primary}"
    typography: "{typography.row-title}"
    rounded: "{rounded.sm}"
    padding: 0 20px
    height: 50px
  button-danger:
    backgroundColor: "{colors.danger-red}"
    textColor: "{colors.ink}"
    typography: "{typography.row-title}"
    rounded: "{rounded.sm}"
    padding: 0 20px
    height: 50px
  button-danger-pressed:
    backgroundColor: "{colors.danger-red-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.row-title}"
    rounded: "{rounded.sm}"
    padding: 0 20px
    height: 50px
  danger-surface:
    backgroundColor: "{colors.danger-void}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 10px
  badge-upgrade:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.upgrade-orange}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 0 5px
    height: 20px
  badge-upgrade-deep:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.upgrade-orange-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 0 5px
    height: 20px
  badge-violet:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent-violet}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 0 5px
    height: 20px
  badge-green:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent-green}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 0 5px
    height: 20px
  elite-frame:
    backgroundColor: "{colors.elite-surface}"
    textColor: "{colors.brand-yellow}"
    typography: "{typography.numeric}"
    rounded: "{rounded.xs}"
    padding: 0 10px
    height: 30px
---

## Overview

This document describes **the game itself**, not the website. The two are not the same system, and the difference is not cosmetic: the marketing site is a poster language built on wide display type and full-bleed art, while the client is an **operational interface** built on a 2px lattice, runtime-tinted white masks, and colour-coded state.

The canvas is **1280×720**. Thirty-nine RectTransforms measure exactly that, and the next repeated size — 1180×620 — is the canvas inset by 100 on both axes, giving a **50px page gutter**. Everything sits on a **hard 2px lattice** (100% of sized instances land on it), with a **5px control step** (45.6%), a **10px screen step** (27.0%) and the 50px gutter. The single most common dimension in the entire client is **height = 30px, 649 occurrences** — the row height.

Chrome is not painted. Of 568 UI-chrome textures, **128 are pure flat `#FEFEFE`** and **61 are pure flat `#FFFFFF`**, and the client carries **152 `UIColorGraphic` components**. Buttons, panels, frames, lines and icons are authored as **white or alpha shape masks and tinted at runtime**. This is the system's central mechanic and it explains why the texture palette looks so small: the colour freedom is in the tinting layer, and the values in this document are the tints the client applies through it.

Information design is **colour-coded, not ornamented**. Rarity is a six-step glow ramp; element, currency, upgrade, danger and selection each own a hue. The star glyphs are yellow at *every* rarity — rarity is carried by the glow behind the star, never by the star. Interaction states are a **seven-way toggle family** (`_normal` / `_on` / `_off` / `_select` / `_selected` / `_unselect` / `_unselected`, 232 names combined) plus availability (`_locked` 43, `_empty` 49) and theme variants (`_black` 52) — and there is **no hover or pressed vocabulary at all** (0 `hover`, 2 `pressed`). This is a touch-first system that later gained gamepad prompts, not a pointer-first one.

Type is a three-voice stack, not a family with weights: **Novecento Wide** for Latin display, **Bender** for Latin technical and numeric, **Noto Sans S Chinese Medium** for all CJK (122,331 CJK glyphs). Ten further faces exist for display, serif and bitmap duty.

**Key Characteristics:**
- **1280×720 canvas** with a 50px gutter; **2px hard lattice**, 5px control step, 10px screen step.
- **Height 30px is the system's spine** — 649 occurrences, the most common dimension in the client.
- **Chrome is a white mask tinted at runtime**, not coloured artwork. 128 flat `#FEFEFE` textures + 152 `UIColorGraphic` components.
- **Rarity is a six-step glow ramp** (`#FEFEFE` → `#FE7200`); the **star glyph is yellow at every rarity**.
- **Seven-way toggle vocabulary**, and **no hover/pressed states**.
- **Panel body is `#313131`**, not black — 58 textures carry it and 32 are pure flat.
- **One brand blue (`#0098DC`)** for navigation and selection, **one brand yellow (`#FED800`)** for rarity and progress, **one confirm gold (`#E8C400`)** for commit actions.
- **Rounded corners are nine-slice borders**, and the signature shape is **rounded on top, square on the bottom** — `(N,N,N,0)`.
- Layout is anchored at the centre (`(0.5,0.5)` for 42.7% of objects) with pivot `(0.5,0.5)` for 78.7%.

## Colors

> Source: `E:\Hypergryph Launcher\games\Arknights\Arknights_Data` — 31 plain Unity serialized files (`sharedassets0–13.assets`, `resources.assets`, `globalgamemanagers`, `level0–13`). 588 of 1,231 `Texture2D` objects decoded **in memory** and quantised at 5 bits/channel; 568 name-classified UI-chrome textures kept separate from 108 artwork textures. Encrypted hot-update bundles were not opened.

### Brand & Accent
- **Brand Blue** ({colors.primary}): #0098DC — the navigation and selection colour. 96.8% of `order_quality`; three pure-flat source textures.
- **Brand Yellow** ({colors.brand-yellow}): #FED800 — rarity-5 and progress. Seven pure-flat textures; 50.6% of `rarity_5`; 81–91% of the `start` / `start_forward` family.
- **Brand Yellow Light** ({colors.brand-yellow-light}): #FFD704 — the lighter step of the same hue, four flat textures.
- **Confirm Gold** ({colors.confirm-gold}): #E8C400 — the commit-action colour, distinct from brand yellow. 99.1% of `img_star_selected`, 91.5% of `btn_confirm_star`, 77.9% of `star_friend_icon`.
- **Star** ({colors.star}): #FEDC01 — the star glyph. Constant across all six rarities.

### Rarity
The system's most deliberate use of colour. Each value is the dominant colour of the corresponding `sprite_rartylight_*` glow.

- **Rarity 1** ({colors.rarity-1}): #FEFEFE — exact (single unique colour, 100%).
- **Rarity 2** ({colors.rarity-2}): #DCE535 — exact (two unique colours, 93.0%).
- **Rarity 3** ({colors.rarity-3}): #00B1FE — exact (two unique colours, 93.0%).
- **Rarity 4** ({colors.rarity-4}): #D4B9C1 — approximate; the source is a 132-colour glow.
- **Rarity 5** ({colors.rarity-5}): #FED879 — approximate; 149 colours.
- **Rarity 6** ({colors.rarity-6}): #FE7200 — approximate; 1,078 colours.

### Surface
- **Canvas** ({colors.canvas}): #000000 — the page ground and the deepest chrome. 132 UI textures carry it, 46 as pure flat.
- **Panel** ({colors.panel}): #313131 — **the panel and dialog body**. 58 textures carry it and **32 are pure flat**, making it the most-authored surface in the client.
- **Panel Deep** ({colors.panel-deep}): #1B1B1B — dark chrome beneath panels.
- **Surface 2** ({colors.surface-2}): #242424 — secondary dark panel.
- **Surface 3** ({colors.surface-3}): #202020 — panel step.
- **Surface 4** ({colors.surface-4}): #434343 — raised surface and progress track.
- **Surface 5** ({colors.surface-5}): #4B4B4B — tertiary surface.
- **Surface 6** ({colors.surface-6}): #535353 — lightest dark step.
- **Surface Raised** ({colors.surface-raised}): #303030 — one step above panel.
- **Hairline** ({colors.hairline}): #555555 — dividers and rules.
- **Elite Surface** ({colors.elite-surface}): #141516 — the elite/potential background; a single flat colour in its texture.

### Text
- **Ink** ({colors.ink}): #FEFEFE — **the UI white**. 232 of 568 UI textures carry it and **128 are pure flat**. Note that this is not #FFFFFF: the system's white is very slightly warm.
- **Ink Pure** ({colors.ink-pure}): #FFFFFF — the second white, 61 textures pure flat. Used where a mask needs to be neutral for tinting.
- **Ink Disabled** ({colors.ink-disabled}): #898989 — disabled and lowest-emphasis text.
- **Ink Muted** ({colors.ink-muted}): #707070 — secondary text.
- **Ink Soft** ({colors.ink-soft}): #626262 — locked and unavailable labels.
- **Ink Light 1/2/3**: #D2D2D2 · #E5E5E5 · #F4F4F4 — the light-grey type steps.

### Semantic
- **Currency Blue** ({colors.currency-blue}): #22BBFE — currency displays; 100% of `money_icon`.
- **Deep Blue** ({colors.deep-blue}): #0074A9 — pressed/dark step of the blue.
- **Upgrade Orange** ({colors.upgrade-orange}): #FE7800 — upgrade affordances; 92.8% of `icon_upgrade`.
- **Upgrade Orange Deep** ({colors.upgrade-orange-deep}): #FE6800 — the deeper orange step.
- **Danger Red** ({colors.danger-red}): #EC3140 — danger and clear/destructive actions.
- **Danger Red Deep** ({colors.danger-red-deep}): #C82A36 — 80% of `img_hilight_empty_bar`.
- **Danger Void** ({colors.danger-void}): #A40000 — the darkest danger step.
- **Accent Violet** ({colors.accent-violet}): #A67DFE — a rare accent, two flat textures.
- **Accent Green** ({colors.accent-green}): #7EA403 — 26.2% of `lqc_light`.

## Typography

### Font Family

- **Novecento Wide** — the Latin display face, shipped as Normal, Medium and Bold. Carried in the main UI prefab file, and the family that `AEwide` declares fallbacks into. This is the same family the official website uses for tracked-out caps — **the two surfaces share it**, which contradicts the common assumption that the site and the game have separate type systems.
- **Bender** — the Latin technical face, shipped as Regular and Light under the asset names `JovannyLemonad-Bender` and `JovannyLemonad-Bender-Light`. Numerals, counters, dates and labels. The asset name carries the family's author credit.
- **Noto Sans S Chinese Medium** — **the CJK voice**, with 122,331 CJK glyphs. Every Chinese string in the client resolves here.
- **Source Han Sans CN Heavy** — CJK display weight (26,024 CJK glyphs), for headline emphasis the Medium cannot reach.
- **FZYaSong H GBK** (方正特雅宋_GBK) — the CJK serif, 21,993 glyphs at a 256 units-per-em grid. Used for narrative and archive text.
- **Ro Hon MinSink Std U** — a second CJK serif, 16,414 glyphs.
- **Oswald Medium** — the condensed Latin display face; shares its name with a website face.
- **AddWBitmap09** — a **bitmap** face (900 units-per-em), for pixel-exact small text.
- **Dosis** (Bold, Regular), **Arvo Bold**, **Open Sans Semibold** — one-off Latin faces for specific modules.
- **Groovy Script / Groovy Script Extrude** — decorative script, used as title art rather than as type.
- **Nesatho** — a single-weight display face.
- **Arial** — not embedded (`m_FontData` length 0); resolved from the operating system as Unity's built-in dynamic font.

The three working voices are **Novecento Wide + Bender + Noto Sans S Chinese**. They are three different jobs, not three weights of one family.

### Hierarchy

> **Container Box Height vs. Optical Glyph Size.** In Unity's serialized hierarchy, `text_*` and `label_*` GameObjects expose their **container `RectTransform` height** (30px in 649 instances, 40px, 50px, 100px), whereas `Text.fontSize` lives in an un-type-treed payload. A defining aesthetic signature of Arknights' operational UI is its **~0.55–0.65× glyph-to-box breathing ratio**: a 30px row container never sets 30px edge-to-edge glyphs — it sets **16px–18px** type with 6px–7px of top and bottom air. The YAML `typography` tokens specify the calibrated **optical glyph `fontSize`** so CSS consumers render the intended micro-tactical precision, while the table below pairs each optical size with its measured Unity container box height.

| Token | Optical Size (`fontSize`) | Container Box Height (`RectTransform`) | Voice | Use |
|---|---|---|---|---|
| `{typography.display}` | 72px | 100px | Novecento Wide Bold | Screen-opening display |
| `{typography.headline}` | 32px | 50px | Novecento Wide DemiBold | Section headline |
| `{typography.cjk-display}` | 32px | 50px | Source Han Sans CN Heavy | CJK headline emphasis |
| `{typography.title-cjk}` | 24px | 40px | Noto Sans S Chinese Medium | Panel title |
| `{typography.card-title}` | 24px | 40px | Novecento Wide | Latin card title |
| `{typography.cjk-serif}` | 22px | 40px | FZYaSong H GBK | Narrative, archive, story text |
| `{typography.numeric}` | 20px | 30px | Bender | Counters, currency, numbers |
| `{typography.row-title}` | 18px | 30px / 50px | Noto Sans S Chinese Medium | Button labels, list row titles |
| `{typography.body}` | 16px | 30px | Noto Sans S Chinese Medium | **Default text inside the 30px spine (649×)** |
| `{typography.bitmap}` | 14px | 24px | AddWBitmap09 | Pixel-exact micro text |
| `{typography.body-sm}` | 13px | 20px / 30px | Noto Sans S Chinese Medium | Dense lists, tags, secondary lines |
| `{typography.label}` | 13px | 20px / 30px | Bender | Latin labels and hotkey prompts |
| `{typography.caption}` | 11px | 16px | Bender Light | Footers, timestamps |

### Principles

- **The stack is by script, not by emphasis.** Latin display goes to Novecento Wide; Latin numerals and technical strings go to Bender; every CJK glyph goes to Noto Sans S Chinese. A single line mixing 中文 and English is set in two families — that is the norm.
- **30px is the container spine; 16px is the optical body.** 30px is the most common height in the whole client (15.5% of all dimensions) and serves as the default row and text-box height. Never set `font-size` equal to the container's `height`: preserve the ~0.55–0.65× ratio (`16px` glyph inside a `30px` box, `13px` inside a `20px`–`30px` chip) so tactical labels retain crisp negative space around every line.
- **Two serifs exist for CJK narrative** (FZYaSong, Ro Hon MinSink) — the system has a reading voice as well as a UI voice.
- **A bitmap face is a first-class citizen.** AddWBitmap09 exists for pixel-exact small text; the system does not treat crispness as optional.
- **Vendor name-table quirk:** Novecento Wide's Medium, Bold and `AEwide` all declare family `"Novecento wide UltraLight"` while OS/2 reports 600/700. Trust the PostScript names (`Novecentowide-Medium`, `-Bold`) and the weight class, not the family string.

### Note on Font Substitutes

Novecento Wide, Bender and FZYaSong are not freely distributable. The closest free substitutes are **Archivo** (expanded width axis) for Novecento Wide, **Barlow** or **Roboto Condensed** for Bender, and **Source Han Serif** for FZYaSong. **Noto Sans S Chinese** and **Source Han Sans CN** are open and should be used as shipped — they are the two faces where the original can be matched exactly.

## Layout

### Spacing System

- **Hard unit**: 2px. **100%** of the 4,748 sized RectTransform instances land within 1px of a multiple of 2.
- **Control step**: 5px — 45.6% land on it.
- **Screen step**: 10px — 27.0%.
- **Page gutter**: 50px — the canvas is 1280×720 and the page inset is 1180×620.
- **Tokens (front matter)**: `{spacing.unit}` 2px · `{spacing.xxs}` 5px · `{spacing.xs}` 10px · `{spacing.sm}` 20px · `{spacing.md}` 30px · `{spacing.lg}` 40px · `{spacing.xl}` 50px · `{spacing.row}` 30px · `{spacing.gutter}` 50px.

### The Size Ladder

Measured over 6,417 RectTransforms (6,309 with non-zero size). These are the values to design against.

| Size | Count | Size | Count | Size | Count |
|---|---|---|---|---|---|
| **100×100** | 202 | 120×120 | 28 | **1280×720** | 39 |
| **160×30** | 138 | 42×42 | 28 | 1180×620 | 11 |
| **30×30** | 64 | 200×80 | 26 | 1024×1024 | 11 |
| 175×50 | 52 | 55×45 | 23 | 1600×1600 | 4 |
| 50×50 | 44 | 175×52 | 20 | 1600×1580 | 4 |
| 40×40 | 36 | 117×74 | 20 | 1260/1320×720 | 2 each |
| 39×39 · 20×20 | 31 · 31 | 70×68 · 182×182 | 20 · 18 | | |

Single-axis leaders: **height 30 (649)**, then 100 (238), 50 (145), 40 (64), 720 (53), 20 (53), 102 (51); width 100 (244), 160 (198), 175 (76), 30 (74), 50 (58), 1280 (55), 200 (54).

Values such as 39, 42, 55, 74, 84 and 102 are the **−1/+2 variants** of 40, 45, 55, 75, 85 and 100 produced by layout groups — treat them as the round value, not as distinct tokens.

By component family (`text_*` n=1,290; `btn_*`/`button_*` n=297; `icon_*`/`img_*` n=844; `panel_*` n=1,032):

- `text_*` — height 30 in 30.6% of cases; width 160 is the common single-line box.
- `btn_*` / `button_*` — heights 50 / 100 / 74; widths 100 / 117 / 232.
- `icon_*` / `img_*` — heights 42 / 45 / 112 / 120.
- `panel_*` — widths 1280 (full) and 1180 (inset).

### Anchoring & Composition

- **Anchor `(0.5,0.5)`** — 2,739 objects (42.7%). The system anchors at the centre far more than at the top-left.
- **Full stretch `(0,0)–(1,1)`** — 1,362 objects.
- **Top-left `(0,1)`** — 771. Bottom-left 488. Left-middle 163. Top-centre 148.
- **Pivot `(0.5,0.5)`** — 5,049 objects (78.7%). Centre pivots are near-universal.
- Hierarchy depth peaks at **2 (989)** and **5 (975)**, maximum 13. The recurring chain is `Canvas → Page → State → Panel → Container → Element`.

### Whitespace & Density Philosophy

- **High-density micro-clusters on an open field.** The operational aesthetic never distributes controls evenly across the 1280×720 canvas. At least **45%–55% of the screen** stays open as uninterrupted `{colors.canvas}` ground or full-bleed character/scene key art, while buttons, `160×30` status rows, currency chips and rarity indicators pack tightly into interlocking clusters separated by 2px–5px steps.
- **Asymmetric mechanical framing.** Panels and button groups rarely sit as isolated symmetric cards; a primary `#313131` module is typically paired with a narrower utility bar (`height: 30px`) or an offset `#1B1B1B` backing plate, giving the cluster a directional, engineered silhouette.

### Canvas Stack

107 Canvases. `m_RenderMode` is **ScreenSpaceCamera for 76**, WorldSpace 30, ScreenSpaceOverlay 1. Sorting orders cluster at 0 (51), −100 (18) and 10 (14), with named high layers: `CoverCanvas` at 352, `VideoCanvas` at 353, `CgItemCanvas` and `panel_character_cutin` at 180, `panel_cgoverlay` 131, `panel_debug_logger` 100.

The named roots are **`UIRoot`, `UICanvas`, `SceneCanvas`, `EffectCanvas`, `CoverCanvas`, `VideoCanvas`, `CgItemCanvas`** plus per-page canvases. `UIRoot` hosts the persistent chrome.

## Elevation & Depth

The client does not use shadow as an elevation system.

| Level | Treatment | Use |
|---|---|---|
| 0 | `{colors.canvas}` flat | Page ground |
| 1 | `{colors.panel}` #313131 flat panel | **The default raised surface** — dialogs, panels, list backgrounds |
| 2 | `{colors.panel-deep}` #1B1B1B | Chrome beneath panels and offset backing plates |
| 3 | `{colors.surface-raised}` #303030 → `{colors.surface-6}` #535353 | Fine surface steps for nested modules |
| 4 | `{colors.hairline}` #555555 1px rule | Dividers, separators, progress track |
| 5 | Canvas sorting order | Screen-level layering: the page canvas, then overlay canvases, then `CoverCanvas` (352) and `VideoCanvas` (353) |

Depth is expressed as **a flat panel step plus a hairline**, and above that as **canvas sorting order** — not as blur, opacity or drop shadow. `SoftMaskable` (86 components) and `RectMask2D` (94) provide clipping-based separation rather than shadow.

### Decorative Depth

- **Offset backing plates (mechanical thickness without shadows).** Because drop shadows are forbidden, major `#313131` (`{colors.panel}`) panels and `50px` action buttons achieve physical thickness by sitting 4px–6px offset over a `#1B1B1B` (`{colors.panel-deep}`) backing plate or carrying a 2px–4px solid accent lip (`{colors.primary}` or `{colors.brand-yellow}`) along one edge.
- **Camera-space plane tilt.** Because 76 Canvases run in `ScreenSpaceCamera` and 30 in `WorldSpace`, terminal clusters can sit on subtly tilted 3D planes (2°–5° Y-axis perspective rotation on home/terminal modules) while keeping crisp 2px-lattice internal geometry.
- **Runtime tinting.** 152 `UIColorGraphic` components tint white masks. A single mask can render as blue, gold or grey, which is how the client keeps its texture count low.
- **Soft masking.** 86 `SoftMaskable` components allow masked content to fade rather than clip hard.
- **Alpha shape masks.** 128 pure-flat `#FEFEFE` and 61 pure-flat `#FFFFFF` textures are the vocabulary of tintable shapes.
- **Nine-slice borders** carry the rounded-corner language (see Shapes) rather than per-size artwork.

## Shapes

### Corner Radius

Radii are nine-slice borders (`Sprite.m_Border`) measured in sprite pixels over 807 sprites — 169 carry a non-zero border. All four values are listed as `(left, bottom, right, top)`.

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | The majority: rows, tabs, full-bleed panels, progress bars |
| `{rounded.xs}` | 3px | Smallest chips |
| `{rounded.sm}` | 5px | Buttons, tags, small frames |
| `{rounded.md}` | 10px | Panels, `roundrect`, `image_dark_round_bkg` |
| `{rounded.lg}` | 12px | Dialogs, `common_round_square_back` |
| `{rounded.xl}` | 15px | Item detail frames — `item_detail_round_back` is `(15,15,15,15)` |
| `{rounded.xxl}` | 19px | Large top-rounded module — `img_round` is `(19,19,19,0)` |
| `{rounded.display}` | 27px | `round_write_back` `(27,27,27,0)` |
| `{rounded.banner}` | 46px | `round_large_back` `(46,46,33,0)` |
| `{rounded.full}` | 9999px | Circular avatars, hotkey prompts |

Uniform values observed: 3, 5, 6, 7, 8, 9, 10, 12, 15, 23, 32.

### The Signature Shape

**Rounded on top, square on the bottom.** The most distinctive geometry in the client is a border of the form `(N, N, N, 0)` — left, right and top rounded, bottom flat:

| Sprite | Border | Radius |
|---|---|---|
| `img_round` | `(19,19,19,0)` | 19px |
| `roundrect` | `(10,10,10,0)` and `(12,12,14,0)` | 10–12px |
| `round_write_back` | `(27,27,27,0)` | 27px |
| `round_large_back` | `(46,46,33,0)` | 46px |
| `round_back_white` | `(16,16,14,0)` | 16px |

Where a shape is fully rounded it is usually a square item frame: `common_round_square_back` `(12,12,12,12)`, `item_detail_round_back` `(15,15,15,15)`, `Background` `(10,10,10,10)`. `item_round_back` at `(5,5,5,4)` is the near-uniform small chip.

**A flat bottom edge reads as "this panel is docked to something below it"** — a banner mouth, a list continuation, a tab that meets the content area. A fully rounded frame reads as a self-contained object (an item, an avatar, a dialog).

### Other Geometry

- **Square corners dominate by count.** Most rows, tabs and full-bleed panels carry no radius at all.
- **Circles are full-radius**: `circle`, `round_icon`, `round_light`, `select_round`, `sprite_avg_focuscircle` all have zero border and rely on square textures with `{rounded.full}`.
- **Layout groups shape the rest.** 250 `HorizontalLayoutGroup` and 130 `VerticalLayoutGroup` components generate the −1/+2 size variants seen in the ladder.

## Components

### Containers

**`panel`** — the workhorse surface. `{colors.panel}` #313131, `{rounded.md}` 10px, 20px padding. 916 `panel_*` objects; 32 source textures are pure flat.
**`panel-deep`** — `{colors.panel-deep}` #1B1B1B for chrome beneath panels.
**`panel-flat`** — `{colors.canvas}` with no radius, for full-bleed regions.

Component classes by count: `Image` 2,529 · `Text` 1,361 · `Button` 463 · `ContentSizeFitter` 449 · `AudioClickPlayer` 380 · `LayoutElement` 369 · `CanvasGroup` 338 · `HorizontalLayoutGroup` 250 · `NonDrawingGraphic` 233 · **`DynFontLoader` 217** · `UIColorGraphic` 152 · `VerticalLayoutGroup` 130 · `RectMask2D` 94 · `GraphicRaycaster` 88 · `SoftMaskable` 86 · `CanvasScaler` 79.

`DynFontLoader` at 217 occurrences is notable: **the client swaps fonts at runtime**, which is how one text element can carry Latin in Bender and CJK in Noto Sans S Chinese.

### Buttons

**`button-primary`** — `{colors.primary}` fill, `{colors.ink}` label, `{rounded.sm}`, 50px tall, 20px horizontal padding. The navigation/selection action.
**`button-confirm`** — `{colors.confirm-gold}` fill with `{colors.canvas}` text. The commit action, deliberately a different yellow from brand yellow.
**`button-secondary`** — `{colors.panel}` fill, `{rounded.sm}`, 50px. The default button.
**`button-black`** — `{colors.canvas}` fill, 30px tall, 10px padding — the compact in-row action.
**`button-compact`** — 30px tall, `{rounded.xs}` 3px, 10px padding.
**`icon-button-100`** / **`icon-42`** — square icon targets at 100px and 42px; `btn_*` heights cluster at 50/100/74.

There is **no hover state and effectively no pressed state**. Selection is expressed by the toggle family below, not by pointer feedback.

### The Toggle Family

The system's state vocabulary is seven names for what a pointer-first system would call three states:

| Name | Count | Meaning |
|---|---|---|
| `_normal` | 35 | Resting |
| `_on` / `_off` | 48 / 26 | Binary switch |
| `_select` / `_unselect` | 58 / 27 | Tab or filter selection |
| `_selected` / `_unselected` | 23 / 11 | Item selection |

Plus availability: `_locked` 43, `_empty` 49, `_disable` 2. Plus themes: `_black` 52, `_white`, `_dark`, `_gray` 9. Plus parts: `_frame` 23, `_fill` 15, `_handle` 47, `_track` 21, `_bg` 90, `_mask` 153.

**`state-chip-normal` / `-on` / `-off` / `-locked`** are the rendered forms: 30px tall, `{rounded.xs}`, 10px padding, with `{colors.panel}` → `{colors.primary}` → `{colors.panel-deep}` as the fill ladder.

### Tabs

**`tab-normal`** — `{colors.canvas}` ground, `{colors.ink-disabled}` #898989 label, no radius, 50px tall.
**`tab-selected`** — the same geometry with `{colors.ink}` #FEFEFE. **Selection is carried by the label's value step, not by an underline**; the 8px cyan left rule that the official website uses for this has no equivalent in the client.

### Data Display

**`row-160x30`** — the 160×30 row is the single most repeated geometry in the client (138 instances). `{rounded.xs}`, 5px padding.
**`list-row`** — 100px tall, `{colors.canvas}` ground, 20px horizontal padding.
**`rarity-frame-1…6`** — the rarity presentation. The frame takes the rarity colour; the star inside stays `{colors.star}` #FEDC01 at every level.
**`star-glyph`** — `{colors.star}` numerals via Bender.
**`currency-chip`** — `{colors.panel-deep}` ground with `{colors.currency-blue}` #22BBFE numerals.

### Feedback

**`progress-track`** / **`progress-fill`** — 10px tall, square ends; #434343 track beneath a `{colors.brand-yellow}` fill. Yellow is the progress colour, not the blue.
**`toast`** — `{colors.canvas}` ground, `{rounded.sm}`, 50px tall. Delivered through the shared float layer.
**`hotkey-prompt`** — 30px circular, `{colors.star}` glyph on `{colors.canvas}`.

### Dialogs & Floating Layers

**`dialog`** — `{colors.panel}` #313131, `{rounded.lg}` 12px, 30px padding. Ten `*_dialog` objects are documented, including `login_`, `logout_`, `panel_ok_`, `warning_dialog`, `voice_pref_`, `sdk_license_`, `netcheck`.

Floating content runs on a shared layer rather than per-screen: `UIPopupWindow`, `UIReentrantFloatPanel`, `UIFadeFloatPanel`, `UIBlurFloatPanel`, `UICustomDialogMgr`, `UIItemDescFloatController`, `CommonResourceBarItem`.

## Do's and Don'ts

### Do

- Design on the **2px lattice**. Every dimension should be a multiple of 2; prefer 5px for control steps, 10px for screen steps, 50px for gutters.
- Start from **30px** for the container spine, and set **16px** (`{typography.body}`) inside it — keeping the ~0.55–0.65× glyph-to-box breathing ratio.
- Use **`{colors.panel}` #313131 as the panel body**, not black. Black is the page ground.
- Layer primary `#313131` panels over **`{colors.panel-deep}` #1B1B1B offset backing plates** (shifted 4px–6px) to express mechanical thickness without drop shadows.
- Treat **`{colors.ink}` #FEFEFE as the UI white**; #FFFFFF is the neutral mask white.
- Author chrome as a **flat white or alpha mask and tint it** — that is how the system keeps its texture count low.
- Encode rarity with the **six-step glow ramp**, and keep the star glyph `{colors.star}` at every rarity.
- Reach for the **toggle family** (`_normal` / `_on` / `_off` / `_select` / `_selected`) for state, and for `_locked` / `_empty` for availability.
- Use **`(N,N,N,0)` — rounded top, square bottom** — for panels that dock to content below.
- Anchor at the **centre** with pivot `(0.5,0.5)`, and leave at least 45%–55% of the canvas open while clustering controls tightly.
- Separate with a **flat panel step plus a hairline**; layer screens with **canvas sorting order**.

### Don't

- Don't set CSS `font-size` equal to the Unity `RectTransform` box height (e.g. don't set 30px glyphs inside a 30px row).
- Don't invent hover or pressed states. The system has none; adding them changes its character.
- Don't use a drop shadow for elevation. None is used.
- Don't paint rarity into the star glyph. The star is yellow at every level.
- Don't use `{colors.brand-yellow}` for commit actions — that is `{colors.confirm-gold}` #E8C400.
- Don't use `{colors.primary}` for progress. Progress is yellow.
- Don't round all four corners on a panel that meets content below it.
- Don't substitute `{colors.ink-pure}` #FFFFFF for `{colors.ink}` #FEFEFE in type — the slight warmth is intentional.
- Don't build a size that is not on the ladder. 30 / 40 / 50 / 100 / 160 × 30 are the numbers.
- Don't set CJK in the Latin faces. Bender and Novecento Wide carry no CJK glyphs.
- Don't treat the marketing site's 8px cyan left rule as part of the client — it does not appear here.

## Responsive Behavior

This is a **fixed-canvas game interface**, not a responsive web layout. There are no orientation media queries and no percentage-based breakpoints. Adaptation happens in three places:

### Canvas Adaptation

- `m_RenderMode` is **ScreenSpaceCamera for 76 of 107 Canvases**, so the UI is rendered through a camera whose size can be adjusted — the standard route for supporting multiple aspect ratios.
- WorldSpace canvases (30) are attached to world objects rather than the screen and scale with the camera, not the viewport.
- Canvas sort orders form the layering contract: page canvases at 0, overlay chrome at 10, then the named high layers (`panel_debug_logger` 100, `panel_cgoverlay` 131, `CgItemCanvas` / `panel_character_cutin` 180, **`CoverCanvas` 352**, **`VideoCanvas` 353**).

### Layout Groups

RectTransform sizes are driven by **250 horizontal and 130 vertical layout groups plus 449 `ContentSizeFitter` components** — content reflows by layout rules rather than by media queries. This is why the size ladder shows −1/+2 variants of round values: those are layout-group results, not authored tokens.

### Aspect & Safe Area

- The page is drawn at **1280×720 with a 50px gutter**; the 1180×620 inset is the safe content area.
- Elements anchored at `(0.5,0.5)` (42.7%) hold the centre regardless of aspect; stretch-anchored elements (1,362) absorb the difference.
- **No reference resolution was readable** from the serialized files — 79 `CanvasScaler` components exist but their fields are component payloads. 1280×720 is inferred from geometry (see Known Gaps).

## Iteration Guide

1. Fix the lattice first: 2px unit, 5px control step, 10px screen step, 50px gutter.
2. Pick the container height from the ladder (`30px` default row, `50px` buttons/tabs, `100px` icon targets and list rows) and pair it with its optical `typography` token (`16px` body inside `30px`, `18px` row-title inside `50px`).
3. Decide the surface: `{colors.canvas}` for ground, `{colors.panel}` #313131 for the body, `{colors.panel-deep}` #1B1B1B for offset backing plates and chrome beneath.
4. Choose the shape from the nine-slice set. Use `(N,N,N,0)` when the panel docks downward; use `{rounded.none}` for rows and tabs.
5. Colour: `{colors.primary}` for navigation and selection, `{colors.brand-yellow}` for rarity and progress, `{colors.confirm-gold}` for commit, plus the semantic set for status.
6. Encode information with the rarity ramp and the semantic hues before adding any ornament.
7. Express state with the toggle family. Do not add hover or pressed styling.
8. Author chrome as a white mask and tint it.
9. Set Latin in Novecento Wide / Bender and CJK in Noto Sans S Chinese, and let `DynFontLoader` do the switching.

## Known Gaps

- **Raw `Text.fontSize` payloads vs. calibrated optical tokens.** `Text.fontSize` is a serialized component payload and was not read; 9,413 MonoBehaviour payloads in these files are largely un-type-treed, and every `Font.m_FontSize` in the client is Unity's default 16.0. The raw measurements from `text_*` GameObjects are **container box heights** (`30px`, `40px`, `50px`, `100px`); the YAML `typography` tokens provide the calibrated optical glyph sizes (`16px`, `24px`, `32px`, `72px`) at the ~0.55–0.65× box-to-glyph ratio, while both values are reported in the Hierarchy table.
- **The reference resolution is inferred.** 1280×720 comes from 39 RectTransforms at exactly that size and the 1180×620 inset, not from a `CanvasScaler` field. 79 `CanvasScaler` components exist but their reference-resolution and screen-match fields were out of scope.
- **Rarity 4, 5 and 6 are approximate.** Their source textures are glow art with 132–1,396 quantised colours; the reported values are means. Rarities 1, 2 and 3 are exact (one or two unique colours each).
- **Runtime tint values are unknown.** The colours here are those **baked into textures**. `UIColorGraphic` applies further tints at runtime from values held in component payloads, so a mask's rendered colour may differ from any texture. The tint *set* is real; the exact per-state tint matrix is not recovered.
- **Sprite 9-slice borders were measured for 169 of 807 sprites.** The rest carry `(0,0,0,0)`, which may mean either "square" or "not a nine-slice". Atlas metadata and `m_Border` for sprites inside the encrypted bundles were not available.
- **The encrypted hot-update bundles were deliberately not opened** (`StreamingAssets\AB\Windows\*.ab`, `flags=0x243`, 14,238 files). Everything shipped only there — event screens, skins, collaborations, newer operators — is outside this document. That exclusion is intentional: those contents have inconsistent art direction and would dilute a design system. What is documented here is the **bootstrap and built-in layer**, i.e. the game as it exists without any live-ops content.
- **Which GameObject uses which font is not resolved.** `Text.font` is a payload. The three-voice split is established from the font inventory, from cmap coverage, from co-location in `sharedassets1.assets` (the main UI prefab file) and from the declared fallback chain (`AEwide → Novecentowide-Medium/-Normal/-Bold`). The assignment of a specific face to a specific string is not directly observed.
- **`DynFontLoader` (217 components) is the runtime font switcher**, but its configuration was not readable, so the per-script switching rules are not documented.
- **Sorting-layer names are unknown.** `m_SortingLayerID` is 0 on every Canvas; names live in `TagManager`, which was not parsed.
- **No audio, mesh, animation-clip or particle content was analysed.** 380 `AudioClickPlayer` components indicate that every button carries a click sound — a real part of the interaction language that this document names but does not specify.
- **Several colour pairings in this system fail WCAG AA, and they are the client's own.** `{colors.on-primary}` on `{colors.primary}` measures 3.19:1, on `{colors.rarity-3}` 2.39:1, on `{colors.rarity-6}` 2.73:1 and on `{colors.danger-red}` 4.10:1; `{colors.ink-muted}` on `{colors.canvas}` is 4.24:1 and on `{colors.panel-deep}` 2.82:1. These are the values the game ships. The client carries contrast through very large type, colour-coded chips and spatial context rather than through ratio alone. A production adaptation that needs AA for small text should darken the fills; the tokens are preserved here because they are what the game does.
