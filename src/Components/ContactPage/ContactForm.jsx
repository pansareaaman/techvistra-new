import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white relative px-4 bg-[#120819] font-poppins">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#120819] bg-opacity-50"></div>
      {/* Intro Section */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center py-6 px-20 mt-10">
        <p className="text-gray-300 text-lg">
          TechVistra is a forward-thinking technology solutions company specializing in custom software development, web and mobile applications, and cybersecurity.
          We empower businesses with innovative, user-centric digital solutions tailored to their needs. At TechVistra, we combine excellence, integrity, and creativity to drive growth and transformation.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10">
        {/* Left Side - Form */}
        <div className="bg-white bg-opacity-20 backdrop-blur-xl p-8 rounded-lg shadow-lg w-full border border-white border-opacity-20">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">Get in Touch with Us</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white" />
            <input type="email" placeholder="example@yourmail.com" className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white" />
            <input type="text" placeholder="Subject" className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white" />
            <textarea placeholder="Message" className="w-full p-3 h-32 rounded bg-gray-700 border border-gray-600 text-white"></textarea>
            <button className="w-full bg-gradient-to-r from-[#A9A9D2] to-[#C4C4DE] text-white font-semibold p-3 rounded">SUBMIT</button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
            <div className="flex flex-col items-center">
              <img src="assets/contactPhone.png" className="h-16 mb-2" />
              <p className="text-lg font-semibold">Phone Number</p>
              <p className="text-gray-400">+91 9371-749-498</p>
            </div>

            <div className="flex flex-col items-center">
            <img src="assets/contactWhatsapp.png" className="h-16 mb-2" />
              <p className="text-lg font-semibold">WhatsApp</p>
              <p className="text-gray-400">+91 9371-749-498</p>
            </div>

            <div className="flex flex-col items-center">
            <img src="assets/contactMail.png" className="h-16 mb-2" />
              <p className="text-lg font-semibold">Email Address</p>
              <p className="text-gray-400">info@techvistra.com</p>
            </div>

            <div className="flex flex-col items-center">
            <img src="assets/contactAddress.png" className="h-16 mb-2" />
              <p className="text-lg font-semibold">Our Office</p>
              <p className="text-gray-400">Nana Peth, Pune 411002</p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-20 w-full">
            <iframe
              title="Google Maps"
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3457090257075!2d73.86790049231377!3d18.51327331404994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13118a3507d%3A0xe4169d4dadd02ce!2sTECHVISTRA%20SOFTWARE%20SOLUTIONS%20LLP%20PUNE!5e0!3m2!1sen!2sin!4v1741637033620!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;