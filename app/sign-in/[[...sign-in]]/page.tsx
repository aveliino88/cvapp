import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="container flex justify-center mt-10"><SignIn path="/sign-in" /> </div>;
}