# Three.js Knowledge Learning Library

A learning-focused React + TypeScript website that distills Three.js concepts into concise docs, step-by-step tutorials, and example galleries. Built with Vite and Tailwind for fast iteration and responsive UI.

## Purpose
Help developers new to Three.js move from fundamentals to working demos with a single, structured learning experience.

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- three.js (mocked demo canvas)
- pnpm for package management

## Getting Started
1. Install dependencies
   ```bash
   pnpm install
   ```
2. Run the dev server
   ```bash
   pnpm dev
   ```
3. Build for production
   ```bash
   pnpm build
   ```
4. Preview the production build
   ```bash
   pnpm preview
   ```

## Project Structure
- `src/App.tsx` — Routing + layout
- `src/main.tsx` — App entry
- `src/index.css` — Global styles + Tailwind setup
- `src/components/` — Reusable UI pieces (cards, layout, hero)
- `src/pages/` — Page-level views (home, docs, tutorials, examples, basics)
- `src/data/` — Mock data powering the UI
- `src/types/` — Shared TypeScript types
- `src/hooks/` — Custom hooks
- `src/utils/` — Utility helpers
- `src/three/` — Lightweight Three.js demo setup

## Key Features
- Home landing with hero, entry points, and learning paths
- Documentation page with concept list, sidebar, and search
- Tutorials page with difficulty filter and step lists
- Examples gallery with tag filter + detail page (canvas placeholder + code)
- 3D Basics page with explanatory content and diagrams placeholders
- Responsive layout and mobile nav; accessible labels on inputs/buttons

## Exploring Content
- Docs: use the sidebar to jump between core concepts; search to filter
- Tutorials: filter by difficulty and search through steps
- Examples: filter by tags, then click a card to see the detail page with demo placeholder and snippet

## Known Limitations
- Thumbnails are placeholders; replace `/thumbnails/*.png` with real assets
- Three.js canvas is a minimal demo (no orbit controls); extend per needs
- No backend or persistence; all data is static in `src/data`
