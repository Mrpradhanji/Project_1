import { NextResponse } from 'next/server';

// This route handles requests to /robots.txt
// We're using a route handler instead of a metadata export for more control

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trikaayaesthetics.com';
  
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
# Rules for all web crawlers
User-agent: *
Allow: /

# Disallow admin and system paths
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /404
Disallow: /500
Disallow: /private/

# Sitemap references
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-pages.xml
Sitemap: ${baseUrl}/sitemap-blog.xml

# Crawl delay for search engines
User-agent: Googlebot
Crawl-delay: 10

User-agent: Bingbot
Crawl-delay: 10

User-agent: Slurp
Crawl-delay: 10

User-agent: DuckDuckBot
Crawl-delay: 10

User-agent: Baiduspider
Crawl-delay: 10

User-agent: YandexBot
Crawl-delay: 10
`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}

// Prevent Next.js from treating this as a page
export const dynamicParams = false;
