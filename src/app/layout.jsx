import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

const karla = Karla({
    subsets: ['latin'],
    dispaly: "swap",
})

export const metadata = {
  title: "PUFA-25 REGEN.",
  description: "Team RnT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="select-none">
      <body
        className={karla.className} 
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
