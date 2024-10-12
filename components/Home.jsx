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
import React from 'react';
import dasant from "../src/assets/dasant.mp4";

export default function Home() {
  return (
    <div className='bg-neutralSilver'>
      <div className='relative'>
        <div className='relative w-full h-[100vh]'>
          <video
            className='absolute inset-0 w-full h-full object-cover'  // Changed to 'object-cover' for full coverage
            autoPlay
            loop
            muted
            playsInline
            preload='auto' // Preload to enhance video loading
            src={dasant}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
