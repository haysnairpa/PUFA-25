"use client"

import { FiUsers, FiCalendar, FiBarChart2, FiArrowUp, FiArrowDown } from "react-icons/fi";

export default function AdminPage() {
  // Sample statistics - replace with real data later
  const stats = [
    {
      title: "Total Users",
      value: "2,345",
      change: "+12%",
      trend: "up",
      icon: FiUsers,
      color: "blue"
    },
    {
      title: "Active Events",
      value: "15",
      change: "+5%",
      trend: "up",
      icon: FiCalendar,
      color: "green"
    },
    {
      title: "Monthly Traffic",
      value: "45.2k",
      change: "-3%",
      trend: "down",
      icon: FiBarChart2,
      color: "purple"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Welcome back, Admin! Here's what's happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-opacity-10"
                     style={{ backgroundColor: stat.color === 'blue' ? '#EBF5FF' : 
                                            stat.color === 'green' ? '#ECFDF5' : 
                                            '#F5F3FF' }}>
                  <Icon className="w-6 h-6" 
                        style={{ color: stat.color === 'blue' ? '#3B82F6' : 
                                       stat.color === 'green' ? '#10B981' : 
                                       '#8B5CF6' }} />
                </div>
                <div className={`flex items-center text-sm ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.trend === "up" ? (
                    <FiArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <FiArrowDown className="w-4 h-4 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <FiUsers className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New user registered</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <FiCalendar className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New event created</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}