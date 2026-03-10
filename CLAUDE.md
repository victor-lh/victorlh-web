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
- `src/content/experience/*.md` — Work experience entries, validated by Zod schema in `src/content/config.ts`. Fields: `company`, `role`, `period`, `current`, `description`, `tags`, `sector?`, `order`.
- `src/data/stack.ts` — Tech stack array typed as `Tech[]` with `name`, `level` (`expert | advanced | intermediate`), `category` (`backend | infra | mobile | db`).
- Both are consumed by section components (`Experience.astro`, `Stack.astro`) via Astro's `getCollection()` and direct import.

**Styling:**
- Tailwind CSS v3 via PostCSS (no `@astrojs/tailwind`). Config in `postcss.config.mjs` and `tailwind.config.mjs`.
- Design tokens defined as CSS custom properties in `src/styles/global.css` and mapped to Tailwind color/font utilities in `tailwind.config.mjs`. Always use semantic tokens (`bg`, `ink`, `ink-soft`, `accent`, `line`, `white`) instead of raw Tailwind colors.
- Animations (`fadeUp`, `scrollPulse`) and the `.reveal` / `.reveal.visible` pattern are defined in `global.css`. The reveal-on-scroll IntersectionObserver is bootstrapped in `BaseLayout.astro`'s inline `<script>`.

**Layout:**
- `BaseLayout.astro` wraps every page. It accepts `title`, `description`, and optional `canonicalUrl` props and handles all `<head>` SEO/OG tags and Google Fonts loading.
- Nav scroll behavior is handled by an inline `<script>` inside `Header.astro`.

## Key conventions

- Package manager: **pnpm** only.
- TypeScript strict mode is on.
- Prettier: single quotes, semi, 2-space indent, trailing commas, 100-char line width.
- No framework integrations beyond Astro itself — keep JS to inline `<script>` blocks in `.astro` files.
