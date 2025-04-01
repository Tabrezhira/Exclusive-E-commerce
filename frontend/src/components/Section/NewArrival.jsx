import React from 'react'
import ps5Image from "../../assets/ps5-slim-goedkope-playstation_large.png";
import woman from '../../assets/attractive-woman-wearing-hat-posing-black-background 1.png'
import specker from '../../assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'
import perfum from '../../assets/652e82cd70aa6522dd785109a455904c.png'
 
function NewArrival() {
  return (
    <div className=' container mx-auto '>
      <div className='px-4 py-4'>
      <div className='my-2 flex gap-2   items-center'>
                <div className='h-10 w-6 bg-red-500 rounded-md '></div>
                <h1 className='text-red-500 font-bold text-lx'>Featured</h1>
          </div>
          <div className=' flex items-center justify-between'>
                <div className=' justify-center w-full items-center  md:flex md:justify-start md:items-end gap-10'>
                    <h1 className='text-3xl text-center mb-4  font-bold'>New Arrival</h1>

                </div>

           </div>
      </div>

        <div className='md:h-120 h-180'>
      <div className=' container px-4 mx-auto h-full  flex flex-col md:flex-row gap-2  '>
          <div className='md:h-full h-80 relative bg-black md:w-1/2 rounded'>
          <div className='absolute  h-full bottom-0 left-1/2 overflow-hidden w-full transform -translate-x-1/2'>
            <img className='object-cover max-w-full h-auto ' src={ps5Image} alt="PS5 Slim" />
          </div>
          <div className='absolute bottom-0  md:left-10 p-2 flex flex-col gap-4 text-white'>
            <p className='font-bold'>PlayStation 5</p>
            <p className='font-light'>Black and White version of the PS5 <br /> coming out on sale.</p>
            <p className='underline underline-offset-4 decoration-gray-400 font-bold'>Shop Now</p>
          </div>
          </div>
          <div className='md:h-full  h-200  md:w-1/2 flex flex-col  gap-2'>
            <div className='w-full h-1/2 relative rounded bg-black overflow-hidden '>
            <div className='absolute right-0 -bottom-10'>
          <img className='object-cover w-full h-auto' src={woman} alt="PS5 Slim" />;
        </div>
        <div className='absolute bottom-0 md:left-10 p-2 flex flex-col gap-4 text-white'>
          <p className=' font-bold'>Women’s Collections</p>
          <p className='font-light'>Featured woman collections that <br /> give you another vibe.</p>
          <p className=' underline underline-offset-4  decoration-gray-400 font-bold'>Shop Now</p>
        </div>
            </div>
            <div className='w-full h-1/2  flex  gap-2'>
            <div className='h-full relative  rounded bg-black w-1/2'>
               <div className=' absolute inset-0 flex items-center justify-center w-full h-full  '>
                <img  src={specker} alt="spker" />
               </div>
               <div className='absolute bottom-0 md:left-5 p-2 flex flex-col gap-1 text-white'>
                  <p className='font-bold'>Speakers</p>
                  <p className='font-light'>Amazon wireless speakers</p>
                  <p className='underline underline-offset-4 decoration-gray-400 font-bold'>Shop Now</p>
                </div>
            </div>
            <div className='h-full relative rounded  bg-black w-1/2'>
            <div className=' absolute inset-0 flex items-center justify-center w-full h-full  '>
                <img className=' ' src={ perfum } alt="spker" />
               </div>
               <div className='absolute bottom-0 md:left-5 p-2 flex flex-col gap-1 text-white'>
                  <p className='font-bold'>Perfume</p>
                  <p className='font-light'>GUCCI INTENSE OUD EDP</p>
                  <p className='underline underline-offset-4 decoration-gray-400 font-bold'>Shop Now</p>
                </div>
            </div>
            </div>
          </div>
      </div>
    </div>

    </div>


  )
}

export default NewArrival