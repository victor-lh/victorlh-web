import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const svg = readFileSync(join(publicDir, 'favicon.svg'));

// PNG fallback for browsers/crawlers without SVG favicon support
await sharp(svg, { density: 72 }).resize(48, 48).png().toFile(join(publicDir, 'favicon-48.png'));

// iOS ignores SVG touch icons and renders transparency as black: flatten over the page bg
await sharp(svg, { density: 72 })
  .resize(160, 160)
  .extend({ top: 10, bottom: 10, left: 10, right: 10, background: '#F1F2F4' })
  .flatten({ background: '#F1F2F4' })
  .png()
  .toFile(join(publicDir, 'apple-touch-icon.png'));

console.log(`✓ favicon-48.png and apple-touch-icon.png generated in ${publicDir}`);
