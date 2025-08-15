import { FaUser, FaFileUpload, FaSignInAlt, FaRocket } from "react-icons/fa";

export default function StepsSection() {
  const steps = [
    {
      step: "Step 1",
      title: "Chose A Plan",
      description:
        "Register in just a few minutes and kickstart your CRM journey.",
      icon: <FaUser />,
    },
    {
      step: "Step 2",
      title: "Fill Up Details",
      description:
        "Easily upload existing customer data for seamless access.",
      icon: <FaFileUpload />,
    },
    {
      step: "Step 3",
      title: "Login",
      description:
        "Personalize the CRM features to align with your processes.",
      icon: <FaSignInAlt />,
    },
    {
      step: "Done",
      title: "Setup & Go",
      description:
        "Finalize the setup & start managing your customers right away.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Button */}
        <button
          style={{
            background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
            color: "#ffffff",
            padding: "8px 20px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          How to Use?
        </button>

        {/* Heading */}
        <h2 className="text-[38px] font-bold mt-4 leading-tight tracking-tight">
          Simple Steps to Get Started
        </h2>

        {/* Subheading */}
        <p className="text-[#555] text-[16px] mt-5 max-w-2xl mx-auto leading-relaxed">
          Experience CRM at its finest with smooth integration, insightful
          analytics, and a user experience built for the future.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-left flex flex-col justify-between transition-transform hover:scale-[1.02]"
            >
              <p className="text-gray-500 text-[14px]">{step.step}</p>
              <div className="flex justify-between items-center mt-2">
                <h3 className="font-semibold text-[18px]">{step.title}</h3>
                <div className="text-orange-500 bg-orange-50 rounded-full p-3 text-[18px]">
                  {step.icon}
                </div>
              </div>
              <p className="text-gray-500 text-[14px] mt-3 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
