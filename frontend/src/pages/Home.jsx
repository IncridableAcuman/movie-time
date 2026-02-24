import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='relative w-full h-screen bg-cover bg-center animate-zoom' style={{backgroundImage:"url('/bg.jpg')"}}>
      <div className="bg-gray-950 w-full min-h-screen opacity-90 text-white">
        <Navbar/>
      </div>
    </div>
  )
}

export default Home