import Image from 'next/image';
import React from 'react';

interface ServiceHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaHref?: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText = 'Book Consultation',
  ctaHref = '/contact',
}) => (
  <section className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pb-20">
    {/* Accent background */}
    <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--accent-color)] opacity-20 rounded-full blur-3xl z-0"></div>
    <div className="md:w-1/2 z-10">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-black">{title}</h1>
      <div className="w-24 h-1 bg-[var(--accent-color)] rounded-full mb-6"></div>
      <p className="mb-6 text-lg text-black max-w-xl">{description}</p>
      {ctaText && ctaHref && (
        <a
          href={ctaHref}
          className="inline-block mt-4 px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg"
        >
          {ctaText}
        </a>
      )}
    </div>
    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 z-10">
      <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    </div>
  </section>
);

export default ServiceHero; 