import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Divider } from "@mantine/core";

const Footer = () => {
  return (
    <footer className="bg-[#0d0c1d] text-gray-300 py-10 px-5">
      <Divider className="px-7 py-7" color="#2d2d2d" size="sm" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Left Section - About */}
        <div className="md:col-span-2 text-center md:text-left pl-6">
          <h2 className="text-lg font-semibold text-white">TECHVISTRA</h2>
          <p className="text-sm mt-3 py-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem adipisci blanditiis
            repellat reiciendis error aspernatur velit incidunt molestias a ab laborum assumenda
            ratione labore reprehenderit distinctio magnam.
          </p>
          {/* Subscription Form */}
          <div className="mt-4">
            <h3 className="text-sm font-medium">Get the latest updates from TechVistra</h3>
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full sm:w-2/3 bg-gray-800 text-white px-4 py-2 rounded-full outline-none"
              />
              <button className="bg-gradient-to-r from-[#A9A9D2] to-[#C4C4DE] text-black font-bold px-6 py-2 rounded-full">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <FontAwesomeIcon size="xl" icon={faFacebook} />
              <FontAwesomeIcon size="xl" icon={faInstagram} />
              <FontAwesomeIcon size="xl" icon={faTwitter} />
            </div>
          </div>
        </div>
           
          <div className=" flex gap-11 md:col-span-2  md:gap-8 md-mx:justify-evenly ">
        {/* Middle Section - Services */}
        <div className="text-center md:text-left ">
          <h3 className="text-lg font-semibold text-white">Our Services</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Custom Software Development</li>
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>Cybersecurity Solutions</li>
            <li>UI/UX Design</li>
            <li>Software Integration</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>

        {/* Right Section - Company */}
        <div className="text-center md:text-left ">
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        </div>

      </div>

      {/* Bottom Section */}
      <Divider className="mx-7 my-7" color="#2d2d2d" size="sm" />

      <div className="flex flex-col md:flex-row items-center justify-center text-sm pt-2 max-w-lg mx-auto text-center">
        <img className="w-16 h-16 mb-2 md:mb-0" src="/Image/hand.png" alt="Logo" />
        <div>
          <p>Copyright &copy; 2025 TECHVISTRA SOFTWARE SOLUTIONS LLP. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white">Legal Notice DMCA</a> |
            <a href="#" className="hover:text-white">Terms of Service</a> |
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;