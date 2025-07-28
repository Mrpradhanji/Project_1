import { MetadataRoute } from 'next';
import { pages } from '../sitemap';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
            <url>
              <loc>${new URL(page.url, process.env.NEXT_PUBLIC_SITE_URL || 'https://trikaayaesthetics.com')}</loc>
              <lastmod>${page.lastModified ? new Date(page.lastModified).toISOString() : new Date().toISOString()}</lastmod>
              ${page.changeFrequency ? `<changefreq>${page.changeFrequency}</changefreq>` : ''}
              ${page.priority !== undefined ? `<priority>${page.priority}</priority>` : ''}
            </url>
          `
        )
        .join('')}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
