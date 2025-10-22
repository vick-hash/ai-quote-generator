"use client";
import { useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  async function getQuote() {
    setLoading(true);
    const res = await fetch("https://api.quotable.io/random?tags=technology");
    const data = await res.json();
    setQuote(data.content);
    setLoading(false);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🤖 AI Quote Generator</h1>
      <button
        onClick={getQuote}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
        disabled={loading}
      >
        {loading ? "Generating..." : "Get a Quote"}
      </button>
      {quote && (
        <p className="text-xl text-center max-w-xl italic">"{quote}"</p>
      )}
    </main>
  );
}
