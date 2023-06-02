import Link from "next/link"
import Image from "next/image"
const Header = () => {
    return (
        <div className="h-[75px] w-screen flex items-center justify-between bg-white fixed top-0">
            <div className="ml-28 flex items-center ">
            <Link href="/"><Image width={100} height={100} src="/assets/logo.png" /></Link>
            <Link href="/"><span className="text-4xl uppercase logo_text tracking-tighter text-[#843fe7]">rvr</span>
            </Link>
            </div>
            <div>
                <ul className="flex space-x-12 mr-36 ">
                    <li className="tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                        <Link href="/">HOME</Link>
                    </li>
                    <li className=" tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li className=" tracking-wide border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500">
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
