import React, { useState } from 'react'
import './Nav.css'
import MartinaLogo from '../../imgs/martina-logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'

function Nav() {


  const scrollToSection = (elementId) => {
      const element = document.getElementById(elementId);


      if (element)
      {
        element.scrollIntoView({behavior: 'smooth'});
      }

  }


  const [visibleNavLinks, setVisibleNavLinks] = useState(false);

  const showNavLinks = () => {
      setVisibleNavLinks(!visibleNavLinks);
  }



  return (
    <div className='nav-bar'>
      <div className='icons-container'>
        <img className='martina-logo' src={MartinaLogo} alt='martina-logo' onClick={() => scrollToSection("introduction-section")}></img>

        <div className='burger-icon' onClick={() => showNavLinks()}><GiHamburgerMenu /></div>

    </div>
        <div className={visibleNavLinks ? 'nav-links' : 'nav-links-hide'}>
            <ul>
                <li onClick={() => scrollToSection("introduction-section")}>Introducción</li>
                <li onClick={() => scrollToSection("estudios-section")}>Estudios</li>
                <li onClick={() => scrollToSection("trabajos-section")}>Trabajos</li>
                <li onClick={() => scrollToSection("hobbies-section")}>Hobbies</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav