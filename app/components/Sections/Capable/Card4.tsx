
import React from 'react'

const Card4 = () => {
  return (
    <div className="flex justify-center px-4">
      <div
        className="
          w-full
          sm:w-[80vw]
          md:w-[60vw]
          lg:w-[45vw]

          min-h-[200px] 
          sm:min-h-[260px] 
          md:h-[35vh]

          bg-gradient-to-br from-blue-700 via-blue-600 to-teal-500
          rounded-[32px]
          p-6 sm:p-8 md:p-10
          flex items-center justify-center
          relative overflow-hidden
          group
        "
      >
        <h2
          className="
            text-xl sm:text-3xl md:text-5xl
            font-semibold
            text-center
            leading-tight
            relative z-10
          "
        >
          Elevate Your Brand Online
     
        </h2>
      </div>
    </div>
  )
}

export default Card4