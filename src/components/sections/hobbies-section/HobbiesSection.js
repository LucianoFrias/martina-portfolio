import React from 'react'
import Hobbie from '../../util-components/Hobbie'
import './HobbiesSection.css'
import SquashIMG from '../../../imgs/squash.jpg'
import SocialMediaIMG from '../../../imgs/redes-sociales.jpg'
import VideoGamesIMG from '../../../imgs/videojuegos.jpg'

function HobbiesSection() {
  return (
    <div className='hobbies-section' id='hobbies-section'>

      <h1 className='title'>Hobbies</h1>

      <div className='hobbies-container'>
          <Hobbie 
          name="Squash"
          imageURL={SquashIMG}/>
          <Hobbie 
          name="Manager y manejo de redes"
           imageURL={SocialMediaIMG}/>
          <Hobbie 
          name="Videojuegos"
          imageURL={VideoGamesIMG}/>
      </div>


    </div>
  )
}

export default HobbiesSection