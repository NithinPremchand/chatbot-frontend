 
import React from "react";

const BusinessDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Business Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chatbot Management */}
        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Manage Your Chatbots</h2>
          <p className="text-gray-600 text-sm mb-3">View or edit your business bots.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Create New Bot</button>
        </div>

        {/* Embed Options */}
        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Embed Code</h2>
          <p className="text-sm text-gray-600 mb-2">Copy iframe or script to embed on your site.</p>
          <pre className="bg-gray-100 p-2 rounded text-sm">
            {`<iframe src="https://yourbot.com/embed/123" width="400" height="500"></iframe>`}
          </pre>
        </div>

        {/* Branding */}
        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Branding Settings</h2>
          <p className="text-sm text-gray-600 mb-2">Set your bot’s name, color, and logo.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Customize</button>
        </div>

        {/* Analytics Overview */}
        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Analytics Overview</h2>
          <p className="text-sm text-gray-600">Chats: <strong>1,245</strong> | Leads: <strong>94</strong></p>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
