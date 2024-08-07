export default function AboutPage() {
  return (
    <div className="container mt-10">
      <div>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex justify-center mt-5">About</h1>
        <div className='leading-7 [&:not(:first-child)]:mt-6' style={{ textAlign: 'center' }}>
          <p className="scroll-m-20 text-xl font-semibold tracking-tight">Hi, I&apos;m a Next.js developer. I love building web applications with Next.js and Tailwind CSS.</p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">Next.js is a React framework that allows you to build static and server-side rendered websites. It&apos;s a great tool for building fast, modern web applications.</p>
          <blockquote className="mt-6 border-l-2 pl-6 italic">Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without writing custom CSS. It&apos;s a great tool for building responsive, mobile-first websites.</blockquote>
          <p className="capitalize">Together, Next.js and Tailwind CSS make a great combination for building modern web applications. I hope you enjoy my blog!</p>
        </div>
      </div>
    </div>
  );
}
export const metadata = {
  title: 'About | a3v.pro',
}