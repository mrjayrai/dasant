// /* eslint-disable react/no-unescaped-entities */

// import React from 'react'
// import { Button, Typography } from "@material-tailwind/react";
// import ban1 from "../src/assets/ban1.jpg";
// import ban2 from "../src/assets/ban2.jpg";
// import ban3 from "../src/assets/ban3.jpg";
// import ban4 from "../src/assets/ban4.jpg";
// import ban5 from "../src/assets/ban5.jpg";
// import ban6 from "../src/assets/ban6.jpg";
// import ban7 from "../src/assets/ban7.jpg";

// export default function About1() {
//   return (
//     <div>
//       <header className="mt-[0px] bg-gray900 px-8">
//       <div className="container mx-auto grid h-full min-h-[65vh] w-full pt-[150px] grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
//         <div className="row-start-2 lg:row-auto lg:-mt-40">
//           {/* <Typography
//           placeholder={''}
//             variant="h1"
//             color="red"
//             className="text-3xl !leading-snug"
//           >
//             Who we are?
//           </Typography> */}
//           {/* <Typography
//           placeholder={''}
//             variant="h1"
//             color="blue-gray"
//             className="mb-2 max-w-sm text-xl !leading-snug lg:mb-3 lg:text-3xl"
//           >
//             Making our customer's happy by giving world class service.
//           </Typography> */}
//           <Typography
//           placeholder={''}
//             variant="lead"
//             className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28 text-justify"
//           >
//             {/* We&apos;ve got everything you need to make this school year a
//             smashing success! Whether you&apos;re a student, parent, or
//             educator, we&apos;ve got everything you need. */}
//             Dashantee studio is a film and advertising company
// Our team of experienced professionals specialises in crafting compelling stories through visual
// media. We pride ourselves on delivering quality content that resonates with audiences and
// achieves our client's goals
//           </Typography>
//           <Button placeholder={''} size="lg" color="gray" className='h-10'>
//             Contact Us
//           </Button>
//         </div>
//         {/* <div className="mt-40 grid gap-6 lg:mt-0">
//           <div className="grid grid-cols-4 gap-6">
//             <img
//               width={768}
//               height={768}
//               src={ban1}
//               className="rounded-lg shadow-md"
//               alt="flowers"
//             />
//             <img
//               width={768}
//               height={768}
//               src={ban2}
//               className="-mt-28 rounded-lg shadow-md"
//               alt="flowers"
//             />
//             <img
//               width={768}
//               height={768}
//               src={ban3}
//               className="-mt-14 rounded-lg shadow-md"
//               alt="flowers"
//             />
//             <img
//               width={768}
//               height={768}
//               src={ban4}
//               className="-mt-20 rounded-lg shadow-md"
//               alt="flowers"
//             />
//           </div>
//           <div className="grid grid-cols-4 gap-6">
//             <div></div>
//             <img
//               width={768}
//               height={768}
//               src={ban5}
//               className="-mt-28 rounded-lg shadow-md"
//               alt="flowers"
//             />
//             <img
//               width={768}
//               height={768}
//               src={ban6}
//               className="-mt-14 rounded-lg shadow-md"
//               alt="flowers"
//             />
//             <img
//               width={768}
//               height={768}
//               src={ban7}
//               className="-mt-20 rounded-lg shadow-md"
//               alt="flowers"
//             />
//           </div>
//         </div> */}
//       </div>
//     </header>
//     </div>
//   )
// }

/* eslint-disable react/no-unescaped-entities */

// import React from 'react'
// import { Button, Typography } from "@material-tailwind/react";
// import abo from "../src/assets/abo.png";

// export default function About1() {
//   return (
//     <div>
//       <header className="mt-[0px] bg-gray900 px-8">
//         <div className="container mx-auto grid h-full min-h-[65vh] w-full pt-[150px] grid-cols-1 lg:grid-cols-2 place-items-center gap-y-10">
//           {/* Text section */}
//           <div className="row-start-2 lg:row-auto lg:-mt-40">
//             <Typography
//               variant="lead"
//               className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28 text-justify"
//             >
//               Dashantee studio is a film and advertising company. Our team of
//               experienced professionals specialises in crafting compelling
//               stories through visual media. We pride ourselves on delivering
//               quality content that resonates with audiences and achieves our
//               client's goals.
//             </Typography>
//             <Button size="lg" color="gray" className="h-10">
//               Contact Us
//             </Button>
//           </div>

//           {/* Image section */}
//           <div className="row-start-1 lg:row-auto lg:mt-0">
//             <img
//               width={750}
//               height={700}
//               src={abo}
//               className="rounded-lg "
//               alt="Dashantee Studio"
//             />
//           </div>
//         </div>
//       </header>
//     </div>
//   )
// }

import React from 'react';
import aboutus from "../src/assets/aboutus.png";
import abouts4 from "../src/assets/abouts4.png";
import { Button, Typography } from "@material-tailwind/react";
export default function About1() {
  return (
    <>
    <div className='block'>
    <div className='bg-gray900  text-PrimaryBlack flex justify-center items-center text-center sm:text-[38px] font-bold sm:leading-[50px] sm:px-[230px] sm:py-[20px] font-montserrat max-sm:text-[5px]'>
    Dashantee Studio: Where passion meets precision, delivering impactful film and advertising solutions.</div>
    <div className="sm:grid sm:grid-cols-3 max-sm:gird max-sm:grid-cols-1 bg-gray900">
  {/* First Image */}
  <div className="-mt-7">
    <img
      src={aboutus}
      className="rounded-lg max-sm:hidden " // Tailwind size classes
      alt="Dashantee Studio"
    />
  </div>

  {/* Empty Middle Div (Spacer) */}
  <div className='max-sm:sm:hidden'></div>

  {/* Second Image */}
  <div className="-mt-7">
    <img
      src={abouts4}
      className="rounded-lg w-auto pt-3" // Setting height explicitly, width adjusts automatically
      alt="Dashantee Studio"
    />
  </div>
</div>

<div>
      <header className="mt-[0px] bg-gray900 px-8">
        <div className="container mx-auto grid h-full min-h-[65vh] w-full pt-[150px] grid-cols-1 font-serif place-items-center gap-y-10">
          {/* Text section */}
          <div className="row-start-2 lg:row-auto lg:-mt-40 ">
            <Typography
              variant="lead"
              className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28 text-justify text-3xl leading-[50px] font-quicksand"
            >
              Dashantee studio is a film and advertising company. Our team of
              experienced professionals specialises in crafting compelling
              stories through visual media. We pride ourselves on delivering
              quality content that resonates with audiences and achieves our
              client's goals.
            </Typography>
            <Button size="lg" color="gray" className="h-10">
              Contact Us
            </Button>
          </div>

          {/* Image section */}
          {/* <div className="row-start-1 lg:row-auto lg:mt-0">
            <img
              width={768}
              height={768}
              src={ban1}
              className="rounded-lg shadow-md"
              alt="Dashantee Studio"
            />
          </div> */}
        </div>
      </header>
    </div>
</div>
    </>
  );
}