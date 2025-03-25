import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
function Topbar() {
    const [isOpen, setIsOpen] = useState(true)
    const [selectedLang, setSelectedLang] = useState("English");
    const languages = ["English", "Hindi", "Gujarati", "French"];
  return (
    <div className='bg-black text-white py-2'>
        <div className=' container flex mx-auto justify-center items-center'>
            <div className=' flex-1 flex justify-center items-center'>
                <p className='text-xs md:text-l'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "} <span>ShopNow</span></p>
            </div>
            <div className=' relative mt-2 md:mt-0'>
                <div onClick={() => setIsOpen(!isOpen)} className='flex items-center  cursor-pointer px-3 py-1'>
                    <p className='text-xs'>{selectedLang}</p>
                    <IoIosArrowDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}  />
                </div>
                {isOpen && (
                    <ul className=' absolute right-0 mt-2 w-24 bg-white text-black border-gray-300 rounded-md shadow-md'>
                        {languages.map((item,index) => (
                           <li key={index} onClick={() =>{
                            setSelectedLang(item)
                            setIsOpen(false)
                           }} className='px-4 text-sm py-2  hover:bg-gray-200 cursor-pointer'>{item}</li>
                        ))}

                    </ul>
                )}
            </div>
        </div>
    </div>
  )
}

export default Topbar