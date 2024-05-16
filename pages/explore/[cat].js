import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

import { IoLogoJavascript } from "react-icons/io5";


  


  

const cat = ({item,pagename}) => {
    if (!item) {
        return <div>Loading...</div>; 
      }
    return (

        <div>
            <Header />
            
                    <div className="w-full pb-10 pt-24 px-32 gap-4 flex">
                <div className="w-1/4 gap-2 flex flex-col ">
                    <button className="home_text  bg-red-100 text-gray-800 font-bold text-start lass py-3 px-4 rounded-xl">{item.sidebar}</button>
                     <Link key={item.id} href={item.roadmap}><button className="home_text3  hover:bg-red-100 text-gray-800  text-start lass py-3 px-4 rounded-xl">{item.roadmap_name}</button></Link>
                    <button className="home_text3  hover:bg-red-100 text-gray-800  text-start lass py-3 px-4 rounded-xl">{item.discussion}</button>
                    <button className="home_text3  hover:bg-red-100 text-gray-800  text-start lass py-3 px-4 rounded-xl">{item.project}</button>
                    
                   
                </div>
                <div className="w-5/6 flex flex-col">
                    <div className="relative ">
                        <div className="flex justify-between items-center px-12 bg-red-100 w-full h-[180px] mb-4 rounded-3xl ">
                            <span className="text-8xl text-red-300 hundredx">{item.title} </span>
                            {/* <span><IoLogoJavascript className="text-red-400" size={120} /></span> */}
                            <Image src={item.icon} alt="My image" width={100} height={120}/>

                        </div>
                        <div className="absolute bottom-0 left-0 right-0  h-0.5 bg-gray-100"></div>
                    </div>
                    <div className="flex gap-2 mt-16">
                        <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl h-[350px] w-[350px]">
                            <div className="h-1/2 ">
                                <Image src="/assets/whatsapp.jpg" width={600} height={600} className="object-cover rounded-t-2xl" />
                            </div>
                            <div className="flex flex-col items-center justify-center h-1/2 py-4 px-4">
                              
                                <Link href={"https://www.youtube.com/live/gzdQDxzW2Tw?si=7Sus2hGIK0Y6zwn8"} target="_blank" ><p className="text-lg home_button pb-1 hover:underline cursor-pointer">Build A Whatsapp Clone With MERN Stack...</p></Link>
                                <p className="text-xs text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p>
                            </div>
                        </div>
                        <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl h-[350px] w-[350px]">
                            <div className="h-1/2 ">
                                <Image src="/assets/flutter.jpg" width={600} height={600} className="object-cover rounded-t-2xl" />
                            </div>
                            <div className="flex flex-col items-center justify-center h-1/2 py-4 px-4">
                               
                                <Link href={"https://youtu.be/VPvVD8t02U8?si=PB5QuWnKRurqfRuv"} target="blank"><p className="text-lg home_button pb-1 hover:underline cursor-pointer">2022 Flutter Master Class Travel App | Tutorial For...</p></Link>
                                <p className="text-xs text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p>

                            </div>
                        </div>
                        <div className="flex flex-col border  border-x-zinc-950  border-b-zinc-950 rounded-2xl h-[350px] w-[350px]">
                            <div className="h-1/2 ">
                                <Image src="/assets/Node.jpg" width={600} height={600} className="object-cover rounded-t-2xl" />
                            </div>
                            <div className="flex flex-col items-center justify-center h-1/2 py-4 px-4">
                                
                            <Link href={"https://youtu.be/_xKCi5OI_Mg?si=rbWMN2-aan3g6Kmh"} target="blank"><p className="text-lg home_button pb-1 hover:underline cursor-pointer">File Sharing App With Deployment In Node Js, Expre...</p></Link>
                                <p className="text-xs text-gray-500 home_text2">From this tutorial we build a flutter cubit state management app. We will build it step by step. We ...</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
                
            
            
            <Footer />
        </div>
    )
}

export default cat


export async function getStaticPaths(){
    const {data_details} = await import ('/data/data.json');
    const allPaths = data_details.map((ev)=>{   
      return{
        params: {
          cat: ev.id.toString(),
        },
      };
    });
    return{
      paths:allPaths,
      fallback:true,
    };
}

export async function  getStaticProps(context){
    const id= context.params.cat;
    const {data_details} = await import('/data/data.json');
    const item=data_details.find((ev)=>
      ev.id == id);

    

    return {
      props:{item,pagename:id}
    };
}