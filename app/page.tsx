import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";
import CodePage from "@/components/CodePage";
import Quotes from "@/components/Quotes";

export default function Home() {

  return (
  <div className='container mt-10'>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex justify-center items-center">
      Tech Stack used in this project
    </h2>
      <Hero />
      <Separator orientation="horizontal" className="mb-10" />
      <Quotes />
      <Separator orientation="horizontal" className="mb-10" />
      <CodePage />
  </div>
    
  );
}