import React from 'react';

const WhoWeAre = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#110016] to-[#120B20] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 text-white">
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 flex justify-center">
                {/* Background Blur Effect */}
                {/* <div className="absolute top-6 left-6 w-60 h-60 bg-white/10 rounded-xl blur-lg"></div> */}

                {/* Main Image */}
                <img
                    src="/Image/Rectangle 29.png"
                    alt="TechVistra"
                    className="relative w-56 md:w-56 right-20 -top-20 rounded-xl shadow-lg"
                />

                {/* Overlay Image */}
                <img
                    src="/Image/Rectangle30.png"
                    alt="Overlay"
                    className="absolute -bottom-16 right-24 w-48 md:w-60 rounded-xl shadow-lg opacity-100"
                />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 text-left">
                <h2 className="text-lg text-gray-400 uppercase tracking-wide">Who We Are ?</h2>
                <h1 className="text-3xl md:text-4xl font-bold italic leading-snug">
                    Driving Innovation, Empowering Transformation
                </h1>
                <ul className="mt-6 space-y-3 text-gray-300 text-lg">
                    <li>🚀 TechVistra is a leading technology solutions provider dedicated to helping businesses transform their ideas into impactful digital solutions.</li>
                    <li>💻 We specialize in custom software development, web and mobile app creation, cybersecurity, and innovative UI/UX design.</li>
                </ul>
            </div>
        </div>
    );
};

export default WhoWeAre;
