import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

function ProductCard() {
  return (
    <div className='w-40'>
        <div className='relative w-full bg-indigo-400'>
            <img className='relative' src="https://dummyimage.com/220x220/d4d4d4/fff"/>
            <div className='absolute bg-red-300 top-0 z-10 flex  justify-between'>
                <div>-40%</div>
                <div className='flex flex-col w-full left-100 absolute bg-red-400 '>
                    <button><FaRegHeart /></button>
                    <button><FaRegEye /></button>
                </div>
            </div>
        </div>
        <p>HAVIT HV-G92 Gamepad</p>
        <div>
            <p>$120</p>
            <p>$160</p>
        </div>
        <div>
            <div>
                <p><FaStar /></p>
            </div>
            <p>(88)</p>
        </div>
    </div>
  )
}

export default ProductCard