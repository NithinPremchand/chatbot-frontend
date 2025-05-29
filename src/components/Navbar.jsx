import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-700">
        <Link to="/">Chatbot Platform</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/create" className="text-gray-700 hover:text-blue-600">Create Bot</Link>
        <Link to="/my-bots" className="text-gray-700 hover:text-blue-600">My Bots</Link>
        <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        <Link to="/signup" className="text-green-600 hover:underline">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;

