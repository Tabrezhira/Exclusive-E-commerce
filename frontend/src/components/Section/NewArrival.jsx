import React from 'react'
import ps5Image from "../../assets/ps5-slim-goedkope-playstation_large.png";
import woman from '../../assets/attractive-woman-wearing-hat-posing-black-background 1.png'

function NewArrival() {
  return (
<div className="container mx-auto max-w-screen-lg px-4">
  <div className="flex h-[30rem] w-full items-center justify-center">
    <div className="grid h-full w-full gap-4  
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 
      rounded shadow-md">
      
      {/* Big Block (Full Width on Mobile, 2x2 on Large Screens) */}
      <div className="col-span-1 relative overflow-hidden sm:col-span-2 lg:col-span-2 row-span-2 bg-black rounded-lg shadow-md flex items-center justify-center">
        <div className='absolute -bottom-10'>
          <img className='object-contain' src={ps5Image} alt="PS5 Slim" />;
        </div>
        <div className='absolute bottom-0 left-10 p-2 flex flex-col gap-4 text-white'>
          <p className=' font-bold'>PlayStation 5</p>
          <p className='font-light'>Black and White version of the PS5 <br /> coming out on sale.</p>
          <p className=' underline underline-offset-4  decoration-gray-400 font-bold'>Shop Now</p>
        </div>
      </div>

      {/* Wide Block (Single Row for All Screens) */}
      <div className="col-span-1  relative overflow-hidden sm:col-span-2  lg:col-span-2 md:row-span-1 bg-black rounded-lg shadow-md flex items-center justify-center">
      <div className='absolute right-0 -bottom-10'>
          <img className='object-cover w-full h-auto' src={woman} alt="PS5 Slim" />;
        </div>
        <div className='absolute bottom-0 left-10 p-2 flex flex-col gap-4 text-white'>
          <p className=' font-bold'>Women’s Collections</p>
          <p className='font-light'>Featured woman collections that <br /> give you another vibe.</p>
          <p className=' underline underline-offset-4  decoration-gray-400 font-bold'>Shop Now</p>
        </div>
      </div>

      {/* Small Blocks (Stacked on Small Screens, Side by Side on Large Screens) */}
      <div className="col-span-1 row-span-1 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
        3
      </div>

      <div className="col-span-1 row-span-1 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
        4
      </div>

    </div>
  </div>
</div>

  )
}

export default NewArrival