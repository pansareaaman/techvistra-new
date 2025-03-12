import React from 'react'

const ContactMain = () => {
  return (
    <div
    className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white relative px-4 bg-[#120819] font-poppins"
    style={{ backgroundImage: "url('/assets/contactBackground.png')" }} // Public folder image
  >
    {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-[#120819] bg-opacity-50"></div>

    {/* Content */}
    <div className="relative z-10 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-300 mb-2 text-lg ">Get in Touch with Us</p>

      {/* Icon */}
      <div className="text-2xl">
        <img src="/assets/contactIcon.png" alt="Contact Icon" className="w-16 h-16 mx-auto" />
      </div>

      {/* Description */}
      <p className="text-gray-300 mt-4 max-w-xl mx-auto ">
        We’re here to answer your questions, discuss your projects, and help bring your ideas to life.
      </p>
    </div>

    {/* Large Background Text */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-6xl md:text-8xl font-extrabold text-gray-700 opacity-30 
    lg-mx:text-[7rem]  bs-mx:text-[6rem] md-mx:text-[5rem] sm-mx:text-[4rem] xm-mx:font- xs-mx:text-[3rem]  xsm-mx:text-[2rem]">
      TECHVISTRA
    </div>

    
  </div>
  )
}

export default ContactMain
