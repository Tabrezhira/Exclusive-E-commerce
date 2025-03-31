import React from 'react'
import Frame694 from "../../assets/Frame694.png";

function Music() {
  return (
    <div className='pb-2'>
        <div className='container px-4 mx-auto'>
           <div className='bg-black w-full md:h-120 md:flex p-8 '>
            <div className='md:w-1/2 flex flex-col md:items-start gap-4 md:gap-0 justify-around'>
                <p className='md:text-xs text-green-400  md:pd-0'>Categories</p>
                <p className='text-2xl text-center md:text-start md:text-5xl text-in tracking-widest text-white font-bold'>Enhance Your <br /> Music Experience</p>
                <div className='flex gap-3 justify-center md:justify-start'>
                    <div className=' text-xs bg-white h-14 w-14 rounded-full flex flex-col items-center justify-center'>
                        <p >23</p>
                        <p>Hours</p>
                    </div>
                    <div className=' text-xs bg-white h-14 w-14 rounded-full flex flex-col items-center justify-center'>
                        <p>05</p>
                        <p>Days</p>
                    </div>
                    <div className=' text-xs bg-white h-14 w-14 rounded-full flex flex-col items-center justify-center'>
                        <p>59</p>
                        <p>Minutes</p>
                    </div>
                    <div className=' text-xs bg-white h-14 w-14 rounded-full flex flex-col items-center justify-center'>
                        <p>35</p>
                        <p>Seconds</p>
                    </div>
                </div>
                <button className='bg-green-400 py-4 px-8 text-white rounded'>Buy Now!</button>
            </div>
            <div className="relative">
                {/* Background Shadow */}
                <div className="absolute inset-0 bg-white opacity-20 blur-3xl rounded-full"></div>

                {/* Image */}
                <img className="relative z-10" src={Frame694} alt="Frame 694" />
                </div>
           </div>
        </div>
    </div>
  )
}

export default Music