import { IconBookmarkFilled } from "@tabler/icons-react";
import React from "react";

const testimonials = [
  {
    name: "Rohan Mehta, CEO",
    company: "NexaTech",
    review:
      "TechVistra transformed our outdated system into a seamless, high-performance solution. Their expertise in software development is unmatched. The team was professional, responsive, and delivered beyond our expectations. Highly recommended!",
    image: "/assets/T4.png",
  },
  {
    name: "Priya Sharma, Founder",
    company: "DigitalSphere",
    review:
      "From concept to execution, TechVistra brought our vision to life with an intuitive UI/UX design. Our website now looks stunning and functions flawlessly. Their team truly understands user experience and innovation. Couldn't be happier!",
    image: "/assets/T5.png",
  },
  {
    name: "Amit Verma, Director",
    company: "CloudNova",
    review:
      "TechVistra provided an enterprise-grade ERP solution that streamlined our business operations. The real-time integration and data management have boosted our efficiency. Their dedication to quality and support has been exceptional. A game-changer for us!",
    image: "/assets/T6.png",
  },
  {
    name: "Sanya Gupta, Co-Founder",
    company: "BrandElevate",
    review:
      "TechVistra’s digital marketing services helped us scale our brand like never before. From SEO to social media, they handled everything strategically. Our online presence has grown tremendously, thanks to their smart marketing approach!",
    image: "/assets/T7.png",
  },
  {
    name: "Vikram Joshi, CTO",
    company: "InnovateTech",
    review:
      "Our mobile app needed a complete overhaul, and TechVistra did a fantastic job. The new app is faster, more user-friendly, and integrates seamlessly with our system. Their team was proactive and solution-driven. Outstanding service and results!",
    image: "/assets/T8.png",
  },
  {
    name: "Neha Kapoor, Marketing Head",
    company: "Trendify",
    review:
      "We needed a robust e-commerce platform, and TechVistra delivered beyond our expectations. Their expertise in web development and security ensured a smooth, scalable platform. Sales have increased significantly, thanks to their incredible work!",
    image: "/assets/T8.png",
  },
];

const Cards = () => {
  return (
    <div className="bg-gradient-to-b from-[#110016] to-[#120B20] text-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/10 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col h-full"
          >
            <div className="flex items-center mb-3">
              <span className="text-yellow-400 text-lg">★ ★ ★ ★ ★</span>
            </div>
            <p className="text-gray-300 flex-grow">{testimonial.review}</p>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-600">
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-gray-500"
                />
                <div className="ml-3">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <IconBookmarkFilled size={28} className="text-gray-400 cursor-pointer hover:text-white transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
