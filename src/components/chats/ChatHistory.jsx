"use client";

import { useRef, useEffect } from "react";
import { Message } from "./Message";
import { LoadingDots } from "../ui/LoadingDots";

export function ChatHistory({ messages, isLoading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto py-4 px-4">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-center p-8">
          <div className="rounded-full bg-muted p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Welcome to AI Chat</h3>
          <p className="text-muted-foreground max-w-sm mt-2">
            Send a message to start chatting with the AI assistant. You can ask
            questions or share information for summarization.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex items-start">
              <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-none">
                <LoadingDots className="text-foreground" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
}
