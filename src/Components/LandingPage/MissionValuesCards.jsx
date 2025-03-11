import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLeaf, IconLeaf2, IconTarget, IconTargetArrow } from "@tabler/icons-react";
import React from "react";
import TrueFocus from "../Animation/TrueFocus";
import RotatingText from "../Animation/RotatingText";

const values = [
  {
    title: "Our Mission",
    description:
      "We strive to empower businesses worldwide by delivering innovative software solutions that drive growth, improve efficiency, and create lasting competitive advantages.",
    icon: <IconTargetArrow size={34} /> , // Replace with actual image/icon
  },
  {
    title: "Our Core Values",
    description:
      "We are driven by a commitment to excellence, integrity, and customer success. We believe in fostering long-term relationships through exceptional software solutions.",
    icon: <FontAwesomeIcon icon={faLeaf} /> , // Replace with actual image/icon
  },
];

const MissionValuesCards = () => {
  return (
    <div className="z-10 relative">
        <div className=" text-white text-center font-semibold text-5xl mt-10 " >
        {/* Everthing you need */}
        {/* <TrueFocus sentence="Everthing you need"manualMode={false} blurAmount={5} borderColor="#00D8FF" animationDuration={1}pauseBetweenAnimations={1}/> */}

        <div className="flex justify-center gap-3 items-center">
        Everything you need 
        <RotatingText texts={["to Grow", "to Innovate", "to Succeed",]} mainClassName="px-2 sm:px-2 md:px-3 bg-[#26244b]  text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg" staggerFrom={"last"} initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-120%" }} staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1" transition={{ type: "spring", damping: 30, stiffness: 400 }} rotationInterval={2000}/>
        </div>
      
        </div>
    <div className="bg-[#0d0c1d] text-white py-10 px-5 grid grid-cols-1 md:grid-cols-2 gap-6 w-5/6 mx-auto ">
        
      {values.map((value, index) => (
        <div key={index} className="bg-[#231A29] p-6 rounded-lg shadow-2xl text-center border hover:shadow-[#8c8ccd] ">
          <div className="text-3xl mb-4 flex justify-center items-center text-black w-10 h-10 mx-auto rounded-lg bg-white">{value.icon}</div>
          <h3 className="text-lg font-bold">{value.title}</h3>
          <p className="text-gray-400 px-12">{value.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MissionValuesCards;
