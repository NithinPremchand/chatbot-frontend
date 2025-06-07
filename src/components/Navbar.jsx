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
        <Link to="/discover" className="text-gray-700 hover:text-blue-600">Discover</Link>
        <Link to="/admin" className="text-gray-700 hover:text-blue-600">Admin</Link>
        <Link to="/business" className="text-gray-700 hover:text-blue-600">Business</Link>
        <Link to="/discover" className="text-gray-700 hover:text-blue-600">Discover</Link>
        <Link to="/history" className="text-gray-700 hover:text-blue-600">Chat History</Link>
        <Link to="/forgot-password" className="text-gray-700 hover:text-blue-600">Forgot Password</Link>
        <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>


 



      </div>
    </nav>
  );
};

export default Navbar;

