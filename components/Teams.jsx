/* eslint-disable react/no-unknown-property */
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
    <>
    {/* old start */}
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
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
    {/* old end */}
    {/* new start */}
    <div className="p-10 max-w-screen-lg mx-auto">
    <div className="text-center mb-4">
        {/* <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            THE TEAM
        </p> */}
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Our <span className="text-indigo-600">Team</span>
        </h3>
    </div>
    <div className="sm:grid grid-cols-2 gap-6 my-10">
    {teammember.map((member) => (
        <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10" key={member.id}>
            <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: `url(${member.img})`}}
                title="Woman holding a mug"
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                <div>
                    <a href="#"
                        className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out capitalize">
                        {member.name}
                    </a>
                    <p className="text-sm text-gray-600">
                        {member.desg}
                    </p>
                    <p className="text-gray-500 text-base mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                    <div className="my-4 flex">
                        <a href="#">
                            <svg className="mr-3" width="18px" height="18px" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g data-name="Layer 2">
                                    <g data-name="facebook">
                                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                        <path
                                            d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="#">
                            <svg className="mr-3" width="16px" height="16px" viewBox="0 0 310 310">
                                <g id="XMLID_826_">
                                    <path id="XMLID_827_" d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
                                        c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
                                        c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
                                        C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
                                        c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
                                        c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
                                        c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
                                        c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
                                        c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
                                        c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
                                        c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
                                        C307.394,57.037,305.009,56.486,302.973,57.388z"></path>
                                </g>
                            </svg>
                        </a>
                        {/* <a href="#">
                            <svg width="19px" height="19px" viewBox="0 0 239.04 239.04">
                                <g>
                                    <path style={{ fill: '#FFFFFF' }} d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872
                                        c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118
                                        c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251
                                        c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z"></path>
                                    <path d="M157.588,48.38c44.505,5.934,31.731,46.633,31.731,46.633c4.878-0.814,7.406-1.162,7.406-1.162
                                        c7.982-0.474,17.576-2.152,22.64-11.375c5.465-8.717,1.815-17.048,1.815-17.048c-4.163-0.972-8.116-1.244-10.964-1.244
                                        c-7.572,0-9.592,0.872-9.592,0.872c-2.709,0-5.291,1.195-8.397,2.823c-5.971,3.059-6.252,12.112-6.252,12.112
                                        c-0.308,9.559,2.299,17.712,2.299,17.712c-4.224,1.203-4.86,4.654-4.86,4.654C133.113,108.252,115.569,122.37,112.243,124.132
                                        c-5.177,2.645-11.171,6.458-18.655,8.654c-6.154,1.777-10.895,0.909-10.895,0.909c-3.238-0.226-7.84-4.209-10.837-5.244
                                        c-3.328-1.155-5.631,0.933-5.631,0.933c-1.489,2.934-0.474,5.895-0.474,5.895c0.446,2.49,2.91,2.205,2.91,2.205
                                        c3.564-0.459,5.037-0.164,8.64-2.898c2.994-2.309,3.933-5.151,6.684-6.675c2.872-1.405,5.731-2.572,7.285-4.25
                                        c1.029-0.576,1.771-1.439,1.771-1.439c7.964-5.703,4.949-13.318,4.949-13.318c-0.042-5.748-3.077-9.617-3.077-9.617
                                        c1.299-3.123,4.168-3.484,4.168-3.484C163.727,49.594,157.588,48.38,157.588,48.38z"></path>
                                </g>
                            </svg>
                        </a> */}

<a href="#">
                            <svg width="19px" height="19px" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 239.04 239.04" style={{}}
                                xml:space="preserve">
                                    {/* "enable-background:new 0 0 239.04 239.04;" */}
                                <g>
                                    <path style={{ fill: '#FFFFFF' }} d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872
		c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118
		c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251
		c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z"></path>
                                    <path d="M157.588,48.38c44.505,5.729,31.443,70.219,30.205,101.478c-0.688,17.188-3.758,30.48-21.496,36.438
		c-23.33,7.838-57.706,5.225-81.494,1.742c-15.905-2.292-28.372-7.059-32.772-23.559c-6.967-26.08-4.996-61.373-1.971-87.957
		c0.092-0.504,0.229-0.871,0.458-1.192C50.93,35.547,134.441,45.401,157.588,48.38z"></path>
                                    <path style={{ fill: '#FFFFFF' }} d="M176.059,72.627c0.092-10.955-13.567-14.438-20.901-7.7c-1.971,1.833-2.888,4.629-3.025,7.654
		c0.733,3.896,3.071,7.746,6.096,9.946C165.334,87.523,175.967,80.877,176.059,72.627z"></path>
                                    <path style={{ fill: '#FFFFFF' }}
                                        d="M155.754,93.94c-15.675-23.742-51.06-26.08-70.081-5.042c-12.971,14.346-13.888,38.226-4.125,55.185
		c0.55,0.183,1.054,0.504,1.513,1.054c15.859,17.692,43.176,24.109,62.794,8.067C163.363,138.858,168.496,113.236,155.754,93.94z"></path>
                                    <path d="M93.282,126.483c5.546,15.584,25.255,27.959,40.976,18.334c31.763-19.434-5.546-72.235-31.718-48.814
		C93.282,101.457,89.661,116.261,93.282,126.483z"></path>
                                </g>
                            </svg></a>
                    </div>
                </div>
            </div>
        </div>
))}
        
    </div>
</div>

    {/* new end */}
    </>
  );
}

export default Teams;
