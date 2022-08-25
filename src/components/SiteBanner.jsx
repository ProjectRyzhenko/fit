import React, { useEffect } from "react"

function SiteBanner(props) {
  return (
    <div className="relative h-[50vw] max-h-[550px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${props.src})`}}>
      <div className="absolute inset-0 w-full h-full bg-black/60"></div>
    </div>
  )
}

export default SiteBanner