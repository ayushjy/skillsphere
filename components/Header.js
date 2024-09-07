import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { IoMenuOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react"
import { useAppSelector } from "@/lib/hooks"
import { selectUser } from "@/lib/features/user/userSlice"
import HamburgurMenu from "./HamburgurMenu";
import { useState } from "react";
const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const router = useRouter();
    const { data: session } = useSession()
    // const userInfo = useAppSelector(selectUser);
    // console.log(userInfo)
    const handleSignOut = async (event) => {
        event.preventDefault();
        await signOut({ redirect: false })
        router.push("/");
    };
    const openMenu = (e)=>{
        e.preventDefault()
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div>
            {session ? User({ session, handleSignOut,openMenu,isMenuOpen,setIsMenuOpen }) : Guest()}
        </div>
    )
}
export default Header



function User({ session, handleSignOut,openMenu,isMenuOpen,setIsMenuOpen }) {
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
                        {/* <li className=" tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                        <Link href="/contact">CONTACT</Link>
                    </li> */}
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
            <div className="h-[75px] w-screen px- flex items-center justify-between bg-white fixed top-0 md:hidden">
                <div className="flex items-center px-6">
                    <Link href="/"><Image width={200} height={100} src="/assets/logo4.png" /></Link>
                </div>
                <div onClick={openMenu} className="mr-10 border border-pink-500 hover:border-hidden hover:bg-gray-200 w-16 h-12 flex justify-center items-center rounded-lg hover:cursor-pointer"  >
                    <IoMenuOutline size={40} className="text-gray-700 hover:text-pink-600"/>
                </div>
            </div>
            {isMenuOpen?<HamburgurMenu session={session} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />:null}
        </>
    )
}
function Guest() {
    return (
        <div className="h-[75px] w-screen pr-32 flex items-center justify-between bg-white fixed top-0">
            <div className="ml-32 flex items-center ">
                <Link href="/"><Image width={200} height={100} src="/assets/logo4.png" /></Link>
                {/* <Link href="/"><span className="text-4xl uppercase logo_text tracking-tighter text-[#843fe7]">skillsphere</span>
                </Link> */}
            </div>
            <div className="flex items-center">
                <div>
                    <ul className="flex space-x-12 mr-16 ">
                        {/* <li className="tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                        <Link href="/">HOME</Link>
                    </li> */}
                        <li className=" tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                            <Link href="/about">COMPANY</Link>
                        </li>
                        {/* <li className=" tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                        <Link href="/contact">CONTACT</Link>
                    </li> */}
                    </ul>
                </div>
                <div>
                    <Link href="/login"><button className="home_text1 tracking-wide  rounded bg-[#fe735b] hover:bg-[#f05539]  text-white px-4 py-2">SIGN IN</button></Link>
                </div>
            </div>
        </div>

    )
}



