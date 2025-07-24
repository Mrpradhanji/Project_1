'use client';

import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="bg-gray-100 backdrop-blur-md shadow-lg text-gray-900 py-8">
      <div className="container-custom mx-auto px-4">
        <div className="flex items-center justify-start space-x-8">
          {/* Logo */}
          <div className="relative w-28 h-16">
            <Image
              src="/images/trikaay_logo_black.png"
              alt="Trikaay Logo"
              fill
              className="object-contain"
            />
          </div>
          {/* Social Icons and Copyright */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 w-full">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/lensteasers.kids?igsh=ZWVyc3ZpNHpjc2Ry"
                aria-label="Instagram"
                className="hover:text-[#E1306C] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
              >
                <Instagram className="w-6 h-6" aria-hidden="true" focusable="false" />
              </a>
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/lensteasersphotography/"
                aria-label="Facebook"
                className="hover:text-[#1877F3] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
              >
                <Facebook className="w-6 h-6" aria-hidden="true" focusable="false" />
              </a>
            </div>
            {/* Copyright */}
            <p className="text-sm mt-2 md:mt-0">
              &copy; {new Date().getFullYear()} Trikaay Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
