// @ts-nocheck
"use client";

import { useState, useCallback, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';

export default function Quotes() {
  const [quote, setQuote] = useState<{ quote: string; author: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomQuote = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/quotes.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch quotes');
      const quotes = await res.json();
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setError('Failed to fetch a quote. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Use useMemo for expensive computations or complex JSX structures
  const quoteContent = useMemo(() => {
    if (isLoading) return null;
    if (error) return <p className="text-red-500 mb-4">{error}</p>;
    if (!quote) return <p className="text-gray-500">No quote to display. Click the button to get one!</p>;
    
    return (
      <div className="p-6 rounded-lg shadow-md max-w-lg text-center">
        <p className="text-lg font-semibold mb-4">{`"${quote.quote}"`}</p>
        <p className="text-gray-600"><em>- {quote.author}</em></p>
      </div>
    );
  }, [quote, isLoading, error]);

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <Button 
        variant="secondary" 
        onClick={fetchRandomQuote} 
        className="mb-5"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </>
        ) : (
          'Get Random Quote'
        )}
      </Button>
      
      {quoteContent}
    </div>
  );
}