

export default function IntegrationsSection() {
  // Replace with your actual icon image paths
  const icons = [
    "/icons/icon1.png",
    "/icons/icon2.png",
    "/icons/icon3.png",
    "/icons/icon4.png",
    "/icons/icon5.png",
    "/icons/icon6.png",
    "/icons/icon7.png",
    "/icons/icon8.png",
    "/icons/icon9.png",
    "/icons/icon10.png",
    "/icons/icon11.png",
    "/icons/icon12.png",
  ];

  return (
    <section className="bg-gradient-to-b from-[#f8f8f6] to-[#fefefc] py-16 rounded-3xl">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Scrolling Icons */}
        <div className="overflow-hidden relative w-full mb-8">
          <div className="flex animate-scroll gap-8">
            {icons.concat(icons).map((icon, i) => (
              <div
                key={i}
                className="w-12 h-12 flex-shrink-0 animate-rotate-slow"
              >
                <img
                  src={icon}
                  alt={`Integration ${i}`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Badge */}
        <button
  style={{
    background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
    color: "#ffffff",                        // text-white
    padding: "0.5rem 1.25rem",               // py-2 px-5
    borderRadius: "9999px",                  // rounded-full
    fontSize: "0.875rem",                    // text-sm
    fontWeight: 600,                         // font-semibold
    border: "none",                          // remove default border
    cursor: "pointer"                        // pointer on hover
  }}
>
  Integration
</button>


        {/* Heading */}
        <h2 className="text-4xl font-bold mt-4">
          Connect with 200+ Platforms
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Connect your favorite tools effortlessly. Our platform plays well with
          others, creating a unified ecosystem for your business.
        </p>
      </div>

      {/* Tailwind Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes rotate-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-rotate-slow {
          animation: rotate-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
