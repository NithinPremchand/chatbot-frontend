import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Discover = () => {
  const [category, setCategory] = useState("All");
  const [filter, setFilter] = useState("");

  // Mock bot data
  const bots = [
    { id: 1, name: "TravelBot", category: "Travel", description: "Your travel guide bot." },
    { id: 2, name: "HealthBot", category: "Health", description: "Get health tips and advice." },
    { id: 3, name: "NewsBot", category: "News", description: "Latest news updates." },
    { id: 4, name: "FitnessBot", category: "Health", description: "Fitness and workout guidance." },
    { id: 5, name: "AI Trends Bot", category: "Tech", description: "AI and tech trends." },
  ];

  // Filtered bots
  const filteredBots = bots.filter((bot) => {
    const matchesCategory = category === "All" || bot.category === category;
    const matchesFilter =
      bot.name.toLowerCase().includes(filter.toLowerCase()) ||
      bot.description.toLowerCase().includes(filter.toLowerCase());
    return matchesCategory && matchesFilter;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Discover Public Chatbots</h1>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        {/* Category dropdown */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            className="p-2 border rounded w-48"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Travel</option>
            <option>Health</option>
            <option>News</option>
            <option>Tech</option>
          </select>
        </div>

        {/* Filter input */}
        <div className="flex-1">
          <label className="block mb-1 font-medium">Search</label>
          <Input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search by bot name or description..."
          />
        </div>
      </div>

      {/* Bot list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBots.map((bot) => (
          <div key={bot.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{bot.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{bot.description}</p>
            <Button onClick={() => console.log(`Viewing bot ${bot.id}`)}>View Bot</Button>
          </div>
        ))}

        {filteredBots.length === 0 && (
          <div className="col-span-full text-gray-500 text-center">No bots found.</div>
        )}
      </div>
    </div>
  );
};

export default Discover;
 
