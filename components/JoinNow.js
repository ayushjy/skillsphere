import React from 'react'
import Link from 'next/link'
const JoinNow = () => {
  return (
    <div>
        <div class="relative flex flex-col items-center justify-center py-10 mx-36 my-32  h-96">
        <h1 class="z-40 text-sm font-bold text-red-400 uppercase">Join Now our amazing community</h1>
        <h2 class="z-20 max-w-2xl mt-6 text-2xl font-bold tracking-tight text-center lg:text-4xl">Sail through the endless ocean of tech resources on YouTube.</h2>
        <img alt="line-art" src="https://cdn.discordapp.com/attachments/987256512118399026/991336432541110292/CodiSource_5.png" class="absolute h-16 opacity-70 lg:h-60 left-2 lg:left-10 top-2 lg:top-10" />
        <img alt="line-art" src="https://cdn.discordapp.com/attachments/987256512118399026/991335953413185576/CodiSource_4.png" class="absolute h-20 lg:h-60 right-2 bottom-2 lg:right-10 opacity-60 lg:bottom-10" />
        <Link href={"/login"}><button class="mt-8 home_button bg-[#fe735b] hover:bg-[#f05539] text-white font-bold py-2 px-4 rounded">Join Now</button></Link>
      </div>
    </div>
  )
}

export default JoinNow