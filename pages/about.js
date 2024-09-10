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

      <div className="w-full flex max-sm:flex-col-reverse max-sm:gap-4 px-40 py-14 mt-16 max-md:px-6 max-xl:px-12 max-sm:px-6 max-lg:px-12">
        <div className="flex flex-col w-1/2 max-sm:w-full justify-center items-start">
          <div className="text-3xl max-sm:text-2xl w-full home_text pb-4 text-gray-800 max-sm:text-center max-sm:font-semibold">Who we are ?</div>
          <div className="flex flex-col gap-4">
            <div className="leading-relaxed text-base home_text2  text-gray-800">skillsphere is an online transformative upskilling platform for working tech professionals. Our industry-vetted approach towards teaching & training young professionals not only helps them upskill but also #CreateImpact in the real world.</div>
            <div className="leading-relaxed text-base home_text2  text-gray-800">We are devoted to creating an ecosystem that nurtures our learners and assists them in unlocking talent, skills & opportunities at every stage of their careers.</div>
            <div className="leading-relaxed text-base home_text2  text-gray-800">Learners enrolled with us are taught, guided, and mentored by industry veterans and experts from leading tech organisations, including Google, Meta, Netflix, Microsoft, Amazon, Hotstar, Twitter etc.</div>
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full flex justify-center items-center">
          <img src="/assets/aboutus2.jpg" alt="about" className="w-3/4 max-sm:w-2/3" />
        </div>
      </div>

      {/* <Client/>      */}



      <div className="flex max-sm:flex-col justify-center items-center w-full bg-red-500 gap-72 max-sm:gap-12 max-md:gap-24 max-lg:gap-36 max-xl:gap-48 py-12 max-sm:py-6 max-md:px-6 max-xl:px-12 max-sm:px-6 max-lg:px-12">
        <div className="flex flex-col items-center">
          <div className="text-3xl max-sm:text-2xl text-[#5c3e84] hundredx">50M+</div>
          <div className="text-lg max-sm:text-base home_text3 text-[#686ee2]">Active Learners</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl max-sm:text-2xl text-[#5c3e84] hundredx">1B+</div>
          <div className="text-lg max-sm:text-base home_text3 text-[#686ee2]">Minutes Watched</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl max-sm:text-2xl text-[#5c3e84] hundredx">2000+</div>
          <div className="text-lg max-sm:text-base home_text3 text-[#686ee2]">Live Classes</div>
        </div>
      </div>



      <div className="flex max-sm:flex-col w-full px-40 mt-32 max-sm:mt-9 gap-12 max-md:px-6 max-xl:px-12 max-sm:px-6 max-lg:px-12">
        <div className="flex justify-center items-start w-1/2 max-sm:w-full">
          <Image src="/assets/work.jpg" alt="My Home Image" width={1600} height={1200} className="w-full max-sm:w-2/3  object-cover" />
        </div>
        <div className="w-1/2 flex flex-col max-sm:w-full">
          <p className="home_text text-3xl max-sm:text-2xl pb-9 max-sm:pb-6 max-sm:text-center max-sm:home_text2 max-sm:font-semibold">How we work?</p>
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

      <div className="flex flex-col justify-center items-center max-sm:mt-12 max-lg:mt-24 max-md:mt-20 mx-32 max-md:mx-6 max-sm:mx-2 max-xl:mx-12 max-lg:mx-12 rounded-lg bg-red-500 mb-28">
        <div className="home_button text-2xl max-sm:text-xl pt-6">
          Our students say
        </div>
        <div>
          <Slider />
        </div>
      </div>


      <div className="w-full  h-32  flex max-lg:flex-col justify-center items-center  mb-24 max-md:px-6 max-xl:px-12 max-sm:px-4 max-lg:px-12">
        <div className="text-4xl max-sm:text-3xl home_text3 text-gray-700 max-sm:text-center">We'd love to help you scale.</div>
        <div className="flex"> 
        <button onClick={handleClick} className="hover:underline home_button text-green-600 text-4xl max-sm:text-3xl"> Let's talk </button>
        <img src="/assets/contact.png" alt="Image" className='w-24 max-sm:w-16 h-20 ml-2' />
        </div>
      </div>



      <div className="w-full flex px-36 mt-32 mb-24 gap-14 max-sm:flex-col max-col:justify-center max-md:px-6 max-xl:px-12 max-sm:px-6 max-lg:px-12">
        <div className="flex flex-col ">
          <div className="flex flex-col mb-4">
            <div className="home_text text-xl max-sm:text-lg">Our Head Office</div>
            <div className="home_text3 text-base text-gray-500 max-sm:text-sm">skillsphere Private Limited,
              9th Floor, Sakti Statesman
              GreenGlen Layout,Chandigarh</div>
          </div>
          <div className="h-0.5 bg-gray-200"></div>
          <div className="flex flex-col my-4">
            <p className="home_text text-xl max-sm:text-lg">Contact</p>
            <p className="home_text3 text-base text-gray-500 max-sm:text-sm">9608891616</p>
          </div>
          <div className="h-0.5 bg-gray-200"></div>
          <div className="flex flex-col my-4">
            <p className="home_text text-xl max-sm:text-lg">Support</p>
            <p className="home_text3 text-base text-gray-500 max-sm:text-sm">ayushjyoti0321@gmail.com</p>
          </div>
        </div>
        
        <div className="w-full">          
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126066.35434515133!2d76.67871427761112!3d30.729703200216495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1725987555561!5m2!1sen!2sin" 
        style={{height: 300, border: 0 }} 
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" 
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
        </div>
      </div>



      <Footer />
    </div>
  )
}

export default about
