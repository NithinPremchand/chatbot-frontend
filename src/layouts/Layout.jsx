import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-6 space-y-8 shadow">
        <div className="text-2xl font-bold text-blue-700 mb-4">
          Chatbot Platform
        </div>

        {/* Main Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">📋 Main</h3>
          <nav className="space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/discover" className="block text-gray-700 hover:text-blue-600">Discover</Link>
            <Link to="/create" className="block text-gray-700 hover:text-blue-600">Create Bot</Link>
            <Link to="/my-bots" className="block text-gray-700 hover:text-blue-600">My Bots</Link>
            <Link to="/history" className="block text-gray-700 hover:text-blue-600">Chat History</Link>
            <Link to="/admin" className="block text-gray-700 hover:text-blue-600">Admin Dashboard</Link>

          </nav>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">👤 Account</h3>
          <nav className="space-y-2">
            <Link to="/profile" className="block text-gray-700 hover:text-blue-600">Profile</Link>
            <Link to="/login" className="block text-gray-700 hover:text-blue-600">Logout</Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
