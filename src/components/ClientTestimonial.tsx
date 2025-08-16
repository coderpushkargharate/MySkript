;
import { FaStar } from "react-icons/fa";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Henry Williams",
      role: "Ops Manager, MarketPro",
      image: "https://framerusercontent.com/images/Un2TJAi1QldXeIsAWpFkz62y38.png",
      text: "The features are powerful and easy to use. We've optimized processes and grown faster with this solution.",
    },
    {
      name: "Grace Johnson",
      role: "VP Engineering, Vectra",
      image: "https://framerusercontent.com/images/ml063831RwvqMP2vsXiMpjp1K8.png",
      text: "Their innovative approach streamlined our processes and boosted efficiency. Highly recommend!",
    },
    {
      name: "James Thompson",
      role: "Product Analyst, Realty",
      image: "https://framerusercontent.com/images/3f7wijxD0TSW9nj3n95i6oTpL4.png",
      text: "Outstanding service from start to finish. They delivered exactly what we needed, on time and within budget.",
    },
  ];

  return (
    <section className="bg-white py-16" id="clients">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
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
  Clients Stories
</button>

        <h2 className="text-4xl font-bold mt-4">
          See What Our Clients Are Saying
        </h2>
        <p className="text-gray-600 mt-2">
          Learn how our solutions have empowered our clients to achieve success!
        </p>

        {/* Main Testimonial */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
          <img
            src="https://framerusercontent.com/images/63y0ZWXUl6qkZONLncRsSA77Vc.png"
            alt="Manoj Patel"
            width={500}
            height={500}
            className="rounded-2xl object-cover"
          />
          <div className="text-left">
            <p className="text-2xl font-medium">
              "This platform has automated our sales follow ups & lead
              nurturing, ensuring good ROI for us due to its automation!"
            </p>
            <p className="mt-4 font-semibold">Manoj Patel</p>
            <p className="text-gray-500 text-sm">
              Founder, Bikaner Solutions
            </p>
            <button
  style={{
    marginTop: "1.5rem",                      // mt-6
    background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
    color: "#ffffff",                         // text-white
    padding: "0.75rem 1.25rem",               // py-3 px-5
    borderRadius: "0.5rem",                   // rounded-lg
    fontSize: "0.875rem",                     // text-sm
    fontWeight: 600,                          // font-semibold
    display: "flex",                          // flex
    alignItems: "center",                     // items-center
    gap: "0.5rem",                            // gap-2
    border: "none",                           // remove default border
    cursor: "pointer"                         // pointer on hover
  }}
>
  Try 7 Day Free Trial →
</button>

          </div>
        </div>

        {/* Other Reviews */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border"
            >
              <div className="flex justify-center mb-3 text-orange-500">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <p className="text-gray-600">{review.text}</p>
              <div className="mt-4 flex flex-col items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <p className="mt-2 font-semibold">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
