"use client";

import { cn } from "@/libs/utils";

export function LoadingDots({ className }) {
  return (
    <div className={cn("flex space-x-1 items-center", className)}>
      <div
        className="w-2 h-2 rounded-full bg-current animate-pulse"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="w-2 h-2 rounded-full bg-current animate-pulse"
        style={{ animationDelay: "150ms" }}
      ></div>
      <div
        className="w-2 h-2 rounded-full bg-current animate-pulse"
        style={{ animationDelay: "300ms" }}
      ></div>
    </div>
  );
}
