import React from 'react'
import Trabajo from '../../util-components/Trabajo'
import './TrabajosSection.css'
import BurletesURL from '../../../imgs/burletes.jpg'
import HeladeriaURL from '../../../imgs/atencion-publico-heladeria.jpg'
import Hobbs from '../../../imgs/hobbs.jpg'

function TrabajosSection() {
  return (
    <section className='trabajos-section' id='trabajos-section'>
      
      <div className='fade-up' />

      <h1 className='title'>Trabajos</h1>

      <div className='trabajos-container'>

          <Trabajo
          imageURL={BurletesURL} 
          title="Colocadora de Burletes"
          description="En este trabajo aprendí como colocar burletes
           y usarlos para aislar puertas y ventanas."/>

          <Trabajo 
          imageURL={HeladeriaURL}
          title="Atención al público de heladeria"
          description="Realice suplencias en atención al público (una
            temporada) en una heladería céntrica. En esta
            aprendí a servir helado y manejo básico de caja."/>

          <Trabajo 
          imageURL={Hobbs}
          title="Moza - Bar Hobbs"
          description="En esta ocasión, realice trabajos de atencion al público
          como moza, preparando tragos y realizando manejo de caja."/>            

      </div>

      <div className='fade-bottom'></div>

    </section>
  )
}

export default TrabajosSection