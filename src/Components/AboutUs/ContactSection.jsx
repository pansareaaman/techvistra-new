import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#110016] to-[#120B20] text-white pt-10 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
      
      {/* Heading */}
      <div className="text-center mb-10"> 
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#B69CD8]">
            Driving Innovation,
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#A17BC4]">
            Delivering Excellence,
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#8A5CA6] opacity-60">
            Creating Impact.
          </h1>
        </div>

        {/* Call-to-action button */}
        <div className="mt-12 mb-3 p-1 rounded-full border border-purple-300 inline-block">
          <button className="rounded-full px-4 sm:px-6 py-2 text-white text-base sm:text-lg font-semibold transition-all duration-300 bg-[#765d98] hover:bg-[#2a1544] hover:text-[#e8e6ea]">
            Discover What We Offer
          </button>
        </div>
      </div>

      {/* Contact Card */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
        {/* Left Content */}
        <div className="w-full md:w-2/3 pr-0 md:pr-8">
          <h2 className="text-xl sm:text-2xl font-semibold">Let’s Build Something Incredible Together!</h2>
          <p className="text-gray-300 mt-3 text-sm sm:text-base">
            Join our network and stay updated on the latest innovations, tech insights, and solutions tailored for your business.
          </p>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            Stay in touch with TechVistra for updates, insights, and tailored solutions to transform your business.
          </p>

          {/* Email Input */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="email"
              placeholder="Email address"
              className="w-full sm:w-2/4 p-2 rounded-xl bg-gradient-to-r from-[#A9A9D2] to-[#C4C4DE] text-black placeholder-black outline-none"
            />
            <button className="px-4 py-2 border border-gray-500 bg-blue-950 hover:bg-blue-900 transition duration-300 rounded-lg text-white font-semibold">
              Submit
            </button>
          </div>

          {/* Contact Info */}
          <p className="text-gray-400 italic mt-4 text-sm sm:text-base">
            Have a project in mind? Reach out to us directly at <span className="font-bold text-white">contact@techvistra.com</span>.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center">
          <img
            src="/Image/Laptop.png"
            alt="Working on Laptop"
            className="w-60 sm:w-72 md:w-80 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
