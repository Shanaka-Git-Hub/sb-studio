import React, { useEffect } from 'react'
import p1 from '../pageTwoImg/01.jpg'
import p2 from '../pageTwoImg/02.jpg'
import p3 from '../pageTwoImg/03.jpg'
import './PageTwo.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function PageTwo() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div className='container-fluid mt-5 bg-dark d-flex align-items-center justify-content-center' style={{height:'70vh'}}>
      <div className="p-2-gallary">
        <img src={p1} width='300px' data-aos='fade-left' height='380px' alt="" />
        <img src={p2} width='300px' data-aos='fade-up' alt="" />
        <img src={p3} width='300px' data-aos='fade-right' alt="" />
      </div>
    </div>
  )
}
