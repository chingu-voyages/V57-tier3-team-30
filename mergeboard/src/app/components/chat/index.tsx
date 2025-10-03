"use client";

import { useState } from "react";
import aiChat from "@/app/actions/aiChat";
import { MessageSquare, Minus, Send } from "lucide-react";

export default function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await aiChat(input);
      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
      } else if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: "Sorry, something went wrong." },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Sorry, I couldn't connect to the assistant." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white shadow-xl rounded-lg flex flex-col h-[500px]">
      <div className="flex justify-between items-center p-3 bg-gray-50 border-b rounded-t-lg">
        <h3 className="font-bold text-neutral-900">AI Assistant</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-800"
          aria-label="Minimize chat"
        >
          <Minus size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[85%] text-neutral-950 ${
              m.role === "user"
                ? "bg-blue-100 self-end ml-auto"
                : "bg-gray-100 self-start mr-auto"
            }`}
          >
            {m.text}
          </div>
        ))}
        {isLoading && (
          <div className="self-start mr-auto bg-gray-100 p-2 rounded-lg">
            <div className="flex items-center space-x-1">
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}
      </div>
      <div className="flex p-3 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border rounded-l-md px-3 py-2 text-stone-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ask me anything..."
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 disabled:bg-blue-300"
          disabled={isLoading}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
