import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full mt-28 px-[4rem]">
      <div className="mb-[2rem]">
        <h2 className="text-white font-bold text-3xl tracking-tight">
          Dashboard
        </h2>
        <nav className="flex w-fit gap-2 mt-5 bg-[#27272A] p-1 rounded-lg">
          <Link
            href="?tab=general"
            className="text-white text-sm tracking-tight font-medium
          bg-black px-3 rounded-lg py-1 transition-colors"
          >
            General
          </Link>
          <Link
            href="?tab=reportes"
            className="text-white/50 text-sm tracking-tight font-medium hover:text-white/80 px-3
          rounded-lg py-1 transition-colors"
          >
            Reportes
          </Link>
          <Link
            href="?tab=pagos"
            className="text-white/50 text-sm tracking-tight font-medium hover:text-white/80 px-3
          rounded-lg py-1 transition-colors"
          >
            Pagos
          </Link>
          <Link
            href="?tab=notificaciones"
            className="text-white/50 text-sm tracking-tight font-medium hover:text-white/80 
          px-3 rounded-lg py-1 transition-colors"
          >
            Notificaciones
          </Link>
        </nav>
      </div>

      {children}
    </div>
  );
}
