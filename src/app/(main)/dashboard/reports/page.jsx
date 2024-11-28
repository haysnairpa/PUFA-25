"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  Progress,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  FiAward,
  FiBarChart2,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiFolder,
  FiTrendingUp,
} from "react-icons/fi";

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("achievements");

  // Sample data - replace with real data later
  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      event: "President University Hackathon 2023",
      date: "Dec 2023",
      type: "Competition",
      badge: "🏆 First Place",
    },
    {
      id: 2,
      title: "Best Project Award",
      event: "Computing Exhibition 2023",
      date: "Nov 2023",
      type: "Project",
      badge: "🌟 Excellence",
    },
  ];

  const activities = {
    events: {
      total: 15,
      attended: 12,
      upcoming: 3,
    },
    projects: {
      total: 8,
      completed: 6,
      ongoing: 2,
    },
    skills: [
      { name: "Web Development", progress: 85 },
      { name: "UI/UX Design", progress: 75 },
      { name: "Mobile Development", progress: 60 },
      { name: "Data Science", progress: 70 },
    ],
  };

  const stats = [
    {
      title: "Event Participation",
      value: "80%",
      icon: FiCalendar,
      description: "12 out of 15 events attended",
      trend: "up",
      color: "blue",
    },
    {
      title: "Project Completion",
      value: "75%",
      icon: FiFolder,
      description: "6 out of 8 projects completed",
      trend: "up",
      color: "green",
    },
    {
      title: "Average Performance",
      value: "A",
      icon: FiTrendingUp,
      description: "Based on project evaluations",
      trend: "up",
      color: "purple",
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Activity Reports</h1>
        <p className="text-gray-600">Track your progress and achievements</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardBody className="p-4">
              <div className="flex items-center gap-4">
                <div className={`rounded-full p-3 bg-${stat.color}-50`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-500`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 flex items-center gap-1">
                {stat.trend === "up" && <FiTrendingUp className="text-green-500" />}
                {stat.description}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Detailed Reports */}
      <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
        <TabsHeader>
          <Tab value="achievements">
            <div className="flex items-center gap-2">
              <FiAward className="h-4 w-4" />
              Achievements
            </div>
          </Tab>
          <Tab value="progress">
            <div className="flex items-center gap-2">
              <FiBarChart2 className="h-4 w-4" />
              Progress
            </div>
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="achievements" className="p-0">
            <div className="grid gap-4">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className="overflow-hidden">
                  <CardBody className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{achievement.event}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FiClock className="h-4 w-4" />
                          {achievement.date}
                        </div>
                      </div>
                      <span className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full">
                        {achievement.badge}
                      </span>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="progress" className="p-0">
            <div className="grid gap-6">
              {/* Event Progress */}
              <Card className="overflow-hidden">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Participation</h3>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FiCheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium">Attended Events</span>
                    </div>
                    <span className="text-sm text-gray-600">{activities.events.attended} of {activities.events.total}</span>
                  </div>
                  <Progress value={(activities.events.attended / activities.events.total) * 100} color="green" />
                </CardBody>
              </Card>

              {/* Skills Progress */}
              <Card className="overflow-hidden">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills Development</h3>
                  <div className="space-y-4">
                    {activities.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.progress}%</span>
                        </div>
                        <Progress value={skill.progress} color="blue" />
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}