'use client';

const features = [
  {
    icon: 'https://framerusercontent.com/images/XAIxkihWOZVlT9kYlzBcnurjec.svg',
    title: 'Expert Support Team',
    description:
      'An expert team ready to tackle your challenges with innovative solutions and proven strategies.',
  },
  {
    icon: 'https://framerusercontent.com/images/8tzMEDhkyb6h4U0ZUlqPZRqepKc.svg',
    title: 'Fast and Scalable',
    description:
      'Scale your business effortlessly with our SaaS, designed to grow alongside your evolving needs.',
  },
  {
    icon: 'https://framerusercontent.com/images/8RLZFxPukLFRCHBBmD6kM5D66U.svg',
    title: 'Customizable for You',
    description:
      "Customize the platform to perfectly align with your business's unique requirements and goals.",
  },
  {
    icon: 'https://framerusercontent.com/images/wYkPH8gBYt8UN08jzakhPV4n1U.svg',
    title: 'Maximum Efficiency',
    description:
      'Maximize efficiency with integrated solutions that eliminate bottlenecks, saving time and costs.',
  },
  {
    icon: 'https://framerusercontent.com/images/gqLs6V6iWyNKoDXEQR7BUYkh9g.svg',
    title: 'User Friendly',
    description: 'Our intuitive design ensures anyone can get started with ease.',
  },

];

export default function OperationalExcellenceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
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
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",   // shadow-sm
    width: "fit-content"                        // w-fit
  }}
>
  Benefits
</div>


          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Unlock a New Era of Operational Excellence and Innovation
          </h2>

          {/* Subheading */}
          <p className="text-gray-600 text-lg mb-6 max-w-lg">
            Unlock operational excellence and innovation with our advanced tools and streamlined processes.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {['Robust Security', 'Customizable', 'Accessibility', 'Automated Efficiency', 'Centralized Data'].map(
              (tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-800 text-sm px-4 py-1 rounded-full font-medium shadow-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right Column - Scrollable Features */}
        <div className="h-[500px] overflow-y-scroll pr-4 space-y-8 border-l border-orange-200 relative">
          {/* Vertical Line Indicator */}
          <div className="absolute top-0 left-[-1px] h-full w-1 bg-gradient-to-b from-orange-400 to-orange-100 rounded-full" />

          {features.map((feature, index) => (
            <div key={index} className="pl-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="min-w-[40px] min-h-[40px] bg-orange-50 rounded-full flex items-center justify-center shadow-sm">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} Icon`}
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
