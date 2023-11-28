import React, { useEffect } from 'react'
import './PageFour.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function PageFour() {
  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <div 
    data-aos='flip-left'
    className='container-fluid d-flex align-items-center justify-content-center p-4-main' style={{height:'100vh'}}>
      <iframe width="1000" height="600" src="https://www.youtube.com/embed/WPEqifs7pis?si=8zIFdE4H_rI1lhtx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}
