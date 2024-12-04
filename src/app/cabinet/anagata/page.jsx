"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnagataCabinet() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Geometric pattern background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,215,0,0.05)_25%,transparent_25%,transparent_75%,rgba(255,215,0,0.05)_75%)] bg-[length:60px_60px]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="relative inline-block">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 via-yellow-500/20 to-yellow-600/20 blur-xl"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="/assets/anagata.png"
                  alt="Anagata Cabinet"
                  width={240}
                  height={240}
                  className="mx-auto drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500">
                ANAGATA CABINET
              </h1>
              <p className="text-2xl text-yellow-500/90 font-medium">
                "Be Strong, One Determination"
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Logo Philosophy */}
      <section className="py-24 relative bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(255,215,0,0.03)_25%,transparent_25%,transparent_75%,rgba(255,215,0,0.03)_75%)] bg-[length:40px_40px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <div className="text-4xl font-bold mb-4 inline-block relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500">Logo Philosophy</span>
              <div className="absolute left-0 right-0 h-0.5 bottom-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center p-8 rounded-lg bg-black border border-yellow-500/20 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="w-32 h-32 mb-6 relative group">
                <Image
                  src="/assets/anagata.png"
                  alt="Letter A"
                  width={128}
                  height={128}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Letter "A"</h3>
              <p className="text-gray-300 text-center">
                Our letter "A" represents our cabinet name "Anagata"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center p-8 rounded-lg bg-black border border-yellow-500/20 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="w-32 h-32 mb-6 relative group">
                <Image
                  src="/assets/anagata.png"
                  alt="Bridge"
                  width={128}
                  height={128}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Bridge & Standard</h3>
              <p className="text-gray-300 text-center">
                A bridge means PUFA Computing acts as a connector
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center p-8 rounded-lg bg-black border border-yellow-500/20 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="w-32 h-32 mb-6 relative group">
                <Image
                  src="/assets/anagata.png"
                  alt="Sun"
                  width={128}
                  height={128}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Sun</h3>
              <p className="text-gray-300 text-center">
                The symbol sun represents a bright future
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-20 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Vision & Mission</span>
            <div className="absolute w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></div>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black p-10 rounded-2xl shadow-lg hover:shadow-yellow-500/10 transition-shadow border border-yellow-500/20"
            >
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                PUFA Computing is striving to develop its human resources by providing KM Computing
                more experience, progressive, professional, and leading to become a strong bridge to a future
                that is full of challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black p-10 rounded-2xl shadow-lg hover:shadow-yellow-500/10 transition-shadow border border-yellow-500/20"
            >
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Mission</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></div>
                  <span className="text-gray-300 text-lg">Providing the best forum for self-development</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></div>
                  <span className="text-gray-300 text-lg">Creating a conducive and productive atmosphere</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></div>
                  <span className="text-gray-300 text-lg">Supporting future innovation and development</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Division */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-20 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Division</span>
            <div className="absolute w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></div>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Board of Director",
                icon: "/assets/anagata.png",
                desc: "Strategic leadership and decision-making"
              },
              {
                name: "Research & Technology",
                icon: "/assets/anagata.png",
                desc: "Innovation and technical advancement"
              },
              {
                name: "Student Development & Competition",
                icon: "/assets/anagata.png",
                desc: "Growth and learning initiatives"
              },
              {
                name: "External Relations",
                icon: "/assets/anagata.png",
                desc: "Relationship building and networking"
              },
              {
                name: "Internal Relations",
                icon: "/assets/anagata.png",
                desc: "Collaboration and cooperation within the organization"
              },
              {
                name: "Entrepreneurship",
                icon: "/assets/anagata.png",
                desc: "Entrepreneurship development and entrepreneurship training"
              },
              {
                name: "Art and Sports",
                icon: "/assets/anagata.png",
                desc: "Creative content and design"
              },
              {
                name: "Communication",
                icon: "/assets/anagata.png",
                desc: "Communication and collaboration"
              },
              {
                name: "Multimedia",
                icon: "/assets/anagata.png",
                desc: "Multimedia content and design"
              },
              {
                name: "Student Walfare Advocacy",
                icon: "/assets/anagata.png",
                desc: "Advocacy for student welfare"
              }
            ].map((div, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black p-8 rounded-2xl shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 border border-yellow-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-2xl flex items-center justify-center mb-6">
                  <Image
                    src={div.icon}
                    alt={div.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">{div.name}</h3>
                <p className="text-gray-300">{div.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(255,215,0,0.03)_25%,transparent_25%,transparent_75%,rgba(255,215,0,0.03)_75%)] bg-[length:40px_40px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <div className="text-4xl font-bold mb-4 inline-block relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500">Timeline</span>
              <div className="absolute left-0 right-0 h-0.5 bottom-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            </div>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {[
              {
                date: "September 2023",
                title: "Cabinet Formation",
                desc: "Formation of the new cabinet structure"
              },
              {
                date: "November 2024",
                title: "Compbrainst",
                desc: "Brainstorming and idea generation"
              },
              {
                date: "February 2024",
                title: "CSGO",
                desc: "Computing Sport and Game Olympiad"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-transparent"></div>
                <div className="absolute left-[-6px] top-2 w-3 h-3 bg-yellow-500 rounded-full ring-4 ring-yellow-500/20"></div>
                <div className="bg-black border border-yellow-500/20 p-6 rounded-lg relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="relative">
                    <div className="text-sm text-yellow-500 font-semibold mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
