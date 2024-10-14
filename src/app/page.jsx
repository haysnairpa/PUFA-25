"use client"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);
  return (
    <section className="h-screen px-[10rem] py-[5rem] flex justify-center items-center">
      <div data-aos="fade-down" className="flex flex-col items-center justify-center text-center">
        <h1 data-aos="fade-down" className="font-[900] text-[5rem] md:text-[10rem] m-0 tracking-widest">PUFA 25.</h1>
        <h1 className=" italic m-0">Be Strong, One Determination.</h1>
      </div>

    </section>
  )
}