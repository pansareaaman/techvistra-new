import React from "react";

const ServicesSections = () => {
  return (
    <div className=" text-white py-16 px-6">

      {/* Our Clients / Testimonials Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
        <p className="text-gray-400">Trusted by industry leaders worldwide.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-[90%] mx-auto justify-around [&>*]:h-16">
          <img src="/Logo/urban.png" alt="Client 1" className="rounded-md" />
          <img src="/Logo/Aisa21.png" alt="Client 2" className="rounded-md" />
          <img src="/Logo/Code.png" alt="Client 2" className="rounded-md" />
          <img src="/Logo/Graph.png" alt="Client 2" className="rounded-md" />
          
        </div>
      </section>
    </div>
  );
};

export default ServicesSections;
