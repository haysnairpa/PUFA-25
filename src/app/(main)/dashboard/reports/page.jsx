"use client"

import { useState } from "react";
import { FiCalendar, FiMessageCircle, FiClock, FiCheck, FiX } from "react-icons/fi";

export default function Reports() {
  const [activeTab, setActiveTab] = useState("events");

  // Sample data - replace with actual data from your backend
  const events = [
    {
      id: 1,
      title: "Computing Workshop: Web Development",
      date: "2024-02-15",
      time: "13:00 - 15:00",
      location: "Room 503",
      status: "attended",
      category: "Workshop"
    },
    {
      id: 2,
      title: "Guest Speaker: AI in Modern World",
      date: "2024-02-10",
      time: "10:00 - 12:00",
      location: "Auditorium",
      status: "attended",
      category: "Seminar"
    },
    {
      id: 3,
      title: "Computing Club Meeting",
      date: "2024-02-05",
      time: "15:00 - 16:00",
      location: "Room 501",
      status: "missed",
      category: "Meeting"
    }
  ];

  const aspirations = [
    {
      id: 1,
      title: "Improve Lab Equipment",
      date: "2024-02-14",
      status: "in-progress",
      category: "Facility",
      description: "Request for new computers in Lab 503 for better performance during practical sessions."
    },
    {
      id: 2,
      title: "Additional Programming Workshop",
      date: "2024-02-08",
      status: "completed",
      category: "Academic",
      description: "Suggestion to conduct more programming workshops for first-year students."
    },
    {
      id: 3,
      title: "Extended Lab Hours",
      date: "2024-02-01",
      status: "pending",
      category: "Facility",
      description: "Request to extend computer lab operating hours during final projects period."
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'attended': 'bg-green-100 text-green-800',
      'missed': 'bg-red-100 text-red-800',
      'completed': 'bg-green-100 text-green-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'pending': 'bg-yellow-100 text-yellow-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <p className="mt-1 text-sm text-gray-500">
          View your event participation history and submitted aspirations
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Events</p>
              <p className="text-2xl font-semibold mt-1">{events.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <FiCalendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <FiCheck className="w-4 h-4 mr-1 text-green-500" />
            <span>{events.filter(e => e.status === 'attended').length} attended</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Aspirations</p>
              <p className="text-2xl font-semibold mt-1">{aspirations.length}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <FiMessageCircle className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <FiClock className="w-4 h-4 mr-1 text-blue-500" />
            <span>{aspirations.filter(a => a.status === 'in-progress').length} in progress</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('events')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
            activeTab === 'events'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          Events History
        </button>
        <button
          onClick={() => setActiveTab('aspirations')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
            activeTab === 'aspirations'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          My Aspirations
        </button>
      </div>

      {/* Content */}
      {activeTab === 'events' ? (
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <FiCalendar className="w-4 h-4 mr-2" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiMessageCircle className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </span>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {event.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {aspirations.map((aspiration) => (
            <div key={aspiration.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{aspiration.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{aspiration.description}</p>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FiCalendar className="w-4 h-4 mr-2" />
                      <span>Submitted on {aspiration.date}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(aspiration.status)}`}>
                  {aspiration.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {aspiration.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}