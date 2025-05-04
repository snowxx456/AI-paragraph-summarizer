"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export function ChatInput({ onSendMessage, disabled = false }) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col w-full">
      <div className="flex items-end gap-2 bg-card rounded-lg shadow-sm border p-3">
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="min-h-[60px] max-h-[200px] py-3 flex-1 resize-none"
          disabled={disabled}
        />
        <Button
          type="submit"
          size="icon"
          disabled={!message.trim() || disabled}
          className="w-15 h-15 shrink-0 rounded-full bg-primary hover:bg-primary/90 transition-colors"
        >
          <SendIcon className="h-7 w-7" />
        </Button>
      </div>
    </form>
  );
}
