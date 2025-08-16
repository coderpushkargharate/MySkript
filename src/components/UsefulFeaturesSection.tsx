'use client';


const features = [
  {
    icon: 'https://framerusercontent.com/images/sV8ahFgQJyh3yNhHdaOmfVoXBA.svg ',
    title: '200+ Integrations',
    description: 'Unite your apps for a cohesive workflow.',
  },
  {
    icon: 'https://framerusercontent.com/images/z9eeQbNcppvcl4QdU6fEIlWyig.svg',
    title: 'Advance Reporting',
    description: 'Reports customized to your metrics.',
  },
  {
    icon: 'https://framerusercontent.com/images/LRUYnHoV0o3O1Ihu50KdeNPzUw.svg',
    title: 'Quoting & Invoicing',
    description: 'Generate quotes and invoices easily.',
  },
  {
    icon: 'https://framerusercontent.com/images/9kkKWlIpZf6mMGsDGfuSOXx2sY.svg',
    title: 'Payment Integration',
    description: 'Seamless payments for faster transactions.',
  },
  {
    icon: 'https://framerusercontent.com/images/E3URPotNTHIIECFr0Ctl8gmM.svg',
    title: 'Audit Logs',
    description: 'Track changes with full transparency.',
  },
  {
    icon: 'https://framerusercontent.com/images/bcnJk3qQjebE0KcBzdKH7dsyx4Q.svg',
    title: 'Advanced Security',
    description: 'Enterprise-grade protection and control.',
  },
];

export default function UsefulFeaturesSection() {
  return (
    <section className="py-20 bg-[#fcfcf8]" id="features">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div
  style={{
    display: "inline-block",                   // inline-block
    padding: "0.25rem 1rem",                   // py-1 px-4
    marginBottom: "1rem",                      // mb-4
    borderRadius: "9999px",                    // rounded-full
    background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
    color: "#ffffff",                           // text-white
    fontSize: "0.875rem",                       // text-sm
    fontWeight: 600,                            // font-semibold
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)"    // shadow-sm
  }}
>
  Useful Features
</div>

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          + Unique Features That Make a Difference
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Focusing on innovation and usability, we provide tools that enhance productivity and drive success.
        </p>

        {/* Grid of Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 px-6 py-10 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-orange-50 flex items-center justify-center shadow-sm">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
