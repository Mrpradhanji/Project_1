'use client'
import { CheckCircle, Clock, Users, Star, Zap } from 'lucide-react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function MicroneedlingPage() {
  return (
    <main className="min-h-screen bg-white py-0">
      {/* Breadcrumbs */}
      <div className="py-4 flex justify-center">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Services</Typography>
          <Typography color="text.primary">Microneedling</Typography>
        </Breadcrumbs>
      </div>
      
      {/* Enhanced Hero Section */}
      <ServiceHero
        title="Microneedling with PRP / Derma Pen"
        description="Revitalize your skin with advanced microneedling technology. Our PRP-enhanced treatments stimulate natural collagen production, reduce scars, and restore your skin's natural glow with minimal downtime."
        imageSrc="/images/microneedle.jpg"
        imageAlt="Microneedling with PRP"
        ctaText="Book Consultation"
        ctaHref="/contact"
        stats={[
          { value: "45-60 min", label: "Treatment Time" },
          { value: "3-5 days", label: "Recovery Time" },
          { value: "85%", label: "Success Rate" },
          { value: "1200+", label: "Happy Clients" }
        ]}
        trustIndicators={[
          "FDA Approved Technology",
          "Expert Dermatologists",
          "Natural Collagen Stimulation",
          "Proven Results"
        ]}
      />

      {/* Quick Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Natural Stimulation</h3>
              <p className="text-gray-600">Triggers your body's natural healing and collagen production</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Long-lasting Results</h3>
              <p className="text-gray-600">Sustained improvements that continue to develop over time</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Versatile Treatment</h3>
              <p className="text-gray-600">Addresses multiple skin concerns in one procedure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">What is Microneedling with PRP?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Microneedling is a minimally invasive procedure that uses fine needles to create controlled micro-injuries in the skin. When combined with PRP (Platelet-Rich Plasma), it becomes a powerful treatment for skin rejuvenation, scar reduction, and texture improvement.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Advanced Technology</h4>
                  <p className="text-gray-600">FDA-approved Derma Pen technology</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Natural Healing</h4>
                  <p className="text-gray-600">Stimulates your body's own repair mechanisms</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Customized Depth</h4>
                  <p className="text-gray-600">Adjustable needle depth for different skin concerns</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="/images/prp.png"
              alt="Microneedling Treatment" 
              width={500} 
              height={400} 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[var(--accent-color)]">85%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">How Microneedling Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Micro-Injuries</h3>
              <p className="text-gray-600">Fine needles create controlled micro-channels in the skin</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Healing Response</h3>
              <p className="text-gray-600">Body triggers natural healing and collagen production</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Skin Renewal</h3>
              <p className="text-gray-600">New collagen and elastin improve texture and tone</p>
            </div>
          </div>
        </div>

        {/* Treatment Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Treatment Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-black mb-4">Skin Rejuvenation</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Improves skin texture and tone
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Reduces fine lines and wrinkles
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Minimizes pore size
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Enhances skin radiance and glow
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-black mb-4">Scar & Blemish Treatment</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Reduces acne scars and marks
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Improves surgical scar appearance
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Treats stretch marks
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Addresses pigmentation issues
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-black">Key Features of Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="font-semibold text-lg mb-3 text-black">Treatment Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Dermatologically formulated and tested
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Safe for Indian skin types and tones
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Minimal to no downtime
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Targets pigmentation, acne, tanning & uneven tone
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="font-semibold text-lg mb-3 text-black">Expert Care</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Performed by certified skin experts
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Customized treatment protocols
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Ongoing support and follow-up care
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Trusted for advanced skin rejuvenation in India
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pre & Post Care */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-black">Pre & Post Care Instructions</h3>
          <div className="bg-gradient-to-r from-[var(--accent-color)]/5 to-[var(--accent-color)]/10 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-black">Before Your Session:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Avoid retinoids, AHAs, and exfoliants for 5–7 days</li>
                  <li>• Keep skin clean and well-hydrated</li>
                  <li>• Inform us about any medications or skin conditions</li>
                  <li>• Avoid sun exposure and tanning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-black">After Your Session:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Avoid touching or washing face for 24 hours</li>
                  <li>• Use only recommended gentle products</li>
                  <li>• Apply sunscreen and avoid sun exposure</li>
                  <li>• Follow our dermatologist's aftercare plan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="mb-8 text-lg text-gray-700 leading-relaxed">
          At Trikaay Aesthetics, we believe in harnessing your body's natural healing power. Our microneedling treatments with PRP are designed to give you smoother, more radiant skin by stimulating your own collagen production and natural repair processes.
        </p>
        
        <div className="flex justify-center mt-8">
          <a href="/contact" className="px-8 py-4 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg transform hover:scale-105">
            ⭐ Book Your Microneedling Consultation Today
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
} 