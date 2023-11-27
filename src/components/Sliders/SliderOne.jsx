import React from 'react'
import './SliderOne.css'

export default function SliderOne() {
  return (
    <div className='container-fluid position-relative ' style={{height:'90vh'}}>
      <div className="slid-one">

      </div>
      <div className="slid-one-dark d-flex align-items-center justify-content-center">
        <input type="text" className='form-control w-50 d-flex align-items-center justify-content-center' placeholder ='Search Here' />
      </div>
    </div>
  )
}
