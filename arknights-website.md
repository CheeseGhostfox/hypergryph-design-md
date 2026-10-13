---
version: alpha
name: Arknights-design-analysis
description: "A hard-industrial near-black interface built on pure #000000 with a single electric cyan (#18d1ff) that is never decoration — it is either a filled action surface, a section marker, or a progress state. Type is a four-voice system: Novecento Sans Wide for tracked-out caps, Oswald for the oversized ghost display numerals that sit behind content at #242424, Bender for technical metadata and button labels, and Source Han Sans for CJK body copy. Layout is square by default — buttons, tabs and cards have 0px corners, and the only radii in the system belong to icon buttons and inputs. Separation is done with 1px gradient hairlines and 8px cyan left rules rather than shadows; there are no drop shadows anywhere. Imagery is full-bleed art under black gradient scrims, with masked edges that fade content into the canvas instead of framing it. Measured on the official web surface; the PC client's shared font and palette evidence is cross-checked and reported separately."

colors:
  primary: "#18d1ff"
  primary-strong: "#06bbff"
  on-primary: "#000000"
  canvas: "#000000"
  surface-1: "#121212"
  surface-2: "#181818"
  surface-3: "#1d1f20"
  surface-4: "#242424"
  surface-5: "#272727"
  surface-disabled: "#585858"
  ink: "#ffffff"
  ink-muted: "#d2d2d2"
  ink-warm: "#c4c2c2"
  ink-subtle: "#ababab"
  ink-tertiary: "#a4a4a4"
  ink-quaternary: "#8d8d8d"
  ink-deep: "#666666"
  hairline: "#4d4d4d"
  hairline-soft: "#333333"
  scrim: "#000000"
  platform-ios: "#007aff"
  platform-android: "#8fc31f"
  platform-emulator: "#3387fb"
  region-accent-red: "#c7151e"
  region-accent-gold: "#eeb763"
  region-accent-blue: "#2096e6"
  region-surface-maroon: "#4c2b2a"
  region-surface-slate: "#293f45"
  region-surface-taupe: "#898175"

typography:
  display-xl:
    fontFamily: Oswald Medium
    fontSize: 112px
    fontWeight: 500
    lineHeight: 1.00
    letterSpacing: -5.6px
  display-lg:
    fontFamily: Novecento Sans Wide Bold
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -3.0px
  display-md:
    fontFamily: Novecento Sans Wide Bold
    fontSize: 50px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -2.5px
  headline:
    fontFamily: Source Han Sans Bold
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0
  card-title:
    fontFamily: Source Han Sans Bold
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 2px
  subhead:
    fontFamily: Source Han Sans Regular
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-lg:
    fontFamily: Source Han Sans Regular
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0
  body:
    fontFamily: Source Han Sans Regular
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0
  body-sm:
    fontFamily: Source Han Sans Regular
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0
  list-title:
    fontFamily: Source Han Sans Bold
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.40
    letterSpacing: 2px
  label-caps:
    fontFamily: Novecento Sans Wide DemiBold
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 1.8px
  caption:
    fontFamily: Bender Regular
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 1px
  button:
    fontFamily: Bender Bold
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 1px
  eyebrow:
    fontFamily: Novecento Sans Wide Medium
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 2px
  micro:
    fontFamily: Novecento Sans Wide Medium
    fontSize: 6px
    fontWeight: 500
    lineHeight: 1.00
    letterSpacing: 3px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 0 28px 0 16px
    height: 60px
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 0 28px 0 16px
    height: 60px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 0 16px
    height: 60px
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 0 16px
    height: 60px
  button-disabled:
    backgroundColor: "{colors.surface-disabled}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 0 10px
    height: 24px
  button-compact:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 0 10px
    height: 24px
  icon-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 0
    height: 54px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: 0 40px
    height: 120px
  nav-link-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: 0
  nav-link-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: 0
  filter-tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.list-title}"
    rounded: "{rounded.none}"
    padding: 0 8px 0 2px
    height: 20px
  filter-tab-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.list-title}"
    rounded: "{rounded.none}"
    padding: 0 8px 0 2px
    height: 20px
  section-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0 24px
    height: 64px
  section-heading:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: 0 0 0 32px
  list-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
    width: 360px
    height: 96px
  news-card:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
    height: 180px
  media-panel:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 0
  ghost-display:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.surface-4}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 0
  progress-bar:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0
    height: 8px
  download-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0 12px
    height: 32px
  download-tile-ios:
    backgroundColor: "{colors.platform-ios}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0 12px
    height: 32px
  download-tile-android:
    backgroundColor: "{colors.platform-android}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0 12px
    height: 32px
  download-tile-emulator:
    backgroundColor: "{colors.platform-emulator}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0 12px
    height: 32px
  tab-on-media:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-warm}"
    typography: "{typography.list-title}"
    rounded: "{rounded.none}"
    padding: 0 16px
    height: 40px
  meta-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-tertiary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0
  footnote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-quaternary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0
  disabled-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  divider-soft:
    backgroundColor: "{colors.hairline-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 0
    height: 1px
  scrim-overlay:
    backgroundColor: "{colors.scrim}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 0
  panel-inset:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  panel-raised:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  panel-lifted:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  panel-deep:
    backgroundColor: "{colors.surface-5}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0
  region-card-red:
    backgroundColor: "{colors.region-surface-maroon}"
    textColor: "{colors.region-accent-red}"
    typography: "{typography.list-title}"
    rounded: "{rounded.none}"
    padding: 16px
  region-card-gold:
    backgroundColor: "{colors.region-surface-taupe}"
    textColor: "{colors.region-accent-gold}"
    typography: "{typography.list-title}"
    rounded: "{rounded.none}"
    padding: 16px
  region-card-blue:
    backgroundColor: "{colors.region-surface-slate}"
    textColor: "{colors.region-accent-blue}"
    typography: "{typography.list-title}"
    rounded: "{rounded.none}"
    padding: 16px
