import Link from "next/link"
import Image from "next/image"
import { CheckIcon, GithubIcon } from "@/components/icons"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="group relative mx-auto aspect-square overflow-hidden rounded-xl sm:w-full shadow-md shadow-emerald-500">
          <Image
            src="https://djangoappv1.b-cdn.net/cat02.webp"
            alt="Decorative image representing the tech stack"
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Tech Stack
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            This application is built using the latest and greatest technologies to ensure a seamless and efficient user
            experience. 🙂
          </p>
          <ul className="grid gap-4">
            {["Next.js", "ShadCN", "Tailwind CSS", "Clerk Auth", "GhostCMS"].map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium">{tech}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="https://github.com/aveliino88/cvapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              aria-label="View source code on GitHub"
            >
              <GithubIcon className="h-4 w-4 mr-2" />
              View Source Code
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}