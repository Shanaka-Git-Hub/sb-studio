import React from 'react'
import NavBar from './NavBar'
import Carousels from './Carousels'
import PageThree from './PageThree'
import PageTwo from './PageTwo'
import PageFour from './PageFour'
import './Home.css'

export default function Home() {
  return (
    <div className='container-fluid' style={{ height: 'auto' }}>
      <NavBar />
      <div className="contact-icon">
         <h4><a href="tel:0741161176">Contact</a></h4>
      </div>
      <Carousels />
      <PageTwo />
      <PageFour />
      <PageThree />
     
    </div>
  )
}
