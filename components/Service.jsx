import React from 'react'
import clogo1 from "../src/assets/clogo1.jpeg";
import clogo2 from "../src/assets/clogo2.jpeg";
import clogo3 from "../src/assets/clogo3.jpeg";
import clogo4 from "../src/assets/clogo4.jpeg";


function Service() {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGray'>We have been working with some amazing clients</p>
        <div className='my-12 flex flex-wrap justify-between items-center gap-4 '>
          <img src ={clogo1} className='h-32 w-32 cursor-pointer' alt=''></img>
          <img src ={clogo2}  className='h-32 w-32 cursor-pointer' alt=''></img>
          <img src = {clogo3} className='h-32 w-32 cursor-pointer' alt=''></img>
          <img src ={clogo4} className='h-32 w-32 cursor-pointer' alt=''></img>
        </div>
      </div>
      <div className='text-center my-8'>
      <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Services</h2>
      <p className='text-neutralGray'>We provide a large variety of services</p>
      </div>
    </div>
  )
}

export default Service
