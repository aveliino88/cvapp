"use client";
import { useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import CodePage from "@/components/CodePage";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Quotes from "@/components/Quotes";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto px-4 mt-10 space-y-10">
      <h1 className="text-center scroll-m-20 border-b pb-2 text-3xl md:text-4xl font-semibold tracking-tight">
        a3v.pro
      </h1>
        <Hero />
        <Separator orientation="horizontal" />
        <TechStack />
        <Separator orientation="horizontal" />
        <CodePage />
        <Separator orientation="horizontal" />
    </div>
  );
}
