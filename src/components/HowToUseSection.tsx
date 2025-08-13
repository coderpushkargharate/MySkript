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
    <section className="bg-[#faf9f7] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
          How to Use?
        </button>
        <h2 className="text-4xl font-bold mt-4">Simple Steps to Get Started</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Experience CRM at its finest with smooth integration, insightful
          analytics, and a user experience built for the future.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border p-6 text-left flex flex-col justify-between"
            >
              <p className="text-gray-500 text-sm">{step.step}</p>
              <div className="flex justify-between items-center mt-2">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <div className="text-orange-500 bg-orange-50 rounded-full p-3 text-xl">
                  {step.icon}
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-3">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
