 import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Forgot Password request for:", email);
    alert("Password reset link sent! 🚀 (Mock)");
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <Card className="p-4 space-y-4">
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send Reset Link</Button>
      </Card>
    </div>
  );
};

export default ForgotPassword;

