const Header = () => {
  return (
    <header className="w-full flex fixed top-0 left-0 justify-between items-center p-[2.5rem] px-[4rem] z-[100]">
      <div className="flex flex-grow"></div>
      <div className="flex flex-grow basis-0">
        <h1 className="text-hoverable text-lg font-medium opacity-50 hover:opacity-100 transition-opacity">
          WorkOS
        </h1>
      </div>
      <div>
        <img
          src="moneyvise.svg"
          alt="logo"
          width="35px"
          height="35px"
          className="max-w-[35px] max-h-[35px]"
        />
      </div>
      <div className="flex flex-grow basis-0 justify-end">
        <button className="relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <span
            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
           bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl`}
          >
            Sign in
          </span>
        </button>
      </div>
      <div className="flex flex-grow"></div>
    </header>
  );
};

export default Header;
