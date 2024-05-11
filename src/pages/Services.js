import React from 'react'
import Carousel from '../components/Carousel'
import SubsciptionInfo from './SubsciptionInfo'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Services = () => {
  const imgsData = [
    'https://plus.unsplash.com/premium_photo-1672280783572-4a254a8e71d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfDB8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3N8ZW58MHwwfDB8fHww',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZpdG5lc3N8ZW58MHwwfDB8fHww'
  ]
  return (
    <services>
      <Carousel imgsData={imgsData} />
      <h3 className='headlineClass'>Our Moto</h3>
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
          <p>Our Gym offer amenities like locker rooms, showers, and convenient operating hours that fit into your schedule.<br /> This convenience makes it easier to incorporate fitness into your daily routine.
          </p> </div>
        <div className='imgGrid'>
          <img src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D' alt='service' />
        </div>
      </div>
      <h3 className='headlineClass'>Our Offerings</h3>
      <div class='servicesImgContainer'>
        <div class='imgContainer'>
          <img src="services/gym-locker.png" alt='service' />
          <div class='imgDescription'>Locker<hr/>
          <ul>
            <li>Our locker features a robust locking mechanism, providing peace of mind while you focus on your workout.</li>
          </ul>
          </div>
        </div>
        <div class='imgContainer'>
          <img src='services/designer.png' alt='service' />
          <div class='imgDescription'>Inhouse Store<hr/>
          <ul>
            <li>Running out of budget our Inhouse store will provide you with nutrional suppliments</li>
          </ul>
          </div>
        </div>
        <div class='imgContainer'>
        <img src='services/gym-shower.png' alt='service' />
          <div class='imgDescription'>Shower Room<hr/> 
          <ul>
            <li>
              Our shower rooms are equipped with all the necessary amenities to make your post-workout experience as comfortable as possible.
            </li>
          </ul>
          </div>
        </div>
      </div>
      <SubsciptionInfo />
      <Contact />
      <Footer/>
    </services>
  )
}

export default Services