"use client";
import React from "react";
import { useState } from "react";
import { ChatHistory } from "./chats/ChatHistory";
import { ChatInput } from "./chats/ChatInput";
import { getSummary } from "@/libs/api";
import { v4 as uuidv4 } from "uuid";

export default function ChatContainer() {
  const [message, setMessage] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSendMessage = async (content) => {
    const userMessage = {
      id: uuidv4(),
      content,
      role: "user",
    };
    setMessage((prev) => [...prev, userMessage]);
    setIsProcessing(true);
    try {
      const summary = await getSummary(content);
      const generatedSummary = {
        id: uuidv4(),
        content: "I've analyzed your message and created a summary",
        role: "assistant",
        summary,
        format: "paragraph",
        usercontent: content,
      };
      setMessage((prev) => [...prev, generatedSummary]);
      console.log(generatedSummary);
    } catch (error) {
      console.error("Error in processing message:", error);
      const errormessage = {
        id: uuidv4(),
        content:
          "I'm sorry, I couldn't process your message. Please try again.",
        role: "assistant",
      };
      setMessage((prev) => [...prev, errormessage]);
    } finally {
      setIsProcessing(false);
    }
  };
  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      <div className="flex-1 flex flex-col overflow-hidden border rounded-lg shadow-sm bg-card">
        <ChatHistory messages={message} isLoading={isProcessing} />
        <div className="border-t p-4">
          <ChatInput
            onSendMessage={handleSendMessage}
            disabled={isProcessing}
          />
        </div>
      </div>
    </div>
  );
}
