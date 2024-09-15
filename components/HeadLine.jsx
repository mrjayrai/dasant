/* eslint-disable react/prop-types */
import React from 'react'

function HeadLine({title}) {
  return (
    <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          
          {title}
        </h2>
    </div>
  )
}

export default HeadLine
