import React, { useEffect } from 'react'
import Home from '../Components/LandingPage/Home'
import ServicesCards from '../Components/LandingPage/ServicesCards'
import MissionValuesCards from '../Components/LandingPage/MissionValuesCards'
import TestimonialsPage from '../Components/LandingPage/TestimonialsPage'
import IntegrationTechnologies from '../Components/LandingPage/IntegrationTechnologies'
import WhyChooseUs from '../Components/LandingPage/WhyChooseUs'
import AI from '../Components/LandingPage/AI'


const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0d0c1d] font-poppins ">
      <Home/>
      <ServicesCards/>
      <MissionValuesCards/>
      <AI/>
      <TestimonialsPage/>
      <IntegrationTechnologies/>
      <WhyChooseUs/>
    </div>
  )
}

export default HomePage
