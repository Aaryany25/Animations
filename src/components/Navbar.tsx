import React from 'react'

function Navbar() {
  return (
    <div className="w-full h-16 text-white flex items-center justify-around px-4 absolute top-0 ">
      <div className="text-xl font-bold">FinCoin</div>
      <div className="flex space-x-10">
        <button className="hover:text-blue-500">Club</button>
        <button className="hover:text-blue-500">Resources</button>
        <button className="hover:text-blue-500">App</button>
        <button className="hover:text-blue-500">Family Office</button>

      </div>
    </div>
  )
}

export default Navbar