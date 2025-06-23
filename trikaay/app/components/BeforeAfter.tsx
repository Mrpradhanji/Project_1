'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
import { Droplets, ScanLine, StretchHorizontal, MessageCircle } from 'lucide-react';

const imageVariants: Variants = {
  hidden: { width: '0%' },
  visible: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const BeforeAfter = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'Advanced Skin Rejuvenation',
      description: 'Transform your skin with our advanced facial treatments and laser procedures',
      icon: <Droplets className="w-8 h-8" />,
      color: 'bg-[#ffe0bd]',
      beforeImage: '/images/laser_therapy.jpg',
      afterImage: '/images/after_laser_therapy.jpg',
      treatments: ['Facial Aesthetics', 'Laser Hair Removal', 'PRP Treatments', 'Dermal Fillers', 'Anti-wrinkle Injections'],
      testimonial: {
        text: 'I struggled with acne scars for years. After just 3 sessions of PRP treatment, my skin looks completely transformed. I feel confident again!',
        author: 'Miss Sujata, 26',
        treatment: 'PRP Treatment',
      },
    },
    {
      title: 'Body Treatments',
      description: 'Achieve your dream body with our comprehensive body sculpting treatments',
      icon: <ScanLine className="w-8 h-8" />,
      color: 'bg-[#3b82f6]',
      beforeImage: '/images/Before.jpg',
      afterImage: '/images/After.jpg',
      treatments: ['Laser Hair Removal', 'Radio Frequency', 'Fat Dissolving', 'Stretch Mark Treatment', 'Hyperhidrosis Treatment'],
      testimonial: {
        text: 'The laser hair removal treatment exceeded my expectations. Smooth, hair-free skin that lasts! Highly recommend.',
        author: 'Sneha Singh, 31',
        treatment: 'Laser Hair Removal',
      },
    },
    {
      title: 'Dermatology & Wellness',
      description: 'Expert dermatological care and wellness solutions for optimal health',
      icon: <StretchHorizontal className="w-8 h-8" />,
      color: 'from-teal-500 to-emerald-500',
      beforeImage: '/images/Skin_Reden.jpeg',
      afterImage: '/images/After_Skin_Reden.jpeg',
      treatments: ['Dermatology Consultation', 'IV Therapy', 'Chemical Peeling', 'Laser Resurfacing', 'Vascular Treatments'],
      testimonial: {
        text: 'The dermatology consultation and treatment plan completely cleared my skin issues. Professional care with amazing results!',
        author: 'Rashmika, 28',
        treatment: 'Dermatology Consultation',
      },
    },
  ];

  return (
    <section
      id="before-after"
      ref={sectionRef}
      className="section-padding relative bg-gradient-to-br from-white to-gray-100 overflow-hidden py-20"
      aria-label="Before and After Results"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Before & <span className="gradient-text">After</span>
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
            See the transformative results across all our services. Real patients, real results.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white rounded-full p-2 shadow-lg border border-gray-200">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-accent-color focus:ring-offset-2 ${
                  activeService === index
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-300 text-gray-900'
                }`}
                aria-label={service.title}
                aria-pressed={activeService === index}
              >
                <div aria-hidden="true">{service.icon}</div>
                <span className="font-inter font-medium text-sm hidden md:block">
                  {service.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Service Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${services[activeService].color} px-6 py-3 rounded-full mb-4`}>
              {services[activeService].icon}
              <h3 className="font-playfair text-2xl font-bold text-black">
                {services[activeService].title}
              </h3>
            </div>
            <p className="text-gray-600 font-inter text-lg max-w-2xl mx-auto">
              {services[activeService].description}
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Before Image */}
            <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <motion.div
                className="absolute top-0 left-0 h-full"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={imageVariants}
              >
                <Image
                  src={services[activeService].beforeImage}
                  alt="Before"
                  fill
                  className="object-cover rounded-l-xl"
                />
              </motion.div>
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md z-10">
                BEFORE
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-xs">
                {services[activeService].treatments[0]}
              </div>
            </div>

            {/* After Image */}
            <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <motion.div
                className="absolute top-0 left-0 h-full"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={imageVariants}
              >
                <Image
                  src={services[activeService].afterImage}
                  alt="After"
                  fill
                  className="object-cover rounded-r-xl"
                />
              </motion.div>
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md z-10">
                AFTER
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-xs">
                {services[activeService].treatments[0]}
              </div>
            </div>
          </div>

          {/* Treatments and Testimonial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Treatments */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h4 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                Available Treatments
              </h4>
              <div className="space-y-3">
                {services[activeService].treatments.map((treatment, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-color rounded-full flex-shrink-0"></div>
                    <span className="font-inter text-gray-700">{treatment}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-accent-color to-gray-600 rounded-xl p-6 text-white">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-black" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-playfair text-gray-900 text-xl font-bold mb-1">
                    Patient Testimonial
                  </h4>
                  <p className="text-sm text-gray-900 opacity-90">
                    {services[activeService].testimonial.treatment}
                  </p>
                </div>
              </div>
              <p className="italic text-gray-900 leading-relaxed mb-4">
                "{services[activeService].testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900">
                  — {services[activeService].testimonial.author}
                </span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-300">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to See <span className="gradient-text">Your Transformation?</span>
              </h3>
              <p className="font-inter text-xl text-white/90 mb-8">
                Book your consultation today and start your journey to a more confident you.
              </p>
              <p className='text-white'>
                Book <span className="gradient-text">Consultation</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
