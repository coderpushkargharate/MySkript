import { FaLightbulb, FaMobileAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          {/* Button */}
          <button
            style={{
              background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Why Choose Us?
          </button>

          {/* Heading */}
          <h2 className="text-[42px] font-bold mt-4 leading-[1.2] tracking-tight">
            The Best Fit for Your <br /> Unique Business Needs
          </h2>

          {/* Paragraph */}
          <p className="text-[#555] text-[16px] mt-5 max-w-lg leading-relaxed">
            We prioritize your success by offering tailored solutions designed
            to meet your unique needs.
          </p>

          {/* Stats */}
          <div className="flex gap-12 mt-10">
            <div>
              <p className="text-[28px] font-bold">500+</p>
              <p className="text-gray-500 text-[14px]">Positive Reviews</p>
            </div>
            <div>
              <p className="text-[28px] font-bold">350+</p>
              <p className="text-gray-500 text-[14px]">Users Satisfied</p>
            </div>
            <div>
              <p className="text-[28px] font-bold">4.9/5</p>
              <p className="text-gray-500 text-[14px]">Overall Ratings</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          {/* Smart Automation */}
          <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="text-orange-500 text-[22px] mt-1">
              <FaLightbulb />
            </div>
            <div>
              <h3 className="font-semibold text-[18px]">Smart Automation</h3>
              <p className="text-gray-500 text-[14px] mt-1 leading-relaxed">
                Explain how automated workflows improve efficiency in managing
                leads, supporting customers, and closing sales.
              </p>
            </div>
          </div>

          {/* Mobile Compatibility */}
          <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="text-orange-500 text-[22px] mt-1">
              <FaMobileAlt />
            </div>
            <div>
              <h3 className="font-semibold text-[18px]">Mobile Compatibility</h3>
              <p className="text-gray-500 text-[14px] mt-1 leading-relaxed">
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
