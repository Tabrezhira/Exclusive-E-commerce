import React from 'react'
import about from '../assets/Side Image.png'
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";

function About() {
  return (
    <div className='py-4 container px-4 mx-auto'>
        <p>Home / About</p>
        <div className='flex items-center py-2'>
            <div className='w-1/2 p-4'>
                <h1 className='text-2xl font-bold pb-4 '>Our Story</h1>
                <p className='pb-4'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className='flex w-1/2'><img src={about} alt="" /></div>
        </div>
        <div className='flex py-8 gap-2 justify-between'>
        <div className='flex border-2 border-gray-300 flex-col  items-center py-6 md:p-4 justify-center'>
                <div className=' bg-gray-400 h-20 w-20 flex items-center justify-center rounded-full'>
                    <div className=' bg-black h-16 w-16  rounded-full flex items-center justify-center text-5xl text-white'>
                        < CiDeliveryTruck />
                    </div>
                </div>
                <p className='font-black text-center text-xl pt-4'>FREE AND FAST DELIVERY</p>
                <p className='font-light text-center pt-2 '>Free delivery for all orders </p>
            </div>
            <div className='flex border-gray-300 border-2 flex-col  items-center py-6 md:p-4   justify-center'>
                <div className=' bg-gray-400 h-20 w-20 flex items-center justify-center rounded-full'>
                    <div className=' bg-black h-16 w-16  rounded-full flex items-center justify-center text-5xl text-white'>
                    <RiCustomerService2Fill />
                    </div>
                </div>
                <p className='font-black  text-center text-xl pt-4'>24/7 CUSTOMER SERVICE</p>
                <p className='font-light text-center pt-2 '>Friendly 24/7 customer support</p>
            </div>
            <div className='flex border-2 border-gray-300 flex-col  items-center py-6 md:p-4  justify-center'>
                <div className=' bg-gray-400  h-20 w-20 flex items-center justify-center rounded-full'>
                    <div className=' bg-black h-16 w-16  rounded-full flex items-center justify-center text-5xl text-white'>
                    <AiOutlineSafety />
                    </div>
                </div>
                <p className='font-black text-center text-xl pt-4'>MONEY BACK GUARANTEE</p>
                <p className='font-light pt-2 text-center '>We reurn money within 30 days</p>
            </div>
            <div className='flex border-2 border-gray-300 flex-col  items-center py-6 md:p-4  justify-center'>
                <div className=' bg-gray-400 h-20 w-20 flex items-center justify-center rounded-full'>
                    <div className=' bg-black h-16 w-16  rounded-full flex items-center justify-center text-5xl text-white'>
                    <AiOutlineSafety />
                    </div>
                </div>
                <p className='font-black text-center text-xl pt-4'>MONEY BACK GUARANTEE</p>
                <p className='font-light pt-2 text-center'>We reurn money within 30 days</p>
            </div>
        </div>
    </div>
  )
}

export default About