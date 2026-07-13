import React from 'react'
import hero from '../assets/hero.png'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
function LandingPage() {
  return (
    <div className ={"w-full h-screen relative"}>
        <img src={"https://i.pinimg.com/control1/736x/21/ce/52/21ce5263171481886a153ad6ab9d9c92.jpg"} className={"w-full h-full object-cover"}/>
      <Navbar/>
        <div className={"absolute inset-0 bg-black-500/50 flex flex-col items-center py-40 justify-start "}>
            <h1 className={"text-6xl font-semibold text-black uppercase mb-5"}>Finance. Freedom. Fellows</h1>
            <p className={"text-2xl mb-8"}>Private Club of Top Tech Investors </p>
            {/* <button className={"bg-white text-black px-5 py-2 mt-5"}>Get Started</button> */}
            <Button/>
        </div>
    </div>
  )
}

export default LandingPage