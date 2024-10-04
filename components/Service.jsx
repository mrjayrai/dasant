import React from "react";
import pcampaign from "../src/assets/pcampaign.png";
import sound from "../src/assets/sound.png";
import color from "../src/assets/color.png";
import editing from "../src/assets/editing.png";
import post from "../src/assets/post.png";
import script from "../src/assets/script.png";
import ads from "../src/assets/ads.png";
import visual from "../src/assets/visual.png";
import bg5 from "../src/assets/bg5.png";
import bg10 from "../src/assets/bg10.png";
import bg3 from "../src/assets/bg3.png";
import bg6 from "../src/assets/bg6.png";
import bg14 from "../src/assets/bg14.png";
import bg7 from "../src/assets/bg7.png";
import bg12 from "../src/assets/bg12.png";
import bg1 from "../src/assets/bg1.png";
import bg13 from "../src/assets/bg13.png";
import bg11 from "../src/assets/bg11.png";
import { useNavigate } from "react-router-dom";
// import Client from "./Client";

function Service() {
  const navigate = useNavigate();

  const handleCardClick = (service) => {
    navigate(`/service/${service.title}`, { state: { service } });
  };

  const serviceprovided = [
    {
      id: 4,
      title: "Film Production",
      desc: "We bring your story to life through high-quality, professional film production services. Our team of experts handles every aspect of production, from planning to post-production, to deliver a polished final product that exceeds your expectations",
      image: post,
      feature:[
        {id:'41',title:'Feature Films',dec:'We develop and produce high-quality, engaging feature films that captivate audiences, tell memorable stories, and leave a lasting impact. From script to screen, our team collaborates with writers, directors, and producers to bring unique visions and ideas to life in a cinematic experience.',image:bg5},
        {id:'42',title:'Short Films',dec:'We create captivating and concise short films that tell powerful stories, evoke emotions, and leave a lasting impression. From script to screen, our team helps you develop and produce high-quality short films that showcase your vision, talent, and creativity.',image:bg10},
        {id:'43',title:'Documentaries',dec:'We craft compelling, informative, and engaging documentary films that tell real stories, explore important issues, and showcase unique perspectives. Our team helps you bring your vision to life, from research to editing, and creates high-quality documentaries that educate, inspire, and leave a lasting impact',image:bg3},
        {id:'44',title:'Music Videos',dec:'Our team produces innovative and captivating music videos that complement your music, enhance your brand, and connect with fans. We collaborate with artists to create visually striking and memorable videos that amplify their message and artistry',image:bg6},
      ],
    },
    {
      id: 2,
      title: "Advertising",
      desc: "We create and execute compelling advertising campaigns that capture attention, drive engagement, and deliver results. Our team of experts develops strategic solutions that connect your brand with your target audience across various channels and platforms",
      image: ads,
      feature:[
        {id:'21',title:'TV Commercials',dec:'We produce high-quality, engaging TV ads that capture viewers attention, build brand awareness, and drive sales. From concept to broadcast, we help you create compelling stories, showcase your products, and reach your target audience through effective television advertising',image:bg14},
        {id:'22',title:'Online Video Ads',dec:'Our team produces and delivers high-impact video ads that engage viewers, communicate your message, and achieve your marketing objectives. We expertly manage your video ad campaigns to maximize reach, views, and ROI.',image:bg7},
        {id:'23',title:'Social Media Campaigns',dec:'Our team crafts and implements effective social media campaigns that increase brand awareness, boost engagement, and drive website traffic and sales. We help you navigate the ever-changing social media landscape and reach your target audience',image:bg12},
        {id:'24',title:'Corporate Videos',dec:'Our team of creative professionals understands the importance of effective visual communication. We ll work closely with you to develop a customized video strategy that aligns with your brand s unique needs and goals.',image:bg1},
        {id:'25',title:'Political campaigns',dec:'Our team provides expert digital solutions for political candidates and organizations, including campaign strategy, social media management, online advertising, and voter engagement to help you reach, persuade, and mobilize your audience.',image:pcampaign},
      ],
    },
    {
      id: 1,
      title: "Post-Production",
      desc: "We shape the final narrative through expert post-production services. Our team of skilled editors, visual effects artists, and sound designers craft a polished, engaging, and immersive experience that elevates your story and resonates with audiences.",
      image: visual,
      feature:[
        {id:'11',title:'Editing',dec:'We refine and perfect your visual content through expert editing services. Our team of skilled editors craft compelling narratives, enhance pacing and tone, and ensure a polished final product that exceeds your expectations',image:editing},
        {id:'12',title:'Visual Effects (VFX) ',dec:'Our team delivers high-end visual effects solutions that seamlessly integrate with live-action footage. We specialize in CGI, motion capture, and advanced compositing techniques to create breathtaking and believable visual experiences',image:visual},
        {id:'13',title:'Sound Design',dec:'We craft and shape the sonic landscape of your visual content, creating an immersive audio experience that complements and enhances the narrative. Our team delivers high-quality sound effects, FX, Foley, and mixing services to bring your project to life',image:sound},
        {id:'14',title:'Color Grading',dec:'We enhance the visual aesthetic of your footage through expert color grading services. Our team of colorists craft a unique color palette that evokes emotion, sets the tone, and refines the overall look of your project',image:color},
      ],
    },
    {
      id: 3,
      title: "script   development",
      desc: "We nurture bold ideas and bring them to life through innovative creative development. Our team of visionary thinkers, writers, and artists collaborate to craft compelling stories, characters, and worlds that captivate and inspire audiences",
      image: script,
      feature:[
        {id:'31',title:'Scriptwriting',dec:'We craft compelling, engaging, and polished scripts for film, TV, and digital media. Our team of experienced writers develops memorable characters, intriguing plots, and snappy dialogue that brings your story to life.',image:script},
        {id:'32',title:'Storyboarding',dec:'We visualize your story through detailed, engaging, and precise storyboard art. Our team of skilled artists and directors bring your script to life, shot by shot, to plan and perfect your visual narrative',image:bg13},
        {id:'33',title:'Concept Development',dec:'We help you shape and refine your ideas into compelling concepts. Our team of creatives collaborates with you to develop innovative, engaging, and well-defined concepts that meet your project s goals and objectives',image:bg11},
      ],
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      {/* <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGray">
          We have been working with some amazing clients
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-2 ">
          <img src={clogo1} className="h-32 w-32 cursor-pointer" alt=""></img>
          <img src={clogo2} className="h-32 w-32 cursor-pointer" alt=""></img>
          <img src={clogo3} className="h-32 w-32 cursor-pointer" alt=""></img>
          <img src={clogo4} className="h-32 w-32 cursor-pointer" alt=""></img>
        </div>
      </div> */}
      {/* <Client/> */}

      <div className="text-center mt-20  mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Services
        </h2>
        <p className="text-neutralGray">
          We provide a large variety of services
        </p>
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mx-auto gap-12">
          {serviceprovided.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service)}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-t-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div className="">
                <div className="bg-[#daf4dd] h-20 w-20 mx-auto rounded-tl-3xl rounded-br-3xl flex justify-center items-center mb-4">
                  <img src={service.image} alt="" className="h-16 w-16"></img>
                </div>
                <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2 capitalize">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralGray flex text-justify items-center justify-center">
                  {/* {service.desc} */}
                  <p className="text-sm text-neutralGray flex justify-center items-center text-justify">
                    <button className=" inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                      <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Click to learn More
                      </span>
                    </button>
                  </p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
