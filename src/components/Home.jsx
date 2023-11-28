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
         <h4><a href="https://www.google.com/search?q=sujeewa+basnayaka+photographer%2C+no+35+ahelepola+kumarihami+mw%2C+20000&oq=&gs_lcrp=EgZjaHJvbWUqCQgFECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQsxMjgyNTI1ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8#">Contact</a></h4>
      </div>
      <Carousels />
      <PageTwo />
      <PageFour />
      <PageThree />
     
    </div>
  )
}
