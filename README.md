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

## Sample
###Input
```
Large Language Models (LLMs) are advanced artificial intelligence systems trained on massive datasets of text to understand and generate human-like language. These models, such as GPT (Generative Pre-trained Transformer), use deep learning techniques—specifically transformer architectures—to learn patterns, context, grammar, and even nuance across billions of words. The training process involves unsupervised learning, where the model predicts the next word in a sentence, gradually developing a contextual understanding of language. As a result, LLMs can perform a wide array of language-based tasks: from answering questions, summarizing documents, and translating languages, to writing essays, generating code, and even engaging in creative writing. Their capabilities extend beyond simple syntax, as they can reason, infer, and adapt responses based on the input they receive. However, while LLMs are powerful, they are not infallible—they can hallucinate facts, reflect biases present in training data, or misinterpret ambiguous prompts. The ethical use of LLMs, including concerns around misinformation, privacy, and fairness, is a key area of ongoing research and discussion. As these models continue to evolve and become more integrated into everyday tools, they are shaping the future of human-computer interaction, pushing the boundaries of what machines can understand and produce in natural language.
```
### Output (Paragraph)
```
Large Language Models (LLMs) are advanced AI systems trained on massive text data using deep learning, particularly transformer architecture, to understand and generate human-like language. They learn patterns and context through unsupervised training, enabling them to perform diverse tasks like summarizing, translating, writing, and even reasoning. While powerful, LLMs have limitations such as hallucinating facts and reflecting biases, raising important ethical considerations regarding their use and future integration into human-computer interaction.
```
### Output (Keywords)
```
Large Language Models, LLMs, Artificial Intelligence, deep learning, transformer architectures, massive datasets, unsupervised learning, language understanding, language generation, capabilities, limitations, ethical use, biases, hallucination, human-computer interaction
```
### Output (One Line)
```
Large Language Models (LLMs) are advanced AI systems trained on vast text data to understand and generate human-like language, enabling diverse tasks and shaping human-computer interaction despite inherent limitations.
```
### Output (Hindi Translation of Summary - One Line)
```
[Hindi translation] बड़े भाषा मॉडल (एलएलएम) उन्नत एआई सिस्टम हैं जिन्हें विशाल टेक्स्ट डेटा पर प्रशिक्षित किया जाता है ताकि मानव जैसी भाषा को समझा और उत्पन्न किया जा सके, जो विभिन्न कार्यों को सक्षम बनाता है और निहित सीमाओं के बावजूद मानव-कंप्यूटर इंटरैक्शन को आकार देता है।
```
## Demo

[![Watch the video](https://img.youtube.com/vi/7U0bubKvUhM/0.jpg)](http://youtube.com/watch?v=7U0bubKvUhM)

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

- Next.js 15 
- React + Hooks
- Tailwind CSS
- Google Gemini API (@google/generative-ai)
- Vercel for hosting
