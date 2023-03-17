import React from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import CreditsSection from './components/sections/credits-section/CreditsSection'
import EstudiosSection from './components/sections/estudios-section/EstudiosSection'
import HobbiesSection from './components/sections/hobbies-section/HobbiesSection'
import IntroductionSection from './components/sections/introduction-section/IntroductionSection'
import TrabajosSection from './components/sections/trabajos-section/TrabajosSection'


function App() {
  return (
    <div className='App'>
        <Nav />
        <IntroductionSection />
        <EstudiosSection />
        <TrabajosSection />
        <HobbiesSection />
        <CreditsSection />
        
    </div>
    
  )
}

export default App