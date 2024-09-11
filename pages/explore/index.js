import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

import { AiFillHtml5 } from "react-icons/ai"
const explore = ({ data }) => {
    console.log(data)
    return (
        <div>
            <Header />

            <div className="w-full pb-10 mt-28 px-32 gap-4 flex max-md:px-6 max-xl:px-12 max-sm:px-4 max-lg:px-12">
                <div className="w-1/4 gap-2 flex flex-col ">
                    <button className="home_text max-sm:font-semibold  max-sm:text-xs bg-red-100 text-gray-800  text-start w-full py-3 px-4 rounded-xl">HTML/CSS Courses</button>
                    {
                        data.map((ev) => (
                            <Link href={`/explore/${ev.id}`} ><button className="home_text3 max-sm:text-xs hover:bg-red-100 text-gray-800  text-start  py-3 px-4 rounded-xl">{ev.sidebar}</button></Link>
                        ))
                    }
                </div>
                <div className="w-5/6 flex flex-col">
                    <div className="relative">
                        {/* <div className="flex justify-between max-sm:justify-evenly items-center px-12 max-md:px-6 max-sm:px-3 bg-red-100 w-full h-full md:py-6 max-sm:h mb-4 rounded-3xl ">
                            <span className="text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-3xl text-red-300 hundredx">HTML/CSS</span>
                            <span><AiFillHtml5 className="text-red-400 max-sm:w-3/5" size={120} /></span>
                        </div> */}
                        {/* <div className="absolute bottom-0 left-0 right-0  h-0.5 bg-gray-100 rounded-lg"></div> */}
                        <div className="flex justify-between items-center px-12 max-lg:px-6 bg-red-100 w-full h-full sm:py-3 py-4 lg:py-6 rounded-3xl ">
                            <span className="text-8xl max-lg:text-6xl max-md:text-6xl max-sm:text-3xl text-red-300 hundredx">HTML/CSS</span>
                            <AiFillHtml5 size={120} height={120} className="text-red-400 max-lg:w-1/4 max-lg:h-full" />
                        </div>
                    </div>
                    <div className="flex justify-center flex-wrap gap-2 w-full h-1/3 mt-4">
                        <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl  w-[350px] max-sm:w-[200px]">
                            <div className="">
                                <Image src="/assets/whatsapp.jpg" width={600} height={600} className="object-cover rounded-t-2xl " />
                            </div>
                            <div className="flex flex-col items-center justify-center h-1/2 py-4 px-4 max-sm:px-2">

                                <Link href={"https://www.youtube.com/live/gzdQDxzW2Tw?si=7Sus2hGIK0Y6zwn8"} target="_blank" ><p className="text-lg max-sm:text-base home_button pb-1 hover:underline cursor-pointer">Build A Whatsapp Clone With MERN Stack...</p></Link>
                                <p className="text-xs  text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p>
                            </div>
                        </div>
                        <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl w-[350px] max-sm:w-[200px]">
                            <div className="">
                                <Image src="/assets/flutter.jpg" width={600} height={600} className="object-cover rounded-t-2xl" />
                            </div>
                            <div className="flex flex-col items-center justify-center h-1/2 py-4 px-4">

                                <Link href={"https://youtu.be/VPvVD8t02U8?si=PB5QuWnKRurqfRuv"} target="blank"><p className="text-lg home_button pb-1 hover:underline cursor-pointer">2022 Flutter Master Class Travel App | Tutorial For...</p></Link>
                                <p className="text-xs text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p>

                            </div>
                        </div>
                        <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl w-[350px] max-sm:w-[200px]">
                            <div className="">
                                <Image src="/assets/Node.jpg" width={600} height={600} className="object-cover rounded-t-2xl" />
                            </div>
                            <div className="flex flex-col items-center justify-center h-1/2 max-sm:pt-6 sm:py-4 px-4">

                                <Link href={"https://youtu.be/_xKCi5OI_Mg?si=rbWMN2-aan3g6Kmh"} target="blank"><p className="text-lg home_button pb-1 hover:underline cursor-pointer">File Sharing App With Deployment In Node Js, Expre...</p></Link>
                                <p className="text-xs text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default explore

export async function getStaticProps() {
    const { data_categories } = await import('/data/data.json');
    return {
        props: {
            data: data_categories,
        },
    };
} 