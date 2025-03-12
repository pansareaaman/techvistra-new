import { Divider } from "@mantine/core";
import React from "react";

const technologies = [
  { name: "JavaScript", icon: "/Logo/JavaScript.png" },
  { name: "C++", icon: "/Logo/C++.png" },
  { name: "MongoDB", icon: "/Logo/MongoDB.png" },
  { name: "PHP", icon: "/Logo/php.png" },
  { name: "Python", icon: "/Logo/python.png" },
  { name: "React", icon: "/Logo/React.png" },
  { name: "Java", icon: "/Logo/Java.png" },
  { name: "UI/UX", icon: "/Logo/Figma.png" },
];

const IntegrationTechnologies = () => {
  return (
    <div className=" text-white py-10 px-5 text-center">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#1e1e50] to-[#5d5d8c] p-2 pb-6 rounded-3xl mx-auto w-3/4 md:w-1/2">
        <h4 className="text-[#0d0c1d]  font-semibold uppercase tracking-widest">Are You Ready?</h4>
        <h2 className="text-3xl max-w-xs mx-auto font-bold mt-2 p-4">Be A Part Of The Next Big Thing</h2>
        <button className="mt-4 bg-[#0d0c1d] text-white px-6 py-2 rounded-full font-semibold">
          Get Started
        </button>
      </div>

      {/* Integration & Technologies Section */}
      <div className="mt-20 ">
        <h2 className="text-4xl font-bold sm-mx:text-3xl  xs-mx:text-2xl">Integration and Technologies</h2>
        <p className="text-gray-400 mt-2 max-w-lg mx-auto  sm-mx:max-w-md  xs-mx:max-w-sm  xs-mx:text-sm" >
          A sleek, modern tech-inspired gradient or a high-quality image of a tech team at work, 
          digital interfaces, or futuristic technology.
        </p>

        <Divider className="max-w-xs mx-auto my-7 " color='#2d2d2d'  size="sm"  />

        {/* <div className="flex flex-wrap justify-center gap-12 mt-6 max-w-lg mx-auto "> */}
        <div className="grid grid-cols-3 md:grid-cols-4 justify-center gap-12 mt-6 max-w-2xl mx-auto  md-mx:gap-10  xs-mx:gap-7">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.icon} alt={tech.name} className="h-12 w-auto  xs-mx:h-9" />
              <p className="mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-[#1a1a2e] text-gray-300 px-6 py-2 rounded-full">
          Show all Integrations +
        </button>

        {/* <Divider className=" mx-7 my-7 " color='#2d2d2d'  size="sm"  /> */}
      </div>
    </div>
  );
};

export default IntegrationTechnologies;
