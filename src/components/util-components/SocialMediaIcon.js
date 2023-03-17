import React from 'react'
import './SocialMediaIcon.css'

function SocialMediaIcon({placeholderText, image, URL}) {
  return (
    <a className='social-media-icon' href={URL} placeholder={placeholderText} target='_blank' rel='noreferrer'>
    <i>{image}</i>
 </a>
    
  )
}

export default SocialMediaIcon