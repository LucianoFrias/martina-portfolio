import React from 'react'
import './Trabajo.css'

function Trabajo({imageURL, title, description}) {
  return (
    <div className='trabajo'>
          <img src={imageURL} alt='trabajo-img'></img>
          <h2>{title}</h2>
          <p>{description}</p>
    </div>
  )
}

export default Trabajo