import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import Head from 'next/head'
import { signOut, useSession } from "Next-auth/react"
import { signIn } from "Next-auth/react"


const Home = () => {

  const { data: session } = useSession()

  function handleSignOut() {
    signOut()
  }

 


  return (

    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  )
}
export default Home


// Authorise User

function User({ session, handleSignOut }) {
    return (
    <div>
      <Header />
      <div className="flex w-full h-[600px] pt-36 px-32">
        <div className="w-4/5 flex flex-col justify-center gap-2  pr-24 ">
          <div>
            {/* <div className="flex flex-col">
            <div className="flex flex-col ">
              <h4 className="home_text3">{session.user.name}</h4>
              <h4 className="home_text3">{session.user.email}</h4>
            </div>
            <div>
              <button onClick={handleSignOut} className="home_button bg-[#fe735b] hover:bg-[#f05539] text-white font-bold py-2 px-4 rounded">Sign out</button>
            </div>
            </div> */}

            <p className="text-7xl   home_text">We increase your learning experiance by
              <span className="text-8xl  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hundredx">100X</span></p>
          </div>
          <div className="pt-4 space-y-6">
            <p className="text-gray-400 text-xl home_text1">
              skillsphere provides hand-picked YouTube courses, real-time discussions, sharing projects, and getting feedback on them. We believe in <span className="text-violet-500 font-semibold">Build-in public</span> and <span className="text-violet-500 font-semibold">Proof of Work</span>.
            </p>
            <Link href={"/explore"}>
              <button className="home_button bg-[#fe735b] hover:bg-[#f05539] text-white font-bold mt-2 py-2 px-4 rounded">
                EXPLORE COURSES
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <Image src="/assets/Home.jpg" alt="My Home Image" width={1600} height={1200} className="h-4/5 object-cover rounded-full" />
        </div>
      </div>
      <div className=" mt-32">
        <h2 className="text-center text-5xl home_text">Our Community Experts</h2>
        <h2 className="text-center text-lg home_text3 mt-3 mb-8">Join our community of passionate and dedicated coaches</h2>
        <div className="flex justify-center flex-wrap w-full h-2/5  gap-4 px-36">
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">Technical Thapa</h1>
            {/* <p className="home_text2 text-gray-800">Mathematics</p> */}
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">Love Babbar</h1>
            {/* <p className="home_text2 text-gray-800">Mathematics</p> */}
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">codeWithHarry</h1>
            {/* <p className="home_text2 text-gray-800">Mathematics</p> */}
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">Anuj Bhaiya</h1>
            {/* <p className="home_text2 text-gray-800">Mathematics</p> */}
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>

        </div>
      </div>

      {/* Trending courses */}

      <div className=" mt-28">
        <h2 className="text-center text-5xl home_text">Trending courses ongoing</h2>
        <p className="text-center text-lg home_text3 mt-6 mb-12">These are the selected courses from YouTube to build your focus on learning rather than finding courses.</p>
        <div className="flex justify-center flex-wrap w-full h-2/5  gap-8  px-36">

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

      {/* Awesome feature */}

      <div className=" mt-28">
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
      {/* join now */}
      <div class="relative flex flex-col items-center justify-center py-10 mx-36 my-32  h-96">
        <h1 class="z-40 text-sm font-bold text-red-400 uppercase">Join Now our amazing community</h1>
        <h2 class="z-20 max-w-2xl mt-6 text-2xl font-bold tracking-tight text-center lg:text-4xl">Sail through the endless ocean of tech resources on YouTube.</h2>
        <img alt="line-art" src="https://cdn.discordapp.com/attachments/987256512118399026/991336432541110292/CodiSource_5.png" class="absolute h-16 opacity-70 lg:h-60 left-2 lg:left-10 top-2 lg:top-10" />
        <img alt="line-art" src="https://cdn.discordapp.com/attachments/987256512118399026/991335953413185576/CodiSource_4.png" class="absolute h-20 lg:h-60 right-2 bottom-2 lg:right-10 opacity-60 lg:bottom-10" />
        <Link href={"/login"}><button class="mt-8 home_button bg-[#fe735b] hover:bg-[#f05539] text-white font-bold py-2 px-4 rounded">Join Now</button></Link>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>

    </div>
  )
}

