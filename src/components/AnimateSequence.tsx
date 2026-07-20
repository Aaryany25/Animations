import React,{useEffect} from 'react'
import { useAnimate,motion } from 'motion/react'
function AnimateSequence() {
  const[scope,animate]=useAnimate()
  useEffect(()=>{
StartAnimation()
  },[])
  const StartAnimation=()=>{
    animate("span",{
opacity:1,
filter:"blur(0px)"
    },{
      duration:0.3
    })
  }
  const text ="This Line is Gonna Be Animated , this is the Line for Some Animation, This is the Line for Some Animation,  "
  return (
    <div ref={scope} className="W-full px-10 text-4xl font-bold text-white bg-black w-full h-screen flex items-center justify-center">
<motion.span style={{opacity:0,filter:"blur(10px)"}}>{text}</motion.span> 
    </div>
  )
}

export default AnimateSequence