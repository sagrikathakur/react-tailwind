import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import TrustedBy from './Components/TrustedBy';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
import Team from './Components/Team';
import ContactUs from './Components/ContactUs';
import {Toaster} from 'react-hot-toast';

const App = () => {
  const [theme , setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Team/>
      <ContactUs/>

    </div>
  )
}

export default App