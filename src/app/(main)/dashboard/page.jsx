"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiUser, FiCalendar, FiFolder, FiBarChart2, FiUpload, FiInfo, FiMenu, FiX } from "react-icons/fi";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("My Account");
  const tabs = ["My Account", "Academic Information", "Verification Status", "Security"];
  const [isDragging, setIsDragging] = useState(false);
  const [formStatus, setFormStatus] = useState({ modified: false, saving: false });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, saving: true });
    // Simulate API call
    setTimeout(() => {
      setFormStatus({ modified: false, saving: false });
    }, 1000);
  };

  const handleFormChange = () => {
    if (!formStatus.modified) {
      setFormStatus({ ...formStatus, modified: true });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-white border-b border-gray-200 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
        <h1 className="text-lg font-bold">Dashboard</h1>
        <div className="w-8" /> {/* Spacer for alignment */}
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-50 border-r border-gray-200 transform transition-transform duration-200 lg:translate-x-0 lg:static lg:min-h-screen ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
            >
              <FiUser className="w-5 h-5 mr-3" />
              Profile
            </Link>
            <Link
              href="/events"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150"
            >
              <FiCalendar className="w-5 h-5 mr-3" />
              Events
            </Link>
            <Link
              href="/projects"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150"
            >
              <FiFolder className="w-5 h-5 mr-3" />
              Projects
            </Link>
            <Link
              href="/reports"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150"
            >
              <FiBarChart2 className="w-5 h-5 mr-3" />
              Reports
            </Link>
          </nav>
        </div>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-0 p-4 lg:p-8 mt-16 lg:mt-0">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="sticky top-[60px] lg:top-0 bg-gray-50 pt-2 z-40">
            <div className="flex overflow-x-auto border-b border-gray-200 relative scrollbar-hide">
              <div className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300" style={{
                left: `${(tabs.indexOf(activeTab) * (100 / tabs.length))}%`,
                width: `${100 / tabs.length}%`
              }}></div>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 pb-4 px-4 text-sm font-medium transition-colors duration-150 whitespace-nowrap ${
                    activeTab === tab
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content with top margin for tabs */}
          <div className="mt-6">
            {/* Profile Photo */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-6 text-gray-900">Profile Photo</h2>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 relative group">
                  <Image
                    src="/assets/profile.png"
                    alt="Profile"
                    width={96}
                    height={96}
                    className="rounded-full transition-opacity duration-150 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <FiUpload className="w-6 h-6 text-white" />
                  </div>
                </div>
                <button className="text-sm text-blue-500 hover:text-blue-600 transition-colors duration-150 mb-6">
                  Edit your photo
                </button>
                <div 
                  className={`w-full border-2 border-dashed rounded-lg p-6 transition-colors duration-150 ${
                    isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center">
                    <FiUpload className={`w-6 h-6 mb-2 transition-colors duration-150 ${
                      isDragging ? "text-blue-500" : "text-gray-400"
                    }`} />
                    <p className="text-sm font-medium text-center">Add Profile Picture</p>
                    <p className="text-xs text-gray-500 mt-1 text-center">Upload or drag & drop your file SVG, PNG, or JPG.</p>
                  </div>
                </div>
                <button className="mt-6 px-8 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors duration-150">
                  Save Photo
                </button>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
                {formStatus.modified && (
                  <span className="text-sm text-amber-600">* Unsaved changes</span>
                )}
              </div>
              <form className="space-y-5" onSubmit={handleFormSubmit} onChange={handleFormChange}>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      defaultValue="aldi.apriansyah"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <FiInfo className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      defaultValue="Aldi"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Middle Name
                      <span className="text-gray-400 text-xs ml-1">(optional)</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    defaultValue="Apriansyah"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    defaultValue="muhamad.apriansyah@student.president.ac.id"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <select 
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={!formStatus.modified || formStatus.saving}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                      formStatus.modified
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    } ${formStatus.saving ? "animate-pulse" : ""}`}
                  >
                    {formStatus.saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}