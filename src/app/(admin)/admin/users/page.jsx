"use client";

import { useState } from "react";
import { FiPlus, FiSearch, FiEdit2 } from "react-icons/fi";
import Image from "next/image";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Select,
  Option,
  Switch,
} from "@material-tailwind/react";

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Sample users data
  const users = [
    {
      id: 1,
      name: "DebyAyu PutriB",
      email: "deby.butar@student.president.ac.id",
      studentId: "012202200009",
      major: "information system",
      isVerified: false,
      role: "Computizen",
      avatar: "/avatars/deby.jpg"
    },
    {
      id: 2,
      name: "Irfan AL Fakih",
      email: "irfan.fakih@student.president.ac.id",
      studentId: "00120220026",
      major: "informatics",
      isVerified: true,
      role: "Admin",
      avatar: "/avatars/irfan.jpg"
    },
    {
      id: 3,
      name: "Abella Ranggen",
      email: "crisceline.ranggen@student.president.ac.id",
      studentId: "012202300005",
      major: "Information System",
      isVerified: true,
      role: "PUFA Computing",
      avatar: "/avatars/joane.jpg"
    },
    {
      id: 4,
      name: "EyodiaRenita brPandia",
      email: "eyodia.pandia@student.president.ac.id",
      studentId: "00120220106",
      major: "informatics",
      isVerified: false,
      role: "Computizen",
      avatar: "/avatars/eyodia.jpg"
    },
    {
      id: 5,
      name: "AlifElang Abhipraya",
      email: "alif.abhipraya@student.president.ac.id",
      studentId: "00120230040",
      major: "informatics",
      isVerified: false,
      role: "Computizen",
      avatar: "/avatars/alif.jpg"
    }
  ];

  const roles = ["Computizen", "Admin", "PUFA Computing", "PUMA Informatics", "PUMA Information System"];

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleSaveUser = () => {
    // Handle saving user changes here
    setOpenModal(false);
    setSelectedUser(null);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.studentId.includes(searchQuery)
  );

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-base text-gray-600 mt-1">A list of all the users in your account including their name, title, email and role.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <FiPlus className="w-5 h-5" />
          <span>Add User</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name, email, or student ID..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Name</th>
                <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Information</th>
                <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Student ID Verified</th>
                <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Role</th>
                <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-600">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <div className="text-sm font-medium text-gray-900">{user.studentId}</div>
                      <div className="text-sm text-gray-600 capitalize">{user.major}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${user.isVerified ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {user.isVerified ? 'Verified' : 'Not Verified'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-white">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <FiEdit2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit User Modal */}
      <Dialog
        open={openModal}
        handler={() => setOpenModal(false)}
        className="min-w-[24rem]"
      >
        <DialogHeader className="text-xl font-bold">
          Edit User
        </DialogHeader>
        <DialogBody divider className="space-y-6">
          {selectedUser && (
            <>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden relative">
                  <Image
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{selectedUser.name}</h3>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <Select
                    value={selectedUser.role}
                    className="w-full"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    {roles.map((role) => (
                      <Option key={role} value={role}>
                        {role}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Student ID Verification
                  </label>
                  <div className="flex items-center gap-3">
                    <Switch
                      checked={selectedUser.isVerified}
                      color="blue"
                    />
                    <span className="text-sm text-gray-600">
                      {selectedUser.isVerified ? "Verified" : "Not Verified"}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Student Information
                  </label>
                  <div className="text-sm text-gray-600">
                    <p>Student ID: {selectedUser.studentId}</p>
                    <p className="capitalize">Major: {selectedUser.major}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="outlined"
            color="red"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </Button>
          <Button
            color="blue"
            onClick={handleSaveUser}
          >
            Save Changes
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}