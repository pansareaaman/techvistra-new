import { Avatar, Tooltip } from "@mantine/core";
import React from "react";
import BlurText from "../Animation/BlurText";

const ServicesMain = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center  py-20 text-white">
      {/* Background Image with Full Coverage */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Image/TestimonialBg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>

      {/* Content Section */}
      <div className="w-[85%] mx-auto text-center relative z-10">
        {/* Heading with Star */}
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-5xl text-gray-400 font-sans font-bold xs-mx:text-4xl">Services We Provide - TeachVistra  </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto ">
          <BlurText text="Empowering Businesses with Cutting - Edge Solutions" />
        </p>

        <img className=" h-8 p-0 m-0 items-center mx-auto mt-4 " src="/assets/Star.png" alt="Star Icon" />

        {/* Faded Background Text */}
        <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 text-[7rem] font-extrabold text-[#5b4974] opacity-15 tracking-wide leading-none
        lg-mx:text-[7rem]  bs-mx:text-[6rem] md-mx:text-[5rem] sm-mx:text-[4rem] xm-mx:font- xs-mx:text-[3rem]  xsm-mx:text-[2rem]">
          TECHVISTRA
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;
