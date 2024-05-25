import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full px-[4rem] py-24">
      <div className="w-full h-full">
        <Spotlight
          className="left-0 top-28 h-[80vh] w-[50vw] rotate-45 -z-0"
          fill="#86EF84"
        />
        <img
          src="elipse01.png"
          alt="gradient blur"
          className="absolute top-72 left-72 z-[0] select-none w-full h-full opacity-20"
        />
      </div>
      <div className="mb-[2rem]">
        <h2 className="text-white font-bold text-3xl tracking-tight">
          Dashboard
        </h2>
        <nav className="flex w-fit gap-2 mt-5 bg-background dark p-1 rounded-lg relative">
          <Link
            href="?tab=general"
            className="text-green-300 text-sm tracking-tight font-medium
          px-3 rounded-lg py-1 transition-colors"
          >
            General
          </Link>
          <Link
            href="?tab=configuracion"
            className="text-white/50 text-sm tracking-tight font-medium hover:text-white/80 px-3
          rounded-lg py-1 transition-colors"
          >
            Configuración
          </Link>
          <Link
            href="?tab=reportes"
            className="text-white/50 text-sm tracking-tight font-medium hover:text-white/80 px-3
          rounded-lg py-1 transition-colors"
          >
            Reportes
          </Link>
        </nav>
      </div>
      <section className="w-full h-full">
        <div className="border border-white/15 backdrop-blur-3xl  rounded-lg p-10">
          {children}
        </div>
      </section>
    </div>
  );
}
