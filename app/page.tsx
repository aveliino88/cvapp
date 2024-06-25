import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";
import CodePage from "@/components/CodePage";
import Quotes from "@/components/Quotes";

export default function Home() {

  return (
  <div className='container mt-10'>
      <Hero />
      <Separator orientation="horizontal" className="mb-10" />
      <Quotes />
      <Separator orientation="horizontal" className="mb-10" />
      <CodePage />
      <Separator orientation="horizontal" className="mb-10" />
  </div>
    
  );
}