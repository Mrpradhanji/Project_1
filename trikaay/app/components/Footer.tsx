'use client';

import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="bg-gray-100 backdrop-blur-md shadow-lg text-gray-900 py-8">
      <div className="container-custom mx-auto px-4 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6 mb-4">
          {/* Instagram Icon with Gradient on Hover */}
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-[#E1306C] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
          >
            <Instagram className="w-6 h-6" aria-hidden="true" focusable="false" />
          </a>

          {/* Facebook Icon */}
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-[#1877F3] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
          >
            <Facebook className="w-6 h-6" aria-hidden="true" focusable="false" />
          </a>

          {/* Twitter Icon */}
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-[#1DA1F2] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
          >
            <Twitter className="w-6 h-6" aria-hidden="true" focusable="false" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-[#0A66C2] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
          >
            <Linkedin className="w-6 h-6" aria-hidden="true" focusable="false" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Trikaay Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
