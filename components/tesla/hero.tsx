import Image from "next/image"
import Tesla from "@/public/image/hero.png"
import Electric from '@/public/image/hero2.gif'
import { Electrolize } from 'next/font/google'
const electrolize = Electrolize({weight: ["400"], display: "swap", subsets: ["latin"]});

const Hero = () => {
  return (
    <div className="w-full relative flex">
      <Image src={Electric} layout="fill" alt="Electric" />
      <div className="z-10 ml-auto">
        <div className="absolute bottom-10 md:bottom-16 lg:bottom-32 left-10 md:left-20 lg:left-32 xl:left-40">
          <h1 className="text-gray-200 ml-0 lg:ml-2 text-base lg:text-2xl ">An extraordinary man</h1>
          <h1 className="capitalize text-4xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-red-300 via-slate-200 to-blue-300 font-extrabold" style={electrolize.style}>nikola tesla</h1>
          <button className="mt-4 lg:mt-8 px-8 py-2 text-white border-2 border-white rounded-full">Read More</button>
        </div>
        <Image src={Tesla} alt="Tesla" width={500} />
      </div>
    </div>
  )
}

export default Hero