import React from 'react'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Home2 from './pages/Home2'
import { motion } from "motion/react"

function App() {
  return (
    <div className="w-full h-screen  flex justify-center items-center text-white " 
    style={{backgroundImage:`radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
      backgroundSize:"8px 8px",
      backgroundRepeat:"repeat"
    }}>
      <motion.button 
      // initial={{opacity:0}} 
      // animate={{opacity:1,transition:{duration:1}}} 
      whileTap={{scale:0.9,}}
      whileHover={{boxShadow:"0px 5px 8px rgba(2, 2, 2, 0.5)",}}
      className="group relative text-4xl bg-neutral-800 py-4 px-10 rounded-xl">
        Subscribe
      <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-black to-transparent h-px w-full mx-auto"></span>
      <span className="group-hover:opacity-100 transition-opacity duration-300 opacity-0 absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-black to-transparent h-[4px] w-full mx-auto blur-sm"></span>
      
      </motion.button>
      
    </div>
  )
}

export default App