import React from 'react'
import Image from 'next/image'
const Experts = () => {
  return (
    <div>
        <div className=" mt-32">
        <h2 className="text-center text-5xl home_text">Our Community Experts</h2>
        <h2 className="text-center text-lg home_text3 mt-3 mb-8">Join our community of passionate and dedicated coaches</h2>
        <div className="flex justify-center flex-wrap w-full h-2/5  gap-4 px-36">
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">Technical Thapa</h1>
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">Love Babbar</h1>
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">codeWithHarry</h1>
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">Anuj Bhaiya</h1>
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experts