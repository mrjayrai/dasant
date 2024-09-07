import React from 'react';
import homeintro1 from "../src/assets/homeintro1.mp4";

export default function Home() {
  return (
    <div className='bg-neutralSilver'>
      <div className=' pt-24'> {/* Add padding at the top to push content below the navbar */}
        {/* Embedded responsive video */}
        <div className='relative w-full'> 
        {/* style={{ paddingBottom: '56.25%' }} */}
          <video
            className='w-full h-full object-cover'
            autoPlay
            loop
            muted
            playsInline
            src={homeintro1}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
