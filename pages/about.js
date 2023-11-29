import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import Slider from "@/components/Slider"
const about = () => {

  const email = 'ayushjyoti0321@gmail.com';
  const subject = 'Interested in a conversation';

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div>
      <Header />

      <div className="w-full  py-14 mt-32  bg-red-200 ">
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl home_text pb-4 w-3/4 text-gray-800">Who we are</div>
          <div className="flex justify-center w-3/4 gap-28  ">
            <div className="flex flex-col w-4/6 ">
              <div className="leading-relaxed text-base home_text2 pb-9 text-gray-800">skillsphere is an online transformative upskilling platform for working tech professionals. Our industry-vetted approach towards teaching & training young professionals not only helps them upskill but also #CreateImpact in the real world. We are devoted to creating an ecosystem that nurtures our learners and assists them in unlocking talent, skills & opportunities at every stage of their careers. Learners enrolled with us are taught, guided, and mentored by industry veterans and experts from leading tech organisations, including Google, Meta, Netflix, Microsoft, Amazon, Hotstar, Twitter etc.</div>
            </div>
            <div className="flex flex-col w-1/2 gap-10">
              <div className="flex flex-col justify-start">
                <div className="text-3xl hundredx text-blue-500">50M+</div>
                <div className="text-lg home_text3 text-gray-600">Active Learners</div>
              </div>
              <div className="flex flex-col justify-start">
                <div className="text-3xl hundredx text-yellow-500">1B+</div>
                <div className="text-lg home_text3 text-gray-600">Minutes Watched</div>
              </div>
              <div className="flex flex-col justify-start">
                <div className="text-3xl hundredx text-red-800">2000+</div>
                <div className="text-lg home_text3 text-gray-600">Live Classes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Client/>      */}


      <div className="flex w-full px-40 mt-32 gap-12">
        <div className="flex justify-center items-start w-1/2">
          <Image src="/assets/work.jpg" alt="My Home Image" width={1600} height={1200} className="h-3/4 object-cover" />
        </div>
        <div className="w-1/2 flex flex-col">
          <p className="home_text text-3xl pb-9">How we work</p>
          <p className=" leading-relaxed text-base home_text2 pb-4 text-gray-800">We're a remote first company with a cohesive team, working asynchronously to help people across the globe to build and scale their dream projects.
          </p>
          <p className=" leading-relaxed text-base home_text2 pb-4 text-gray-800">We prefer documentation over talks and over communicating things to make them clear to everyone. ScaleReal believes in small teams as they are fast and nimble, which means less management and getting more things done.
          </p>
          <p className=" leading-relaxed text-base home_text2 pb-4 text-gray-800">We follow agile methodology which involves sprint planning, daily updates, sprint retrospective, client demo, UAT apart from requirement gathering, design work, feature implementation, testing, deployment and maintenance.
          </p>
          <p className=" leading-relaxed text-base home_text2 pb-4 text-gray-800">Instant feedback and healthy discussions are a part of ScaleReal’s culture.
          </p>
        </div>

      </div>

      <div className="flex flex-col justify-center items-center px-32 h-[300px] gap-8 mb-28">
        <div className="home_button text-2xl ">
          Our students say
        </div>
        <div>
          <Slider />
        </div>

      </div>

      
      <div className="w-full  h-32  flex justify-center items-center text-4xl home_text3 mb-24 text-gray-700">
        We'd love to help you scale. <button onClick={handleClick} className="hover:underline home_button text-green-600"> Let's talk </button>
        <img src="/assets/contact.png" alt="Image" className='w-24 h-20 ml-2' />

      </div>



      <div className="flex px-36 mt-32 mb-24 gap-14 ">
        <div className="flex flex-col ">
          <div className="flex flex-col mb-4">
            <div className="home_text text-xl ">Our Head Office</div>
            <div className="home_text3 text-base text-gray-500">InterviewBit Technologies Private Limited
              9th Floor, Sakti Statesman
              GreenGlen Layout, Behind Iblur Lake
              Bellandur, Bangalore-09</div>
          </div>
          <div className="h-0.5 bg-gray-200"></div>
          <div className="flex flex-col my-4">
            <p className="home_text text-xl">Contact</p>
            <p className="home_text3 text-base text-gray-500">9153738634</p>
          </div>
          <div className="h-0.5 bg-gray-200"></div>
          <div className="flex flex-col my-4">
            <p className="home_text text-xl">Support</p>
            <p className="home_text3 text-base text-gray-500">ayushjyoti0321@gmail.com</p>
          </div>
        </div>
        <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.393080758789!2d76.620666!3d30.763545299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb3feb66675d%3A0x3dfa02b5f19ece64!2sRVR%20The%20Institute%20of%20Learning!5e0!3m2!1sen!2sin!4v1684164701669!5m2!1sen!2sin" style={{ width: 600, height: 300, border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>



      <Footer />
    </div>
  )
}

export default about
