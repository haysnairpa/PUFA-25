"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Dropdown from "@/components/Navbar/Dropdown";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2 items-center justify-center space-x-6",
          className
        )}
      >
        {navItems.slice(0, 2).map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 text-[1.1rem] items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500 duration-300 transitions-all text-sm"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}

        <div className="relative bg-white w-20 h-20 rounded-full flex justify-center items-center -my-4 shadow-md ">
          <Image src="/assets/pufa-computing-logo.png" alt="PUFA Computing Logo" width={50} height={50} />
        </div>

        <Link
          href={navItems[2].link}
          className={cn(
            "relative dark:text-neutral-50 text-[1.1rem] items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500 duration-300 transitions-all text-sm"
          )}
        >
          <span className="block sm:hidden">{navItems[2].icon}</span>
          <span className="hidden sm:block">{navItems[2].name}</span>
        </Link>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500 duration-300 transitions-all text-sm"
          >
            <span className="block sm:hidden">{navItems[3].icon}</span>
            <span className="hidden sm:block">{navItems[3].name}</span>
          </button>
          <AnimatePresence>
            {dropdownOpen && (
              <Dropdown
                items={[
                  { name: "Aspirations", link: "/others/aspirations" },
                  { name: "Merch", link: "/others/merch" },
                  { name: "Projects", link: "/others/projects" },
                  { name: "Our Partners", link: "/others/ourpartners" },
                ]}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
