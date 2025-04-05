import React from 'react'

function MyProfile() {
  return (
    <div className='  shadow-md rounded p-4'>
        <h1>Edit Your Profile</h1>
        <div className='py-4'>
            <form  className='flex flex-col gap-4' action="">
                <div className='flex gap-2 '>
                <div className='flex w-1/2 flex-col'>
                <label className='py-2' htmlFor="">First Name</label>
                <input className='py-2 flex-1 rounded px-8 bg-gray-200' type="text" placeholder='Md' name="" id="" />
                </div>
                <div className='flex w-1/2 flex-col'>
                <label className='py-2' htmlFor="">Last Name</label>
                <input className='py-2 flex-1 rounded px-8 bg-gray-200' type="text" placeholder='Rimel' name="" id="" />
                </div>
                </div>
                <div className='flex gap-2 '>
                <div className='flex w-1/2 flex-col'>
                <label className='py-2' htmlFor="">Email</label>
                <input className='py-2 flex-1 rounded px-8 bg-gray-200' type="text" placeholder='rimel1111@gmail.com' name="" id="" />
                </div>
                <div className='flex w-1/2 flex-col'>
                <label className='py-2' htmlFor="">Address</label>
                <input className='py-2 flex-1 rounded px-8 bg-gray-200' type="text" placeholder='Kingston, 5236, United State' name="" id="" />
                </div>
                </div>
                <div className='flex gap-2 '>
                <div className='flex w-full gap-2 flex-col'>
                <label className='py-2' htmlFor="">Password Changes</label>
                <input className='py-2 flex-1 rounded px-8 bg-gray-200' type="text" placeholder='Current Passwod' name="" id="" />
                <input className='py-2 flex-1 rounded px-8 bg-gray-200' type="text" placeholder='New Passwod' name="" id="" />
                <input className='py-2 flex-1 rounded px-8 bg-gray-200' type="text" placeholder='Confirm New Passwod' name="" id="" />
                </div>
                </div>
                <div className='flex items-center justify-end gap-4'>
                    <p className='text-xl'>Cancel</p>
                    <button className='bg-red-500 py-3 px-6'>Save Changes</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default MyProfile