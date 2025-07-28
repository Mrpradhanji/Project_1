import { MetadataRoute } from 'next';
import { generateSitemapBlog } from '../sitemap';

export async function GET() {
  const blogPosts = await generateSitemapBlog();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${blogPosts
        .map(
          (post) => `
            <url>
              <loc>${post.url}</loc>
              <lastmod>${new Date(post.lastModified || new Date()).toISOString()}</lastmod>
              <changefreq>${post.changeFrequency}</changefreq>
              <priority>${post.priority}</priority>
            </url>
          `
        )
        .join('')}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800',
    },
  });
}
