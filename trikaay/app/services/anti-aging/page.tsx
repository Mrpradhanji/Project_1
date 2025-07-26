import { CheckCircle, Clock, Users, Star, Heart } from 'lucide-react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function AntiAgingPage() {
  return (
    <main className="min-h-screen bg-white py-0">
      {/* Breadcrumbs */}
      <div className="py-4 flex justify-center">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Services</Typography>
          <Typography color="text.primary">Anti-Aging</Typography>
        </Breadcrumbs>
      </div>
      
      {/* Enhanced Hero Section */}
      <ServiceHero
        title="Anti-Aging Solutions"
        description="Rediscover youthful, radiant skin with our advanced anti-aging treatments. Our dermatologist-recommended, FDA-approved solutions target fine lines, wrinkles, sagging, and loss of elasticity for visibly firmer, smoother skin."
        imageSrc="/images/anti-aging.jpg"
        imageAlt="Anti-Aging Solutions"
        ctaText="Book Consultation"
        ctaHref="/contact"
        stats={[
          { value: "45-60 min", label: "Treatment Time" },
          { value: "0-1 day", label: "Downtime" },
          { value: "92%", label: "Satisfaction Rate" },
          { value: "3000+", label: "Happy Clients" }
        ]}
        trustIndicators={[
          "FDA Approved Technology",
          "Expert Dermatologists",
          "Natural Looking Results",
          "Long-lasting Effects"
        ]}
      />

      {/* Quick Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Natural Results</h3>
              <p className="text-gray-600">Achieve a refreshed, youthful appearance without looking overdone</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Recovery</h3>
              <p className="text-gray-600">Minimal downtime with visible improvements in just days</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Proven Technology</h3>
              <p className="text-gray-600">Advanced treatments backed by clinical research and FDA approval</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">What Are Anti-Aging Solutions?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Trikaay Aesthetics offers a comprehensive range of anti-aging treatments designed to combat the visible signs of aging. Our expert dermatologists use the latest technology and clinically proven methods to help you look as young as you feel.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Advanced Technology</h4>
                  <p className="text-gray-600">Latest FDA-approved equipment and techniques</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Expert Care</h4>
                  <p className="text-gray-600">Performed by experienced dermatologists</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Customized Plans</h4>
                  <p className="text-gray-600">Tailored to your specific aging concerns</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="/images/anti-aging_2.png" 
              alt="Anti-Aging Treatment" 
              width={500} 
              height={400} 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[var(--accent-color)]">97%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Treatment Types */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Our Anti-Aging Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-black mb-4">Non-Surgical Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Fine line and wrinkle softening
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Skin tightening and firming
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Collagen stimulation therapies
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Volume restoration and contouring
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-black mb-4">Advanced Procedures</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Anti-aging facials with advanced actives
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Non-surgical face lifting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Skin rejuvenation treatments
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Texture and tone improvement
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">How Anti-Aging Treatments Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of your skin concerns and goals</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Treatment</h3>
              <p className="text-gray-600">Targeted procedures to address specific aging signs</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Results</h3>
              <p className="text-gray-600">Visible improvements in texture, tone, and firmness</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-black">Key Features of Trikaay's Anti-Aging Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="font-semibold text-lg mb-3 text-black">Safety & Quality</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  FDA-approved anti-aging equipment and products
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Performed by expert dermatologists
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Visible improvement in firmness and smoothness
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="font-semibold text-lg mb-3 text-black">Personalized Care</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Customized protocols for every skin type
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Minimal downtime and safe for Indian skin
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
          <h3 className="text-xl font-semibold mb-6 text-black">Pre & Post Care for Anti-Aging Treatments</h3>
          <div className="bg-gradient-to-r from-[var(--accent-color)]/5 to-[var(--accent-color)]/10 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-black">Before Your Session:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Avoid retinoids, AHAs, and exfoliants for 3–5 days</li>
                  <li>• Keep your skin clean and well-hydrated</li>
                  <li>• Inform our dermatologist about any medications</li>
                  <li>• Avoid sun exposure and tanning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-black">After Your Session:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Avoid direct sun exposure and use sunscreen regularly</li>
                  <li>• Do not use makeup or harsh products for 24–48 hours</li>
                  <li>• Use only recommended gentle moisturizers and serums</li>
                  <li>• Follow our dermatologist's aftercare instructions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="mb-8 text-lg text-gray-700 leading-relaxed">
          At Trikaay Aesthetics, we believe in delivering clinically proven, visible results with every anti-aging session. Whether you want to smooth wrinkles, tighten skin, or restore youthful contours, our advanced anti-aging treatments in India are your path to timeless beauty.
        </p>
        
        <div className="flex justify-center mt-8">
          <a href="/contact" className="px-8 py-4 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg transform hover:scale-105">
            ⭐ Book Your Anti-Aging Consultation at Trikaay Today
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
} 