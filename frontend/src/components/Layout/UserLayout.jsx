import React from 'react'
import Header from '../Section/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Section/Footer'

function UserLayout() {
  return (
    <div className=' flex flex-col min-h-screen'>
  <Header/>
    <main className='flex-1'>
        <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default UserLayout