const DeviceShowcase = () => {
  return (
    <section className="w-full flex items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="w-full max-w-6xl">
        <video
          src="https://framerusercontent.com/assets/frnywyFHcy3y0vcaGD0nDPHMKcI.mp4"
          loop
          autoPlay
          muted
          playsInline
          className="w-full rounded-[24px] object-cover block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        />
      </div>
    </section>
  );
};

export default DeviceShowcase;
