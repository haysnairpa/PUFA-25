"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@material-tailwind/react";
import { FiSearch, FiFilter, FiExternalLink, FiGithub, FiYoutube } from "react-icons/fi";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Sample projects data - replace with real data later
  const projects = [
    {
      id: 1,
      title: "AI-Powered Study Assistant",
      team: "Tech Innovators",
      description: "An AI-powered application that helps students manage their study schedules and provides personalized learning recommendations.",
      major: "Informatics",
      batch: "2023",
      image: "/assets/projects/1001.png",
      links: {
        github: "https://github.com/project1",
        demo: "https://project1-demo.com",
        youtube: "https://youtube.com/watch?v=123"
      },
      tags: ["AI", "Machine Learning", "Web Development"]
    },
    {
      id: 2,
      title: "Smart Campus Navigation",
      team: "Campus Innovate",
      description: "A mobile application that provides real-time indoor navigation within campus buildings using AR technology.",
      major: "Information Systems",
      batch: "2023",
      image: "/assets/projects/desaharapan.png",
      links: {
        github: "https://github.com/project2",
        demo: "https://project2-demo.com"
      },
      tags: ["AR", "Mobile Development", "IoT"]
    },
    // Add more projects as needed
  ];

  const filters = ["All", "Informatics", "Information Systems"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.team.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "All" || project.major === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Computizen Projects Showcase</h1>
        <p className="text-gray-600">Discover amazing projects created by our talented computizens</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            icon={<FiSearch className="h-5 w-5" />}
            label="Search projects"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedFilter === filter
                  ? "bg-blue-50 text-blue-700"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">by {project.team}</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">
                  {project.batch}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FiGithub className="h-5 w-5" />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FiExternalLink className="h-5 w-5" />
                  </a>
                )}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FiYoutube className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <FiFilter className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}