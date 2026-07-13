import React from 'react'
import {
  Droplets,
  Truck,
  ShieldCheck,
  Calendar,
  MapPinned,
  Wallet,
} from "lucide-react";
function Motion_hooks() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black  flex justify-center items-center text-white">
{features.map((feature, index) => (
  <div key={index}className="flex h-screen justify-center items-center gap-5">
    <div className="text-xl w-[500px]">
    {feature.icon}
    <h3 className="my-4 font-bold text-3xl">{feature.title}</h3>
    <p>{feature.description}</p>
    </div>
    {feature.content}
  </div>
))}
    </div>
  )
}
export const features = [
  {
    icon: <Droplets className="h-8 w-8 text-sky-500" />,
    title: "Pure Drinking Water",
    description:
      "Crystal-clear, purified drinking water sourced and tested for the highest quality standards.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80"
        alt="Pure Drinking Water"
         className="w-[500px] h-[500px] rounded-xl object-cover"
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
        className="w-[500px] h-[500px] rounded-xl object-cover"
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
         className="w-[500px] h-[500px] rounded-xl object-cover"
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
         className="w-[500px] h-[500px] rounded-xl object-cover"
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
         className="w-[500px] h-[500px] rounded-xl object-cover"
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
        className="w-[500px] h-[500px] rounded-xl object-cover"
      />
    ),
  },
];

export default Motion_hooks