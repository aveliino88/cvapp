// @ts-nocheck
"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Quotes() {
  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = async () => {
    try {
      const res = await fetch('/quotes.json');
      const quotes = await res.json();
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <Button variant="secondary" onClick={fetchRandomQuote} className="mb-5">
        Get Inspirational Quote
      </Button>
      {quote && (
        <div className="p-6 rounded-lg shadow-md max-w-lg text-center">
          <p className="text-lg font-semibold mb-4">"{quote.quote}"</p>
          <p className="dark:text-white text-black"><em>- {quote.author}</em></p>
        </div>
      )}
    </div>
  );
}

