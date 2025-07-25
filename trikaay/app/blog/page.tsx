import Head from 'next/head';

const blogPosts = [
  {
    title: 'The Science Behind Medical-Grade Facials',
    slug: 'science-behind-medical-grade-facials',
    excerpt: 'Discover how medical-grade facials differ from salon facials and why they deliver superior results for your skin.',
    date: '2024-06-01',
    author: 'Dr. Priyanka Mehendiratta',
  },
  {
    title: 'Top 5 Benefits of Chemical Peels for Indian Skin',
    slug: 'benefits-of-chemical-peels',
    excerpt: 'Learn why chemical peels are a safe and effective solution for pigmentation, acne, and dullness in Indian skin types.',
    date: '2024-05-20',
    author: 'Dr. Priyanka Mehendiratta',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Blog | Trikaay Aesthetics</title>
        <meta name="description" content="Read expert articles on skin, hair, and holistic wellness from Trikaay Aesthetics. Stay updated with the latest in dermatology and aesthetic medicine." />
        <meta name="keywords" content="blog, skincare, facials, chemical peels, dermatology, trikaay, aesthetics, wellness, india" />
      </Head>
      <section className="max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-8 text-black">Trikaay Blog</h1>
        <p className="text-center text-lg text-gray-600 mb-12">Insights, tips, and the latest trends in skin, hair, and holistic wellness from our expert team.</p>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="p-6 rounded-2xl shadow-lg bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all">
              <h2 className="font-playfair text-2xl font-bold mb-2 text-accent-color">
                <a href={`/blog/${post.slug}`} className="hover:underline">{post.title}</a>
              </h2>
              <div className="text-sm text-gray-500 mb-2">By {post.author} | {new Date(post.date).toLocaleDateString()}</div>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="text-accent-color font-semibold hover:underline">Read More &rarr;</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
} 