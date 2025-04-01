import React from 'react'
import { LiaLocationArrowSolid } from "react-icons/lia";
import barcode from '../../assets/Qr Code.png'
import store from '../../assets/Frame 718.png'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

function Footer() {
  return (
    <div className='bg-black md:h-100 text-white flex items-center justify-center'>
      <div className=' container mx-auto px-4 md:flex items-start justify-between '>
        <div className='py-4'>
          <h1 className='text-3xl text-center md:text-left pb-4 font-bold'>Exclusive</h1>
          <div className=' flex py-2 flex-col gap-3'>
            <p className='text-2xl text-center md:text-left'>Subscribe</p>
            <div className='flex flex-col gap-2'>
              <p className='text-center md:text-left'>Get 10% off your first order</p>
              <div className=' flex  border-2 border-white items-center justify-evenly rounded p-2'>
                <input type="text" placeholder='Enter your email' className='text-gray-400' />
                  <LiaLocationArrowSolid  className=' rotate-90 text-2xl '/>
              </div>
            </div>
          </div>
        </div>
        <div className='py-4'>
          <h1 className='text-3xl pb-4 text-center md:text-left font-bold'>Support</h1>
          <div className=' flex py-2 flex-col gap-3'>
            <p className='text-center md:text-left'>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
            <p className='text-center md:text-left'>exclusive@gmail.com</p>
            <p className='text-center md:text-left'>+88015-88888-9999</p>
          </div>
        </div>
        <div className='py-4'>
          <h1 className='text-3xl pb-4 font-bold text-center md:text-left'>Account</h1>
          <div className=' flex py-2 flex-col gap-3'>
            <p className='text-center md:text-left'>My Account</p>
            <p className='text-center md:text-left'>Login / Register</p>
            <p className='text-center md:text-left'>Cart</p>
            <p className='text-center md:text-left'>Wishlist</p>
            <p className='text-center md:text-left'>Shop</p>
          </div>
        </div>
        <div className='py-4'>
          <h1 className='text-3xl  pb-4 font-bold text-center md:text-left'>Quick Link</h1>
          <div className=' flex py-2 flex-col gap-3'>
            <p className='text-center md:text-left'>Privacy Policy</p>
            <p className='text-center md:text-left'>Terms Of Use</p>
            <p className='text-center md:text-left'>FAQ</p>
            <p className='text-center md:text-left'>Contact</p>
          </div>
        </div>
        <div className='py-4'>
          <h1 className='text-3xl pb-4 font-bold text-center md:text-left'>Download App</h1>
          <div className=' flex py-2 flex-col gap-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-center md:text-left'>Save $3 with App New User Only</p>
              <div className='flex gap-2 items-center justify-center '>
                <div>
                  <img src={barcode} alt="" />
                </div>
                <div>
                  <img src={store} alt="" />
                </div>
              </div>
              <div className='flex py-2 md:py-0 items-center justify-evenly text-2xl text-white'>
              <TiSocialFacebook />
              <TiSocialPinterest />
              <TiSocialInstagram />
              <TiSocialLinkedin />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer