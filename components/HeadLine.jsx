/* eslint-disable react/prop-types */
import React from 'react'

function HeadLine({title}) {
  return (
    <div className="text-center py-8 bg-[#D4E9E2] h-full text-red-700">
        {/* <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          
          {title}
        </h2> */}
        <h2 className="text-red-400 sm:text-4xl max-sm:text-[18px] font-bold font-montserrat">{title}</h2>
    </div>
  )
}

export default HeadLine
