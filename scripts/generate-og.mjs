import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'public', 'og-image.png');

mkdirSync(join(__dirname, '..', 'public'), { recursive: true });

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#F8F7F5"/>

  <!-- Left accent bar -->
  <rect x="72" y="160" width="5" height="200" fill="#C8A96E"/>

  <!-- Main name -->
  <text x="100" y="265" font-family="Georgia, serif" font-size="68" font-weight="700" fill="#1A1714" letter-spacing="-1">Víctor Latorre</text>

  <!-- Subtitle -->
  <text x="102" y="325" font-family="Arial, sans-serif" font-size="32" font-weight="400" fill="#6B6560">Backend Engineer</text>

  <!-- Domain -->
  <text x="102" y="560" font-family="Courier New, monospace" font-size="20" fill="#6B6560" letter-spacing="2">victorlh.com</text>

  <!-- Decorative line -->
  <line x1="100" y1="380" x2="400" y2="380" stroke="#DDD8D0" stroke-width="1"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(outPath);

console.log(`✓ og-image.png generated at ${outPath}`);
