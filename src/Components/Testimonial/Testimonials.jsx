import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-[#110016] to-[#120B20] flex flex-col lg:flex-row items-center text-center lg:text-left px-6 sm:px-12 md:px-16 lg:px-24 py-16">
      {/* Header Section */}
      <div className="flex flex-col text-gray-300 max-w-xl justify-center gap-4 font-serif">
        <div className="text-lg uppercase tracking-wide">Testimonials</div>
        <div className="text-4xl sm:text-5xl font-bold leading-tight ">
          <div className="flex flex-col lg-mx:flex-row gap-2"> Our <span className="text-[#B69CD8]"> Client's</span> </div>
          are Saying...
        </div>
      </div>

      {/* Description Section */}
      <div className="flex w-full lg:w-3/6 mx-auto text-gray-300 items-center justify-center mt-6 lg:mt-0">
        <p className="px-4 sm:px-6 text-base sm:text-lg">
          Our clients are at the heart of everything we do. Hear how TechVistra
          has helped businesses grow, innovate, and succeed with cutting-edge
          technology solutions. Their words speak for our commitment to
          excellence.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
