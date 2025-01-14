import React from 'react'
import '../app/styles/hero.css';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className='hero-container'
     >
      <Navbar />

      <div className='hero-content'>
        <div className='hidden-lg'> </div>

        <div className='hero-text'>
       
        <div className='hero-main'>
          <p>I&#39;m</p>
          <p >Sumaira</p>
          <p >Afzal</p>
        </div>

      </div>

    </div>
   </div >
  )
}

export default Hero
