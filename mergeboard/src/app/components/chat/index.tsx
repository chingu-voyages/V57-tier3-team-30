"use client";

import { useState, useEffect, useRef } from "react";
import aiChat from "@/app/actions/aiChat";
import { Minus, Send, Stars } from "lucide-react";
import { useClickAway } from "@uidotdev/usehooks";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

export default function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const scrollToLastMessage = () => {
    lastMessageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    inputRef.current?.focus();
    scrollToLastMessage();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

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
      console.log(error);

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
      <Button
        size={"icon"}
        onClick={() => setIsOpen(true)}
        className="size-12 fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full transition-transform hover:scale-110 cursor-pointer"
        aria-label="Open chat"
      >
        <Stars className="size-6" />
      </Button>
    );
  }

  return (
    <div
      className="fixed bottom-4 right-4 w-96 bg-white shadow-xl rounded-lg flex flex-col h-[500px]"
      ref={ref}
    >
      <div className="flex justify-between items-center p-3 bg-gray-50 border-b rounded-t-lg">
        <h3 className="font-bold text-neutral-900">AI Assistant</h3>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-800 cursor-pointer"
          aria-label="Minimize chat"
        >
          <Minus size={20} />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            ref={i === messages.length - 1 ? lastMessageRef : null}
            className={`p-2 rounded-lg max-w-[85%] text-neutral-950 prose prose-sm ${
              m.role === "user"
                ? "bg-blue-100 self-end ml-auto"
                : "bg-gray-100 self-start mr-auto"
            }`}
          >
            <ReactMarkdown>{m.text}</ReactMarkdown>
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
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border rounded-l-md px-3 py-2 text-stone-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ask me anything..."
          disabled={isLoading}
        />
        <Button
          onClick={sendMessage}
          className=" text-white rounded-l-none h-full cursor-pointer"
          disabled={isLoading}
        >
          <Send />
        </Button>
      </div>
    </div>
  );
}
