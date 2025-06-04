// src/pages/AdminDashboard.jsx

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const [pendingBots, setPendingBots] = useState([
    {
      id: 1,
      name: "TravelBot",
      owner: "user1@example.com",
      status: "Pending",
    },
    {
      id: 2,
      name: "HealthBot",
      owner: "user2@example.com",
      status: "Pending",
    },
  ]);

  const handleApprove = (id) => {
    console.log(`Bot ${id} approved`);
    // You can update state here to simulate approval
  };

  const handleReject = (id) => {
    console.log(`Bot ${id} rejected`);
    // You can update state here to simulate rejection
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Admin Dashboard</h1>

      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Pending Chatbots</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bot Name</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {pendingBots.map((bot) => (
              <TableRow key={bot.id}>
                <TableCell>{bot.name}</TableCell>
                <TableCell>{bot.owner}</TableCell>
                <TableCell>
                  <Badge variant="outline">{bot.status}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button onClick={() => handleApprove(bot.id)}>Approve</Button>
                    <Button variant="destructive" onClick={() => handleReject(bot.id)}>Reject</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminDashboard;
