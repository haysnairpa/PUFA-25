"use client"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import TextGenerate from '@/components/Aceternity/TextGenerate';
import HeroParallax  from '@/components/Aceternity/HeroParallax';
import Divider from '@/components/Divider';
import ImageSlider from '@/components/Aceternity/ImageSlider';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,   
            once: true
        });
    }, []);

  return (
    <>
      <section className="h-screen px-[5rem] md:px-[10rem] py-[5rem] flex justify-center items-center">
        <div data-aos="fade-down" className="flex flex-col items-center justify-center text-center">
          <h1 data-aos="fade-down" className="font-[900] text-[5rem] md:text-[10rem] m-0 tracking-widest -z-10">PUFA 25.</h1>
          <h1 className=" italic m-0">Be Strong, One Determination.</h1>
          {/* <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="3000"
            delay="1000">
              PUFA Computing is a dynamic organization within President University, serving as a platform for students pursuing various computing-related fields like Information Technology, Information Systems, Visual Communication Design, and Interior Design. It fosters a vibrant community where students can connect, collaborate, and explore their passion for technology, creativity, and innovation. PUFA Computing offers opportunities for professional development, networking, and social engagement, making it a valuable resource for students aspiring to excel in the computing industry.
          </div> */}
          {/* <h1>PUFA Computing is a dynamic organization within President University, serving as a platform for students pursuing various computing-related fields like Information Technology, Information Systems, Visual Communication Design, and Interior Design. It fosters a vibrant community where students can connect, collaborate, and explore their passion for technology, creativity, and innovation. PUFA Computing offers opportunities for professional development, networking, and social engagement, making it a valuable resource for students aspiring to excel in the computing industry.</h1> */}
          <TextGenerate />
        </div>
      </section>
      
      <div className="px-[10rem] py-[5rem]">
        <Divider bgColor="bg-neutral-200" className=""/> 
      </div>

      <section className="h-[250vh] flex justify-center items-center">
        <HeroParallax /> 
      </section>

      <div className="px-[10rem] py-[5rem]">
        <Divider bgColor="bg-neutral-200" className=""/> 
      </div>

      <section className="h-screen flex justify-center items-center">
        <ImageSlider/>
      </section>
    </>

  )
}