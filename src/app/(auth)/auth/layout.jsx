"use client"

import { Karla } from "next/font/google";

const karla = Karla({
    subsets: ['latin'],
    dispaly: "swap",
})

export default function RootLayout({ children }) {
  return (
    <>
    <section>
        {children}
    </section>
    </>
  );
}
