import React from 'react'
import dasantmob from '../src/assets/dasantmob.mp4';

export default function Videomob() {
  return (
    <div className='bg-neutralSilver relative z-9999 mt-[32px] h-[300px] sm:hidden' style={{ transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' }}>
      <div className=' pt-16 relative w-full '> {/* Changed to h-screen for full height */}
      {/* h-screen overflow-hidden */}
        <video
          className='absolute inset-0 w-full h-fit object-contain sm:object-cover ' // Use object-contain for smaller screens, object-cover for larger screens
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
          src={dasantmob}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
