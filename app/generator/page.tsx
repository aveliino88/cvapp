import Link from 'next/link';
import PasswordGenerator from '@/components/PasswordGenerator';
import { Button } from '@/components/ui/button';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Generator() {
  return (
    <div className="container mt-10">
      <h1 className="scroll-m-20 border-b pb-2 text-3xl md:text-4xl font-semibold tracking-tight first:mt-0 flex justify-center items-center">
        Some useful tools for you
      </h1>
      <div className="flex flex-wrap justify-center items-start mt-5 gap-20">
        <section>
          <ErrorBoundary fallback={<div>Error loading Password Generator</div>}>
            <PasswordGenerator />
          </ErrorBoundary>
        </section>
        <section className="mt-5">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0 flex justify-center">
            See your IP info
          </h2>
          <div className="flex justify-center mt-5 gap-1">
            <Link href="/examples" aria-label="Get IP information">
              <Button variant="outline">Get IP info</Button>
            </Link>
            <Link href="/protected" aria-label="Access protected page">
              <Button variant="outline">Protected Page</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}