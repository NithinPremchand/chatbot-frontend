// src/pages/BusinessDashboard.jsx

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const BusinessDashboard = () => {
  const [branding, setBranding] = useState({
    companyName: "Awesome Co.",
    primaryColor: "#3b82f6", // Blue
    domain: "https://awesome-chatbot.com",
  });

  const [leadForm, setLeadForm] = useState({
    enabled: true,
  });

  const usageStats = {
    totalBots: 8,
    activeToday: 3,
    totalChats: 560,
  };

  const handleBrandingChange = (e) => {
    const { name, value } = e.target;
    setBranding((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLeadFormToggle = () => {
    setLeadForm((prev) => ({
      enabled: !prev.enabled,
    }));
  };

  const handleSaveSettings = () => {
    console.log("Branding settings saved:", branding);
    console.log("Lead form settings saved:", leadForm);
    alert("Settings saved (mock)!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Business Dashboard</h1>

      {/* Branding Section */}
      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Branding & Domain</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Company Name</label>
          <Input
            type="text"
            name="companyName"
            value={branding.companyName}
            onChange={handleBrandingChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Primary Color (hex)</label>
          <Input
            type="text"
            name="primaryColor"
            value={branding.primaryColor}
            onChange={handleBrandingChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Custom Domain</label>
          <Input
            type="text"
            name="domain"
            value={branding.domain}
            onChange={handleBrandingChange}
          />
        </div>
      </div>

      {/* Lead Form Section */}
      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Lead Collection Form</h2>

        <div className="flex items-center space-x-4">
          <Badge variant="outline">
            {leadForm.enabled ? "Enabled" : "Disabled"}
          </Badge>

          <Button onClick={handleLeadFormToggle}>
            {leadForm.enabled ? "Disable" : "Enable"}
          </Button>
        </div>
      </div>

      {/* Usage Stats */}
      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Usage Stats</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Metric</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Total Bots</TableCell>
              <TableCell>{usageStats.totalBots}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Active Today</TableCell>
              <TableCell>{usageStats.activeToday}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Chats</TableCell>
              <TableCell>{usageStats.totalChats}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Save Settings Button */}
      <Button onClick={handleSaveSettings}>Save Settings</Button>
    </div>
  );
};

export default BusinessDashboard;
 
