import React from 'react'
import './Estudio.css'

function Estudio({instituteName, degree, startDate, finished, rightSide, instituteImage}) {
  return (
    <div >

        <hr></hr>
        <div className={rightSide ? 'estudio-right' : 'estudio-left'}>
        <div className='estudio-info'>
        <h1><span className='span-purple'>Instituto: </span> {instituteName}</h1>
        <h2><span className='span-lightblue'>Título: </span>{degree}</h2>
        <h2><span className='span-lightgrey'>Año de ingreso: </span>{startDate}</h2>
        <h2><span className='span-white'>Estado: </span>
        {finished ? <span className='span-green'>Finalizado.</span>
         : <span className='span-orange'> En proceso...</span>}</h2>
        </div>

        <img className='estudio-image' src={instituteImage} alt='institute'></img>
        </div>

    </div>
    
  )
}

export default Estudio