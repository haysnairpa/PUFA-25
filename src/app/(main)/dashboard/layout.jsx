"use client"

import { Karla } from "next/font/google";
import { ThemeProvider } from "@material-tailwind/react";

const karla = Karla({
    subsets: ['latin'],
    display: "swap",
})

export default function DashboardLayout({ children }) {
  return (
    <div className={karla.className}>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </ThemeProvider>
    </div>
  );
}
