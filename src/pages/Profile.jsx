 import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  const handleSave = () => {
    console.log("Updated profile:", { name, email });
    alert("Profile updated (mock)!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>

      {/* Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Save */}
      <Button onClick={handleSave} className="mt-4">
        Save Changes
      </Button>
    </div>
  );
};

export default Profile;

