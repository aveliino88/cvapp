import Link from 'next/link';
import PasswordGenerator from '@/components/PasswordGenerator';
import {Button} from '@/components/ui/button';
export default function Generator() {
    return (
    <div className="container mt-10">
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex justify-center items-center">
      Some useful tools for you
    </h2>
        <div className="flex flex-row justify-center items-center mt-5 gap-20">
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