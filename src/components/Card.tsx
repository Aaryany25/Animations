import React, { useState } from 'react'
import Button from './Button'
// import { motion } from 'motion/react'
import { AnimatePresence, motion } from "motion/react"

function Card() {
 const [open,setOpen] =  useState(true)
  return (
    <>
    <AnimatePresence>

    
    {open ?
    (<motion.div
        initial={{opacity:0,scale:0.95}}
        animate={{opacity:1,scale:1,transition:{duration:0.5}}}
    exit={{opacity:0,scale:0.95,transition:{duration:0.3}}}
     className="bg-white px-4 py-10 rounded-2xl shadow-xl">
    <h1 className="text-4xl font-bold text-gray-800 mb-5">Card Title</h1>
    <div className='flex justify-between  items-center mb-5'>
    <p className="text-gray-600 mb-5 w-1/2 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iusto.</p>
   <button onClick={()=>setOpen(false)} className='text-xl bg-neutral-800 py-2 px-4 rounded-xl text-white '>Close </button>
    </div>
        
    <motion.div 
initial={{
    opacity:0,
    // scale:0.95,
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
    </motion.div>):

<button onClick={()=>setOpen(true)} className='text-xl bg-neutral-800 py-2 px-4 rounded-xl text-white'>Open</button>
}</AnimatePresence> 
    </>

  )
}

export default Card