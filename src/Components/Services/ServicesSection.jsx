import React from "react";

const ServicesSection = () => {
  return (
    <section className=" text-white py-12 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between bg-[#231A29] rounded-xl max-w-[85%] mx-auto">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/Image/Pc.png" // Replace with actual path
          alt="Developer Working"
           className="w-auto h-96 drop-shadow-lg"
        //   className="w-full max-w-[450px] md:max-w-[550px]  h-auto drop-shadow-lg"
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h2 className="bg-gradient-to-r from-[#765b92] to-[#c2a2e3] bg-clip-text text-transparent text-3xl md:text-4xl font-bold">
          We develop high-quality web and mobile applications for organizations, institutions, and SMEs
        </h2>
        <p className="text-gray-300 text-lg mt-4">
          Our team is well-versed in software development and is ready to help develop the applications of your choice.
        </p>
        <p className="text-gray-300 text-lg mt-2">
          We take responsibility for building custom software solutions that cater to automation of your business processes and improve efficiency.
        </p>
        
        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#4A1D96] to-[#50238f] text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform inline-block"
          >
            Contact us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
