import React from 'react'
import NavBar from './NavBar'
import Carousels from './Carousels'
import PageThree from './PageThree'
import PageTwo from './PageTwo'
import PageFour from './PageFour'

export default function Home() {
  return (
    <div className='container-fluid' style={{height:'100vh'}}>
    <NavBar/> 
    <Carousels/> 
    <PageTwo/>
    <PageFour/>
    <PageThree/>
    </div>
  )
}
