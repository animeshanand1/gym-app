import React from 'react'
import Carousel from '../components/Carousel'
import SubsciptionInfo from './SubsciptionInfo'

const Services = () => {
  const imgsData = [
    'https://plus.unsplash.com/premium_photo-1672280783572-4a254a8e71d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfDB8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3N8ZW58MHwwfDB8fHww',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZpdG5lc3N8ZW58MHwwfDB8fHww'
  ]
  return (
    <services>
      <Carousel imgsData={imgsData} />
      <h3>Our Moto</h3>
      <div className='overviewService'>
        <div className='imgGrid'>
          <img src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D' alt='service' />
        </div>
        <div className='textGrid'>
          <p>Our gym is a place where you can feel comfortable and motivated to achieve your fitness goals.<br /> We have a team of experienced trainers who are always ready to help you. Our gym is equipped with the latest equipment and facilities to help you achieve your fitness goals.<br /> We offer a wide range of classes and programs to suit all fitness levels. Whether you are a beginner or an experienced athlete, we have something for everyone. So come and join us today and start your fitness journey with us.</p>
        </div>
      </div>
      <div className='overviewService'>
        <div className='textGrid'>
          <p>Our Gym offer amenities like locker rooms, showers, and convenient operating hours that fit into your schedule.<br/> This convenience makes it easier to incorporate fitness into your daily routine.
          </p> </div>
        <div className='imgGrid'>
          <img src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D' alt='service' />
        </div>
      </div>
      <SubsciptionInfo />
    </services>
  )
}

export default Services