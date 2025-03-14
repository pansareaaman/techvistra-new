import React from 'react'
import ServicesMain from '../Components/Services/ServicesMain'
import ServicesWeProvide from '../Components/Services/ServicesWeProvide'
import Section1 from '../Components/Services/Section1'
import WhyChooseUs from '../Components/Services/WhyChooseUs'
import ServicesSection from '../Components/Services/ServicesSection'
import ServicesSections from '../Components/ServicePage/ServicesSections'
import GetStarted from '../Components/Services/GetStarted'

const ServicePage = () => {
  return (
    <div className='bg-[#0d0c1d] font-poppins'>
        <ServicesMain/>
        <Section1 />
        <WhyChooseUs/>
        <ServicesSection/> 
        <GetStarted/>
        {/* <ServicesSections/> */}
    </div>
  )
}

export default ServicePage
