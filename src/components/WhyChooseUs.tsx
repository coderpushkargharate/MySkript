import { FaLightbulb, FaMobileAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#faf9f7] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
            Why Choose Us?
          </button>
          <h2 className="text-4xl font-bold mt-4 leading-snug">
            The Best Fit for Your <br /> Unique Business Needs
          </h2>
          <p className="text-gray-600 mt-4 max-w-lg">
            We prioritize your success by offering tailored solutions designed
            to meet your unique needs.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-8">
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-gray-500 text-sm">Positive Reviews</p>
            </div>
            <div>
              <p className="text-2xl font-bold">350+</p>
              <p className="text-gray-500 text-sm">Users Satisfied</p>
            </div>
            <div>
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-gray-500 text-sm">Overall Ratings</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          {/* Smart Automation */}
          <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border">
            <div className="text-orange-500 text-2xl">
              <FaLightbulb />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Smart Automation</h3>
              <p className="text-gray-500 text-sm mt-1">
                Explain how automated workflows improve efficiency in managing
                leads, supporting customers, and closing sales.
              </p>
            </div>
          </div>

          {/* Mobile Compatibility */}
          <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border">
            <div className="text-orange-500 text-2xl">
              <FaMobileAlt />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Mobile Compatibility</h3>
              <p className="text-gray-500 text-sm mt-1">
                Emphasize how the mobile experience allows seamless customer
                relationship management from anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
