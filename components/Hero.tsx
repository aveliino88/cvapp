import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-4 md:px-8 lg:px-20">
      <div className="w-full lg:w-1/2">
        <Image
          src="/cat.webp" // Replace with your image path
          alt="Hero Image"
          width={500}
          height={500}
          className="rounded-lg  border-2 border-indigo-600 mt-5 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border-solid border-2 border-indigo-600 rounded-lg hover:scale-105">
            <h3 className="text-xl font-bold mb-2">NextJS 😋</h3>
            <p className="text-sm font-medium leading-none">
            The React Framework for the Web
            </p>
          </div>
          <div className="p-4 border-solid border-2 border-green-500 rounded-lg hover:scale-105">
            <h3 className="text-xl font-bold mb-2">TailwindCSS 👌</h3>
            <p className="text-sm font-medium leading-none">
            Tailwind CSS is an open-source CSS framework
            </p>
          </div>
          <div className="p-4 border-solid border-2 border-green-500 rounded-lg hover:scale-105">
            <h3 className="text-xl font-bold mb-2">Clerk Auth 🔐</h3>
            <p className="text-sm font-medium leading-none">
            The most comprehensive User management platform
            </p>
          </div>
          <div className="p-4 border-solid border-2 border-indigo-600 rounded-lg hover:scale-105">
            <h3 className="text-xl font-bold mb-2">ShadCN 👍</h3>
            <p className="text-sm font-medium leading-none">
            Beautifully designed components for any project
            </p>
          </div>
          <div className="p-4 border-solid border-2 border-indigo-600 rounded-lg hover:scale-105">
            <h3 className="text-xl font-bold mb-2">Directus 😎</h3>
            <p className="text-sm font-medium leading-none">
            The backend to build anything or everything
            </p>
          </div>
          <div className="p-4 border-solid border-2 border-green-500 rounded-lg hover:scale-105">
            <h3 className="text-xl font-bold mb-2">Aceternity UI 🥇</h3>
            <p className="text-sm font-medium leading-none">
            Beautiful Tailwind CSS and Framer Motion Components
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;