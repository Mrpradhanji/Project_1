'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Droplets, ScanLine, StretchHorizontal } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = servicesRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Skin Rejuvenation",
      description: "Gentle facials, peels, and hydrating care to restore your natural skin glow.",
      icon: <Droplets className="w-10 h-10 text-[#ffe0bd]" />,
      features: [
        "Medical-Grade Facials & Hydrafacials",
        "Chemical Peels",
        "Anti-Aging Solutions",
        "Acne & Pigmentation Management",
        "Under Eye & Lip Treatments",
        "Microneedling with PRP"
      ],
      image: "/images/Body_Skin.jpg",
      primaryLink: "/services/facials",
    },
    {
      title: "Hair Restoration",
      description: "Advanced hair growth therapies and treatments for natural hair regrowth.",
      icon: <ScanLine className="w-10 h-10 text-[#3b82f6]" />,
      features: [
        "QR678 Hair Growth Therapy",
        "Growth Factor Concentrate (GFC)",
        "PRP Hair Treatments",
        "Scalp Microneedling",
        "Hair Loss Consultation",
        "Hair Density Improvement"
      ],
      image: "/images/AdvancedSkin_Rend.jpg",
      primaryLink: "/services/qr678-hair-therapy",

    },
    {
      title: "Dermatology & Wellness",
      description: "Expert dermatological care and wellness solutions for optimal health and beauty.",
      icon: <StretchHorizontal className="w-10 h-10 text-[#10b981]" />,
      features: [
        "Comprehensive Skin Consultation",
        "Medical-Grade Treatments",
        "Holistic Wellness Approach",
        "Customized Treatment Plans",
        "Advanced Technology",
        "Expert Dermatological Care"
      ],
      image: "/images/Dermatology.jpg",
      primaryLink: "/services/anti-aging",

    }
  ];

  return (
    <section id="services" ref={servicesRef} className="section-padding bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-color/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-color/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Our{' '}
              <span className="gradient-text">Services</span>
            </h2>
            <div className="w-20 h-1 bg-accent-color rounded-full mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium treatments designed to enhance your natural beauty 
              and boost your confidence with cutting-edge technology and expert care.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="slide-in-left group w-full"
              tabIndex={0}
              role="region"
              aria-label={service.title}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click(); }}
              style={{ outline: 'none' }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 flex flex-col focus:outline-none focus:ring-2 focus:ring-accent-color focus:ring-offset-2">
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-playfair text-xl lg:text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-300 leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Service Image */}
                <div className="relative w-full h-64 lg:h-72 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Features List */}
                <div className="space-y-3 flex-grow mb-6">
                  <h4 className="font-inter font-semibold text-white mb-4 text-sm lg:text-base">Our treatments include:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-color rounded-full flex-shrink-0"></div>
                      <span className="font-inter text-gray-300 text-sm lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Service Links */}
                <div className="space-y-3">
                  <Link 
                    href={service.primaryLink}
                    className="block w-full bg-accent-color text-white font-semibold py-3 px-6 rounded-lg text-center hover:bg-yellow-600 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center fade-in">
          <Link 
            href="/services"
            className="inline-block bg-white text-gray-900 font-semibold py-4 px-8 rounded-full hover:bg-accent-color hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 