import React from 'react'
import hero2 from '../assets/hero2.jpg'
function Home2() {
  return (
    <div className ={"w-full h-screen relative"}>
    <img src={hero2} className={"w-full h-full object-cover"}/>
    <div className={"w-full flex h-screen absolute bottom-0 text-end"}>
        <div className={
            "w-full bg-yellow-500/40"
        }></div>
        <div className={
            "w-full bg-red-500/40"
        }></div>

    </div>
    </div>
  )
}

export default Home2