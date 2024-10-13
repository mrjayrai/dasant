// import React from 'react';
// import dasant from "../src/assets/dasant.mp4";

// export default function Home() {
//   return (
//     <div className='bg-neutralSilver'>
//       <div className='pt-16 relative'>
//         <div className='relative w-full h-[calc(100vh-4rem)] overflow-hidden'>
//           <video
//             className='absolute inset-0 w-full h-full object-cover'
//             autoPlay
//             loop
//             muted
//             playsInline
//             src={dasant}
//           >
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     </div>
    
//   );
// }

////// desktop ^
import React, { useEffect, useState } from 'react';
import dasant from "../src/assets/dasant.mp4";
import dasantmob from '../src/assets/dasantmob.mp4';
import Videodesk from './Videodesk';
import Videomob from './Videomob';

export default function Home() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update width on window resize
  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    // Clean up the event listener on component unmount
    console.log(windowWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
    
  }, []);

  return (
    <>
    {windowWidth>640?<Videodesk/>:<Videomob/>}
    {/* {windowWidth>640?null:<Videomob/>} */}
    </>
  );
}




