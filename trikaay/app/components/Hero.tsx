'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { ArrowUp, PhoneCall } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Hero background images for carousel
  const heroImages = [
    {
      src: '/images/Clinic_1.jpg',
      alt: 'Clinic View 1',
    },
    {
      src: '/images/Clinic_2.jpg',
      alt: 'Clinic View 2',
    },
    {
      src: '/images/Clinic_3.jpg',
      alt: 'Clinic View 3',
    },
  ];
  const [current, setCurrent] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover transition-opacity duration-1000 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
              priority={current === idx}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10" aria-hidden="true"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-accent-color/20 to-transparent z-20" aria-hidden="true"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-30">
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent-color/20 rounded-full blur-xl animate-pulse" aria-hidden="true"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000" aria-hidden="true"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-accent-color/30 rounded-full blur-lg animate-pulse delay-2000" aria-hidden="true"></div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center animate-fade-in focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" aria-hidden="true" focusable="false" />
          </button>
        )}

        {/* WhatsApp Button (using PhoneCall icon as alternative) */}
        {showScrollTop && (
          <a
            href="https://wa.me/919999999999" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-8 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center animate-fade-in focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            aria-label="Chat on WhatsApp"
          >
            <PhoneCall className="w-6 h-6" aria-hidden="true" focusable="false" />
          </a>
        )}

        {/* Content */}
        <div className="container-custom relative z-40 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="fade-in font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Where <span className="text-[#86b300]">Excellence</span>
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
    </main>
  );
};

export default Hero;
