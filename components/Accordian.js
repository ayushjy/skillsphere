import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import Image from 'next/image';

const Accordian = () => {
    const data = [
        {
            heading: "Real-time discussion panel with markdown support.",
            des: "You can discuss your doubts in real-time on MeTrack. So, no stopping after you encounter an error while following a tutorial. You can even post code snippets in the discussions as it is markdown supported."
        },
        {
            heading: "See what others are building.",
            des: "View all the project submissions by others enrolled in the same course or tutorial. You can submit your own project as well."
        },
        {
            heading: "Build in public and proof of work",
            des: "Show your potential clients and recruiters that you've learnt and built something useful. Those who view your project can add a feedback. This will help you improve your project over time. Your project can be an inspiration for others!!"
        }
    ]
    const [openAccordions, setOpenAccordions] = useState([]);

    const toggleAccordion = (item) => {
        setOpenAccordions((prevOpenAccordions) => {
            if (prevOpenAccordions.includes(item.heading)) {
                // Close the accordion if it's already open
                return prevOpenAccordions.filter((name) => name !== item.heading);
            } else {
                // Open the accordion if it's closed
                return [...prevOpenAccordions, item.heading];
            }
        });
    };

    return (
        <div className='mt-44 max-lg:px-12'>
            <h2 className="text-center text-5xl home_text max-lg:text-3xl">The Only “Platform” You Need To Learn</h2>
            <p className="text-center text-lg home_text3 mt-3 mb-12">Here are the possible scenarios to get the most out of this platform</p>
            {data.map((item) => (
                <div
                    key={item.heading}
                    className={`py-4 mb-2 ${openAccordions.includes(item.heading) ? 'bg-red-300 rounded-3xl' : 'bg-white rounded-3xl'}`}>
                    <button onClick={() => toggleAccordion(item)} className='flex justify-between w-full'>
                        <span className='text-xl font4 pb-3 px-3 text-gray-800'>👨‍💻 {item.heading}</span>
                        {openAccordions.includes(item.heading) ? (
                            <span className='text-black'>
                                <RiArrowDropUpLine size={30} />
                            </span>
                        ) : (
                            <span className='text-black'>
                                <RiArrowDropDownLine size={30} />
                            </span>
                        )}
                    </button>
                    <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${openAccordions.includes(item.heading) ? 'grid-rows-[1fr] opacity-100' : 'h-0 opacity-0'
                            }`}>
                        {(<div>
                            <div className='text-gray-600 text-xl font3 px-8 pt-3 overflow-hidden'>{item.des}</div>
                        </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordian;
