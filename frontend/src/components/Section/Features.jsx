import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";

function Features() {
  return (
    <div className='my-18'>
        <div className='container px-4  md:flex mx-auto justify-evenly items-center '>
            <div className='flex flex-col  items-center py-6 md:py-0 justify-center'>
                <div className=' bg-gray-400 h-20 w-20 flex items-center justify-center rounded-full'>
                    <div className=' bg-black h-16 w-16  rounded-full flex items-center justify-center text-5xl text-white'>
                        < CiDeliveryTruck />
                    </div>
                </div>
                <p className='font-black text-center text-xl pt-4'>FREE AND FAST DELIVERY</p>
                <p className='font-light text-center pt-2 '>Free delivery for all orders </p>
            </div>
            <div className='flex flex-col  items-center py-6 md:py-0   justify-center'>
                <div className=' bg-gray-400 h-20 w-20 flex items-center justify-center rounded-full'>
                    <div className=' bg-black h-16 w-16  rounded-full flex items-center justify-center text-5xl text-white'>
                    <RiCustomerService2Fill />
                    </div>
                </div>
                <p className='font-black  text-center text-xl pt-4'>24/7 CUSTOMER SERVICE</p>
                <p className='font-light text-center pt-2 '>Friendly 24/7 customer support</p>
            </div>
            <div className='flex flex-col  items-center py-6 md:py-0  justify-center'>
                <div className=' bg-gray-400 h-20 w-20 flex items-center justify-center rounded-full'>
                    <div className=' bg-black h-16 w-16  rounded-full flex items-center justify-center text-5xl text-white'>
                    <AiOutlineSafety />
                    </div>
                </div>
                <p className='font-black text-center text-xl pt-4'>MONEY BACK GUARANTEE</p>
                <p className='font-light pt-2 '>We reurn money within 30 days</p>
            </div>
        </div>
    </div>
  )
}

export default Features