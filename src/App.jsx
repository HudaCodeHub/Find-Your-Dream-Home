import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';




const App = () => {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-[#fdf5ef]">
     <Navbar/>
     <Hero/>
    </div>
  )
}

export default App;