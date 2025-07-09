import React, { useEffect } from 'react';
import { Avatar, Tooltip } from "@mantine/core";
import BlurText from "../Components/Animation/BlurText";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center bg-[#0d0c1d] py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/Image/TestimonialBg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        <div className="w-[85%] mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-5xl text-gray-400 font-serif xs-mx:text-4xl">Terms of Service</h2>
          </div>
          <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 text-[7rem] font-extrabold text-[#5b4974] opacity-15 tracking-wide leading-none lg-mx:text-[7rem] bs-mx:text-[6rem] md-mx:text-[5rem] sm-mx:text-[4rem] xm-mx:font- xs-mx:text-[3rem] xsm-mx:text-[2rem]">
            TECHVISTRA
          </div>
        </div>
      </div>
      
      {/* Terms and Conditions Section */}
      <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#110016] to-[#120B20] text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-gray-100 mb-4">Terms and Conditions</h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">Last Updated: March 17, 2025</p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">Welcome to Techvistra Software Solutions Liability Limited ("Techvistra," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of our website, software, products, and services (collectively, "Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please refrain from using our Services.</p>
        
        <h3 className="text-lg font-semibold text-gray-100 mt-6">1. Definitions</h3>
        <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base md:text-lg">
          <li><strong>Company:</strong> Techvistra Software Solutions Liability Limited.</li>
          <li><strong>User:</strong> Any individual or entity using our Services.</li>
          <li><strong>Software:</strong> Any proprietary software, application, or digital solution provided by Techvistra.</li>
          <li><strong>Services:</strong> All products, software, solutions, and support offered by Techvistra.</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-gray-100 mt-6">2. Use of Services</h3>
        <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base md:text-lg">
          <li>You must be at least 18 years old to use our Services.</li>
          <li>You agree to use our Services solely for lawful purposes and in accordance with these Terms.</li>
          <li>Unauthorized use, duplication, modification, or distribution of our software, content, or intellectual property is strictly prohibited.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-gray-100 mt-6">3. Intellectual Property Rights</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">All intellectual property rights in our software, content, and branding belong to Techvistra or its licensors.</p>
        
        <h3 className="text-lg font-semibold text-gray-100 mt-6">4. Software License</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">Techvistra grants you a limited, non-exclusive, non-transferable, and revocable license to use our software solely for its intended purpose.</p>
        
        <h3 className="text-lg font-semibold text-gray-100 mt-6">5. Payment and Subscription</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">Certain Services require payment. By purchasing our software or subscription-based services, you agree to pay all applicable fees.</p>
        
        <h3 className="text-lg font-semibold text-gray-100 mt-6">6. Data Privacy and Security</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">Your privacy is important to us. Our collection, use, and protection of personal data are governed by our Privacy Policy.</p>
        
        <h3 className="text-lg font-semibold text-gray-100 mt-6">7. Limitation of Liability</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">Techvistra shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our Services.</p>
        
        <h3 className="text-lg font-semibold text-gray-100 mt-6">8. Contact Information</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">For any questions or concerns regarding these Terms, please contact us at:</p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg"><strong>Techvistra Software Solutions Liability Limited</strong></p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">[Company Address- Nana Peth, Pune-411002]</p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">[Email Address-  contact@techvistra.com]</p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">[Phone Number-  +91 9371749498]</p>
        {/* <p className="text-gray-300 text-sm sm:text-base md:text-lg">Nana Peth, Pune-411002</p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">contact@techvistra.com</p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">+91 9371749498</p> */}
      </div>
    </>
  );
};

export default TermsOfService;