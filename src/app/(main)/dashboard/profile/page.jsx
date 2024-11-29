"use client"

import { useState } from "react";
import Image from "next/image";
import { FiUpload } from "react-icons/fi";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("My Account");
  const tabs = ["My Account", "Academic Information", "Verification Status", "Security"];
  const [isDragging, setIsDragging] = useState(false);
  const [formStatus, setFormStatus] = useState({ modified: false, saving: false });

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

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="sticky top-0 bg-gray-50 pt-2 z-40">
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
              <div className="flex items-center space-x-4">
                {formStatus.modified && (
                  <span className="text-sm text-gray-500">Unsaved changes</span>
                )}
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    formStatus.modified
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!formStatus.modified || formStatus.saving}
                  onClick={handleFormSubmit}
                >
                  {formStatus.saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>

            <form onChange={handleFormChange} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="aldi.apriansyah"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="Aldi"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Middle Name <span className="text-gray-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="Apriansyah"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  defaultValue="muhamad.apriansyah@student.president.ac.id"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ colorScheme: 'light' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  defaultValue="Male"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  className="px-8 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors duration-150"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}