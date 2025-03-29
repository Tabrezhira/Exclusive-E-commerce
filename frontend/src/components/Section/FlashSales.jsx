import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from '../comm/ProductCard';

function FlashSales() {
    const products = [
        {
            id: 1,
            img: "https://dummyimage.com/800x420/000/fff",
            name: "Wireless Headphones",
            price: "₹2,999",
            discountPrice: "₹1,999",
            star: "4.5",
            review: "Excellent sound quality and battery life!"
        },
        {
            id: 2,
            img: "https://dummyimage.com/600x400/000/fff",
            name: "Smartwatch Pro",
            price: "₹5,499",
            discountPrice: "₹4,299",
            star: "4.2",
            review: "Feature-packed and stylish!"
        },
        {
            id: 3,
            img: "https://dummyimage.com/700x400/000/fff",
            name: "Gaming Mouse",
            price: "₹1,499",
            discountPrice: "₹999",
            star: "4.7",
            review: "Great for gaming and productivity."
        },
        {
            id: 4,
            img: "https://dummyimage.com/750x420/000/fff",
            name: "Mechanical Keyboard",
            price: "₹3,999",
            discountPrice: "₹3,199",
            star: "4.6",
            review: "Perfect key response and RGB lighting."
        },
        {
            id: 5,
            img: "https://dummyimage.com/680x420/000/fff",
            name: "Bluetooth Speaker",
            price: "₹2,799",
            discountPrice: "₹2,199",
            star: "4.4",
            review: "Superb sound quality with deep bass."
        },
        {
            id: 6,
            img: "https://dummyimage.com/720x420/000/fff",
            name: "Power Bank 20,000mAh",
            price: "₹2,499",
            discountPrice: "₹1,899",
            star: "4.3",
            review: "Fast charging and high capacity!"
        },
        {
            id: 7,
            img: "https://dummyimage.com/760x420/000/fff",
            name: "Wireless Earbuds",
            price: "₹3,299",
            discountPrice: "₹2,499",
            star: "4.5",
            review: "Comfortable fit and crystal-clear sound."
        },
        {
            id: 8,
            img: "https://dummyimage.com/650x420/000/fff",
            name: "4K Action Camera",
            price: "₹8,999",
            discountPrice: "₹7,499",
            star: "4.6",
            review: "Stunning video quality and stabilization."
        },
        {
            id: 9,
            img: "https://dummyimage.com/780x420/000/fff",
            name: "Portable Laptop Stand",
            price: "₹1,199",
            discountPrice: "₹899",
            star: "4.2",
            review: "Ergonomic design and easy to carry."
        },
        {
            id: 10,
            img: "https://dummyimage.com/800x450/000/fff",
            name: "Noise Cancelling Headphones",
            price: "₹6,999",
            discountPrice: "₹5,499",
            star: "4.7",
            review: "Immersive audio with active noise cancellation."
        }
    ];
  return (
    <div className=' '>
        <div className=' container mx-auto px-4 '>
            <div className='my-2 flex gap-2  items-center'>
                <div className='h-10 w-6 bg-red-500 rounded-md '></div>
                <h1 className='text-red-500 font-bold text-lx'>Today's</h1>
            </div>
            <div className=' flex items-center justify-between'>
                <div className='flex justify-start items-end gap-10'>
                    <h1 className='text-3xl font-bold'>Flash Sales</h1>
                    <div className=' w-60 h-12'> 
                        <div className='flex justify-between items-end'>
                        <div className='flex flex-col justify-center'>
                                <p className='text-xs'>Days</p>
                                <div className='flex gap-2 justify-between'>
                                <p className='text-2xl font-bold'>03</p>
                                <span className='text-red-500 text-2xl'>:</span>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center'>
                                <p className='text-xs'>Hours</p>
                                <div className='flex gap-2 justify-between'>
                                <p className='text-2xl font-bold'>23</p>
                                <span className='text-red-500 text-2xl'>:</span>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center'>
                                <p className='text-xs'>Minutes</p>
                                <div className='flex gap-2 justify-between'>
                                <p className='text-2xl font-bold'>19</p>
                                <span className='text-red-500 text-2xl'>:</span>
                                </div>

                            </div>

                            <div className='flex flex-col justify-center'>
                                <p className='text-xs'>Seconds</p>
                                <p className='text-2xl font-bold'>56</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <button className='bg-gray-300 h-10 w-10 flex items-center justify-around rounded-full'><FaArrowLeftLong /></button>
                    <button className='bg-gray-300 h-10 w-10 flex items-center justify-around rounded-full'><FaArrowRightLong /></button>
                </div>
            </div>
            <div>
                <ProductCard>
                    
                </ProductCard>
            </div>
        </div>   
    </div>
  )
}

export default FlashSales 