// Post-build step: writes per-route copies of dist/index.html with correct
// title, description, canonical, and social meta baked in. Netlify serves
// static files before applying the SPA catch-all redirect, so crawlers that
// don't run JavaScript (social link previews, some search bots) see the
// right tags. The React app still hydrates and takes over via usePageMeta.
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

const SITE_URL = 'https://nmswainston.com';

// projectsData.js imports .webp assets, so it can't be imported in Node.
// Extract the fields we need instead. Each project object lists slug,
// then title, then description, in that order.
const dataSrc = readFileSync(join(rootDir, 'src', 'sections', 'projectsData.js'), 'utf8');
const projectRe = /slug:\s*"([^"]+)",[\s\S]*?title:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)"/g;
const projects = [];
for (const [, slug, title, description] of dataSrc.matchAll(projectRe)) {
  projects.push({ slug, title, description });
}
if (projects.length === 0) {
  console.error('prerender: no projects extracted from projectsData.js, regex out of sync?');
  // eslint-disable-next-line no-undef
  process.exit(1);
}

const routes = [
  {
    path: '/work',
    title: 'All Work | Nick Swainston',
    description: 'All projects by Nick Swainston: case studies in React, Tailwind CSS, and AI automation.',
  },
  ...projects.map((p) => ({
    path: `/work/${p.slug}`,
    title: `${p.title} | Nick Swainston`,
    description: `${p.title} case study: ${p.description}`,
  })),
];

const escapeHtml = (s) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf8');

for (const route of routes) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const url = `${SITE_URL}${route.path}`;

  const html = baseHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`);

  // Write flat files (work.html, work/relay.html) rather than directory
  // index files (work/relay/index.html). Netlify serves /work/relay from
  // work/relay.html with a 200; the directory form triggers a 301 to the
  // trailing-slash URL, which would make every canonical point at a redirect.
  const segments = route.path.split('/').filter(Boolean);
  const fileName = `${segments.pop()}.html`;
  const outDir = join(distDir, ...segments);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, fileName), html);
}

console.log(`prerender: wrote ${routes.length} route pages (${projects.length} projects + /work)`);
