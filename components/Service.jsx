import React from 'react'

function Service() {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGray'>We have been working with some amazing clients</p>
        <div className='my-12 flex flex-wrap justify-between items-center gap-4 '>
          <img src = "/src/assets/clogo1.jpeg" className='h-32 w-32 cursor-pointer' alt=''></img>
          <img src = "/src/assets/clogo2.jpeg" className='h-32 w-32 cursor-pointer' alt=''></img>
          <img src = "/src/assets/clogo3.jpeg" className='h-32 w-32 cursor-pointer' alt=''></img>
          <img src = "/src/assets/clogo4.jpeg" className='h-32 w-32 cursor-pointer' alt=''></img>
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
