import React from 'react'
import { useState } from "react";
import { Search, Menu, X, ChevronRight, ShoppingCart, Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const categories = [
  "Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle",
  "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
];

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col ">

    {/* Responsive Sidebar & Main Content */}
    <div className="flex flex-1">
      {/* Sidebar */}
      <div className={`fixed inset-0 bg-white p-4 w-64 shadow-md transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:w-1/4 transition-transform duration-300 ease-in-out`}>
        <ul className="space-y-4 text-gray-700">
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between items-center hover:text-black cursor-pointer">
              {category} <ChevronRight className="w-4 h-4" />
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content with Slider */}
      <div className="w-full md:w-3/4 p-4">
        <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="w-full">
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-red-300 text-white p-8 flex flex-col md:flex-row items-center justify-center">
                <div>
                  <p className="text-sm">iPhone 14 Series</p>
                  <h2 className="text-3xl font-bold">Up to 10% off Voucher</h2>
                  <button className="mt-4 px-4 py-2 bg-white text-black rounded-md">Shop Now →</button>
                </div>
                <img src={`https://dummyimage.com/600x400/000/fff&text=Slide+${index + 1}`} alt="Slide" className="w-1/2 mt-4 md:mt-0" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  </div>

  )
}

export default Hero