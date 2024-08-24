import Link from "next/link";
import ModeToggle from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row space-x-3 mt-5 justify-center flex-wrap">
        <li className="font-bold mb-2">
          <Link href="/" scroll={false}>
            <Button variant="outline">Home</Button>
          </Link>
        </li>
        <li className="font-bold mb-2">
          <Link href="/about" scroll={false}>
            <Button variant="outline">About</Button>
          </Link>
        </li>
        <li className="font-bold mb-2">
          <Link href="/blog" scroll={false}>
            <Button variant="outline">Blog</Button>
          </Link>
        </li>
        <li className="font-bold mb-2">
          <Link href="/generator" scroll={false}>
            <Button variant="outline">Tools</Button>
          </Link>
        </li>
        <li>
          <ModeToggle />
        </li>
        <li className="flex space-x-3 justify-end mb-2">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex space-x-2">
              <SignInButton>
                <Button aria-label="Sign in">Sign in</Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="outline" aria-label="Sign up">
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
