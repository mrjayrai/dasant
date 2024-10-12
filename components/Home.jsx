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
      <div className='pt-0 relative'>
        <div className='relative w-full h-screen'>
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
  );
}

