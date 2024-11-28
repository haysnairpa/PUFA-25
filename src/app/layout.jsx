"use client"

import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingNavbar from "@/components/Navbar/FloatingNavbar";
import { ThemeProvider } from "@material-tailwind/react";
import { usePathname } from 'next/navigation';

const karla = Karla({
    subsets: ['latin'],
    display: "swap",
})

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboardPage = pathname?.includes('/dashboard');

  return (
    <html lang="en" className="select-none">
      <body className={karla.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            {!isDashboardPage && <FloatingNavbar />}
            <main className="flex-grow">
              {children}
            </main>
            {!isDashboardPage && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
