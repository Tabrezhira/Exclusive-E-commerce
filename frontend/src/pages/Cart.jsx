import React, { useState } from 'react'

function Cart() {
    
    const [cart, setCart] = useState([
        { id: 1, name: "LCD Monitor", price: 650, quantity: 1 },
        { id: 2, name: "H1 Gamepad", price: 550, quantity: 2 },
        
      ]);

      const updateQuantity = (id, newQuantity) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
      };
    
      const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div >
        <div className='px-4 container mx-auto'>
            <div className='py-2'>Home / <span>Cart</span></div>
            <div className='w-full py-4'>
                <table className='w-full  py-4 px-4'>
                    <thead className=' py-4 px-4'>
                        <tr className=' shadow-md rounded '>
                            <th className='py-4'>No</th>
                            <th className='py-4'>Product</th>
                            <th className='py-4'>Price</th>
                            <th className='py-4'>Quantity</th>
                            <th className='py-4'>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className=' w-full'>
                        {cart.map((item) => (
                            <tr key={item.id} className='shadow-md rounded  '>
                                <td className='py-6 text-center align-middle'>{item.id}</td>
                                <td className='py-6 text-center align-middle'>{item.name}</td>
                                <td className='py-6 text-center align-middle'>{item.price}</td>
                                <td className='py-6 text-center align-middle'>
                                    <select value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value)  )}>
                                        {[...Array(10).keys()].map(n => (
                                            <option key={n} value={n + 1} >{n +1} </option>
                                        ))}
                                    </select>
                                </td>
                                <td className='py-6 text-center align-middle'>${item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 <div className='flex items-center justify-between  py-6'>
                    <button className=' border-2 border-gray-300 py-2 px-6'> Return To Shop</button>
                    <button className=' border-2 border-gray-300 py-2 px-6'> Update Cart </button>
                 </div>
                 <div>
                    <div className=' flex flex-col md:flex-row gap-2 md:gap-0 justify-between'>
                        <div className=' gap-4 flex  h-12 justify-start'>
                            <input className=' border-2 py-2 px-6 border-black' type="text" placeholder='Coupon Code'/>
                            <button className='bg-red-400 py-2 border-2 border-red-400 text-white lg:px-6'>Apply Coupon</button>
                        </div>
                        <div className=' w-full  p-4 border-2 flex flex-col items-start md:w-1/2  justify-start'>
                            <p className='pt-2 pb-4'>Cart Total</p>
                            <div className='w-full flex flex-col justify-evenly  gap-5'>
                                <div className='flex py-2 justify-between border-b-2 border-gray-300 '>
                                    <p>Subtotal</p>
                                    <p>{"1750"}</p>
                                </div>
                                <div className='flex py-2 justify-between border-b-2 border-gray-300 '>
                                    <p>Shipping:</p>
                                    <p>Free</p>
                                </div>
                                <div className='flex py-2 justify-between border-b-2 border-gray-300 '>
                                    <p>Total:</p>
                                    <p>{"1750"}</p>
                                </div>
                                <button className='bg-red-400 text-white py-4 mx-6'>Process to checkout</button>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Cart