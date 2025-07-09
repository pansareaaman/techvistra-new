import React from 'react';

const WhoWeAre = () => {
    return (
        <div>
        <div className=" bg-gradient-to-b from-[#110016] to-[#120B20] py-28 flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 text-white">
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center mb-8 ">
                {/* Main Image  md:w-64 lg:w-72   */}
                <img
                    src="/Image/Rectangle 29.png"
                    alt="TechVistra"
                    className="relative w-48 sm:w-56 xl:w-80 -top-10 md:-top-16 rounded-xl shadow-lg
                    xl-mx:-left-14 sm-mx:left-0 xs-mx:-left-10 xs-mx:w-40  md-mx:w-44 xsm-mx:w-32 "
                />

                {/* Overlay Image */}
                <img
                    src="/Image/Rectangle30.png"
                    alt="Overlay"
                    className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 right-12 sm:right-16 md:right-24 w-36 sm:w-44 md:w-52 lg:w-60 xl:w-64 rounded-xl shadow-lg opacity-100
                    lg-mx:right-10  md-mx:right-40 sm-mx:right-28 xs-mx:right-20 xs-mx:w-32 xsm-mx:w-28
                    "
                />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left px-4 sm:px-6 md:px-8 md-mx:pt-12">
                <h2 className="text-sm sm:text-base text-gray-400 uppercase tracking-wide">Who We Are ?</h2>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold italic leading-snug mt-2">
                    Driving Innovation, Empowering Transformation
                </h1>
                <ul className="mt-6 space-y-3 text-gray-300 text-sm sm:text-base md:text-lg">
                    <li>🚀 TechVistra Software Solutions LLP is a Pune‑based IT services & consulting firm specializing in custom software development, mobile app development, web solutions, cloud integration and digital marketing. </li>
                    <li>💻 The company has grown rapidly to support businesses across industries such as logistics, healthcare, e‑learning, travel & hospitality, financial services, and more.</li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default WhoWeAre;
