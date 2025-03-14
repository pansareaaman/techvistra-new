import React from "react";

const GetStarted = () => {
  return (
    <section className=" text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing Together!</h2>
        <p className="text-lg mb-6">Empowering businesses with innovative tech solutions.</p>
        <a
          href="/contact"
          className="bg-[#6b5cb2] text-white py-3 px-6 rounded-lg text-lg transition"
        >
          Explore Our Services
        </a>
      </div>
      
      <div className="flex flex-wrap justify-center mt-12 gap-6">
        <img src="/Image/CodeDark.png" alt="Code on screen" className="w-80 rounded-lg shadow-lg" />
        <img src="/Image/DeveloperWorking.png" alt="Developer working" className="w-80 rounded-lg shadow-lg" />
        <img src="/Image/TechBackground.png" alt="Tech background" className="w-80 rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default GetStarted;
