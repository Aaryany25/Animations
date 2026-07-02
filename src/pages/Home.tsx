import React, { useState } from 'react'
import TitleCard from '../components/TitleCard'

function Home() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const projects = [
    {
      title: 'Brushon',
      year: '2023',
      role: 'Design/Dev',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Aurora',
      year: '2022',
      role: 'Design',
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Nebula',
      year: '2021',
      role: 'Dev',
      image:
        'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Prism',
      year: '2020',
      role: 'Design/Dev',
      image:
        'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Solace',
      year: '2019',
      role: 'Design',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
    },
  ]

//   const defaultImage = projects[0].image

  return (
    <div className="w-full h-screen bg-black text-white py-10 px-[5vw]">
      <div className="flex font-bold items-center justify-between">
        <h1 className=" font-bold">PixelForge Studios</h1>
        <p className="text-lg">Web Design & Web Development</p>
      </div>
      <div className="w-full h-[92%] mt-5 flex">
        <div className="left w-1/2 h-full py-30">
          <h1 className="text-lg font-semibold mb-5 uppercase">Selected Projects</h1>
          <div className="flex flex-col gap-2">
            {projects.map((p, i) => (
              <TitleCard
                key={i}
                title={p.title}
                year={p.year}
                role={p.role}
                onMouseEnter={() => {
                  setHovered(i)
                  setActiveIndex(i)
                }}
                onMouseLeave={() => setHovered(null)}
              />
            ))}
          </div>
        </div>
        <div className="right w-1/2 h-full flex items-center justify-center p-6">
          <div className="w-full h-[500px] overflow-hidden">
            <div
              className="flex flex-col transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${(hovered ?? activeIndex) * 500}px)` }}
            >
              {projects.map((p, i) => (
                <img key={i} src={p.image} alt={p.title} className="w-full h-[500px] object-cover" />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex font-bold items-center justify-between mt-2">
        <h1 className=" font-bold">PixelForge Studios</h1>
        <p className="text-lg">Web Design & Web Development</p>
      </div> */}
    </div>
  )
}

export default Home