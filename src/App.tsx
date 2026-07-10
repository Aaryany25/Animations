import React from 'react'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Home2 from './pages/Home2'
import { radialGradient } from 'motion/react-client'

function App() {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center text-white " 
    style={{backgroundImage:`radialGradient(circle at 1px 1px ,rgba(6,182,112,0.2) 1px transparent 0)`}}>
      <button className="group relative text-4xl bg-neutral-800 py-4 px-10 rounded-xl">Subscribe
      <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-full mx-auto"></span>
      <span className="group-hover:opacity-100 transition-opacity duration-300 opacity-0 absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
      
      </button>
      
    </div>
  )
}

export default App