import { Electrolize, Lato } from 'next/font/google'
import Link from 'next/link';
import { BiSolidUserPin } from 'react-icons/bi'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const electrolize = Electrolize({ weight: ["400"], display: "swap", subsets: ["latin"] });
const lato = Lato({ weight: ["400"], subsets: ['latin'], display: "swap" });

const Footer = () => {
  return (
    <section className='bg-gray-100  border-t-2 border-gray-300 flex flex-col items-center w-full'>

      <div className='my-8 px-6 md:px-10 lg:px-16 xl:px-36 2xl:px-44 w-full flex items-start justify-between flex-col md:flex-row'>
        <div className=''>
          <h4 className='text-2xl' style={electrolize.style}>About this page</h4>
          <p className='text-sm text-gray-900 max-w-sm mt-2'>This is tribute page based on Nikola Tesla, Designed and developed for fulfillment of <span className='bg-slate-200 px-2 rounded-md font-semibold'>Oasis Infobyte</span> <em>Wed Development internship task 2</em>.</p>
        </div>
        <div className='mt-4 md:mt-0 ml-0 md:ml-auto'>
          <h4 className='text-2xl' style={electrolize.style}>Contact Me</h4>
          <div className='flex flex-row gap-4 mt-2'>
            <Link href='https://moinak05.vercel.app' target='_BLANK' className='text-2xl font-bold text-gray-900 hover:text-black' title='Portfolio'><BiSolidUserPin /></Link>
            <Link href='https://github.com/Moinak-Majumdar' target='_BLANK' className='text-xl font-bold text-gray-900 hover:text-black' title='GitHub'><BsGithub /></Link>
            <Link href='https://www.linkedin.com/in/moinak-majumdar' target='_BLANK' className='text-xl font-bold text-gray-900 hover:text-black' title='Linkedin'><BsLinkedin /></Link>
          </div>
        </div>
      </div>
      <div className='p-4 bg-black w-full flex justify-center items-center text-gray-100'>
        <footer>&copy; Copyright {new Date().getFullYear()} - Moinak Majumdar</footer>
      </div>
    </section>
  )
}

export default Footer