import React from 'react';
import manik from "../src/assets/manik.jpg";
import nitin from "../src/assets/nitin.jpg";
import prab from "../src/assets/prab.jpg";
import pri from "../src/assets/pri.jpg";
import rahul from "../src/assets/rahul.jpg";
import team4 from "../src/assets/team4.jpg";

function Teams() {
  const teammember = [
    { id: 6, name: 'nitin gaikwad ', img: nitin, desg: 'Founder & Director ' },
    { id: 3, name: 'Rahul waghmare ', img: rahul, desg: 'Editor & VFX Head' },
    { id: 1, name: 'Priypal Dashantee', img: pri, desg: 'Promotion Head' },
    { id: 4, name: 'Ram Bendrikar', img: team4, desg: 'Writer & Director' },
    { id: 5, name: 'Manik Bhalerao', img: manik, desg: 'Production Head' },
    // { id: 2, name: 'Prabhakar Mathapati', img: prab, desg: 'Actor and Lyricist' },
  ];

  return (
    <div className='bg-gray900 pt-2'>
      <div className="font-[sans-serif]">
        <div className="max-w-2xl mx-auto text-center ">
          <h2 className="text-gray-800 text-4xl font-extrabold">Meet our team</h2>
          <p className="text-gray-800 text-sm mt-4 leading-relaxed">Meet our team of professionals to serve you.</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-16 max-w-5xl max-lg:max-w-3xl max-md:max-w-xl mx-auto">
  {teammember.map((member) => (
    <div key={member.id} className="p-5 m-5 shadow-lg rounded-lg bg-white max-w-2xl  cursor-pointer ">
      <img
        src={member.img}
        alt={member.name}
        className="w-52 h-52 rounded-full inline-block" // Increased image size
      />

      <div className="py-6">
        <h4 className="text-gray-800 text-lg font-bold capitalize">{member.name}</h4> {/* Increased font size */}
        <p className="text-gray-800 text-sm mt-2">{member.desg}</p> {/* Slightly larger font size */}

        {/* <div className="space-x-4 mt-6">
          <button
            type="button"
            className="w-8 h-8 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 155.139 155.139">
              <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" />
            </svg>
          </button>
          <button
            type="button"
            className="w-8 h-8 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 512 512">
              <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
            </svg>
          </button>
          <button
            type="button"
            className="w-8 h-8 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="#333" viewBox="0 0 24 24">
              <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z" />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}

export default Teams;
