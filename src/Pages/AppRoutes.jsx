import React from 'react'
import Home from '../Components/LandingPage/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'

import TestimonialPage from './TestimonialPage'
import ServicePage from './ServicePage'

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      <div className='relative'>
      <Header  />
      <Routes>
        
        <Route path='/' element= { <HomePage/>}  />
        <Route path='/about-us' element= { <AboutPage/>}  />
        <Route path='/services' element= { <ServicePage/>}  />
        <Route path='/testimonials' element= { <TestimonialPage/>}  />
        <Route path='/contact' element= { <ContactPage/>}  />




      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
