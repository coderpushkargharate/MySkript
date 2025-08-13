'use client';


export default function CustomerCTA() {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-white shadow-lg px-6 py-16 sm:p-20 max-w-5xl mx-auto mt-20">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-orange-400 opacity-30 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-400 opacity-30 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Gradient Badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-pink-500 rounded-full shadow">
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
        src="/emoji1.png"
        alt="avatar1"
        width={40}
        height={40}
        className="absolute bottom-4 left-10 rounded-full"
      />
      <img
        src="/emoji2.png"
        alt="avatar2"
        width={40}
        height={40}
        className="absolute top-8 right-10 rounded-full"
      />
      <img
        src="/heart.png"
        alt="heart icon"
        width={16}
        height={16}
        className="absolute top-[90px] right-[90px]"
      />
      <img
        src="/star.png"
        alt="star icon"
        width={16}
        height={16}
        className="absolute bottom-[70px] left-[70px]"
      />
    </section>
  );
}
