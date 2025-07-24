import React from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function FacialsPage() {
  return (
    <main className="min-h-screen gradient-bg py-0">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between container-custom pt-16 pb-12 md:pb-20">
        <div className="md:w-1/2 z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">Medical-Grade Facials & Hydrafacials</h1>
          <div className="w-24 h-1 bg-[var(--accent-color)] rounded-full mb-6"></div>
          <p className="mb-6 text-lg text-gray-100 max-w-xl">At Trikaay Aesthetics, we offer advanced skin treatments in India that go far beyond salon facials. Our Medical-Grade Facials and Hydrafacials are dermatologist-recommended skincare treatments designed to deeply cleanse, exfoliate, hydrate, and rejuvenate your skin using FDA-approved aesthetic technology. These treatments are customized to your unique skin concerns, ensuring safe, effective, and long-lasting results.</p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image src="/images/Before.jpg" alt="Facials & Hydrafacials" width={400} height={400} className="rounded-2xl shadow-2xl object-cover border-4 border-white" />
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--accent-color)] opacity-20 rounded-full blur-3xl z-0"></div>
      </section>

      {/* Details Section */}
      <section className="container-custom bg-white/90 rounded-3xl shadow-xl px-6 py-10 md:py-16 md:px-16 -mt-10 relative z-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">What Are Trikaay’s Medical-Grade Facials & Hydrafacials?</h2>
        <p className="mb-6 text-gray-700 text-lg">If you're dealing with acne, pigmentation, dull skin, open pores, or fine lines, Trikaay’s non-invasive facial treatments can help restore your natural glow. Our team of expert dermatologists uses the latest skincare innovations to deliver visible improvements with every session.</p>
        <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">Why Choose Trikaay for Hydrafacial & Medi-Facial Treatments?</h2>
        <p className="mb-6 text-gray-700 text-lg">Unlike basic salon facials, Trikaay Aesthetics' facials are science-backed skin therapies performed under clinical supervision. Our Hydrafacial treatments in India use multi-step vortex technology to exfoliate dead skin cells, remove blackheads and whiteheads, and infuse the skin with potent booster serums for hydration and glow.</p>
        <p className="mb-6 text-gray-700 text-lg">We also offer custom medi-facials for acne-prone skin, hydrating facials for dry skin, and anti-aging facials with collagen-boosting actives. These facials are ideal for improving skin tone, texture, and elasticity, and are completely safe for sensitive Indian skin types.</p>
        <h3 className="text-xl font-semibold mt-8 mb-2 text-[var(--primary-color)]">Popular Medical Facials at Trikaay Aesthetics:</h3>
        <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            'Hydrafacial with booster serums',
            'Glow-boosting medi-facials',
            'Acne-reduction facials',
            'Deep hydration facials',
            'Anti-aging collagen infusion facials',
            'Skin brightening facials for dull complexion',
          ].map((feature) => (
            <li key={feature} className="flex items-center text-gray-800 text-lg">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-2 text-[var(--primary-color)]">Key Features of Trikaay’s Facial Services:</h3>
        <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            'FDA-approved skincare equipment for safety',
            'Performed by expert dermatologists',
            'Visible improvement in glow and hydration',
            'Customized treatment plans for each skin type',
            'Ideal for men and women of all ages',
            'Trusted choice for skin care in India',
          ].map((feature) => (
            <li key={feature} className="flex items-center text-gray-800 text-lg">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-2 text-[var(--primary-color)]">Pre & Post Care for Hydrafacial & Medi-Facial Sessions</h3>
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-1 text-[var(--primary-color)]">Before Your Session:</h4>
          <ul className="list-disc ml-6 text-gray-700 text-base mb-2">
            <li>Avoid using AHAs, BHAs, or exfoliating products for 2–3 days</li>
            <li>Cleanse your skin gently and stay hydrated</li>
            <li>Consult our dermatologist if you're on any medication</li>
          </ul>
          <h4 className="font-semibold text-lg mb-1 text-[var(--primary-color)]">After Your Session:</h4>
          <ul className="list-disc ml-6 text-gray-700 text-base">
            <li>Do not expose your skin to direct sunlight for 48 hours</li>
            <li>Use only recommended moisturizers and sunscreen</li>
            <li>Avoid makeup and harsh products for 24–48 hours</li>
            <li>Follow our dermatologist’s aftercare plan for best results</li>
          </ul>
        </div>
        <p className="mb-6 text-gray-700 text-lg">At Trikaay Aesthetics, we believe that healthy, glowing skin is just one treatment away. Whether you're preparing for a special occasion or investing in your long-term skincare journey, our medical facials in India are designed to give you clinically proven results with a luxurious experience.</p>
        <div className="flex justify-center mt-8">
          <a href="/contact" className="px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg">⭐ Book Your Medical-Grade Facial at Trikaay Today</a>
        </div>
      </section>
    </main>
  );
} 