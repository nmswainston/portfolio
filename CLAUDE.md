# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Production build → dist/, then scripts/prerender.js bakes per-route meta into static HTML
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run screenshots  # Capture project screenshots via Puppeteer (scripts/capture-screenshots.js)
npm run optimize-images  # Convert captured PNGs to 1200px WebP and delete the PNGs (scripts/optimize-images.js)
npm run og-image     # Regenerate public/og-image.png social preview (scripts/generate-og-image.js)
npm run push         # Run scripts/push.ps1 (PowerShell deploy helper)
```

No test suite is configured.

## Architecture

**Stack**: React 19 + Vite + Tailwind CSS v4 + React Router v7. Deployed to Netlify with a catch-all SPA redirect (`netlify.toml`).

**Tailwind v4** is loaded via `@tailwindcss/vite` (not the traditional PostCSS plugin). The `vite.config.js` imports and registers it directly — there is no `tailwind.config.js`.

### Routing

Three routes defined in `App.jsx`:
- `/` → `HomePage` (renders `WorkShowcase`, `HowIWork`, `SkillsFocus`, `About`, `WhatLookingFor`, `Contact` in sequence)
- `/work` → `AllWork`
- `/work/:slug` → `ProjectDetail`

### SEO and page meta

Every routed page calls `usePageMeta` (`src/usePageMeta.js`) to keep title, description, canonical, and og/twitter meta in sync during client-side navigation. `scripts/prerender.js` (runs automatically as part of `npm run build`) writes per-route copies of `dist/index.html` with the same meta baked in for crawlers that don't execute JavaScript. It extracts `slug`, `title`, and `description` from `projectsData.js` with a regex, so keep those fields in that order within each project entry. When adding a route, wire it into both.

`/resume.pdf` is kept out of search results via an `X-Robots-Tag: noindex` header in `netlify.toml` (not robots.txt `Disallow`, which would block crawlers from ever seeing the header).

### Project data

**`src/sections/projectsData.js`** is the single source of truth for all projects. Each entry has:
- `slug` — URL key for `/work/:slug`
- `featured: true/false` — controls whether it appears on the homepage (`WorkShowcase` shows the first 3 `featured` projects in order)
- `goal`, `process`, `result` — rendered as case study sections in `ProjectDetail` only; home and `/work` cards show just `description` and tags as a teaser
- `liveUrl` — external live link shown on cards
- `repoUrl` — public GitHub repo, rendered as "View repository" on the case study page
- `link` — legacy alias for `liveUrl`, kept for backward compatibility
- `image` — imported asset (`.webp`, max 1200px wide, single extension; Vite import requirement noted in the file)

To add a project: add an entry to `projectsData.js`, add its URL to `scripts/capture-screenshots.js`, then run `npm run screenshots` followed by `npm run optimize-images`.

### Styling conventions

`src/index.css` defines the global design system:

- **Theme**: two themes (`light` / `dark`) via `data-theme` attribute on `:root`. CSS variables `--bg`, `--fg`, `--card`, `--line`, `--accent`, `--muted`, `--shadow` are redefined per theme. `ThemeToggle.jsx` handles toggling.
- **Utility classes** in `index.css`: `.container`, `.card`, `.btn`, `.btn-ghost`, `.tag`, `.hint`, `.copy`, `.link-text`, `.work-tile`, `.section`, `.layout-grid`, `.case-study-*` (full case study layout). Use these alongside Tailwind utilities.
- **Section spacing**: `.section` + `.section + .section` margin system using `--section-gap` / `--section-gap-mobile` vars — don't override with ad-hoc margins.
- Tailwind CSS variables are referenced with `(--var)` syntax in JSX (e.g., `bg-(--accent)`), not with `var(--var)`.

### Component roles

- `CaseStudyLayout.jsx` — wraps case study pages; handles hero, prev/next navigation, back link, and live URL CTA. Pass the full `project` object.
- `CaseStudySection.jsx` — renders a single titled section (`goal`/`process`/`result`) within a case study.
- `DeviceMockup.jsx` — renders a laptop or phone frame around a project screenshot. Takes `type`, `image`, `alt`, and `eager` (set for above-the-fold mockups so the LCP image isn't lazy-loaded).
- `ProjectCard.jsx` — shared card body for project listings on the homepage and `/work`. Takes `project`, `index` (side alternation), `headingLevel`, `label`, `eager`. The caller owns the `<article>` wrapper.
- `SocialIcons.jsx` — shared `GitHubIcon` / `LinkedInIcon` glyphs used by `Header` and `Contact`.
- `RevealOnScroll.jsx` — global scroll-reveal engine mounted once in `App`. Add `data-reveal` to any element to fade/rise it into view on first intersection; stagger sibling groups by also setting `style={{ "--reveal-step": n }}` (80ms per step, computed in CSS via calc). The hero entrance uses the same pattern with `.hero-rise` + `--rise-step` (70ms per step). Content stays visible without JS (hiding is gated on a `js-reveal` class) and the whole system is skipped for `prefers-reduced-motion`. Don't combine `data-reveal` or `.hero-rise` with elements that have their own hover `transform` (e.g. `.work-card`) — the forwards-filling animation overrides hover transforms; put the entrance on a wrapper instead.
- `Card.jsx` — generic card with optional `title` and `actions`.
- `Section.jsx` — thin wrapper that applies `.section .container` classes.
