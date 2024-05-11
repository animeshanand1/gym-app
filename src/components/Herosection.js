import React from 'react'

const Herosection = () => {
  return (
    <div className='heroSection'>
      <div className='heroSectionOverlayText'>
        <h1>Achieve Your Fitness Goals</h1>
        <h3>“What Hurts Today <br />Makes You Stronger Tomorrow.”</h3>
        <p>Join us now and get the best fitness training</p>
        <div className='heroSectionOverlaybuttons'>
          <button className='btn'>Join Now</button>
          <button className='btn'>Book A Meeting</button>
        </div>
      </div>
      <div className='heroImage'>
        <img src='/Images/HeroImage1.png' alt='heroImage' />
      </div>
    </div>
  )
}
export default Herosection