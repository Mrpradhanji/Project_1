import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/api';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trikaayaesthetics.com';

type SitemapEntry = {
  url: string;
  lastModified: Date;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
};

// Only include pages that exist in the project
export const pages: SitemapEntry[] = [
  { url: '/', lastModified: new Date('2024-01-01'), priority: 1.0, changeFrequency: 'daily' },
  { url: '/services', lastModified: new Date('2024-01-01'), priority: 0.9, changeFrequency: 'weekly' },
  { url: '/blog', lastModified: new Date(), priority: 0.8, changeFrequency: 'daily' },
];

// Main sitemap that references all sitemaps
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sitemap-pages.xml`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sitemap-blog.xml`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];
}

// Sitemap for static pages (kept for backward compatibility)
export async function generateSitemapPages(): Promise<MetadataRoute.Sitemap> {
  return pages.map((page) => ({
    url: `${baseUrl}${page.url === '/' ? '' : page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

// Sitemap for blog posts
export async function generateSitemapBlog(): Promise<MetadataRoute.Sitemap> {
  try {
    // Replace with your actual blog post fetching logic
    const posts = await getAllBlogPosts();
    
    return posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
    return [];
  }
}
