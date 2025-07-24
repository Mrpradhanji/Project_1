import React from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function QR678HairTherapyPage() {
  return (
    <main className="min-h-screen gradient-bg py-0">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between container-custom pt-16 pb-12 md:pb-20">
        <div className="md:w-1/2 z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">QR678 Hair Growth Therapy</h1>
          <div className="w-24 h-1 bg-[var(--accent-color)] rounded-full mb-6"></div>
          <p className="mb-6 text-lg text-gray-100 max-w-xl">Combat hair loss and promote natural hair regrowth with our advanced QR678 Hair Therapy, performed by experienced professionals at Trikaay Aesthetics.</p>
          <a href="/contact" className="inline-block mt-4 px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg">Book Consultation</a>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image src="/images/Clinic_1.jpg" alt="QR678 Hair Therapy" width={400} height={400} className="rounded-2xl shadow-2xl object-cover border-4 border-white" />
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--accent-color)] opacity-20 rounded-full blur-3xl z-0"></div>
      </section>

      {/* Details Section */}
      <section className="container-custom bg-white/90 rounded-3xl shadow-xl px-6 py-10 md:py-16 md:px-16 -mt-10 relative z-10 mb-12">
        <h2 className="text-3xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">What is QR678 Hair Therapy?</h2>
        <p className="mb-6 text-gray-700 text-lg">
          QR678 is a patented, non-invasive hair regrowth treatment that involves injecting a combination of growth factors and peptides into the scalp. It revitalizes hair follicles, prevents further hair loss, and encourages healthy hair regeneration, making it ideal for men and women experiencing thinning or balding.
        </p>

        <h2 className="text-2xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">How Does It Work?</h2>
        <p className="mb-6 text-gray-700 text-lg">
          The therapy uses a precise formulation of naturally occurring growth factors. These are delivered directly into the scalp using microinjections, targeting areas with thinning hair. It boosts blood supply, reactivates dormant follicles, and stimulates keratin production.
        </p>

        <h2 className="text-2xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">Benefits of QR678 Therapy</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6">
          {[
            'Promotes natural hair regrowth',
            'Improves hair thickness and volume',
            'Non-surgical and painless',
            'Minimal downtime',
            'Clinically backed and FDA-approved formulation',
            'Suitable for all genders and ages',
          ].map((item) => (
            <li key={item} className="flex items-center text-gray-800 text-lg">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">Who is it For?</h2>
        <p className="mb-6 text-gray-700 text-lg">
          QR678 therapy is ideal for individuals experiencing hair thinning, early-stage baldness, postpartum hair loss, or even hair fall due to hormonal changes or stress. A consultation with our experts will help determine your suitability.
        </p>

        <h2 className="text-2xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">Treatment Duration and Sessions</h2>
        <p className="mb-6 text-gray-700 text-lg">
          A typical session lasts 20–30 minutes. Most clients require 6–8 sessions spaced 2–3 weeks apart. Your personalized plan will be curated after the initial consultation.
        </p>

        <h2 className="text-2xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">Expected Results</h2>
        <p className="mb-6 text-gray-700 text-lg">
          Visible improvements can be observed after 2–3 sessions, with full results appearing after completing the entire treatment cycle. Clients report enhanced density, reduced shedding, and better scalp coverage.
        </p>

        <h2 className="text-2xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">Pre- and Post-Treatment Care</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
          <li>Avoid applying oil or hair products on the day of treatment.</li>
          <li>Wash hair thoroughly before the session.</li>
          <li>Do not touch or scratch the scalp post-treatment for 24 hours.</li>
          <li>Avoid swimming, sauna, or heavy sweating for 48 hours.</li>
        </ul>

        <h2 className="text-2xl font-semibold font-playfair mb-4 text-[var(--primary-color)]">Why Choose Trikaay Aesthetics?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-10">
          {[
            'Experienced dermatologists and trichologists',
            'Customized treatment plans based on your condition',
            'Latest FDA-approved equipment and technology',
            'Safe, hygienic, and comfortable clinic environment',
          ].map((item) => (
            <li key={item} className="flex items-center text-gray-800 text-lg">
              <CheckCircle className="w-6 h-6 text-[var(--accent-color)] mr-3" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <a href="/contact" className="px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg">Book Your Consultation</a>
        </div>
      </section>
    </main>
  );
}
