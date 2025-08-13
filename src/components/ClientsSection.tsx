import React from "react";


export default function ClientsSection() {
  const companies = [
    { name: "MyPretty", logo: "🎨" },
    { name: "BrandSkript", logo: "📝" },
    { name: "Vaksana", logo: "🌿" },
    { name: "KAPILS", logo: "✂️" },
    { name: "TechFlow", logo: "⚡" },
    { name: "DataForge", logo: "🔥" },
  ];

  const testimonials = [
    {
      quote:
        "MySkript transformed our business operations completely. We've seen a 300% increase in efficiency and our costs have dropped by 75%.",
      author: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
      avatar: "👩‍💼",
    },
    {
      quote:
        "The AI automation features are incredible. What used to take our team hours now happens automatically with better results.",
      author: "Michael Chen",
      role: "Marketing Director, BrandSkript",
      avatar: "👨‍💼",
    },
    {
      quote:
        "Customer support is outstanding and the platform is incredibly intuitive. We were up and running in just a few hours.",
      author: "Emily Rodriguez",
      role: "Founder, MyPretty Designs",
      avatar: "👩‍🎨",
    },
  ];

  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join 200+ companies already growing with us
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center space-y-2 group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">
            Proven Results Across Industries
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-blue-100">Revenue Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
