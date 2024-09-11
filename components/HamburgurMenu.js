import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { IoMenuOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"

const HamburgurMenu = ({ isMenuOpen, setIsMenuOpen, signinalert }) => {
  const { data: session } = useSession()
  const router = useRouter();
  const handleSignOut = async (event) => {
    event.preventDefault();
    await signOut({ redirect: false })
    router.push("/");
  };

  return (
    <div>
      {session ? User({ session, isMenuOpen, setIsMenuOpen, handleSignOut }) : Guest({ signinalert, isMenuOpen, setIsMenuOpen })}
    </div>
  )
}
export default HamburgurMenu

function User({ session, handleSignOut, isMenuOpen, setIsMenuOpen }) {
  return (
    <div className='h-screen fixed top-0 w-full bg-white z-50 flex flex-col md:hidden'>
      <div className="h-[75px] w-full px-4 flex items-center justify-between bg-white gap-28 md:hidden">
        <div className="flex items-center">
          <Link href="/"><Image width={200} height={100} src="/assets/logo4.png" /></Link>
        </div>
        <div className="border border-pink-500 hover:border-hidden hover:bg-gray-200 w-12 h-10 flex justify-center items-center rounded-lg hover:cursor-pointer"  >
          <IoMenuOutline onClick={() => setIsMenuOpen(!isMenuOpen)} size={32} className="text-gray-700 hover:text-pink-600" />
        </div>
      </div>
      <div className='w-full h-full flex justify-center items-center ' >
        <div className="w-3/4 h-3/4 rounded-xl bg-opacity-50 bg-blue-200 flex flex-col  justify-evenly space-y-4">
          <div className="flex flex-col items-center gap-2 ">
            <div className="flex flex-col items-center gap-1">
              <Image className='rounded-full' width={80} height={80} src={session.user.image} alt="User Image" />
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


function Guest({ signinalert, isMenuOpen, setIsMenuOpen }) {
  return (
    <div className='h-screen fixed top-0 w-full bg-white z-50 flex flex-col md:hidden'>
      <div className="h-[75px] w-full px-4 flex items-center justify-between bg-white gap-28 md:hidden">
        <div className="flex items-center">
          <Link href="/"><Image width={200} height={100} src="/assets/logo4.png" /></Link>
        </div>
        <div className="border border-pink-500 hover:border-hidden hover:bg-gray-200 w-12 h-10 flex justify-center items-center rounded-lg hover:cursor-pointer"  >
          <IoMenuOutline onClick={() => setIsMenuOpen(!isMenuOpen)} size={32} className="text-gray-700 hover:text-pink-600" />
        </div>
      </div>

      <div className='w-full h-full flex justify-center items-center' >
        <div className="w-3/4 h-3/4 rounded-xl bg-opacity-50 bg-blue-200 flex flex-col items-center justify-center space-y-4">
          <Link href="/login"><button className="home_text1 tracking-wide rounded bg-[#fe735b] hover:bg-[#f05539] text-white px-4 py-2 uppercase">Sign in</button></Link>
          <ul className="text-center space-y-4 -mt-16">
            <li className="tracking-wide ">
              <Link className='border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500' href="/about">COMPANY</Link>
            </li>
            <li onClick={signinalert} className="cursor-pointer tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
              DISCUSSIONS
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
