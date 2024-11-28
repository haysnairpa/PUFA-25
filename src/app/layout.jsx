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
  const isAdminPage = pathname?.includes('/admin');
  const shouldShowNav = !isDashboardPage && !isAdminPage;

  return (
    <html lang="en" className="select-none">
      <head>
        <link rel="icon" href="/assets/pufa-computing-logo.png" />
      </head>
      <body className={karla.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            {shouldShowNav && <FloatingNavbar />}
            <main className="flex-grow">
              {children}
            </main>
            {shouldShowNav && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
