import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Clock, Star, Users, TrendingUp, Heart, Shield, Zap, Eye, Sparkles } from 'lucide-react';
import { blogPosts, serviceCategories } from './blogData';

// Add icons to service categories
const serviceCategoriesWithIcons = serviceCategories.map((category, index) => ({
  ...category,
  icon: [<Star key="1" />, <Heart key="2" />, <Shield key="3" />][index % 3]
}));

// Generate metadata for the blog page
export const metadata: Metadata = {
  title: 'Expert Dermatology Blog | Trikaay Aesthetics',
  description: 'Discover expert insights on dermatology, skincare, and aesthetic treatments. Stay updated with the latest trends and expert advice from Trikaay Aesthetics.',
  keywords: [
    'dermatology blog',
    'skincare tips',
    'aesthetic treatments',
    'hair care',
    'skin care',
    'cosmetic dermatology',
    'India dermatology',
    'medical aesthetics',
  ],
  openGraph: {
    title: 'Expert Dermatology Blog | Trikaay Aesthetics',
    description: 'Discover expert insights on dermatology, skincare, and aesthetic treatments. Stay updated with the latest trends and expert advice.',
    url: 'https://trikaayaesthetics.com/blog',
    siteName: 'Trikaay Aesthetics',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://trikaayaesthetics.com/images/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Trikaay Aesthetics Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Dermatology Blog | Trikaay Aesthetics',
    description: 'Discover expert insights on dermatology, skincare, and aesthetic treatments.',
    creator: '@trikaayaesthetics',
    images: ['https://trikaayaesthetics.com/images/twitter-blog.jpg'],
  },
  alternates: {
    canonical: 'https://trikaayaesthetics.com/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Generate structured data for the blog page
const generateStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://trikaayaesthetics.com/blog',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://trikaayaesthetics.com/blog',
  },
  headline: 'Expert Dermatology Blog',
  description: 'Discover expert insights on dermatology, skincare, and aesthetic treatments.',
  publisher: {
    '@type': 'Organization',
    name: 'Trikaay Aesthetics',
    logo: {
      '@type': 'ImageObject',
      url: 'https://trikaayaesthetics.com/images/logo.png',
    },
  },
  blogPost: blogPosts.slice(0, 10).map(post => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://trikaayaesthetics.com/blog/${post.slug}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author,
    },
    keywords: post.category.split(' ').concat(['dermatology', 'skincare']),
    image: `https://trikaayaesthetics.com${post.image}`,
  })),
});

export default function BlogPage() {
  const structuredData = generateStructuredData();
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Head>
        <meta name="author" content="Dr. Priyanka Mehendiratta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://trikaayaesthetics.com/blog" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Dermatology Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest in dermatology, skincare, and aesthetic treatments from our team of experts.
            </p>
          </div>
        </section>

        {/* Back to Homepage Link */}
        <section className="py-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-[var(--accent-color)] hover:text-yellow-600 transition-colors font-medium"
            >
              ← Back to Homepage
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategoriesWithIcons.map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mr-4">
                      <div className="text-[var(--accent-color)]">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, 6).map((post) => (
                <article 
                  key={post.slug} 
                  itemScope 
                  itemType="https://schema.org/BlogPosting"
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[var(--accent-color)] text-black px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.readTime}</span>
                      <span className="mx-2">•</span>
                      <time dateTime={new Date(post.date).toISOString()}>
                        {new Date(post.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900" itemProp="headline">
                      <Link href={`/blog/${post.slug}`} itemProp="url" className="hover:text-[var(--accent-color)] transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3" itemProp="description">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500" itemProp="author" itemScope itemType="https://schema.org/Person">
                        By <span itemProp="name">{post.author}</span>
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[var(--accent-color)] font-semibold hover:underline text-sm flex items-center"
                        aria-label={`Read more about ${post.title}`}
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    <meta itemProp="datePublished" content={new Date(post.date).toISOString()} />
                    <meta itemProp="image" content={`https://trikaayaesthetics.com${post.image}`} />
                  </div>
                </article>
              ))}
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
                aria-label="Book a consultation"
              >
                Book Your Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                aria-label="View all services"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
