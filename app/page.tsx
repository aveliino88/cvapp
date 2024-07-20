"use client"

import dynamic from 'next/dynamic';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Hero = dynamic(() => import("@/components/Hero"));
const Quotes = dynamic(() => import("@/components/Quotes"));
const CodePage = dynamic(() => import("@/components/CodePage"));

export default function Home() {
  const { toast } = useToast();

  return (
    <div className='container mx-auto px-4 mt-10 space-y-10'>
      <h1 className="text-center scroll-m-20 border-b pb-2 text-3xl md:text-4xl font-semibold tracking-tight">
        Welcome to my personal blog/portfolio app 😉
      </h1>

      <section aria-label="Hero section">
        <Hero />
      </section>
      
      <Separator orientation="horizontal" />
      
      <section aria-label="Quotes section">
        <Quotes />
      </section>
      
      <Separator orientation="horizontal" />
      
      <section aria-label="Code examples">
        <CodePage />
      </section>
      
      <Separator orientation="horizontal" />
    </div>
  );
}