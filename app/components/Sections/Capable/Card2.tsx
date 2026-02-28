
const Card2 = () => {
  return (
    <div
      className="
        bg-[#2d1b2e] 
        rounded-[35px] 
        w-[93%] md:w-[32vw]
        mx-auto
        min-h-[180px] sm:min-h-[220px] md:h-[35vh] 
        flex items-center justify-center 
        p-6 sm:p-8 
        border border-pink-900/30
      "
    >
      <h2
        className="
          text-xl sm:text-2xl md:text-4xl 
          font-bold 
          text-center 
          leading-tight
          break-words
        "
      >
        Create interfaces users{" "}
        <span className="inline-block text-pink-500 animate-pulse">❤️</span>{" "}
        to use
      </h2>
    </div>
  );
};

export default Card2;