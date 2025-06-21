'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent-color/20 to-transparent z-20"></div>
        <Image
          src="/images/trikaay_logo.jpeg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-30">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-color/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-accent-color/30 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-40 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="fade-in font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Where{' '}
            <span className="gradient-text">Excellence</span>
            <br />
            Meets Innovation
          </h1>

          {/* Subtitle */}
          <p className="slide-in-left font-inter text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the pinnacle of luxury and cutting-edge technology in our state-of-the-art facility, 
            where every detail is crafted for your ultimate satisfaction.
          </p>

          {/* CTA Buttons */}
          <div className="slide-in-right flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-accent-color text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="flex items-center space-x-2">
                <span>Book Your Consultation</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center space-x-2">
                <span>Explore Services</span>
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="fade-in mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-color mb-2">500+</div>
              <div className="text-gray-300 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-color mb-2">50+</div>
              <div className="text-gray-300 font-medium">Expert Treatments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-color mb-2">98%</div>
              <div className="text-gray-300 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-color rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 