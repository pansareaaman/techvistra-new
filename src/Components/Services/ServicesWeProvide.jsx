import React from "react";

const services = [
  {
    title: "Software Development",
    description:
      "Custom software solutions designed for efficiency and scalability. Includes: Web apps, enterprise solutions, API integrations.",
  },
  {
    title: "Web & Mobile App Development",
    description:
      "Intuitive, high-performance applications tailored to your business. Includes: Multi-platform apps, SaaS solutions.",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting engaging, user-friendly digital experiences. Includes: Responsive web design, product consulting.",
  },
  {
    title: "Cybersecurity & Data Privacy",
    description:
      "Ensuring data protection and security compliance. Includes: Data encryption, identity management.",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategies to enhance your online presence. Includes: SEO, social media marketing, email campaigns.",
  },
  {
    title: "AI & Automation",
    description:
      "Automating workflows to optimize business processes. Includes: AI-powered data management, system integration.",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "High-performance eCommerce platforms. Includes: B2B/B2C portals, payment services, order management.",
  },
  {
    title: "Software Testing",
    description:
      "Ensuring software reliability with seamless performance. Includes: Automation testing, quality assurance.",
  },
];

const ServicesWeProvide = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-[#0d0c1d] to-[#1a1a2e] text-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent">
          Services We Provide – TechVistra
        </h2>
        <p className="text-gray-400 mt-2">Empowering Businesses with Cutting-Edge Solutions</p>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        {/* Left Side - Service List */}
        <div className="lg:w-2/3">
          {services.map((service, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-purple-400">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side - Image Gallery */}
        <div className="lg:w-1/3 grid grid-cols-2 gap-4 mt-6 lg:mt-0">
          <img
            src="/assets/img1.png"
            alt="Software Development"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/assets/img2.png"
            alt="Cybersecurity"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/assets/img3.png"
            alt="AI & Automation"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/assets/img4.png"
            alt="E-Commerce Solutions"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <button className="bg-purple-600 px-6 py-3 rounded-full text-lg hover:bg-purple-700 transition-all">
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default ServicesWeProvide;
