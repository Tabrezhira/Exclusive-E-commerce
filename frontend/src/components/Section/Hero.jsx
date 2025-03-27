import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTshirt, FaLaptop, FaHome, FaBasketballBall, FaPills, FaShoppingCart, FaGamepad, FaHeartbeat, FaMobile } from "react-icons/fa";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Carousel from '../comm/Carousel';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Hero() {
    const megaMenu = ["Women's Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Kitchen",
    "Sports & Outdoors","Medicine","Groceries & Pets",
    "Toys & Games",
    "Beauty & Health",]

    const categories = [
        { name: "Fashion", icon: <FaTshirt /> },
        { name: "Electronics", icon: <FaLaptop /> },
        { name: "Home & Kitchen", icon: <FaHome /> },
        { name: "Sports", icon: <FaBasketballBall /> },
        { name: "Medicine", icon: <FaPills /> },
        { name: "Groceries", icon: <FaShoppingCart /> },
        { name: "Toys & Games", icon: <FaGamepad /> },
        { name: "Health", icon: <FaHeartbeat /> },
        { name: "Mobiles", icon: <FaMobile /> },
      ];

const slides = [
  "https://dummyimage.com/800x420/000/fff",
  "https://dummyimage.com/800x420/000/fff",
  "https://dummyimage.com/800x420/000/fff",
]; 

const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Smooth factor
    requestAnimationFrame(() => {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    });
  };
    





  return (
<div className="lg:h-[30rem]">
  <div className=" container lg:flex mx-auto px-4">
    {/* Sidebar */}
    <div className="h-full lg:block hidden w-1/4 pr-8 border-r-2 border-gray-300">
      <div className="mt-6">
        <ul className="flex flex-col gap-5">
          {/* {megaMenu.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between gap-5 cursor-pointer hover:text-blue-500"
            >
              {item} <MdKeyboardArrowRight />
            </li>
          ))} */}
            <li
              className="flex relative items-center justify-between gap-5 cursor-pointer hover:text-blue-500"
            >
              Fashion <MdKeyboardArrowRight /> 
              <ul className='top-0 -right-10 absolute bg-teal-300'>
                <li className=''>
                    hello
                </li>
                <li className=''>
                    hello
                </li>
                <li className=''>
                    hello
                </li>
                <li className=''>
                    hello
                </li>
              </ul>
            </li>
            <li
              className="flex relative items-center justify-between gap-5 cursor-pointer hover:text-blue-500"
            >
              Fashion <MdKeyboardArrowRight /> 
              <ul className='top-0 -right-10 absolute bg-blue-300'>
                <li className=''>
                    hello1
                </li>
                <li className=''>
                    hello2
                </li>
                <li className=''>
                    hello3
                </li>
                <li className=''>
                    hello4
                </li>
              </ul>
            </li>
        </ul>
      </div>
    </div>

    {/* Carousel */}
    {/* <div className="flex-1 mt-2 lg:pl-4 lg:pt-7 lg:h-[25rem] overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center h-full"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div> */}

      <div className='flex-1 mt-2 lg:pl-4 lg:pt-7 lg:h-[25rem] overflow-hidden'>
        <Carousel>
          {slides.map((item) => (
            <img src={item}/>
          ))}

        </Carousel>
      </div>



    {/* Mobile */}



  </div>
</div>

  )
}

export default Hero