import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  return (
    <header
      className="w-full flex fixed top-0 left-0 justify-between items-center py-[1rem] px-[4rem] z-[100]
    border-b border-b-white/10 backdrop-blur bg-black/10"
    >
      <div className="w-full flex items-center gap-5 mr-4">
        <Link href="/">
          <img src="logo.png" alt="stellar" />
        </Link>
        <nav className="inline-flex gap-3">
          <a
            href=""
            className="text-[#888] hover:text-[#cecece] transition-colors text-sm tracking-tight font-medium"
          >
            Product
          </a>
          <a
            href=""
            className="text-[#888] hover:text-[#cecece] transition-colors text-sm tracking-tight font-medium"
          >
            Pricing
          </a>
          <a
            href=""
            className="text-[#888] hover:text-[#cecece] transition-colors text-sm tracking-tight font-medium"
          >
            Changelog
          </a>
          <Link
            href="/dashboard"
            className="text-[#888] hover:text-[#cecece] transition-colors text-sm tracking-tight font-medium"
          >
            Dashboard
          </Link>
        </nav>
      </div>
      <div className="w-full">
        <PrimaryButton />
      </div>
    </header>
  );
};

export default Header;
