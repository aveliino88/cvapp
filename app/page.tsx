export default function Home() {
  return (
  <div className="container mt-20 flex flex-col justify-center items-center">
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        This page is built using NextJS
    </h2>
    <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold mt-5">
     npx create-next-app@latest
    </code>
  </div>
  );
}
