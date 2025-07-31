import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../blogData';
import Footer from '../../components/Footer';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for the blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Trikaay Aesthetics',
    };
  }

  return {
    title: `${post.title} | Trikaay Aesthetics`,
    description: post.excerpt,
    keywords: [
      'dermatology',
      'skincare',
      'aesthetic treatments',
      post.category.toLowerCase(),
      'India dermatology',
      'medical aesthetics',
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://trikaayaesthetics.com/blog/${post.slug}`,
      siteName: 'Trikaay Aesthetics',
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: `https://trikaayaesthetics.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`https://trikaayaesthetics.com${post.image}`],
    },
    alternates: {
      canonical: `https://trikaayaesthetics.com/blog/${post.slug}`,
    },
  };
}

// Generate structured data for the blog post
const generateStructuredData = (post: any) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: `https://trikaayaesthetics.com${post.image}`,
  author: {
    '@type': 'Person',
    name: post.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Trikaay Aesthetics',
    logo: {
      '@type': 'ImageObject',
      url: 'https://trikaayaesthetics.com/images/trikaay_logo_black.png',
    },
  },
  datePublished: new Date(post.date).toISOString(),
  dateModified: new Date(post.date).toISOString(),
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://trikaayaesthetics.com/blog/${post.slug}`,
  },
});

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const structuredData = generateStructuredData(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white">
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <span className="inline-block bg-[var(--accent-color)] text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center justify-center text-sm text-gray-300 mb-6">
                  <span>{post.readTime}</span>
                  <span className="mx-2">•</span>
                  <time dateTime={new Date(post.date).toISOString()}>
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Featured Image */}
                <div className="relative w-full h-80 md:h-96">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>
                
                {/* Article Body */}
                <div className="p-8">
                  {/* Excerpt */}
                  <div className="mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-[var(--accent-color)] pl-6">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <div className="text-gray-800 whitespace-pre-line leading-relaxed">
                      {post.content}
                    </div>
                  </div>

                  {/* Article Footer */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center">
                          <span className="text-[var(--accent-color)] font-semibold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{post.author}</p>
                          <p className="text-sm text-gray-600">Dermatologist & Aesthetic Specialist</p>
                        </div>
                      </div>
                      
                      <Link
                        href="/blog"
                        className="text-[var(--accent-color)] hover:text-yellow-600 transition-colors font-medium"
                      >
                        ← Back to Blog
                      </Link>
                    </div>
                  </div>
                </div>
              </article>

              {/* Related Articles */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter(p => p.slug !== post.slug)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="group block"
                      >
                        <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                          <div className="relative h-48">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <div className="p-4">
                            <span className="inline-block bg-[var(--accent-color)]/10 text-[var(--accent-color)] px-2 py-1 rounded text-xs font-semibold mb-2">
                              {relatedPost.category}
                            </span>
                            <h3 className="font-semibold text-gray-900 group-hover:text-[var(--accent-color)] transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                          </div>
                        </article>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-[var(--accent-color)]">Skin & Hair?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a consultation with our expert team and discover how we can help you achieve your aesthetic goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-block bg-[var(--accent-color)] text-black font-semibold py-4 px-8 rounded-full hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Your Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-block border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
