const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-start items-center relative">
      {/* Background */}
      <div className="w-full h-full bg-hero absolute top-0 left-0 z-[0]"></div>
      <img
        src="noise.png"
        alt="gradient blur"
        className="absolute top-0 left-0 z-[0] select-none w-full h-full opacity-20"
      />
      <img
        src="elipse01.png"
        alt="gradient blur"
        className="absolute top-0 left-0 z-[0] select-none w-full h-full opacity-20"
      />
      <img
        src="elipse02.png"
        alt="gradient blur"
        className="absolute top-0 left-0 z-[0] select-none w-full h-full opacity-20"
      />
      <img
        src="elipse03.png"
        alt="gradient blur"
        className="absolute top-0 left-0 z-[0] select-none w-full h-full opacity-20"
      />
      <img
        src="elipse04.png"
        alt="gradient blur"
        className="absolute top-0 left-0 z-[0] select-none w-full h-full opacity-20"
      />
      <img
        src="elipse05.png"
        alt="gradient blur"
        className="absolute top-0 left-0 z-[0] select-none w-full h-full opacity-20"
      />
     
      {/* FinnanceTrack element */}
      <div className="flex z-[1] mt-32">
        <button className="w-fit px-[1.5rem] py-[0.3rem] rounded-md innerbtn ">
          <span className="text-white text-sm tracking-normal font-medium whitespace-nowrap">
            FinnanceTrack
          </span>
        </button>
      </div>
      {/* Title */}
      <div className="flex flex-col items-center justify-center mt-10 z-[1]">
        <h1 className="texthero font-medium text-6xl leading-snug">
          Toma el Control
        </h1>
        <h1 className="texthero font-medium text-6xl">
          De tus Finanzas
        </h1>
        <p className="max-w-[510px] text-balance text-white/50 leading-snug text-center mt-5">
          This UI kit is a perfect blend of modern design and practical
          usability, making it an ideal choice for a wide range of projects
          including web applications, mobile apps, and dashboard interfaces.
        </p>
      </div>
    </section>
  );
};

export default Hero;
