import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { useSession } from "next-auth/react"


const LandingPage = () => {
  return (
    <div className="flex w-full h-[600px] pt-28 px-32 max-lg:flex-col max-lg:h-full max-md:px-6 max-xl:px-12 max-sm:px-4 max-lg:px-12">
    <div className="w-4/5  flex flex-col justify-center gap-2  pr-24  max-lg:w-full">
      <div>
        <p className="text-7xl max-sm:text-5xl max-xl:text-6xl  home_text">We increase your learning experiance by
          <span className="text-8xl max-xl:text-7xl  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hundredx">100X</span></p>
      </div>
      <div className="pt-4 space-y-6">
        <p className="text-gray-400 text-xl max-md:text-base max-xl:text-lg home_text1">
          skillsphere provides hand-picked YouTube courses, real-time discussions, sharing projects, and getting feedback on them. We believe in <span className="text-violet-500 font-semibold">Build-in public</span> and <span className="text-violet-500 font-semibold">Proof of Work</span>.
        </p>
        <Link href={"/explore"}>
          <button className="home_button bg-[#fe735b] hover:bg-[#f05539] text-white max-md:text-sm mt-2 max-md:mt-4 max-xl:mt-4 py-2 px-4 rounded">
            EXPLORE COURSES
          </button>
        </Link>
      </div>
    </div>
    <div className="flex justify-center items-center w-1/2 max-lg:w-full ">
      <Image src="/assets/Home.jpg" alt="My Home Image" width={1600} height={1200} className="h-4/5 object-cover rounded-full" />
    </div>
  </div>
  )
}
export default LandingPage


// const LandingPage = () => {
//   const { data: session } = useSession()
//   return (
//     <div>
//       {session ? User() : Guest()}
//     </div>
//   )
// }
// export default LandingPage



// function User() {
//   return (
//     <div className="flex w-full h-[600px] pt-28 px-32 max-lg:flex-col max-lg:h-full max-md:px-6 max-xl:px-12 max-sm:px-4 max-lg:px-12 ">
//       <div className="w-4/5  flex flex-col justify-center gap-2  pr-24  max-lg:w-full">
//         <div>
//           <p className="text-7xl max-sm:text-5xl max-xl:text-6xl  home_text">We increase your learning experiance by
//             <span className="text-8xl max-xl:text-7xl  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hundredx">100X</span></p>
//         </div>
//         <div className="pt-4 space-y-6">
//           <p className="text-gray-400 text-xl max-md:text-base max-xl:text-lg home_text1">
//             skillsphere provides hand-picked YouTube courses, real-time discussions, sharing projects, and getting feedback on them. We believe in <span className="text-violet-500 font-semibold">Build-in public</span> and <span className="text-violet-500 font-semibold">Proof of Work</span>.
//           </p>
//           <Link href={"/explore"}>
//             <button className="home_button bg-[#fe735b] hover:bg-[#f05539] text-white max-md:text-sm mt-2 max-md:mt-4 max-xl:mt-4 py-2 px-4 rounded">
//               EXPLORE COURSES
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="flex justify-center items-center w-1/2 max-lg:w-full ">
//         <Image src="/assets/Home.jpg" alt="My Home Image" width={1600} height={1200} className="h-4/5 object-cover rounded-full" />
//       </div>
//     </div>
//   )
// }

// function Guest() {
//     return (
//     <div className="flex w-full h-[600px] pt-28 px-32 max-lg:flex-col max-lg:h-full max-md:px-6 max-xl:px-12 max-sm:px-4 max-lg:px-12 ">
//       <div className="w-4/5  flex flex-col justify-center gap-2  pr-24  max-lg:w-full">
//         <div>
//           <p className="text-7xl max-sm:text-5xl max-xl:text-6xl  home_text">We increase your learning experiance by
//             <span className="text-8xl max-xl:text-7xl  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hundredx">100X</span></p>
//         </div>
//         <div className="pt-4 space-y-6">
//           <p className="text-gray-400 text-xl max-md:text-base max-xl:text-lg home_text1">
//             skillsphere provides hand-picked YouTube courses, real-time discussions, sharing projects, and getting feedback on them. We believe in <span className="text-violet-500 font-semibold">Build-in public</span> and <span className="text-violet-500 font-semibold">Proof of Work</span>.
//           </p>
//           <Link href={"/explore"}>
//             <button className="home_button bg-[#fe735b] hover:bg-[#f05539] text-white max-md:text-sm mt-2 max-md:mt-4 max-xl:mt-4 py-2 px-4 rounded">
//               EXPLORE COURSES
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="flex justify-center items-center w-1/2 max-lg:w-full ">
//         <Image src="/assets/Home.jpg" alt="My Home Image" width={1600} height={1200} className="h-4/5 object-cover rounded-full" />
//       </div>
//     </div>
//   )
// }