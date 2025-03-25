import React from 'react'
import Header from '../Section/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Section/Footer'

function UserLayout() {
  return (
    <>
  <Header/>
    {/* <main>
        <Outlet/>
    </main>
    <Footer/> */}
    </>
  )
}

export default UserLayout