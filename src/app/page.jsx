"use client"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import TextGenerate from '@/components/Aceternity/TextGenerate';
import HeroParallax  from '@/components/Aceternity/HeroParallax';
import Divider from '@/components/Divider';
import ImageSlider from '@/components/Aceternity/ImageSlider';
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "@/components/ui/text-reveal-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const events = [
  {
    title: "Hackathon",
    description: "Competition for students to develop innovative solutions to real-world problems.",
    src: "/assets/events/competition.png",
    ctaLink: "/events/hackathon"
  },
  {
    title: "PUFA Computing Regeneration 2025",
    description: "[PUFA COMPUTING REGENERATION 2025 OPEN REGISTRATION] What's up, PUFA Computing! It's finally here, ...",
    src: "/assets/events/simulation.jpg",
    ctaLink: "/events/regeneration-2025"
  },
  {
    title: "Tech Talk: AI in Healthcare",
    description: "Learn about the latest applications of AI in the healthcare industry.",
    src: "/assets/events/healthcare.png",
    ctaLink: "/assets/events/healthcare.png"
  }
];

const projects = [
  { 
    id: 1, 
    title: "DreamScape AR", 
    date: "November 26, 2023", 
    author: "Fatmah & Annisa", 
    description: "A game that can help us to see our performance in campus and give the recommendation for the further ...",
    image: "/assets/projects/dreamscape.png"
  },
  { 
    id: 2, 
    title: "Desa Harapan", 
    date: "December 1, 2023", 
    author: "Guido Sijabat", 
    description: "A system that can help us to see our performance in campus and give the recommendation for the further ...",
    image: "/assets/projects/desaharapan.png"
  },
  { 
    id: 3, 
    title: "1001 Event", 
    date: "December 1, 2023", 
    author: "Deswita, Riska, Rafila & Sakina", 
    description: "A system that can help us to see our performance in campus and give the recommendation for the further ...",
    image: "/assets/projects/1001.png"
  },
  { 
    id: 4, 
    title: "Tech Talent Academy", 
    date: "December 1, 2023", 
    author: "Farrel, Adhit, Aldi", 
    description: "A system that can help us to see our performance in campus and give the recommendation for the further ...",
    image: "/assets/projects/tribunlampung.png"
  }
];

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,   
            once: true
        });
    }, []);

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

  return (
    <>
      <section className="h-screen relative flex justify-center items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/assets/background-example.JPG"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div data-aos="fade-down" className="flex flex-col items-center justify-center text-center relative z-10 text-white">
          <h1 data-aos="fade-down" className="font-[900] text-[5rem] md:text-[10rem] m-0 tracking-widest">PUFA 25.</h1>
          <h1 className="italic m-0">Be Strong, One Determination.</h1>
          <TextGenerate />
        </div>
      </section>

      <section className="min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-20 bg-blue-500"></div>
              <h2 className="text-4xl md:text-6xl font-[900]">Study Programs</h2>
              <div className="h-[1px] w-20 bg-blue-500"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              The Faculty of Computing has four study programs that produce qualified student graduates in their fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TextRevealCard
              text="Informatics"
              revealText="Informatics"
              className="border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full"
            >
              <TextRevealCardTitle>
                Informatics
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Informatics study program that will produce qualified graduates in the field of educators and developer who are experts in Informatics
              </TextRevealCardDescription>
              <button className="mt-4 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                See Details
              </button>
            </TextRevealCard>

            <TextRevealCard 
              text="Information System"
              revealText="Information System"
              className="border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full"
            >
              <TextRevealCardTitle>
                Information System
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Information system programs that enable the student to adept in technology, data management, and innovation.
              </TextRevealCardDescription>
              <button className="mt-4 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                See Details
              </button>
            </TextRevealCard>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-20 bg-green-500"></div>
              <h2 className="text-4xl md:text-6xl font-[900]">Cabinet 2024/2025</h2>
              <div className="h-[1px] w-20 bg-green-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full max-w-md mx-auto">
              <Image 
                src="/assets/forcasion.png"
                alt="forcasion Cabinet"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">FORCASION CABINET</h3>
                <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black via-yellow-700 to-yellow-900 mb-4">
                  "One Team, One Vision, One for Computing"
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We are attempting to be a bridge for the Computing Faculty in a more positive way by growing together with us.
                </p>
                <Link 
                  href="/cabinet/forcasion"
                  className="inline-flex items-center mt-6 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  See our Cabinet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-20 bg-red-500"></div>
              <h2 className="text-4xl md:text-6xl font-[900]">Computing Events</h2>
              <div className="h-[1px] w-20 bg-red-500"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Discover the latest updates on events in our faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event, index) => (
              <div key={index} className="bg-neutral-50 dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    Ended
                  </div>
                  <Image
                    src={event.src || "/assets/events/default.jpg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <Link 
                    href={event.ctaLink || "/events"}
                    className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/events"
              className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              See all Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-20 bg-orange-500"></div>
              <h2 className="text-4xl md:text-6xl font-[900]">News</h2>
              <div className="h-[1px] w-20 bg-orange-500"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Stay updated with the latest news and announcements.
            </p>
          </div>

          <BentoGrid className="max-w-7xl mx-auto gap-4">
            <BentoGridItem
              className="md:col-span-2 row-span-2"
              header={
                <div>
                  <Link href="/news/ai-limits" className="relative block h-[300px] rounded-xl overflow-hidden group">
                    <Image
                      src="/assets/news/news1.png"
                      alt="The Limits of AI in User Research and Design"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 p-6 w-full">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500" />
                        <div>
                          <p className="text-sm font-medium text-white">John Doe</p>
                          <p className="text-xs text-gray-300">Thu Jun 27 2024</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-orange-400 mb-3">
                      <span className="px-2 py-1 text-xs border border-orange-400 rounded-full">Technology</span>
                      <span className="text-sm">5 min read</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">The Limits of AI in User Research and Design</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      In the dynamic landscape of technology, artificial intelligence (AI) stands out as a powerful tool...
                    </p>
                  </div>
                </div>
              }
            />

            <BentoGridItem
              className="md:col-span-1"
              header={
                <div>
                  <Link href="/news/data-analytics" className="relative block h-36 rounded-xl overflow-hidden group">
                    <Image
                      src="/assets/news/news1.png"
                      alt="How Generative AI is Transforming Data Analytics"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 p-4 w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-orange-500" />
                        <p className="text-xs text-gray-300">Thu Jun 27 2024</p>
                      </div>
                    </div>
                  </Link>
                  <div className="mt-3">
                    <div className="flex items-center gap-2 text-orange-400 mb-2">
                      <span className="px-2 py-0.5 text-xs border border-orange-400 rounded-full">AI</span>
                    </div>
                    <h3 className="font-bold text-sm">How Generative AI is Transforming Data Analytics</h3>
                  </div>
                </div>
              }
            />

            <BentoGridItem
              className="md:col-span-1"
              header={
                <div>
                  <Link href="/news/smart-home" className="relative block h-36 rounded-xl overflow-hidden group">
                    <Image
                      src="/assets/news/news2.png"
                      alt="Revolutionizing Home Automation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 p-4 w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-orange-500" />
                        <p className="text-xs text-gray-300">Mon Jun 24 2024</p>
                      </div>
                    </div>
                  </Link>
                  <div className="mt-3">
                    <div className="flex items-center gap-2 text-orange-400 mb-2">
                      <span className="px-2 py-0.5 text-xs border border-orange-400 rounded-full">Smart Home</span>
                    </div>
                    <h3 className="font-bold text-sm">Revolutionizing Home Automation</h3>
                  </div>
                </div>
              }
            />
          </BentoGrid>

          <div className="text-center mt-12">
            <Link 
              href="/news"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-all duration-200"
            >
              <span>See all News</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-20 bg-purple-500"></div>
              <h2 className="text-4xl md:text-6xl font-[900]">Compreciation</h2>
              <div className="h-[1px] w-20 bg-purple-500"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Appreciation to Computizen's best projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{project.date}</p>
                  </div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-4">{project.author}</p>
                  <div className="flex justify-between items-end">
                    <p className="text-sm text-gray-700 dark:text-gray-300 pr-4 flex-grow">{project.description}</p>
                    <Link 
                      href={`/projects/${project.id}`}
                      className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors whitespace-nowrap"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/others/projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-all duration-200"
            >
              <span>See all items</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-20 bg-blue-500"></div>
              <h2 className="text-4xl md:text-6xl font-[900]">FAQ</h2>
              <div className="h-[1px] w-20 bg-blue-500"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Frequently asked questions about Computing Faculty.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What is PUFA Computing?",
                answer: "(President University Faculty Association) is the new association of the faculty of computing and stands as a faculty BEM. PUFA is The new Rectorate decree has stated that every faculty has to have their own association and all major has to have their own PUMA."
              },
              {
                question: "How many majors are there in the faculty of computing?",
                answer: "There are 2 majors in the faculty of computing at president university, which consist of Informatics and Information System."
              },
              {
                question: "How many divisions are there in PUFA Computing?",
                answer: "There are 9 divisions in our organizational structure including: Board of Directors, External Relations, Internal Relations, Student Development and Competition, Research and Technology, Communication and Multimedia, Art and Sport, Student Welfare Advocacy, Entrepreneurship."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className={`text-blue-500 transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-200 ${openFaq === index ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>

  )
}