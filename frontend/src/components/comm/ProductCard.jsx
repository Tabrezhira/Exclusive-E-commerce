import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

function ProductCard(product) {

  return (
    <div className=' shadow-md rounded-b-md '>
        <div className='relative w-[220px] overflow-hidden  group'>
            <img draggable='false' className=' w-full h-auto rounded-t-md mb-1'  src="https://dummyimage.com/220x220/d4d4d4/fff"/>
            <div className='absolute top-2  left-2 right-2 flex justify-between   text-white px-2 py-1 rounded-md'>
            <span className="text-xs h-6 w-12 flex items-center justify-center rounded bg-red-500 font-semibold">-40%</span>
                <div className='flex flex-col gap-2 '>
                    <button className='w-8 h-8 rounded-full text-black flex items-center justify-center bg-white'><FaRegHeart /></button>
                    <button className='w-8 h-8 rounded-full text-black flex items-center justify-center bg-white'><FaRegEye /></button>
                </div>
            </div>
            <div className='absolute -bottom-10 group-hover:bottom-0 transition-all duration-300 w-full bg-black py-2 text-white text-center text-sm'>Add To Cart</div>
        </div>
        <p className='font-bold px-2 mb-1'>{product.product.name}</p>
        <div className='flex gap-2 mb-1 px-2 items-center'>
            <p className='text-red-500 text-md font-light'>{product.product.price}</p>
            <p className='text-gray-500 line-through opacity-60 text-sm font-light'>{product.product.discountPrice}</p>
        </div>
        <div className='flex gap-2 mb-2 px-2 items-center'>
        {[...Array(product.product.star)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}
            <p>({product.product.review})</p>
        </div>
    </div>
  )
}

export default ProductCard