import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";
import background from '@/assets/background.svg'


export default async function Protected() {

  const session = await getServerSession(options);

  if (!session) {
    redirect('/api/auth/signin/callbackUrl=/protected');
  }

  return (
    <main className="relative min-h-screen grid ">
      <section className="flex min-h-screen justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center p-6 bg-white/10 backdrop-blur rounded-xl shadow-2xl shadow-gray-600">
          <h1 className="mr-auto text-3xl font-semibold text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-pink-600">Welcome to Oasis Infobyte</h1>
          <Image src={session.user!.image as string} alt="user-img" width={100} height={100} className="mt-8 rounded-full" />
          <h3 className="text-xl mt-2 ">{`Hello, ${session.user?.name}`}</h3>
          <article className="mt-1 text-sm">This page is protected through middleware and server session.</article>
          <Link href='/api/auth/signout' className="mt-8 px-4 py-2 bg-slate-700 rounded-md text-gray-200">Sign out</Link>
        </div>
      </section>
      <div className="w-full h-full -z-10 fixed ">
        <Image src={background} alt="background" fill className="opacity-50" />
      </div>
    </main>
  );
}