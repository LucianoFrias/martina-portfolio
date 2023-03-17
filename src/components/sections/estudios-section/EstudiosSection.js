import React from 'react'
import Estudio from '../../util-components/Estudio'
import './EstudiosSection.css'
import FrayMamertoEsquiu from '../../../imgs/instituto-fray-mamerto-esquiu.jpg'
import UniversidadNacionalDeMarDelPlata from '../../../imgs/universidad-nacional-de-mar-del-plata.jpg'
import InstitutoLecole from '../../../imgs/instituto-lecole.jpg'

function EstudiosSection() {

  return (
    <section className='estudios-section' id='estudios-section'>

        <h1 className='title'>Estudios</h1>

        <Estudio 
        instituteName="Universidad Nacional de Mar del Plata"
        degree="Medica"
        startDate="2019"
        instituteImage={UniversidadNacionalDeMarDelPlata}/>

        <Estudio 
        instituteName="Fray Mamerto Esquiu"
        degree="Bachiller en Ciencias Naturales"
        startDate="2012"
        instituteImage={FrayMamertoEsquiu}
        finished
        rightSide/>

        <Estudio 
        instituteName="Cocina Profesional Lécole"
        degree="Repostera"
        startDate="2018"
        instituteImage={InstitutoLecole}
        finished/>



    </section>
  )
}

export default EstudiosSection