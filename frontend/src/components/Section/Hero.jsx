import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTshirt, FaLaptop, FaHome, FaBasketballBall, FaPills, FaShoppingCart, FaGamepad, FaHeartbeat, FaMobile } from "react-icons/fa";
import { useRef } from "react";
import Carousel from '../comm/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Hero() {
    const megaMenu = ["Women's Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Kitchen",
    "Sports & Outdoors","Medicine","Groceries & Pets",
    "Toys & Games",
    "Beauty & Health",]

    const categories = [
      { name: "Fashion", icon: <FaTshirt />, subcategories: ["Men", "Women", "Kids", "Accessories"] },
      { name: "Electronics", icon: <FaLaptop />, subcategories: ["Laptops", "Mobiles", "Cameras", "Accessories"] },
      { name: "Home & Kitchen", icon: <FaHome />, subcategories: ["Furniture", "Decor", "Appliances", "Cookware"] },
      { name: "Sports", icon: <FaBasketballBall />, subcategories: ["Cricket", "Football", "Gym", "Cycling"] },
      { name: "Medicine", icon: <FaPills />, subcategories: ["Vitamins", "First Aid", "Supplements", "Prescription"] },
      { name: "Groceries", icon: <FaShoppingCart />, subcategories: ["Vegetables", "Fruits", "Dairy", "Snacks"] },
      { name: "Toys & Games", icon: <FaGamepad />, subcategories: ["Board Games", "Puzzles", "Action Figures", "Outdoor"] },
      { name: "Health", icon: <FaHeartbeat />, subcategories: ["Personal Care", "Fitness", "Wellness", "Hygiene"] },
      { name: "Mobiles", icon: <FaMobile />, subcategories: ["Smartphones", "Accessories", "Tablets", "Wearables"] },
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
        {categories.map((category, index) => (
            <li key={index} className="group flex relative items-center justify-between gap-5 cursor-pointer hover:text-blue-500">
              <div className="flex items-center gap-2">
                {category.icon} {category.name}
              </div>
              <MdKeyboardArrowRight />
              {/* Submenu */}
              <ul className="hidden group-hover:block absolute top-0 left-full z-10 bg-gray-200 p-2 shadow-lg w-40">
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex} className="px-4  py-2 hover:bg-gray-300 cursor-pointer">
                    {sub}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Carousel */}
      <div className='flex-1 mt-2 lg:pl-4 lg:pt-7 lg:h-[25rem] overflow-hidden'>
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          {slides.map((item) => (
            <img src={item}/>
          ))}

        </Carousel>
      </div>
    {/* Mobile */}
    <div className="my-4 lg:hidden">
      <Swiper slidesPerView={3} spaceBetween={20} modules={[Pagination]} className="mySwiper">
        {categories.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-24 h-28 flex flex-col items-center justify-between bg-amber-100 rounded-lg shadow-md p-2"
          >
            <div className="text-3xl flex items-center justify-center">{item.icon}</div>
            <span className="text-sm font-medium h-10 flex items-center justify-center text-center">
              {item.name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>



  </div>
</div>

  )
}

export default Hero