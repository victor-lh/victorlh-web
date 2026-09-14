import { execSync } from 'node:child_process';

// Date of the last commit that touched site content, used for sitemap `lastmod` and
// ProfilePage `dateModified`. Falls back to build time when git history is unavailable.
const CONTENT_PATHS = ['src/content', 'src/data', 'src/pages', 'src/components'];

function resolveLastUpdated(): Date {
  try {
    const iso = execSync(`git log -1 --format=%cI -- ${CONTENT_PATHS.join(' ')}`, {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    // git not available (e.g. build without .git directory)
  }
  return new Date();
}

export const lastUpdated = resolveLastUpdated();
