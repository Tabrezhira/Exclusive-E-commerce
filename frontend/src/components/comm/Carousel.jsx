import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


function Carousel({children: slides, autoSlide=false, autoSlideInterval=3000}) {
    const [curr, setCurr] = useState(0)
    const prev = () => setCurr(curr => curr === 0 ? slides.length - 1 : curr - 1)
    const next = () => setCurr(curr => curr === slides.length - 1 ? 0 : curr + 1)
    useEffect(() =>{
        if(!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () =>  clearInterval(slideInterval)
    },[])
  return (
    <div className=' overflow-hidden relative '>
        <div className='flex transition-transform ease-out duration-500 ' style={{transform:` translateX(-${curr*100}%)`}}>{slides}</div>
        <div className=' absolute  inset-0 flex px-4 items-center justify-between'>
            {/* <button onClick={prev} className='bg-white/80 p-1 rounded-full shadow text-gray-800 hover:bg-white'>
            <FaChevronLeft size={40} className='' />
            </button>
            <button onClick={next} className='bg-white/80 p-1 rounded-full shadow text-gray-800 hover:bg-white'>
            <FaChevronRight size={40} />
            </button> */}
        </div>
        <div className='  absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {slides.map((_, i) => (
                    <div onClick={() => setCurr(i)} className={` cursor-pointer transition-all w-2 h-2 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}/>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Carousel