import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function Topbar() {
  return (
    // <div className="bg-black text-white">
    //   <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-2 text-center md:text-left">
        
    //     {/* Centered Offer Text */}
    //     <div className="flex-1 flex justify-center">
    //       <div className=" px-4 md:px-6 py-2 rounded-md">
    //         <p className="text-sm md:text-base font-medium">
    //           Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
    //           <span className="font-bold cursor-pointer underline">Shop Now</span>
    //         </p>
    //       </div>
    //     </div>

    //     {/* Right-aligned Language Selector (Stacks below on small screens) */}
    //     <div className="flex items-center mt-2 md:mt-0 cursor-pointer">
    //       <p className="mr-1">English</p>
    //       <IoIosArrowDown />
    //     </div>
    //   </div>
    // </div>

    <div className='bg-black text-white'>
      <div className=' container flex mx-auto justify-between px-6 py-2  items-center '>
        <div className='flex-1 flex justify-center items-center'>
          <p className='text-xs md:text-l'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}</p>
        </div>
        <div className='hidden md:flex items-center'>
        <p className="mr-1">English</p> <IoIosArrowDown />
        </div>
        <div className='flex md:hidden items-center'>
        <p className="mr-1 ml-2  text-xs md:text-l">En</p> <IoIosArrowDown />
        </div>
      </div>

    </div>
  )
}

export default Topbar