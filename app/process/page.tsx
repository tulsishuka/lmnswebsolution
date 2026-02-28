
const RoadmapPage = () => {


  const steps = [
  {
    title: "Discuss your project",
    subtitle: "Understand goals and requirements...",
    description:
      "We start with a detailed discussion about your business goals, target audience, features, and timeline to make sure we fully understand your vision.",
    shape: (
      <div className="w-12 h-12 bg-[#FF4D4D] rounded-tr-full rounded-bl-full rotate-45" />
    ),
  },
  {
    title: "Design proposal & approval",
    subtitle: "We provide the design first...",
    description:
      "We create and share the complete website design with you. Once you review and approve the design, we move forward with development.",
    shape: (
      <div className="w-10 h-10 bg-[#FFB3C1] rounded-lg rotate-12" />
    ),
  },
  {
    title: "Begin development",
    subtitle: "Start building your website...",
    description:
      "After design approval, we begin development across mobile, tablet, and desktop to ensure your website is fully responsive and optimized.",
    shape: (
      <div className="w-12 h-6 bg-[#C4B5FD] rounded-full -rotate-12" />
    ),
  },
  {
    title: "50% progress review",
    subtitle: "Midway preview of your project...",
    description:
      "When the project is 50% complete, we provide you with a live preview link so you can review the progress and stay confident that everything is on track.",
    shape: (
      <div className="w-8 h-8 bg-[#22D3EE] rounded-full" />
    ),
  },
  {
    title: "Provide feedback (80% stage)",
    subtitle: "Add the final polish...",
    description:
      "Once we’re 80% complete, we share the near-final version for detailed feedback. We refine everything to ensure it meets your expectations perfectly.",
    shape: (
      <div className="w-8 h-8 bg-[#A78BFA] rounded-md rotate-6" />
    ),
  },
  {
    title: "Launch new website",
    subtitle: "Go live with confidence...",
    description:
      "After final testing and approval, we deploy the website to your domain and officially launch it on your desired date.",
    shape: (
      <div className="text-3xl text-yellow-400">★</div>
    ),
  },
];
  return (
    <div className="bg-[#020617] min-h-screen py-24 px-6 font-sans">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto  mb-20">
        <h2 className="text-white text-5xl md:text-6xl font-serif mb-6">This is how we do it</h2>
       
      </div>

      {/* Roadmap Container */}
      <div className="relative max-w-[850px] mx-auto">
        
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-white/20" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center">
              
              {/* Horizontal Connector Line */}
              <div className="absolute left-6 md:left-12 w-8 h-[1px] bg-white/20" />

              {/* Abstract Shape / Icon */}
              <div className="absolute left-16 md:left-24 hidden sm:block">
                {step.shape}
              </div>

              {/* Step Card - Using your specific #FDF4E3 and 32px rounding */}
              <div className="ml-12 md:ml-48 w-full border border-bg-white/20 rounded-[32px] p-8 md:p-12 shadow-2xl transition-transform hover:scale-[1.01]">
                <h3 className="text-blue-400 text-3xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-400 font-semibold text-lg mb-4">
                  {step.subtitle}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoadmapPage




