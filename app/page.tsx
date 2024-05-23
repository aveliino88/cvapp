import { Button } from "@/components/ui/button";
import Link from 'next/link'
import PasswordGenerator from '../components/PasswordGenerator';
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className='container mt-10'>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex justify-center items-center">
      Tech Stack used in this project
    </h2>
      <Hero />
    </div>
  );
}