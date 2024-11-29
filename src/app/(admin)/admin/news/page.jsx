"use client";

import { useState } from "react";
import { FiPlus, FiSearch, FiMoreVertical, FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("all");

  // Sample news data - replace with real data later
  const newsItems = [
    {
      id: 1,
      title: "The Limits of AI in User Research and Design",
      team: "PUFA Computing",
      publishedDate: "Thu Jun 27 2024",
      author: "Adelia Zhafira",
      status: "published",
    },
    {
      id: 2,
      title: "How Generative AI is Transforming Data Analytics and Driving Business Growth",
      team: "PUFA Computing",
      publishedDate: "Thu Jun 27 2024",
      author: "Adelia Zhafira",
      status: "published",
    },
    {
      id: 3,
      title: "Nostalgic Journey Through the Evolution of Technology and Design",
      team: "PUFA Computing",
      publishedDate: "Thu Jun 27 2024",
      author: "Adelia Zhafira",
      status: "published",
    },
    {
      id: 4,
      title: "Revolutionizing Home Automation with Zigbee Technology",
      team: "PUFA Computing",
      publishedDate: "Mon Jun 24 2024",
      author: "Adelia Zhafira",
      status: "published",
    },
    {
      id: 5,
      title: "Exploring the Future of Smart Homes with Matter",
      team: "PUFA Computing",
      publishedDate: "Mon Jun 24 2024",
      author: "Adelia Zhafira",
      status: "published",
    },
    {
      id: 6,
      title: "OpenAI's Stark Warning: Humanity Unprepared for the AI Revolution",
      team: "PUFA Computing",
      publishedDate: "Mon Jun 24 2024",
      author: "Adelia Zhafira",
      status: "published",
    },
  ];

  const teams = [
    { id: "all", name: "All Teams" },
    { id: "pufa-computing", name: "PUFA Computing" },
    { id: "puma-informatics", name: "PUMA Informatics" },
    { id: "puma-is", name: "PUMA Information System" },
  ];

  const filteredNews = newsItems.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTeam = selectedTeam === "all" || news.team.toLowerCase().replace(/\s+/g, '-') === selectedTeam;
    return matchesSearch && matchesTeam;
  });

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">News</h1>
          <p className="text-base text-gray-600 mt-1">Manage and publish news articles for your organization.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <FiPlus className="w-5 h-5" />
          <span>Create News</span>
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Search */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search news..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Team Filter */}
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
        >
          {teams.map(team => (
            <option key={team.id} value={team.id}>{team.name}</option>
          ))}
        </select>
      </div>

      {/* News List */}
      <div className="space-y-4">
        {filteredNews.map((news) => (
          <div key={news.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-blue-500/20 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
                    {news.team}
                  </span>
                  <span className="text-sm text-gray-500">
                    Published on {news.publishedDate}
                  </span>
                </div>
                <div className="font-semibold text-gray-900 mb-2">{news.title}</div>
                <p className="text-sm text-gray-600 line-clamp-2">{news.title}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">{news.author}</span>
                  <span className="text-sm text-gray-600">•</span>
                  <span className="text-sm text-gray-600">{news.publishedDate}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="text-gray-400 hover:text-blue-600 transition-colors px-2 py-1">
                  <FiEye className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-blue-600 transition-colors px-2 py-1">
                  <FiEdit2 className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-red-600 transition-colors px-2 py-1">
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}