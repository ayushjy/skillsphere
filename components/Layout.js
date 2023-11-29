import Image from 'next/image'
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-red-100">
      <div className="m-auto w-3/5 h-4/5 bg-slate-50 rounded-md grid lg:grid-cols-2">
          <Image src={"/assets/login.jpg"} width={1200} height={1000} alt="login image" className="w-full h-full object-cover rounded-md" />
        <div className="right flex flex-col justify-evenly">
          < div className="text-center py-10" >
            {children}
          </div >
        </div >
      </div >
    </div >
  )
}

export default Layout
