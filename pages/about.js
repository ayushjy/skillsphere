import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import Client from "@/components/Client"

const about = () => {
  return (
    <div>
      <Header/>

        <div className="w-full  py-14 mt-32  bg-red-100 ">
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl home_text pb-10 w-3/4 text-gray-800">Who we are</div> 
            <div className="flex justify-center w-3/4 gap-28  ">
            <div className="flex flex-col w-4/6 ">
              <div className="text-base home_text2 pb-8 text-gray-600">A team of like minded people translating requirements into code and delivering it as a high quality product. We believe in Open, Remote and Agile work culture apart from Technology, People, Process and Strategy.</div>
              <div className="text-base home_text2 text-gray-600">Our mission is to establish ourselves as the best choice in Computing and Information Technology by offering the full spectrum of services. We are growing and would always like to remain on the growing streak.</div>
            </div>
            <div className="flex flex-col w-1/2 gap-10">
                <div className="flex flex-col justify-start">
                <div className="text-3xl hundredx text-gray-800">10+</div>
                <div className="text-lg home_text3 text-gray-600">Years of experience</div>
                </div>
                <div className="flex flex-col justify-start">
                <div className="text-3xl hundredx text-gray-800">35+</div>
                <div className="text-lg home_text3 text-gray-600">Projects delivered</div>
                </div>
                <div className="flex flex-col justify-start">
                <div className="text-3xl hundredx text-gray-800">3,000,000+</div>
                <div className="text-lg home_text3 text-gray-600">Happy users</div>
                </div>            
            </div>
            </div>
            </div>
        </div>

        {/* <Client/>      */}
          
        
      <div className="flex px-36 mt-32 mb-24 gap-14 ">
        <div className="flex flex-col ">
        <div className="home_text text-3xl ">Address</div> 
        <div className="home_text3 text-xl">B1 - 504, Montvert Pristine, Behind St. Thomas Church, Aundh Road, Pune - 411020, MH, India.</div>
        </div>
        <div >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.393080758789!2d76.620666!3d30.763545299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb3feb66675d%3A0x3dfa02b5f19ece64!2sRVR%20The%20Institute%20of%20Learning!5e0!3m2!1sen!2sin!4v1684164701669!5m2!1sen!2sin" style= {{width:600 ,height:300,border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> 
      </div>
      <div className="w-full h-32 bg-red-100 flex justify-center items-center text-4xl home_text3 mb-24 text-gray-700">
      We'd love to help you scale. <Link href={"/contact"} className="hover:underline home_button text-gray-800"> Let's talk</Link> 
      </div>
      <Footer/>
    </div>
  )
}

export default about
