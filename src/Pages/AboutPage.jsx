import React from 'react'
import AboutUs from '../Components/AboutUs/AboutUs'
import WhoWeAre from '../Components/AboutUs/WhoWeAre'
import MissionVision from '../Components/AboutUs/MissionVision'
import ContactSection from '../Components/AboutUs/ContactSection'

const AboutPage = () => {
  return (
    <div className="bg-[#0d0c1d]  ">
      <AboutUs/>
      <WhoWeAre/>
      <MissionVision/>
      <ContactSection/>
    </div>
  )
}

export default AboutPage
