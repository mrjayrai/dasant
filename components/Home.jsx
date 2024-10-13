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
// import React from 'react';
// import dasant from "../src/assets/dasant.mp4";
// import dasantmob from '../src/assets/dasantmob.mp4';

// export default function Home() {
//   return (
//     <>
//     <div className='bg-neutralSilver relative sm:hidden'>
//       <div className='relative w-full mb-16'> {/* Changed to h-screen for full height */}
//       {/* h-screen overflow-hidden */}
//         <video
//           className='absolute inset-0 w-full h-fit object-contain sm:object-cover z-0' // Use object-contain for smaller screens, object-cover for larger screens
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload='auto'
//           src={dasantmob}
//         >
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//          <div className='bg-neutralSilver max-sm:hidden'>
//        <div className=''>
//          <div className='relative w-full h-[calc(100vh-4rem)] overflow-hidden'>
//          <video
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
//     </>
//   );
// }


import React from 'react';
import dasant from "../src/assets/dasant.mp4";
import dasantmob from '../src/assets/dasantmob.mp4';

export default function Home() {
  return (
    <>
      {/* Mobile Video */}
      <div className='bg-neutralSilver relative sm:hidden'>
        <div className='relative w-full h-screen'> {/* Use h-screen for full height */}
          <video
            className='absolute inset-0 w-full h-full object-contain'
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

      {/* Desktop Video */}
      <div className='bg-neutralSilver max-sm:hidden'>
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
    </>
  );
}

