import React from 'react'
import hero from '../assets/hero.png'
function LandingPage() {
  return (
    <div className ={"w-full h-screen"}>
        <img src={hero} className={"w-full h-full object-cover"}/>
        <div className={"absolute inset-0 bg-black-500/50 flex flex-col items-center py-50 justify-start text-white"}>
            <h1 className={"text-6xl italic text-white uppercase mb-5"}>Where idea Blooms under starlight</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid eos cumque amet quis animi soluta quas. Est, amet dolores.</p>
            <button className={"bg-white text-black px-5 py-2 mt-5"}>Get Started</button>
        </div>
    </div>
  )
}

export default LandingPage