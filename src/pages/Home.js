import React from 'react'
import Navbar from '../components/Navbar'
import Herosection  from '../components/Herosection'
import Trainer from './Trainer'
import SubsciptionInfo from './SubsciptionInfo'
import Footer from '../components/Footer'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Trainer/>
        <SubsciptionInfo/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}
export default Home