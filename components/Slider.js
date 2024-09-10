import { useState } from 'react'
import { ImQuotesLeft } from "react-icons/im"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const a = [

  [{ text: "As someone who has been in the software industry for quite a while now, I have first hand witnessed a gap between what we are taught and what is expected of us in the professional workspace. This is not to imply that the companies have unrealistic expectations from freshers, it is only fair for them to expect students to possess knowledge in alignment with industry standards." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  { image: "/assets/avatar2.jpg" }
  ],
  [{ text: "Daily learning is the best way to enhance your knowledge. skillsphere gives us aa way and some awsome educators like you so that we can make oir learning easy. I know there is a huge effort behind this minutes video.This is such a amazing platform. Thanks for amazing course skillsphere." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  { image: "/assets/avatar6.jpg" }
  ],
  [{ text: "One of the decisions I take pride in is investing in myself. I am sure you can relate when I say that you actually don’t feel like spending hefty amounts when it comes to yourself. At least that was the case for me when I came across this opportunity of an amazing (but of course, expensive) course of Scaler. But I am so glad that I invested in it and ultimately in my own growth." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  { image: "/assets/avatar3.jpg" }
  ],
  [{ text: "As someone who has been in the software industry for quite a while now, I have first hand witnessed a gap between what we are taught and what is expected of us in the professional workspace. This is not to imply that the companies have unrealistic expectations from freshers, it is only fair for them to expect students to possess knowledge in alignment with industry standards." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  { image: "/assets/avatar2.jpg" }
  ],
  [{ text: "One of the decisions I take pride in is investing in myself. I am sure you can relate when I say that you actually don’t feel like spending hefty amounts when it comes to yourself. At least that was the case for me when I came across this opportunity of an amazing (but of course, expensive) course of Scaler. But I am so glad that I invested in it and ultimately in my own growth." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  { image: "/assets/avatar6.jpg" }
  ],
  [{ text: "I am thankful to skillsphere for the unparalleled guidance, knowledge and support that helped me take this leap. Their course structure is impeccable and has truly helped me widen the horizons of my knowledge. They have truly established that knowledge is not limited to four walls of a classroom." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  { image: "/assets/avatar.jpg" }
  ]
];



const Slider = () => {

  const [currentindex, setCurrentindex] = useState(0);
  const leftbuttonchange = () => {
    const newindex = (currentindex - 2 + a.length) % a.length;
    setCurrentindex(newindex);
  };

  const rightbuttonchange = () => {
    const newindex = (currentindex + 2) % a.length;
    setCurrentindex(newindex);
  };

  const dotclicked = (slideindex) => {
    // const newslideindex=slideindex ==a.length-1?
    setCurrentindex(slideindex);
  }



  return (
    <div className='w-full relative group py-8 max-md:py-3 px-24 max-lg:px-6 max-md:px-12'>
      <div className='flex gap-12 '>
        <div className='max-lg:hidden flex space-x-4 w-1/2 max-md:w-full h-full  justify-center items-start '>

          <div className='right w-1/4 flex flex-col justify-center items-center'>
            <img src={a[currentindex][4].image} alt="Image" className='w-28 h-28  rounded-full mb-2' />
            <div className=' text-base home_button'>{a[currentindex][1].name}</div>
            <div className=' text-sm text-gray-800 home_text2'>{a[currentindex][2].branch}</div>
            <div className=' text-xs text-center text-gray-600 home_text2'>{a[currentindex][3].college}</div>
          </div>
          <div className='left flex gap-3 w-3/4 leading-snug text-neutral-200 max-sm:text-sm text-base home_text2 '>
            <div><ImQuotesLeft className='text-neutral-100' abslute size={30} /></div>
            {a[currentindex] && <div>
               {a[currentindex][0].text}</div>}
          </div>
        </div>

        <div className='flex max-md:flex-col space-x-4 w-1/2 max-lg:w-full h-full  justify-center items-start '>
          <div className='left flex gap-3 w-3/4 max-md:w-full leading-snug text-neutral-200 text-base max-lg:text-sm home_text2 '>
            <div><ImQuotesLeft className='text-neutral-100' abslute size={30} /></div>
            {a[currentindex + 1] && <div> {a[currentindex + 1][0].text}</div>}
          </div>
          <div className='right w-1/4 max-md:pt-3 max-md:w-full flex flex-col justify-center items-center max-md:items-start'>
            {a[currentindex + 1] && (<img src={a[currentindex + 1][4].image} alt="Image" className='w-28 h-28 max-md:w-16 max-md:h-16 rounded-full mb-2' />)}
            {a[currentindex + 1] && (<div className=' text-base home_button'>{a[currentindex + 1][1].name}</div>)}
            {a[currentindex + 1] && (<div className=' text-sm text-gray-800 home_text2'>{a[currentindex + 1][2].branch}</div>)}
            {a[currentindex + 1] && (<div className=' text-xs text-center text-gray-600 home_text2'>{a[currentindex + 1][3].college}</div>)}
          </div>
        </div>
      </div>

      <div className='hidden group-hover:block absolute top-[40%] max-lg:left-4 left-12 text-xl rounded-full bg-[#5c3e84] text-neutral-200 cursor-pointer '>
        <BsChevronCompactLeft size={25} onClick={leftbuttonchange} />
      </div>
      <div className='hidden group-hover:block absolute top-[40%] max-lg:right-4 right-12 text-xl rounded-full bg-[#5c3e84] text-neutral-200 cursor-pointer '>
        <BsChevronCompactRight size={25} onClick={rightbuttonchange} />
      </div>
      <div className="flex top-10 justify-center pt-2 md:hidden">
        {
        a.map((value, slideindex) => {
          return (
            <div key={slideindex} className="flex items-center">
          <RxDotFilled key={slideindex} 
          className={`cursor-pointer ${currentindex === slideindex ? 'text-zinc-200' : 'text-slate-600'} `} 
          size={currentindex === slideindex ? 30 : 30}
           onClick={() => dotclicked(slideindex)} />
       </div>
       )
        })}
      </div>
    </div>
  )
}

export default Slider



