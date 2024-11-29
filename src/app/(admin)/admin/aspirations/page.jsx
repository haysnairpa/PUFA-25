"use client";

import { useState } from "react";
import { FiSearch, FiMessageSquare, FiCheckCircle, FiXCircle } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function AspirationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample aspirations data
  const aspirations = [
    {
      id: 1,
      title: "Very Cool Website",
      content: "Perlu di improve lagi nich",
      author: "Yudhistira Fauzy",
      date: "Fri Mar 29 2024",
      status: "closed",
      avatar: "/avatars/user1.jpg",
      replies: 1
    },
    {
      id: 2,
      title: "Competition",
      content: "make a large-scale technology event, so that the name of informatics computing is increasingly rising",
      author: "Muhammad Pratama",
      date: "Thu Jun 27 2024",
      status: "open",
      avatar: "/avatars/user2.jpg",
      replies: 1
    },
    {
      id: 3,
      title: "Website",
      content: "Perlu di improve lagi nich",
      author: "alief firmanda",
      date: "Wed Jul 03 2024",
      status: "closed",
      avatar: "/avatars/user3.jpg",
      replies: 2
    }
  ];

  const filteredAspirations = aspirations.filter(aspiration =>
    aspiration.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    aspiration.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    aspiration.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Aspirations</h1>
          <p className="text-base text-gray-600 mt-1">Manage and respond to community aspirations</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search aspirations..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-gray-50/50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Aspirations List */}
      <div className="space-y-4">
        {filteredAspirations.map((aspiration) => (
          <Link 
            href={`/admin/aspirations/${aspiration.id}`}
            key={aspiration.id}
            className="block"
          >
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden relative flex-shrink-0">
                    <Image
                      src={aspiration.avatar}
                      alt={aspiration.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-gray-900">{aspiration.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        aspiration.status === 'open' 
                          ? 'bg-green-50 text-green-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {aspiration.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{aspiration.content}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-sm font-medium text-gray-900">{aspiration.author}</span>
                      <span className="text-sm text-gray-500">{aspiration.date}</span>
                      <div className="flex items-center gap-1 text-gray-500">
                        <FiMessageSquare className="w-4 h-4" />
                        <span className="text-sm">{aspiration.replies}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {aspiration.status === 'closed' ? (
                    <FiCheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <FiXCircle className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}