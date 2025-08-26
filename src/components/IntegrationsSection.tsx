export default function IntegrationsSection() {
  const topIcons = [
    "/assets/Transparent Icons/1.png",
    "/assets/Transparent Icons/2.png",
    "/assets/Transparent Icons/3.png",
    "/assets/Transparent Icons/4.png",
    "/assets/Transparent Icons/5.png",
    "/assets/Transparent Icons/6.png",
    "/assets/Transparent Icons/7.png",
    "/assets/Transparent Icons/8.png",
    "/assets/Transparent Icons/9.png",
    "/assets/Transparent Icons/10.png",
    "/assets/Transparent Icons/11.png",
    "/assets/Transparent Icons/12.png",
    "/assets/Transparent Icons/13.png",
    "/assets/Transparent Icons/14.png",
    "/assets/Transparent Icons/15.png",
    "/assets/Transparent Icons/16.png",
    "/assets/Transparent Icons/17.png",
    "/assets/Transparent Icons/18.png",
    "/assets/Transparent Icons/19.png",
    "/assets/Transparent Icons/20.png",
  ];

  const bottomIcons = [
    "/assets/Transparent Icons/21.png",
    "/assets/Transparent Icons/22.png",
    "/assets/Transparent Icons/23.png",
    "/assets/Transparent Icons/24.png",
    "/assets/Transparent Icons/25.png",
    "/assets/Transparent Icons/26.png",
    "/assets/Transparent Icons/27.png",
    "/assets/Transparent Icons/28.png",
    "/assets/Transparent Icons/29.png",
    "/assets/Transparent Icons/30.png",
    "/assets/Transparent Icons/31.png",
    "/assets/Transparent Icons/32.png",
    "/assets/Transparent Icons/33.png",
    "/assets/Transparent Icons/34.png",
    "/assets/Transparent Icons/35.png",
    "/assets/Transparent Icons/36.png",
    "/assets/Transparent Icons/37.png",
    "/assets/Transparent Icons/38.png",
    "/assets/Transparent Icons/39.png",
    "/assets/Transparent Icons/40.png",
  ];

  return (
    <section className="bg-gradient-to-b from-[#F3F3F1] to-[#F9F9F6] py-12 md:py-16 rounded-3xl px-4 md:px-10 lg:px-20 lg:mx-60" id="integrations">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Carousel */}
        <div className="overflow-hidden relative w-full mb-6">
          <div className="flex gap-6 md:gap-10 animate-scroll-right">
            {topIcons.concat(topIcons).map((icon, i) => (
              <div key={`top-${i}`} className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center animate-rotate-slow">
                <img src={icon} alt={`Top Integration ${i}`} className="w-12 h-12 md:w-20 md:h-20 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Carousel */}
        <div className="overflow-hidden relative w-full mb-6">
          <div className="flex gap-6 md:gap-10 animate-scroll-left">
            {bottomIcons.concat(bottomIcons).map((icon, i) => (
              <div key={`bottom-${i}`} className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center animate-rotate-slow">
                <img src={icon} alt={`Bottom Integration ${i}`} className="w-12 h-12 md:w-20 md:h-20 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Badge */}
        <button className="bg-gradient-to-r from-[#2087FF] to-[#E60CEB] text-white py-2 px-6 rounded-full font-semibold text-sm md:text-base mb-4">
          Integration
        </button>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mt-2 md:mt-4">Connect with 200+ Platforms</h2>
        <p className="text-gray-600 mt-2 md:mt-4 max-w-2xl md:max-w-xl mx-auto text-sm md:text-base">
          Connect your favorite tools effortlessly. Our platform plays well with others, creating a unified ecosystem for your business.
        </p>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left { animation: scroll-left 20s linear infinite; }
        .animate-scroll-right { animation: scroll-right 20s linear infinite; }
        .animate-rotate-slow { animation: rotate 20s linear infinite; }
      `}</style>
    </section>
  );
}
