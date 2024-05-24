"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function Text() {
  const words = [
    {
    text: "Build",

    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "NextJS",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
