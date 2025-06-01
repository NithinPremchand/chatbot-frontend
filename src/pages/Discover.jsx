 
import React, { useState } from "react";

const Discover = () => {
  const [search, setSearch] = useState("");

  const bots = [
    { id: 1, name: "TravelBot", desc: "Helps with bookings", tags: ["travel"] },
    { id: 2, name: "HealthBot", desc: "Answers health queries", tags: ["health"] },
    { id: 3, name: "EduBot", desc: "Tutoring assistant", tags: ["education"] },
  ];

  const filtered = bots.filter(bot =>
    bot.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Discover Public Chatbots</h2>

      <input
        type="text"
        placeholder="Search by bot name..."
        className="w-full p-2 border border-gray-300 rounded-md mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(bot => (
          <div key={bot.id} className="border p-4 rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">{bot.name}</h3>
            <p className="text-gray-600 mb-2">{bot.desc}</p>
            <div className="text-sm text-gray-500">
              Tags: {bot.tags.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
