'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

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
    <>
      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              Where <span className="gradient-text">Excellence</span>
              <br />
              Meets Innovation
            </h1>

            {/* Subtitle */}
            <p className="slide-in-left font-inter text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the pinnacle of luxury and cutting-edge technology in our state-of-the-art facility, 
              where every detail is crafted for your ultimate satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-12">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-1">
                <CountUp end={500} duration={2.5} />+
              </div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">
                <CountUp end={50} duration={2.5} />+
              </div>
              <div className="text-gray-300">Expert Treatments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">
                <CountUp end={98} duration={2.5} />%
              </div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
