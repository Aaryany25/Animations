import React from 'react'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Home2 from './pages/Home2'
import Card from './components/Card'
import Motion_hooks from './components/Motion_hooks'
import LayoutCards from './components/Layout-Cards'
import Navbar from './components/Navbar'
import AnimateSequence from './components/AnimateSequence'
function App() {
  return (
   <div className="w-full min-h-screen bg-slate-100  flex justify-center items-center ">
{/* <Motion_hooks/> */}
{/* <LandingPage/> */}
{/* <LayoutCards/> */}
{/* <Navbar/> */}
<AnimateSequence/>
   </div>
  )
}

export default App