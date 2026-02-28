
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    // <section className="min-h-screen bg-[#030712] text-white px-6 md:px-16 py-16">
    <section className="bg-[#030712] text-white px-6 md:px-16 py-16">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-3 mt-10">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Navbar/ull.webp"
              alt="Strakzat Logo"
              width={180}
              height={60}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Bigger Sentences */}
        <div className="space-y-8 text-gray-300 text-xl md:text-2xl leading-relaxed mb-14">
          <p>
            At <span className="text-blue-400 font-semibold">LMNS Web Solution</span>, 
            we help small businesses and startups build responsive websites 
            that create a strong online presence.
          </p>

          <p>
            Our goal is simple — to design clean, fast, and professional 
            websites that help businesses grow and attract more customers.
          </p>

          <p>
            We believe a website is not just about design. 
            It is about trust, performance, and creating real value 
            for your business.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/portfolio"
            className="group flex items-center gap-3 
            bg-[linear-gradient(rgb(29,49,69)_0%,rgb(12,33,54)_100%)] 
            text-white font-semibold py-4 px-12 rounded-md 
            transition-all duration-300 shadow-xl
            hover:shadow-sky-950/50 hover:scale-105"
          >
            Show More Work
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;