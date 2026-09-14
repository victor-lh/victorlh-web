# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at http://localhost:4321
pnpm build      # Build to ./dist/ (also generates .vercel/output/static)
pnpm preview    # Preview the production build locally
```

No test suite is configured. No lint script is defined in package.json — run ESLint directly if needed:

```bash
npx eslint src/
npx prettier --write src/
```

## Architecture

Single-page personal portfolio. All content is statically generated via Astro.

**Data flow:**
- `src/content/experience/*.md` — Work experience entries, loaded with the `glob()` loader and validated by Zod schema in `src/content.config.ts`. Fields: `company`, `role`, `period`, `current`, `description`, `tags`, `sector?`, `order`.
- `src/data/stack.ts` — Tech stack array typed as `Tech[]` with `name`, `level` (`expert | advanced | intermediate`), `category` (`backend | infra | mobile | db`).
- Both are consumed by section components (`Experience.astro`, `Stack.astro`) via Astro's `getCollection()` and direct import.

**Styling:**
- Tailwind CSS v4 via the `@tailwindcss/vite` plugin registered in `astro.config.mjs` (no `@astrojs/tailwind`, no PostCSS config). `global.css` does `@import 'tailwindcss'` and loads the legacy JS config with `@config '../../tailwind.config.mjs'`.
- Design tokens defined as CSS custom properties in `src/styles/global.css` and mapped to Tailwind color/font utilities in `tailwind.config.mjs`. Always use semantic tokens (`bg`, `ink`, `ink-soft`, `accent`, `line`, `white`) instead of raw Tailwind colors.
- Light theme only (cool neutrals + single rust accent). Fonts: Bricolage Grotesque (display), Geist (body), Geist Mono (data), self-hosted with the Astro Fonts API: families declared in `astro.config.mjs` (`--font-bricolage`, `--font-geist`, `--font-geist-mono`), emitted by `<Font />` in `BaseLayout.astro`, and aliased to `--font-display` / `--font-sans` / `--font-mono` in `theme.css`.
- Shared primitives in `global.css`: `.container`, `.section`, `.section-title`, `.sr-only`, `.skip-link`, grain overlay on `body::after`.
- Animations: `fadeUp` + `.intro` (hero load-in, stagger via inline `--i`), and the `.reveal` / `.reveal.visible` pattern, all disabled under `prefers-reduced-motion`. The reveal-on-scroll IntersectionObserver is bootstrapped in `BaseLayout.astro`'s inline `<script>`.
- No `window` scroll listeners: nav state and active-link highlighting use IntersectionObserver.

**Layout:**
- `BaseLayout.astro` wraps every page. It accepts `title`, `description`, optional `canonicalUrl` and `noindex` props (`noindex` emits `robots: noindex` instead of a canonical, used by `404.astro`) and handles all `<head>` SEO/OG tags, JSON-LD (`WebSite` + `Person`) and font loading.
- Favicon PNG fallbacks (`favicon-48.png`, `apple-touch-icon.png`) are generated from `public/favicon.svg` with `pnpm icons`.
- Nav scroll behavior is handled by an inline `<script>` inside `Header.astro`.

## Key conventions

- Package manager: **pnpm** only.
- TypeScript strict mode is on.
- Prettier: single quotes, semi, 2-space indent, trailing commas, 100-char line width.
- No framework integrations beyond Astro itself — keep JS to inline `<script>` blocks in `.astro` files.
