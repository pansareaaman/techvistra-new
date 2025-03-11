import { Avatar, AvatarGroup } from "@mantine/core";
import React from "react";
import HomeTitle from "./HomeTitle";
import BlurText from "../Animation/BlurText";

const Home = () => {
  return (
    <div className="pt-40">
    <div className="relative h-screen w-full">
      {/* Gradient Background Layer */}
      {/* bg-gradient-to-r from-[#1b1039] to-[#11081f] */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c1d] to-[#1a1a2e]"></div>

      {/* Background Images Layer */}
      <div className="absolute inset-0 flex">
        {/* Left Background Image */}
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/Image/br.png')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        </div>

        {/* Right Background Image */}
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/Image/br.png')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        </div>
      </div>

      {/* Main Content   <HomeTitle text="Building"/> */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[70%] text-white text-center">
         {/* <h1 className="text-4xl md:text-6xl font-bold">
          Building <span className="bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent">Digital</span> Solutions
          <br />
          That Power Your Business{" "}
          <span className="bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent">Success</span>
        </h1> */}

        <h1 className=" flex flex-col gap-4  leading-tight max-w-6xl mx-auto">
          <HomeTitle className="text-center gap-4 justify-center " text="Building Digital Solutions " />
          <HomeTitle className="text-center gap-3 " text="That Power Your Business Success" />
        </h1>
        

        <p className="text-gray-400 mt-4 max-w-2xl">
          {/* Custom Software Development, Digital Solutions, and Expert Consultation Tailored for Your Business Needs. */}
          <BlurText className="" text="Custom Software Development, Digital Solutions, and Expert Consultation Tailored for Your Business Needs."/>
        </p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="bg-purple-600 px-6 py-3 rounded-full text-md hover:bg-purple-700">
            Get started for free
          </button>
          <AvatarGroup>
            <Avatar src="/assets/Ellipse 1.png" />
            <Avatar src="/assets/Ellipse 2.png" />
            <Avatar src="/assets/Ellipse 3.png" />
          </AvatarGroup>
          <div className="flex flex-col text-xs">
            <p>Trusted by Over</p>
            <p>+ 10 users</p>
          </div>
        </div>
      </div>


    </div>
    </div>
  );
};

export default Home;
