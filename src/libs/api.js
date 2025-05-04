export async function getSummary(text) {
  try {
    const response = await fetch("/api/ask-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text, action: "summarize" }),
    });

    if (!response.ok) {
      throw new Error("Failed to get summary");
    }

    const data = await response.json();
    return data.summary;
  } catch (error) {
    console.error("Error getting summary:", error);
    return "I couldn't generate a summary at this time. Please try again later.";
  }
}

export async function formatText(text, format) {
  try {
    const response = await fetch("/api/ask-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
        action: "summarize",
        format,
      }),
    });
    if (!response.ok) {
      throw new Error(`Failed to get ${format} summary`);
    }
    const data = await response.json();
    return data.summary;
  } catch (error) {
    console.error("Error getting summary:", error);
    return `I couldn't generate the summary in this ${format} format`;
  }
}

export async function translateText(text, language) {
  try {
    const response = await fetch("/api/ask-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
        action: "translate",
        language,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to translate text");
    }

    const data = await response.json();
    return data.translation;
  } catch (error) {
    console.error("Error translating text:", error);
    return "Translation unavailable at this time. Please try again later.";
  }
}
