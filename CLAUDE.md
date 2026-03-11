# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run Next.js ESLint
```

No test suite is configured.

## Architecture

Single-page Next.js 14 app (App Router) with all UI logic in one client component.

**Data flow:**
- `data/products.js` exports `DATA` — the entire product database as a JS object
- `app/page.js` imports `SkautApp` from `components/ScoutApp.jsx` (note: file is named Scout but exports Skaut)
- `components/ScoutApp.jsx` is a `"use client"` component that holds all state and renders every view

**Navigation model (3-step wizard):**
1. `step=0` — Category grid (from `Object.keys(DATA)`)
2. `step=1` — Subcategory grid (`DATA[cat].subcategories`)
3. `step=2` — Product comparison: two cards (`entry` vs `balanced`) + optional `proRef` row

A `ProductDetail` modal overlays any step when `detail` state is set.

**Product tiers per subcategory:**
- `entry` — Budget pick ("Bueno, Bonito y Barato", green `#16A34A`)
- `balanced` — Sweet spot ("El Recomendado", blue `#2563EB`)
- `proRef` (optional) — Best in world anchor ("Referencia Pro", orange `#EA580C`)

**Styling approach:** Tailwind is installed but `ScoutApp.jsx` uses inline styles almost exclusively via the `C` color constants object defined at the top of the file. Fonts are Space Grotesk (display) and JetBrains Mono (mono), loaded via Google Fonts in `globals.css`.

**Recharts** is used for radar charts (`RadarChart`) displaying 7-axis product scores.

## Adding/editing products

All content lives in `data/products.js`. Each subcategory needs:
- `axes` — array of 7 strings (radar chart dimensions)
- `entry` and `balanced` — product objects with `name`, `brand`, `price`, `oneLiner`, `why`, `scores` (keyed by axes), `specs`, `pros`, `cons`, `stores`
- `proRef` — optional, same structure as above

Store `url` fields currently use `"#"` as placeholders for affiliate links.

## Brand note

The app is branded **SKAUT** (not Scout). The component file is `ScoutApp.jsx` (legacy name) but exports `SkautApp`. SEO metadata targets `skaut.cl`.
