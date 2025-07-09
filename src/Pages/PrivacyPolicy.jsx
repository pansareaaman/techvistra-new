import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <><div className="relative h-screen w-full flex items-center justify-center bg-[#0d0c1d] py-20 text-white">
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
        <h2 className="text-5xl text-gray-400 font-serif xs-mx:text-4xl">Privacy Policy</h2>
      </div>
      <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 text-[7rem] font-extrabold text-[#5b4974] opacity-15 tracking-wide leading-none lg-mx:text-[7rem] bs-mx:text-[6rem] md-mx:text-[5rem] sm-mx:text-[4rem] xm-mx:font- xs-mx:text-[3rem] xsm-mx:text-[2rem]">
        TECHVISTRA
      </div>
    </div>
  </div>
  
 
    <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#110016] to-[#120B20] text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-gray-100 mb-4">
        Privacy Policy
      </h2>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        <strong>Techvistra Software Solutions Liability Limited</strong>
      </p>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        Last Updated: [Insert Date]
      </p>

      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        Techvistra Software Solutions Liability Limited ("Techvistra," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, software, products, and services (collectively, the "Services").
      </p>

      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        By using our Services, you agree to the collection and use of information as outlined in this policy. If you do not agree, please refrain from using our Services.
      </p>

      {/* Section 1: Information We Collect */}
      <h3 className="text-lg font-semibold text-gray-100 mt-6">
        1. Information We Collect
      </h3>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-2">
        We may collect and process the following types of information:
      </p>

      <h4 className="text-md font-semibold text-gray-100 mt-4">A. Personal Information</h4>
      <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base md:text-lg">
        <li>Name, email address, phone number, and company details (if applicable).</li>
        <li>Account login credentials (if you register for an account).</li>
        <li>Payment details when making purchases.</li>
      </ul>

      <h4 className="text-md font-semibold text-gray-100 mt-4">B. Non-Personal Information</h4>
      <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base md:text-lg">
        <li>Browser type, IP address, device information, and operating system.</li>
        <li>Usage data such as pages visited, time spent on pages, and interaction with features.</li>
        <li>Cookies and tracking technologies (see Section 6).</li>
      </ul>

      <h4 className="text-md font-semibold text-gray-100 mt-4">C. Information from Third Parties</h4>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        We may receive information from third-party services, such as payment processors or analytics providers, to enhance our Services.
      </p>

      {/* Section 2: How We Use Your Information */}
      <h3 className="text-lg font-semibold text-gray-100 mt-6">
        2. How We Use Your Information
      </h3>
      <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base md:text-lg">
        <li><strong>To Provide Services:</strong> Deliver, manage, and improve our software and offerings.</li>
        <li><strong>To Process Transactions:</strong> Handle purchases, billing, and subscriptions securely.</li>
        <li><strong>To Improve User Experience:</strong> Analyze trends, monitor usage, and enhance functionality.</li>
        <li><strong>To Communicate with You:</strong> Respond to inquiries, provide customer support, and send updates.</li>
        <li><strong>To Ensure Security:</strong> Detect and prevent fraud, unauthorized access, and technical issues.</li>
        <li><strong>To Comply with Legal Obligations:</strong> Fulfill legal requirements and protect our rights.</li>
      </ul>

      {/* Section 3: Data Sharing */}
      <h3 className="text-lg font-semibold text-gray-100 mt-6">
        3. How We Share Your Information
      </h3>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg">
        We do not sell or rent your personal information. However, we may share data in the following situations:
      </p>
      <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base md:text-lg">
        <li><strong>With Service Providers:</strong> Third-party vendors assisting in delivering our Services.</li>
        <li><strong>For Legal Reasons:</strong> If required by law or to enforce our rights.</li>
        <li><strong>In Business Transfers:</strong> If Techvistra undergoes a merger, acquisition, or sale.</li>
        <li><strong>With Your Consent:</strong> If you explicitly authorize sharing in specific circumstances.</li>
      </ul>

 {/* Section 4: Security */}
 <h3 className="text-lg font-semibold text-gray-100 mt-6">
        4. Data Security
      </h3>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        We implement industry-standard security measures to protect your data, including encryption and access controls. However, no method of transmission over the Internet is 100% secure.
      </p>
      {/* Section 5: Data Retention */}
      <h3 className="text-xl font-semibold text-gray-100 mt-6">
        5. Data Retention
      </h3>
      <p className="text-gray-300 text-lg mb-4">
        We retain your personal data only as long as necessary for legal, business, or compliance purposes. If you request data deletion, we will take appropriate steps to remove your personal information, subject to legal obligations.
      </p>

      {/* Section 6: Cookies and Tracking Technologies */}
      <h3 className="text-xl font-semibold text-gray-100 mt-6">
        6. Cookies and Tracking Technologies
      </h3>
      <p className="text-gray-300 text-lg mb-4">
        We use cookies and similar tracking technologies to enhance user experience. You can manage your cookie preferences through browser settings.
      </p>
      <ul className="list-disc pl-6 text-gray-300 text-lg">
        <li><strong>Essential Cookies:</strong> Required for basic website functionality.</li>
        <li><strong>Analytics Cookies:</strong> Help us analyze website traffic and performance.</li>
        <li><strong>Marketing Cookies:</strong> Used for personalized ads and promotions.</li>
      </ul>

      {/* Section 7: User Rights */}
      <h3 className="text-xl font-semibold text-gray-100 mt-6">
        7. Your Rights and Choices
      </h3>
      <p className="text-gray-300 text-lg mb-4">
        Depending on your jurisdiction, you may have the following rights regarding your personal data:
      </p>
      <ul className="list-disc pl-6 text-gray-300 text-lg">
        <li><strong>Access & Correction:</strong> Request access to the personal data we hold about you.</li>
        <li><strong>Data Deletion:</strong> Request deletion of your personal data, subject to legal obligations.</li>
        <li><strong>Opt-Out of Marketing:</strong> Unsubscribe from marketing communications at any time.</li>
        <li><strong>Data Portability:</strong> Request a copy of your data in a structured format.</li>
      </ul>

      {/* Section 8: Third-Party Links */}
      <h3 className="text-xl font-semibold text-gray-100 mt-6">
        8. Third-Party Links
      </h3>
      <p className="text-gray-300 text-lg mb-4">
        Our website or software may contain links to third-party websites. We are not responsible for their privacy policies or practices. We encourage users to review third-party privacy policies before sharing personal data.
      </p>

      {/* Section 9: International Data Transfers */}
      <h3 className="text-xl font-semibold text-gray-100 mt-6">
        9. International Data Transfers
      </h3>
      <p className="text-gray-300 text-lg mb-4">
        If you access our Services from outside [Your Jurisdiction], your data may be transferred to and processed in countries with different data protection laws. By using our Services, you consent to such transfers.
      </p>

      {/* Section 10: Children's Privacy */}
      <h3 className="text-xl font-semibold text-gray-100 mt-6">
        10. Children's Privacy
      </h3>
      <p className="text-gray-300 text-lg mb-4">
        Our Services are not intended for individuals under 18. We do not knowingly collect personal data from children. If we discover such data has been collected, we will take steps to delete it.
      </p>

      {/* Section 11: Updates to This Policy */}
      <h3 className="text-xl font-semibold text-gray-100 mt-6">
        11. Updates to This Policy
      </h3>
      <p className="text-gray-300 text-lg mb-4">
        We may update this Privacy Policy from time to time. Changes will be posted on our website with an updated "Last Updated" date. Continued use of our Services after modifications constitutes acceptance of the revised policy.
      </p>

      {/* Section 12: Contact Info */}
      <h3 className="text-xl font-semibold text-gray-100 mt-6">
        12. Contact Us
      </h3>
      <p className="text-gray-300 text-lg">
        For any questions or concerns, contact us at:
      </p>
      <p className="text-gray-300 text-lg">
        <strong>Techvistra Software Solutions Liability Limited</strong> <br />
        Nana Peth, Pune-411002 <br />
        <strong>Email:</strong> contact@techvistra.com <br />
        <strong>Phone:</strong> +91 9371749498
      </p>

    </div>
    </>
  );
};

export default PrivacyPolicy;