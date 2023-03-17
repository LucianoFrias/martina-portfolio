import React from 'react'
import SocialMediaIcon from '../../util-components/SocialMediaIcon'
import './IntroductionSection.css'
import { BsInstagram, BsLinkedin, BsFillArrowDownCircleFill } from 'react-icons/bs'
import MartinaIMG from '../../../imgs/martina-img.jpg'



function IntroductionSection() {

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);


    if (element)
    {
      element.scrollIntoView({behavior: 'smooth'});
    }

}

  
  return (
    <section>
        
      <div className='introduction-section' id='introduction-section'>
        <div className='info-container'>
            <h1>Hola, soy Martina! <br></br></h1>
            <h2><span className='span-lightblue'>Estudiante de Medicina</span> <br></br>
                 <span className='span-purple'>Manager de Equipos Esports</span></h2>
            <p>Mi propósito en este mundo es ayudar a quienes lo necesitan y construir un mejor mundo desde Mar del Plata, Buenos Aires, Argentina.</p>
            <SocialMediaIcon
             placeholderText='Instagram' 
             image={<BsInstagram />}
             URL='https://www.instagram.com/martuortegaa/'/>
            <SocialMediaIcon 
            placeholderText='LinkedIn'
            image={<BsLinkedin />}
            URL='https://www.linkedin.com/in/martina-ortega-gonz%C3%A1lez-aa2418245/'/>
        </div>

        <div className='img-container'>
            <img src={MartinaIMG} alt='martina-img'></img>
        </div>
      </div>

      <div className='flecha' onClick={() => scrollToSection("estudios-section")}><BsFillArrowDownCircleFill /></div>

      <div className='fade-bottom' />

    </section>
  )
}

export default IntroductionSection