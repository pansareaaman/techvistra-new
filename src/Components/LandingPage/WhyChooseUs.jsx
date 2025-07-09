import React from "react";
import { FaAward, FaProjectDiagram, FaUserFriends, FaGlobe, FaStar } from "react-icons/fa";

const reasons = [
  {
    icon: <FaAward />,
    title: "Expertise Across Industries",
    desc: "Proven results in fintech, healthcare, logistics, e-learning, hospitality, and product development.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Scalable Architecture",
    desc: "Systems engineered for growth and long-term performance.",
  },
  {
    icon: <FaUserFriends />,
    title: "User-Centric Design",
    desc: "High-impact UX/UI ensuring user engagement and satisfaction.",
  },
  {
    icon: <FaGlobe />,
    title: "Remote & Agile Teams",
    desc: "Distributed teams based in India and the USA experienced in agile methodologies.",
  },
  {
    icon: <FaStar />,
    title: "Recognized on Upwork",
    desc: "High client ratings and project success on freelance platforms.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0f0d1d] text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent">
          Why Choose Us
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Why Choose TechVistra Software Solutions LLP?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-start gap-4"
          >
            <div className="text-purple-400 text-3xl mt-1">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
