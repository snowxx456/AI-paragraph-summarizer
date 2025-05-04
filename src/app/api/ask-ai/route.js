import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const dynamic = "force-dynamic";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function Summarize(text, format = "paragraph") {
  let message = "";
  if (!ai) {
    const data = dummySummarize(text);
    return data;
  }
  if (format === "paragraph") {
    message = `Generate a concise summary of this text:\n${text}`;
  } else if (format === "keyword") {
    message = `Extract the most important keywords from the following text. Return them as a comma-separated list, without any explanations or full sentences:\n\n${text}`;
  } else {
    message = `Summarize this text in one sentence\n${text}`;
  }
  try {
    const data = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17",
      contents: message,
    });

    if (data && data.text) {
      console.log("Summary:", data, "formate", format);
      return data.text;
    } else {
      throw new Error("Failed to get a valid response from Gemini");
    }
  } catch (error) {
    console.error("Error during summarization:", error);
    return "Summary generation failed.";
  }
}

async function Translate(text, language) {
  if (!ai) {
    const data = dummyTranslate();
    return data;
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Translate the following text to ${language} (please provide only one option):\n ${text}`,
    });
    if (response && response.text) {
      //console.log("Translation:", response.text);
      return `[${language} translation] ${response.text}`;
    } else {
      throw new Error("Failed to get a response from Gemini");
    }
  } catch (error) {
    console.error("Error dureing translation:", error);
    return "Translation failed try again.";
  }
}

function dummySummarize(text) {
  return `This is a summarized version of your text (${text.length} characters). 
In a real application, this would be processed by an AI model to create a meaningful summary.`;
}

function dummyTranslate(text, language) {
  return `[${language} translation] ${text}...`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { message, action, language, format } = body;

    if (action === "summarize") {
      const summary = await Summarize(message, format);
      return NextResponse.json({ summary: summary });
    } else if (action === "translate" && language) {
      const translate = await Translate(message, language);
      return NextResponse.json({
        translation: translate,
      });
    } else {
      return NextResponse.json(
        { error: "Invalid action or missing parameters" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
