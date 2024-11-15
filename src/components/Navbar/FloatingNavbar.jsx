"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconCalendarEvent, IconNews, IconDotsCircleHorizontal } from "@tabler/icons-react";
import Link from "next/link";

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Events",
      link: "/events",
      icon: <IconCalendarEvent className="h-4 w-4 text-white" />,
    },
    {
      name: "News",
      link: "/news",
      icon: <IconNews className="h-4 w-4 text-white" />,
    },
    {
      name: "Others",
      link: "#",
      icon: <IconDotsCircleHorizontal className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <Link href="/auth/login">
        <button className="fixed top-5 right-5 bg-white border text-black px-[2rem] py-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300">
          Login
        </button>
      </Link>
    </div>
  );
}
