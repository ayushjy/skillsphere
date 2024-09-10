import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { IoMenuOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react"
import HamburgurMenu from "./HamburgurMenu";
import { useState } from "react";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter();
    const { data: session } = useSession()


    const signinalert = () => {
        alert("Sign-in first to access the page")
    }

    const handleSignOut = async (event) => {
        event.preventDefault();
        await signOut({ redirect: false })
        router.push("/");
    };
    const openMenu = (e) => {
        e.preventDefault()
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div>
            {session ? User({ session, handleSignOut, openMenu, isMenuOpen, setIsMenuOpen }) : Guest({ openMenu, isMenuOpen, setIsMenuOpen, signinalert })}
        </div>
    )
}
export default Header



function User({ session, handleSignOut, openMenu, isMenuOpen, setIsMenuOpen }) {
    return (
        <>
            <div className="h-[75px] w-screen px-32 flex items-center justify-between bg-white fixed top-0 max-md:hidden max-md:px-6 max-xl:px-12 max-sm:px-4 max-lg:px-12">
                <div className="  flex items-center ">
                    <Link href="/"><Image width={200} height={100} src="/assets/logo4.png" /></Link>
                </div>

                <div className="flex items-center">
                    <ul className="flex space-x-12 mr-16 ">
                        <li className="tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                            <Link href="/about">COMPANY</Link>
                        </li>
                        <li className=" tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                            <Link href="/discussion">DISCUSSIONS</Link>
                        </li>
                    </ul>
                    <div className=" tracking-wide ">
                        <div className="flex flex-col mt-8 space-y-1">
                            <div className="flex flex-col ">
                                <h4 className="text-sm home_text3">{session.user.name}</h4>
                                <h4 className="text-sm home_text3">{session.user.email}</h4>
                            </div>
                            <div>
                                <button onClick={handleSignOut} className="home_text1 bg-[#fe735b] hover:bg-[#f05539] text-white  text-sm py-2 px-2 rounded">Sign out</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="h-[75px] w-full px-4 flex items-center justify-between bg-white fixed top-0 max-sm:gap-28 md:hidden">
                <div className="flex items-center ">
                    <Link href="/"><Image width={200} height={100} src="/assets/logo4.png" /></Link>
                </div>
                <div onClick={openMenu} className=" border border-pink-500 hover:border-hidden hover:bg-gray-200 w-12 h-10 flex justify-center items-center rounded-lg hover:cursor-pointer"  >
                    <IoMenuOutline size={32} className="text-gray-700 hover:text-pink-600" />
                </div>
            </div>
            {isMenuOpen ? <HamburgurMenu session={session} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> : null}
        </>
    )
}
function Guest({ signinalert, openMenu, isMenuOpen, setIsMenuOpen }) {
    return (

        <div>
            <div className="h-[75px] w-screen px-32 flex items-center justify-between bg-white fixed top-0  max-md:px-6 max-xl:px-12 max-sm:px-4 max-lg:px-12 max-md:hidden">
                <div className="  flex items-center ">
                    <Link href="/"><Image width={200} height={100} src="/assets/logo4.png" /></Link>
                </div>

                <div className="flex items-center max-sm:-space-x-10">
                    <ul className="flex space-x-12 mr-16 ">
                        <li className="tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500 max-sm:text-sm max-sm:ml">
                            <Link href="/about">COMPANY</Link>
                        </li>
                        <li onClick={signinalert} className="cursor-pointer tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                            DISCUSSIONS
                        </li>
                    </ul>
                    <Link href="/login"><button className="home_text1 tracking-wide  rounded bg-[#fe735b] hover:bg-[#f05539]  text-white px-4  py-2 uppercase max-sm:text-xs max-sm:mr-4 max-sm:px-2 max-sm:py-3 max-sm:w-full">Sign in</button></Link>
                </div>
            </div>
            
            <div className="h-[75px] w-full px-4 flex items-center justify-between bg-white fixed top-0 max-sm:gap-28 md:hidden">
                <div className="flex items-center ">
                    <Link href="/"><Image width={200} height={100} src="/assets/logo4.png" /></Link>
                </div>
                <div onClick={openMenu} className=" border border-pink-500 hover:border-hidden hover:bg-gray-200 w-12 h-10 flex justify-center items-center rounded-lg hover:cursor-pointer"  >
                    <IoMenuOutline size={32} className="text-gray-700 hover:text-pink-600" />
                </div>
            </div>
            {isMenuOpen ? <HamburgurMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> : null}
        </div>



    )
}



