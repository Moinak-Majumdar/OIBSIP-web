import Image from "next/image";
import background from '@/assets/background.svg'
import me from '@/assets/me.jpg';
import Link from "next/link";
import {FaGithub, FaLinkedin, FaUserAstronaut} from 'react-icons/fa'


const linksClassName = 'mb-4 text-center w-64 px-16 py-4 bg-slate-900 rounded-md text-white text-xl hover:bg-slate-800 duration-500 easy-in'



export default function Home() {
  return (
    <main className="relative min-h-screen grid ">
      <section className="box flex-col lg:flex-row justify-center lg:justify-between max-h-fit lg:max-h-screen pt-6">
        <div className="flex justify-center items-center flex-col mb-12 lg:mb-0">
          <Image src={me} alt="me" className="w-64 md:w-72 rounded-full border-4 border-slate-600 grayscale hover:grayscale-0 hover:border-slate-500 ease-in-out duration-500 mr-0 lg:mr-auto" />
          <article className="mt-4 text-gray-800">
            <h3 className="text-2xl">Hello, I&apos;m <span className="font-bold">Moinak Majumdar</span></h3>
            <h4 className="mt-2 text-lg">Web Development intern at <Link href='https://oasisinfobyte.com/' target="_BLANK" className="bg-slate-200 px-2 rounded-md py-[2px] font-semibold">Oasis Infobyte</Link> </h4>
            <p className="mt-2 max-w-xl">Hello everyone, I have selected <b>Level 2</b> tasks, that are : Tribute page , Calculator, Todo app and Authentication. I have already completed a <b>level 3</b> task, <em>A pizza ordering website</em> previously. You may check <Link href='https://lifoodie-dev.web.app/' target="_BLANK" className="text-blue-500 hover:text-indigo-500 underline font-bold">here</Link></p>
          </article>
          <Link href='https://moinak05.vercel.app/' target="_BLANK" className="mr-auto mt-8 flex justify-center gap-3">
            <FaUserAstronaut className="text-2xl "/>
            <span className="bg-slate-200 px-2 text-sm rounded-md font-semibold text-slate-700">portfolio</span>
          </Link>
          <Link href='https://github.com/Moinak-Majumdar' target="_BLANK" className="mr-auto mt-4 flex justify-center gap-3">
            <FaGithub className="text-2xl "/>
            <span className="bg-slate-200 px-2 text-sm rounded-md font-semibold text-slate-700">github/Moinak-Majumdar</span>
          </Link>
          <Link href='https://www.linkedin.com/in/moinak-majumdar/' target="_BLANK" className="mr-auto mt-4 flex justify-center gap-3">
            <FaLinkedin className="text-2xl "/>
            <span className="bg-slate-200 px-2 text-sm rounded-md font-semibold text-slate-700">in/moinak-majumdar</span>
          </Link>
        </div>
        <div className='h-fit lg:h-screen flex justify-center items-center flex-col my-auto pb-8 md:pb-0'>
          <Link href='/tesla' className={linksClassName}>Tribute Page</Link>
          <Link href='/calculator' className={linksClassName}>Calculator</Link>
          <Link href='/todo' className={linksClassName}>Todo App</Link>
          <Link href='/protected' className={linksClassName}>Authentication</Link>
          <Link href='https://lifoodie-dev.web.app/' target="_BLANK" className="mt-4 bg-slate-300 hover:bg-gray-300 w-64 px-6 py-2 rounded-md text-slate-800">
            <span className="font-semibold">Level 3 task:</span> Pizza ordering Website
          </Link>

        </div>

      </section>
      <div className="w-full h-full -z-10 fixed ">
        <Image src={background} alt="background" fill className="opacity-50" />
      </div>
    </main>
  )
}
