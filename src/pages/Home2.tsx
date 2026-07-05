import React from 'react'
import hero2 from '../assets/hero2.jpg'
function Home2() {
  return (
    <div className ={"w-full h-screen relative"}>
    <img src={hero2} className={"w-full h-full object-cover"}/>
    <div className={"w-full  h-screen absolute bottom-0 text-end"}>
        <div className={
            "w-full h-1/2 "
        }></div>
        <div className={
            "w-full h-1/3 flex justify-between align-center "
        }>
          <div className={"flex flex-col  text-white ml-10"}>
             <h1 className="text-6xl mb-5 ">Polaris</h1>
            <p className="text-xl">Navigate With Insight</p>
          </div>
          <div className={"flex flex-col text-white mr-30"}>
          <button className={"bg-white text-black px-10 py-5 text-2xl  rounded-4xl mb-5"}>Get Started</button>
          </div>
        </div>
        <hr></hr>
         <div className={
            "w-full h-1/6 flex justify-between align-center "
        }>
          <div className={"flex flex-col  text-white ml-10"}>
             {/* <h1 className="text-6xl mb-5 ">Polaris</h1>
            <p className="text-xl">Navigate With Insight</p> */}
          </div>
          <div className={"flex flex-col text-white mr-30"}>
          {/* <button className={"bg-white text-black px-10 py-5 text-2xl  rounded-4xl mb-5"}>Get Started</button> */}
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home2