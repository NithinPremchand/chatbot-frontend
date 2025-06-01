import React, { useState } from "react";

const AdminDashboard = () => {
  const [pendingBots] = useState([
    { id: 1, name: "TravelBot", owner: "user1@example.com", status: "pending" },
    { id: 2, name: "HealthBot", owner: "user2@example.com", status: "pending" },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Admin Dashboard</h1>

      {/* Pending Chatbots Section */}
      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Pending Chatbots</h2>
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b text-gray-700">
              <th className="p-2">Bot Name</th>
              <th className="p-2">Owner</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingBots.map((bot) => (
              <tr key={bot.id} className="border-t hover:bg-gray-50">
                <td className="p-2 font-medium">{bot.name}</td>
                <td className="p-2">{bot.owner}</td>
                <td className="p-2">{bot.status}</td>
                <td className="p-2 space-x-2">
                  <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Approve</button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chatbot Usage Section */}
      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Chatbot Usage Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded">
            <h3 className="text-sm font-medium text-blue-700">Total Bots</h3>
            <p className="text-2xl font-bold text-blue-900">56</p>
          </div>
          <div className="bg-green-100 p-4 rounded">
            <h3 className="text-sm font-medium text-green-700">Active Bots Today</h3>
            <p className="text-2xl font-bold text-green-900">18</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded">
            <h3 className="text-sm font-medium text-yellow-700">Total Chats</h3>
            <p className="text-2xl font-bold text-yellow-900">1,238</p>
          </div>
        </div>
      </div>

      {/* User Management Section */}
      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">User Management</h2>
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b text-gray-700">
              <th className="p-2">User</th>
              <th className="p-2">Role</th>
              <th className="p-2">Bots Created</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, email: "user1@example.com", role: "user", bots: 3 },
              { id: 2, email: "business@example.com", role: "business", bots: 7 },
              { id: 3, email: "admin@example.com", role: "admin", bots: 0 },
            ].map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-2 font-medium">{user.email}</td>
                <td className="p-2 capitalize">{user.role}</td>
                <td className="p-2">{user.bots}</td>
                <td className="p-2 space-x-2">
                  {user.role !== "admin" && (
                    <>
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Promote</button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Ban</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
