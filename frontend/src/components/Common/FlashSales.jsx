import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdownDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
      if (distance < 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: "$120", oldPrice: "$160", discount: "-40%", image: "https://dummyimage.com/200x150" },
    { id: 2, name: "AK-900 Wired Keyboard", price: "$180", oldPrice: "$200", discount: "-25%", image: "https://dummyimage.com/200x150" },
    { id: 3, name: "IPS LCD Gaming Monitor", price: "$370", oldPrice: "$400", discount: "-32%", image: "https://dummyimage.com/200x150" },
    { id: 4, name: "S-Series Comfort Chair", price: "$375", oldPrice: "$400", discount: "-25%", image: "https://dummyimage.com/200x150" }
  ];

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Flash Sales</h2>
        <div className="flex gap-2">
          <span>{timeLeft.days} Days</span>
          <span>{timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}</span>
        </div>
      </div>
      <Swiper spaceBetween={20} slidesPerView={1} navigation modules={[Navigation]} breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}>
        {products.map((product) => (
          <SwiperSlide key={product.id} className="p-4 border rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <p className="text-sm mt-2">{product.name}</p>
            <p className="text-lg font-bold">{product.price} <span className="line-through text-gray-400">{product.oldPrice}</span></p>
            <button className="mt-2 w-full bg-black text-white p-2 rounded-md">Add To Cart</button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-4">
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg">View All Products</button>
      </div>
    </div>
  );
};

export default FlashSales;
