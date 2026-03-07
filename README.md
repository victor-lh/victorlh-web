# victorlh.com — Portfolio Personal

Portfolio personal de Víctor Latorre Herreros, Backend Engineer. Construido con Astro, Tailwind CSS v3 y TypeScript.

## Stack

- **Astro 5.x** — Static site generation
- **Tailwind CSS v3** — Utility-first styling con tokens de diseño personalizados
- **TypeScript** — Strict mode
- **Content Collections** — Experiencia laboral en Markdown
- **Vercel** — Despliegue estático

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Abre `http://localhost:4321` en el navegador.

## Build

```bash
pnpm build
```

La salida se genera en `./dist/`.

## Preview local

```bash
pnpm preview
```

## Estructura

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, Experience, Stack
│   └── ui/           # Button, Chip, Badge
├── content/
│   └── experience/   # Ficheros .md de experiencia laboral
├── data/
│   └── stack.ts      # Stack tecnológico tipado
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```
