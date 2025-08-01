'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'QR678 Hair Therapy', href: '/services/qr678-hair-therapy' },
        { name: 'Medical-Grade Facials & Hydrafacials', href: '/services/facials' },
        { name: 'Chemical Peels', href: '/services/chemical-peels' },
        { name: 'Acne & Pigmentation Management', href: '/services/acne-pigmentation' },
        { name: 'Anti-Aging Solutions', href: '/services/anti-aging' },
        { name: 'Microneedling with PRP / Derma Pen', href: '/services/microneedling' },
        { name: 'Under Eye & Lip Treatments', href: '/services/under-eye-lip' },
        {name :'Growth Factor Concentrate', href: '/services/gfc'}
      ]
    },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
    
  ];

  return (
    <>
    
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between py-2 w-full px-4 lg:px-8">
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-3">
          <div className="relative w-28 h-16 transition-all duration-300">
            <Image
              src={isScrolled ? '/images/trikaay_logo_black.png' : '/images/trikaay_logo_white.png'}
              alt="Trikaay Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            item.dropdown ? (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`font-inter font-medium transition-all duration-300 relative group ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } flex items-center`}
                >
                  <span className="relative">
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                        isScrolled ? 'bg-accent-color' : 'bg-accent-color'
                      }`}
                    ></span>
                  </span>
                  <svg className="ml-1 w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </Link>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50 py-2 border border-gray-200">
                  {item.dropdown.map((drop) => (
                    <Link
                      key={drop.name}
                      href={drop.href}
                      className="block px-6 py-3 text-gray-700 hover:bg-accent-color/10 hover:text-accent-color font-inter text-base transition-all duration-200"
                    >
                      {drop.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`font-inter font-medium transition-all duration-300 relative group ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span className="relative">
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-accent-color' : 'bg-accent-color'
                    }`}
                  ></span>
                </span>
                <span className="absolute -inset-1 bg-accent-color/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
              </Link>
            )
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link href="#contact" className="w-full block">
            <button className="group bg-gray-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Book Consultation</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col items-end justify-center space-y-1 p-2"
        >
          <div
            className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-gray-900' : 'bg-white'
            } ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}
          ></div>
          <div
            className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-gray-900' : 'bg-white'
            } ${isMenuOpen ? 'opacity-0' : ''}`}
          ></div>
          <div
            className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-gray-900' : 'bg-white'
            } ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
          ></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="container-custom">
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-inter font-medium text-gray-700 hover:text-accent-color transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link href="#contact" className="w-full block">
              <button className="group bg-gray-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Book Consultation</span>
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
