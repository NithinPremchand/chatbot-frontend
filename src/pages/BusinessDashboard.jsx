import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BusinessDashboard = () => {
  const navigate = useNavigate();

  // Mock bots list
  const bots = [
    { id: 1, title: "Travel Bot", status: "Active" },
    { id: 2, title: "Health Bot", status: "Pending" },
  ];

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Chatbots</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bots.map(bot => (
          <Card key={bot.id} className="p-4 space-y-2">
            <h2 className="text-lg font-semibold">{bot.title}</h2>
            <p>Status: {bot.status}</p>
            <Button onClick={() => handleEdit(bot.id)}>Edit Bot</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BusinessDashboard;
