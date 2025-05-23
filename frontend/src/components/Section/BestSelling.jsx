import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from '../comm/ProductCard';
import Redbtn from '../comm/Redbtn' 


const products = [
    {
        id: 1,
        img: "https://dummyimage.com/800x420/000/fff",
        name: "Wireless Headphones",
        price: "₹2,999",
        discountPrice: "₹1,999",
        star: 5,
        review: "28"
    },
    {
        id: 2,
        img: "https://dummyimage.com/600x400/000/fff",
        name: "Smartwatch Pro",
        price: "₹5,499",
        discountPrice: "₹4,299",
        star: 4,
        review: "99"
    },
    {
        id: 3,
        img: "https://dummyimage.com/700x400/000/fff",
        name: "Gaming Mouse",
        price: "₹1,499",
        discountPrice: "₹999",
        star: 4,
        review: "1"
    },
    {
        id: 4,
        img: "https://dummyimage.com/750x420/000/fff",
        name: "Mechanical Keyboard",
        price: "₹3,999",
        discountPrice: "₹3,199",
        star: 4,
        review: "110"
    },
    {
        id: 5,
        img: "https://dummyimage.com/680x420/000/fff",
        name: "Bluetooth Speaker",
        price: "₹2,799",
        discountPrice: "₹2,199",
        star: 4,
        review: "999"
    },
    {
        id: 6,
        img: "https://dummyimage.com/720x420/000/fff",
        name: "Power Bank 20,000mAh",
        price: "₹2,499",
        discountPrice: "₹1,899",
        star: 3,
        review: "1"
    },
    {
        id: 7,
        img: "https://dummyimage.com/760x420/000/fff",
        name: "Wireless Earbuds",
        price: "₹3,299",
        discountPrice: "₹2,499",
        star: 5,
        review: "55"
    },
    {
        id: 8,
        img: "https://dummyimage.com/650x420/000/fff",
        name: "4K Action Camera",
        price: "₹8,999",
        discountPrice: "₹7,499",
        star: 4,
        review: "48"
    },
    {
        id: 9,
        img: "https://dummyimage.com/780x420/000/fff",
        name: "Portable Laptop Stand",
        price: "₹1,199",
        discountPrice: "₹899",
        star: 4,
        review: "77"
    },
    {
        id: 10,
        img: "https://dummyimage.com/800x450/000/fff",
        name: "Noise Cancelling Headphones",
        price: "₹6,999",
        discountPrice: "₹5,499",
        star: 4,
        review: "85"
    }
];

function BestSelling() {
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
  return (
    <div className='mt-4 '>
    <div className=' container mx-auto pb-6  px-4 overflow-x-hidden '>
        <div className='my-2 flex gap-2  items-center'>
            <div className='h-10 w-6 bg-red-500 rounded-md '></div>
            <h1 className='text-red-500 font-bold text-lx'>This Month</h1>
        </div>
        <div className=' flex items-center justify-between'>
            <div className=' justify-center pt-4 w-full items-center  md:flex md:justify-start md:items-end gap-10'>
                <h1 className='text-3xl text-center  font-bold'>Best Selling Products</h1>
            </div>
            <div className=' hidden md:flex items-center w-40'>
                <Redbtn title={"View All"}/>
            </div>
        </div>
        <div  ref={scrollRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUpOrLeave} onMouseLeave={handleMouseUpOrLeave}
        className='flex overflow-x-scroll  py-2 px-1 snap-x snap-mandatory  md:justify-center scrollbar-hide my-6 gap-4 md:gap-9 relative'>
            {products.slice(0, 4).map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>

        <div className='flex md:hidden justify-center items-center' >
                <Redbtn/>
        </div>

    </div>   
</div>
  )
}

export default BestSelling