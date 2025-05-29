import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ChatbotCreate from "./pages/ChatbotCreate";
import MyBots from "./pages/MyBots";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // ✅ must exist

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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

