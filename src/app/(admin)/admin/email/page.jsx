"use client";

import { useState } from "react";
import { FiMail, FiUsers, FiSend, FiEye, FiX, FiCalendar, FiFileText } from "react-icons/fi";
import Image from "next/image";

export default function EmailPage() {
  const [emailType, setEmailType] = useState("event"); // event, news, meeting
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("all");
  const [showPreview, setShowPreview] = useState(false);

  // Sample teams data
  const teams = [
    { id: "all", name: "All Teams" },
    { id: "pufa", name: "PUFA Computing" },
    { id: "puma-if", name: "PUMA Informatics" },
    { id: "puma-is", name: "PUMA Information System" }
  ];

  // Sample email templates
  const emailTemplates = {
    event: {
      title: "Event Notification",
      subject: "New Event: [Event Name]",
      template: `Dear Computizen,

We are excited to announce a new upcoming event!

Event Details:
- Name: [Event Name]
- Date: [Event Date]
- Location: [Location]
- Description: [Description]

Please mark your calendar and don't miss this opportunity!

Best regards,
PUFA Computing Team`
    },
    news: {
      title: "News Announcement",
      subject: "Latest News Update",
      template: `Dear Computizen,

We have important news to share with you!

[News Title]

[News Content]

Stay updated with our latest developments.

Best regards,
PUFA Computing Team`
    },
    meeting: {
      title: "Meeting Invitation",
      subject: "Meeting Invitation: [Meeting Title]",
      template: `Dear Computizen,

You are invited to attend an upcoming meeting.

Meeting Details:
- Title: [Meeting Title]
- Date: [Meeting Date]
- Time: [Meeting Time]
- Location: [Location/Platform]
- Agenda: [Agenda]

Please confirm your attendance.

Best regards,
PUFA Computing Team`
    }
  };

  const handleEmailTypeChange = (type) => {
    setEmailType(type);
    setSubject(emailTemplates[type].subject);
    setContent(emailTemplates[type].template);
  };

  const handleSendEmail = () => {
    // Handle email sending logic here
    console.log({
      type: emailType,
      subject,
      content,
      team: selectedTeam
    });
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Email Blast</h1>
        <p className="text-base text-gray-600 mt-1">Send automated email notifications to team members</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Email Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Email Type Selection */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Notification Type</h2>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleEmailTypeChange("event")}
                className={`flex flex-col items-center p-4 rounded-lg border ${
                  emailType === "event"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <FiCalendar className={`w-6 h-6 mb-2 ${
                  emailType === "event" ? "text-blue-500" : "text-gray-500"
                }`} />
                <span className={emailType === "event" ? "text-blue-700" : "text-gray-700"}>
                  Event
                </span>
              </button>
              <button
                onClick={() => handleEmailTypeChange("news")}
                className={`flex flex-col items-center p-4 rounded-lg border ${
                  emailType === "news"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <FiFileText className={`w-6 h-6 mb-2 ${
                  emailType === "news" ? "text-blue-500" : "text-gray-500"
                }`} />
                <span className={emailType === "news" ? "text-blue-700" : "text-gray-700"}>
                  News
                </span>
              </button>
              <button
                onClick={() => handleEmailTypeChange("meeting")}
                className={`flex flex-col items-center p-4 rounded-lg border ${
                  emailType === "meeting"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <FiUsers className={`w-6 h-6 mb-2 ${
                  emailType === "meeting" ? "text-blue-500" : "text-gray-500"
                }`} />
                <span className={emailType === "meeting" ? "text-blue-700" : "text-gray-700"}>
                  Meeting
                </span>
              </button>
            </div>
          </div>

          {/* Email Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {emailTemplates[emailType].title}
            </h2>
            
            {/* Subject */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Email Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                placeholder="Enter email subject..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Email Content
              </label>
              <textarea
                id="content"
                rows={12}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none font-mono text-sm"
                placeholder="Write your email content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPreview(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FiEye className="w-4 h-4 mr-2" />
              Preview
            </button>
            <button
              onClick={handleSendEmail}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiSend className="w-4 h-4 mr-2" />
              Send Email
            </button>
          </div>
        </div>

        {/* Recipients Selection */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Recipients</h2>
            <div className="space-y-3">
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => setSelectedTeam(team.id)}
                  className={`w-full px-4 py-2 rounded-lg text-left ${
                    selectedTeam === team.id
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {team.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-medium text-gray-900 mb-2">Recipients Info</h3>
            <p className="text-sm text-gray-600">
              Email will be sent to all registered users from {selectedTeam === "all" ? "all teams" : teams.find(t => t.id === selectedTeam)?.name}.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Only users with verified student email addresses will receive the notification.
            </p>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Email Preview</h2>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Subject</h3>
                  <p className="mt-1 text-gray-900">{subject || "No subject"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Recipients</h3>
                  <p className="mt-1 text-gray-900">
                    All verified users from {selectedTeam === "all" ? "all teams" : teams.find(t => t.id === selectedTeam)?.name}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Content</h3>
                  <div className="mt-1 text-gray-900 whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-lg">
                    {content || "No content"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}