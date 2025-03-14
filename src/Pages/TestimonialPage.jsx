import React, { useEffect } from 'react'
import TestimonialMain from '../Components/Testimonial/TestimonialMain'
import Testimonials from '../Components/Testimonial/Testimonials'
import Cards from '../Components/Testimonial/Cards'
import CTASection from '../Components/Testimonial/CTASection'

const TestimonialPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='bg-[#0d0c1d] font-poppins'>
      <TestimonialMain/>
      <Testimonials/>
      <Cards/>
      <CTASection/>
    </div>
  )
}

export default TestimonialPage
