import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

const techStack = [
  { name: "Next.js", icon: "/tech-icons/nextjs.svg", description: "React framework for production", link: "https://nextjs.org/" },
  { name: "Tailwind CSS", icon: "/tech-icons/tailwindcss.svg", description: "Utility-first CSS framework", link: "https://tailwindcss.com/" },
  { name: "TypeScript", icon: "/tech-icons/typescript.svg", description: "Typed JavaScript at scale", link: "https://www.typescriptlang.org/" },
  { name: "Docker", icon: "/tech-icons/docker.svg", description: "Container platform", link: "https://www.docker.com/" },
  { name: "shadcn/ui", icon: "/tech-icons/shadcn.svg", description: "Accessible component library", link: "https://ui.shadcn.com/" },
  { name: "Aceternity UI", icon: "/tech-icons/aceternity.svg", description: "Modern UI components", link: "https://ui.aceternity.com/" },
  { name: "Ghost CMS", icon: "/tech-icons/ghost.svg", description: "Headless CMS platform", link: "https://ghost.org/" },
  { name: "Clerk", icon: "/tech-icons/clerk.svg", description: "Authentication & user management", link: "https://clerk.com/" },
  { name: "GitHub", icon: "/tech-icons/github.svg", description: "Version control platform", link: "https://github.com/" },
  { name: "Coolify", icon: "/tech-icons/coolify.svg", description: "Self-hosted PaaS", link: "https://coolify.io/" },
]

export default function TechStack() {
  return (
    <div className="w-full bg-gradient-radial from-background via-background/50 to-background">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tech Stack used for this project
            </motion.h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Only the latest and greatest technologies are used 😛
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {techStack.map((tech, index) => (
              <TooltipProvider key={tech.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div 
                      className="flex flex-col items-center gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-20 w-20 rounded-full bg-background hover:bg-primary/20 transition-colors duration-300 p-2"
                        asChild
                      >
                        <a href={tech.link} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} logo`}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                        </a>
                      </Button>
                      <div className="text-center text-sm font-medium">{tech.name}</div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}