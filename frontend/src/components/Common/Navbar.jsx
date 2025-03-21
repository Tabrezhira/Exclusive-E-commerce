import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
function Navbar() {

  return (
    <div className=' container mx-auto px-6 py-2 mt-2 '>
      <div className='flex justify-between items-center'>
          <div className=' text-black '>
            Exclusive
          </div>
          <div className='flex gap-4 justify-center items-center cursor-pointer'>
            <h1 className=' hover:border-b-2 '>Home</h1>
            <h1 className='hover:border-b-2'>Contact</h1>
            <h1 className='hover:border-b-2'>About</h1>
            <h1 className='hover:border-b-2'>Sign Up</h1>
          </div>
          <div className='px-4 flex gap-2 items-center'>
            <div className=' flex  gap-4 justify-center items-center bg-gray-200 py-2 px-4  '>
               <p className=' text-gray-500 '>What are you looking for? </p>
               <CiSearch  className='text-black-500'/>
            </div>
            <CiHeart />
            <BsCart2 />
          </div>
      </div>
    </div>  
  )
}

export default Navbar