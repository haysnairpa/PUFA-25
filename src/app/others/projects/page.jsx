"use client";

import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BsUpload } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from 'next/link';

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
  },
  
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col items-center justify-center p-6 min-h-screen">
        <h1 data-aos="fade-down" className="text-4xl md:text-7xl font-[900] mb-6">Projects</h1>
        <TextGenerateEffect
          words="Library for all the computizens projects."
          className="text-xl md:text-2xl mx-auto max-w-2xl mb-8"
        />
        <Link href="/others/projects/add" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-12">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#757575_50%,#000000_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-5 py-5 text-sm font-medium text-white backdrop-blur-3xl">
            <BsUpload className="text-lg mr-2 text-white w-4 h-4" />
            Add your own projects
          </span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-[700] mb-8 text-center">Project Overview</h2>
        <p className="text-xl mb-8 text-center">Let's see the projects that have been done by the computizens</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-400 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-xs text-gray-500">{project.date}</p>
                </div>
                <p className="text-sm text-purple-600 mb-4">{project.author}</p>
                <div className="flex justify-between items-end">
                  <p className="text-sm text-gray-700 pr-4 flex-grow">{project.description}</p>
                  <button className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
                    Read More
                  </button>
                </div>
              </div>
              <div className="p-6">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
