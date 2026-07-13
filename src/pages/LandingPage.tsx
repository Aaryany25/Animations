import React from 'react'
import hero from '../assets/hero.png'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
function LandingPage() {
  return (
    <div className={"w-full h-screen relative overflow-hidden"}>
      <img
        src={"https://i.pinimg.com/control1/736x/21/ce/52/21ce5263171481886a153ad6ab9d9c92.jpg"}
        className={"w-full h-full object-cover"}
      />
      <div className={"absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/40"} />
      <Navbar />
      <div className={"absolute inset-0 bg-black-500/50 flex flex-col items-center py-40 justify-start"}>
        <h1 className={"text-6xl font-semibold text-white mb-5"}>Finance. Freedom. Fellows</h1>
        <p className={"text-2xl mb-8 text-white"}>Private Club of Top Tech Investors </p>
        <Button />
      </div>
    </div>
  )
}

export default LandingPage