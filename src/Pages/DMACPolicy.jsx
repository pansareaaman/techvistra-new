import React, { useEffect } from 'react'

const DMACPolicy = () => {
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
            <h2 className="text-5xl text-gray-400 font-serif xs-mx:text-4xl">DMCA Legal Notice</h2>
          </div>
          <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 text-[7rem] font-extrabold text-[#5b4974] opacity-15 tracking-wide leading-none lg-mx:text-[7rem] bs-mx:text-[6rem] md-mx:text-[5rem] sm-mx:text-[4rem] xm-mx:font- xs-mx:text-[3rem] xsm-mx:text-[2rem]">
            TECHVISTRA
          </div>
        </div>
      </div>


    <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#110016] to-[#120B20] text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-gray-100 mb-4">
        DMCA Legal Notice
      </h2>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        Last Updated: March 17, 2025
      </p>

      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        Techvistra Software Solutions Liability Limited ("Techvistra," "we," "our," or "us") respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA). If you believe that your copyrighted work has been used on our website or services without authorization, you may submit a DMCA Takedown Notice as outlined below.
      </p>

      {/* DMCA Takedown Notice */}
      <h3 className="text-lg font-semibold text-gray-100 mt-6">
        1. Filing a DMCA Takedown Notice
      </h3>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        If you are a copyright owner (or an authorized agent), you may submit a DMCA notice to request the removal of infringing content. Your notice must include the following:
      </p>
      <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base md:text-lg">
        <li><strong>Contact Information:</strong> Full name, address, email, and phone number.</li>
        <li><strong>Identification of Copyrighted Work:</strong> A detailed description or the URL of the original copyrighted work.</li>
        <li><strong>Identification of Infringing Content:</strong> The exact URL(s) of the allegedly infringing material.</li>
        <li><strong>Statement of Good Faith:</strong> "I have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law."</li>
        <li><strong>Statement Under Penalty of Perjury:</strong> "I swear, under penalty of perjury, that the information in this notification is accurate."</li>
        <li><strong>Your Signature:</strong> A physical or electronic signature.</li>
      </ul>

      <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4">
        Submit your DMCA notice to:
      </p>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg">
        <strong>Techvistra Software Solutions Liability Limited</strong> <br />
        Nana Peth, Pune-411002 <br />
        <strong>Email:</strong> contact@techvistra.com <br />
        <strong>Phone:</strong> +91 9371749498
      </p>

      {/* DMCA Counter-Notification */}
      <h3 className="text-lg font-semibold text-gray-100 mt-6">
        2. DMCA Counter-Notification
      </h3>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        If you believe that the content removed due to a DMCA notice was wrongly taken down, you may file a counter-notification. Your counter-notification must include:
      </p>
      <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base md:text-lg">
        <li><strong>Contact Information:</strong> Full name, address, email, and phone number.</li>
        <li><strong>Identification of Removed Content:</strong> The exact URL(s) of the material that was removed.</li>
        <li><strong>Statement of Good Faith:</strong> "I have a good faith belief that the material was removed as a result of mistake or misidentification."</li>
        <li><strong>Consent to Jurisdiction:</strong> A statement that you consent to the jurisdiction of the courts in your location.</li>
        <li><strong>Statement Under Penalty of Perjury:</strong> A declaration that the information in your counter-notification is accurate.</li>
        <li><strong>Your Signature:</strong> A physical or electronic signature.</li>
      </ul>

      <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4">
        Submit your counter-notification to:
      </p>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg">
        <strong>Techvistra Software Solutions Liability Limited</strong> <br />
        Nana Peth, Pune-411002 <br />
        <strong>Email:</strong> contact@techvistra.com <br />
        <strong>Phone:</strong> +91 9371749498
      </p>

      {/* Repeat Infringers Policy */}
      <h3 className="text-lg font-semibold text-gray-100 mt-6">
        3. Repeat Infringers Policy
      </h3>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        Techvistra reserves the right to terminate user accounts or restrict access to our services if a user repeatedly violates copyright laws.
      </p>

      {/* Disclaimer */}
      <h3 className="text-lg font-semibold text-gray-100 mt-6">
        4. Disclaimer
      </h3>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        Techvistra is not liable for any content posted by third parties. We respond to DMCA notices in accordance with applicable laws and take reasonable steps to remove infringing material when properly notified.
      </p>

      <p className="text-gray-300 text-sm sm:text-base md:text-lg">
        By using our Services, you acknowledge that you have read, understood, and agreed to this DMCA Legal Notice.
      </p>
    </div>

    </>
  )
}

export default DMACPolicy