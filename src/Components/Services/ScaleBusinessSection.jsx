import React from "react";

const ScaleBusinessSection = () => {
  return (
    <section className="relative bg-cover bg-center text-white py-20 px-10 flex flex-col items-center justify-center bg-[#231A29] rounded-xl max-w-[85%] mx-auto"
      style={{ backgroundImage: "url('/Image/your-background-image.jpg')" }} // Replace with actual path
    >
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold xs-mx:text-3xl">
          Are you ready to scale your business?
        </h2>
        <p className="text-lg text-gray-300 mt-4 xs-mx:text-base">
          Get in touch and let us build something amazing{" "}
          <span className="text-[#A377D2] font-semibold">together!</span>
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="/contact"
            className="border border-white text-gray-200 px-6 py-3 rounded-full text-lg xs-mx:text-base font-semibold hover:bg-white hover:text-black transition-all flex items-center gap-2 max-w-[50%] mx-auto bg-gradient-to-r from-[#A9A9D2] to-[#C4C4DE]
            sm-mx:max-w-[70%]  xs-mx:max-w-[90%]"
          >
            Send a message →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScaleBusinessSection;
