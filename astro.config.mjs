// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { lastUpdated } from './src/data/last-updated.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://victorlh.com',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap({ lastmod: lastUpdated })],
  // Emitted by the Vercel adapter as a real 301, avoiding a duplicate of the home page
  redirects: {
    '/index.html': '/',
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-bricolage',
      weights: ['400 700'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: ['400 600'],
      subsets: ['latin'],
      fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      weights: [400, 500],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
