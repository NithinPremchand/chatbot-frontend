import React, { useState } from "react";

const ChatbotCreate = () => {
  const [botName, setBotName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { botName, description, isPublic, file });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Create a New Chatbot</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Bot Name</label>
          <input
            type="text"
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter your bot name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Describe what this bot does"
            rows="3"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">YouTube Video URL</label>
          <input
            type="url"
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="https://youtube.com/watch?v=..."
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Web Page URL</label>
          <input
            type="url"
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="https://example.com/page"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Document (PDF/DOC)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
            className="mr-2"
          />
          <span className="text-gray-700">Make Bot Public</span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Create Chatbot
        </button>
      </form>
    </div>
  );
};

export default ChatbotCreate;
