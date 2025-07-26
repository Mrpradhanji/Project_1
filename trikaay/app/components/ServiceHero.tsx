import Image from 'next/image';
import React from 'react';

interface ServiceHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaHref?: string;
  stats?: Array<{ label: string; value: string }>;
  trustIndicators?: string[];
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText = 'Book Consultation',
  ctaHref = '/contact',
  stats = [],
  trustIndicators = []
}) => (
  <section className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pb-20">
    {/* Accent background */}
    <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--accent-color)] opacity-20 rounded-full blur-3xl z-0"></div>
    <div className="md:w-1/2 z-10">
      <div className="mb-4">
        <span className="inline-block bg-[var(--accent-color)]/10 text-[var(--accent-color)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Premium Treatment
        </span>
      </div>
      <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-black leading-tight">{title}</h1>
      <div className="w-24 h-1 bg-[var(--accent-color)] rounded-full mb-6"></div>
      <p className="mb-6 text-lg text-gray-700 max-w-xl leading-relaxed">{description}</p>
      
      {/* Trust Indicators */}
      {trustIndicators.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-3">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {indicator}
            </div>
          ))}
        </div>
      )}

      {/* Stats */}
      {stats.length > 0 && (
        <div className="mb-8 grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-[var(--accent-color)]">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* CTA Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {ctaText}
          </a>
        )}
        <a
          href="/#contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[var(--accent-color)] text-[var(--accent-color)] font-semibold hover:bg-[var(--accent-color)] hover:text-white transition-all text-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Free Consultation
        </a>
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 z-10">
      <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        {/* Floating badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
          <span className="text-sm font-semibold text-gray-800">FDA Approved</span>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceHero; 