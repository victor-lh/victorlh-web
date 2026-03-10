# victorlh.com

Personal portfolio and CV website for **Víctor Latorre**, Backend Engineer.

**Live → [victorlh.com](https://victorlh.com)**

---

## Built with

| Technology | Role |
|---|---|
| [Astro 5](https://astro.build) | Static site generation |
| [Tailwind CSS v3](https://tailwindcss.com) | Styling via PostCSS (no framework integration) |
| TypeScript (strict) | Type safety across components and data |
| [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) | Work experience in Markdown + Zod validation |
| [Vercel](https://vercel.com) | Static deployment |

---

## Features

- **Zero client-side JS framework** — pure Astro with minimal inline scripts
- **Content-driven** — experience entries are Markdown files validated by Zod schema
- **SEO-complete** — JSON-LD Person schema, Open Graph, Twitter Cards, sitemap, canonical URLs
- **Design tokens** — consistent palette via CSS custom properties mapped to Tailwind utilities
- **Reveal animations** — scroll-triggered via IntersectionObserver
- **Responsive** — mobile-first layout

---

## Project structure

```
src/
├── components/
│   ├── layout/       # Header.astro, Footer.astro
│   ├── sections/     # Hero.astro, Experience.astro, Stack.astro
│   └── ui/           # Button.astro, Chip.astro, Badge.astro
├── content/
│   ├── config.ts     # Zod schema for experience collection
│   └── experience/   # One .md per job (company, role, period, tags…)
├── data/
│   ├── site.ts       # Shared metadata (name, URL, socials)
│   └── stack.ts      # Tech stack array (name, level, category)
├── layouts/
│   └── BaseLayout.astro   # <head>, SEO tags, JSON-LD, fonts
├── pages/
│   ├── index.astro   # Single page (Hero, About, Stack, Experience, Contact)
│   └── 404.astro
└── styles/
    └── global.css    # CSS vars, @tailwind directives, animations
```

---

## Getting started

**Prerequisites:** Node.js ≥ 18, [pnpm](https://pnpm.io)

```bash
# Install dependencies
pnpm install

# Start dev server at http://localhost:4321
pnpm dev

# Production build → ./dist/
pnpm build

# Preview the production build locally
pnpm preview

# Generate OG image (public/og-image.png)
pnpm og
```

---

## Customisation

### Adding a job

Create `src/content/experience/<slug>.md`:

```markdown
---
company: Acme Corp
role: Senior Backend Engineer
period: 2023 – present
current: true
description: What you did there.
tags: [Java, Spring Boot, Kubernetes]
sector: Fintech
order: 1
---
```

### Updating the tech stack

Edit `src/data/stack.ts` — each entry has `name`, `level` (`expert | advanced | intermediate`), and `category` (`backend | infra | mobile | db`).

### Changing site metadata

Edit `src/data/site.ts` — this is the single source of truth for name, URL, email, and social links. BaseLayout reads it for JSON-LD and meta tags.

---

## Design system

CSS custom properties defined in `global.css`, exposed as Tailwind utilities via `tailwind.config.mjs`:

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#F5F2ED` | Page background |
| `--ink` | `#1A1714` | Primary text |
| `--ink-soft` | `#6B6560` | Secondary text |
| `--accent` | `#C8A96E` | Highlights, labels |
| `--line` | `#DDD8D0` | Borders, dividers |
| `--white` | `#FDFCFA` | Card / section backgrounds |

Fonts: **Outfit** (300/400/500) + **Space Mono** — loaded from Google Fonts.

---

## License

The source code is open source under the [MIT License](LICENSE).
Content (texts, CV data, images) is © Víctor Latorre — all rights reserved.
