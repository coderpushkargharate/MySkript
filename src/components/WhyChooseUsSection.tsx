'use client';

import Image from 'next/image';

const features = [
  {
    icon: '/icons/automation.png',
    title: 'Smart Automation',
    description:
      'Explain how automated workflows improve efficiency in managing leads, supporting customers, and closing sales.',
  },
  {
    icon: '/icons/mobile.png',
    title: 'Mobile Compatibility',
    description:
      'Emphasize how the mobile experience allows seamless customer relationship management from anywhere.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-[#fcfcf8]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div>
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white text-sm font-semibold shadow-sm">
            Why Choose Us?
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Best Fit for Your <br /> Unique Business Needs
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            We prioritize your success by offering tailored solutions designed to meet your unique needs.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 text-center sm:text-left">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-500 text-sm mt-1">Positive Reviews</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">350+</h3>
              <p className="text-gray-500 text-sm mt-1">Users Satisfied</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">4.9/5</h3>
              <p className="text-gray-500 text-sm mt-1">Overall Ratings</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl px-6 py-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-full shadow-sm shrink-0">
                  <Image src={feature.icon} alt={feature.title} width={20} height={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
