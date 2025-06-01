import React from "react";

const MyBots = () => {
  const myBots = [
    {
      id: 1,
      name: "SupportBot",
      description: "Handles customer support queries.",
      isPublic: true,
    },
    {
      id: 2,
      name: "TravelBot",
      description: "Helps with travel bookings and suggestions.",
      isPublic: false,
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">My Chatbots</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {myBots.map((bot) => (
          <div key={bot.id} className="p-4 border rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{bot.name}</h3>
              <span
                className={`text-sm px-2 py-1 rounded-full ${
                  bot.isPublic ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
                }`}
              >
                {bot.isPublic ? "Public" : "Private"}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{bot.description}</p>
            <div className="flex gap-4">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBots;
 
