"use client"

import { Karla } from "next/font/google";
import { ThemeProvider } from "@material-tailwind/react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FiUser, FiCalendar, FiFolder, FiBarChart2 } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const karla = Karla({
    subsets: ['latin'],
    display: "swap",
})

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Profile", href: "/dashboard/profile", icon: FiUser },
    { name: "Events", href: "/dashboard/events", icon: FiCalendar },
    { name: "Projects", href: "/dashboard/projects", icon: FiFolder },
    { name: "Reports", href: "/dashboard/reports", icon: FiBarChart2 },
  ];

  return (
    <div className={karla.className}>
      <ThemeProvider>
        <div className="flex min-h-screen bg-gray-100">
          {/* Sidebar */}
          <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-50 transform transition-transform duration-200 lg:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:min-h-screen`}>
            <div className="flex flex-col h-full self-center">
              {/* Logo */}
              <div className="p-4 border-b">
                <Link href="/" className="flex items-center self-center space-x-2">
                  <Image
                    src="/assets/pufa-computing-logo.png"
                    alt="Computing Logo"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>

              {/* Dashboard Title */}
              <div className="p-4 border-b">
                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-4 py-2 rounded-md transition-colors duration-150 ${
                        pathname === item.href
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <div className="p-4 border-t">
                <button
                  onClick={() => {/* Add logout logic */}}
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 transition-colors duration-150"
                >
                  Logout
                </button>
              </div>
            </div>
          </aside>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md"
          >
            {isOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
          </button>

          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </ThemeProvider>
    </div>
  );
}
