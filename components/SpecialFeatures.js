import React from 'react'
import Image from 'next/image'
const SpecialFeatures = () => {
    return (
        <div>
            <div className=" mt-44">
                <h2 className="text-center text-5xl home_text">The Only “Platform” You Need To Learn</h2>
                <p className="text-center text-lg home_text3 mt-3 mb-6">Here are the possible scenarios to get the most out of this platform</p>
                <div className="flex w-full h-[600px]  px-36">        
                    {/* left flex */}
                    <div className="flex flex-col justify-center flex-wrap w-1/2 gap-4">
                        <div className="flex flex-col justify-center items-center h-1/3 w-2/4 px-2  gap-2 bg-red-100 rounded-2xl">
                            <p className="text-center text-lg   home_button">Scholarship facility</p>
                            <p className="text-center text-gray-600 text-base">We offer scholarships to help eligible students pursue their dreams and achieve their goals</p>
                        </div>
                        <div className="flex flex-col justify-center  h-2/4 w-2/4 px-3 gap-2 border-2 bg-red-100 rounded-2xl">
                            <p className="text-center text-lg   gap-2 home_button">Real-time discussion panel with markdown support</p>
                            <p className="text-center text-gray-600 text-base">You can discuss your doubts in real-time on MeTrack. So, no stopping after you encounter an error while following a tutorial. You can even post code snippets in the discussions as it is markdown supported.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center h-2/4 w-2/4 px-3 gap-2 border-2 bg-red-100 rounded-2xl">
                            <p className="text-center text-lg   gap-2 home_button">Build in public and proof of work</p>
                            <p className="text-center text-gray-600 text-base">Show your potential clients and recruiters that you've learnt and built something useful. Those who view your project can add a feedback. This will help you improve your project over time. Your project can be an inspiration for others!</p>
                        </div>
                    </div>
                    {/* image right flex */}
                    <div className="flex justify-center items-center w-1/2">
                        <Image src="/assets/student.png" alt="My Home Image" width={1600} height={1200} className="h-full object-cover " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialFeatures