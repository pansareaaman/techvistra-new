// import React from "react";

// const WhyChooseUs = () => {
//   return (
//     <section className="py-16 px-6 bg-gradient-to-r from-[#0d0c1d] to-[#1a1a2e] text-white">
//       {/* Section Header */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent">
//           Why Choose TechVistra?
//         </h2>
//       </div>

//       {/* Bullet Points */}
//       <div className="max-w-4xl mx-auto space-y-4 text-lg">
//         <p>✅ <span className="text-purple-400 font-semibold">Expert Team</span> – Skilled professionals with years of industry experience.</p>
//         <p>✅ <span className="text-purple-400 font-semibold">Custom Solutions</span> – Tailored to meet your business needs.</p>
//         <p>✅ <span className="text-purple-400 font-semibold">Latest Technologies</span> – Always staying ahead with cutting-edge innovation.</p>
//         <p>✅ <span className="text-purple-400 font-semibold">Reliable Support</span> – Ongoing maintenance and customer assistance.</p>
//       </div>

//       {/* CTA Button */}
//       <div className="text-center mt-10">
//         <button className="bg-purple-600 px-6 py-3 rounded-full text-lg hover:bg-purple-700 transition-all">
//           Learn More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const features = [
//   { title: "Expert Team", desc: "Skilled professionals with years of industry experience." },
//   { title: "Custom Solutions", desc: "Tailored to meet your business needs." },
//   { title: "Latest Technologies", desc: "Always staying ahead with cutting-edge innovation." },
//   { title: "Reliable Support", desc: "Ongoing maintenance and customer assistance." }
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="py-16 px-6 bg-gradient-to-br from-[#0d0c1d] to-[#1a1a2e] text-white">
//       {/* Section Header */}
//       <div className="text-center mb-10">
//         <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent drop-shadow-lg">
//           Why Choose TechVistra?
//         </h2>
//       </div>

//       {/* Features Grid */}
//       <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
//         {features.map((feature, index) => (
//           <div key={index} className="flex items-start bg-[#1b1b32] p-6 rounded-xl shadow-md border border-purple-600 transform transition duration-300 hover:scale-105 hover:shadow-lg">
//             <FaCheckCircle className="text-green-400 text-3xl mr-4 animate-bounce" />
//             <div>
//               <h3 className="text-xl font-semibold text-purple-400">{feature.title}</h3>
//               <p className="text-gray-300">{feature.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA Button */}
//       <div className="text-center mt-12">
//         <button className="bg-purple-600 px-8 py-4 text-lg font-semibold rounded-full hover:bg-purple-700 transition-all shadow-md hover:shadow-xl">
//           Learn More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

// import React from "react";
// import { FaUserTie, FaCogs, FaLaptopCode, FaHeadset } from "react-icons/fa";

// const features = [
//   { icon: <FaUserTie />, title: "Expert Team", desc: "Skilled professionals with years of experience." },
//   { icon: <FaCogs />, title: "Custom Solutions", desc: "Tailored to meet your business needs." },
//   { icon: <FaLaptopCode />, title: "Latest Technologies", desc: "Staying ahead with cutting-edge innovation." },
//   { icon: <FaHeadset />, title: "Reliable Support", desc: "Ongoing maintenance & customer assistance." }
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="py-16 px-6 bg-[#0d0c1d] text-white">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
//           Why Choose TechVistra?
//         </h2>
//         <p className="text-gray-400 text-lg mt-2">
//           Experience the best solutions with our industry experts.
//         </p>
//       </div>

//       {/* Features Grid */}
//       <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="group bg-white/10 p-6 rounded-xl border border-purple-500 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-800"
//           >
//             <div className="text-4xl text-purple-400 group-hover:text-white mb-4">
//               {feature.icon}
//             </div>
//             <h3 className="text-xl font-semibold text-purple-400 group-hover:text-white">
//               {feature.title}
//             </h3>
//             <p className="text-gray-300 group-hover:text-white">{feature.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* CTA Button */}
//       <div className="text-center mt-12">
//         <button className="bg-purple-600 px-8 py-4 text-lg font-semibold rounded-full hover:bg-purple-700 transition-all shadow-md hover:shadow-2xl">
//           Learn More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-12 mb-8   ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Choose <span className="bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent ">TechVistra?</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-[90%] mx-auto">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-green-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold">Expert Team</h3>
              <p className="text-gray-300">
                Skilled professionals with years of industry experience.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-green-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored to meet your business needs.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-green-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold">Latest Technologies</h3>
              <p className="text-gray-300">
                Always staying ahead with cutting-edge innovation.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-green-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold">Reliable Support</h3>
              <p className="text-gray-300">
                Ongoing maintenance and customer assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
