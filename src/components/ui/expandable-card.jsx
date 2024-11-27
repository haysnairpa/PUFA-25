"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/(main)/hooks/use-outside-click";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export function ExpandableCardDemo({ cards }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white hover:bg-gray-100 rounded-full h-8 w-8 transition-colors"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-black sm:rounded-3xl overflow-hidden shadow-xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={300}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                />
              </motion.div>

              <div className="p-6">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-black dark:text-white text-2xl mb-2"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-gray-700 dark:text-gray-300 text-base mb-4"
                >
                  {active.description}
                </motion.p>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-600 dark:text-gray-400 text-sm"
                >
                  {typeof active.content === "function" ? active.content() : active.content}
                </motion.div>
                <Link href={active.eventLink || "#"} passHref>
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center mt-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                  >
                    Go to Event <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.a>
                </Link>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="relative w-full max-w-7xl">
        <ul ref={containerRef} className="flex gap-4 overflow-x-hidden scroll-smooth">
          {cards.map((card, index) => (
            <motion.li
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="flex-shrink-0 w-80 bg-white dark:bg-black hover:bg-neutral-300 dark:hover:bg-gray-900 rounded-xl cursor-pointer transition-colors shadow-md overflow-hidden p-2"
            >
              <motion.div layoutId={`image-${card.title}-${id}`} className="h-48">
                <Image
                  width={300}
                  height={200}
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full rounded-lg object-cover object-center"
                />
              </motion.div>
              <div className="p-4">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-black dark:text-white text-lg mb-2"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-gray-600 dark:text-gray-400 text-sm"
                >
                  {card.description}
                </motion.p>
              </div>
            </motion.li>
          ))}
        </ul>
        <div className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={() => scroll('left')}
            className="bg-white dark:bg-black p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-black dark:text-white" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-white dark:bg-black p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-black dark:text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-black dark:text-white"
  >
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);
