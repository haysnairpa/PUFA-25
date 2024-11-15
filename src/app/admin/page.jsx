"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Calendar, FileText, Home, Menu, User, X, Mail, ShoppingBag, PenTool, Users, Newspaper } from 'lucide-react'

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-black transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-center border-b border-white/10">
            <span className="text-2xl font-bold text-white">Admin Panel</span>
          </div>
          {/* Navigation */}
          <div className="flex-grow overflow-y-auto px-3 py-4">
            <nav className="space-y-2">
              <Link href="/admin" className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10">
                <Home className="mr-2 h-5 w-5" />
                Dashboard
              </Link>
              <Link href="/admin/articles" className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10">
                <PenTool className="mr-2 h-5 w-5" />
                Articles
              </Link>
              <Link href="/admin/news" className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10">
                <Newspaper className="mr-2 h-5 w-5" />
                News
              </Link>
              <Link href="/admin/events" className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10">
                <Calendar className="mr-2 h-5 w-5" />
                Events
              </Link>
              <Link href="/admin/users" className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10">
                <Users className="mr-2 h-5 w-5" />
                Users
              </Link>
              <Link href="/admin/merch" className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Merch
              </Link>
              <Link href="/admin/emails" className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                Emails
              </Link>
            </nav>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className="ml-auto flex items-center gap-4">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              <User className="h-5 w-5" />
              <span className="sr-only">User menu</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 px-4 py-8 md:px-6">
          <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Total Articles</h2>
                <PenTool className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-3xl font-bold">152</p>
              <p className="mt-1 text-sm text-gray-500">+12 this week</p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Upcoming Events</h2>
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-3xl font-bold">3</p>
              <p className="mt-1 text-sm text-gray-500">Next event in 2 days</p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Active Users</h2>
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-3xl font-bold">1,234</p>
              <p className="mt-1 text-sm text-gray-500">+7% from last month</p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Merch Sales</h2>
                <ShoppingBag className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-3xl font-bold">$5,230</p>
              <p className="mt-1 text-sm text-gray-500">+12% from last month</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">Recent Activity</h2>
            <div className="rounded-lg border bg-white shadow-sm">
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New article published</p>
                      <p className="text-sm text-gray-500">By John Doe</p>
                    </div>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">User account updated</p>
                      <p className="text-sm text-gray-500">Jane Smith</p>
                    </div>
                    <span className="text-sm text-gray-500">4 hours ago</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New event created</p>
                      <p className="text-sm text-gray-500">Summer Meetup 2024</p>
                    </div>
                    <span className="text-sm text-gray-500">Yesterday</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Merch order fulfilled</p>
                      <p className="text-sm text-gray-500">Order #12345</p>
                    </div>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}