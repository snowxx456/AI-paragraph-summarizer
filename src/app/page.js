import ChatContainer from "@/components/ChatContainer";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-8 text-center">
        <h1 className="font-bold text-2xl sm:text-3xl">
          AI Summarizer and Transalator
        </h1>
        <p className="opacity-50 max-w-md mx-auto">
          Chat with our AI assistant to summarize text and get translations in
          multiple languages
        </p>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ChatContainer />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h1 className="opacity-55">@2025 created by Achyut Vyas</h1>
      </footer>
    </div>
  );
}
