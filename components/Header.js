import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { signOut, useSession } from "Next-auth/react"

const Header = () => {
    const router = useRouter();
    const { data: session } = useSession()

    const handleSignOut =async(event) =>{
        event.preventDefault();
        await signOut({ redirect: false })
        router.push("/");
    };
   
      

    return (
        <div>
            {session ? User({ session, handleSignOut }) : Guest()}
        </div>
    )
}
export default Header

function User({ session, handleSignOut }) {
    return (
        <div className="h-[75px] w-screen pr-32 flex items-center justify-between bg-white fixed top-0">
            <div className="ml-32 flex items-center ">
                <Link href="/"><Image width={200} height={100} src="/assets/logo4.png" /></Link>
                {/* <Link href="/"><span className="text-4xl uppercase logo_text tracking-tighter text-[#843fe7]">skillsphere</span>
                </Link> */}
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-12 mr-16 ">
                    <li className="tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                        <Link href="/about">COMPANY</Link>
                    </li>
                    <li className=" tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                        <Link href="/discord">DISCUSSIONS</Link>
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



