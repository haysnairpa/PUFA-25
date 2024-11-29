"use client";

import { useState } from "react";
import { FiArrowLeft, FiSend, FiCheckCircle, FiXCircle } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function AspirationDetailPage({ params }) {
  const [reply, setReply] = useState("");

  // Sample aspiration data (in real app, fetch based on params.id)
  const aspiration = {
    id: params.id,
    title: "Very Cool Website",
    content: "Perlu di improve lagi nich",
    author: "Yudhistira Fauzy",
    date: "Fri Mar 29 2024",
    status: "closed",
    avatar: "/avatars/user1.jpg",
    replies: [
      {
        id: 1,
        content: "Terima kasih atas masukannya, kami akan terus mengembangkannya lebih baik lagi",
        author: "Admin",
        date: "Fri Mar 29 2024",
        isAdmin: true,
        avatar: "/avatars/admin.jpg"
      }
    ]
  };

  const handleSubmitReply = (e) => {
    e.preventDefault();
    // Handle reply submission here
    setReply("");
  };

  return (
    <div className="p-6 max-w-[1000px] mx-auto">
      {/* Header with Back Button */}
      <div className="mb-8">
        <Link 
          href="/admin/aspirations"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <FiArrowLeft className="w-5 h-5 mr-2" />
          Back to Aspirations
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{aspiration.title}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-base text-gray-600">Posted by {aspiration.author}</span>
              <span className="text-gray-400">•</span>
              <span className="text-base text-gray-600">{aspiration.date}</span>
            </div>
          </div>
          <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
            aspiration.status === 'open' 
              ? 'bg-green-50 text-green-700' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {aspiration.status}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden relative flex-shrink-0">
            <Image
              src={aspiration.avatar}
              alt={aspiration.author}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-800 text-lg">{aspiration.content}</p>
          </div>
        </div>
      </div>

      {/* Replies Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Replies</h2>
        
        {aspiration.replies.map((reply) => (
          <div 
            key={reply.id}
            className="bg-gray-50 rounded-lg p-6"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden relative flex-shrink-0">
                <Image
                  src={reply.avatar}
                  alt={reply.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-gray-900">{reply.author}</span>
                  {reply.isAdmin && (
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                      Admin
                    </span>
                  )}
                  <span className="text-sm text-gray-500">{reply.date}</span>
                </div>
                <p className="text-gray-800">{reply.content}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Reply Form */}
        <form onSubmit={handleSubmitReply} className="mt-8">
          <div className="mb-4">
            <label htmlFor="reply" className="block text-sm font-medium text-gray-700 mb-2">
              Your Reply
            </label>
            <textarea
              id="reply"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
              placeholder="Write your reply..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiSend className="w-4 h-4 mr-2" />
              Send Reply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
