"use client";
import React, { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { cn } from "@/libs/utils";
import { getLanguageLabel } from "@/libs/language";
import { formatText, translateText } from "@/libs/api";
import { LoadingDots } from "../ui/LoadingDots";

export function Message({ message }) {
  const [isTranslating, setIsTranslating] = useState(false);
  const [isSelected, setIsSelected] = useState(message.format);
  const [isRefromatting, setIsReformatting] = useState(false);
  const isUser = message.role === "user";
  const handleSelect = async (format) => {
    if (isSelected === format) return;
    setIsSelected(format);
    setIsReformatting(true);
    try {
      const reformat = await formatText(message.usercontent, format);
      message.summary = reformat;
      message.format = format;
    } catch (error) {
      console.error("Formatting error", error);
    } finally {
      setIsReformatting(false);
    }
  };
  const handleLanguageSelect = async (language) => {
    if (!language || !message.summary) return;

    if (message.translation && message.translation.language === language)
      return;

    setIsTranslating(true);
    try {
      const translation = await translateText(message.summary, language);

      message.translation = {
        text: translation,
        language,
      };
    } catch (error) {
      console.error("Translation error:", error);
    } finally {
      setIsTranslating(false);
    }
  };
  return (
    <div
      className={cn(
        "flex flex-col w-full max-w-3xl",
        isUser ? "items-end" : "items-start"
      )}
    >
      <div
        className={cn(
          "px-4 py-3 rounded-2xl mb-1 animate-in fade-in slide-in-from-bottom-2 duration-300",
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-none"
            : "bg-muted rounded-tl-none"
        )}
      >
        <p
          className={cn(
            "text-sm sm:text-base text-right whitespace-pre-wrap break-words",
            isUser ? "p-2 border-r-2" : "p-2 border-l-2"
          )}
        >
          {message.content}
        </p>
      </div>

      <div className="text-md p-2 border border-white rounded-2xl text-muted-foreground mb-2">
        {isUser ? "You" : "AI Assistant"}
      </div>
      {!isUser && message.summary && (
        <div className="w-full space-y-2 pl-2 border-l-2 border-muted mt-1 animate-in fade-in slide-in-from-left-1 duration-300 delay-75">
          <div className="flex gap-2">
            <button
              onClick={() => handleSelect("paragraph")}
              className={cn(
                "p-2 px-4 border rounded-xl",
                isSelected === "paragraph" ? "bg-gray-800 text-white" : ""
              )}
              disabled={isRefromatting}
            >
              Paragraph
            </button>
            <button
              onClick={() => handleSelect("keyword")}
              className={cn(
                "p-2 px-4 border rounded-xl",
                isSelected === "keyword" ? "bg-gray-800 text-white" : ""
              )}
              disabled={isRefromatting}
            >
              Keyword
            </button>
            <button
              onClick={() => handleSelect("one-line")}
              className={cn(
                "p-2 px-4 border rounded-xl",
                isSelected === "one-line" ? "bg-gray-800 text-white" : ""
              )}
              disabled={isRefromatting}
            >
              One line
            </button>
          </div>
          <div className="text-sm bg-background p-3 rounded-lg border">
            {isRefromatting ? (
              <div className="flex items-center justify-center py-2">
                <LoadingDots />
                <span className="ml-2">Reformatting...</span>
              </div>
            ) : (
              <div className="whitespace-pre-wrap">{message.summary}</div>
            )}
          </div>

          <LanguageSelector
            selectedLanguage={handleLanguageSelect}
            disabled={isTranslating}
          />

          {isTranslating && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground p-3">
              <LoadingDots />
              <span>Translating...</span>
            </div>
          )}

          {message.translation && !isTranslating && (
            <div className="space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h4 className="text-sm font-medium">
                {getLanguageLabel(message.translation.language)} Translation
              </h4>
              <p className="text-sm bg-background p-3 rounded-lg border">
                {message.translation.text}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
