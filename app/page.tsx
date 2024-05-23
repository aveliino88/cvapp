import { Button } from "@/components/ui/button";
import Link from 'next/link'
import PasswordGenerator from '../components/PasswordGenerator';

export default function Home() {
  return (
    <div className='container mt-10'>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex justify-center">Welcome to my NextJS app</h2>
      <div className="flex flex-col justify-center items-center mt-5">
        <p>This is just a basic landing page to showcase some of the stuff you can do using NextJS</p>
        <div><PasswordGenerator /></div>
        <div className="mt-5">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex justify-center">See your IP info</h2>
        <div className="flex justify-center mt-5">
        <Link href="/examples">
        <Button variant="outline">Get IP info</Button>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
}