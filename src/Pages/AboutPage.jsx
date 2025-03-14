import React, { useEffect } from 'react'
import AboutUs from '../Components/AboutUs/AboutUs'
import WhoWeAre from '../Components/AboutUs/WhoWeAre'
import MissionVision from '../Components/AboutUs/MissionVision'
import ContactSection from '../Components/AboutUs/ContactSection'

const AboutPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="bg-[#0d0c1d] font-poppins ">
      <AboutUs/>
      <WhoWeAre/>
      <MissionVision/>
      <ContactSection/>
    </div>
  )
}

export default AboutPage
