import React from 'react'
import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom'


const Hero = () => {

    const navigate = useNavigate()

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full min-h-screen bg-cover bg-no-repeat px-6 sm:px-20 xl:px-32 text-center text-white"
      style={{ backgroundImage: `url(${assets.gradientBackground})` }}
    >
      <div className="">
        <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-black">
          One Platform. <br />
          <span className="text-blue-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Infinite AI Possibilities
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed tracking-wide" style={{ textShadow: '0px 0px 5px rgba(0,0,0,0.2)' }}>
  From <span className="text-gray-900 font-bold" style={{ textShadow: '0px 0px 3px rgba(0,0,0,0.3)' }}>words</span> to <span className="text-gray-900 font-bold" style={{ textShadow: '0px 0px 3px rgba(0,0,0,0.3)' }}>visuals</span>,
  <br className="hidden sm:inline" />
  from <span className="text-gray-900 font-bold" style={{ textShadow: '0px 0px 3px rgba(0,0,0,0.3)' }}>ideas</span> to <span className="text-gray-900 font-bold" style={{ textShadow: '0px 0px 3px rgba(0,0,0,0.3)' }}>impact</span>.
  <span className="text-gray-600"> AI makes it real.</span>
  <br />
  <span className="block mt-3 text-gray-700 text-base sm:text-lg font-normal">
    Write. Design. Generate. Solve. All in one seamless space.
  </span>
</p>
      </div>

      <div className ='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs mt-10'>
          <button onClick={()=> navigate('/ai')}className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95
          transition cursor-pointer'>Start Creating Now</button>
          <button className='bg-black px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95
          transition cursor-pointer'>Try Demo</button>
      </div>
    </div>
  )
}

export default Hero
