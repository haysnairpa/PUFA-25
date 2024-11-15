import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function NewsPage() {
  return (
    <section className="px-[5rem] md:px-[10rem] py-[5rem] mb-[10rem]">
      <div className="text-center mt-[4rem] mb-[4rem]">
        <h1 data-aos="fade-down" className="text-4xl md:text-7xl font-[900] mb-6">Computing News</h1>
        <TextGenerateEffect
          words="Discover the latest updates on events in our faculty."
          className="text-xl md:text-2xl mx-auto max-w-2xl"
        />
      </div>
      
      <BentoGrid className="max-w-7xl mx-auto gap-4 md:gap-6">
        {newsItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-xl group">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 group-hover:scale-110"
                />
                {/* Desktop hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-center items-center p-6 text-white hidden md:flex">
                  <Link href={item.link}>
                    <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors duration-300">
                      Read More
                    </button>
                  </Link>
                </div>
                {/* Mobile hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center md:hidden">
                  <Link href={item.link}>
                    <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors duration-300">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            }
            className={`${item.className} overflow-hidden border-2 transition-all hover:shadow-lg hover:bg-neutral-300`}
          >
            {/* Mobile text content */}
            <div className="p-4 md:hidden">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
}

const newsItems = [
  {
    title: "The Limits of AI in User Research and Design",
    description: "In the dynamic landscape of technology, artificial intelligence (AI) stands out as a powerful tool with the potential to revolutionize various industries, including user research and design. However...",
    image: "/assets/news/news1.png",
    link: "/news/ai-limits-user-research-design",
    className: "md:col-span-2",
  },
  {
    title: "How Generative AI is Transforming Data Analytics and Driving Business Growth",
    description: "In today's digital landscape, data has become the new currency. Businesses are faced with the daunting task of processing vast amounts of information...",
    image: "/assets/news/news2.png",
    link: "/news/generative-ai-data-analytics",
    className: "md:col-span-1",
  },
  {
    title: "Nostalgic Journey Through the Evolution of Technology and Design",
    description: "The Evolution of Technology and its Impact on Design Technology has been the catalyst for transformative...",
    image: "/assets/news/news3.png",
    link: "/news/evolution-technology-design",
    className: "md:col-span-1",
  },
  {
    title: "Revolutionizing Home Automation with Zigbee Technology",
    description: "Explore the cutting-edge world of home automation powered by Zigbee technology...",
    image: "/assets/news/news4.png",
    link: "/news/home-automation-zigbee",
    className: "md:col-span-2",
  },
];
