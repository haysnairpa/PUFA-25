"use client"

import { useState } from "react"
import { BarChart3, Calendar, FileText, Home, Menu, User, X } from 'lucide-react'
import Link from "next/link"
import DashboardLayout from "./layout"

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <section className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside  
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-black transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-center border-b border-white/10">
            <div className="h-12 w-12 rounded-full bg-white" />
          </div>
          {/* Navigation */}
          <div className="relative flex-grow overflow-auto px-3 py-4">
            <div className="h-full w-full">
              <nav className="space-y-2">
                <Link
                  href="#"
                  className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10"
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
                <Link
                  href="#"
                  className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Events
                </Link>
                <Link
                  href="#"
                  className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Projects
                </Link>
                <Link
                  href="#"
                  className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10"
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Reports
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="flex h-16 items-center justify-between border-b px-4 md:px-6">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className="ml-auto flex items-center gap-4">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">User menu</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 px-4 py-8 md:px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium">Total Events</h3>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium">Active Projects</h3>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium">Reports Generated</h3>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+6 from last month</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold leading-none tracking-tight">Recent Activity</h3>
                <p className="text-sm text-muted-foreground">Overview of your latest actions</p>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium">New project created</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium">Report generated</p>
                      <p className="text-sm text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium">Event scheduled</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}