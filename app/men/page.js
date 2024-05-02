import React from 'react'
import Shirt from './components/Shirt'
const page = () => {
  return (
    <div>
        <Shirt />
        <div className='py-4'>
        <Shirt />
        </div>
  
    </div>
  )
}

export default page