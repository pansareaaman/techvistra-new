import React, { useEffect } from 'react'
import ServicesMain from '../Components/Services/ServicesMain'
import ServicesWeProvide from '../Components/Services/ServicesWeProvide'
import Section1 from '../Components/Services/WhatWeOffer'
import WhyChooseUs from '../Components/Services/WhyChooseUs'
import ServicesSection from '../Components/Services/ServicesSection'
import ServicesSections from '../Components/ServicePage/ServicesSections'
import GetStarted from '../Components/Services/GetStarted'
import ScaleBusinessSection from '../Components/Services/ScaleBusinessSection'
import WhatWeOffer from '../Components/Services/WhatWeOffer'

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
        <ServicesSections/>
        <ScaleBusinessSection/>
    </div>
  )
}

export default ServicePage
