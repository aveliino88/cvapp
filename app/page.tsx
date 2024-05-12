import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Home() {
  return (
  <div className="container mt-10">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center mt-10">This is a simple Next JS app</h1>
    <div className='mt-10 flex flex-col justify-center'>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex justify-center">
      Built using the following technologies:
    </h2>
    <div className="mt-20 flex justify-center">
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="horizontal"
      className="w-full max-w-xs"
    >
      <CarouselContent className="h-[250px]">
      <CarouselItem>
        <Card>
        <CardHeader>
        <CardTitle><Button variant="ghost">NextJS Framework</Button></CardTitle>
        </CardHeader>
        <CardContent>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
        npx create-next-app@latest
        </div>
        </CardContent>
        <CardFooter>
        <Button variant="link">
        <Link href="https://nextjs.org/docs/getting-started" target="_blank">nextjs.org</Link>
        </Button>
        </CardFooter>
        </Card>
      </CarouselItem>
      <CarouselItem>
      <Card>
        <CardHeader>
        <CardTitle><Button variant="ghost">Tailwind CSS</Button></CardTitle>
        </CardHeader>
        <CardContent>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
        npm install -D tailwindcss
        </div>
        </CardContent>
        <CardFooter>
        <Button variant="link">
        <Link href="https://tailwindcss.com/docs/guides/nextjs" target="_blank">tailwindcss.com</Link>
        </Button>
        </CardFooter>
        </Card>
      </CarouselItem>
      <CarouselItem>
      <Card>
        <CardHeader>
        <CardTitle><Button variant="ghost">ShadCN</Button></CardTitle>
        </CardHeader>
        <CardContent>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
        npx shadcn-ui@latest init
        </div>
        </CardContent>
        <CardFooter>
        <Button variant="link">
        <Link href="https://ui.shadcn.com/docs/installation/next" target="_blank">ui.shadcn.com</Link>
        </Button>
        </CardFooter>
        </Card>
      </CarouselItem>
      <CarouselItem>
      <Card>
        <CardHeader>
        <CardTitle><Button variant="ghost">Clerk</Button></CardTitle>
        </CardHeader>
        <CardContent>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
         npm install @clerk/nextjs
        </div>
        </CardContent>
        <CardFooter>
        <Button variant="link">
        <Link href="https://clerk.com/docs/quickstarts/nextjs" target="_blank">clerk.com</Link>
        </Button>
        </CardFooter>
        </Card>
      </CarouselItem>
      <CarouselItem>
      <Card>
        <CardHeader>
        <CardTitle><Button variant="ghost">Directus</Button></CardTitle>
        </CardHeader>
        <CardContent>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
         npm install @directus/sdk
        </div>
        </CardContent>
        <CardFooter>
        <Button variant="link">
        <Link href="https://docs.directus.io/guides/headless-cms/build-static-website/next.html" target="_blank">directus.io</Link>
        </Button>
        </CardFooter>
        </Card>
      </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>
  </div>
  );
}
