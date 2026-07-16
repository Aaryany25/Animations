import React from 'react'

function Navbar() {
  return (
    <div className="w-full h-screen  flex items-center justify-center px-4 absolute top-0 ">
      {/* <div className="text-xl font-bold">FinCoin</div> */}
      <div className="flex text-2xl text-neutral-500 space-x-10 bg-gray-200 rounded-full px-10 py-5">
        <button className="hover:text-blue-500">Club</button>
        <button className="hover:text-blue-500">Resources</button>
        <button className="hover:text-blue-500">App</button>
        <button className="hover:text-blue-500">Family Office</button>

      </div>
    </div>
  )
}

export default Navbar