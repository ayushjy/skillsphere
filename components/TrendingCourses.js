import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from "next-auth/react"
const TrendingCourses = () => {
    const { data: session } = useSession()
    return (
        <div>
            {session ? User() : Guest()}
        </div>
    )
}
export default TrendingCourses

function User(){
    return(
        
        <div className=" mt-28">
        <h2 className="text-center text-5xl home_text">Trending courses ongoing</h2>
        <p className="text-center text-lg home_text3 mt-6 mb-12 max-lg:px-4">These are the selected courses from YouTube to build your focus on learning rather than finding courses.</p>
        <div className="flex justify-center flex-wrap w-full h-2/5  gap-8  px-36 max-lg:px-0">

          <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl h-1/5 w-[350px]">
            <div className="h-1/2">
              <Image src="/assets/whatsapp.jpg" width={600} height={600} className="object-cover rounded-t-2xl" />
            </div>
            <div className="flex flex-col items-center  h-1/2 py-4 px-4 ">
              <Link href="https://www.youtube.com/live/gzdQDxzW2Tw?si=7Sus2hGIK0Y6zwn8" target="blank"><p className="text-lg home_button pb-1 hover:underline">Build A Whatsapp Clone With MERN Stack...</p>
                <p className="text-xs text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p></Link>
            </div>
          </div>
          <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl h-1/5 w-[350px]">
            <div className="h-1/2">
              <Image src="/assets/flutter.jpg" width={600} height={600} className="object-cover rounded-t-2xl" />
            </div>
            <div className="flex flex-col items-center  h-1/2 py-4 px-4 ">
              <Link href="https://youtu.be/VPvVD8t02U8?si=PB5QuWnKRurqfRuv" target="blank"><p className="text-lg home_button pb-1 hover:underline">2022 Flutter Master Class Travel App | Tutorial For...</p>
                <p className="text-xs text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p></Link>
            </div>
          </div>
          <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl h-1/5 w-[350px]">
            <div className="h-1/2">
              <Image src="/assets/Node.jpg" width={600} height={600} className="object-cover rounded-t-2xl" />
            </div>
            <div className="flex flex-col items-center  h-1/2 py-4 px-4 ">
              <Link href="https://youtu.be/_xKCi5OI_Mg?si=rbWMN2-aan3g6Kmh" target="blank"><p className="text-lg home_button pb-1 hover:underline">File Sharing App With Deployment In Node Js, Expre...</p>
                <p className="text-xs text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p></Link>
            </div>
          </div>

        </div>
        <div className="flex justify-center mt-8">
          <Link href={"/explore"}>
            <button className="home_button bg-[#fe735b] hover:bg-[#f05539] text-white font-bold py-2 px-4 rounded">
              VIEW MORE
            </button>
          </Link>
        </div>
      </div>
    
    )
}
function Guest(){
    return(
        
      <div className=" mt-28">
      <h2 className="text-center text-5xl home_text">Trending courses ongoing</h2>
      <p className="text-center text-lg home_text3 mt-6 mb-12 max-lg:px-4">These are the selected courses from YouTube to build your focus on learning rather than finding courses.</p>
      <div className="flex justify-center flex-wrap w-full h-2/5  gap-8  px-36 max-lg:px-0">

        <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl h-1/5 w-[350px]">
          <div className="h-1/2">
            <Image src="/assets/whatsapp.jpg" width={600} height={600} className="object-cover rounded-t-2xl" />
          </div>
          <div className="flex flex-col items-center  h-1/2 py-4 px-4 ">
            <Link href="https://www.youtube.com/live/gzdQDxzW2Tw?si=7Sus2hGIK0Y6zwn8" target="blank"><p className="text-lg home_button pb-1 hover:underline">Build A Whatsapp Clone With MERN Stack...</p>
              <p className="text-xs text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p></Link>
          </div>
        </div>
        <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl h-1/5 w-[350px]">
          <div className="h-1/2">
            <Image src="/assets/flutter.jpg" width={600} height={600} className="object-cover rounded-t-2xl" />
          </div>
          <div className="flex flex-col items-center  h-1/2 py-4 px-4 ">
            <Link href="https://youtu.be/VPvVD8t02U8?si=PB5QuWnKRurqfRuv" target="blank"><p className="text-lg home_button pb-1 hover:underline">2022 Flutter Master Class Travel App | Tutorial For...</p>
              <p className="text-xs text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p></Link>
          </div>
        </div>
        <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl h-1/5 w-[350px]">
          <div className="h-1/2">
            <Image src="/assets/Node.jpg" width={600} height={600} className="object-cover rounded-t-2xl" />
          </div>
          <div className="flex flex-col items-center  h-1/2 py-4 px-4 ">
            <Link href="https://youtu.be/_xKCi5OI_Mg?si=rbWMN2-aan3g6Kmh" target="blank"><p className="text-lg home_button pb-1 hover:underline">File Sharing App With Deployment In Node Js, Expre...</p>
              <p className="text-xs text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p></Link>
          </div>
        </div>

      </div>
      <div className="flex justify-center mt-8">
        <Link href={"/login"}>
          <button className="home_button bg-[#fe735b] hover:bg-[#f05539] text-white font-bold py-2 px-4 rounded">
            VIEW MORE
          </button>
        </Link>
      </div>
    </div>
    
    )
}