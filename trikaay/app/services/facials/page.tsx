import { CheckCircle, Clock, Users, Star } from 'lucide-react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function FacialsPage() {
  return (
    <main className="min-h-screen bg-white py-0">
      {/* Breadcrumbs */}
      <div className="py-4 flex justify-center">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Services</Typography>
          <Typography color="text.primary">Facials</Typography>
        </Breadcrumbs>
      </div>
      
      {/* Enhanced Hero Section */}
      <ServiceHero
        title="Medical-Grade Facials & Hydrafacials"
        description="Experience the ultimate in skin rejuvenation with our advanced medical-grade facials. Go beyond salon treatments with FDA-approved technology that delivers visible, long-lasting results for all skin types."
        imageSrc="/images/HydraFacial.jpeg"
        imageAlt="Medical-Grade Facials & Hydrafacials"
        ctaText="Book Your Facial"
        ctaHref="/contact"
        stats={[
          { value: "60+ min", label: "Treatment Time" },
          { value: "95%", label: "Satisfaction Rate" },
          { value: "0", label: "Downtime" },
          { value: "5000+", label: "Happy Clients" }
        ]}
        trustIndicators={[
          "FDA Approved Technology",
          "Expert Dermatologists",
          "No Downtime Required",
          "Visible Results in 1 Session"
        ]}
      />

      {/* Quick Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick & Effective</h3>
              <p className="text-gray-600">Complete treatment in just 60 minutes with immediate visible results</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">All Skin Types</h3>
              <p className="text-gray-600">Suitable for sensitive, oily, dry, and combination skin types</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Experience</h3>
              <p className="text-gray-600">Luxurious treatment with expert care in a clinical environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">What Makes Our Facials Different?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Unlike basic salon facials, our medical-grade treatments use advanced technology and clinical-grade products to deliver professional results. Our dermatologist-supervised procedures target specific skin concerns with precision.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Advanced Technology</h4>
                  <p className="text-gray-600">FDA-approved equipment for safe, effective treatments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Expert Care</h4>
                  <p className="text-gray-600">Performed by qualified dermatologists and aestheticians</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Customized Treatment</h4>
                  <p className="text-gray-600">Tailored to your specific skin concerns and goals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="/images/Medifacial.jpeg" 
              alt="Medical Facial Treatment" 
              width={500} 
              height={400} 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[var(--accent-color)]">95%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Our Facial Treatments</h2>
        <p className="mb-6 text-gray-700 text-lg">Our comprehensive range of medical facials addresses every skin concern with proven results.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-semibold text-black mb-4">Hydrafacial</h3>
            <p className="text-gray-700 mb-4">Multi-step vortex technology that exfoliates, extracts, and infuses skin with potent serums.</p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                Deep cleansing and exfoliation
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                Blackhead and whitehead removal
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                Hydration and glow boost
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-semibold text-black mb-4">Medical Facials</h3>
            <p className="text-gray-700 mb-4">Clinical-grade treatments targeting specific skin concerns with medical supervision.</p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                Acne and pigmentation treatment
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                Anti-aging and collagen boost
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                Skin texture improvement
              </li>
            </ul>
          </div>
        </div>

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
        
        <h3 className="text-xl font-semibold mt-8 mb-2 text-[var(--primary-color)]">Key Features of Trikaay's Facial Services:</h3>
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

        {/* Pre & Post Care Section */}
        <div className="bg-gradient-to-r from-[var(--accent-color)]/5 to-[var(--accent-color)]/10 p-8 rounded-2xl mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-black">Pre & Post Care for Hydrafacial & Medi-Facial Sessions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-black">Before Your Session:</h4>
              <ul className="list-disc ml-6 text-gray-700 text-base space-y-1">
                <li>Avoid using AHAs, BHAs, or exfoliating products for 2–3 days</li>
                <li>Cleanse your skin gently and stay hydrated</li>
                <li>Consult our dermatologist if you're on any medication</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-black">After Your Session:</h4>
              <ul className="list-disc ml-6 text-gray-700 text-base space-y-1">
                <li>Do not expose your skin to direct sunlight for 48 hours</li>
                <li>Use only recommended moisturizers and sunscreen</li>
                <li>Avoid makeup and harsh products for 24–48 hours</li>
                <li>Follow our dermatologist's aftercare plan for best results</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mb-6 text-gray-700 text-lg">At Trikaay Aesthetics, we believe that healthy, glowing skin is just one treatment away. Whether you're preparing for a special occasion or investing in your long-term skincare journey, our medical facials in India are designed to give you clinically proven results with a luxurious experience.</p>
        
        <div className="flex justify-center mt-8">
          <a href="/contact" className="px-8 py-4 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg transform hover:scale-105">
            ⭐ Book Your Medical-Grade Facial at Trikaay Today
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
} 