import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedSource, setSelectedSource] = useState("YouTube");
  const [selectedItem, setSelectedItem] = useState("Item 1");

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    setMessages([...messages, { sender: "user", text: newMessage }]);
    setNewMessage("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "This is a mock reply from the bot." },
      ]);
    }, 500);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left: Chat area */}
      <div className="flex-1 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Chat with Bot</h1>

        <div className="flex-1 border p-4 rounded mb-4 overflow-y-auto space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded ${
                msg.sender === "user"
                  ? "bg-blue-100 text-right"
                  : "bg-gray-100 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <Input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <Button onClick={handleSend}>Send</Button>
        </div>

        {/* Share this chat link */}
        <div className="mt-4">
          <a
            href={`/share/1`} // mock chatId = 1
            className="text-blue-600 hover:underline"
          >
            Share this chat
          </a>
        </div>
      </div>

      {/* Right: Data Source sidebar */}
      <aside className="w-64 bg-gray-100 p-4 border-l flex flex-col space-y-4">
        <h2 className="text-lg font-bold">Data Source</h2>
        <select
          className="p-2 border rounded"
          value={selectedSource}
          onChange={(e) => setSelectedSource(e.target.value)}
        >
          <option>YouTube</option>
          <option>Website</option>
          <option>Documents</option>
        </select>

        <h2 className="text-lg font-bold">Data Item</h2>
        <select
          className="p-2 border rounded"
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
        >
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3</option>
        </select>

        <Button className="mt-auto">Search</Button>
      </aside>
    </div>
  );
};

export default Chat;
