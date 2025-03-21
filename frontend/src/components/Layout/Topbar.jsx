import React from 'react'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const languages = ["English", "Hindi", "Gujarati", "French"];

  return (


    <div className='bg-black text-white'>
      <div className=' container flex mx-auto justify-between px-6 py-2  items-center '>
        <div className='flex-1 flex justify-center items-center'>
          <p className='text-xs md:text-l'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}</p>
        </div>
        <div className=' relative mt-2 md:mt-0'>
          <div className='flex items-center cursor-pointer px-3 py-1' onClick={() => setIsOpen(!isOpen)}>
              <p className='mr-1'>{selectedLang}</p>
              <IoIosArrowDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </div>

          {isOpen && (
            <ul className="absolute right-0 mt-2 w-32 bg-white text-black border-gray-300 rounded-md shadow-md">
              {languages.map((lang) => (
                <li key={lang} className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() =>{
                  setSelectedLang(lang);
                  setIsOpen(false)
                }} >{lang}</li>
              ))}
            </ul>
          )}

        </div>

      </div>

    </div>


  //       {isOpen && (
  //         <ul className="absolute right-0 mt-2 w-32 bg-white text-black border border-gray-300 rounded-md shadow-md">
  //           {languages.map((lang) => (
  //             <li
  //               key={lang}
  //               className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
  //               onClick={() => {
  //                 setSelectedLang(lang);
  //                 setIsOpen(false);
  //               }}
  //             >
  //               {lang}
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //     </div>
  //   </div>
  // </div>
  )
}

export default Topbar