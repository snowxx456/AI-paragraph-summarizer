# AI-Powered Text Summarizer & Translator

This project is a web-based AI assistant that allows users to summarize any given text in **three formats** — Paragraph, Keywords, or One Line — and optionally translate the summary into **multiple languages**. It’s built using React (with Next.js and Vercel deployment) and powered by **Gemini API** for text summarization and translation.

## Features

- Summarize text instantly using Gemini AI
- Three summary formats:
  - Paragraph (default)
  - Keywords
  - One Line
- Translate summaries into different languages
- Dynamic format switching after initial summary
- Deployed and optimized for Vercel

## How It Works

- When the user inputs a paragraph, the **`getSummary` API** triggers the `Summarize` function, which uses the **Gemini API** to summarize the input text.

- The default summary format is **Paragraph**. After receiving the initial summary, users can toggle between:
  - **Keywords**
  - **One Line**
  - **Paragraph**

- Changing the format triggers the **`formatText`** function, which calls the `Summarize` function again — this time with the updated format preference.

- Users can also select a **language** to translate the summary. This calls the **`translateText` API** (also powered by Gemini), which triggers the `Translate` function.

- If no **Gemini API key** is provided, the app will fall back to **`mockSummarize`** and **`mockTranslate`** functions to simulate the summarization and translation process for testing purposes.

- To add support for more languages, modify the `language.js` file located in `/src/libs/`.

  **Example:**
  ```js
  { value: 'hi', language: 'Hindi' }
  ```

## Demo

![Demo](./public/demo.gif)

### You can try the deployed app here:  
🔗 **[AI Paragraph Summarizer – Live Site](https://ai-paragraph-summarizer-zedens-projects.vercel.app/)**  


## File Structure

<pre> AI-paragraph-summarizer
├── public
├── src
│   ├── app
│   │   ├── api
│   │   │   └── ask-ai
│   │   │       └── route.js
│   │   ├── global.css
│   │   ├── layout.js
│   │   └── page.js
│   │
│   ├── components
│   │   ├── chats
│   │   │   ├── ChatHistory.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   ├── LanguageSelector.jsx
│   │   │   └── Message.jsx
│   │   │
│   │   ├── ui
│   │   │   ├── button.jsx
│   │   │   ├── LoadingDots.jsx
│   │   │   └── textarea.jsx
│   │   │
│   │   └── ChatContainer.jsx
│   │
│   └── libs
│       ├── api.js
│       ├── language.js
│       └── utils.js
</pre>

## Getting Started Locally

Follow these steps to run the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/snowxx456/AI-paragraph-summarizer.git
cd AI-paragraph-summarizer.git
```

Or download the ZIP and extract it.

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Edit the .env.local file in the root folder and add your Gemini API Key:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

You can get your Gemini API key from [`ai.google.dev`](https://ai.google.dev/gemini-api/docs/api-key)

### 4. Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Tech Stack
-Next.js 15 
-React + Hooks
-Tailwind CSS
-Google Gemini API (@google/generative-ai)
-Vercel for hosting
