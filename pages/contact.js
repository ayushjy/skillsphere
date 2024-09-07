import Header from "@/components/Header"
import Footer from "@/components/Footer"
const contact = () => {
  return (
    <div>
      <Header/>
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
            <p className="home_text3 text-base text-gray-500">9608891616</p>
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
      <Footer/>
    </div>
  )
}

export default contact
