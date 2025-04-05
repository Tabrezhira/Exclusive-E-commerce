import React, { useState } from 'react'
import spicker from '../assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'

function Checkout() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
        <div className=' container mx-auto px-4 py-4'>
            <p>Account / MyAccount / Product / View Cart / <span>Checkout</span></p>
            <div className='md:flex gap-4'>
                 <div className='md:w-1/2'>
                    <h1 className='pt-4 text-2xl font-bold'>Billing Details</h1>
                    <form  className='w-full  my-6' action="">
                    <label className='text-gray-400 ' for="name">First Name</label><br /> 
                    <input className='bg-gray-300 w-full py-2 mt-2 ' type="text" id="name" name="name" required /><br /><br />   
                    <label className='text-gray-400 ' for="name">Company Name</label><br /> 
                    <input className='bg-gray-300 w-full py-2 mt-2 ' type="text" id="name" name="name" required /><br /><br /> 
                    <label className='text-gray-400 ' for="name">Street Address*</label><br /> 
                    <input className='bg-gray-300 w-full py-2 mt-2 ' type="text" id="name" name="name" required /><br /><br /> 
                    <label className='text-gray-400 ' for="name">Apartment, floor, etc. (optional)</label><br /> 
                    <input className='bg-gray-300 w-full py-2 mt-2 ' type="text" id="name" name="name" required /><br /><br /> 
                    <label className='text-gray-400 ' for="name">Town/City*</label><br /> 
                    <input className='bg-gray-300 w-full py-2 mt-2 ' type="text" id="name" name="name" required /><br /><br /> 
                    <label className='text-gray-400 ' for="name">Phone Number*</label><br /> 
                    <input className='bg-gray-300 w-full py-2 mt-2 ' type="text" id="name" name="name" required /><br /><br />  
                    <label className='text-gray-400 ' for="name">Email Address*</label><br /> 
                    <input className='bg-gray-300 w-full py-2 mt-2 ' type="text" id="name" name="name" required /><br /><br /> 
                    <input className='bg-red-500 text-white mr-2' type="checkbox" id="coding" name="interests" value="Coding"/>
                    <label for="coding">Save this information for faster check-out next time</label><br />
                    </form>

                </div>
                <div className='md:w-1/2 py-20 flex flex-col gap-4 px-8 '>
                    <div className='flex justify-between'>
                      <div className='flex items-center gap-2 '>
                      <div>
                        <img className='h-10' src={spicker} alt="speacker" />
                      </div>
                      <h1>LCD Monitor</h1>
                      </div>
                      <div>$650</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='flex items-center gap-2 '>
                      <div>
                        <img className='h-10' src={spicker} alt="speacker" />
                      </div>
                      <h1>LCD Monitor</h1>
                      </div>
                      <div>$650</div>
                    </div>
                    <div className='flex justify-between py-2 border-b-1 border-gray-300'>
                      <div className='flex items-center gap-2 '>
                      <h1>Subtotal:</h1>
                      </div>
                      <div>$1750</div>
                    </div>
                    <div className='flex justify-between py-2 border-b-1 border-gray-300'>
                      <div className='flex items-center gap-2 '>
                      <h1>Shipping:</h1>
                      </div>
                      <div>Free</div>
                    </div>
                    <div className='flex justify-between py-2 border-b-1 border-gray-300'>
                      <div className='flex items-center gap-2 '>
                      <h1>Total:</h1>
                      </div>
                      <div>$1750</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <label>
                        <input
                          type="radio"
                          value="option1"
                          checked={selectedOption === "option1"}
                          onChange={handleChange}
                        />
                          {' '} Bank
                      </label>

                      <label>
                        <input
                          type="radio"
                          value="option2"
                          checked={selectedOption === "option2"}
                          onChange={handleChange}
                        />
                        {' '} Cash on delivery
                      </label>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2'>
                        <div className=' border-2 border-gray-400 py-1 px-4'>
                        <input type="text" placeholder='Coupon Code' />
                      </div>  
                      <button className='bg-red-400 py-1 text-white px-4'> Apply Coupon</button>
                        </div>
                        <button className='bg-red-400 py-2 text-white px-4'>Place Order</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout