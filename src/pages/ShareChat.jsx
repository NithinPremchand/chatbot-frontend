 
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ShareChat = () => {
  const { chatId } = useParams();

  const shareLink = `https://chat.example.com/chat/${chatId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    alert("Link copied to clipboard! 🚀");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Shareable Chat Link</h1>

      <Card className="p-4 space-y-2">
        <p className="text-lg">Here is your shareable link:</p>
        <p className="bg-gray-100 p-2 rounded">{shareLink}</p>
        <Button onClick={handleCopy}>Copy Link</Button>
      </Card>
    </div>
  );
};

export default ShareChat;
