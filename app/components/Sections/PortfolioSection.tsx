
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const PortfolioSection = () => {
  return (
    <section className="text-white py-24 px-12">
      <div className="max-w-6xl mx-auto">

        {/* Freelancer Header */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="md:w-2/3">
            <p className="text-gray-400 mb-2">Freelance Web & UI/UX Developer</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Crafting Modern Websites & Interactive Experiences
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
              We help businesses and individuals bring their ideas to life with responsive web 
              designs, clean code, and intuitive user experiences. From landing pages to full-stack 
              web apps, We deliver solutions that engage users and drive results.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <h4 className="font-bold mb-2">Services</h4>
            <ul className="text-gray-400 space-y-1">
           
<li>Websites for Local Businesses </li>
<li>Full-Stack Web Applications </li>
<li>Custom Website Development (Frontend & Backend)</li>
<li>Website Redesign & Performance Optimization</li>
<li>Design-to-Website Conversion (Figma to Code)</li>

            </ul>
          </div>
        </div>

        {/* Featured Image */}
        <div className="bg-[#E2E4FF] rounded-[32px] overflow-hidden min-h-[200px] flex items-center justify-center mb-12">
          <Image
            src="/images/phones.webp"
            alt="Freelance Project Preview"
            width={300}
            height={300}
            className="w-[70%] md:w-[50%] h-auto object-contain"
          />
        </div>

        {/* Redirect Button */}
       <div className="flex justify-center">
  <Link
    href="/portfolio"
    className="group flex items-center gap-3 
    bg-[linear-gradient(rgb(29,49,69)_0%,rgb(12,33,54)_100%)] 
    text-white font-semibold py-3 px-10 rounded-md 
    transition-all duration-300 shadow-xl"
  >
    Show More Work
  </Link>
</div>


      </div>
    </section>
  );
};

export default PortfolioSection;
