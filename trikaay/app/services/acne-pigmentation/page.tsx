import React from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AcnePigmentationPage() {
  return (
    <main className="min-h-screen gradient-bg py-0">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between container-custom pt-16 pb-12 md:pb-20">
        <div className="md:w-1/2 z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">Acne & Pigmentation Management</h1>
          <div className="w-24 h-1 bg-[var(--accent-color)] rounded-full mb-6"></div>
          <p className="mb-6 text-lg text-gray-100 max-w-xl">Say goodbye to stubborn acne and pigmentation with our holistic, expert-led treatments at Trikaay Aesthetics.</p>
          <a href="/contact" className="inline-block mt-4 px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg">Book Consultation</a>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image src="/images/After.jpg" alt="Acne & Pigmentation" width={400} height={400} className="rounded-2xl shadow-2xl object-cover border-4 border-white" />
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--accent-color)] opacity-20 rounded-full blur-3xl z-0"></div>
      </section>

      {/* Details Section */}
      <section className="container-custom bg-white/90 rounded-3xl shadow-xl px-6 py-10 md:py-16 md:px-16 -mt-10 relative z-10 mb-12">
        {/* Features */}
        <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {[
            'Active acne control (peels + medication)',
            'Post-acne marks & pits reduction',
            'Open pores & blackhead treatments',
            'Melasma & tanning correction',
          ].map((feature) => (
            <li key={feature} className="flex items-center text-gray-800 text-lg">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Hydration Facials */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Hydration Facials</h2>
          <p className="text-gray-700 mb-4">
            Experience the ultimate in skin hydration and rejuvenation with our customized facials. These are specially curated to infuse moisture deep into the skin, soothe inflammation, and improve skin texture.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Hydrafacial: </strong>Deeply hydrates, exfoliates, and clears pores, leaving the skin smooth and radiant.</li>
            <li><strong>Oxygeneo Facial: </strong>Combines exfoliation, infusion, and oxygenation for enhanced skin brightness and smoothness.</li>
            <li><strong>Aqua Facial: </strong>Water-based exfoliation and hydration ideal for dry and dull skin types.</li>
            <li><strong>Signature Glow Facial: </strong>Targets dehydration, fine lines, and dullness with instant visible glow and hydration.</li>
          </ul>
        </div>

        {/* Chemical Peels */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Chemical Peels</h2>
          <p className="text-gray-700 mb-4">
            Painless, safe peels to remove dead cells and improve tone & texture. These clinical-grade treatments are tailored to address specific skin concerns effectively.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Glycolic Peel: </strong>For glow and improved skin texture.</li>
            <li><strong>Lactic Peel: </strong>Ideal for dull, dry, and sensitive skin.</li>
            <li><strong>Salicylic Peel: </strong>Perfect for oily and acne-prone skin types.</li>
            <li><strong>TCA Peel: </strong>Reduces pigmentation and acne scars.</li>
            <li><strong>Melasma/Pigment Control Peels: </strong>Specialized formulations to treat melasma, uneven tone, and pigmentation issues.</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <a href="/contact" className="px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg">Book Your Consultation</a>
        </div>
      </section>
    </main>
  );
}
