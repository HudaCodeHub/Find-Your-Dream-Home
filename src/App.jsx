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
   
      <Navbar/>
      <Hero/>
     
     <WhyChooseUS/>
     <Popular/>
     <Agents/>
     <Contacts/>
    </>
  )
}

export default App;