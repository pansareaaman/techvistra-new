import React from "react";
import { FaCode, FaMobileAlt, FaShieldAlt, FaPalette, FaCog, FaBullhorn } from "react-icons/fa";

const services = [
  { icon: <FaCode />, title: "Software Development", desc: "Custom solutions for efficiency and scalability." },
  { icon: <FaMobileAlt />, title: "Web & Mobile Apps", desc: "High-performance, intuitive applications tailored for business." },
  { icon: <FaShieldAlt />, title: "Cybersecurity & Privacy", desc: "Data protection, security compliance, and encryption." },
  { icon: <FaPalette />, title: "UI/UX Design", desc: "Engaging and user-friendly digital experiences." },
  { icon: <FaCog />, title: "AI & Automation", desc: "Automate processes for efficiency and cost savings." },
  { icon: <FaBullhorn />, title: "Digital Marketing", desc: "SEO, social media, and brand growth strategies." },
];

const WhatWeOffer  = () => {
  return (
    // bg-gradient-to-r from-[#0d0c1d] to-[#1a1a2e]
    <section className="relative py-14 text-white max-w-[90%] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent">
           What We Offer..
        </h2>
        <p className="text-gray-400 mt-2">We are deeply committed to the growth and success of our clients.</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex items-center bg-[#1a1a2e] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="text-purple-400 text-3xl mr-4">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <button className="bg-[#6b5cb2] px-6 py-3 rounded-full text-lg hover:bg-purple-900 transition-all">
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default WhatWeOffer ;
