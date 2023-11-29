import { useState } from 'react'
import { ImQuotesLeft } from "react-icons/im"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const a = [

  [{ text: "As someone who has been in the software industry for quite a while now, I have first hand witnessed a gap between what we are taught and what is expected of us in the professional workspace. This is not to imply that the companies have unrealistic expectations from freshers, it is only fair for them to expect students to possess knowledge in alignment with industry standards." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  {image:"/assets/avatar2.jpg"}
  ],
  [{ text: "Daily learning is the best way to enhance your knowledge. skillsphere gives us aa way aand some awsome educators like you so that we can make oir learning easy. I know there is a huge effort behind this minutes video.This is such a amazing platform. Thanks for amazing course skillsphere." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  {image:"/assets/avatar6.jpg"}
  ],
  [{ text: "One of the decisions I take pride in is investing in myself. I am sure you can relate when I say that you actually don’t feel like spending hefty amounts when it comes to yourself. At least that was the case for me when I came across this opportunity of an amazing (but of course, expensive) course of Scaler. But I am so glad that I invested in it and ultimately in my own growth." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  {image:"/assets/avatar3.jpg"}
  ],
  [{ text: "As someone who has been in the software industry for quite a while now, I have first hand witnessed a gap between what we are taught and what is expected of us in the professional workspace. This is not to imply that the companies have unrealistic expectations from freshers, it is only fair for them to expect students to possess knowledge in alignment with industry standards." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  {image:"/assets/avatar2.jpg"}
  ],
  [{ text: "One of the decisions I take pride in is investing in myself. I am sure you can relate when I say that you actually don’t feel like spending hefty amounts when it comes to yourself. At least that was the case for me when I came across this opportunity of an amazing (but of course, expensive) course of Scaler. But I am so glad that I invested in it and ultimately in my own growth." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  {image:"/assets/avatar6.jpg"}
  ],
  [{ text: "I am thankful to skillsphere for the unparalleled guidance, knowledge and support that helped me take this leap. Their course structure is impeccable and has truly helped me widen the horizons of my knowledge. They have truly established that knowledge is not limited to four walls of a classroom." },
  { name: "Ayush jyoti" },
  { branch: "Student,CSE" },
  { college: "Chandigarh university" },
  {image:"/assets/avatar.jpg"}
  ]
];



const Slider = () => {

  const [currentindex, setCurrentindex] = useState(0);
  const leftbuttonchange = () => {
    const firstindex = currentindex == 0;
    const newindex = firstindex ? a.length - 1 : currentindex - 1;
    setCurrentindex(newindex);
  }

  const rightbuttonchange = () => {
    const firstindex = currentindex == a.length - 1;
    const newindex = firstindex ? 0 : currentindex + 1;
    setCurrentindex(newindex);
  }

  const dotclicked = (slideindex) => {
    setCurrentindex(slideindex);
  }



  return (
    <div className='w-full group h-[250px] mx-auto gap-12  bg-red-200 rounded-full'>
      <div className='flex space-x-4 w-full h-full px-32 justify-center items-center'>
        <div className='left flex gap-3 w-3/4  text-base home_text2 '>
          <div><ImQuotesLeft className='text-red-500' abslute size={35} /></div>
          <div> {a[currentindex][0].text}</div>
        </div>
        <div className='right w-1/4 flex flex-col  items-center'>
        <img src={a[currentindex][4].image} alt="Image" className='w-28 h-28  rounded-full mb-2' />
          <div className=' text-base home_button'>{a[currentindex][1].name}</div>
          <div className=' text-sm text-gray-800 home_text2'>{a[currentindex][2].branch}</div>
          <div className=' text-xs text-gray-600 home_text2'>{a[currentindex][3].college}</div>
        </div>
      </div>


      <div className='hidden group-hover:block absolute top-[200%] -translate-x-[-50%] translate-y-[-10%] left-44 text-xl rounded-full bg-blue-500 text-white cursor-pointer '>
        <BsChevronCompactLeft size={25} onClick={leftbuttonchange} />
      </div>
      <div className='hidden group-hover:block absolute top-[200%] -translate-x-[40%] translate-y-[-10%] right-48 text-xl rounded-full bg-blue-500 text-white cursor-pointer '>
        <BsChevronCompactRight size={25} onClick={rightbuttonchange} />
      </div>
      <div className="flex top-10 justify-center py-2">
        {a.map((value, slideindex) => {
          return (
            <div key={slideindex} className="flex items-center">
          <RxDotFilled key={slideindex} 
          className={`text-black  cursor-pointer ${currentindex === slideindex ? 'text-red-500' : 'text-blue-500'} `} 
          size={currentindex === slideindex ? 30 : 25}
           onClick={() => dotclicked(slideindex)} />
       </div>
       )
        })}
      </div>
    </div>
  )
}

export default Slider