function Guest() {

  // async function handleGoogleSignIn (event){
  //   event.preventDefault(); 
  //   await signIn('google',{callbackUrl:"http://localhost:3000/explore"})


  return (
    <div>
      <Header/>


      <div className="flex w-full h-[600px] pt-36 px-32">

        <div className="w-4/5 flex flex-col justify-center gap-2  pr-24 ">
          <div>

            <p className="text-7xl   home_text">We increase your learning experiance by
              <span className="text-8xl  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hundredx">100X</span></p>
          </div>
          <div className="pt-4 space-y-6">
            <p className="text-gray-400 text-xl home_text1">
              skillsphere provides hand-picked YouTube courses, real-time discussions, sharing projects, and getting feedback on them. We believe in <span className="text-violet-500 font-semibold">Build-in public</span> and <span className="text-violet-500 font-semibold">Proof of Work</span>.
            </p>
            <Link href={"/login"}>
              <button  className="home_button bg-[#fe735b] hover:bg-[#f05539] text-white font-bold mt-4 py-2 px-4 rounded">
                EXPLORE COURSES
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <Image src="/assets/Home.jpg" alt="My Home Image" width={1600} height={1200} className="h-4/5 object-cover rounded-full" />
        </div>
      </div>
      <div className=" mt-32">
        <h2 className="text-center text-5xl home_text">Our Community Experts</h2>
        <h2 className="text-center text-lg home_text3 mt-3 mb-8">Join our community of passionate and dedicated coaches</h2>
        <div className="flex justify-center flex-wrap w-full h-2/5  gap-4 px-36">
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">Technical Thapa</h1>
            {/* <p className="home_text2 text-gray-800">Mathematics</p> */}
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">Love Babbar</h1>
            {/* <p className="home_text2 text-gray-800">Mathematics</p> */}
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">codeWithHarry</h1>
            {/* <p className="home_text2 text-gray-800">Mathematics</p> */}
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>
          <div className="flex flex-col px-9 items-center  bg-red-100 py-7 gap-1"    >
            <Image src="/assets/virat.png" alt="My Home Image" width={200} height={1200} className="rounded-full pb-2" />
            <h1 className="text-2xl home_button">Anuj Bhaiya</h1>
            {/* <p className="home_text2 text-gray-800">Mathematics</p> */}
            <p className="home_text2 text-gray-800">Famous Youtube Teacher</p>
          </div>

        </div>
      </div>

      {/* Trending courses */}

      <div className=" mt-28">
        <h2 className="text-center text-5xl home_text">Trending courses ongoing</h2>
        <p className="text-center text-lg home_text3 mt-6 mb-12">These are the selected courses from YouTube to build your focus on learning rather than finding courses.</p>
        <div className="flex justify-center flex-wrap w-full h-2/5  gap-8  px-36">

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

      {/* Awesome feature */}

      <div className=" mt-28">
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
      {/* join now */}
      <div class="relative flex flex-col items-center justify-center py-10 mx-36 my-32  h-96">
        <h1 class="z-40 text-sm font-bold text-red-400 uppercase">Join Now our amazing community</h1>
        <h2 class="z-20 max-w-2xl mt-6 text-2xl font-bold tracking-tight text-center lg:text-4xl">Sail through the endless ocean of tech resources on YouTube.</h2>
        <img alt="line-art" src="https://cdn.discordapp.com/attachments/987256512118399026/991336432541110292/CodiSource_5.png" class="absolute h-16 opacity-70 lg:h-60 left-2 lg:left-10 top-2 lg:top-10" />
        <img alt="line-art" src="https://cdn.discordapp.com/attachments/987256512118399026/991335953413185576/CodiSource_4.png" class="absolute h-20 lg:h-60 right-2 bottom-2 lg:right-10 opacity-60 lg:bottom-10" />
        <Link href={"/login"}><button class="mt-8 home_button bg-[#fe735b] hover:bg-[#f05539] text-white font-bold py-2 px-4 rounded">Join Now</button></Link>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>

    </div>
  )
}




