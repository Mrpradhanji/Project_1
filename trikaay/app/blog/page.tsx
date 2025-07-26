import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import { CheckCircle, Clock, Star, Users, TrendingUp, Heart, Shield, Zap, Eye, Sparkles, Activity, Scissors, Droplets } from 'lucide-react';
import { Metadata } from 'next';
import { blogPosts, serviceCategories } from './blogData';

// Add icons to service categories
const serviceCategoriesWithIcons = serviceCategories.map((category, index) => ({
  ...category,
  icon: index === 0 ? 
    <Heart className="w-8 h-8" /> : 
    index === 1 ? 
    <TrendingUp className="w-8 h-8" /> : 
    <Shield className="w-8 h-8" />
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Dermatology Blog | Trikaay Aesthetics',
    description: 'Discover expert insights on dermatology, skincare, and aesthetic treatments.',
    creator: '@trikaayaesthetics',
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
    },
  },
};

// Generate structured data for the blog page
const structuredData = {
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
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Head>
        <title>Expert Dermatology Blog | Trikaay Aesthetics</title>
        <meta name="description" content="Discover expert insights on dermatology, skincare, and aesthetic treatments. Stay updated with the latest trends and expert advice." />
        <meta name="keywords" content="skincare blog, hair care tips, dermatology articles, aesthetic medicine, chemical peels, facials, hair therapy, anti-aging, acne treatment, pigmentation, microneedling, PRP therapy, GFC therapy, trikaay aesthetics, india" />
        <meta name="author" content="Dr. Priyanka Mehendiratta" />
        <meta property="og:title" content="Expert Skincare & Hair Care Blog | Trikaay Aesthetics" />
        <meta property="og:description" content="Discover expert insights on skin, hair, and wellness treatments. Latest articles on dermatology and aesthetic medicine from India's leading experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trikaayaesthetics.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Skincare & Hair Care Blog | Trikaay Aesthetics" />
        <meta name="twitter:description" content="Expert articles on skin, hair, and wellness treatments from India's leading dermatologists." />
        <link rel="canonical" href="https://trikaayaesthetics.com/blog" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Trikaay Aesthetics Blog",
              "description": "Expert articles on skin, hair, and wellness treatments",
              "url": "https://trikaayaesthetics.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "Trikaay Aesthetics",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://trikaayaesthetics.com/images/trikaay_logo_black.png"
                }
              },
              "author": {
                "@type": "Person",
                "name": "Dr. Priyanka Mehendiratta",
                "jobTitle": "Senior Consultant Dermatologist",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Trikaay Aesthetics"
                }
              }
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-black">
              Expert <span className="gradient-text">Insights</span> & Tips
            </h1>
            <div className="w-24 h-1 bg-[var(--accent-color)] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the latest in dermatology, aesthetic medicine, and wellness. Expert articles from Dr. Priyanka Mehendiratta and our team of specialists.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                5000+ Happy Readers
              </span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Expert Medical Content
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Updated Weekly
              </span>
            </div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Treatment Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {serviceCategories.map((category, index) => {
                let Icon = Activity; // Default icon
                
                // Assign different icons based on category
                if (category.name.includes('Skin')) Icon = Sparkles;
                if (category.name.includes('Hair')) Icon = Scissors;
                if (category.name.includes('Dermatology')) Icon = Droplets;
                
                return (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-blue-50 text-blue-600">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 itemProp="headline" className="text-xl font-semibold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p itemProp="description" className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.services.map((service: string, serviceIndex: number) => (
                        <li key={serviceIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


      {/* Featured Articles */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-12">Latest Dermatology Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 6).map((post, index) => (
              <article itemScope itemType="https://schema.org/BlogPosting" key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--accent-color)] text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <h3 itemProp="headline" className="font-playfair text-xl font-bold mb-3 text-black group-hover:text-[var(--accent-color)] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`} itemProp="url">
                      {post.title}
                    </Link>
                  </h3>
                  <p itemProp="description" className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[var(--accent-color)] font-semibold hover:underline text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                  <meta itemProp="author" content={post.author} />
                  <meta itemProp="datePublished" content={new Date(post.date).toISOString()} />
                  <meta itemProp="image" content={`https://trikaayaesthetics.com${post.image}`} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-12">Dermatology Articles & Guides</h2>
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl shadow-lg bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all">
                {/* Article Image */}
                <div className="md:w-1/3">
                  <div className="relative h-48 md:h-full rounded-xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Article Content */}
                <div className="md:w-2/3">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-[var(--accent-color)] text-black px-2 py-1 rounded text-xs font-semibold mr-3">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <h3 itemProp="headline" className="font-playfair text-2xl font-bold mb-3 text-black hover:text-[var(--accent-color)] transition-colors">
                    <Link href={`/blog/${post.slug}`} itemProp="url">
                      {post.title}
                    </Link>
                  </h3>
                  <p itemProp="description" className="text-gray-700 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[var(--accent-color)] font-semibold hover:underline"
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your <span className="gradient-text">Skin & Hair?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation with our expert team and discover how we can help you achieve your aesthetic and wellness goals.
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

        <Footer />
      </main>
    </>
  );
} 