"use client"
// pages/index.tsx
import { useState, FormEvent } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setImageUrl('');
    setError(null);

    try {
      const result = await axios.post('/api/generate-image', { prompt });
      setImageUrl(result.data.data[0].url);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Error generating image');
    }

    setLoading(false);
  };

  return (
    <div className='container mt-10 flex flex-col justify-center items-center'>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      AI Image Generator
    </h2>
      <form onSubmit={handleSubmit}>
        <Textarea 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Enter your prompt here"
        />
        <br />
        <Button variant="outline" type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Submit'}
        </Button>
      </form>
      {error && (
        <div style={{ marginTop: '20px', color: 'red' }}>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
      {imageUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Generated Image:</h3>
          <img src={imageUrl} alt="Generated Image" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}