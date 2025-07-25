import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ServiceHero from '../../components/ServiceHero';

export default function ChemicalPeelsPage() {
  return (
    <main className="min-h-screen bg-white py-0">
      {/* Breadcrumbs */}
      <div className="py-4 flex justify-center">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Services</Typography>
          <Typography color="text.primary">Chemical Peels</Typography>
        </Breadcrumbs>
      </div>
      {/* Hero Section */}
      <ServiceHero
        title="Advanced Chemical Peels"
        description="At Trikaay Aesthetics, we offer safe, dermatologist-approved chemical peels in India to target acne, pigmentation, scars, and dull skin. Our peels are tailored to Indian skin types and delivered under clinical supervision for optimal results with minimal downtime."
        imageSrc="/images/ChemicalPeel.jpeg"
        imageAlt="Chemical Peels"
        ctaText="Book Peel"
        ctaHref="/contact"
      />

      {/* Content Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 -mt-10 mb-12">
        {/* Why Choose Us */}
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Why Choose Trikaay Aesthetics for Chemical Peels?</h2>
        <p className="mb-6 text-gray-700 text-lg">
          At Trikaay Aesthetics, we specialize in customized chemical peels designed to treat acne, pigmentation, melasma, dullness, and early signs of aging. Backed by medical expertise and tailored to Indian skin, our treatments offer noticeable improvements with minimal discomfort or downtime.
        </p>

        {/* Our Approach */}
        <h3 className="text-xl font-semibold mt-8 mb-2 text-black">How Our Peels Work</h3>
        <p className="mb-6 text-gray-700 text-lg">
          Chemical peels use active ingredients to exfoliate the skin, accelerate cell turnover, and stimulate collagen production. The result? Clearer, brighter, and more even-toned skin. Whether you’re new to peels or seeking advanced pigmentation correction, our experts curate the ideal protocol for you.
        </p>

        {/* Popular Peels */}
        <h3 className="text-xl font-semibold mt-8 mb-4 text-black">Popular Peels We Offer:</h3>
        <div className="space-y-6 text-gray-800 text-lg">
          <div><strong className="text-[var(--accent-color)]">Glycolic Peel:</strong> Ideal for glow and texture refinement.</div>
          <div><strong className="text-[var(--accent-color)]">Lactic Peel:</strong> Suited for dull, dry or sensitive skin types.</div>
          <div><strong className="text-[var(--accent-color)]">Salicylic Peel:</strong> For oily, acne-prone, and congested skin.</div>
          <div><strong className="text-[var(--accent-color)]">TCA Peel:</strong> Effective for pigmentation, acne scars, and rejuvenation.</div>
          <div><strong className="text-[var(--accent-color)]">Melasma & Pigment Control Peels:</strong> Targets tanning, melasma, and deep pigmentation with safe, gradual correction.</div>
        </div>

        {/* Key Benefits */}
        <h3 className="text-xl font-semibold mt-10 mb-2 text-black">Key Features & Benefits:</h3>
        <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            'Dermatologically formulated and tested',
            'Safe for Indian skin types and tones',
            'Minimal to no downtime',
            'Targets pigmentation, acne, tanning & uneven tone',
            'Enhances glow and hydration',
            'Performed by certified skin experts',
          ].map((feature) => (
            <li key={feature} className="flex items-center text-gray-800 text-lg">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Skin Concerns */}
        <h3 className="text-xl font-semibold mt-10 mb-2 text-black">Skin Concerns We Address</h3>
        <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800 text-lg">
          {[
            'Acne & acne scars',
            'Melasma & sun-induced pigmentation',
            'Tanning & dull skin',
            'Uneven skin tone & texture',
            'Fine lines & early aging signs',
            'Clogged pores & blackheads',
          ].map((concern) => (
            <li key={concern} className="flex items-center">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {concern}
            </li>
          ))}
        </ul>

        {/* Pre & Post Care */}
        <h3 className="text-xl font-semibold mt-8 mb-2 text-black">Pre & Post Care Instructions</h3>
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-1 text-black">Before Your Session:</h4>
          <ul className="list-disc ml-6 text-gray-700 text-base mb-2">
            <li>Discontinue use of AHAs, BHAs, or retinoids 3–5 days prior</li>
            <li>Use gentle, non-active cleansers</li>
            <li>Stay hydrated and avoid excessive sun exposure</li>
          </ul>

          <h4 className="font-semibold text-lg mb-1 text-black">After Your Session:</h4>
          <ul className="list-disc ml-6 text-gray-700 text-base">
            <li>Apply sunscreen as advised</li>
            <li>Avoid makeup and exfoliation for 24–48 hours</li>
            <li>Expect mild redness or flaking — this is normal</li>
            <li>Follow up with moisturizers and recovery serums</li>
          </ul>
        </div>

        {/* Final Note */}
        <p className="mb-6 text-gray-700 text-lg">
          At Trikaay Aesthetics, we blend clinical precision with holistic care to give you glowing, healthy skin—safely and effectively. Our chemical peels are more than a treatment—they’re a gateway to confident, radiant skin.
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <a href="/contact" className="px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg">
            ⭐ Book Your Customized Peel Today
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
