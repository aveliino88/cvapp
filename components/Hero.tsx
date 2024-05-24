import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section className="hero flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-4 md:px-8 lg:px-20">
      <div className="w-full lg:w-1/2 pr-6">
        <Image
          src="/cat6.webp" // Replace with your image path
          alt="Hero Image"
          width={700}
          height={600}
          className="rounded-lg  border-2 border-indigo-500 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border-solid border-2 border-indigo-600 rounded-lg hover:scale-105 shadow-lg shadow-indigo-500/50">
            <h3 className="text-xl font-bold mb-2">NextJS 😋</h3>
            <p className="text-sm font-medium leading-none">
            The React Framework for the Web
            </p>
          </div>
          <div className="p-4 border-solid border-2 border-green-500 rounded-lg hover:scale-105 shadow-lg shadow-green-500/50">
            <h3 className="text-xl font-bold mb-2">TailwindCSS 👌</h3>
            <p className="text-sm font-medium leading-none">
            Tailwind CSS is an open-source CSS framework
            </p>
          </div>
          <div className="p-4 border-solid border-2 border-green-500 rounded-lg hover:scale-105 shadow-lg shadow-green-500/50">
            <h3 className="text-xl font-bold mb-2">Clerk Auth 🔐</h3>
            <p className="text-sm font-medium leading-none">
            The most comprehensive User management platform
            </p>
          </div>
          <div className="p-4 border-solid border-2 border-indigo-600 rounded-lg hover:scale-105 shadow-lg shadow-indigo-500/50">
            <h3 className="text-xl font-bold mb-2">ShadCN 👍</h3>
            <p className="text-sm font-medium leading-none">
            Beautifully designed components for any project
            </p>
          </div>
          <div className="p-4 border-solid border-2 border-indigo-600 rounded-lg hover:scale-105 shadow-lg shadow-indigo-500/50">
            <h3 className="text-xl font-bold mb-2">Directus 😎</h3>
            <p className="text-sm font-medium leading-none">
            The backend to build anything or everything
            </p>
          </div>
          <div className="p-4 border-solid border-2 border-green-500 rounded-lg hover:scale-105 shadow-lg shadow-green-500/50">
            <h3 className="text-xl font-bold mb-2">Aceternity UI 🥇</h3>
            <p className="text-sm font-medium leading-none">
            Beautiful Tailwind CSS and Framer Motion Components
            </p>
          </div>
        </div>
        <div className="flex justify-center">
        <Link 
         href={'https://github.com/aveliino88/cvapp'} 
         target="_blank" 
         rel="noopener noreferrer"
         className="inline-flex items-center px-4 py-2 border-2 border-indigo-500 text-sm font-medium rounded-md shadow-sm shadow-indigo-600 bg-slate-950 text-white"
         >
         <FontAwesomeIcon icon={faGithub} className="mr-2" /> View Source Code
        </Link> 
       </div> 
      </div>
    </section>
  );
};

export default Hero;