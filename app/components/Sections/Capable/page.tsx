
import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

const BentoPage = () => {
  return (
    <div className="min-h-screen bg-[#030712] 
                    flex flex-col items-center 
                    p-6 md:p-12 
                    text-white font-sans">

      {/* Inner Container */}
      <div className="w-full max-w-7xl">

        <div className="text-center mb-10 md:mb-12">
          <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3 md:mb-4">
            Services
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            What we’re <br />
            capable of
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center">
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full justify-center">
            
            {/* Left Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              <Card1 />
              <Card4 />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              <Card2 />
              <Card3 />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BentoPage;