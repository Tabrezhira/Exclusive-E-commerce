import React from 'react'
import Header from '../Section/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Section/Footer'
import Sidebar from '../comm/Sidebar'

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />

    {/* This will now grow to take up remaining space */}
    <main className="flex-1 py-8 ">
      <div className="container  mx-auto h-full px-4">
        <div className='flex justify-between items-center'>
        <p className='py-4'>Home / My Account</p>
        <p className='py-4'>Welcome! <span className='text-red-400'>Md Rimel</span></p>
        </div>

        <div className="flex gap-4 h-full">
          <div className=" w-1/4 h-full">
            <Sidebar />
          </div>
          <div className=" w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
  )
}

export default Dashboard