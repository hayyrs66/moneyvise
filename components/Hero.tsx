const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center relative">
      <div className="absolute inset-0 -z-1 h-full w-full bg-[#05060f] bg-[linear-gradient(to_right,#40404033_1px,transparent_1px),linear-gradient(to_bottom,#40404033_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 -z-1 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#bad6f733,transparent)]"></div>
      </div>
      <div className="flex justify-center items-center gap-10 mb-10 z-0">
        <div className="w-[100px] h-[1px] line-gradient-to-right"></div>
        <span className="text-hoverable text-sm">Welcome</span>
        <div className="w-[100px] h-[1px] line-gradient-to-left"></div>
      </div>
      <h2 className="text-gradient text-9xl font-semibold tracking-tighter z-0">
        MoneyVise
      </h2>
      <p className="text-hoverable text-2xl font-light mt-5 text-center text-balance leading-tight z-0">
        Unleash your financial potential, <br /> powered by WealthWave.
      </p>
    </section>
  );
};

export default Hero;
