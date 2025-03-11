import React from "react";

const clients = [
  { name: "UrbanNest", logo: "/Logo/urban.png" },
  { name: "ASIA 21", logo: "/Logo/Aisa21.png" },
  { name: "Code Cloud", logo: "/Logo/code.png" },
  { name: "MIT", logo: "/Logo/Graph.png" },
];

const testimonials = [
  {
    name: "ROHAN S.",
    feedback: "TechVistra delivered an intuitive mobile app that exceeded our expectations.",
    image: "/assets/T2.png",
  },
  {
    name: "ZOEY M.",
    feedback: "TechVistra’s cybersecurity solutions gave us the security and peace of mind we needed.",
    image: "/assets/T1.png",
  },
  {
    name: "ZAID K.",
    feedback: "TechVistra’s custom software development transformed our systems and boosted productivity.",
    image: "/assets/T3.png",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="bg-[#0d0c1d] text-white pb-10  px-5">
      {/* Valued Clients Section */}
      <div className="text-center mb-10">
        <h2 className="text-lg uppercase tracking-widest text-gray-400">Our Valued Clients</h2>
        <div className="flex justify-center gap-8 mt-4 bg-[#26244b] max-w-3xl mx-auto rounded-2xl">
          {clients.map((client, index) => (
            <img className="p-4 " key={index} src={client.logo} alt={client.name} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="text-center py-6">
        <h3 className="text-gray-400 uppercase tracking-widest">Testimonials</h3>
        <h2 className="text-4xl font-bold mt-2 max-w-xs mx-auto">Read What Others Have To Say</h2>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8"> */}
      <div className="flex gap-3 items-center w-3/4 mx-auto mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#171D46] px-5 mt-8 rounded-2xl shadow-lg text-center w-[25%] pb-10 mx-auto">
            <img 
              src={testimonial.image}
              alt={testimonial.name}
              className="w-32 h-32 rounded-full mx-auto -mt-16 mb-4 border-2 border-gray-500 grayscale "
            />
            <h3 className="text-lg font-bold">{testimonial.name}</h3>
            <p className="text-gray-300 mt-2">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
