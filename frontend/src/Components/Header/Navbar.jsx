import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
function Navbar() {
  const menu = ["Home","Contact","About","SignUp"]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
    <div className='text-lg border-b-2 py-5 border-gray-200'>
      <div className='flex justify-between items-center container px-4 mx-auto'>
         <div>
          <h1 className='text-3xl font-bold'>Exclusive</h1>
         </div>
         <div>
          <ul className=' hidden lg:flex gap-10  flex-1 text-xl'>
            {menu.map((item,index) => (
                <li className=' hover:border-b-2 hover:border-gray-400' key={index}>{item}</li>
            ))}
           
          </ul>
         </div>
         <div className=' hidden lg:flex items-center gap-3 text-xl '>
            <div className='flex gap-4 bg-gray-300 rounded items-center px-2 py-1 font-thin'>
              <input type="text" placeholder='What are you looking for?'  className='focus:outline-none' />
              <IoSearch className="font-thin" />
            </div>
            <div className='flex gap-2 items-center '>
                <FaRegHeart className='font-bold'/>
              <div className=' relative'>
                <div className='bg-red-400  absolute h-5 w-5 -top-2 -right-2 rounded-full flex items-center justify-center text-xs'><span className=''>12</span></div>
                <AiOutlineShoppingCart className='font-bold text-2xl' />
              </div>
            </div>
            <div className='w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center'>
              <FaRegUser className='font-bold text-xl' />
            </div>
         </div>

         {/* Mobile menu */}
         <div className='relative lg:hidden'>
            <div className='text-3xl font-bold cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? ("x") : (<MdMenu />)}
            </div>
            {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-full h-full flex flex-col items-center justify-center p-8">
            {/* Close Button */}
              <div>
                <h1 className=' absolute top-5 left-5 text-3xl font-bold'>Exclusive</h1>
                    <button
                    className="absolute top-5 right-5 text-3xl font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ✕
                  </button>
              </div>

            {/* Menu Items */}
            <ul className="space-y-6 text-2xl font-bold text-gray-800">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-blue-500 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
         </div>
      </div>
    </div>

    <div className=''>
      hello
    </div>
    </>


  )
}

export default Navbar