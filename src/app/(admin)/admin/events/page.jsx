"use client";

import { useState } from "react";
import { FiPlus, FiSearch, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample event data - replace with real data later
  const events = [
    {
      id: 1,
      image: "/assets/event-1.jpg",
      title: "PUFA Computing Regeneration 2025",
      organization: "PUFA Computing",
      description: "[PUFA COMPUTING REGENERATION 2025 OPEN REGISTRATION] What's up, PUFA Computing! It's finally here, ...",
      startDate: "Jul 12, 2024",
      endDate: "Jul 16, 2024",
      status: "Closed",
    },
    // Add more events here
  ];

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.organization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Events</h1>
          <p className="text-gray-500">Manage and monitor all events</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <FiPlus className="w-5 h-5" />
          <span>Create Event</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search events..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Event</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event) => (
                <tr key={event.id} className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-500">{event.organization}</p>
                        <p className="text-sm text-gray-500 line-clamp-1 max-w-md mt-1">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <p className="text-gray-900">{event.startDate}</p>
                      <p className="text-gray-500">to {event.endDate}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${event.status === 'Closed' ? 'bg-red-100 text-red-800' : 
                        event.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        'bg-yellow-100 text-yellow-800'}`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <FiChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}