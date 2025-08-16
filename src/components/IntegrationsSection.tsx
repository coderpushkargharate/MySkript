export default function IntegrationsSection() {
  const icons = [
    "https://framerusercontent.com/images/YqokzQe8hxLqWZy51izpk84wz0.svg",
    "https://framerusercontent.com/images/3n2vGVjSe67AkSOLwTm0j4yJz5I.svg",
    "https://framerusercontent.com/images/BppxHaDPl8JyF2O27Z4NrupPIpk.svg",
    "https://framerusercontent.com/images/FSi21nwHje6xlXG1MrSFXTLsEuY.svg",
    "https://framerusercontent.com/images/NLnjLidQC5P5PjdfB1rR97MUQs.svg",
    "https://framerusercontent.com/images/01BElrVh0E4ojNnPeHc66Ku0s.svg",
    "https://framerusercontent.com/images/mGr4Tt5M0nAejf4Ru6vs7MjuAc.svg",
    "https://framerusercontent.com/images/mk0APUDFOMtruuP7LHQLYOZ4E.svg",
    "https://framerusercontent.com/images/w0RPDldWn6ds51i13PDGlCxGIQE.svg",
    "https://framerusercontent.com/images/GAWEdqLHtW4lrHSbPpl08qtCOi4.svg",
    "https://framerusercontent.com/images/aS19EPoC2eN0qKQsqsUYvSrgTM.svg",
    "https://framerusercontent.com/images/aRMQCzNjKdJxVXxCA5n01s37e4M.svg",
  ];

  return (
<section className="bg-gradient-to-b from-[#F3F3F1] to-[#F9F9F6] py-16 rounded-3xl mx-40">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* 🔹 Top Carousel (scroll right) */}
        <div className="overflow-hidden relative w-full mb-6">
          <div className="flex animate-scroll-right gap-8">
            {icons.concat(icons).map((icon, i) => (
              <div
                key={`top-${i}`}
                className="w-20 h-20 flex-shrink-0 flex items-center justify-center animate-rotate-slow"
              >
                <img
                  src={icon}
                  alt={`Integration ${i}`}
                  className="w-30 h-30 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Bottom Carousel (scroll left) */}
        <div className="overflow-hidden relative w-full mb-8">
          <div className="flex animate-scroll-left gap-8">
            {icons.concat(icons).map((icon, i) => (
              <div
                key={`bottom-${i}`}
                className="w-20 h-20 flex-shrink-0  flex items-center justify-center animate-rotate-slow"
              >
                <img
                  src={icon}
                  alt={`Integration ${i}`}
                  className="w-30 h-30 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Badge */}
        <button
          style={{
            background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
            color: "#ffffff",
            padding: "0.5rem 1.25rem",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Integration
        </button>

        {/* Heading */}
        <h2 className="text-4xl font-bold mt-4">Connect with 200+ Platforms</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Connect your favorite tools effortlessly. Our platform plays well with
          others, creating a unified ecosystem for your business.
        </p>
      </div>

      {/* 🔹 Animation Styles */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
      
        .animate-rotate-slow {
          animation: rotate-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
