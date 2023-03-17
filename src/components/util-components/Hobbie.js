import React from 'react'
import './Hobbie.css'

function Hobbie({name, imageURL}) {
  return (
    <div className='hobbie' style={{backgroundImage: `url(${imageURL})`}}>
        <h2>{name}</h2>
    </div>
  )
}

export default Hobbie