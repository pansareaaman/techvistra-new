import React from "react";

const ContactUsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-[#120819] text-white">
      <div className="w-full max-w-3xl bg-gray-900 bg-opacity-30 rounded-lg p-8 shadow-lg text-center backdrop-blur-lg">
        <h2 className="text-lg font-semibold text-gray-300">Contact Us Now</h2>
        <p className="text-gray-400 mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#A9A9D2] to-[#C4C4DE] text-gray-900 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
          Get started for free
        </button>
      </div>

      {/* Quote Section */}
      <div className="mt-10 text-center text-gray-400">
        <p className="text-lg">
          Unleashing the potential of <span className="italic text-indigo-400">Artificial Intelligence</span> for 
          <span className="text-red-400 font-semibold"> Intelligence Solutions</span>
        </p>
        <p className="mt-2 italic text-sm">- TechVistra</p>
      </div>
    </div>
  );
};

export default ContactUsSection;