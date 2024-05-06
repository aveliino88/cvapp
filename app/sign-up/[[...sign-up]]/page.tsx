import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <div className="container flex justify-center mt-10"> <SignUp path="/sign-up" /> </div>;
}