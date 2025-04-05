import React from 'react'

function Sidebar() {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-xl font-bold py-2'>Manage My Account</p>
      <div className='flex px-4 flex-col gap-3'>
        <p>My Profile</p>
        <p>Address Book</p>
        <p>My Payment Options</p>
      </div>
      <p className='text-xl font-bold py-2'>My Orders</p>
      <div className='flex px-4 flex-col gap-3'>
        <p>My Returns</p>
        <p>My Cancellations</p>
        <p>My Payment Options</p>
      </div>
      <p className='text-xl font-bold py-2'>My WishList</p>

    </div>
  )
}

export default Sidebar