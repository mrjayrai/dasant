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
import bg32 from "../src/assets/bg32.jpg";
import { useNavigate } from "react-router-dom";
import advertisingcard from "../src/assets/advertisingcard.jpg";
import filmcard from "../src/assets/filmcard.jpg";
import postcard from "../src/assets/postcard.jpg";
import scriptcard from "../src/assets/scriptcard.jpg";
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
      desc: "At Dashantee Studio, we bring stories to life through visionary film production. From concept to screen, we craft cinematic experiences that captivate and inspire.",
      image: filmcard,
      feature:[
        {id:'41',title:'Feature Films',dec:'We develop and produce quality, engaging feature films that captivate audiences, tell memorable stories, and leave a lasting impact. From script to screen, our team collaborates with writers, directors, and producers to bring unique visions and ideas to life in a cinematic experience.',image:bg10},
        {id:'42',title:'Short Films',dec:'We create captivating and concise short films that tell powerful stories, evoke emotions, and leave a lasting impression. From script to screen, our team helps you develop and produce high-quality short films that showcase your vision, talent, and creativity.',image:bg5},
        {id:'43',title:'Documentaries',dec:'We craft compelling, informative, and engaging documentary films that tell real stories, explore important issues, and showcase unique perspectives. Our team helps you bring your vision to life, from research to editing, and creates high-quality documentaries that educate, inspire, and leave a lasting impact',image:bg3},
        {id:'44',title:'Music Videos',dec:'Our team produces innovative and captivating music videos that complement your music, enhance your brand, and connect with fans. We collaborate with artists to create visually striking and memorable videos that amplify their message and artistry',image:bg6},
      ],
    },
    {
      id: 2,
      title: "Advertising",
      desc: "Dashantee Studio transforms ideas into dynamic advertising campaigns. We create memorable brand experiences that engage and inspire across all media.",
      image: advertisingcard,
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
      desc: "Dashantee Studio offers seamless post-production services, transforming your projects into cinematic experiences. We enhance visuals and sound to create powerful, final products.",
      image: postcard,
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
      desc: "From concept to screenplay, Dashantee Studio's script development services ensure your story has a strong narrative structure and emotional depth, ready for production",
      image: scriptcard,
      feature:[
        {id:'31',title:'Scriptwriting',dec:'We craft compelling, engaging, and polished scripts for film, TV, and digital media. Our team of experienced writers develops memorable characters, intriguing plots, and snappy dialogue that brings your story to life.',image:script},
        {id:'32',title:'Storyboarding',dec:'We visualize your story through detailed, engaging, and precise storyboard art. Our team of skilled artists and directors bring your script to life, shot by shot, to plan and perfect your visual narrative',image:bg13},
        {id:'33',title:'Concept Development',dec:'We help you shape and refine your ideas into compelling concepts. Our team of creatives collaborates with you to develop innovative, engaging, and well-defined concepts that meet your project s goals and objectives',image:bg11},
      ],
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-cover bg-center bg-fixed sm:bg-no-repeat"
    style={{
      backgroundImage: `url(${bg32})`,
    }}
    >

      <div className="text-center mt-0  mx-auto">
        <h2 className="text-4xl text-white font-semibold mb-2 font-montserrat">
          Our Services
        </h2>
        <p className="text-white">
          We provide a large variety of services
        </p>
        {/* <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mx-auto gap-12">
          {serviceprovided.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service)}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-t-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full bg-gray900"
            >
              <div className="">
                <div className=" h-20 w-20 mx-auto rounded-tl-3xl rounded-br-3xl flex justify-center items-center mb-4">
                  <img src={service.image} alt="" className="h-16 w-16"></img>
                </div>
                <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2 capitalize font-quicksand">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralGray flex text-justify items-center justify-center font-quicksand">
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
        </div> */}

      {/* start */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
    {serviceprovided.map((service) => (
    <div
        className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal cursor-pointer"
        key={service.id}
        onClick={() => handleCardClick(service)}
    >
        <img src={service.image} className="w-full mb-3" />
        <div className="p-4 pt-2 flex flex-col justify-between h-full">
            <div className="mb-8">
            <div className="text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 block h-12 font-montserrat capitalize text-left">
    {service.title}
</div>
                <p className="text-gray-700 text-sm text-justify font-lora">{service.desc}</p>
            </div>
            <div className="flex items-center gap-2"
            onClick={() => handleCardClick(service)}
            >
                <div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
    <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" fill="#5e17eb"/>
</svg>


                </div>
                <div className="text-sm">
                    <div className="text-[#5e17eb] font-semibold leading-none ">
                        Find Out More
                    </div>
                </div>
            </div>
        </div>
    </div>
))}
        </div>
        </div>
      {/* end */}
      </div>
    </div>
  );
}

export default Service;


{/* <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div
            class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="w-full mb-3">
            <div class="p-4 pt-2">
                <div class="mb-8">
                    <p class="text-sm text-gray-600 flex items-center">
                        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
                            </path>
                        </svg>
                        Members only
                    </p>
                    <a href="#" class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">Can
                        coffee make you a better developer?</a>
                    <p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="flex items-center">
                    <a
                        href="#"><img class="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"></a>
                    <div class="text-sm">
                        <a href="#" class="text-gray-900 font-semibold leading-none hover:text-indigo-600">Jonathan
                            Reinink</a>
                        <p class="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="w-full mb-3">
            <div class="p-4 pt-2">
                <div class="mb-8">
                    <p class="text-sm text-gray-600 flex items-center">
                        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
                            </path>
                        </svg>
                        Members only
                    </p>
                    <a href="#" class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">Can
                        coffee make you a better developer?</a>
                    <p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="flex items-center">
                    <a
                        href="#"><img class="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"></a>
                    <div class="text-sm">
                        <a href="#" class="text-gray-900 font-semibold leading-none hover:text-indigo-600">Jonathan
                            Reinink</a>
                        <p class="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="w-full mb-3">
            <div class="p-4 pt-2">
                <div class="mb-8">
                    <p class="text-sm text-gray-600 flex items-center">
                        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
                            </path>
                        </svg>
                        Members only
                    </p>
                    <a href="#" class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">Can
                        coffee make you a better developer?</a>
                    <p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="flex items-center">
                    <a
                        href="#"><img class="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"></a>
                    <div class="text-sm">
                        <a href="#" class="text-gray-900 font-semibold leading-none hover:text-indigo-600">Jonathan
                            Reinink</a>
                        <p class="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
</div> */}