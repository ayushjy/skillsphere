import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { IoMenuOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"

const HamburgurMenu = ({ session, isMenuOpen, setIsMenuOpen }) => {
  const router = useRouter();
  const handleSignOut = async (event) => {
    event.preventDefault();
    await signOut({ redirect: false })
    router.push("/");
  };
  return (
    <div className='h-screen fixed top-0 w-full bg-white z-50 flex flex-col md:hidden'>
      <div className="h-[75px] w-screen px- flex items-center justify-between bg-white  md:hidden">
        <div className="flex items-center px-6">
          <Link href="/"><Image width={200} height={100} src="/assets/logo4.png" /></Link>
        </div>
        <div className="mr-10 border border-pink-500 hover:border-hidden hover:bg-gray-200 w-16 h-12 flex justify-center items-center rounded-lg hover:cursor-pointer"  >
          <IoMenuOutline onClick={() => setIsMenuOpen(false)} size={40} className="text-gray-700 hover:text-pink-600" />
        </div>
      </div>
    <div className='w-full h-full flex justify-center items-center' >
      <div className="w-3/4 h-3/4 rounded-xl bg-opacity-50 bg-blue-200 flex flex-col  justify-evenly space-y-4">
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex flex-col items-center gap-1">
            <Image className='rounded-full' width={80} height={80} src={session.user.image} alt="User Image"/>
            <h4 className="text-sm home_text3">{session.user.name}</h4>
            <h4 className="text-sm home_text3 tracking-wide">{session.user.email}</h4>
          </div>
          <div>
            <button onClick={handleSignOut} className="home_text1 bg-[#fe735b] hover:bg-[#f05539] text-white  text-sm py-2 px-2 rounded">Sign out</button>
          </div>
        </div>
        <div>
        <ul className="text-center space-y-4 -mt-16">
          <li className="tracking-wide ">
            <Link className='border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500' href="/about">COMPANY</Link>
          </li>
          <li className=" tracking-wide">
            <Link className='border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500' href="/discussion">DISCUSSIONS</Link>
          </li>
        </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HamburgurMenu