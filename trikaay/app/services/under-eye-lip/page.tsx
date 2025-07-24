import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Footer from '../../components/Footer';
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
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pb-20">
        <div className="md:w-1/2 z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-black">Under Eye & Lip Treatments</h1>
          <div className="w-24 h-1 bg-[var(--accent-color)] rounded-full mb-6"></div>
          <p className="mb-6 text-lg text-black max-w-xl">Revitalize your delicate under-eye and lip areas with advanced, dermatologist-recommended treatments at Trikaay Aesthetics. Target dark circles, fine lines, puffiness, and lip dullness with our FDA-approved, clinically proven solutions for brighter, smoother, and more youthful skin.</p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image src="/images/Clinic_2.jpg" alt="Under Eye & Lip Treatments" width={400} height={400} className="rounded-2xl shadow-2xl object-cover border-4 border-white" />
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--accent-color)] opacity-20 rounded-full blur-3xl z-0"></div>
      </section>

      {/* Details Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 -mt-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">What Are Under Eye & Lip Treatments?</h2>
        <p className="mb-6 text-gray-700 text-lg">Trikaay Aesthetics offers specialized under eye and lip treatments designed to address common concerns like dark circles, puffiness, fine lines, and lip pigmentation. Using advanced techniques and medical-grade products, our dermatologists help you achieve a refreshed, youthful look safely and effectively.</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Our Under Eye & Lip Solutions</h2>
        <p className="mb-6 text-gray-700 text-lg">Our treatments are performed by expert dermatologists using FDA-approved technology and protocols. Each session is tailored to your unique skin type and concern, ensuring visible, long-lasting results with minimal discomfort. Trikaay Aesthetics is a trusted name for advanced facial rejuvenation in India.</p>
        <h3 className="text-xl font-semibold mt-8 mb-2 text-[var(--primary-color)]">Popular Under Eye & Lip Treatments at Trikaay:</h3>
        <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            'Dark circle reduction with medical peels and serums',
            'Under eye brightening and hydration infusions',
            'Fine line and wrinkle smoothing with advanced actives',
            'Lip brightening and pigmentation correction',
            'Hydrating lip treatments for softness and plumpness',
            'Non-invasive, pain-free procedures',
          ].map((feature) => (
            <li key={feature} className="flex items-center text-gray-800 text-lg">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-2 text-[var(--primary-color)]">Key Features of Trikaay’s Under Eye & Lip Services:</h3>
        <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            'FDA-approved products and protocols',
            'Performed by expert dermatologists',
            'Visible reduction in dark circles and lip dullness',
            'Customized plans for every skin type',
            'Safe for sensitive skin and all ages',
            'Trusted for facial rejuvenation in India',
          ].map((feature) => (
            <li key={feature} className="flex items-center text-gray-800 text-lg">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-2 text-[var(--primary-color)]">Pre & Post Care for Under Eye & Lip Treatments</h3>
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-1 text-[var(--primary-color)]">Before Your Session:</h4>
          <ul className="list-disc ml-6 text-gray-700 text-base mb-2">
            <li>Avoid using retinoids or exfoliants for 2–3 days</li>
            <li>Keep the area clean and moisturized</li>
            <li>Inform our dermatologist about any allergies or medications</li>
          </ul>
          <h4 className="font-semibold text-lg mb-1 text-[var(--primary-color)]">After Your Session:</h4>
          <ul className="list-disc ml-6 text-gray-700 text-base">
            <li>Avoid rubbing or touching the treated area</li>
            <li>Use only recommended gentle creams and sunscreen</li>
            <li>Do not apply makeup for 24 hours</li>
            <li>Follow our dermatologist’s aftercare instructions for best results</li>
          </ul>
        </div>
        <p className="mb-6 text-gray-700 text-lg">At Trikaay Aesthetics, we believe that even the most delicate areas deserve expert care. Whether you want to brighten your eyes, smooth fine lines, or enhance your lips, our advanced under eye and lip treatments in India deliver visible, lasting results with a luxurious experience.</p>
        <div className="flex justify-center mt-8">
          <a href="/contact" className="px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg">⭐ Book Your Under Eye & Lip Treatment at Trikaay Today</a>
        </div>
      </section>
      <Footer />
    </main>
  );
} 