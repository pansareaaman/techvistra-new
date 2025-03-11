import React from 'react';

const MissionVision = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 bg-gradient-to-b from-[#110016] to-[#120B20] text-white">
            {/* Left Content Box */}
            <div className="w-full md:w-1/2 p-8 ">
                <h2 className="text-lg text-gray-400 uppercase tracking-wide">Our Mission, Vision & Values</h2>
                <h1 className="text-2xl md:text-3xl font-semibold italic text-gray-100 mt-2">
                    To empower businesses with cutting-edge software solutions that drive growth, efficiency, and innovation.
                </h1>
                
                <hr className="border-gray-600 my-4" />

                <ul className="text-gray-300 text-lg space-y-3 list-disc">
                    <li> To be the global leader in delivering exceptional technology solutions that redefine industry standards.</li>
                    
                    <li className="mt-2">
                        <span className="font-semibold text-gray-100">Core Values:</span>
                        <ul className="mt-1 ml-6 list-disc">
                            <li>Excellence</li>
                            <li>Integrity</li>
                            <li>Innovation</li>
                            <li>Customer Success</li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                <img 
                    src="/Image/OurMission.png" 
                    alt="Mission Vision" 
                    className="w-80 md:w-96 rounded-lg shadow-xl"
                />
            </div>
        </div>
    );
};

export default MissionVision;
