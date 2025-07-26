import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../blogData';
import type { BlogPost } from '../blogData';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Generate structured data for the blog post
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://trikaayaesthetics.com${post.image}`,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://trikaayaesthetics.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trikaay Aesthetics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trikaayaesthetics.com/images/logo.png',
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://trikaayaesthetics.com/blog/${post.slug}`,
    },
    keywords: post.category.split(' ').concat(['dermatology', 'skincare']),
    articleSection: post.category,
    inLanguage: 'en-IN',
  };

  // Generate detailed content based on the post
  const getPostContent = (slug: string): React.ReactNode => {
    switch (slug) {
      case 'science-behind-medical-grade-facials':
        return (
          <div className="prose max-w-none">
            <h2>Understanding Medical-Grade Facials</h2>
            <p>Medical-grade facials are advanced skincare treatments performed by licensed dermatologists or trained medical professionals. Unlike regular spa facials, these treatments use medical-grade products and technology to deliver more dramatic and longer-lasting results.</p>
            
            <h3>Key Differences from Regular Facials</h3>
            <ul>
              <li>Performed by medical professionals</li>
              <li>Uses medical-grade products with higher concentrations of active ingredients</li>
              <li>Can be customized to address specific skin concerns</li>
              <li>May include advanced technologies like LED therapy, microcurrent, or medical peels</li>
              <li>Delivers more noticeable and longer-lasting results</li>
            </ul>

            <h3>Benefits of Medical-Grade Facials</h3>
            <p>Medical-grade facials can help with various skin concerns including acne, hyperpigmentation, fine lines, and uneven skin texture. The treatments stimulate collagen production, promote cell turnover, and deeply cleanse pores for healthier-looking skin.</p>

            <h3>What to Expect During Treatment</h3>
            <p>A typical medical facial includes cleansing, exfoliation, extractions (if needed), a customized mask, and the application of serums and moisturizers. The entire process usually takes about 60-90 minutes, and there's minimal to no downtime.</p>
          </div>
        );
      case 'benefits-of-chemical-peels':
        return (
          <div className="prose max-w-none">
            <h2>Chemical Peels for Indian Skin</h2>
            <p>Chemical peels are an effective treatment for various skin concerns commonly experienced by people with Indian skin, including hyperpigmentation, acne scars, and uneven skin tone.</p>
            
            <h3>Why Chemical Peels Work for Indian Skin</h3>
            <p>Indian skin tends to produce more melanin, making it prone to pigmentation issues. Chemical peels help by removing the damaged outer layers of skin, revealing brighter, more even-toned skin underneath.</p>

            <h3>Types of Peels for Indian Skin</h3>
            <ul>
              <li><strong>Glycolic Acid Peels:</strong> Great for mild pigmentation and acne</li>
              <li><strong>Salicylic Acid Peels:</strong> Ideal for acne-prone skin</li>
              <li><strong>Mandelic Acid Peels:</strong> Gentle option for sensitive skin</li>
              <li><strong>TCA Peels:</strong> For more severe pigmentation and scarring</li>
            </ul>

            <h3>Post-Treatment Care</h3>
            <p>After a chemical peel, it's crucial to keep the skin moisturized and protected from the sun. Your dermatologist will provide specific aftercare instructions based on the type and strength of your peel.</p>
          </div>
        );
      // Add more cases for other blog posts
      default:
        return (
          <div className="prose max-w-none">
            <p>This article provides detailed information about {post.title}.</p>
            <p>Our expert dermatologists at Trikaay Aesthetics are dedicated to providing the highest quality care and information about various skin and hair treatments.</p>
            <p>For a personalized consultation, please contact our clinic to schedule an appointment with one of our specialists.</p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Link 
        href="/blog" 
        className="inline-flex items-center text-[var(--accent-color)] hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Featured Image */}
        <div className="relative h-96 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="p-8">
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
            <span className="bg-[var(--accent-color)] text-black px-3 py-1 rounded-full text-xs font-semibold mr-3">
              {post.category}
            </span>
            <span className="flex items-center mr-4">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </span>
            <span className="flex items-center mr-4">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            {post.title}
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">{post.excerpt}</p>
            {getPostContent(post.slug)}
          </div>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Share this article
            </h3>
            <div className="flex space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://trikaayaesthetics.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877F2] transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://trikaayaesthetics.com/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://trikaayaesthetics.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface MetadataProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: MetadataProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Trikaay Aesthetics',
      description: 'The requested blog post could not be found.',
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const canonicalUrl = `https://trikaayaesthetics.com/blog/${post.slug}`;
  const imageUrl = `https://trikaayaesthetics.com${post.image}`;
  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date().toISOString();

  return {
    title: `${post.title} | Expert Dermatology Blog`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      post.category.toLowerCase(),
      ...post.title.toLowerCase().split(' '),
      'dermatology',
      'skincare',
      'hair care',
      'aesthetic treatments',
      'India'
    ].filter((value, index, self) => self.indexOf(value) === index),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: 'Trikaay Aesthetics',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_IN',
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [post.author],
      section: post.category,
      tags: post.category.split(' ').concat(['dermatology', 'skincare']),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
      site: '@trikaayaesthetics',
      creator: '@drtrikaay',
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
    verification: {
      google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
      yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
    },
    other: {
      'article:section': post.category,
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
      'article:author': post.author,
      'article:tag': post.category.split(' ').concat(['dermatology', 'skincare']),
    },
  };
}
