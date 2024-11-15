"use client"

import { Karla } from "next/font/google";
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
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
