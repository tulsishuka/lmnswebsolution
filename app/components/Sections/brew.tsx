import React from 'react'
import Link from "next/link";


const Brew = () => {
  return (
       <div className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden">
        <div 
         
        />
        
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">
            Let's brew something <br /> great together!
          </h2>
        <Link href="/contact">  <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-bold py-3 px-7 rounded-md transition-all duration-300 shadow-lg shadow-blue-900/20">
          Let’s Build Your Website
          </button></Link>
        </div>
      </div>
  
  )
}

export default Brew
