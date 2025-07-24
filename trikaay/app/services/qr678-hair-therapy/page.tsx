import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Footer from '../../components/Footer';
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
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pb-20">
        {/* Background Accent */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--accent-color)] opacity-20 rounded-full blur-3xl z-0"></div>
        <div className="md:w-1/2 z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">QR678 Hair Growth Therapy</h1>
          <div className="w-24 h-1 bg-[var(--accent-color)] rounded-full mb-6"></div>
          <p className="mb-6 text-lg text-black max-w-xl">Combat hair loss and promote natural hair regrowth with our advanced QR678 Hair Therapy, performed by experienced professionals at Trikaay Aesthetics.</p>
          <a href="/contact" className="inline-block mt-4 px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg">Book Consultation</a>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 z-10">
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image src="/images/Clinic_1.jpg" alt="QR678 Hair Therapy at Trikaay" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 -mt-10 mb-12">
        {/* What is QR678 Hair Therapy? */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold font-playfair mb-2 text-black">What is QR678 Hair Therapy?</h2>
          <div className="w-16 h-1  rounded-full mb-4"></div>
          <p className="mb-0 text-black text-lg">
            QR678 is a patented, non-invasive hair regrowth treatment that involves injecting a combination of growth factors and peptides into the scalp. It revitalizes hair follicles, prevents further hair loss, and encourages healthy hair regeneration, making it ideal for men and women experiencing thinning or balding.
          </p>
        </div>

        {/* How Does It Work? */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-2 text-black">How Does It Work?</h2>
          <div className="w-12 h-1  rounded-full mb-4"></div>
          <p className="mb-0 text-black text-lg">
            The therapy uses a precise formulation of naturally occurring growth factors. These are delivered directly into the scalp using microinjections, targeting areas with thinning hair. It boosts blood supply, reactivates dormant follicles, and stimulates keratin production.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-2 text-black">Benefits of QR678 Therapy</h2>
          <div className="w-12 h-1  rounded-full mb-4"></div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {[
              'Promotes natural hair regrowth',
              'Improves hair thickness and volume',
              'Non-surgical and painless',
              'Minimal downtime',
              'Clinically backed and FDA-approved formulation',
              'Suitable for all genders and ages',
            ].map((item) => (
              <li key={item} className="flex items-center text-gray-800 text-lg">
                <span className="w-3 h-3 bg-[var(--accent-color)] rounded-full mr-3 inline-block"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Who is it For? */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-2 text-black">Who is it For?</h2>
          <div className="w-12 h-1  rounded-full mb-4"></div>
          <p className="mb-0 text-gray-700 text-lg">
            QR678 therapy is ideal for individuals experiencing hair thinning, early-stage baldness, postpartum hair loss, or even hair fall due to hormonal changes or stress. A consultation with our experts will help determine your suitability.
          </p>
        </div>

        {/* Treatment Duration and Sessions */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-2 text-black">Treatment Duration and Sessions</h2>
          <div className="w-12 h-1  rounded-full mb-4"></div>
          <p className="mb-0 text-gray-700 text-lg">
            A typical session lasts 20–30 minutes. Most clients require 6–8 sessions spaced 2–3 weeks apart. Your personalized plan will be curated after the initial consultation.
          </p>
        </div>

        {/* Expected Results */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-2 text-black">Expected Results</h2>
          <div className="w-12 h-1  rounded-full mb-4"></div>
          <p className="mb-0 text-gray-700 text-lg">
            Visible improvements can be observed after 2–3 sessions, with full results appearing after completing the entire treatment cycle. Clients report enhanced density, reduced shedding, and better scalp coverage.
          </p>
        </div>

        {/* Pre- and Post-Treatment Care */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-2 text-black">Pre- and Post-Treatment Care</h2>
          <div className="w-12 h-1  rounded-full mb-4"></div>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>Avoid applying oil or hair products on the day of treatment.</li>
            <li>Wash hair thoroughly before the session.</li>
            <li>Do not touch or scratch the scalp post-treatment for 24 hours.</li>
            <li>Avoid swimming, sauna, or heavy sweating for 48 hours.</li>
          </ul>
        </div>

        {/* Why Choose Trikaay Aesthetics? */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-2 text-black">Why Choose Trikaay Aesthetics?</h2>
          <div className="w-12 h-1  rounded-full mb-4"></div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {[
              'Experienced dermatologists and trichologists',
              'Customized treatment plans based on your condition',
              'Latest FDA-approved equipment and technology',
              'Safe, hygienic, and comfortable clinic environment',
            ].map((item) => (
              <li key={item} className="flex items-center text-gray-800 text-lg">
                <span className="w-3 h-3 bg-[var(--accent-color)] rounded-full mr-3 inline-block"></span>
                {item}
              </li>
            ))}
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
