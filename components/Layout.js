import Image from 'next/image'

const Layout = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center h-screen bg-red-100">
      <div className="w-4/5 h-4/5 bg-slate-50 rounded-md flex justify-center items-center relative">       
        <Image 
          src={"/assets/login.jpg"} 
          width={1200} 
          height={1000} 
          alt="login image" 
          className="w-1/2 h-full object-cover rounded-md max-md:hidden" 
        />
        <div className="text-center py-10 w-1/2 flex flex-col justify-evenly relative max-md:w-full">
          <div className="absolute inset-0 bg-[url('/assets/login.jpg')] bg-cover bg-center opacity-10 z-0 max-md:block hidden"></div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
