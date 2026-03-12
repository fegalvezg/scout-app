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

Single-page Next.js 14 app (App Router) with all UI logic in client components. Spanish-language product comparison site targeting Chilean market (prices in CLP, stores are Chilean retailers).

**Data flow:**
- `data/products.js` exports `DATA` — the entire product database, assembled from per-category modules
- `data/componentespc.js` and `data/camaras.js` are imported into `products.js` (categories are split into separate files as they grow)
- `data/groups.js` exports `GROUPS` — defines the 5 thematic sections shown on the home screen (Computación, Móvil, Imagen y Sonido, Accesorios, Herramientas), each listing which category keys it contains
- `app/page.js` imports `SkautApp` from `components/ScoutApp.jsx` (note: file is named Scout but exports Skaut)
- `components/ScoutApp.jsx` is a `"use client"` component that holds all state and renders every view
- `components/PCBuilder.jsx` is a `"use client"` component for the PC building wizard (used when a category has `isBuilderFlow: true`)

**Navigation model (3-step wizard):**
1. `step=0` — Home screen: category cards grouped by `GROUPS` sections
2. `step=1` — Subcategory grid (`DATA[cat].subcategories`)
3. `step=2` — Product comparison: two cards (`entry` vs `balanced`) + optional `proRef` row

A `ProductDetail` modal overlays any step when `detail` state is set.

**Special flow — PC Builder (`isBuilderFlow: true`):**
Categories like `componentespc` use a different structure. Instead of subcategories with products, they have a `components` object keyed by part type (cpu, motherboard, ram, gpu, psu, case, cooler, storage). Each component has `options` (e.g., Intel vs AMD) containing `entry`/`balanced`/`proRef` products plus compatibility metadata (`socket`, `ramTypes`). `PCBuilder.jsx` handles this with two modes: "Build" (guided step-by-step) and "Find" (pick a single component with dependency questions).

**Product tiers per subcategory:**
- `entry` — Budget pick ("Bueno, Bonito y Barato", green `#16A34A`)
- `balanced` — Sweet spot ("El Recomendado", blue `#2563EB`)
- `proRef` (optional) — Best in world anchor ("Referencia Pro", orange `#EA580C`)

**Styling approach:** Tailwind is installed but both `ScoutApp.jsx` and `PCBuilder.jsx` use inline styles almost exclusively via the `C` color constants object defined at the top of each file. Fonts are Space Grotesk (display) and JetBrains Mono (mono), loaded via Google Fonts in `globals.css`.

**Recharts** is used for radar charts (`RadarChart`) displaying 7-axis product scores.

## Adding/editing products

Product data lives in `data/products.js` (or in separate files imported by it). Each subcategory needs:
- `axes` — array of 7 strings (radar chart dimensions)
- `entry` and `balanced` — product objects with `name`, `brand`, `price`, `oneLiner`, `why`, `scores` (keyed by axes), `specs`, `pros`, `cons`, `stores`
- `proRef` — optional, same structure as above

For PC components (`componentespc.js`), the structure nests under `components.<type>.options.<variant>` instead, and each option includes compatibility fields (`socket`, `ramTypes`, etc.).

To add a new category to the home screen, add its key to the appropriate group in `data/groups.js`.

Store `url` fields currently use `"#"` as placeholders for affiliate links.

## Brand note

The app is branded **SKAUT** (not Scout). The component file is `ScoutApp.jsx` (legacy name) but exports `SkautApp`. SEO metadata targets `skaut.cl`.
