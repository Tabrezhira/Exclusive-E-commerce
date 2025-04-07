import React, { useState } from 'react';
import { FaMinus, FaPlus, FaTruck, FaUndo } from 'react-icons/fa';
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
function SingleProductPage() {
    const [quantity, setQuantity] = useState(2);
    const [selectedColor, setSelectedColor] = useState('red');
    const [selectedSize, setSelectedSize] = useState('M');

    const colours = [
        { name: 'Red', value: 'red' },
        { name: 'Black', value: 'black' },
      ];
    
      const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  return (
    <div className=' container mx-auto py-6 px-4'>
        <div>
            <p className=''>Account / Gaming / Havic HV G-92 Gamepad</p>
        </div>
        <div className='flex py-4 h-180 '>
            <div className='bg-amber-200 flex-1' >
            a
            </div>
            <div className='bg-pink-300 w-1/3'>
                <p className='text-xl font-bold pb-2'>Havic HV G-92 Gamepad</p>
                <div className='text-xs pb-2'>
                ⭐⭐⭐⭐⭐ (150 Reviews) | In Stock
                </div>
                <p className='text-xl font-light pb-2'>$192.00</p>
                <p className='text-sm pb-2'>
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                </p>
                <hr className='text-gray-400 pb-2 ' />
                <div className='flex items-center gap-2 pb-4'>
                    <p className='text-xl font-normal'>Colours:</p>
                    <div className='h-6 w-6 bg-black rounded-full'></div>
                    <div className='h-6 w-6 bg-green-300 rounded-full'></div>
                </div>
                <div className='flex items-center gap-2 pb-2'>
                    <p className='text-xl font-normal'>Size:</p>
                    <div className='h-9 flex items-center justify-center w-9 border-2 '>XS</div>
                    <div className='h-9 flex items-center justify-center w-9 border-2 '>S</div>
                    <div className='h-9 flex items-center justify-center w-9 border-2 '>M</div>
                    <div className='h-9 flex items-center justify-center w-9 border-2 '>L</div>
                    <div className='h-9 flex items-center justify-center w-9 border-2 '>xL</div>
                </div>
                <div className='flex items-center  py-4  gap-2'>
                    <div className='flex items-center gap-4 border-2 '>
                    <div className='h-8 w-8 text-2xl flex items-center justify-center border-r-2 '>-</div>
                    <p>2</p>
                    <div className='h-8 w-8 text-2xl flex items-center justify-center border-l-2 '>+</div>
                    </div>
                    <button className='bg-red-400 py-2 text-white px-6'>Buy Now</button>
                    <div className='h-8 w-8 border-2 text-xl flex items-center justify-center'>♡</div>
                </div>

                <div className='flex border-2 items-center justify-around py-4 mb-4'>
                    <div className='text-4xl'><CiDeliveryTruck /></div>
                    <div className=''>
                        <p>Free Delivery</p>
                        <p className='text-xs'>Enter your postal code for Delivery Availability</p>
                    </div>
                </div>
                <div className='flex border-2 items-center justify-around py-4'>
                    <div className='text-4xl'><IoIosGitCompare /></div>
                    <div>
                        <p>Return Delivery</p>
                        <p className='text-xs'>Free 30 Days Delivery Returns. Details</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProductPage

