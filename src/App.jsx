import AdminDashboard from "./pages/AdminDashboard";

import Discover from "./pages/Discover";
import './index.css'; // ✅ must be imported here
<h1 className="text-3xl font-bold text-purple-600">Tailwind is working!</h1>

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ChatbotCreate from "./pages/ChatbotCreate";
import MyBots from "./pages/MyBots";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // ✅ must exist
import BusinessDashboard from "./pages/BusinessDashboard";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/business" element={<BusinessDashboard />} />

        
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/discover" element={<Discover />} />

        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ChatbotCreate />} />
        <Route path="/my-bots" element={<MyBots />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* ✅ must be inside <Routes> */}
      </Routes>
    </Router>
  );
}

export default App;

