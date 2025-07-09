import React from "react";
import { FaChartLine, FaSearch, FaBullhorn, FaAd, FaUsers, FaClipboardList } from "react-icons/fa";
import MarketingMain from "./MarketingMain";

const services = [
  {
    icon: <FaSearch />,
    title: "Website SEO Optimization",
    desc: "Improve visibility, boost organic traffic, and rank higher through technical audits, on-page, and off-page SEO strategies.",
  },
  {
    icon: <FaChartLine />,
    title: "SEO for Webpages",
    desc: "We fine-tune content, metadata, and internal linking for individual pages to maximize search engine performance.",
  },
  {
    icon: <FaAd />,
    title: "Paid Ads & Campaign Management",
    desc: "High-converting campaigns on Google, Facebook, Instagram, and LinkedIn focused on leads, conversions, and awareness.",
  },
  {
    icon: <FaClipboardList />,
    title: "Digital Marketing Consulting",
    desc: "Expert strategy audits, growth analysis, and customized digital action plans to drive results.",
  },
  {
    icon: <FaBullhorn />,
    title: "Social Media & Content Strategy",
    desc: "Grow your audience with Reels, creative posts, content calendars, and performance analysis.",
  },
  {
    icon: <FaUsers />,
    title: "Analytics & Reporting",
    desc: "Detailed monthly insights across all channels to understand what’s working and how to improve.",
  },
];

const reasons = [
  "Proven success across industries",
  "Certified marketing professionals",
  "Customized strategies for each client",
  "Transparent reporting & measurable ROI",
  "Dedicated account manager for each client",
];

const MarketingPage = () => {
  return (
    <>
    <MarketingMain/>
    <div className="bg-gradient-to-b from-[#0d0c1d] to-[#151329] text-white px-4 sm:px-8 md:px-16 py-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent">
          TechVistra – Complete Digital Marketing Solutions
        </h1>
        <p className="text-gray-400 mt-4 text-base md:text-lg">
          We help you gain visibility, drive traffic, and convert visitors into loyal customers with tailored digital marketing strategies.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Digital Marketing Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1f1e33] p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-purple-400 text-3xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Choose TechVistra?</h2>
        <ul className="space-y-4 text-gray-300 list-disc list-inside text-base">
          {reasons.map((reason, index) => (
            <li key={index} className="hover:text-white transition">{reason}</li>
          ))}
        </ul>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold mb-4 text-[#b496e8]">
          Let’s Grow Your Business
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Whether you're starting fresh or scaling your digital presence, TechVistra is your go-to partner for success. Contact us today for a free consultation.
        </p>
        <button
          onClick={() => window.location.href = "/contact"}
          className="bg-[#6b5cb2] hover:bg-[#523f90] transition px-6 py-3 rounded-full font-semibold text-white"
        >
          Get a Free Consultation
        </button>
      </div>
    </div>
    </>
  );
};

export default MarketingPage;
