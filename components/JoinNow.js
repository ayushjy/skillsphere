import React from 'react'
import Link from 'next/link'
const JoinNow = () => {
  return (
  
    <div className="relative h-full bg-cover bg-center">
    <div className="absolute inset-0 max-lg:bg-[url('/assets/boat.png')] max-lg:bg-cover max-lg:bg-center max-lg:opacity-40"></div>
    
    <div className="relative z-10 flex flex-col items-center justify-center py-10 mx-36 my-32 max-xl:mx-12 max-lg:mx-0 max-md:px-4 h-96">
      <h1 className="text-sm font-bold text-red-400 uppercase">Join Now our amazing community</h1>
      <h2 className="max-w-2xl mt-6 text-2xl font-bold tracking-tight text-center lg:text-4xl">
        Sail through the endless ocean of tech resources on YouTube.
      </h2>
      <img
        alt="line-art"
        src="/assets/burningbulb.png"
        className="absolute opacity-70 h-52 left-10 max-xl:left- max-xl:h-48 top-10 max-lg:hidden"
      />
      <img
        alt="line-art"
        src="/assets/boat.png"
        className="absolute max-xl:right-0 max-lg:h-52 h-64 right-10 opacity-80 max-lg:bottom-6 bottom-10 max-lg:hidden"
      />
      <Link href="/login">
        <button className="mt-8 home_button bg-[#fe735b] hover:bg-[#f05539] text-white font-bold py-2 px-4 rounded">
          Join Now
        </button>
      </Link>
    </div>
  </div>
  
    
  )
}

export default JoinNow