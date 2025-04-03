import React from 'react'
import Header from '../Section/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Section/Footer'

function AuthLayout() {
  return (
    <div className=' flex flex-col min-h-screen'>
    <Header/>
      <main className='flex-1 flex item justify-center'>
          <Outlet/>
      </main>
      <Footer/>
      </div>
  )
}

export default AuthLayout