"use client";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import Hero from "@/components/Hero";
import Loading from "./loading";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      setIsLoaded(true);
    }, 600); // Slightly longer than the loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loading />
      <div className="container mx-auto px-4 py-10 space-y-10">
        <h1 className="text-center scroll-m-20 border-b pb-2 text-3xl md:text-4xl font-semibold tracking-tight">
          a3v.pro
        </h1>
        <Hero />
        <Separator orientation="horizontal" />
      </div>
    </>
  );
}