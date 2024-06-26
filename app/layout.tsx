import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Session, getServerSession } from "next-auth";
import SessionProvider from "./utils/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinanceTrack",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();
  
  return (
    <html lang="es">
      <body className={`${inter.className} w-full h-full bg-black`}>
        <SessionProvider session={session}>
        <Header session={session as Session} />
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
