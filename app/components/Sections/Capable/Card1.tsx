






import { Menu, Check, X } from 'lucide-react';
import Image from 'next/image';

const Card1 = () => {
  return (
    <div className="flex justify-center px-4">
      <div
        className="
        bg-[#0d1525] 
        rounded-[32px] 
        p-6 sm:p-8 
        relative 
        overflow-hidden 
        border border-slate-800/50 
        w-full 
        sm:w-[80vw] 
        md:w-[60vw] 
        lg:w-[45vw] 
        min-h-[650px] 
        md:h-[70vh]
      "
      >
        {/* Heading */}
        <div className="max-w-xl mx-auto text-center mb-10 sm:mb-12 relative z-10 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words">
            Set up a design system
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg break-words">
            A design system brings consistency and efficiency to your product,
            resulting in better user experience and brand identity.
          </p>
        </div>

        <div className="relative h-[420px] sm:h-[450px] w-full max-w-full">


          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-3">
  <div className="bg-[#1e293b]/50 border border-slate-700 rounded-lg px-3 py-2 flex items-center gap-6">
    <div className="w-12 h-1.5 bg-slate-600 rounded-full" />
    <X size={14} className="text-slate-400" />
  </div>

  <div className="bg-[#1e293b]/50 border border-slate-700 rounded-lg px-3 py-2 flex items-center gap-6">
    <Menu size={14} className="text-slate-400" />
    <div className="w-16 h-1.5 bg-slate-600 rounded-full" />
  </div>
</div>

          {/* Profile Card */}
          <div
            className="
            absolute 
            top-10 sm:top-10 
            left-1/2 -translate-x-1/2 
            sm:left-auto sm:right-4 sm:translate-x-0
            bg-[#1e293b]/40 
            border border-slate-700/50 
            rounded-xl 
            p-3 sm:p-4 
            flex items-center gap-4 
            w-[85%] sm:w-72 
            max-w-xs sm:max-w-none
          "
          >
            <div className="relative shrink-0 ">
              <Image
                width={40}
                height={40}
                src="/images/i.webp"
                alt="User"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-[#16253A]"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-500 border-2 border-[#1e293b] rounded-full" />
            </div>

            <div className="flex-1 space-y-2">
              <div className="h-2 w-full bg-slate-600 rounded-full" />
              <div className="h-2 w-2/3 bg-slate-700 rounded-full" />
            </div>
          </div>

          {/* Progress Card */}
          <div
            className="
            absolute 
            bottom-24 sm:bottom-[-20px] 
            left-1/2 -translate-x-1/2 
            sm:left-8 sm:translate-x-0
            bg-[#1e293b]/40 
            border border-slate-700/50 
            rounded-xl 
            p-4 sm:p-6 
            w-[85%] sm:w-64 
            max-w-xs sm:max-w-none 
            h-52 sm:h-56
          "
          >
            <div className="flex justify-between items-start mb-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray="75, 100"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <X size={14} className="text-slate-500" />
            </div>

            <div className="space-y-3">
              <div className="h-2 w-20 bg-slate-600 rounded-full" />
              <div className="h-2 w-full bg-slate-800 rounded-full" />
              <div className="h-2 w-3/4 bg-slate-800 rounded-full" />
            </div>
          </div>

          {/* Toggle Section */}
          <div
            className="
            absolute 
            bottom-4 
            left-1/2 -translate-x-1/2 
            sm:left-auto sm:right-12 sm:translate-x-0
            flex items-center gap-4
          "
          >
            <div className="w-10 h-6 bg-slate-700 rounded-full relative">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>

            <div className="w-10 h-6 bg-blue-600 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>

            <div className="w-6 h-6 bg-slate-800 border border-slate-700 rounded-md" />

            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
              <Check size={14} className="text-white" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card1;