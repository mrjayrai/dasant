import React from 'react'

import dasant from "../src/assets/dasant.mp4";
function Videodesk() {
  return (
    <div className='bg-neutralSilver mt-16 max-sm:hidden'>
       <div className=''>
         <div className='relative w-full h-[calc(100vh-4rem)] overflow-hidden'>
         <video
            className='absolute inset-0 w-full h-full object-cover'
            autoPlay
            loop
            muted
            playsInline
            src={dasant}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Videodesk
