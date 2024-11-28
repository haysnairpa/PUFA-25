"use client"

import { Karla } from "next/font/google";
import { ThemeProvider } from "@material-tailwind/react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FiHome, FiCalendar, FiUsers, FiMail, FiSettings } from "react-icons/fi";
import { BsNewspaper, BsLightbulb, BsShop } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const karla = Karla({
    subsets: ['latin'],
    display: "swap",
})

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: FiHome },
    { name: "Events", href: "/admin/events", icon: FiCalendar },
    { name: "News", href: "/admin/news", icon: BsNewspaper },
    { name: "Users", href: "/admin/users", icon: FiUsers },
    { name: "Aspirations", href: "/admin/aspirations", icon: BsLightbulb },
    { name: "Merch", href: "/admin/merch", icon: BsShop },
    { name: "Email", href: "/admin/email", icon: FiMail },
  ];

  const teams = [
    { 
      name: "PUFA Computing", 
      shortName: "PUFA",
      image: "/teams/pufa.png",
      color: "from-blue-500/20 to-blue-600/20"
    },
    { 
      name: "PUMA Informatics", 
      shortName: "PUMA",
      image: "/teams/puma.png",
      color: "from-purple-500/20 to-purple-600/20"
    },
    { 
      name: "PUMA Information System", 
      shortName: "PUMA",
      image: "/teams/puma.png",
      color: "from-indigo-500/20 to-indigo-600/20"
    }
  ];

  return (
    <div className={karla.className}>
      <ThemeProvider>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 lg:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:min-h-screen bg-[#0F172A] text-gray-300 flex flex-col`}>
            <div className="flex-1 flex flex-col min-h-0">
              {/* Logo */}
              <div className="p-5">
                <Link href="/admin" className="flex items-center space-x-2">
                  <Image
                    src="/assets/pufa-computing-logo.png"
                    alt="Computing Logo"
                    width={40}
                    height={40}
                    className="brightness-0 invert"
                  />
                </Link>
              </div>

              {/* Main Navigation */}
              <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-4 py-2.5 rounded-lg transition-colors duration-150 ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Teams Section */}
              <div className="px-4 py-4">
                <h3 className="px-4 mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  Your teams
                </h3>
                <div className="space-y-2">
                  {teams.map((team, index) => (
                    <Link
                      key={index}
                      href={`/admin/teams/${team.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block"
                    >
                      <div className={`px-4 py-3 rounded-lg bg-gradient-to-r ${team.color} backdrop-blur-sm hover:bg-white/10 transition-colors duration-150 group`}>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white font-medium group-hover:bg-white/20 transition-colors duration-150">
                            {team.shortName.charAt(0)}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-white">{team.name}</p>
                            <p className="text-xs text-gray-400">{team.shortName}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="px-4 py-4 space-y-4">
                {/* Settings */}
                <Link
                  href="/admin/settings"
                  className={`flex items-center px-4 py-2.5 rounded-lg transition-colors duration-150 ${
                    pathname === "/admin/settings"
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <FiSettings className="w-5 h-5 mr-3" />
                  <span className="font-medium">Settings</span>
                </Link>

                {/* Admin Profile */}
                <Link 
                  href="/dashboard/profile" 
                  className="block px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-150 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-medium">
                      A
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Admin</div>
                      <div className="text-xs text-gray-400">admin@pufa.ac.id</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </aside>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
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
          <main className="flex-1 w-full bg-gray-50">
            {children}
          </main>
        </div>
      </ThemeProvider>
    </div>
  );
}
