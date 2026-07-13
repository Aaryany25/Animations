import React, { useRef, useState } from 'react'
import {
  Droplets,
  Truck,
  ShieldCheck,
  Calendar,
  MapPinned,
  Wallet,
} from "lucide-react";
import { useScroll ,useTransform,motion,useMotionTemplate, useSpring,useMotionValueEvent} from "motion/react";
function Motion_hooks() {
     const Containerref = useRef<HTMLDivElement>(null);
     const {scrollYProgress} = useScroll({
        target: Containerref,
        offset:["start end","end start"]
    })

    const backgroundColors=['#000000',"#5c162e","#1c2541","#12562a","#434c5e"]
    const [background,setBackground] = useState(backgroundColors[0])
    useMotionValueEvent(scrollYProgress,"change",(latest)=>{
const index = Math.min(
    backgroundColors.length - 1,
    Math.floor(latest * backgroundColors.length)
  );

  setBackground(backgroundColors[index]);
    })
  return (
    <motion.div ref={Containerref} animate={{ backgroundColor: background }} transition={
        {
            duration:0.1
        }
    } className="flex flex-col w-full min-h-screen justify-center items-center text-white">
{features.map((feature, index) => (
  <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} content={feature.content} />
))}
    </motion.div>
  )
}
type FeatureProps = {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
}
function Feature({index, icon, title, description, content }: FeatureProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start end","end start"]
    })
 
    const translateContent =useSpring( useTransform(scrollYProgress,[0,1],[200,-200]),{
        damping:50,
        mass:0.2,
        stiffness:100,
    })
const Opacity = useTransform(scrollYProgress,[0,0.5,1],[0,1,0])
// const Scale = useTransform(scrollYProgress,[0,0.5,1],[0,1,0.5])
const Blur = useTransform(scrollYProgress,[0.5,1],[0,10])
    // const scaleX = useTransform(scrollYProgress,[0,1],[0.2,1])
    return (
<div ref={ref} key={index}className="flex h-screen justify-center items-center gap-5">
    <motion.div 
    style={{
        filter:useMotionTemplate`blur(${Blur}px)`
    }}
     className="text-xl w-[500px]">
    {icon}
    <h3 className="my-4 font-bold text-3xl">{title}</h3>
    <p>{description}</p>
    </motion.div>
    <motion.div style={{ y: translateContent, opacity: Opacity }} >
    {content}
    </motion.div>
  </div>
    )
}
const features = [
  {
    icon: <Droplets className="h-8 w-8 text-sky-500" />,
    title: "Pure Drinking Water",
    description:
      "Crystal-clear, purified drinking water sourced and tested for the highest quality standards.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80"
        alt="Pure Drinking Water"
         className="w-[400px] h-[400px] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <Truck className="h-8 w-8 text-sky-500" />,
    title: "Lightning Fast Delivery",
    description:
      "Receive your water gallons at your doorstep with quick and reliable delivery service.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80"
        alt="Delivery"
        className="w-[400px] h-[400px] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-sky-500" />,
    title: "Quality Guaranteed",
    description:
      "Every gallon is thoroughly inspected to ensure freshness, purity, and safety.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80"
        alt="Quality Check"
         className="w-[400px] h-[400px] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <Calendar className="h-8 w-8 text-sky-500" />,
    title: "Easy Subscriptions",
    description:
      "Schedule recurring deliveries and never worry about running out of drinking water.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
        alt="Subscription"
         className="w-[400px] h-[400px] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <MapPinned className="h-8 w-8 text-sky-500" />,
    title: "Real-Time Tracking",
    description:
      "Track your delivery partner live and know exactly when your order will arrive.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
        alt="Live Tracking"
         className="w-[400px] h-[400px] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <Wallet className="h-8 w-8 text-sky-500" />,
    title: "Secure Payments",
    description:
      "Pay safely using cards, UPI, wallets, or net banking with end-to-end encryption.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
        alt="Secure Payments"
        className="w-[400px] h-[400px] rounded-xl object-cover"
      />
    ),
  },
];

export default Motion_hooks