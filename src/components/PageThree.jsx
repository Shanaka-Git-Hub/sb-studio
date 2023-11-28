import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function PageThree() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center' style={{height:'100vh'}} data-aos='zoom-in'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.1282161080912!2d80.634035910506!3d7.287679413781336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36744ca04d88d%3A0xba275e45c1f6ace!2sSujeewa%20basnayaka%20photographer!5e1!3m2!1sen!2slk!4v1701031131662!5m2!1sen!2slk" width="1300" height="450" style={{border:0,marginTop:'100px'}}  loading="lazy"></iframe>
    </div>
  )
}
