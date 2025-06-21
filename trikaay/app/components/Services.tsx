'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

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
      title: "Facial Treatments",
      description: "Advanced facial aesthetics and rejuvenation treatments for radiant, youthful skin.",
      icon: "✨",
      features: [
        "Specialist facial aesthetics",
        "Laser Hair Removal",
        "PRP treatments",
        "Dermal Fillers",
        "Skin Boosters",
        "Anti-wrinkle injections"
      ],
      image: "/images/trikaay_logo.jpeg.jpg",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Body Treatments",
      description: "Comprehensive body sculpting and wellness treatments for your complete transformation.",
      icon: "💪",
      features: [
        "Laser Hair Removal",
        "Radio Frequency treatments",
        "PRP for scarring",
        "Fat dissolving",
        "Stretch mark treatments",
        "Hyperhidrosis treatment"
      ],
      image: "/images/trikaay_logo.jpeg.jpg",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Dermatology & Wellness",
      description: "Expert dermatological care and wellness solutions for optimal health and beauty.",
      icon: "🌿",
      features: [
        "Dermatology consultation",
        "IV therapy",
        "Chemical peeling",
        "Laser resurfacing",
        "Vascular treatments",
        "Pigmented laser treatments"
      ],
      image: "/images/trikaay_logo.jpeg.jpg",
      color: "from-green-500 to-emerald-600"
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
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="slide-in-left group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full hover-lift border border-white/10 transition-all duration-500 hover:bg-white/10">
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Image */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`}></div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="font-inter font-semibold text-white mb-4">Our treatments include:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-color rounded-full flex-shrink-0"></div>
                      <span className="font-inter text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button className="w-full bg-accent-color text-white py-3 px-6 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-in text-center mt-16">
          <div className="bg-gradient-to-r from-accent-color to-yellow-500 rounded-2xl p-8 md:p-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Look?
            </h3>
            <p className="font-inter text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your consultation today and let our experts create a personalized treatment plan 
              tailored to your unique needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                View All Treatments
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 