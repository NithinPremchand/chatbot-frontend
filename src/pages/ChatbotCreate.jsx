// src/pages/ChatbotCreate.jsx
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import axios from "axios"; // ADD THIS

const ChatbotCreate = () => {
  const [formData, setFormData] = useState({
    botName: "",
    dataSource: "",
    isPublic: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("ChatbotCreate submitted:", formData);

    try {
      const response = await axios.post("http://localhost:5000/api/chatbots", formData);
      console.log("Server response:", response.data);
      alert("Chatbot created successfully!");
    } catch (error) {
      console.error("Error creating chatbot:", error);
      alert("Failed to create chatbot.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Create Chatbot</h2>

        <form onSubmit={handleSubmit}>
          {/* Bot Name */}
          <div className="mb-4">
            <label htmlFor="botName" className="block mb-1 text-sm font-medium text-gray-700">
              Bot Name
            </label>
            <Input
              type="text"
              name="botName"
              placeholder="Enter bot name"
              value={formData.botName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Data Source */}
          <div className="mb-4">
            <label htmlFor="dataSource" className="block mb-1 text-sm font-medium text-gray-700">
              Data Source (YouTube URL / Docs / Web)
            </label>
            <Input
              type="text"
              name="dataSource"
              placeholder="Enter data source URL"
              value={formData.dataSource}
              onChange={handleChange}
              required
            />
          </div>

          {/* Public / Private toggle */}
          <div className="mb-6 flex items-center space-x-2">
            <input
              type="checkbox"
              name="isPublic"
              checked={formData.isPublic}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-sm text-gray-700">Make this chatbot public</span>
            <Badge variant="outline" className="ml-2">
              {formData.isPublic ? "Public" : "Private"}
            </Badge>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full">
            Create Chatbot
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotCreate;
