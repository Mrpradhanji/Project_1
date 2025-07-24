import React from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function MicroneedlingPage() {
  return (
    <main className="min-h-screen gradient-bg py-0">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between container-custom pt-16 pb-12 md:pb-20">
        <div className="md:w-1/2 z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">Microneedling with PRP / Derma Pen</h1>
          <div className="w-24 h-1 bg-[var(--accent-color)] rounded-full mb-6"></div>
          <p className="mb-6 text-lg text-gray-100 max-w-xl">Experience advanced skin rejuvenation at Trikaay Aesthetics with our Microneedling treatments using PRP (Platelet-Rich Plasma) and Derma Pen technology. Restore your skin’s natural glow, reduce scars, and boost collagen with our dermatologist-recommended, FDA-approved procedures.</p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image src="/images/After_Skin_Reden.jpeg" alt="Microneedling with PRP / Derma Pen" width={400} height={400} className="rounded-2xl shadow-2xl object-cover border-4 border-white" />
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--accent-color)] opacity-20 rounded-full blur-3xl z-0"></div>
      </section>

      {/* Details Section */}
      <section className="container-custom bg-white/90 rounded-3xl shadow-xl px-6 py-10 md:py-16 md:px-16 -mt-10 relative z-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">What is Microneedling with PRP / Derma Pen?</h2>
        <p className="mb-6 text-gray-700 text-lg">Microneedling is a minimally invasive skin treatment that uses fine needles to create micro-injuries in the skin, stimulating natural collagen and elastin production. At Trikaay Aesthetics, we enhance this process with PRP (your body’s own growth factors) or the advanced Derma Pen device for superior results. This treatment is ideal for reducing acne scars, open pores, fine lines, and improving overall skin texture and radiance.</p>
        <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">Why Choose Trikaay for Microneedling?</h2>
        <p className="mb-6 text-gray-700 text-lg">Our microneedling procedures are performed by expert dermatologists using FDA-approved equipment in a safe, clinical environment. We customize each session to your skin’s needs, ensuring visible, long-lasting improvements with minimal downtime. Trikaay Aesthetics is trusted for advanced skin rejuvenation in India.</p>
        <h3 className="text-xl font-semibold mt-8 mb-2 text-[var(--primary-color)]">Popular Microneedling Treatments at Trikaay:</h3>
        <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            'Vampire Facial (PRP) for glow & texture',
            'Scar, pore & wrinkle reduction',
            'Collagen-boosting Derma Pen sessions',
            'Microneedling for acne scars and pigmentation',
            'Skin tightening and rejuvenation',
            'Open pore and fine line improvement',
          ].map((feature) => (
            <li key={feature} className="flex items-center text-gray-800 text-lg">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-2 text-[var(--primary-color)]">Key Features of Trikaay’s Microneedling Services:</h3>
        <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            'FDA-approved microneedling and PRP equipment',
            'Performed by expert dermatologists',
            'Visible reduction in scars, pores, and wrinkles',
            'Customized protocols for every skin type',
            'Minimal downtime and safe for Indian skin',
            'Trusted for advanced skin rejuvenation in India',
          ].map((feature) => (
            <li key={feature} className="flex items-center text-gray-800 text-lg">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-2 text-[var(--primary-color)]">Pre & Post Care for Microneedling Sessions</h3>
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-1 text-[var(--primary-color)]">Before Your Session:</h4>
          <ul className="list-disc ml-6 text-gray-700 text-base mb-2">
            <li>Avoid retinoids, AHAs, and exfoliants for 3–5 days</li>
            <li>Keep your skin clean and well-hydrated</li>
            <li>Inform our dermatologist about any medications or skin conditions</li>
          </ul>
          <h4 className="font-semibold text-lg mb-1 text-[var(--primary-color)]">After Your Session:</h4>
          <ul className="list-disc ml-6 text-gray-700 text-base">
            <li>Avoid direct sun exposure and use sunscreen regularly</li>
            <li>Do not use makeup or harsh products for 24–48 hours</li>
            <li>Use only recommended gentle moisturizers and serums</li>
            <li>Follow our dermatologist’s aftercare instructions for best results</li>
          </ul>
        </div>
        <p className="mb-6 text-gray-700 text-lg">At Trikaay Aesthetics, we believe in delivering clinically proven, visible results with every microneedling session. Whether you want to treat scars, improve skin texture, or boost your natural glow, our advanced microneedling in India is your path to radiant, healthy skin.</p>
        <div className="flex justify-center mt-8">
          <a href="/contact" className="px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg">⭐ Book Your Microneedling Session at Trikaay Today</a>
        </div>
      </section>
    </main>
  );
} 