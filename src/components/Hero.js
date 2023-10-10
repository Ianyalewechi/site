import React from 'react'
import { Button } from './Button'
import './Hero.css'
import video from "../videos/video-2.mp4"
// import Carousel from './Carousel';


function Hero () {
  return (
    <div className='hero-container'>
      <video src={video}  autoPlay loop muted  /> 

        
        <h2>Learn from industry experts </h2>
        <p>What are you waiting for?</p>

        {/* <Carousel /> */}
      <div className='hero-btns'>
      
        <Button className='btns' buttonStyle='btn--primary'  buttonSize='btn--large' >
          Get Started
        </Button>
        {/* buttonSize='btn--large' */}
      

        {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          Watch Trailer 
            <i className='far fa-play-circle' />
        </Button> */}
      </div>
        
    </div>

  )
}

export default Hero;