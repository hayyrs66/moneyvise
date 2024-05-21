import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  return (
    <header
      className="w-full flex fixed top-0 left-0 justify-between items-center py-[1rem] px-[4rem] z-[100]
    border-b border-b-white/10 backdrop-blur"
    >
      <div className="w-full flex items-center gap-5 mr-4">
        <Link href="/">
          <img src="logo.png" alt="stellar" />
        </Link>
        <nav className="inline-flex gap-2">
          <a href="" className="text-white text-sm tracking-tight font-medium">
            Product
          </a>
          <a href="" className="text-white text-sm tracking-tight font-medium">
            Pricing
          </a>
          <a href="" className="text-white text-sm tracking-tight font-medium">
            Changelog
          </a>
          <Link
            href="/dashboard"
            className="text-white text-sm tracking-tight font-medium"
          >
            Dashboard
          </Link>
        </nav>
      </div>
      <div className="flex justify-end items-center w-full">
        <button className="w-fit px-[1.5rem] py-[0.3rem] rounded-md innershadow ">
          <span className="text-white text-sm tracking-tight font-medium whitespace-nowrap">
            Sign in
          </span>
        </button>

        {/* header profile */}
        {/* <header className="flex justify-between items-center gap-5 w-full h-full p-5 border-b border-b-white/20">
          <button className="flex items-center gap-2 border border-white/20 rounded-md p-2">
            <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
            <span className="text-white text-sm tracking-tight font-medium mr-4">
              Ricardo Guevara
            </span>
            <SlArrowDown className="text-white/50" width={5} height={5} />
          </button>
          <div className="flex items-center">
            magic button
            <div className="rounded-full">
              <div className="w-[15px] h-[15px] bg-green-500 rounded-full" />
            </div>
          </div>
        </header> */}
      </div>
    </header>
  );
};

export default Header;
