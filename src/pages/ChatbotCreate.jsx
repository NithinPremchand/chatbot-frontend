// src/pages/ChatbotCreate.jsx
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

const ChatbotCreate = () => {
  const [step, setStep] = useState(1);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [youtubeLink, setYoutubeLink] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [documents, setDocuments] = useState([]);

  const [fetchedItems, setFetchedItems] = useState([]);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleFetchData = () => {
    // MOCK fetch
    const mockItems = [
      { id: 1, name: "Video 1" },
      { id: 2, name: "Video 2" },
      { id: 3, name: "Webpage 1" },
    ];
    setFetchedItems(mockItems);
    handleNext();
  };

  const handleRemoveItem = (id) => {
    setFetchedItems(fetchedItems.filter(item => item.id !== id));
  };

  const handleIndexing = () => {
    console.log("Indexing requested:", { title, description, youtubeLink, websiteLink, documents, fetchedItems });
    alert("Indexing requested! 🚀 (Mock)");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Chatbot (Step {step}/4)</h1>

      <Separator className="mb-4" />

      {step === 1 && (
        <Card className="p-4 space-y-4">
          <Input
            placeholder="Chatbot Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Chatbot Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={handleNext}>Next: Add Data Sources</Button>
        </Card>
      )}

      {step === 2 && (
        <Card className="p-4 space-y-4">
          <Input
            placeholder="YouTube Link"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
          />
          <Input
            placeholder="Website Link"
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
          />
          <Input
            type="file"
            multiple
            onChange={(e) => setDocuments([...e.target.files])}
          />
          <div className="space-x-2">
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleFetchData}>Next: Fetch & Review Data</Button>
          </div>
        </Card>
      )}

      {step === 3 && (
        <Card className="p-4 space-y-4">
          <h2 className="text-lg font-semibold">Fetched Data</h2>
          {fetchedItems.map(item => (
            <div key={item.id} className="flex justify-between items-center p-2 border rounded">
              <span>{item.name}</span>
              <Button variant="destructive" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
            </div>
          ))}
          <div className="space-x-2">
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next: Request Indexing</Button>
          </div>
        </Card>
      )}

      {step === 4 && (
        <Card className="p-4 space-y-4 text-center">
          <p>Ready to index your chatbot with selected data!</p>
          <Button onClick={handleIndexing}>Request Indexing</Button>
          <Button variant="outline" onClick={handleBack}>Back</Button>
        </Card>
      )}
    </div>
  );
};

export default ChatbotCreate;
