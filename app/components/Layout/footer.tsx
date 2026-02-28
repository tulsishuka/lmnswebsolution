"use client";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#040615] text-white mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex  md:grid md:grid-cols-3 gap-12">

          {/* Brand Section */}
          <div className="flex flex-col gap-3">

            <Image
              src="/Navbar/ull.webp"
              alt="LMNS Web Solution Logo"
              width={150}
              height={50}
            />

            {/* Hidden on Phone */}
            <p className="hidden sm:block text-gray-400 text-sm leading-relaxed max-w-xs">
              Helping local businesses grow online with modern, responsive 
              and high-converting websites.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/tulsishukla/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li>UI/UX Design</li>
              <li>Frontend Development</li>
              <li>Landing Page Design</li>
              <li>Local Business Websites</li>
              <li>Website Rebuild & Redesign</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li><a href="/portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="/process" className="hover:text-white transition">Our Process</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;