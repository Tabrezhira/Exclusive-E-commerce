import React from 'react'

function Redbtn({title}) {
  return (
    <button className='bg-red-400 py-2 px-4 rounded text-white' >
      {title ? title : "View All Products"}
    </button>
  )
}

export default Redbtn