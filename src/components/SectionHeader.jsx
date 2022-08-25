import React, { useEffect } from "react"

function SectionHeader(props) {
  return (
    <header className="pb-10">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-gray-700 uppercase leading-none">
          Our <span className="text-orange-500">{props.name}</span>
        </h1>
        <div className="ml-5">
          <div className="w-6 h-[2px] bg-orange-500"></div>
          <div className="w-6 h-[2px] ml-1 mt-1 bg-orange-500"></div>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-400 leading-6 lg:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ab hic aspernatur voluptas quaerat, sapiente rerum et porro expedita quibusdam illo, ex dolore magnam earum at unde possimus. Non, illum.</p>
    </header>
  )
}

export default SectionHeader