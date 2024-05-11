import React from 'react'
import Carousel from '../components/Carousel'

const Services = () => {
  const imgsData = [
    'https://plus.unsplash.com/premium_photo-1672280783572-4a254a8e71d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfDB8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3N8ZW58MHwwfDB8fHww',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZpdG5lc3N8ZW58MHwwfDB8fHww'
]
  return (
    <services>
        <Carousel imgsData={imgsData}/>
    </services>
  )
}

export default Services