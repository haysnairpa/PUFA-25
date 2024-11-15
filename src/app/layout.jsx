"use client"

import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingNavbar  from "@/components/Navbar/FloatingNavbar";
import { ThemeProvider } from "@material-tailwind/react";

const karla = Karla({
    subsets: ['latin'],
    dispaly: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="select-none">
      <body
        className={karla.className} 
      >
        <ThemeProvider>
        {/* <Navbar /> */}
        <FloatingNavbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
