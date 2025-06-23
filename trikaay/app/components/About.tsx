'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  // Clinic images for carousel
  const clinicImages = [
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

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % clinicImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clinicImages.length]);

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

    const elements = aboutRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Expert Care",
      description: "Our team of certified professionals ensures the highest standards of care and safety."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Advanced Technology",
      description: "State-of-the-art equipment and cutting-edge treatments for optimal results."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Luxury Experience",
      description: "Premium facilities designed for your comfort and relaxation during treatments."
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" aria-label="About Trikaay Clinic">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-color/5 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-color/10 rounded-full blur-3xl" aria-hidden="true"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Trikaay</span>
              </h2>
              <div className="w-20 h-1 bg-accent-color rounded-full"></div>
            </div>

            <div className="slide-in-left space-y-6">
              <p className="font-inter text-lg text-gray-700 leading-relaxed">
                At Trikaay, we believe in the perfect harmony of luxury, innovation, and personalized care. 
                Our mission is to provide exceptional aesthetic and wellness services that enhance your natural beauty 
                and boost your confidence.
              </p>
              
              <p className="font-inter text-lg text-gray-700 leading-relaxed">
                With years of experience and a commitment to excellence, our team of skilled professionals 
                is dedicated to delivering outstanding results through advanced treatments and cutting-edge technology. 
                We understand that every individual is unique, which is why we create personalized treatment plans 
                tailored to your specific needs and goals.
              </p>

              <p className="font-inter text-lg text-gray-700 leading-relaxed">
                From the moment you step into our elegant facility, you'll experience the perfect blend of 
                sophistication and comfort. Our state-of-the-art equipment and premium products ensure 
                the highest quality results while maintaining the utmost safety standards.
              </p>
            </div>

            {/* Features */}
            <div className="slide-in-right grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-color/10 rounded-lg flex items-center justify-center text-accent-color group-hover:bg-accent-color group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="fade-in">
              <button className="group bg-gray-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
                <span className="flex items-center space-x-2">
                  <span>Learn More About Us</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="slide-in-right relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={clinicImages[current].src}
                alt={clinicImages[current].alt}
                fill
                className="object-cover transition-all duration-3000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {clinicImages.map((img, idx) => (
                  <button
                    key={img.src}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-color focus:ring-offset-2 ${
                      current === idx ? 'bg-accent-color scale-125' : 'bg-white/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                    aria-pressed={current === idx}
                  />
                ))}
              </div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-color mb-1">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
            {/* Floating Award Card */}
            <div className="absolute -top-8 -right-8 bg-accent-color text-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl text-gray-600 font-bold mb-1">Award</div>
                <div className="text-sm text-gray-600 opacity-90">Winning Clinic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 