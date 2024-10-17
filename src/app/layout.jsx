import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingNavbar  from "@/components/Navbar/FloatingNavbar";

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
        {/* <Navbar /> */}
        <FloatingNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
