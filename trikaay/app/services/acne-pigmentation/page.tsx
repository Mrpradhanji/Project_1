import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ServiceHero from '../../components/ServiceHero';

export default function AcnePigmentationPage() {
  return (
    <main className="min-h-screen bg-white py-0">
      {/* Breadcrumbs */}
      <div className="py-4 flex justify-center">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Services</Typography>
          <Typography color="text.primary">Acne & Pigmentation</Typography>
        </Breadcrumbs>
      </div>
      {/* Hero Section */}
      <ServiceHero
        title="Acne & Pigmentation Management"
        description="Say goodbye to stubborn acne and pigmentation with our holistic, expert-led treatments at Trikaay Aesthetics."
        imageSrc="/images/acne-pigmentation.jpg"
        imageAlt="Acne & Pigmentation Management"
        ctaText="Book Consultation"
        ctaHref="/contact"
      />
      {/* Details Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 -mt-10 mb-12">
        {/* Features */}
        <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {[
            'Active acne control (peels + medication)',
            'Post-acne marks & pits reduction',
            'Open pores & blackhead treatments',
            'Melasma & tanning correction',
          ].map((feature) => (
            <li key={feature} className="flex items-center text-black text-lg">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Hydration Facials */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Hydration Facials</h2>
          <p className="text-black mb-4">
            Experience the ultimate in skin hydration and rejuvenation with our customized facials. These are specially curated to infuse moisture deep into the skin, soothe inflammation, and improve skin texture.
          </p>
          <ul className="list-disc pl-5 text-black space-y-2">
            <li><strong>Hydrafacial: </strong>Deeply hydrates, exfoliates, and clears pores, leaving the skin smooth and radiant.</li>
            <li><strong>Oxygeneo Facial: </strong>Combines exfoliation, infusion, and oxygenation for enhanced skin brightness and smoothness.</li>
            <li><strong>Aqua Facial: </strong>Water-based exfoliation and hydration ideal for dry and dull skin types.</li>
            <li><strong>Signature Glow Facial: </strong>Targets dehydration, fine lines, and dullness with instant visible glow and hydration.</li>
          </ul>
        </div>

        {/* Chemical Peels */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Chemical Peels</h2>
          <p className="text-black mb-4">
            Painless, safe peels to remove dead cells and improve tone & texture. These clinical-grade treatments are tailored to address specific skin concerns effectively.
          </p>
          <ul className="list-disc pl-5 text-black space-y-2">
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
      <Footer />
    </main>
  );
}
