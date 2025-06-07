import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ChatbotCreate from "./pages/ChatbotCreate";
import ChatbotEdit from "./pages/ChatbotEdit";
import BusinessDashboard from "./pages/BusinessDashboard";
import Discover from "./pages/Discover";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyBots from "./pages/MyBots";
import Chat from "./pages/Chat";
import ChatHistory from "./pages/ChatHistory";
import ShareChat from "./pages/ShareChat";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Layout from "./layouts/Layout";

import "./index.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<ChatbotCreate />} />
          <Route path="/edit/:botId" element={<ChatbotEdit />} />
          <Route path="/my-bots" element={<BusinessDashboard />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/history" element={<ChatHistory />} />
          <Route path="/chat/:botId" element={<Chat />} />
          <Route path="/share/:chatId" element={<ShareChat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
