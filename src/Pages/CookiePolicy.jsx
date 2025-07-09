import React, { useEffect } from "react";

const CookiePolicy = () => {
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
            <h2 className="text-5xl text-gray-400 font-serif xs-mx:text-4xl">Cookie Policy</h2>
          </div>
          <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 text-[7rem] font-extrabold text-[#5b4974] opacity-15 tracking-wide leading-none">
            TECHVISTRA
          </div>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#110016] to-[#120B20] text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-gray-100 mb-4">
          Cookie Policy
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
          <strong>Techvistra Software Solutions Liability Limited</strong>
        </p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
          Last Updated: [Insert Date]
        </p>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
          This Cookie Policy explains how Techvistra Software Solutions Liability Limited ("Techvistra," "we," "our," or "us") uses cookies and similar tracking technologies when you visit our website or use our services.
        </p>

        {/* Section 1: What Are Cookies? */}
        <h3 className="text-lg font-semibold text-gray-100 mt-6">1. What Are Cookies?</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
          Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. They help enhance your experience by remembering preferences, tracking analytics, and enabling essential functionalities.
        </p>

        {/* Section 2: How We Use Cookies */}
        <h3 className="text-lg font-semibold text-gray-100 mt-6">2. How We Use Cookies</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
          We use cookies to:
        </p>
        <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base md:text-lg">
          <li>Enhance user experience and website functionality.</li>
          <li>Analyze website traffic and performance.</li>
          <li>Remember user preferences and settings.</li>
          <li>Enable secure login and authentication processes.</li>
          <li>Provide personalized content and advertisements.</li>
        </ul>

        {/* Section 3: Types of Cookies We Use */}
        <h3 className="text-lg font-semibold text-gray-100 mt-6">3. Types of Cookies We Use</h3>
        <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base md:text-lg">
          <li><strong>Essential Cookies:</strong> Required for website functionality and security.</li>
          <li><strong>Performance Cookies:</strong> Help analyze how users interact with the site.</li>
          <li><strong>Functional Cookies:</strong> Store user preferences for a personalized experience.</li>
          <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads and track ad performance.</li>
        </ul>

        {/* Section 4: Managing Cookie Preferences */}
        <h3 className="text-lg font-semibold text-gray-100 mt-6">4. Managing Your Cookie Preferences</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
          You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect website functionality.
        </p>

        {/* Section 5: Third-Party Cookies */}
        <h3 className="text-lg font-semibold text-gray-100 mt-6">5. Third-Party Cookies</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
          Some third-party services, such as analytics and advertising networks, may use cookies on our website. We do not control these cookies, and their use is subject to the respective third-party privacy policies.
        </p>

        {/* Section 6: Updates to This Policy */}
        <h3 className="text-lg font-semibold text-gray-100 mt-6">6. Updates to This Cookie Policy</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
          We may update this Cookie Policy periodically. Changes will be posted on this page with an updated "Last Updated" date.
        </p>

        {/* Section 7: Contact Information */}
        <h3 className="text-lg font-semibold text-gray-100 mt-6">7. Contact Us</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          If you have any questions about this Cookie Policy, contact us at:
        </p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          <strong>Techvistra Software Solutions Liability Limited</strong> <br />
          Nana Peth, Pune-411002 <br />
          <strong>Email:</strong> contact@techvistra.com <br />
          <strong>Phone:</strong> +91 9371749498
        </p>
      </div>
    </>
  );
};

export default CookiePolicy;