import { CheckCircle, Clock, Users, Star, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import Contact from '../../components/Contact';

export default function ChemicalPeelsPage() {
  return (
    <main className="min-h-screen bg-white py-0">
      {/* Enhanced Hero Section */}
      <ServiceHero
        title="Advanced Chemical Peels"
        description="Safe, dermatologist-approved chemical peels to target acne, pigmentation, scars, and dull skin with minimal downtime. Customized treatments for your specific skin concerns."
        imageSrc="/images/ChemicalPeel.jpeg"
        imageAlt="Advanced Chemical Peels"
        ctaText="Book Consultation"
        ctaHref="#contact"
        stats={[
          { value: "20-30 min", label: "Session Time" },
          { value: "3-7 days", label: "Downtime" },
          { value: "87%", label: "Success Rate" },
          { value: "2200+", label: "Cases Treated" }
        ]}
        trustIndicators={[
          "Dermatologist-Approved",
          "Expert Care",
          "Customized Treatments",
          "Proven Results"
        ]}
      />

      {/* Back to Homepage Link */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-[var(--accent-color)] hover:text-yellow-600 transition-colors font-medium"
          >
            ← Back to Homepage
          </Link>
        </div>
      </section>

      {/* Quick Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Safe & Effective</h3>
              <p className="text-gray-600">Clinically proven treatments designed for Indian skin types</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Recovery</h3>
              <p className="text-gray-600">Minimal downtime with visible results in just days</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customized Care</h3>
              <p className="text-gray-600">Personalized treatment plans for your specific concerns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">Why Choose Trikaay for Chemical Peels?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Trikaay Aesthetics, we specialize in customized chemical peels designed to treat acne, pigmentation, melasma, dullness, and early signs of aging. Our treatments are backed by medical expertise and tailored specifically for Indian skin.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Expert Dermatologists</h4>
                  <p className="text-gray-600">Performed by qualified skin specialists</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Indian Skin Optimized</h4>
                  <p className="text-gray-600">Formulations designed for Indian skin types</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Clinical Supervision</h4>
                  <p className="text-gray-600">Safe procedures under medical supervision</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="/images/chemical_peel_2.png" 
              alt="Chemical Peel Treatment" 
              width={500} 
              height={400} 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[var(--accent-color)]">99%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* How Peels Work */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-black">How Our Peels Work</h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Chemical peels use active ingredients to exfoliate the skin, accelerate cell turnover, and stimulate collagen production. The result? Clearer, brighter, and more even-toned skin with improved texture and reduced imperfections.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Exfoliation</h3>
              <p className="text-gray-600">Removes dead skin cells and unclogs pores</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Cell Turnover</h3>
              <p className="text-gray-600">Stimulates production of new, healthy skin cells</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Collagen Boost</h3>
              <p className="text-gray-600">Increases collagen production for firmer skin</p>
            </div>
          </div>
        </div>

        {/* Popular Peels */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-black">Popular Peels We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-semibold text-black mb-4">Glycolic Peel</h4>
              <p className="text-gray-700 mb-4">Ideal for glow and texture refinement. Perfect for dull, uneven skin.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                  Improves skin texture and tone
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                  Reduces fine lines and wrinkles
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                  Unclogs pores and prevents acne
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-semibold text-black mb-4">TCA Peel</h4>
              <p className="text-gray-700 mb-4">Effective for pigmentation, acne scars, and deep rejuvenation.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                  Targets deep pigmentation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                  Reduces acne scars and marks
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-color)] mr-2" />
                  Stimulates collagen production
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-black">Key Features & Benefits</h3>
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
              <h4 className="font-semibold text-lg mb-3 text-black">Skin Concerns We Address</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Acne & acne scars
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Melasma & sun-induced pigmentation
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Tanning & dull skin
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Fine lines & early aging signs
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
                  <li>• Discontinue use of AHAs, BHAs, or retinoids 3–5 days prior</li>
                  <li>• Use gentle, non-active cleansers</li>
                  <li>• Stay hydrated and avoid excessive sun exposure</li>
                  <li>• Inform us about any medications or skin conditions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-black">After Your Session:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Apply sunscreen as advised</li>
                  <li>• Avoid makeup and exfoliation for 24–48 hours</li>
                  <li>• Expect mild redness or flaking — this is normal</li>
                  <li>• Follow up with moisturizers and recovery serums</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <p className="mb-8 text-lg text-gray-700 leading-relaxed">
          At Trikaay Aesthetics, we blend clinical precision with holistic care to give you glowing, healthy skin—safely and effectively. Our chemical peels are more than a treatment—they're a gateway to confident, radiant skin.
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <a href="#contact" className="px-8 py-4 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg transform hover:scale-105">
            ⭐ Book Your Chemical Peel Consultation Today
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
      
      <Footer />
    </main>
  );
}
