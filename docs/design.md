Rebuild this design in your project. Match it exactly: same layout,
typography, color, spacing, radius, shadow, and motion. Do not invent
new visuals.

## design.md

# Print Studio — Style Reference
> Light interface — red accents on a pale orange ground.

**Theme:** light

A light system built on pale orange surfaces (#f2eee9) with near-black ink (#1b1b1b). The reference screen carries its primary actions in orange (#e47800); the brand primary token is #ff5a2a. Type pairs Source Serif 4 for display with Switzer for body and UI.

**Ground truth (computed from tokens + reference HTML):** light theme · page #f2eee9 · ink #1b1b1b · primary #ff5a2a · secondary #e47800 · applied action color #e47800 · display "Source Serif 4" · body "Switzer". Where the description above conflicts with these values or the Reference HTML, the tokens and HTML are authoritative.

## Tokens: Colors

| Name | Value | Token | Role | Usage | Contrast |
|------|-------|-------|------|-------|----------|
| Canvas | `#f2eee9` | `--gesso-canvas` | Page background, the floor everything sits on. | Outermost background: body, full-bleed sections. Mirrors Neutral 50. | n/a |
| Surface recessed | `#e8e4e0` | `--gesso-surface-recessed` | Sunken surface below the canvas. | Inset wells: input fields, progress tracks, code blocks. | n/a |
| Surface | `#ebe0d8` | `--gesso-surface` | Card and panel fill, raised above the canvas. | Cards, panels, sheets, table rows. Mirrors Neutral 100. | n/a |
| Surface elevated | `#e2d7cf` | `--gesso-surface-elevated` | Top elevation tier. | Modals, dropdowns, popovers, tooltips. | n/a |
| Divider | `rgba(0,0,0,0.04)` | `--gesso-divider` | Hairline borders and separators. | 1px rules between rows and sections. Never for text. | n/a |
| Foreground | `#1b1b1b` | `--gesso-fg` | Primary text and high-emphasis icons. | Body copy, headings, primary icons. Mirrors Neutral 900. | AA 4.5:1 on canvas (guaranteed) |
| Foreground muted | `#615f5b` | `--gesso-fg-muted` | Secondary text. | Captions, metadata, placeholders, disabled labels. Mirrors Neutral 600. | AA 3.0:1 on canvas (guaranteed) |
| Primary | `#ff5a2a` | `--gesso-primary` | Brand accent, FILL only (alias: --gesso-accent). | CTA fills, active and selected states, focus rings. 2 to 3 per screen. Do NOT use as text, reach for --gesso-accent-text. | Pair with --gesso-on-accent for the label on top. |
| On primary | `#000000` | `--gesso-on-accent` | Text and icons on a filled primary. | Label color for buttons and chips filled with --gesso-primary. | Contrast-derived against --gesso-primary. |
| Accent (as text) | `#b33f1d` | `--gesso-accent-text` | AA-safe accent for text and icons. | Use THIS for accent-colored links, headings, and icons. Use --gesso-primary for fills. | AA 4.5:1 on canvas (guaranteed). |
| Secondary | `#e47800` | `--gesso-secondary` | Supporting brand accent. | Secondary fills, logo discs, supporting highlights. | Pair with on-fill text per --gesso-on-accent. |
| Secondary (as text) | `#a05400` | `--gesso-accent-2-text` | AA-safe secondary for text. | Secondary accent used as text or icons. | AA 4.5:1 on canvas (guaranteed). |
| Neutral 50 | `#f2eee9` | `--gesso-neutral-50` | Page background. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 100 | `#ebe0d8` | `--gesso-neutral-100` | Surface. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 200 | `#cec5bd` | `--gesso-neutral-200` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 300 | `#b1aaa3` | `--gesso-neutral-300` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 400 | `#95908a` | `--gesso-neutral-400` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 500 | `#7b7772` | `--gesso-neutral-500` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 600 | `#615f5b` | `--gesso-neutral-600` | Muted text and dividers. | Ramp access by step; prefer the role token above where one exists. | AA 3.0:1 on canvas. |
| Neutral 700 | `#484744` | `--gesso-neutral-700` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 800 | `#31302f` | `--gesso-neutral-800` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 900 | `#1b1b1b` | `--gesso-neutral-900` | Primary text. | Ramp access by step; prefer the role token above where one exists. | AA 4.5:1 on canvas. |
| Neutral 950 | `#181818` | `--gesso-neutral-950` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Success | `#138b3f` | `--gesso-success` | Positive signals (gains, completed states). | Meaning only, never decoration. | AA 3.0:1 on canvas, chroma-floored distinct. |
| Warning | `#b86505` | `--gesso-warning` | Caution states. | Meaning only, never decoration. | AA 3.0:1 on canvas, chroma-floored distinct. |
| Error | `#DC2626` | `--gesso-error` | Errors, destructive actions, negative signals. | Meaning only, never decoration. | AA 3.0:1 on canvas, chroma-floored distinct. |
| Data 1 | `#982700` | `--gesso-data-1` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 2 | `#bd3300` | `--gesso-data-2` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 3 | `#e44000` | `--gesso-data-3` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 4 | `#ff5f32` | `--gesso-data-4` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 5 | `#ff9275` | `--gesso-data-5` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 6 | `#ffbba8` | `--gesso-data-6` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |

## Tokens: Typography

### Source Serif 4 — Display. Headings, hero copy, large numerical specimens. · `--gesso-font-display`
- **Weights:** 400, 500, 700
- **Line height:** 1.1
- **Letter spacing:** -0.02em
- **Role:** Display. Headings, hero copy, large numerical specimens.

### Switzer — Body. Paragraphs, labels, UI chrome. · `--gesso-font-body`
- **Weights:** 400, 500, 700
- **Line height:** 1.5
- **Letter spacing:** 0em
- **Role:** Body. Paragraphs, labels, UI chrome.

### Switzer — Mono. Code, numerical tickers, mono-spaced metadata. · `--gesso-font-mono`
- **Weights:** 400, 500, 700
- **Line height:** 1.4
- **Letter spacing:** 0em
- **Role:** Mono. Code, numerical tickers, mono-spaced metadata.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| H1 | 36px | 1.2 | — | `--gesso-text-4xl` |
| H2 | 30px | 1.2 | — | `--gesso-text-3xl` |
| H3 | 24px | 1.2 | — | `--gesso-text-2xl` |
| Body | 16px | 1.5 | — | `--gesso-text-base` |
| Caption | 12px | 1.5 | — | `--gesso-text-xs` |

## Tokens: Spacing & Shapes

**Base unit:** 8px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| space-1 | 4px | `--gesso-space-1` |
| space-2 | 8px | `--gesso-space-2` |
| space-3 | 12px | `--gesso-space-3` |
| space-4 | 16px | `--gesso-space-4` |
| space-6 | 24px | `--gesso-space-6` |
| space-8 | 32px | `--gesso-space-8` |
| space-12 | 48px | `--gesso-space-12` |
| space-16 | 64px | `--gesso-space-16` |
| space-24 | 96px | `--gesso-space-24` |
| space-32 | 128px | `--gesso-space-32` |

### Border Radius

| Element | Value |
|---------|-------|
| none | 0px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| full | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `none` | `--gesso-shadow-sm` |
| md | `none` | `--gesso-shadow-md` |
| lg | `0 1px 2px rgba(0,0,0,0.04)` | `--gesso-shadow-lg` |

## Components

### Card
**Role:** Container surface for content groupings.

Background --gesso-neutral-50 (#f2eee9), border 1px solid --gesso-neutral-200 (#DDD3B8), border-radius var(--gesso-radius-md) (16px), padding 16px, --gesso-shadow-sm. Body font for content; display font for any embedded headline. Text fg --gesso-neutral-900 (#1b1b1b).

### Primary Button
**Role:** Highest-emphasis action. Reserved for the main CTA per screen.

Background --gesso-primary (#ff5a2a), text auto-picked for max contrast (white or near-black), padding 12px 24px, border-radius var(--gesso-radius-md) (16px), font-family --gesso-font-body, font-weight 500. Hover: mix toward --gesso-fg by 10-12%. Use 1-2 per screen, never more. The reference screen applies #e47800 as its dominant on-screen action color; follow the Reference HTML for color application.

### Secondary Button
**Role:** Supporting action next to a primary CTA.

Background transparent, border 1.5px solid --gesso-primary (#ff5a2a), text --gesso-primary, padding 12px 24px (minus 1.5px each axis to compensate for the border), border-radius var(--gesso-radius-md) (16px), body font, weight 500.

### Input
**Role:** Single-line text entry. Default form field.

Background --gesso-neutral-100 (#ebe0d8), border 1px solid --gesso-neutral-300 (#C8BC9E), border-radius var(--gesso-radius-md) (16px), padding 12px 16px, font-size 16px (prevents iOS zoom), body font. Focus: border --gesso-primary, ring 3px --gesso-primary at 14% alpha.

### Badge
**Role:** Compact label for status, tags, counts.

Background --gesso-primary (#ff5a2a) at 12% alpha, text --gesso-primary, padding 8px 12px, border-radius var(--gesso-radius-full) (9999px), font-size 12px, body font, weight 500, uppercase, letter-spacing 0.04em.

### Modal
**Role:** Focus-stealing overlay for confirmations or short flows.

Background --gesso-neutral-50 (#f2eee9), border 1px solid --gesso-neutral-200, border-radius var(--gesso-radius-lg) (24px), padding 24px, --gesso-shadow-lg. Backdrop: fg at 40% alpha + blur 12px. Max-width 480px on mobile, 560px on desktop.

### Nav Item
**Role:** Single entry in a navigation list (sidebar, top bar, or tab row).

Padding 8px 12px, border-radius var(--gesso-radius-sm) (8px), text --gesso-neutral-700 (#403A30), body font, weight 400. Hover: bg --gesso-neutral-100. Active: bg --gesso-primary at 12% alpha, text --gesso-primary, weight 500.

### Avatar
**Role:** Identity surface for users / accounts / brands.

Background --gesso-secondary (#e47800), text auto-picked for contrast on secondary, border-radius var(--gesso-radius-full) (9999px), aspect-ratio 1:1. Size variants: 24/32/40/48px. Initials at body weight 500, sized to ~40% of the avatar diameter.

## Do's and Don'ts

### Do

- Two families max: a clean humanist or geometric sans for both display and body. Display can run large and confident (semibold 600-700) but stays soft, generous line-height, no heavy condensed weights. Body is regular 400 at relaxed tracking. Optional mono only for terminal/code contexts. Avoid tight all-caps headlines except small pill/tab labels.
- TONE-PARAMETRIC, roles drawn from the vibe's extracted gradient, never fixed hex. canvas = a smooth multi-stop gradient (radial or linear mesh) between two-to-three extracted hues, NOT a flat fill; in dark vibes canvas runs deep blue/indigo->teal/aurora, in light vibes peach->lavender->sky. surface = a near-canvas tone at +/-6-10% lightness with optional frosted blur. ink = highest-contrast extracted neutral (near-white on dark, deep navy/charcoal on light). muted = ink at 55-65% opacity. accent = ONE saturated extracted hue (purple, coral, aurora-green) used at <=12% area for primary controls and glow. Relationships hold across tone; only the source hues swap.
- Centered, breathing, lots of negative space, the gradient canvas does the work. Mobile (393x852): full-bleed gradient bg, content floats centered, minimal chrome, bottom tab bar light.
- Apply --gesso-primary (#ff5a2a) to a maximum of 2-3 elements per screen: a button, a highlight, a badge. Never paint large areas with primary.
- Use --gesso-radius-md (16px) for cards and inputs, --gesso-radius-full for badges and avatars. Inner radii inside a parent: subtract the parent's padding from its radius.
- Build hierarchy with the neutral scale, not extra hues. 90%+ of any screen should be neutrals; chromatic colors carry meaning, never decoration.

### Don't

- Never use a flat single-color background, the canvas must always be a smooth luminous gradient
- Never apply hard 45deg two-stop corner gradients or banded transitions; keep stops soft and dithered
- Never add gradient-filled text or rainbow gradients on small UI elements
- Never use harsh dark drop-shadows; floating elements glow with tinted soft blooms instead
- Don't use Inter as the display font. It's the most overused font in tech. Pick something with character from the fontHints display list.
- Don't use #3B82F6 / indigo-600 as primary unless explicitly briefed. Default blue is the hallmark of a generic SaaS aesthetic.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page | `#f2eee9` | Default page background. The lightest surface. |
| 1 | Raised | `#ebe0d8` | Cards, panels, sidebars: anything that sits on top of the page. |
| 2 | Sunken | `#DDD3B8` | Inset surfaces (search bars, code blocks, disabled fields). |
| 3 | Overlay | `#f2eee9` | Modals and floating panels. Same hue as page; depth comes from --gesso-shadow-lg. |

## Agent Prompt Guide

**Quick Color Reference**

- Primary: #ff5a2a
- Secondary: #e47800
- Page bg: #f2eee9
- Body fg: #1b1b1b
- Muted fg: #615f5b
- Success: #138b3f

**Example Component Prompts**

1. Build a card component. Background #f2eee9, border 1px solid #DDD3B8, border-radius 16px, padding 16px, body font (Switzer), text color #1b1b1b. Use Tailwind v4 arbitrary values: bg-[#f2eee9].

2. Build a primary button. Background #ff5a2a, text white (or #1b1b1b if primary is light), padding 12px 24px, border-radius 16px, font weight 500, hover: shift bg toward #1b1b1b by 10%.

3. Build a heading hierarchy (CSS-standard roles). H1: 2.25rem display font (Source Serif 4) weight 700, H2: 1.875rem, H3: 1.5rem, Body: 1rem body font (Switzer), Caption: 0.75rem, color #1b1b1b.

4. Build a form input. Background #ebe0d8, border 1px solid #C8BC9E, border-radius 16px, padding 12px 16px, font-size 16px, focus border #ff5a2a.

5. Build a navigation bar. Background #f2eee9, items at color #403A30 body weight, hover bg #ebe0d8, active item color #ff5a2a weight 500.

## Similar Brands

- **Linear** — Modern SaaS reference: restrained palette, gridded layout.
- **Stripe** — Clean, confident system with strong type hierarchy.
- **Vercel** — Black-and-white discipline with a single high-impact accent.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --gesso-canvas: #f2eee9;
  --gesso-surface-recessed: #e8e4e0;
  --gesso-surface: #ebe0d8;
  --gesso-surface-elevated: #e2d7cf;
  --gesso-divider: rgba(0,0,0,0.04);
  --gesso-fg: #1b1b1b;
  --gesso-fg-muted: #615f5b;
  --gesso-primary: #ff5a2a;
  --gesso-on-accent: #000000;
  --gesso-accent-text: #b33f1d;
  --gesso-secondary: #e47800;
  --gesso-accent-2-text: #a05400;
  --gesso-neutral-50: #f2eee9;
  --gesso-neutral-100: #ebe0d8;
  --gesso-neutral-200: #cec5bd;
  --gesso-neutral-300: #b1aaa3;
  --gesso-neutral-400: #95908a;
  --gesso-neutral-500: #7b7772;
  --gesso-neutral-600: #615f5b;
  --gesso-neutral-700: #484744;
  --gesso-neutral-800: #31302f;
  --gesso-neutral-900: #1b1b1b;
  --gesso-neutral-950: #181818;
  --gesso-success: #138b3f;
  --gesso-warning: #b86505;
  --gesso-error: #DC2626;
  --gesso-data-1: #982700;
  --gesso-data-2: #bd3300;
  --gesso-data-3: #e44000;
  --gesso-data-4: #ff5f32;
  --gesso-data-5: #ff9275;
  --gesso-data-6: #ffbba8;

  /* Typography — Font Families */
  --gesso-font-display: 'Source Serif 4', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-body: 'Switzer', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-mono: 'Switzer', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --gesso-text-4xl: 36px;
  --gesso-leading-4xl: 1.2;
  --gesso-text-3xl: 30px;
  --gesso-leading-3xl: 1.2;
  --gesso-text-2xl: 24px;
  --gesso-leading-2xl: 1.2;
  --gesso-text-base: 16px;
  --gesso-leading-base: 1.5;
  --gesso-text-xs: 12px;
  --gesso-leading-xs: 1.5;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --gesso-space-1: 4px;
  --gesso-space-2: 8px;
  --gesso-space-3: 12px;
  --gesso-space-4: 16px;
  --gesso-space-6: 24px;
  --gesso-space-8: 32px;
  --gesso-space-12: 48px;
  --gesso-space-16: 64px;
  --gesso-space-24: 96px;
  --gesso-space-32: 128px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --gesso-shadow-sm: none;
  --gesso-shadow-md: none;
  --gesso-shadow-lg: 0 1px 2px rgba(0,0,0,0.04);

  /* Surfaces */
  --surface-page: #f2eee9;
  --surface-raised: #ebe0d8;
  --surface-sunken: #DDD3B8;
  --surface-overlay: #f2eee9;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --gesso-canvas: #f2eee9;
  --gesso-surface-recessed: #e8e4e0;
  --gesso-surface: #ebe0d8;
  --gesso-surface-elevated: #e2d7cf;
  --gesso-divider: rgba(0,0,0,0.04);
  --gesso-fg: #1b1b1b;
  --gesso-fg-muted: #615f5b;
  --gesso-primary: #ff5a2a;
  --gesso-on-accent: #000000;
  --gesso-accent-text: #b33f1d;
  --gesso-secondary: #e47800;
  --gesso-accent-2-text: #a05400;
  --gesso-neutral-50: #f2eee9;
  --gesso-neutral-100: #ebe0d8;
  --gesso-neutral-200: #cec5bd;
  --gesso-neutral-300: #b1aaa3;
  --gesso-neutral-400: #95908a;
  --gesso-neutral-500: #7b7772;
  --gesso-neutral-600: #615f5b;
  --gesso-neutral-700: #484744;
  --gesso-neutral-800: #31302f;
  --gesso-neutral-900: #1b1b1b;
  --gesso-neutral-950: #181818;
  --gesso-success: #138b3f;
  --gesso-warning: #b86505;
  --gesso-error: #DC2626;
  --gesso-data-1: #982700;
  --gesso-data-2: #bd3300;
  --gesso-data-3: #e44000;
  --gesso-data-4: #ff5f32;
  --gesso-data-5: #ff9275;
  --gesso-data-6: #ffbba8;

  /* Typography */
  --gesso-font-display: 'Source Serif 4', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-body: 'Switzer', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-mono: 'Switzer', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --gesso-text-4xl: 36px;
  --gesso-leading-4xl: 1.2;
  --gesso-text-3xl: 30px;
  --gesso-leading-3xl: 1.2;
  --gesso-text-2xl: 24px;
  --gesso-leading-2xl: 1.2;
  --gesso-text-base: 16px;
  --gesso-leading-base: 1.5;
  --gesso-text-xs: 12px;
  --gesso-leading-xs: 1.5;

  /* Spacing */
  --gesso-space-1: 4px;
  --gesso-space-2: 8px;
  --gesso-space-3: 12px;
  --gesso-space-4: 16px;
  --gesso-space-6: 24px;
  --gesso-space-8: 32px;
  --gesso-space-12: 48px;
  --gesso-space-16: 64px;
  --gesso-space-24: 96px;
  --gesso-space-32: 128px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --gesso-shadow-sm: none;
  --gesso-shadow-md: none;
  --gesso-shadow-lg: 0 1px 2px rgba(0,0,0,0.04);
}
```


## Tokens (JSON)

```json
{
  "color": {
    "neutral": {
      "50": "#f2eee9",
      "100": "#ebe0d8",
      "200": "#DDD3B8",
      "300": "#C8BC9E",
      "400": "#A89880",
      "500": "#7A6E5A",
      "600": "#8a8782",
      "700": "#403A30",
      "800": "#2C2820",
      "900": "#1b1b1b",
      "950": "#0D0A07"
    },
    "primary": "#ff5a2a",
    "semantic": {
      "error": "#B91C1C",
      "success": "#2D6A2D",
      "warning": "#B45309"
    },
    "secondary": "#e47800"
  },
  "motion": {
    "easing": {
      "default": "ease-out",
      "emphasis": "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    },
    "duration": {
      "base": "200ms",
      "fast": "120ms",
      "slow": "320ms"
    }
  },
  "radius": {
    "lg": "24px",
    "md": "16px",
    "sm": "8px",
    "full": "9999px",
    "none": "0px"
  },
  "shadow": {
    "lg": "0 1px 2px rgba(0,0,0,0.04)",
    "md": "none",
    "sm": "none"
  },
  "spacing": {
    "unit": 8,
    "scale": {
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "6": "24px",
      "8": "32px",
      "12": "48px",
      "16": "64px",
      "24": "96px",
      "32": "128px"
    }
  },
  "approach": {
    "mood": "warm, authoritative, tactile, grounded",
    "name": "Print Studio",
    "anchor": "print shop, product label studio, ink and paper"
  },
  "extended": {
    "glow": {
      "color": "",
      "spread": "",
      "enabled": false
    },
    "border": {
      "color": "#DDD3B8",
      "style": "solid",
      "width": "1px"
    },
    "texture": {
      "type": "grain",
      "opacity": 0.04
    },
    "gradient": {
      "style": "",
      "enabled": false
    }
  },
  "typeface": {
    "body": "Switzer",
    "mono": "Switzer",
    "scale": {
      "lg": "1.125rem",
      "sm": "0.875rem",
      "xl": "1.25rem",
      "xs": "0.75rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "base": "1rem"
    },
    "display": "Source Serif 4",
    "weights": [
      400,
      500,
      700
    ],
    "bodyWeight": 400,
    "displayWeight": 700
  },
  "surfacePack": "soft-warm-elevated"
}
```

## Reference HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source%20Serif%204:wght@400;500;700&display=swap">
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,700&display=swap">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<style id="gesso-foundation">*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html,body{width: 393px;min-height: 852px;overflow-x:clip;max-width:100%;}body{font-family:var(--gesso-font-body,system-ui),sans-serif;color:var(--gesso-fg,#0a0a0a);background:var(--gesso-canvas,#ffffff);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.4;padding-top:44px;padding-bottom:88px;padding-left:16px;padding-right:16px;}img,svg{display:block;max-width:100%;}button{font:inherit;color:inherit;background:none;border:none;cursor:pointer;}a{color:inherit;text-decoration:none;}</style>
<style id="gesso-text-wrap">h1,h2,h3{text-wrap:balance}p,li,figcaption,blockquote{text-wrap:pretty}</style>
<style id="gesso-font-smoothing">html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
<style id="gesso-image-outline">img:not([data-illustration]):not([data-icon]):not([aria-hidden="true"]){outline:1px solid rgba(0,0,0,0.05);outline-offset:-1px}</style>
<style>/* gesso-icon-base v1 */
.ic { display: inline-block; width: 16px; height: 16px; vertical-align: -0.125em; flex-shrink: 0; line-height: 0; }
.ic svg { width: 100%; height: 100%; display: block; }
svg.ic { width: 16px; height: 16px; display: inline-block; vertical-align: -0.125em; flex-shrink: 0; }
.ic[data-icon-style="line"] { stroke-width: var(--ic-stroke, 2); }
.ic[data-icon-style="line"] svg path, .ic[data-icon-style="line"] svg circle, .ic[data-icon-style="line"] svg rect, .ic[data-icon-style="line"] svg line, .ic[data-icon-style="line"] svg polyline, .ic[data-icon-style="line"] svg polygon { stroke-width: inherit; }
.ic-sm { --ic-stroke: 2.25; }
.ic-xs { --ic-stroke: 2.5; }
svg.ic-lg, .ic-lg svg { width: 24px; height: 24px; }
svg.ic-xl, .ic-xl svg { width: 32px; height: 32px; }
svg.ic-2xl, .ic-2xl svg { width: 32px; height: 32px; }
.ic-lg { --ic-stroke: 1.75; }
.ic-xl { --ic-stroke: 1.5; }
.ic-2xl { --ic-stroke: 1.5; }
button { border: 0; background: transparent; padding: 0; font: inherit; color: inherit; cursor: pointer; -webkit-appearance: none; appearance: none; }
</style>

<style id="gesso-foundation-safe-area">body{padding-top:44px!important;padding-bottom:88px!important;}</style>
<!--gesso-fonts:start--><style id="gesso-font-lock">:root{--gesso-font-display:"Source Serif 4", system-ui, -apple-system, sans-serif !important;--gesso-font-body:"Switzer", system-ui, -apple-system, sans-serif !important;--gesso-font-mono:"Switzer", ui-monospace, "JetBrains Mono", monospace !important;}</style><!--gesso-fonts:end-->
</head>
<body data-brief-role="screen" data-brief-id="screen-root">

<meta name="x-visual-moves" content="Channeled the soft-gradient print-studio thesis by making the barcode preview itself the giant hero card: a warm peach-to-cream diagonal gradient panel holding an oversized, actual-scannable-looking barcode rendered as SVG bars, sitting on mock kraft packaging. Took the large-canvas-with-orbiting-controls scan path from Layout Ref 1 (canvas dominant, controls tucked to the edges) fused with the bottom input-drawer + segmented-type-selector rhythm from Layout Ref 2/3, restyled entirely into pill chips and soft-grey circular chevrons per the style contract, with the single orange accent reserved for the Generate CTA and the active tab only.">

<style>
:root {
  --gesso-canvas: #f2eee9;
  --gesso-surface: #ebe0d8;
  --gesso-surface-elevated: #e2d7cf;
  --gesso-surface-recessed: #e8e4e0;
  --gesso-fg: #1B1B1B;
  --gesso-fg-muted: #8A8782;
  --gesso-divider: rgba(0, 0, 0, 0.04);
  --gesso-accent: #FF5A2A;
  --gesso-accent-2: #e47800;
  --gesso-on-accent: #000000;
  --gesso-data-1: #982700;
  --gesso-data-2: #bd3300;
  --gesso-data-3: #e44000;
  --gesso-data-4: #ff5f32;
  --gesso-data-5: #ff9275;
  --gesso-data-6: #ffbba8;
  --gesso-success: #7a8f5c;
  --gesso-warning: #e47800;
  --gesso-error: #b23a2a;
  --gesso-primary: var(--gesso-accent);
  --gesso-secondary: var(--gesso-accent-2);
  --gesso-neutral-50: var(--gesso-canvas);
  --gesso-neutral-900: var(--gesso-fg);
  --gesso-font-display:"Source Serif 4", system-ui, -apple-system, sans-serif;
  --gesso-font-body:"Switzer", system-ui, -apple-system, sans-serif;
  --gesso-radius-sm: 8px;
  --gesso-radius-md: 16px;
  --gesso-radius-lg: 24px;
  --gesso-radius-full: 9999px;
  --gesso-shadow-sm: none;
  --gesso-shadow-md: none;
  --gesso-shadow-lg: 0 1px 2px rgba(0,0,0,0.04);
  --gesso-duration-fast: 150ms;
  --gesso-easing-default: ease-out;
  --gesso-on-image: #fff;
  --gesso-scrim: rgba(20,14,10,0.45);
}

html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

body {
  font-family: var(--gesso-font-body);
  background: var(--gesso-canvas);
  color: var(--gesso-fg);
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-image: radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1.2px);
  background-size: 18px 18px;
  background-position: 0 0;
}

h1, h2, h3, .display { font-family: var(--gesso-font-display); font-style: normal; }

.eyebrow { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gesso-fg-muted); font-weight: 500; }

.chevron-disc {
  display: inline-flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: var(--gesso-radius-full);
  background: var(--gesso-surface); color: var(--gesso-fg);
  transition: background var(--gesso-duration-fast) var(--gesso-easing-default), opacity var(--gesso-duration-fast) var(--gesso-easing-default);
  flex-shrink: 0;
}
.chevron-disc:hover { background: color-mix(in srgb, var(--gesso-surface) 92%, var(--gesso-fg) 8%); }
.chevron-disc:active { opacity: 0.85; }
.chevron-disc:focus-visible { outline: 2px solid var(--gesso-fg); outline-offset: 2px; }

.header-row { display: flex; align-items: center; justify-content: space-between; }
.brand-cluster { display: flex; align-items: center; gap: 12px; }
.brand-cluster .text-col { display: flex; flex-direction: column; text-align: left; }
.brand-cluster .label { font-size: 12px; color: var(--gesso-fg-muted); letter-spacing: 0.06em; text-transform: uppercase; }
.brand-cluster .name { font-size: 15px; font-weight: 600; color: var(--gesso-fg); }
.icon-badge {
  width: 40px; height: 40px; border-radius: var(--gesso-radius-md);
  background: linear-gradient(135deg, var(--gesso-accent), var(--gesso-accent-2));
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.icon-badge svg { width: 20px; height: 20px; color: #fff; }

.type-row { display: flex; gap: 8px; overflow-x: auto; scroll-padding-inline: 16px; }
.type-row::-webkit-scrollbar { display: none; }
.chip {
  display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;
  padding: 12px 16px; border-radius: var(--gesso-radius-full);
  background: color-mix(in srgb, var(--gesso-canvas) 92%, var(--gesso-fg) 8%);
  color: var(--gesso-fg-muted); font-size: 13px; font-weight: 500;
  transition: background var(--gesso-duration-fast) var(--gesso-easing-default), color var(--gesso-duration-fast) var(--gesso-easing-default);
}
.chip:hover { background: color-mix(in srgb, var(--gesso-canvas) 86%, var(--gesso-fg) 14%); }
.chip[aria-selected="true"] { background: var(--gesso-fg); color: var(--gesso-canvas); }
.chip:focus-visible { outline: 2px solid var(--gesso-fg); outline-offset: 2px; }

.preview-stage {position: relative; border-radius: var(--gesso-radius-lg); background: var(--gesso-surface, rgba(128,128,128,0.12)); padding: 32px 24px 28px; display: flex; flex-direction: column; align-items: center; gap: 16px; overflow: hidden}
.preview-stage::after {
  content: '';
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1.2px);
  background-size: 14px 14px;
  opacity: 0.5; pointer-events: none;
}
.pack-mock {
  position: relative; z-index: 1;
  width: 100%; aspect-ratio: 4/3;
  border-radius: var(--gesso-radius-md);
  overflow: hidden;
}
.pack-mock img { width: 100%; height: 100%; object-fit: cover; display: block; }
.pack-mock .scrim {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 40%, var(--gesso-scrim) 100%);
  pointer-events: none;
}
.barcode-sticker {
  position: absolute; left: 50%; bottom: 20px; transform: translateX(-50%);
  background: #fff;
  border-radius: var(--gesso-radius-sm);
  padding: 16px 16px 12px;
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  width: 78%;
}
.barcode-sticker svg { width: 100%; height: 56px; display: block; }
.barcode-sticker .code-text { font-family: var(--gesso-font-body); font-size: 11px; letter-spacing: 0.12em; color: #1B1B1B; }

.stage-meta { display: flex; align-items: center; justify-content: space-between; width: 100%; position: relative; z-index: 1; }
.stage-meta .format-pill {
  display: inline-flex; align-items: center; padding: 8px 16px;
  border-radius: var(--gesso-radius-full); background: rgba(255,255,255,0.6);
  color: var(--gesso-fg); font-size: 12px; font-weight: 500;
}

.input-card {
  background: var(--gesso-surface);
  border-radius: var(--gesso-radius-lg);
  padding: 20px;
  display: flex; flex-direction: column; gap: 16px;
}
.input-well {
  background: var(--gesso-surface-recessed);
  border-radius: var(--gesso-radius-md);
  padding: 16px;
  display: flex; align-items: center; gap: 12px;
}
.input-well input {
  flex: 1; border: none; background: transparent; outline: none;
  font-family: var(--gesso-font-body); font-size: 16px; color: var(--gesso-fg);
  min-width: 0;
}
.input-well input::placeholder { color: var(--gesso-fg-muted); }
.input-well svg { color: var(--gesso-fg-muted); flex-shrink: 0; }

.style-row { display: flex; align-items: center; justify-content: space-between; }
.style-row .label-col { display: flex; flex-direction: column; gap: 2px; }
.style-row .label-col .t { font-size: 14px; font-weight: 600; color: var(--gesso-fg); }
.style-row .label-col .s { font-size: 12px; color: var(--gesso-fg-muted); }
.swatch-group { display: flex; gap: 8px; }
.swatch {
  width: 28px; height: 28px; border-radius: var(--gesso-radius-full);
  transition: transform var(--gesso-duration-fast) var(--gesso-easing-default), opacity var(--gesso-duration-fast) var(--gesso-easing-default);
  position: relative;
}
.swatch:hover { transform: scale(1.08); }
.swatch:focus-visible { outline: 2px solid var(--gesso-fg); outline-offset: 2px; }
.swatch[aria-selected="true"]::after {
  content: ''; position: absolute; inset: -4px; border-radius: var(--gesso-radius-full);
  border: 1.5px solid var(--gesso-divider, rgba(0,0,0,0.06)); opacity: 0.7;
}

.size-slider-row { display: flex; align-items: center; gap: 12px; }
.size-slider-row .val { font-size: 13px; color: var(--gesso-fg-muted); font-variant-numeric: tabular-nums; width: 36px; text-align: right; }
.size-slider {
  flex: 1; -webkit-appearance: none; appearance: none;
  height: 4px; border-radius: var(--gesso-radius-full);
  background: color-mix(in srgb, var(--gesso-canvas) 80%, var(--gesso-fg) 20%);
  outline: none;
}
.size-slider::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 20px; height: 20px; border-radius: var(--gesso-radius-full);
  background: var(--gesso-fg); cursor: pointer;
  transition: transform var(--gesso-duration-fast) var(--gesso-easing-default);
}
.size-slider::-webkit-slider-thumb:hover { transform: scale(1.1); }

.cta-row { display: flex; gap: 12px; }
.btn-primary {
  flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
  background: var(--gesso-accent); color: var(--gesso-on-accent);
  border: none; padding: 16px 24px; border-radius: var(--gesso-radius-full);
  font-family: var(--gesso-font-body); font-size: 16px; font-weight: 600;
  transition: filter var(--gesso-duration-fast) var(--gesso-easing-default), transform 80ms ease-out;
}
.btn-primary:hover { filter: brightness(0.94); }
.btn-primary:active { transform: translateY(1px) scale(0.98); }
.btn-primary:focus-visible { outline: 2px solid var(--gesso-fg); outline-offset: 2px; }
.btn-ghost {
  display: flex; align-items: center; justify-content: center;
  width: 52px; height: 52px; border-radius: var(--gesso-radius-full);
  background: var(--gesso-surface); color: var(--gesso-fg);
  transition: background var(--gesso-duration-fast) var(--gesso-easing-default);
}
.btn-ghost:hover { background: color-mix(in srgb, var(--gesso-surface) 90%, var(--gesso-fg) 10%); }
.btn-ghost:active { opacity: 0.85; }
.btn-ghost:focus-visible { outline: 2px solid var(--gesso-fg); outline-offset: 2px; }

.section-head { display: flex; align-items: center; justify-content: space-between; }
.section-head .see-all { font-size: 13px; color: var(--gesso-fg-muted); display: flex; align-items: center; gap: 4px; }
.history-list { display: flex; flex-direction: column; }
.history-row {
  display: flex; align-items: center; gap: 12px; padding: 12px 0;
}
.history-row + .history-row { border-top: 1px solid var(--gesso-divider); }
.history-thumb {
  width: 44px; height: 44px; border-radius: var(--gesso-radius-sm);
  background: var(--gesso-surface-elevated);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.history-thumb svg { width: 24px; height: 18px; }
.history-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.history-text .t { font-size: 14px; font-weight: 600; color: var(--gesso-fg); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.history-text .m { font-size: 12px; color: var(--gesso-fg-muted); }
.history-row .tag-pill {
  font-size: 11px; padding: 4px 12px; border-radius: var(--gesso-radius-full);
  background: color-mix(in srgb, var(--gesso-canvas) 90%, var(--gesso-fg) 10%);
  color: var(--gesso-fg-muted); flex-shrink: 0;
}

.tab-bar {
  position: fixed; inset-inline: 0; bottom: 0; z-index: 100;
  background: color-mix(in srgb, var(--gesso-canvas) 90%, transparent);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  display: flex; padding: 12px 16px 28px;
}
.tab-item {
  flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px;
  color: var(--gesso-fg-muted);
  transition: color var(--gesso-duration-fast) var(--gesso-easing-default);
}
.tab-item svg { width: 22px; height: 22px; }
.tab-item span { font-size: 11px; font-weight: 500; }
.tab-item[aria-current="true"] { color: var(--gesso-accent); }
.tab-item:focus-visible { outline: 2px solid var(--gesso-fg); outline-offset: 2px; }

body { padding-bottom: 96px; }
</style>

<meta name="x-tab-bar" content="fixed-bottom">

<div class="header-row" data-brief-id="header" data-brief-role="header">
  <div class="brand-cluster">
    <div class="icon-badge"><svg data-icon="lucide/scan-line" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic" style="max-width:32px;max-height:32px"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10"></path></svg></div>
    <div class="text-col">
      <span class="label">Print Studio</span>
      <span class="name">Generator</span>
    </div>
  </div>
  <section data-component="Button" data-brief-id="auto-button-9" data-brief-role="button" data-gesso-marker-wrap style="display: contents"><button class="chevron-disc" aria-label="History"><svg data-icon="lucide/clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic ic-sm" style="max-width:32px;max-height:32px"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></g></svg></button></section>
</div>

<div class="type-row" role="tablist" aria-label="Barcode type" data-brief-id="type-selector" data-brief-role="segmented">
  <section data-component="Button" data-brief-id="auto-button-8" data-brief-role="button" data-gesso-marker-wrap style="display: contents"><button class="chip" role="tab" aria-selected="true"><svg data-icon="lucide/barcode" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic ic-xs" style="max-width:32px;max-height:32px"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5v14M8 5v14m4-14v14m5-14v14m4-14v14"></path></svg>Code 128</button></section>
  <section data-component="Button" data-brief-id="auto-button-7" data-brief-role="button" data-gesso-marker-wrap style="display: contents"><button class="chip" role="tab" aria-selected="false">QR Code</button></section>
  <section data-component="Button" data-brief-id="auto-button-6" data-brief-role="button" data-gesso-marker-wrap style="display: contents"><button class="chip" role="tab" aria-selected="false">EAN-13</button></section>
  <section data-component="Button" data-brief-id="auto-button-5" data-brief-role="button" data-gesso-marker-wrap style="display: contents"><button class="chip" role="tab" aria-selected="false">UPC-A</button></section>
  <section data-component="Button" data-brief-id="auto-button-4" data-brief-role="button" data-gesso-marker-wrap style="display: contents"><button class="chip" role="tab" aria-selected="false">Data Matrix</button></section>
</div>

<section class="preview-stage" data-component="PreviewCanvas" data-brief-id="preview-canvas" data-brief-role="hero" data-moment="barcode-on-package">
  <div class="pack-mock">
    <img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/16c56dee-5e12-4ef8-ae50-80311344b489/498fdecd5c9d.jpg" alt="Kraft paper box mockup" data-stock-provider="pexels" data-stock-page="https://www.pexels.com/photo/brown-cardboard-box-on-white-table-9594423/" data-stock-photographer="Ron Lach" />
    <div class="scrim"></div>
    <div class="barcode-sticker">
      <svg viewBox="0 0 220 56" preserveAspectRatio="none" aria-hidden="true">
        <rect x="0" y="0" width="220" height="56" fill="#ffffff"></rect>
        <g fill="#1B1B1B">
          <rect x="4" y="4" width="3" height="44"></rect>
          <rect x="9" y="4" width="1" height="44"></rect>
          <rect x="13" y="4" width="2" height="44"></rect>
          <rect x="18" y="4" width="4" height="44"></rect>
          <rect x="25" y="4" width="1" height="44"></rect>
          <rect x="29" y="4" width="3" height="44"></rect>
          <rect x="35" y="4" width="1" height="44"></rect>
          <rect x="39" y="4" width="2" height="44"></rect>
          <rect x="44" y="4" width="4" height="44"></rect>
          <rect x="51" y="4" width="1" height="44"></rect>
          <rect x="55" y="4" width="2" height="44"></rect>
          <rect x="60" y="4" width="3" height="44"></rect>
          <rect x="66" y="4" width="1" height="44"></rect>
          <rect x="70" y="4" width="4" height="44"></rect>
          <rect x="77" y="4" width="2" height="44"></rect>
          <rect x="82" y="4" width="1" height="44"></rect>
          <rect x="86" y="4" width="3" height="44"></rect>
          <rect x="92" y="4" width="1" height="44"></rect>
          <rect x="96" y="4" width="2" height="44"></rect>
          <rect x="101" y="4" width="4" height="44"></rect>
          <rect x="108" y="4" width="1" height="44"></rect>
          <rect x="112" y="4" width="3" height="44"></rect>
          <rect x="118" y="4" width="2" height="44"></rect>
          <rect x="123" y="4" width="1" height="44"></rect>
          <rect x="127" y="4" width="4" height="44"></rect>
          <rect x="134" y="4" width="1" height="44"></rect>
          <rect x="138" y="4" width="2" height="44"></rect>
          <rect x="143" y="4" width="3" height="44"></rect>
          <rect x="149" y="4" width="1" height="44"></rect>
          <rect x="153" y="4" width="4" height="44"></rect>
          <rect x="160" y="4" width="2" height="44"></rect>
          <rect x="165" y="4" width="1" height="44"></rect>
          <rect x="169" y="4" width="3" height="44"></rect>
          <rect x="175" y="4" width="1" height="44"></rect>
          <rect x="179" y="4" width="2" height="44"></rect>
          <rect x="184" y="4" width="4" height="44"></rect>
          <rect x="191" y="4" width="1" height="44"></rect>
          <rect x="195" y="4" width="3" height="44"></rect>
          <rect x="201" y="4" width="2" height="44"></rect>
          <rect x="206" y="4" width="1" height="44"></rect>
          <rect x="210" y="4" width="3" height="44"></rect>
          <rect x="215" y="4" width="2" height="44"></rect>
        </g>
      </svg>
      <span class="code-text">8 41.7K 93K 4</span>
    </div>
  </div>
  <div class="stage-meta">
    <span class="format-pill">Code 128 · 100%</span>
    <button class="chevron-disc" aria-label="Full preview"><svg data-icon="lucide/maximize-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic ic-sm" style="max-width:32px;max-height:32px"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6"></path></svg></button>
  </div>
</section>

<section class="input-card" data-component="InputPanel" data-brief-id="content-input" data-brief-role="form">
  <div class="input-well">
    
    <input type="text" value="841725930174" placeholder="Enter data to encode" >
    <button class="chevron-disc" aria-label="Scan to fill"></button>
  </div>

  <div class="style-row">
    <div class="label-col">
      <span class="t">Bar color</span>
      <span class="s">Applies to preview + export</span>
    </div>
    <div class="swatch-group">
      <button class="swatch" style="background:#1B1B1B; color: inherit" aria-selected="true" aria-label="Ink"></button>
      <button class="swatch" style="background:#982700; color: inherit" aria-selected="false" aria-label="Rust"></button>
      <button class="swatch" style="background:#8A8782; color: inherit" aria-selected="false" aria-label="Grey"></button>
      <button class="swatch" style="background:#e47800; color: inherit" aria-selected="false" aria-label="Amber"></button>
    </div>
  </div>

  <div class="style-row">
    <div class="label-col">
      <span class="t">Size</span>
      <span class="s">Sticker width</span>
    </div>
    <div class="size-slider-row" style="flex:1; margin-left:24px;">
      <input type="range" class="size-slider" min="20" max="100" value="78" style="color: inherit">
      <span class="val">78%</span>
    </div>
  </div>
</section>

<div class="cta-row" data-brief-id="actions" data-brief-role="cta">
  <section data-component="Button" data-brief-id="auto-button-3" data-brief-role="button" data-gesso-marker-wrap style="display: contents"><button class="btn-primary"><svg data-icon="lucide/sparkles" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic ic-sm" style="max-width:32px;max-height:32px"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>Generate</button></section>
  <section data-component="Button" data-brief-id="auto-button-2" data-brief-role="button" data-gesso-marker-wrap style="display: contents"><button class="btn-ghost" aria-label="Share"><svg data-icon="lucide/share-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic ic-sm" style="max-width:32px;max-height:32px"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></path></g></svg></button></section>
  <section data-component="Button" data-brief-id="auto-button-1" data-brief-role="button" data-gesso-marker-wrap style="display: contents"><button class="btn-ghost" aria-label="Save"><svg data-icon="lucide/bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic ic-sm" style="max-width:32px;max-height:32px"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path></svg></button></section>
</div>

<section data-brief-id="recent-history" data-brief-role="list">
  <div class="section-head">
    <h2 class="display" style="font-size:20px; line-height:24px; margin:0;">Recent</h2>
    <span class="see-all">See all<svg data-icon="lucide/chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic ic-xs" style="max-width:32px;max-height:32px"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9 18l6-6l-6-6"></path></svg></span>
  </div>
  <div class="history-list">
    <div class="history-row" data-brief-role="list-item">
      <div class="history-thumb"><svg data-icon="lucide/barcode" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic ic-sm" style="max-width:32px;max-height:32px"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5v14M8 5v14m4-14v14m5-14v14m4-14v14"></path></svg></div>
      <div class="history-text">
        <span class="t">Roasted Batch — Dark</span>
        <span class="m">Code 128 · 2h ago</span>
      </div>
      <span class="tag-pill">Package</span>
    </div>
    <div class="history-row" data-brief-role="list-item">
      <div class="history-thumb"><svg data-icon="lucide/qr-code" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic ic-sm" style="max-width:32px;max-height:32px"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"></rect><rect width="5" height="5" x="16" y="3" rx="1"></rect><rect width="5" height="5" x="3" y="16" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1"></path></g></svg></div>
      <div class="history-text">
        <span class="t">Studio Portfolio Link</span>
        <span class="m">QR Code · Yesterday</span>
      </div>
      <span class="tag-pill">Print</span>
    </div>
    <div class="history-row" data-brief-role="list-item">
      <div class="history-thumb"><svg data-icon="lucide/barcode" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic ic-sm" style="max-width:32px;max-height:32px"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5v14M8 5v14m4-14v14m5-14v14m4-14v14"></path></svg></div>
      <div class="history-text">
        <span class="t">Candle Jar — Amber 9oz</span>
        <span class="m">UPC-A · Mon</span>
      </div>
      <span class="tag-pill">Label</span>
    </div>
  </div>
</section>

<nav class="tab-bar" data-brief-id="tab-bar" data-brief-role="tab-bar">
  <a class="tab-item" aria-current="true"><svg data-icon="lucide/scan-line" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic" style="max-width:32px;max-height:32px"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10"></path></svg><span style="color:inherit!important">Generate</span></a>
  <a class="tab-item" aria-current="false"><svg data-icon="lucide/layout-grid" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic" style="max-width:32px;max-height:32px"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></g></svg><span style="color:inherit!important">Templates</span></a>
  <a class="tab-item" aria-current="false"><svg data-icon="lucide/clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic" style="max-width:32px;max-height:32px"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></g></svg><span style="color:inherit!important">History</span></a>
  <a class="tab-item" aria-current="false"><svg data-icon="lucide/user" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic" style="max-width:32px;max-height:32px"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg><span style="color:inherit!important">Account</span></a>
</nav>
</body></html>
```

Use the tokens as CSS variables. Treat the reference HTML as the visual
source of truth; adapt structure to your framework, but do not deviate
from the visual system.
