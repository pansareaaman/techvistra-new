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
