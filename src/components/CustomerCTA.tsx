'use client';


export default function CustomerCTA() {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-white shadow-lg px-6 py-16 sm:p-20 max-w-5xl mx-auto mt-20">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-orange-400 opacity-30 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-400 opacity-30 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Gradient Badge */}
      <div className="flex justify-center mb-6">
        <span
  style={{
    display: "inline-block",                   // inline-block
    padding: "0.25rem 1rem",                   // py-1 px-4
    fontSize: "0.875rem",                      // text-sm
    fontWeight: 600,                           // font-semibold
    color: "#ffffff",                          // text-white
    background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
    borderRadius: "9999px",                    // rounded-full
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"  // shadow
  }}
>
  Elevate Your Business
</span>

      </div>

      {/* Headline */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 leading-tight">
        Ready to Transform <br />
        <span className="text-gray-900">Your Customer <span className="whitespace-nowrap">Management?</span></span>
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 text-base sm:text-lg mb-10">
        Sign up today and see the difference Myskript.io can make for your business.
      </p>

      {/* Input + Button */}
      <div className="flex max-w-xl mx-auto rounded-full overflow-hidden border border-gray-200 shadow-sm">
        <input
          type="tel"
          placeholder="Your Mobile Number"
          className="flex-1 px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none"
        />
        <button className="bg-black text-white px-6 py-3 font-medium hover:opacity-90 transition">
          Get Started
        </button>
      </div>

      {/* Floating Avatars */}
    
      <img
        src="https://framerusercontent.com/images/2XVKfhwhceRAzSEr6f0ObtIs9rk.png"
        alt="heart icon"
        width={60}
        height={60}
        className="absolute top-[90px] right-[90px]"
      />
      <img
        src="https://framerusercontent.com/images/sxALcV6xsL5cocZ9EF3Oe6NI18.png"
        alt="star icon"
        width={60}
        height={60}
        className="absolute bottom-[70px] left-[70px]"
      />
    </section>
  );
}
