import { Avatar } from "@mantine/core";
import React from "react";

const services = [
  {
    title: "Custom Software Development",
    description: "Build tailored software solutions that drive business growth.",
    icon: "rocket.png", // Replace with actual image/icon
  },
  {
    title: "General IT Consultations",
    description:
      "Our IT consultation service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.",
    icon: "consulting.png", // Replace with actual image/icon
  },
  {
    title: "Web & Mobile App Development",
    description: "Transform your ideas into intuitive and responsive digital experiences.",
    icon: "mobile.png", // Replace with actual image/icon
  },
  
];

const ServicesCards = () => {
  return (
    // <div className="bg-[#0d0c1d] z-10 relative -mt-20 mb-11 text-white pb-10  grid grid-cols-1 md:grid-cols-5 gap-6  mx-auto">
    <div className="bg-[#0d0c1d] z-10 relative -mt-20 mb-11 text-white pb-10  flex gap-6 xl-mx:px-5  md-mx:flex-col md-mx:w-full mx-auto ">

      <img className="w-52 h-5/7 xl-mx:hidden " src="/assets/LeftBox.png" alt="" />

      {services.map((service, index) => (
        <div key={index} className="bg-[#120819] p-4 rounded-lg shadow-lg hover:shadow-[#8c8ccd] text-center border w-2/6  md-mx:w-[70%] sm-mx:w-[80%] md-mx:mx-auto  "> 
          <h3 className="text-lg font-bold underline ">{service.title}</h3>
          <p className="text-gray-400 py-4 xl-mx:px-1 px-5">{service.description}</p>
          {/* <div className="text-3xl mb-4">{service.icon}</div> */}
          <Avatar className="mx-auto" size='lg' src={`/assets/${service.icon}`}  / >        
          </div>
      ))}

      <img className="w-52 h-5/7 xl-mx:hidden" src="/assets/RightBox.png" alt="" />
    </div>
  );
};

export default ServicesCards;
