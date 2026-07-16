import React, { useState } from 'react'
import { motion } from 'framer-motion';
function LayoutCards() {
    const [currentCard, setCurrentCard] = useState(null);
  return (
    <div className="w-full min-h-screen bg-slate-100 py-40 relative">
      {currentCard && (
        <div className="fixed inset-0 z-10 bg-black/50  backdrop-blur-sm" onClick={() => setCurrentCard(null)}></div>
      )}
        {currentCard && (
        <motion.div 
          layoutId={`card-${currentCard.title}`}
          transition={{ duration: 0.3 }}
          className="max-w-sm h-[550px] mt-40 fixed inset-0 z-20 inset-0  mx-auto p-6 bg-white rounded-lg shadow-md mb-6">
            <motion.img layoutId={`card-${currentCard.title}-image`} transition={{duration:0.3}}   src={currentCard.src} alt={currentCard.title} className=" w-full aspect-sqaure object-cover rounded-lg mb-4" />
          <motion.h2 layoutId={`card-${currentCard.title}-text`} transition={{duration:0.3}} className="text-5xl font-semibold mb-6">{currentCard.title}</motion.h2>
          <p className="text-gray-700 text-md ">{currentCard.content()}</p>
          <a href={currentCard.ctaLink} target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium mt-4 inline-block text-2xl">
            {currentCard.ctaText}
          </a>  
          {/* <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-5xl"
            onClick={() => setCurrentCard(null)}>
                x
            </button> */}
        </motion.div>
      )}
      <div className="max-w-xl mx-auto flex flex-col gap-6">
        {Cards.map((card, index) => (
          <motion.button
          layoutId={`card-${card.title}`}
            key={index}
            className="p-6 flex items-center justify-between rounded-lg bg-white shadow-md hover:shadow-lg transition"
            onClick={() => setCurrentCard(card)}
          >
            <motion.img
          layoutId={`card-${card.title}-image`}
              src={card.src}
              alt={card.title}
              className="w-16 h-16 rounded-lg object-cover mr-4"
            />
            <div className="text-left">
              <motion.h2 layoutId={`card-${card.title}-text`} className="text-xl font-semibold">{card.title}</motion.h2>
              <p className="text-gray-500">{card.description}</p>
            </div>

            <span className="text-green-600 font-medium">
              {card.ctaText}
            </span>
          </motion.button>
        ))}
        
      </div>
    </div>
  );
}



const Cards = [
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=1200&q=80",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          <strong>Toh Phir Aao</strong> is one of Mustafa Zahid's most iconic
          songs, known for its soulful vocals and emotional depth. The track
          became immensely popular for its heartfelt lyrics and memorable
          composition, making it a favorite among Bollywood music lovers.
        </p>
      );
    },
  },
  {
    description: "Arijit Singh",
    title: "Kesariya",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com",
    content: () => {
      return (
        <p>
          <strong>Kesariya</strong> is a romantic ballad sung by Arijit Singh
          from the movie <em>Brahmāstra</em>. Its soothing melody and poetic
          lyrics made it one of the biggest chartbusters in recent Bollywood
          music.
        </p>
      );
    },
  },
  {
    description: "Atif Aslam",
    title: "Jeena Jeena",
    src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&q=80",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com",
    content: () => {
      return (
        <p>
          <strong>Jeena Jeena</strong> showcases Atif Aslam's signature soft
          vocals and emotional expression. The song beautifully captures the
          feeling of finding love and has remained a fan favorite over the
          years.
        </p>
      );
    },
  },
  {
    description: "Shreya Ghoshal",
    title: "Agar Tum Mil Jao",
    src: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=1200&q=80",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com",
    content: () => {
      return (
        <p>
          <strong>Agar Tum Mil Jao</strong> is a timeless melody featuring the
          mesmerizing voice of Shreya Ghoshal. The song's emotional lyrics and
          elegant composition continue to resonate with listeners across
          generations.
        </p>
      );
    },
  },
  {
    description: "KK",
    title: "Zara Sa",
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com",
    content: () => {
      return (
        <p>
          <strong>Zara Sa</strong> is one of KK's most beloved romantic songs.
          With its unforgettable melody and heartfelt vocals, it remains a
          classic that perfectly captures the emotions of love and longing.
        </p>
      );
    },
  },
];
export default LayoutCards