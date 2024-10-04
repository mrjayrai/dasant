import React from "react";
import clogo1 from "../src/assets/clogo1.jpeg";
import clogo2 from "../src/assets/clogo2.jpeg";
import clogo3 from "../src/assets/clogo3.jpeg";
import clogo4 from "../src/assets/clogo4.jpeg";

function Client() {
  return (
    <div className="text-center my-8">
  <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
    Our Clients
  </h2>
  <p className="text-neutralGray">
    We have been working with some amazing clients
  </p>
  <div className="relative overflow-hidden">
    <div className="flex animate-scroll whitespace-nowrap pt-5">
      <img src={clogo1} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo2} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo3} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo4} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo1} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo2} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo3} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo4} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo1} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo2} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo3} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo4} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo1} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo2} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo3} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
      <img src={clogo4} className="h-32 w-32 cursor-pointer inline-block mx-4 px-2" alt="" />
    </div>
  </div>
  
</div>
  )
}

export default Client
