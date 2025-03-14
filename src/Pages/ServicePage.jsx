import React, { useEffect } from 'react'
import ServicesMain from '../Components/Services/ServicesMain'

import WhyChooseUs from '../Components/Services/WhyChooseUs'
import ServicesSection from '../Components/Services/ServicesSection'

import GetStarted from '../Components/Services/GetStarted'
import ScaleBusinessSection from '../Components/Services/ScaleBusinessSection'
import WhatWeOffer from '../Components/Services/WhatWeOffer'
import Clients from '../Components/Services/Clients'

const ServicePage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className='bg-[#0d0c1d] font-poppins'>
        <ServicesMain/>
        <WhatWeOffer />
        <WhyChooseUs/>
        <ServicesSection/> 
        <GetStarted/>
        <Clients/>
        <ScaleBusinessSection/>
    </div>
  )
}

export default ServicePage
