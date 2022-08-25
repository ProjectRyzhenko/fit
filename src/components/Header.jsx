import React, { useEffect } from "react"

function Header() {
  return (
    <header className="p-5 flex items-center justify-between">
      <a href="#" className="text-lg text-orange-600 leading-none">Fit<span className="text-gray-900">silo</span></a>
      <button className="block w-10 h-10 text-center text-2xl text-gray-400 leading-10"><i className="fas fa-bars"></i></button>
    </header>
  )
}

export default Header