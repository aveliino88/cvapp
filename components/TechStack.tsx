import { CheckIcon, GithubIcon } from "@/components/icons"
import Link from "next/link"

export default function TechStack() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 p-6 rounded-lg bg-white/10 backdrop-blur-sm dark:bg-black/30 border-solid border-2 border-emerald-500">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
            Tech Stack
          </h2>
          <p className="max-w-[600px] text-neutral-700 dark:text-neutral-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            This application is built using the latest and greatest technologies to ensure a seamless and efficient user
            experience. 🙂
          </p>
          <ul className="grid gap-4 mt-4">
            {["Next.js", "ShadCN", "Tailwind CSS", "Clerk Auth", "GhostCMS"].map((tech) => (
              <li key={tech} className="flex items-center gap-2 bg-white/20 dark:bg-black/20 p-2 rounded-md">
                <CheckIcon className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                <span className="text-lg font-medium text-neutral-800 dark:text-neutral-200">{tech}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
            <Link
              href="https://github.com/aveliino88/cvapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-emerald-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 disabled:pointer-events-none disabled:opacity-50"
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