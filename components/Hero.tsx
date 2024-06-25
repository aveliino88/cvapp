import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
      <Image
      src="/wolf6.png"
      alt="Hero Image"
      className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]"
      // Add these optional props for optimization
      width={600} // Adjust width as needed
      height={600} // Adjust height as needed
      priority // Loads the image before other content (if necessary)
    />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Tech Stack used to build this application
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            This application is built using the latest and greatest technologies to ensure a seamless and efficient user
            experience.
          </p>
          <ul className="grid gap-4">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">Next.js</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">TailwindCSS</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">GhostCMS</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">Clerk</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">ShadCN/AceternityUI</span>
            </li>
          </ul>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="https://github.com/aveliino88/cvapp"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              target="_blank"
            >
              View Source Code
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}