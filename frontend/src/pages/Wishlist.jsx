import React from 'react'
import WhishlistItem from '../components/Section/WhishlistItem'

function Wishlist() {

  return (
    <div>
        <WhishlistItem  title={'Wishlist'} btnName={'a'} className='py-4' />
        <WhishlistItem  title={'Just For You'} btnName={'a'} className='py-4'/>
    </div>
  )
}

export default Wishlist