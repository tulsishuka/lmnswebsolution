
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Portfolio', href: '/portfolio' },
        { name: 'Our Process', href: '/process' },

    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50  backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        
        {/* Logo Area */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <Image 
                src="/Navbar/ull.webp" 
                alt='Strakzat Logo' 
                width={120} 
                height={40}
                className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop (Centered) */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-white text-base font-medium hover:text-gray-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button - Desktop */}
        <div className="hidden md:block flex-shrink-0">
          <Link href="/contact">
            <button className="bg-white text-gray-600 px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-gray-100 transition-all active:scale-95 shadow-md">
            Start Your Project
            </button>
          </Link>
        </div>

        {/* Hamburger Menu Icon - Mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050B1B] border-t border-white/10">
          <div className="px-6 pt-2 pb-6 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-white text-lg font-medium w-full text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-white text-gray-600 px-6 py-3 rounded-md font-semibold text-sm hover:bg-gray-100 transition-all active:scale-95 shadow-md">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;