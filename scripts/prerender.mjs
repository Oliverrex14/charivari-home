import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildSubpageJsonLd(route) {
  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${route.canonical}#webpage`,
          url: route.canonical,
          name: route.title,
          headline: route.h1,
          description: route.description,
          inLanguage: 'cs-CZ',
          isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://www.charivarihome.com/#website',
            url: 'https://www.charivarihome.com/',
            name: 'CHARIVARI HOME',
          },
          about: {
            '@id': 'https://www.charivarihome.com/#business',
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: route.ogImage,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${route.canonical}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'CHARIVARI HOME',
              item: 'https://www.charivarihome.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: route.breadcrumb,
              item: route.canonical,
            },
          ],
        },
      ],
    },
    null,
    2
  );
}

async function runPrerender() {
  const templatePath = path.join(distDir, 'index.html');
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  const ssrEntryPath = path.join(ssrDir, 'entry-server.js');
  const { renderRoute, SEO_ROUTES } = await import(ssrEntryPath);

  const today = new Date().toISOString().slice(0, 10);

  for (const route of SEO_ROUTES) {
    const appHtml = renderRoute(route.path);
    const safeTitle = escapeHtml(route.title);
    const safeDesc = escapeHtml(route.description);

    let pageHtml = templateHtml
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
      .replace(
        /<meta name="description" content="[^"]*" \/>/,
        `<meta name="description" content="${safeDesc}" />`
      )
      .replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${route.canonical}" />`
      )
      .replace(
        /<meta property="og:url" content="[^"]*" \/>/,
        `<meta property="og:url" content="${route.canonical}" />`
      )
      .replace(
        /<meta property="og:title" content="[^"]*" \/>/,
        `<meta property="og:title" content="${safeTitle}" />`
      )
      .replace(
        /<meta property="og:description" content="[^"]*" \/>/,
        `<meta property="og:description" content="${safeDesc}" />`
      )
      .replace(
        /<meta property="og:image" content="[^"]*" \/>/,
        `<meta property="og:image" content="${route.ogImage}" />`
      )
      .replace(
        /<meta name="twitter:title" content="[^"]*" \/>/,
        `<meta name="twitter:title" content="${safeTitle}" />`
      )
      .replace(
        /<meta name="twitter:description" content="[^"]*" \/>/,
        `<meta name="twitter:description" content="${safeDesc}" />`
      )
      .replace(
        /<meta name="twitter:image" content="[^"]*" \/>/,
        `<meta name="twitter:image" content="${route.ogImage}" />`
      )
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    if (route.path !== '/') {
      const subpageJsonLd = buildSubpageJsonLd(route);
      pageHtml = pageHtml.replace(
        /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
        `<script type="application/ld+json">\n${subpageJsonLd}\n    </script>`
      );
    }

    if (route.path === '/') {
      fs.writeFileSync(templatePath, pageHtml, 'utf-8');
      console.log(`✓ Pre-rendered / -> dist/index.html (${pageHtml.length} bytes)`);
    } else {
      const slug = route.path.replace(/^\/|\/$/g, '');
      const routeDir = path.join(distDir, slug);
      fs.mkdirSync(routeDir, { recursive: true });
      const outFile = path.join(routeDir, 'index.html');
      fs.writeFileSync(outFile, pageHtml, 'utf-8');
      console.log(`✓ Pre-rendered ${route.path} -> dist/${slug}/index.html (${pageHtml.length} bytes)`);
    }
  }

  // Generate comprehensive sitemap.xml with all pre-rendered canonical URLs
  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...SEO_ROUTES.map(
      (route) =>
        `  <url>\n    <loc>${route.canonical}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`
    ),
    '</urlset>',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`✓ Updated sitemap.xml with ${SEO_ROUTES.length} canonical URLs (lastmod: ${today})`);

  // Clean up temporary SSR bundle
  fs.rmSync(ssrDir, { recursive: true, force: true });
}

runPrerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
