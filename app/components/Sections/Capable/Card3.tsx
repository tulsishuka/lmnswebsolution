
import { BookOpen, Hammer, Ruler } from 'lucide-react'
import React from 'react'

const Card3 = () => {
  return (
    <div className="flex justify-center px-4">
      <div
        className="
          md:row-span-2

          w-full
          sm:w-[80vw]
          md:w-[30vw]
          lg:w-[32vw]

          min-h-[520px]
          sm:min-h-[660px]
          md:h-[69vh]

          bg-[#0f172a]
          rounded-[32px]
          p-6 sm:p-8
          flex flex-col
          items-center
          justify-center
          text-center
          border border-slate-800
        "
      >

        {/* Top Icon */}
        <div className="flex justify-center gap-4 mb-6 sm:mb-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Hammer className="text-white" size={26} />
          </div>
        </div>

        {/* Middle Icons */}
        <div className="flex justify-center gap-6 mb-8 sm:mb-10 text-slate-400 font-semibold uppercase text-xs tracking-widest">

          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-400 flex items-center justify-center">
              <BookOpen className="text-white" size={26} />
            </div>
            <span>Learn</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-500 flex items-center justify-center">
              <Ruler className="text-white" size={26} />
            </div>
            <span>Measure</span>
          </div>

        </div>

        {/* Text Content */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Build an MVP
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-md">
          Building a Minimum Viable Product allows you to quickly validate your product idea,
          receive feedback from users, and iterate towards a successful solution.
        </p>

      </div>
    </div>
  )
}

export default Card3