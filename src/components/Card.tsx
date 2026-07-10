import React from 'react'
import Button from './Button'
// import { motion } from 'motion/react'
import { motion } from "motion/react"

function Card() {
  return (
    <div className="bg-white px-4 py-10 rounded-2xl shadow-xl">
    <h1 className="text-4xl font-bold text-gray-800 mb-5">Card Title</h1>
    <div className='flex justify-between  items-center mb-5'>
    <p className="text-gray-600 mb-5 w-full text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iusto.</p>
    {/* <Button/> */}
    </div>
        
    <motion.div 
initial={{
    opacity:0,
    scale:0.95,
    // filter:"blur(10px)"
}}
whileHover={{
    filter:"blur(0px)",
    opacity:1,
    scale:1.02,
    transition:{duration:0.3}
}}
     className="relative w-full h-64 bg-gray-200 mt-5 rounded-lg border border-dash border-neutral-300">
<img src="https://i.pinimg.com/control1/736x/15/d1/c6/15d1c6af02826dcd507bab553dc9a1c9.jpg" alt="Card Image" className="w-full h-full object-cover rounded-lg absolute" />
    </motion.div>
    </div>
  )
}

export default Card