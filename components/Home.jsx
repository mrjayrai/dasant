import React from 'react';
import homeintro2 from "../src/assets/homeintro2.mp4";

export default function Home() {
  return (
    <div className='bg-neutralSilver'>
      <div className='pt-16 relative'>
        <div className='relative w-full'>
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
          <div className='absolute  top-[120px] left-[40px] flex items-center justify-center'>
            <div className='text-white text-[60px] font-bold'>
              Welcome to Dashantee Studio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
