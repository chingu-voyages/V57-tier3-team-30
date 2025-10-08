"use client";
import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";

export default function EmailReminderPrompt({ githubUsername }: { githubUsername?: string }) {
  const [email, setEmail] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if this user has already provided an email (stored in localStorage)
    const saved = localStorage.getItem(`email-${githubUsername}`);
    if (!saved) setShowPrompt(true);
  }, [githubUsername]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem(`email-${githubUsername}`, email);
    setShowPrompt(false);
    alert("Email saved! You'll get PR reminders.");
  }

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white border shadow-lg p-4 rounded-xl max-w-sm">
      <p className="font-medium mb-2">Merge smarter — get reminder emails</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="border rounded p-1 flex-1"
        />
        <Button type="submit" className="bg-secondary-green-700 text-white  px-3 rounded font-semibold cursor-pointer">
          Save
        </Button>
      </form>
    </div>
  );
}
