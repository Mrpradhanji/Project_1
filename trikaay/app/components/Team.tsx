'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Team = () => {
  const teamRef = useRef<HTMLDivElement>(null);

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

    const elements = teamRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Lead Dermatologist",
      specialization: "Advanced Aesthetics & Dermatology",
      experience: "15+ Years",
      image: "/images/trikaay_logo.jpeg.jpg",
      description: "Specialized in advanced facial aesthetics and dermatological procedures with a focus on natural-looking results.",
      certifications: ["Board Certified Dermatologist", "Fellowship in Aesthetic Medicine"],
      social: {
        linkedin: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. Michael Chen",
      position: "Aesthetic Physician",
      specialization: "Body Sculpting & Wellness",
      experience: "12+ Years",
      image: "/images/trikaay_logo.jpeg.jpg",
      description: "Expert in body contouring treatments and wellness solutions with a holistic approach to beauty.",
      certifications: ["Aesthetic Medicine Specialist", "Wellness Coach"],
      social: {
        linkedin: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Laser Specialist",
      specialization: "Advanced Laser Treatments",
      experience: "10+ Years",
      image: "/images/trikaay_logo.jpeg.jpg",
      description: "Pioneer in advanced laser technology and skin rejuvenation treatments for optimal results.",
      certifications: ["Laser Safety Officer", "Advanced Laser Certification"],
      social: {
        linkedin: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. James Wilson",
      position: "Wellness Director",
      specialization: "IV Therapy & Nutrition",
      experience: "8+ Years",
      image: "/images/trikaay_logo.jpeg.jpg",
      description: "Specialized in IV therapy and nutritional wellness programs for comprehensive health optimization.",
      certifications: ["IV Therapy Specialist", "Nutritional Medicine"],
      social: {
        linkedin: "#",
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" ref={teamRef} className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-color/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-color/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our{' '}
              <span className="gradient-text">Expert Team</span>
            </h2>
            <div className="w-20 h-1 bg-accent-color rounded-full mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team of highly qualified professionals brings together years of experience, 
              cutting-edge expertise, and a passion for delivering exceptional results.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="slide-in-left group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-gray-100 h-full">
                {/* Member Image */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <a href={member.social.linkedin} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={member.social.instagram} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inter font-semibold text-accent-color mb-1">
                    {member.position}
                  </p>
                  <p className="font-inter text-sm text-gray-600 mb-3">
                    {member.specialization}
                  </p>
                  
                  {/* Experience Badge */}
                  <div className="inline-block bg-accent-color/10 text-accent-color px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {member.experience} Experience
                  </div>

                  {/* Description */}
                  <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Certifications */}
                  <div className="space-y-2">
                    {member.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent-color rounded-full"></div>
                        <span className="font-inter text-xs text-gray-500">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-in text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Ready to Meet Our Experts?
            </h3>
            <p className="font-inter text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our experienced team and discover how we can help you 
              achieve your aesthetic and wellness goals.
            </p>
            <button className="bg-accent-color text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 