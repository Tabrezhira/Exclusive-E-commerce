import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from '../comm/ProductCard';
import Redbtn from '../comm/Redbtn' 
import { FaMobileAlt, FaDesktop, FaRegClock, FaCamera, FaHeadphones, FaGamepad } from "react-icons/fa";
// Icon Mapping
const iconMap = {
    FaMobileAlt: FaMobileAlt,
    FaDesktop: FaDesktop,
    FaRegClock: FaRegClock,
    FaCamera: FaCamera,
    FaHeadphones: FaHeadphones,
    FaGamepad: FaGamepad,
  };
  
  const category = [
    { name: "Phones", icon: "FaMobileAlt" },
    { name: "Computers", icon: "FaDesktop" },
    { name: "SmartWatch", icon: "FaRegClock" },
    { name: "Camera", icon: "FaCamera" },
    { name: "HeadPhones", icon: "FaHeadphones" },
    { name: "Gaming", icon: "FaGamepad" },
  ];

function Category() {
    const scrollRef = useRef(null)
    const scrollRef1 = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [StartX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(false)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)
    }

    const handleMouseUpOrLeave = (e) => {
        setIsDragging(false)
    }
    const handleMouseMove = (e) => {
        if (!isDragging) return
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - StartX;
        scrollRef.current.scrollLeft = scrollLeft - walk
    }


    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300
        scrollRef.current.scrollBy({left: scrollAmount, behaviour:'smooth'})
    }

    // Update Scroll Buttons
    const updateScrollButtons = () => {
        const container = scrollRef.current

        if(container){
            const leftScoll = container.scrollLeft
            const rightScrollable = container.scrollWidth > leftScoll + container.clientWidth;

        
            setCanScrollLeft(leftScoll > 0)
            setCanScrollRight(rightScrollable)
        }
    }
    useEffect(()=>{
        const container = scrollRef.current;
        if(container){
            container.addEventListener('scroll', updateScrollButtons)
            updateScrollButtons()
            return() => container.removeEventListener('scroll', updateScrollButtons)
        }
    },[])

    // const scroll = (direction) => {
    //     if (!scrollRef.current) return;
    //     const scrollAmount = direction === "left" ? -500 : 500;
    //     scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    //     scrollRef1.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    // };
    
  return (
    <div className=' '>
        <div className=' container mx-auto pb-2 md:py-8 border-b-2 border-gray-200 px-4 overflow-x-hidden '>
            <div className='my-4 flex gap-2  items-center'>
                <div className='h-10 w-6 bg-red-500 rounded-md '></div>
                <h1 className='text-red-500 font-bold text-lx'>Categories</h1>
            </div>
            <div className=' flex items-center justify-between'>
                <div className='  text-center min-w-full md:min-w-0 md:flex  md:justify-start items-end gap-10'>
                    <h1 className='text-3xl font-bold'>Browse By Category</h1>
                </div>
                <div className=' hidden  md:flex items-center gap-2'>
                    <button onClick={() => scroll('left') } disabled={!canScrollLeft}  className='bg-gray-300 h-10 w-10 flex items-center justify-around rounded-full'><FaArrowLeftLong /></button>
                    <button onClick={() => scroll("right")} className='bg-gray-300 h-10 w-10 flex items-center justify-around rounded-full'><FaArrowRightLong /></button>
                </div>
            </div>
            <div ref={scrollRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUpOrLeave} onMouseLeave={handleMouseUpOrLeave}className="flex overflow-x-scroll item-center justify-center  py-0 md:py-2 px-1 snap-x snap-mandatory scrollbar-hide my-6 gap-4 relative">
        {category.map((item, index) => {
          const IconComponent = iconMap[item.icon]; // Get actual icon component

          return (
            <div key={index} className="flex hover:bg-red-400 flex-col items-center justify-center gap-2 min-h-40 min-w-40 border-2 border-gray-200">
              {IconComponent && <IconComponent className="text-6xl text-black" />}
              <h1 className="text-xl">{item.name}</h1>
            </div>
          );
        })}               
            </div>

        </div>   
    </div> 
  )
}

export default Category