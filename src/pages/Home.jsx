import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import UpcomingEvent from '../components/UpcomingEvent'
import TestimonialPage from '../components/Testimonial'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Speaker  from '../components/Speaker'
import AboutPage from '../components/AboutPage'
import EventSelection from '../components/EventSelection'
import Footer1 from './Footer1'
import Form from '../components/Form'


const Home = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50">
        <Navbar />
        <Hero />
        <AboutPage />
        <EventSelection />
        {/* <UpcomingEvent /> */}
        {/* <Gallery /> */}
        {/* <Speaker /> */}
        <TestimonialPage />
        <FAQ />
        <div className='mt-20 bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 p-10'>
          <Form />
        </div>
        
        <Footer1 />
    </div>
  )
}

export default Home