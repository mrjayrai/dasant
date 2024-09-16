import React from 'react';
import homeintro2 from "../src/assets/homeintro2.mp4";

export default function Home() {
  return (
    <div className='bg-neutralSilver'>
      <div className='pt-16 relative'>
        <div className='relative w-full h-[calc(100vh-4rem)] overflow-hidden'>
          <video
            className='absolute inset-0 w-full h-full object-cover'
            autoPlay
            loop
            muted
            playsInline
            src={homeintro2}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
