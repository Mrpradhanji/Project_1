'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';

const imageVariants: Variants = {
  hidden: { width: '0%' },
  visible: {
    width: '100%',
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const BeforeAfter = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="before-after"
      ref={sectionRef}
      className="section-padding relative bg-gradient-to-br from-white to-gray-100 overflow-hidden py-20"
    >
      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Before & After
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            See the difference our treatments can make.
          </p>
        </div>

        {/* Split Image Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {/* Before Image */}
          <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg border border-gray-200">
            <motion.div
              className="absolute top-0 left-0 h-full"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={imageVariants}
            >
              <Image
                src="/images/Before.jpg"
                alt="Before Treatment"
                fill
                className="object-cover rounded-l-xl"
              />
            </motion.div>
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md z-10">
              BEFORE
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
                src="/images/After.jpg"
                alt="After Treatment"
                fill
                className="object-cover rounded-r-xl"
              />
            </motion.div>
            <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md z-10">
              AFTER
            </div>
          </div>
        </div>

        {/* Review */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="italic text-gray-700 text-lg font-inter leading-relaxed">
            "I struggled with acne for years. After just a few months of natural treatment, my skin looks flawless. I feel confident again!"
          </p>
          <span className="mt-4 block text-gray-900 font-bold text-md">
            — Sarah M., 24
          </span>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
