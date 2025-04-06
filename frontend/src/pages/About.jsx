
import about from '../assets/Side Image.png'
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import Features from '../components/Section/features';
function About() {
    const teamMembers = [
        {
          name: 'Tom Cruise',
          title: 'Founder & Chairman',
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
          name: 'Emma Watson',
          title: 'Managing Director',
          image: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
          name: 'Will Smith',
          title: 'Product Designer',
          image: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
          name: 'Scarlett Johansson',
          title: 'Marketing Lead',
          image: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        {
          name: 'Chris Hemsworth',
          title: 'CTO',
          image: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
      ];
  return (
    <div className='py-4  container px-4 mx-auto'>
        <p>Home / About</p>
        <div className=' md:flex items-center py-2'>
            <div className='md:w-1/2 p-4'>
                <h1 className='text-2xl font-bold pb-4 '>Our Story</h1>
                <p className='pb-4'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className='flex md:w-1/2'><img src={about} alt="" /></div>
        </div>
        <div className='flex flex-col md:flex-row py-8 gap-2 justify-between'>
        <div className='flex my-2 md:my-0 border-2 border-gray-300 flex-col  items-center py-6 md:p-4 justify-center'>
                <div className=' bg-gray-400 h-20 w-20 flex items-center justify-center rounded-full'>
                    <div className=' bg-black h-16 w-16  rounded-full flex items-center justify-center text-5xl text-white'>
                        < CiDeliveryTruck />
                    </div>
                </div>
                <p className='font-black text-center text-xl pt-4'>FREE AND FAST DELIVERY</p>
                <p className='font-light text-center pt-2 '>Free delivery for all orders </p>
            </div>
            <div className='flex my-2 md:my-0  border-gray-300 border-2 flex-col  items-center py-6 md:p-4   justify-center'>
                <div className=' bg-gray-400 h-20 w-20 flex items-center justify-center rounded-full'>
                    <div className=' bg-black h-16 w-16  rounded-full flex items-center justify-center text-5xl text-white'>
                    <RiCustomerService2Fill />
                    </div>
                </div>
                <p className='font-black  text-center text-xl pt-4'>24/7 CUSTOMER SERVICE</p>
                <p className='font-light text-center pt-2 '>Friendly 24/7 customer support</p>
            </div>
            <div className='flex my-2 md:my-0 border-2 border-gray-300 flex-col  items-center py-6 md:p-4  justify-center'>
                <div className=' bg-gray-400  h-20 w-20 flex items-center justify-center rounded-full'>
                    <div className=' bg-black h-16 w-16  rounded-full flex items-center justify-center text-5xl text-white'>
                    <AiOutlineSafety />
                    </div>
                </div>
                <p className='font-black text-center text-xl pt-4'>MONEY BACK GUARANTEE</p>
                <p className='font-light pt-2 text-center '>We reurn money within 30 days</p>
            </div>
            <div className='flex my-2 md:my-0 border-2 border-gray-300 flex-col  items-center py-6 md:p-4  justify-center'>
                <div className=' bg-gray-400 h-20 w-20 flex items-center justify-center rounded-full'>
                    <div className=' bg-black h-16 w-16  rounded-full flex items-center justify-center text-5xl text-white'>
                    <AiOutlineSafety />
                    </div>
                </div>
                <p className='font-black text-center text-xl pt-4'>MONEY BACK GUARANTEE</p>
                <p className='font-light pt-2 text-center'>We reurn money within 30 days</p>
            </div>
        </div>
        <div className="max-w-6xl mx-auto m-4 px-4 py-16">
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                }}
            >
                {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                    <div className="flex mb-12 flex-col items-center text-center space-y-4 bg-white m-2 p-6 rounded-xl shadow-md">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-30 object-cover rounded-md"
                    />
                    <div>
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.title}</p>
                    </div>
                    <div className="flex space-x-4 text-gray-600">
                        <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                        <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <Features/>
        
    </div>
  )
}

export default About