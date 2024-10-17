"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4  text-white" />,
    },
    {
      name: "Events",
      link: "/events",
      icon: <IconUser className="h-4 w-4  text-white" />,
    },
    {
      name: "News",
      link: "/news",
      icon: (
        <IconMessage className="h-4 w-4  text-white" />
      ),
    },
    {
      name: "PUMA",
      link: "/",
      icon: (
        <IconMessage className="h-4 w-4  text-white" />
      ),
    },
  ];
  return (
    (<div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>)
  );
}
const DummyContent = () => {
  return (
    (<div>

    </div>)
  );
};
