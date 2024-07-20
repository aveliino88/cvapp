"use client"
import { Suspense, lazy } from 'react';
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import TechStack from '@/components/TechStack';

const Hero = lazy(() => import("@/components/Hero"));
const Quotes = lazy(() => import("@/components/Quotes"));
const CodePage = lazy(() => import("@/components/CodePage"));

export default function Home() {
  const { toast } = useToast();

  return (
    <div className='container mx-auto px-4 mt-10 space-y-10'>
      <h1 className="text-center scroll-m-20 border-b pb-2 text-3xl md:text-4xl font-semibold tracking-tight">
       a3v.pro
      </h1>

      <Suspense fallback={<div>Loading Hero...</div>}>
        <section aria-label="Hero section">
          <Hero />
        </section>
      </Suspense>
      
       {/*
      <Suspense fallback={<div>Loading TechStack...</div>}>
        <section aria-label="Tech Stack">
          <TechStack />
        </section>
      </Suspense>
       */}
      <Separator orientation="horizontal" />
      
      <Suspense fallback={<div>Loading Code Examples...</div>}>
        <section aria-label="Code examples">
          <CodePage />
        </section>
      </Suspense>
      
      <Separator orientation="horizontal" />
    </div>
  );
}