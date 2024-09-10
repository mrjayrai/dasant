import React from 'react'
import clogo1 from "../src/assets/clogo1.jpeg";
import clogo2 from "../src/assets/clogo2.jpeg";
import clogo3 from "../src/assets/clogo3.jpeg";
import clogo4 from "../src/assets/clogo4.jpeg";
import pcampaign from "../src/assets/pcampaign.png";
import sound from "../src/assets/sound.png";
import color from "../src/assets/color.png";
import editing from "../src/assets/editing.png";
import post from "../src/assets/post.png";
import script from "../src/assets/script.png";
import ads from "../src/assets/ads.png";
import visual from "../src/assets/visual.png";

function Service() {
  const serviceprovided = [
    {id:4,title:"Film Production",desc:"Lorem ipsum odor amet, consectetuer adipiscing elit. Vitae facilisis mollis maecenas semper litora ligula venenatis mus suspendisse?"
      ,image:post
    },
    {id:1,title:"Post-Production",desc:"Lorem ipsum odor amet, consectetuer adipiscing elit. Vitae facilisis mollis maecenas semper litora ligula venenatis mus suspendisse?"
      ,image:visual
    },
    {id:2,title:"Advertising",desc:"Lorem ipsum odor amet, consectetuer adipiscing elit. Vitae facilisis mollis maecenas semper litora ligula venenatis mus suspendisse?"
      ,image:ads
    },
    {id:3,title:"creative   development",desc:"Lorem ipsum odor amet, consectetuer adipiscing elit. Vitae facilisis mollis maecenas semper litora ligula venenatis mus suspendisse?"
      ,image:script
    },
  ];
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGray'>We have been working with some amazing clients</p>
        <div className='my-12 flex flex-wrap justify-between items-center gap-2 '>
          <img src ={clogo1} className='h-32 w-32 cursor-pointer' alt=''></img>
          <img src ={clogo2}  className='h-32 w-32 cursor-pointer' alt=''></img>
          <img src = {clogo3} className='h-32 w-32 cursor-pointer' alt=''></img>
          <img src ={clogo4} className='h-32 w-32 cursor-pointer' alt=''></img>
        </div>
      </div>
      <div className='text-center mt-20  mx-auto'>
      <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Services</h2>
      <p className='text-neutralGray'>We provide a large variety of services</p>
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mx-auto gap-12'>
        {
          serviceprovided.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-t-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
            <div className=''>
              <div className='bg-[#daf4dd] h-20 w-20 mx-auto rounded-tl-3xl rounded-br-3xl flex justify-center items-center mb-4'><img src={service.image} alt='' className='h-16 w-16'></img></div>
              <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2 capitalize'>{service.title}</h4>
              <p className='text-sm text-neutralGray text-justify'>{service.desc}</p>
            </div>
          </div>)
        }
      </div>
      </div>
    </div>
  )
}

export default Service



