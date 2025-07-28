import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Trikaay Aesthetics',
  description: 'Learn about Trikaay Aesthetics and our commitment to beauty and wellness.',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Trikaay Aesthetics</h1>
      <div className="prose max-w-4xl">
        <p className="text-lg mb-6">
          Welcome to Trikaay Aesthetics, where beauty meets wellness. Our expert team is dedicated to providing 
          top-quality aesthetic treatments in a comfortable and professional environment.
        </p>
        {/* Add more content as needed */}
      </div>
    </main>
  );
}
