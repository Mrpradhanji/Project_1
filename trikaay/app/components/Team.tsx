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

  const teamMembers = {
    name: "Dr. Priya Sharma",
    position: "Chief Medical Director",
    specialization: "Homeopathy & Holistic Medicine",
    experience: "15+ Years",
    image: "/images/Doctor_Image.jpg",
    description: "Dr Priyanka is a Senior Consultant at Trikaay Homoeopathy Clinic. She is one of the best homeopathic doctors. She has more than 15 years of Clinical experience and got her education from a premier institution in India. Her credentials are accredited by CCRH, New Delhi. She has worked with reputed hospitals like Oswal Cancer Hospital Ludhiana, Lifeline hospital, Sri Guru Nanak Dev Homoeopathic Medical College & Hospital.Trikaay Homoeopathy Clinic has been helping people of Delhi NCR and surrounding areas for the last so many years with various medical problems using German homeopathic treatment philosophy",
    certifications: ["BHMS", "MD (Gold Medalist)"],
    achievements: ["5000+ Successful Cases", "Award-Winning Practitioner", "Published Research Papers"]
  };
  

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
              <span className="gradient-text">Expert Doctor</span>
            </h2>
            <div className="w-20 h-1 bg-accent-color rounded-full mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our highly qualified and experienced doctor brings together decades of expertise, 
              cutting-edge knowledge, and a passion for delivering exceptional results.
            </p>
          </div>
        </div>

        {/* Featured Doctor Section */}
        <div className="fade-in mb-20">
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
              {/* Doctor Image */}
              <div className="relative h-96 lg:h-full min-h-[500px]">
                <Image
                  src={teamMembers.image}
                  alt={teamMembers.name}
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                
                {/* Experience Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-inter font-bold text-accent-color text-sm">
                    {teamMembers.experience} Experience
                  </span>
                </div>
              </div>

              {/* Doctor Information */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    {teamMembers.name}
                  </h3>
                  <p className="font-inter font-bold text-xl text-accent-color mb-2">
                    {teamMembers.position}
                  </p>
                  <p className="font-inter text-lg text-gray-600 mb-4">
                    {teamMembers.specialization}
                  </p>
                </div>

                <p className="font-inter text-gray-700 leading-relaxed mb-6">
                  {teamMembers.description}
                </p>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="font-inter font-semibold text-gray-900 mb-3">Certifications</h4>
                  <div className="space-y-2">
                    {teamMembers.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent-color rounded-full"></div>
                        <span className="font-inter text-gray-600">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-inter font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {teamMembers.achievements.map((achievement, index) => (
                      <div key={index} className="bg-accent-color/10 text-accent-color px-3 py-2 rounded-lg text-center text-sm font-medium">
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                
              </div>
            </div>
          </div>
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