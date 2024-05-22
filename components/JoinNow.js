import React from 'react'
import Link from 'next/link'
const JoinNow = () => {
  return (
    <div>
        <div class="relative flex flex-col items-center justify-center py-10 mx-36 my-32 max-lg:mx-0 max-md:px-4 h-96">
        <h1 class="z-40 text-sm font-bold text-red-400 uppercase">Join Now our amazing community</h1>
        <h2 class="z-20 max-w-2xl mt-6 text-2xl font-bold tracking-tight text-center lg:text-4xl">Sail through the endless ocean of tech resources on YouTube.</h2>
        <img alt="line-art" src="/assets/burningbulb.png" className="absolute max-lg:h-52 opacity-70 h-52 max-lg:left-2 left-10 max-lg:top-2 max-xl:left-0 top-10" />
        <img alt="line-ar" src="/assets/boat.png" className="absolute max-xl:right-0 max-lg:h-52 h-64 right-10 opacity-80 max-lg:bottom-6 bottom-10" />
        <Link href={"/login"}><button class="mt-8 home_button bg-[#fe735b] hover:bg-[#f05539] text-white font-bold py-2 px-4 rounded">Join Now</button></Link>
      </div>
    </div>
  )
}

export default JoinNow