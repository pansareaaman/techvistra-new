import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaGlobe,
  FaCloud,
  FaRobot,
  FaUserTie,
  FaProjectDiagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Import this

const services = [
  {
    icon: <FaCode />,
    title: "Custom Software Development",
    desc: "Tailored development of business-critical software, platforms, and APIs to meet unique business requirements.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    desc: "End-to-end Android & iOS mobile app development ensuring scalable and intuitive user experiences.",
  },
  {
    icon: <FaGlobe />,
    title: "Web-Based Platform Development",
    desc: "Full-cycle web app development, CMS integration, responsive UI/UX design, and performance optimization.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Integration & DevOps",
    desc: "Cloud infrastructure transition, CI/CD pipeline automation, and full application lifecycle support.",
  },
  {
    icon: <FaRobot />,
    title: "Business Automation & AI/ML",
    desc: "Workflow automation and machine learning solutions for process optimization and decision-making.",
  },
  {
    icon: <FaUserTie />,
    title: "IT Consulting & Digital Transformation",
    desc: "Strategic consulting for digital transformation, IT governance, and scalable architecture planning.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "API Development & Middleware",
    desc: "API and middleware development for integrated system and SaaS connectivity.",
  },
];

const WhatWeOffer = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <section className="relative py-14 text-white max-w-[90%] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent">
          What We Offer..
        </h2>
        <p className="text-gray-400 mt-2">
          We are deeply committed to the growth and success of our clients.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start bg-[#1a1a2e] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-purple-400 text-3xl mr-4 mt-1">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/contact")} // ✅ Redirect to Contact
          className="bg-[#6b5cb2] px-6 py-3 rounded-full text-lg hover:bg-purple-900 transition-all"
        >
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default WhatWeOffer;