---

## Overview

Arknights' surfaces are **pure black** (`{colors.canvas}` #000000) with a single electric cyan (`{colors.primary}` #18d1ff) that carries every action in the system. The cyan is never atmospheric: it fills a primary button, it is the rule beside a section heading, it is the active tab, it is the progress fill. Everything else is a near-black surface step (`{colors.surface-1}` #121212 through `{colors.surface-5}` #272727) or white-to-grey type.

Typography is a **four-voice system** rather than one family with weights. Novecento Sans Wide supplies tracked-out caps for navigation and labels; Oswald supplies the huge ghost display words and numerals that sit *behind* content in `{colors.surface-4}` (#242424) — legible as texture, not as text; Bender supplies technical metadata, dates and button labels with 1px positive tracking; Source Han Sans supplies all CJK body copy and headlines. The voice change between them is deliberate and stays visible.

Geometry is aggressively **square**. Buttons, tabs, cards, panels and rows all use `{rounded.none}`; the only radii in the system belong to icon buttons (`{rounded.md}` 8px) and form-scale controls. Depth is never a shadow — it is a 1px gradient hairline, an 8px cyan left rule, or a black gradient scrim over full-bleed imagery. Content edges are frequently **masked**, fading into the canvas with a gradient instead of stopping at a border.

**Key Characteristics:**
- **Pure-black canvas** (`{colors.canvas}` #000000) — not a near-black; the site ships true #000.
- **One chromatic accent** (`{colors.primary}` #18d1ff). Filled cyan with black type is the primary action; cyan text is the active/selected state.
- **Four type families**: Novecento Sans Wide (caps), Oswald (ghost display), Bender (metadata + buttons), Source Han Sans (CJK body).
- **Oversized ghost display** in `{colors.surface-4}` at `{typography.display-xl}` — the signature "BREAKING NEWS" / numeral watermark behind content.
- **Square corners everywhere** (`{rounded.none}`); 8px is reserved for icon buttons.
- **Hairline separation**: 1px `hsla(0,0%,100%,.3)` rules that fade out at one end via a linear-gradient background.
- **No shadows, no elevation cards** — depth comes from black scrims and masked image edges.
- **Orientation-driven responsive logic**, not width breakpoints; hover affordances gated behind `any-hover: hover`.
- Motion is short and literal: 0.2s for small controls, 0.3s for colour/background/transform, 0.6s for scrim fades.

## Colors

> Source surfaces: `ak.hypergryph.com` (official CN site — `#index`, `#information`; 152 KB of shipped stylesheet), cross-checked against the Arknights PC client installed at `E:\Hypergryph Launcher\games\Arknights`.

### Brand & Accent
- **Signal Cyan** ({colors.primary}): The signature accent, #18d1ff — 42 declarations in the shipped CSS, the single most-used colour after #000 and #fff. Filled on primary buttons and active tabs (with `{colors.on-primary}` black type), or used as text/rule for the active state.
- **Signal Cyan Strong** ({colors.primary-strong}): #06bbff — the pressed/hover step of the same hue used on interactive cyan.
- **On Primary** ({colors.on-primary}): Pure black type on cyan fills. The system never sets white on cyan.
- **Platform iOS** ({colors.platform-ios}): #007aff — App Store tile only.
- **Platform Android** ({colors.platform-android}): #8fc31f — Android tile only.
- **Platform Emulator** ({colors.platform-emulator}): #3387fb — emulator download tile only.

### Surface
- **Canvas** ({colors.canvas}): Pure #000000 page ground. Every section, every list row, every nav bar.
- **Surface 1** ({colors.surface-1}): #121212 — the first lift, used on inset panels.
- **Surface 2** ({colors.surface-2}): #181818 — panel step.
- **Surface 3** ({colors.surface-3}): #1d1f20 — the most-used lifted surface in the sheet; neutral-cool rather than neutral-warm.
- **Surface 4** ({colors.surface-4}): #242424 — panel step, and the colour of the oversized ghost display type.
- **Surface 5** ({colors.surface-5}): #272727 — deepest observed panel.
- **Surface Disabled** ({colors.surface-disabled}): #585858 — the fill of a disabled secondary action, paired with `{colors.ink-muted}`.
- **Hairline** ({colors.hairline}): 1px rules under nav, between list rows. Shipped as `hsla(0,0%,100%,.3)` so it blends over imagery; #4d4d4d is the flat-black equivalent.
- **Hairline Soft** ({colors.hairline-soft}): `hsla(0,0%,100%,.2)` — the quieter rule used on top edges of overlaid panels.
- **Scrim** ({colors.scrim}): Pure black, used only at alpha — 0.3 / 0.4 / 0.5 / 0.6 / 0.7 / 0.8 / 0.9 — as gradient image protection.

### Text
- **Ink** ({colors.ink}): #ffffff — headlines, primary nav labels, list titles.
- **Ink Muted** ({colors.ink-muted}): #d2d2d2 — text on `{colors.surface-disabled}` fills.
- **Ink Warm** ({colors.ink-warm}): #c4c2c2 — tab labels on dark imagery; the only warm grey in the type ramp.
- **Ink Subtle** ({colors.ink-subtle}): #ababab — inactive navigation and unselected section tabs.
- **Ink Tertiary** ({colors.ink-tertiary}): #a4a4a4 — supporting metadata.
- **Ink Quaternary** ({colors.ink-quaternary}): #8d8d8d — least-emphasis labels.
- **Ink Deep** ({colors.ink-deep}): #666666 — disabled and footnote text on light fills.

### Account & SDK Surface (cross-check)
The official site delegates sign-in, payment and age-gate to a separate Hypergryph SDK stylesheet and its own banner art. That is a different product, but it independently confirms the same recipe — a pure-black ground with a neutral dark ramp and a single cyan accent:

- The banner art quantises to a neutral ramp of #000000 / #080808 / #101010 / #181818 / #202020 / #282828 / #303030 / #383838 / #404040 / #484848, plus two accents: a cyan **#0098d8** (deep variant #004058) and a yellow **#f8d800**.
- #0098d8 is a deeper cut of `{colors.primary}` and is deliberately *not* folded into the token set — it belongs to the SDK, not to the Arknights brand layer. The yellow has no equivalent on the main surface.

### Region Theming
Pairs observed in the world/region data table. Each region carries a **surface** and an **accent** that are applied together — the system never mixes an accent from one region with the surface of another.

- **Region Red** ({colors.region-accent-red}) on **Region Maroon** ({colors.region-surface-maroon}).
- **Region Gold** ({colors.region-accent-gold}) on **Region Taupe** ({colors.region-surface-taupe}).
- **Region Blue** ({colors.region-accent-blue}) on **Region Slate** ({colors.region-surface-slate}).

## Typography

### Font Family

- **Novecento Sans Wide** — a wide, geometric grotesque, shipped in Medium (500), DemiBold (600), Bold (700) and UltraBold (800). Carries all tracked-out caps: navigation labels, eyebrows, micro-labels, and the big display headlines. Fallback `Archivo, Encode Sans Expanded, sans-serif`.
- **Oswald** — condensed grotesque, shipped in Medium (500) and DemiBold (600). Used for exactly one job: the oversized ghost display numerals and words. Fallback `Oswald, Barlow Semi Condensed, sans-serif` (Oswald is freely available).
- **Bender** — technical grotesque, shipped in Regular (400) and Bold (700). Carries dates, counters, metadata lines and all button labels, always with 1px positive tracking. Fallback `Barlow, Roboto Condensed, sans-serif`.
- **Source Han Sans SC** — the CJK workhorse, shipped in Regular (400), Medium (500), Bold (700) and Heavy (900). Carries every Chinese headline, list title, tab label and paragraph. Fallback `Noto Sans SC, Source Han Sans SC, PingFang SC, Microsoft YaHei, sans-serif`.

The four families are used as four distinct voices, not as a family-plus-weights. A single component can legitimately show Novecento caps, Bender metadata and Source Han body at once — that mixture is the identity.

### Which Voices Are Shared With the Client

> **Correction (superseded by the in-game analysis).** An earlier version of this section claimed Novecento Sans Wide and Bender were *web-only*. **That was wrong.** It was based on grepping `Arknights_Data\il2cpp_data\Metadata\global-metadata.dat` for font names — but that file holds IL2CPP string literals, not Unity asset names, so the absence proved nothing. The game's own Unity `Font` objects are in the plain serialized assets and carry these families directly. The list below is the corrected reading.

The web surface and the PC client **share the same four families**. They are not two type systems:

- **Novecento Sans Wide is in-game.** The client ships it as Unity `Font` objects `Novecentowide-Normal`, `Novecentowide-Medium` and `Novecentowide-Bold` (in `sharedassets0.assets` / `sharedassets1.assets`). Note the in-game family spells it *Novecentowide*, not "Novecento Sans Wide" — same face, two spellings.
- **Bender is in-game.** Shipped as `JovannyLemonad-Bender` and `JovannyLemonad-Bender-Light` — the family's author credit is part of the asset name.
- **Oswald is in-game.** `OSWALD-MEDIUM` (`sharedassets3.assets`), matching the website's Oswald Medium.
- **Source Han Sans is in-game.** `SourceHanSansCN-Heavy` (`sharedassets3.assets`) plus `NotoSansHans-Medium`; the client also ships locale cuts of the same superfamily for its web layer (Source Han Sans CN/JP/TW, Source Han Serif CN/JP/TW, Noto Sans CJK KR). The website ships none of the serif cuts.

The 20 in-game `Font` objects also include faces the website never uses — `AEwide`, `RoHMinSinkStd-UB`, `Nesatho`, `Dosis-Bold`, `Dosis-Regular`, `Arvo-Bold`, `OpenSans-Semibold`, `ADDWB__`, `GroovyScript`, `GroovyScriptExtrude` and a CJK face named `思源黑体_GBK`. So the client has a *wider* voice set than the site; the site uses a subset.

The full in-game typographic system is analysed in `arknights.md`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 112px | 500 | 1.00 | -5.6px | Oversized ghost display behind content |
| `{typography.display-lg}` | 60px | 700 | 1.05 | -3.0px | Hero wordmark, campaign titles |
| `{typography.display-md}` | 50px | 700 | 1.05 | -2.5px | Secondary display |
| `{typography.headline}` | 40px | 700 | 1.20 | 0 | Section heading (with the 8px cyan left rule) |
| `{typography.card-title}` | 36px | 700 | 1.25 | 2px | Feature card title |
| `{typography.subhead}` | 24px | 400 | 1.40 | 0 | Lead paragraph, intro copy |
| `{typography.body-lg}` | 18px | 400 | 1.60 | 0 | Lead body |
| `{typography.body}` | 16px | 400 | 1.60 | 0 | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.60 | 0 | Card body, dense lists, section tabs |
| `{typography.list-title}` | 18px | 700 | 1.40 | 2px | News/announcement row title (line-clamped to 2) |
| `{typography.label-caps}` | 18px | 600 | 1.20 | 1.8px | Section label in caps |
| `{typography.caption}` | 12px | 400 | 1.40 | 1px | Dates, counters, metadata — Bender |
| `{typography.button}` | 14px | 700 | 1.20 | 1px | All button labels — Bender Bold |
| `{typography.eyebrow}` | 12px | 500 | 1.25 | 2px | Navigation item, tracked caps |
| `{typography.micro}` | 6px | 500 | 1.00 | 3px | Micro legal/label text; `.5em` tracking |

### Principles

- **Negative tracking belongs to Oswald only** (-0.05em at 112px). The wide grotesque carries a smaller negative value at display sizes (-3.0px at 60px) and switches to **positive** tracking once it drops to caps-and-labels duty.
- **Positive tracking is the system's "this is taxonomy" signal** — 1px on Bender metadata, 2px on Novecento eyebrows and Source Han list titles.
- **Ghost display is a background layer.** At `{colors.surface-4}` (#242424) on #000 the display type is only ~14% luminance apart from the canvas: readable as shape, not as text. It is never used for content that must be read.
- **CJK and Latin are set in different families on purpose.** When a line mixes 中文 and English, the Latin runs in Bender/Novecento and the CJK in Source Han Sans — the optical size difference is part of the look.
- **Micro type is real.** The system ships a 6px token with 3px tracking for legal/corner labels.

### Note on Font Substitutes

Novecento Sans Wide (Synthview) and Bender are not broadly distributed as web fonts. The closest free substitutes are **Archivo** with its expanded width axis for Novecento Sans Wide caps, and **Barlow** or **Roboto Condensed** for Bender's technical metadata. **Oswald** and **Source Han Sans / Noto Sans SC** are freely available — and the product itself ships them — so those two should be used as-is rather than substituted; they are the families where the shipped file can be matched exactly.

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens (front matter)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 120px.
- The sheet's real working rhythm is multiples of 8: 8 / 16 / 24 / 32 / 40 / 60 / 120px. 60px (3.75rem) is the recurring block offset.
- **Primary button**: 60px tall, `padding: 0 28px 0 16px` — asymmetric, with more room on the trailing side for the chevron.
- **Compact button / tag**: 24px tall, `padding: 0 10px`.
- **Section tab**: 64px tall, `padding: 0 24px`, 8px solid left border.
- **List row**: 360px wide, 96px tall, 1px bottom hairline.
- **Top nav**: 120px tall — unusually deep, because the nav carries a two-line stack (Latin caps over a smaller CJK subtitle).

### Grid & Container

- The shell is a **fixed full-viewport composition**, not a scrolling document: a 120px top nav, then full-bleed art, with content floated in panels over it.
- Content columns are positioned rather than gridded; the observed information layout is a ~360px left rail of list rows against a full-bleed media panel, with a ~236px action rail pinned right.
- The right rail (download tiles, counters) is a fixed 236px column.
- Panels are placed with absolute offsets (`top: 152px; right: 236px`) rather than flow layout — the surfaces are composed like plates, not stacked like sections.

### Whitespace Philosophy

There is no light canvas to create whitespace, so the system uses **three different voids** instead: pure black fields, black scrims over imagery, and the ghost display type itself. Large type at #242424 occupies the space where a light-mode design would put padding. Where separation is needed it is a 1px hairline, never a gap.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | Pure `{colors.canvas}` #000, no border, no shadow | Page ground, list rails, footers |
| 1 (hairline rule) | 1px `{colors.hairline}`, fading to transparent at one end | Nav bottom edge, list row dividers, panel tops |
| 2 (scrim lift) | `linear-gradient(0deg, rgba(0,0,0,.8), rgba(0,0,0,.5))` band | Bottom bars over imagery |
| 3 (image panel) | Full-bleed art under a `linear-gradient(0deg,#000 80px, transparent 320px)` protection | Feature media, hero art |
| 4 (fixed chrome) | `{colors.canvas}` at 60–80% alpha + `backdrop-filter: blur(8px)` | Sticky top nav, overlay menus |
| 5 (blend overlay) | Texture layer at `mix-blend-mode: overlay`; list texture at `difference` | Grain and texture over dark panels |

The system ships **no box-shadows at all** — a scan of 152 KB of its stylesheet found zero `box-shadow` elevation on chrome. Depth is entirely black-on-black separation, gradient scrims and blended texture.

### Decorative Depth

- **Gradient hairlines.** Rules are `height: 1px` elements whose background is a `linear-gradient` from `hsla(0,0%,100%,0)` to `hsla(0,0%,100%,.3)` — so a divider appears to fade out rather than stop.
- **Masked edges.** Panels use `mask: linear-gradient(90deg, hsla(0,0%,100%,0), #fff 20%)` so content dissolves into the canvas at the edge instead of being framed.
- **Blend-mode texture.** A `list_bg_texture` layer is composited with `mix-blend-mode: difference`, and grain layers with `overlay`, which is what gives flat panels a printed, slightly dirty surface.
- **CSS triangles.** Depth accents are literal `border: 1rem solid transparent; border-bottom-color: {colors.primary}` triangles — a hard, notched arrow rather than a rounded badge.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | **The default**: all buttons, tabs, cards, panels, rows, tiles |
| `{rounded.xs}` | 2px | Smallest chips |
| `{rounded.sm}` | 4px | Form-scale controls |
| `{rounded.md}` | 8px | Icon buttons only |
| `{rounded.lg}` | 12px | Rare larger containers |
| `{rounded.xl}` | 16px | Rare full panels |
| `{rounded.pill}` | 9999px | Not used on this surface |
| `{rounded.full}` | 50% | Circular glyph buttons (scroll indicator) |

Square is not a stylistic preference here, it is the rule: 0px appears in the sheet four times more often than every other radius combined.

### Decorative Geometry

- **The 8px left rule.** Section headings and section tabs are marked by a `border-left: 8px solid {colors.primary}` with `padding-left: 32px`. This is the system's primary structural signature — it replaces both the card and the icon.
- **The 1px fade rule** (see Elevation) is the secondary signature.
- **Hard notches.** Triangles made from transparent borders in `{colors.primary}` are used as pointers and arrow heads.
- **Line-clamped 2-line titles.** News and card titles are clamped to exactly two lines with `-webkit-line-clamp: 2` inside a fixed-height row — the layout never reflows for a long title.
- **Vertical labels in portrait.** In portrait orientation, counters and labels switch to `writing-mode: vertical-rl` and pin to the right edge.
- **Full-bleed art.** Character and campaign art is placed as a mask-clipped plane up to 1330×750px, with the subject centred and the edges dissolved.

## Components

### Buttons

**`button-primary`** — Cyan fill, black label. The only filled action in the system.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}` (Bender Bold 14px, 1px tracking), `{rounded.none}`, height 60px, `padding: 0 28px 0 16px`.
- Hover moves to `{colors.primary-strong}`; the geometry does not change.
- The label is followed by a `>` chevron; the asymmetric padding is the space it lives in.

**`button-secondary`** — Black fill, white label.
- Background `{colors.canvas}`, text `{colors.ink}`, `{rounded.none}`, height 60px.

**`button-tertiary`** — Same geometry as secondary but placed on media, where the black fill reads as a hole in the image.

**`button-disabled`** — Background `{colors.surface-disabled}` (#585858), text `{colors.ink-muted}` (#d2d2d2). Explicitly grey, never a dimmed cyan.

**`button-compact`** — 24px tall, `padding: 0 10px`, cyan fill. Used for the small in-list actions.

**`icon-button`** — 54×54px, `{rounded.md}` 8px, black fill, white glyph. The one place a radius is allowed at size.

### Navigation

**`top-nav`** — 120px tall fixed bar over the artwork.
- Background `{colors.canvas}` at partial alpha with `backdrop-filter: blur(8px)`; 1px `{colors.hairline}` bottom rule.
- Each item is a two-line stack: `{typography.eyebrow}` Latin caps (INDEX, INFORMATION, OPERATOR, WORLD, MEDIA, MORE) over a smaller Source Han Sans CJK subtitle.
- **`nav-link-default`**: `{colors.ink}` white caps, no underline.
- **`nav-link-active`**: `{colors.primary}` cyan caps plus a solid cyan underline sitting on the nav's bottom hairline.
- The mark sits left; utility glyphs (share, audio, account) sit right at 24px.

### Tabs & Filters

**`filter-tab-active`** + **`filter-tab-default`** — the news category row (最新 / 公告 / 活动 / 新闻).
- Active: `{colors.primary}` fill, `{colors.on-primary}` black label, `{rounded.none}`, 20px tall, followed by a `>` glyph.
- Default: transparent on `{colors.canvas}`, `{colors.ink}` label, same geometry.
- Selection is communicated **only** by the fill — there is no border, no underline, no scale.

**`section-tab`** — 64px tall, `padding: 0 24px`, `border-left: 8px solid` in the state colour, text `{colors.ink-subtle}` when inactive.

### Lists & Cards

**`list-row`** — the information rail's unit.
- 360px wide, 96px tall, 1px `{colors.hairline}` bottom rule, `{colors.canvas}` ground.
- Structure: a Bender date (`{typography.caption}`, e.g. `2026 // 10 / 11`) on the first line, then a cyan category label (`活动`, `公告`) followed by a white Source Han title at `{typography.list-title}`, clamped to 2 lines.

**`news-card`** — a 180px-tall solid `{colors.primary}` panel with white text, used as the emphatic tile inside a media column. Offset from the block above by 60px.

**`media-panel`** — full-bleed art plane, masked on the leading edge, with a `linear-gradient(0deg,#000, transparent)` scrim and a `mix-blend-mode: overlay` texture layer.

**`ghost-display`** — the oversized watermark: `{typography.display-xl}` (Oswald Medium 112px, -5.6px tracking) in `{colors.surface-4}` (#242424), positioned behind and below content. In the information view it reads "BREAKING NEWS" across the bottom-left.

### Feedback & Status

**`progress-bar`** — 8px tall, square ends: `{colors.hairline}` track with a solid `{colors.primary}` fill and a lighter mid-segment. Pinned to the bottom edge of the media panel.

**`counter`** — `01 // 01 / 05` in Oswald/Novecento numerals: the current index in `{colors.primary}`, the separator and total in `{colors.ink}`.

**`scroll-indicator`** — a 72px circular target centred at the bottom: a 2px × 75% `currentColor` bar above a chevron, the whole thing fading on a 0.3s opacity transition.

### Download Rail

**`download-tile`** — the right-hand action column, 236px wide.
- `{rounded.none}`, ~32px tall, `padding: 0 12px`.
- Default tiles are `{colors.canvas}` with `{colors.ink}` text and a glyph.
- Platform tiles switch the fill to the platform colour — **`download-tile-ios`** (`{colors.platform-ios}`), **`download-tile-android`** (`{colors.platform-android}`), **`download-tile-emulator`** (`{colors.platform-emulator}`). This is the only place in the system where a non-cyan chromatic fill is allowed, and the fill is borrowed from the destination store rather than from the brand.

**`region-card-*`** — the region/theme tiles, one per region pair: **`region-card-red`**, **`region-card-gold`**, **`region-card-blue`**. Each sets `textColor` to that region's accent on that region's own surface; the pairs are never mixed.

**`panel-inset` / `panel-raised` / `panel-lifted` / `panel-deep`** — the near-black surface ladder, `{colors.surface-1}` → `{colors.surface-5}`. Used for inset fields, raised panels, the most common lifted panel, and the deepest panel respectively. None of them carry a border or a shadow.

**`meta-label` / `footnote` / `disabled-label`** — the quiet end of the type ramp: `{colors.ink-tertiary}` metadata, `{colors.ink-quaternary}` footnotes, `{colors.ink-deep}` disabled labels.

**`tab-on-media`** — the tab treatment when it sits over artwork rather than on flat black: `{colors.ink-warm}` (#c4c2c2), 40px tall. The only warm grey in the type ramp.

**`divider-soft`** — 1px `{colors.hairline-soft}` rule for panel top edges.

**`scrim-overlay`** — the black protection layer placed between artwork and type. Always black, never tinted, and always at alpha (0.3–0.9) rather than opaque.

## Do's and Don'ts

### Do

- Keep `{colors.canvas}` at true #000000. The system does not use a near-black ground.
- Reserve `{colors.primary}` for: filled primary action, active/selected state, section rule, progress fill. Nothing else.
- Set `{colors.on-primary}` black type on every cyan fill — never white.
- Use `{rounded.none}` for buttons, tabs, cards, rows and panels. Let `{rounded.md}` 8px be the only radius above 4px.
- Mark a section with `border-left: 8px solid {colors.primary}` + `padding-left: 32px`, not with a card or an icon.
- Separate with 1px gradient hairlines. Let the rule fade to transparent at one end.
- Drive depth with black gradient scrims over imagery, and with `mix-blend-mode` texture.
- Put the oversized ghost display at `{colors.surface-4}` behind content — as texture, never as the thing to read.
- Gate every hover style behind `@media (any-hover:hover)`.
- Keep metadata and button labels in Bender with 1px tracking, uppercase where the copy allows.

### Don't

- Don't use cyan as a page or panel background — it is a fill for small action surfaces only.
- Don't introduce a second chromatic accent. The only exceptions are the iOS/Android/emulator store tiles and region theming pairs.
- Don't add drop shadows or elevation cards. There are none in this system.
- Don't round a button, a card or a tab. Square corners are the identity.
- Don't set ghost display type in a colour lighter than `{colors.surface-4}` — it stops being texture and starts competing with content.
- Don't use white type on cyan at label, button or body scale. The one sanctioned exception is the `news-card` tile, where white on cyan is a deliberate 1.81:1 decorative fill read at display scale, never for long copy.
- Don't set black type directly on `{colors.canvas}` — black on black is a hole, not a state.
- Don't replace the 8px left rule with a 1px or 4px rule — the weight is calibrated.
- Don't animate with easing flourishes or spring physics. Transitions are 0.2s / 0.3s / 0.6s linear-feeling.
- Don't lay out with width breakpoints. The system switches on orientation.
- Don't let a title wrap to three lines; clamp it to two.

## Responsive Behavior

### Breakpoints

This surface does **not** use width breakpoints. Its stylesheet contains 320 `@media (orientation: portrait)` blocks and exactly one `landscape` block — the composition is designed as a landscape plate and re-cut for portrait devices.

| Condition | Key Changes |
|---|---|
| Default (landscape) | Fixed 1920×1080-style composition: 120px nav, left rail, right action rail, full-bleed art |
| `orientation: portrait` | Composition re-stacks; side rails move to the bottom; counters and labels switch to `writing-mode: vertical-rl` and pin to the right edge; type steps down (a 16px label in landscape becomes 10px in portrait) |
| `any-hover: hover` (52 blocks) | Hover affordances are *added* — colour, background and transform transitions on interactive elements |
| `any-hover: none` | Those blocks never apply; selection state alone carries interaction |

### Touch Targets

- Primary CTA holds 60px height across orientations.
- Compact buttons and in-list tags drop to 24px — below the usual 44px guidance, so they are always paired with a larger row target.
- The scroll indicator is a 72px circular hit area.
- Nav items are 120px-tall column targets, not text-sized links.

### Collapsing Strategy

- **Top nav**: the six Latin caps + CJK subtitle pairs stay in one row; they do not collapse to a hamburger.
- **Content**: the left information rail and the full-bleed art re-stack vertically in portrait rather than shrinking side by side.
- **Rails**: the 236px action rail reflows below the artwork.
- **Display type**: the 112px ghost display and the 60px wordmark step down by roughly one hierarchy level in portrait; the negative tracking scales with the size.

### Image Behavior

- Art is placed as a **masked plane**, not a framed card: `mask: linear-gradient(90deg, hsla(0,0%,100%,0), #fff 20%)` dissolves the leading edge.
- Imagery is always protected by a black gradient scrim before any type is placed on it.
- A texture layer is composited over dark panels with `mix-blend-mode: overlay` (and `difference` for the list background), so images and panels share one printed surface.

## Iteration Guide

1. Focus on one component at a time and reference it by its `components:` token name.
2. Decide first whether the surface is a black field, an image panel or a scrim — there is no third option.
3. Before adding a radius, check whether the element is an icon button. If not, use `{rounded.none}`.
4. Default body copy to `{typography.body}` in Source Han Sans; default any Latin metadata to `{typography.caption}` in Bender.
5. Reach for `{colors.primary}` only for the four sanctioned roles (action fill, selected state, section rule, progress).
6. Separate blocks with a 1px gradient hairline before reaching for spacing.
7. Prefer the 8px left rule over any icon or card treatment for section starts.
8. Keep transitions at 0.2s / 0.3s / 0.6s; do not add easing curves.
9. Test the composition in portrait before declaring it done — that is the mode the layout was re-cut for.

## Known Gaps

- **Colour tokens are extracted from the shipped stylesheet**, not from a design-token file. #18d1ff appears 42 times in 152 KB of CSS and is treated as the canonical accent; a near-duplicate #19d1ff appears 5 times in a separate stylesheet chunk and is treated as the same colour rather than a distinct token.
- **Surface steps are observed values, not a documented ladder.** #121212 / #181818 / #1d1f20 / #242424 / #272727 were each seen in panel contexts; the exact intended ordering between them is inferred from luminance, not published.
- **The payment/account flows are served by a separate SDK stylesheet** (`hg_web_sdk`, `hg_account_web_sdk`) carrying its own type files and backgrounds. Those surfaces are not part of this analysis beyond the cross-check above and the shared font stack.
- **In-game UI is not measured, and this is a hard limit rather than an omission.** The PC client keeps its UI in 14,238 Unity asset bundles (25.0 GB) under `Arknights_Data\StreamingAssets\AB\Windows\` plus `PersistentData\Bundles\`. Every bundle has a valid `UnityFS` v8 header (`2021.3.39f1`), but sets `flags=0x243` — including the asset-bundle-encryption bit — with an all-zero `uncompressedDataHash`; an LZ4 block decoder validated against a hand-built reference block fails on 12/12 sampled directory streams, and the cipher is unidentified. Plaintext leaks (`CAB-…`, `PPtr<$ShopGPCommonItemView>`, `Canvas`, `rootCg`) but no texture decodes. Nothing in this document's in-game claims is derived from the client's UI.
- **No image file exists anywhere in the install** — 0 files matching `.png / .tga / .ktx / .astc / .webp / .jpg / .dds` across 14,931 files (26.1 GiB). Every in-game pixel is inside an unreadable bundle.
- **In-game UI evidence is naming-only.** Bundle filenames are semantic even though their contents are not: `ui\skillrange\common_skill_range_button_black.ab` and `..._white.ab` (light/dark button variants), `ui\skinshop\skinshopblindboxtheme\default\theme_config.ab`, `ui\home\setting\setting_tab.ab`, `ui\emoticon\theme\…`. These confirm that light/dark component variants and per-feature theme configs exist in-game; they do not give values.
- **No layout or colour constants are readable from the client's code.** Its IL2CPP metadata is plain (`0xFAB11BAF`, v29) but all method bodies are AOT-compiled into `GameAssembly.dll` (218 MB), and UI numbers live as serialized MonoBehaviour data inside the encrypted bundles.
- **The only measured client design data is SDK-side**, not in-game: 9 webview WOFF2 fonts (real internal family names, read from their `name` tables) and 4 SDK banner JPEGs embedded in `U8CoreUI.dll` (the palettes cross-checked in the Colors section). `AntiCheatExpert` is present, so no runtime instrumentation was attempted.
- **Two pairings in the token set fail WCAG AA on purpose.** `{colors.ink}` on `{colors.primary}` inside `news-card` measures 1.81:1 and `{colors.surface-4}` on `{colors.canvas}` inside `ghost-display` measures 1.35:1. Both are decorative surfaces rather than reading surfaces — the ghost display is a watermark and the cyan tile's type is set at display scale. They are preserved because removing them would remove the two most recognisable elements of the system; neither should be reused for body copy.
- **Region theming pairs are read from a data table**, so they are known as value pairs without their region names or the rules governing which surface an accent may sit on.
- **Hover and focus states for the primary CTA** are taken from the stylesheet's hover rules; the exact pressed tracking and any focus-ring specification were not observed in a live interaction.
- **No `box-shadow` was found anywhere in the shipped chrome**, so the "Elevation" section describes separation strategy rather than a shadow scale. If the in-game UI uses shadows, they are behind the bundle cipher.
- Novecento Sans Wide and Bender are proprietary / distributed only as webfonts; an open substitute is acceptable and documented in the Typography section.
