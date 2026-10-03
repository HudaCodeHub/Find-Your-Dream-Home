import React from 'react'
import Contacts from './Components/Contacts/Contacts';
import Agents from './Components/Agents/Agents';
import Popular from './Components/Our popular/Our popular';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import WhyChooseUS from './Components/WhyChooseUs/WhyChooseUS';




const App = () => {
  return (
   <>
   <div className='flex h-screen flex-col bg-[#fff8f3]'>
      <Navbar/>
      <Hero/></div>
     
     <WhyChooseUS/>
     <Popular/>
     <Agents/>
     <Contacts/>
    </>
  )
}

export default App;