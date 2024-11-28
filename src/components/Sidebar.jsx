"use client"

import { useState } from "react";
import Link from "next/link";
import { FiUser, FiCalendar, FiFolder, FiBarChart2 } from "react-icons/fi";

export default function Sidebar({ isSidebarOpen }) {
  const menuItems = [
    {
      href: "/dashboard/profile",
      icon: <FiUser className="w-5 h-5 mr-3" />,
      label: "Profile"
    },
    {
      href: "/dashboard/events", 
      icon: <FiCalendar className="w-5 h-5 mr-3" />,
      label: "Events"
    },
    {
      href: "/dashboard/projects",
      icon: <FiFolder className="w-5 h-5 mr-3" />,
      label: "Projects" 
    },
    {
      href: "/dashboard/reports",
      icon: <FiBarChart2 className="w-5 h-5 mr-3" />,
      label: "Reports"
    }
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-50 border-r border-gray-200 transform transition-transform duration-200 lg:translate-x-0 lg:static lg:min-h-screen ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    }`}>
      <div className="flex flex-col h-full">
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
