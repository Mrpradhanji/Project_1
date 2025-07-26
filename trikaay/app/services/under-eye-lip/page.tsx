import { CheckCircle, Clock, Users, Star, Eye } from 'lucide-react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function UnderEyeLipPage() {
  return (
    <main className="min-h-screen bg-white py-0">
      {/* Breadcrumbs */}
      <div className="py-4 flex justify-center">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Services</Typography>
          <Typography color="text.primary">Under Eye & Lip</Typography>
        </Breadcrumbs>
      </div>
      
      {/* Enhanced Hero Section */}
      <ServiceHero
        title="Under Eye & Lip Treatments"
        description="Revitalize delicate under-eye and lip areas with our advanced treatments. Target dark circles, fine lines, lip dullness, and volume loss for a refreshed, youthful appearance."
        imageSrc="/images/undereye.jpg"
        imageAlt="Under Eye & Lip Treatments"
        ctaText="Book Consultation"
        ctaHref="/contact"
        stats={[
          { value: "30-45 min", label: "Treatment Time" },
          { value: "0-1 day", label: "Downtime" },
          { value: "90%", label: "Satisfaction Rate" },
          { value: "1500+", label: "Happy Clients" }
        ]}
        trustIndicators={[
          "Expert Dermatologists",
          "Safe for Delicate Areas",
          "Natural Looking Results",
          "Minimal Discomfort"
        ]}
      />

      {/* Quick Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Bright Eyes</h3>
              <p className="text-gray-600">Reduce dark circles and brighten the under-eye area</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Recovery</h3>
              <p className="text-gray-600">Minimal downtime with immediate visible improvements</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[var(--accent-color)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Natural Results</h3>
              <p className="text-gray-600">Subtle enhancements that look naturally beautiful</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">What Are Under Eye & Lip Treatments?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our specialized treatments focus on the delicate areas around the eyes and lips, addressing common concerns like dark circles, fine lines, volume loss, and lip dullness. These treatments restore youthfulness and enhance natural beauty.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Specialized Care</h4>
                  <p className="text-gray-600">Treatments designed for delicate facial areas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Expert Precision</h4>
                  <p className="text-gray-600">Performed by experienced dermatologists</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Customized Approach</h4>
                  <p className="text-gray-600">Tailored to your specific concerns and goals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="/images/under_eye.png" 
              alt="Under Eye & Lip Treatment" 
              width={500} 
              height={400} 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[var(--accent-color)]">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Treatment Types */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Our Treatment Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-black mb-4">Under Eye Treatments</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Dark circle reduction and brightening
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Fine line and wrinkle softening
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Under-eye bag reduction
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Volume restoration and contouring
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-black mb-4">Lip Enhancement</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Lip volume and shape enhancement
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Lip line and wrinkle reduction
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Lip color and texture improvement
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Natural-looking lip enhancement
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">How Our Treatments Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Assessment</h3>
              <p className="text-gray-600">Detailed evaluation of your specific concerns</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Treatment</h3>
              <p className="text-gray-600">Precise application of targeted solutions</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-color)]">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Results</h3>
              <p className="text-gray-600">Visible improvements in appearance and texture</p>
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
                  Safe for delicate facial areas
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Minimal to no downtime
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--accent-color)] mr-3" />
                  Natural-looking results
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
                  Trusted for facial enhancement in India
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
                  <li>• Avoid blood thinners and alcohol for 24 hours</li>
                  <li>• Keep the treatment area clean and makeup-free</li>
                  <li>• Inform us about any medications or allergies</li>
                  <li>• Avoid sun exposure and tanning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-black">After Your Session:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Apply ice packs to reduce swelling if needed</li>
                  <li>• Avoid touching or massaging treated areas</li>
                  <li>• Use gentle skincare products as recommended</li>
                  <li>• Follow our dermatologist's aftercare instructions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="mb-8 text-lg text-gray-700 leading-relaxed">
          At Trikaay Aesthetics, we understand that the eyes and lips are focal points of beauty and expression. Our specialized treatments are designed to enhance these delicate areas naturally, helping you look refreshed and confident.
        </p>
        
        <div className="flex justify-center mt-8">
          <a href="/contact" className="px-8 py-4 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg transform hover:scale-105">
            ⭐ Book Your Under Eye & Lip Consultation Today
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
} 