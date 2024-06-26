import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="group relative mx-auto aspect-square overflow-hidden rounded-xl sm:w-full shadow-md shadow-emerald-500">
          <img
            src="https://djangoappv1.b-cdn.net/cat02.webp"
            alt="Hero Image"
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
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
            <li className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">Next.js</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">ShadCN</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">Tailwind CSS</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">Clerk Auth</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">GhostCMS</span>
            </li>
          </ul>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="https://github.com/aveliino88/cvapp"
              target="_blank"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
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

function CheckIcon(props:any) {
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


function GithubIcon(props:any) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}