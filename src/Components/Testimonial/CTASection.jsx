import React from "react";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-b from-[#110016] to-[#120B20] text-white pt-16 pb-5 px-6 flex flex-col items-center">
      {/* CTA Card */}
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-[80%]  text-center py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 ">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto py-8">
          Innovation starts with the right technology partner. At{" "}
          <span className="font-semibold text-white">TechVistra</span>, we craft
          cutting-edge solutions tailored to your business needs, ensuring
          efficiency, growth, and success. Let’s build something extraordinary
          together!
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-2 border border-gray-400 text-white rounded-full transition-all duration-300 hover:bg-white hover:text-black">
          Connect With Us!!
        </button>
      </div>

      {/* Supporting Tagline */}
      <div className="mt-16 text-center text-2xl font-medium text-gray-300 max-w-md">
        Empowering <span className="text-white font-bold">businesses</span> with
        technology that <span className="text-white font-bold">drives success</span>.
        <p className="italic text-gray-400 mt-2">- TechVistra</p>
      </div>
    </div>
  );
};

export default CTASection;
