import React from 'react';
import homeintro2 from "../src/assets/homeintro2.mp4";

export default function Home() {
  return (
    <div className='bg-neutralSilver'>
      <div className='pt-16 relative'>
        <div className='relative w-full h-[500px] md:h-[700px]'>
          <video
            className='w-full h-full object-cover'
            autoPlay
            loop
            muted
            playsInline
            src={homeintro2}
          >
            Your browser does not support the video tag.
          </video>
          <div className='absolute top-1/4  left-1/2 sm:left-1/4 md:left-1/4 lg:left-1/4 xl:left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center'>
            <div className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center'>
              Welcome to Dashantee Studio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
