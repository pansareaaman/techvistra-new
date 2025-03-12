import { Avatar, Tooltip } from "@mantine/core";
import React from "react";
import BlurText from "../Animation/BlurText";

const AboutUs = () => {
  return (
    <div className="bg-[#0d0c1d] py-20 text-white relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#1f1233] via-[#2E1C47] to-[#3b2f4d]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('Image/AboutBg.png')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      </div>

      {/* About Us Section */}
      <div className="w-[85%] mx-auto text-center relative z-10">
        <h2 className="text-5xl font-serif xs-mx:text-4xl">About Us</h2>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto md-mx:max-w-xl sm-mx:max-w-lg  sm-mx:text-bs xs-mx:text-sm ">
          {/* Building Digital Solutions That Drive Growth and Innovation – TechVistra at Your Service. */}
          <BlurText text="Building Digital Solutions That Drive Growth and Innovation – TechVistra at Your Service."/>
        </p>

        {/* Ratings Section */}
        <div className="mt-6 flex justify-center items-center gap-3">
          <span className="text-lg">Ratings ⭐ 5.0</span>
          <div className="flex -space-x-2 ">
            <Avatar  size="md" src="/assets/Ellipse 1.png" />
            <Avatar size="md" src="/assets/Ellipse 2.png" />
            <Avatar className="xs-mx:!hidden" size="md" src="/assets/Ellipse 3.png" />
            <Tooltip label="2K+ users" withArrow>
              <Avatar size="md" className="bg-[#6b5cb2] font-normal text-white">2K+</Avatar>
            </Tooltip>
          </div>
        </div>

        {/* Background Faded Text */}
        <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 text-[8rem] font-extrabold text-[#5b4974] opacity-20 tracking-wide leading-none
        lg-mx:text-[7rem]  bs-mx:text-[6rem] md-mx:text-[5rem] sm-mx:text-[4rem] xm-mx:font- xs-mx:text-[3rem]  xsm-mx:text-[2rem]">
          TECHVISTRA
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
