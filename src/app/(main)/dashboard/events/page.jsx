"use client"

import { useState } from "react";

export default function EventsPage() {
  // Sample events data - replace with real data later
  const [events] = useState([]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">List of Event Registered</h1>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <div className="bg-gray-50">
            <div className="grid grid-cols-3 px-6 py-3">
              <div className="text-left text-sm font-medium text-gray-500">
                Events Name
              </div>
              <div className="text-left text-sm font-medium text-gray-500">
                Organization
              </div>
              <div className="text-right text-sm font-medium text-gray-500">
                Status
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white divide-y divide-gray-200">
            {events.length === 0 ? (
              <div className="px-6 py-4 text-center text-sm text-gray-500">
                No events found.
              </div>
            ) : (
              events.map((event, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="text-sm text-gray-900">{event.name}</div>
                  <div className="text-sm text-gray-900">{event.organization}</div>
                  <div className="text-right">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        event.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}