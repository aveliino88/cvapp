"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
  "REST APIs",
  "Git",
];

export default function AnimatedAboutContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="transform transition-transform duration-500 ease-out"
        style={{ transform: isVisible ? "translateY(0)" : "translateY(20px)" }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
              <p className="text-lg mb-4">
                Hi, I&apos;m trying to be JS developer 😄!
              </p>
              <blockquote className="border-l-4 pl-4 italic my-4">
                &quot;The best way to predict the future is to create it.&quot;
                - Peter Drucker
              </blockquote>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Develop web applications
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Optimize for performance and SEO
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Implement robust, scalable backends
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Collaborate with cross-functional teams
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 p-6">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="transition-all duration-300 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0.8)",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-lg">
            I&apos;m always excited to take on new challenges and create amazing
            web experiences. Let&apos;s build something great together!
          </p>
        </div>
      </div>
    </div>
  );
}
