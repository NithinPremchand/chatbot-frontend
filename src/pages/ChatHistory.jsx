 import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ChatHistory = () => {
  const navigate = useNavigate();

  // Mock past chats
  const history = [
    { id: 1, botTitle: "Travel Guide Bot", date: "2024-06-01" },
    { id: 2, botTitle: "Health Advice Bot", date: "2024-06-02" },
    { id: 3, botTitle: "AI News Bot", date: "2024-06-03" },
  ];

  const handleViewChat = (id) => {
    navigate(`/chat/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Chat History</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {history.map(chat => (
          <Card key={chat.id} className="p-4 space-y-2">
            <h2 className="text-lg font-semibold">{chat.botTitle}</h2>
            <p>Date: {chat.date}</p>
            <Button onClick={() => handleViewChat(chat.id)}>View Chat</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;

