"use client"

import Gitbutton from "./Gitbutton"
import Image from "next/image"
import { useState } from 'react'

export default function Hero() {
  const [emoji, setEmoji] = useState('👋')

  return (
    <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:50px_50px]" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12">
        <div className="group relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <Image
            src="https://djangoappv1.b-cdn.net/cat02.webp"
            alt="Decorative image representing the tech stack"
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
            <span 
              className="block cursor-pointer transition-all duration-300"
              onMouseEnter={() => setEmoji('🤗')}
              onMouseLeave={() => setEmoji('👋')}
            >
              Hello {emoji}
            </span>
          </h1>
          <p className="mt-2 max-w-md mx-auto text-lg sm:text-xl mb-6">
            welcome to my portfolio website.
          </p>
          <Gitbutton />
        </div>
      </div>
    </section>
  )
}