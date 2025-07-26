'use client'
import { CheckCircle, Clock, Users, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function QR678HairTherapyPage() {
  return (
    <main className="min-h-screen bg-white py-0">
      {/* Breadcrumbs */}
      <div className="py-4 flex justify-center">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Services</Typography>
          <Typography color="text.primary">QR678 Hair Therapy</Typography>
        </Breadcrumbs>
      </div>
      
      {/* Enhanced Hero Section */}
      <ServiceHero
        title="QR678 Hair Growth Therapy"
        description="Combat hair loss and promote natural hair regrowth with our advanced QR678 Hair Therapy. A patented, non-invasive treatment that revitalizes hair follicles and encourages healthy hair regeneration."
        imageSrc="/images/Hairqr678.png"
        imageAlt="QR678 Hair Therapy at Trikaay"
        ctaText="Book Consultation"
        ctaHref="/contact"
        stats={[
          { value: "20-30 min", label: "Session Time" },
          { value: "6-8", label: "Sessions Required" },
          { value: "0", label: "Downtime" },
          { value: "95%", label: "Success Rate" }
        ]}
        trustIndicators={[
          "Patented Technology",
          "FDA Approved Formulation",
          "Non-Surgical Treatment",
          "Natural Hair Regrowth"
        ]}
      />

      {/* Quick Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Natural Growth</h3>
              <p className="text-gray-600">Stimulates your body's natural hair growth mechanisms</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Sessions</h3>
              <p className="text-gray-600">Complete treatment in just 20-30 minutes per session</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
              <p className="text-gray-600">Clinically proven to improve hair density and thickness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">What is QR678 Hair Therapy?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              QR678 is a patented, non-invasive hair regrowth treatment that involves injecting a combination of growth factors and peptides into the scalp. It revitalizes hair follicles, prevents further hair loss, and encourages healthy hair regeneration.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Patented Technology</h4>
                  <p className="text-gray-600">Advanced formulation with proven clinical results</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Non-Surgical</h4>
                  <p className="text-gray-600">Minimally invasive treatment with no scarring</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Natural Results</h4>
                  <p className="text-gray-600">Stimulates your body's own hair growth mechanisms</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="/images/qr6782.jpeg" 
              alt="QR678 Hair Therapy Treatment" 
              width={500} 
              height={400} 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[var(--accent-color)]">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">How Does It Work?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Microinjection</h3>
              <p className="text-gray-600">Growth factors are delivered directly into the scalp using precise microinjections</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Follicle Activation</h3>
              <p className="text-gray-600">Dormant hair follicles are reactivated and blood supply is boosted</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Natural Growth</h3>
              <p className="text-gray-600">Keratin production is stimulated, leading to healthy hair regeneration</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Benefits of QR678 Therapy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-black mb-4">Primary Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Promotes natural hair regrowth
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Improves hair thickness and volume
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Non-surgical and painless
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Minimal downtime
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-black mb-4">Additional Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Clinically backed and FDA-approved
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Suitable for all genders and ages
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Targets specific areas of hair loss
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Long-lasting results
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Treatment Process */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Treatment Process & Timeline</h2>
          <div className="bg-gradient-to-r from-[var(--accent-color)]/5 to-[var(--accent-color)]/10 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-black">Session Details:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Duration: 20-30 minutes per session</li>
                  <li>• Frequency: Every 2-3 weeks</li>
                  <li>• Total Sessions: 6-8 sessions recommended</li>
                  <li>• Pain Level: Minimal discomfort</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-black">Expected Results:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Visible improvements after 2-3 sessions</li>
                  <li>• Full results after completing treatment cycle</li>
                  <li>• Enhanced density and reduced shedding</li>
                  <li>• Better scalp coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pre & Post Care */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Pre & Post Treatment Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="font-semibold text-lg mb-3 text-black">Before Treatment:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Avoid applying oil or hair products on treatment day</li>
                <li>• Wash hair thoroughly before the session</li>
                <li>• Inform us about any medications you're taking</li>
                <li>• Come with clean, dry hair</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="font-semibold text-lg mb-3 text-black">After Treatment:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Do not touch or scratch scalp for 24 hours</li>
                <li>• Avoid swimming, sauna, or heavy sweating for 48 hours</li>
                <li>• Follow our dermatologist's aftercare instructions</li>
                <li>• Schedule follow-up sessions as recommended</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Trikaay */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Why Choose Trikaay Aesthetics?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-black mb-4">Expert Care</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Experienced dermatologists and trichologists
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Customized treatment plans
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Latest FDA-approved equipment
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-black mb-4">Premium Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Safe, hygienic, and comfortable environment
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Ongoing support and follow-up care
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Proven track record of success
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a href="/contact" className="px-8 py-4 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg transform hover:scale-105">
            Book Your QR678 Consultation Today
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
