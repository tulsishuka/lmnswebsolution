
import Starfield from "./Starfield";

export default function HeroSection() {
  return (
      <section className="relative w-full min-h-[60vh] sm:min-h-[80vh] md:h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6">

      <Starfield />
      <div className="absolute inset-0 z-1 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-[95vw] mx-auto">

        {/* Subheading */}
        <h2 className="text-sm sm:text-base md:text-lg font-medium text-sky-200 mb-2 sm:mb-4">
          We Build Fast, Modern Websites That Help Your Business Grow
        </h2>

        

        <h1 className="font-bold 
               text-4xl 
               sm:text-6xl 
               md:text-7xl 
               lg:text-9xl 
               xl:text-8xl 
               text-sky-100 
               w-full md:w-[70%] 
               mx-auto 
               leading-tight">
  Shaping Tomorrow&apos;s Digital Products
</h1>

        {/* Paragraph */}
        <p className="mt-4 sm:mt-6 md:mt-8 text-sky-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
          Building digital solutions that leave a lasting impact
        </p>

      </div>
    </section>
  );
}
