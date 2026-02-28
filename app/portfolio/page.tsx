


import Image from "next/image";

const projects = [
 
  {
    title: "Surgico – Medical & Aesthetic Clinic Website",
    description:"This project demonstrates my ability to recreate and implement high-end medical website designs with clean UI strong visual hierarchy, and fully responsive layout across all devices.",
    services: ["Responsive Web Design","Conversion Optimization","UX Design", "UI Design"],
    mediaSrc: "/images/i3.mp4",
  },
   {
    title: "Creative Website Redesign",
    description:
      "A modern agency website redesigned to improve clarity, responsiveness, and brand impact using clean UI patterns and thoughtful UX decisions.",
    services: ["Responsive Web Design","Conversion Optimization","UX Design", "UI Design"],
    mediaSrc: "/images/l.mp4",
  },
  {
    title: "Intense Gym – Modern Fitness Website",
    description:
      "A responsive fitness website concept recreated from a premium template, showcasing clean UI, bold visuals, and a structured layout designed for engagement and user conversions.",
    services:["Responsive Web Design","Conversion Optimization","UX Design", "UI Design"],
    mediaSrc: "/images/i2.mp4",
  },
  {
    title: "Apparelix",
    description:
      "This project demonstrates my ability to recreate and implement high-end medical website designs with clean UI strong visual hierarchy, and fully responsive layout across all devices.",
    services: ["Responsive Web Design","Conversion Optimization","UX Design", "UI Design"],
    mediaSrc: "/images/i4.mp4",
  },
  
   {
    title: "VibeFitZone – Gym & Fitness Website",
    description:"A modern responsive gym and fitness website inspired by a premium template design. Built to showcase bold visuals strong call-to-action sections and structured service layouts tailored for fitness studios and personal trainers Designed with a focus on clean UI, mobile responsiveness, and conversion-driven layout.",
    services: ["Responsive Web Design","Conversion Optimization","UX Design", "UI Design"],
    mediaSrc: "/images/i.mp4",
  },
];

const Page = () => {
  return (
    <section className="bg-[#040615] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 mt-10">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-28 lg:space-y-32">
        {projects.map((project, index) => {
          const isVideo = project.mediaSrc.endsWith(".mp4");

          return (
            <div key={index} className="group">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between gap-10 mb-10 md:mb-12">
                <div className="md:w-2/3">
                
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="md:text-right">
                  <h4 className="font-bold mb-2 text-white text-sm sm:text-base">
                    Services
                  </h4>
                  <ul className="text-gray-400 space-y-1 text-sm sm:text-base">
                    {project.services.map((service, sIndex) => (
                      <li key={sIndex}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-6xl aspect-[16/10] p-6 sm:p-8 md:p-12 overflow-hidden rounded-xl">
                  {isVideo ? (
                    <video
                      src={project.mediaSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain rounded-xl"
                    />
                  ) : (
                    <Image
                      src={project.mediaSrc}
                      alt={project.title}
                      fill
                      className="object-contain rounded-xl"
                      priority={index === 0}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;


