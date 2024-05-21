import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function Flips() {
  const words = ["NextJS", "Clerk", "Tailwind", "ShadCN" , "Aceternity UI", "Directus", "Docker"];

  return (
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} />
      </div>

  );
}