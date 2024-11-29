"use client"

import { useState } from "react";
import Image from "next/image";
import { FiUpload, FiCheck, FiX, FiLock } from "react-icons/fi";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("My Account");
  const tabs = ["My Account", "Academic Information", "Verification Status", "Security"];
  const [isDragging, setIsDragging] = useState(false);
  const [formStatus, setFormStatus] = useState({ modified: false, saving: false });
  const [mfaEnabled, setMfaEnabled] = useState(false);

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

  const renderTabContent = () => {
    switch (activeTab) {
      case "My Account":
        return (
          <div className="space-y-6">
            {/* Profile Photo Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Photo</h2>
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

            {/* Personal Information Section */}
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
        );

      case "Academic Information":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Academic Information</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Major <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  disabled
                  defaultValue="Informatics"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Batch <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  disabled
                  defaultValue="2023"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Student ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="001202300030"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  readOnly
                />
              </div>
            </form>
          </div>
        );

      case "Verification Status":
        return (
          <div className="grid gap-6 md:grid-cols-3">
            {/* Email Verification Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Verification Status</h3>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <FiCheck className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-gray-600">Your email is already verified.</p>
              </div>
            </div>

            {/* Student ID Verification Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Student ID Verification Status</h3>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <FiX className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-gray-600">Your student ID is still not verified, please verify it.</p>
                <div className="mt-6 w-full">
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors duration-150 cursor-pointer"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <FiUpload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600">Upload or drag & drop your file PNG, or JPG.</p>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors duration-150">
                    Save Photo
                  </button>
                </div>
              </div>
            </div>

            {/* 2FA Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication Status</h3>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <FiX className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-gray-600">Two-factor authentication is still not enabled, please enable it.</p>
              </div>
            </div>
          </div>
        );

      case "Security":
        return (
          <div className="grid gap-6 md:grid-cols-2">
            {/* Multi-Factor Authentication */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Multi-Factor Authentication</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium">Secure Your Account</span>
                <span className="px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-full">
                  Inactive
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Enable multi-factor authentication to add an extra layer of security to your account. This helps protect
                against unauthorized access by requiring a second form of verification.
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Why Use Multi-Factor Authentication?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Enhanced Security: Adds an extra layer of protection, making it harder for attackers to gain access.</li>
                  <li>• Reduced Risk: Protects sensitive information and reduces the risk of account breaches.</li>
                  <li>• Peace of Mind: Provides confidence that your account is more secure.</li>
                  <li>• Compliance: Helps meet regulatory requirements for protecting user data.</li>
                </ul>
              </div>
              <button
                onClick={() => setMfaEnabled(!mfaEnabled)}
                className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-150"
              >
                Enable 2FA
              </button>
            </div>

            {/* Update Password */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Password</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors duration-150"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="bg-white sticky top-0 z-40">
          <div className="flex overflow-x-auto border-b border-gray-200 relative scrollbar-hide">
            <div className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300" style={{
              left: `${(tabs.indexOf(activeTab) * (100 / tabs.length))}%`,
              width: `${100 / tabs.length}%`
            }}></div>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`flex-1 pb-4 px-4 mt-4 text-sm font-medium transition-colors duration-150 whitespace-nowrap ${
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
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}