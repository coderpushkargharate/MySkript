import React from 'react';
import Pricing from './Pricing';
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';
import OperationalExcellenceSection from './OperationalExcellenceSection';
import UsefulFeaturesSection from './UsefulFeaturesSection';
import { WholeWordIcon } from 'lucide-react';
import HowToUseSection from './HowToUseSection';
import ClientsSection from './ClientsSection';
import ClientTestimonial from './ClientTestimonial';
import FaqSection from './FaqSection';
import CustomerCTA from './CustomerCTA';
import IntegrationsSection from './IntegrationsSection';
import WhyChooseUs from './WhyChooseUs';

export default function HeroSection() {
  return (
    <>
    <section className="relative overflow-hidden bg-white pt-16 pb-10 sm:pt-10 lg:pt-32 ">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-100 blur-[120px] rounded-full opacity-60 z-0" />

<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 lg:mt-2">
        {/* Badge */}
       <div 
  style={{
    display: "inline-block",
    marginBottom: "1rem",
    borderRadius: "9999px",
    background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 600,
    padding: "6px 18px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  }}
>
  #1 AI Funnels, Sales and Marketing Automation System 🚀
</div>


       {/* Subtitle */}
<p
  style={{
    fontSize: "1.1rem", // same as text-sm
    color: "#a5a6abff", // Tailwind's gray-500 but slightly softer
    marginBottom: "0.5rem",
    fontWeight: 600,
  }}
>
  #1 Go to Business Operating System FOR Entrepreneurs &amp; Business Owners
</p>


    {/* Heading */}
<h1
  style={{
    fontSize: "3.25rem", // base size (text-4xl)
    fontWeight: 700,
    color: "#111827", // Tailwind's gray-900
    lineHeight: "1.2",
    marginBottom: "1rem",
  }}
>
  Simplest System Ever Built to <br className="hidden sm:inline" />
  Automate &amp; Scale Your Business <br className="hidden sm:inline" />
  <span style={{ color: "#000000" }}>without Limits.</span>
</h1>


        {/* Paragraph */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Scale Your Business with a Comprehensive Suite of Tools that Slash <br />
          Costs at-least by 80% and Amplify Results with AI Precision Tracking
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700 mb-6">
          <div className="flex items-center gap-2">
            <img src="./assets/img/y8BBNbAsFSb2eCv8Of7CxxTLGOc.svg" alt="support" width="20" height="20" />
            24*7 Support
          </div>
          <div className="flex items-center gap-2">
            <img src="./assets/img/y8BBNbAsFSb2eCv8Of7CxxTLGOc.svg" alt="secure" width="20" height="20" />
            Secure Data
          </div>
          <div className="flex items-center gap-2">
            <img src="./assets/img/y8BBNbAsFSb2eCv8Of7CxxTLGOc.svg" alt="custom" width="20" height="20" />
            Customizable
          </div>
        </div>

     {/* Buttons */}
<div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
  <button
    style={{
      padding: "10px 28px",
      borderRadius: "18px",
    background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
      color: "#fff",
      fontWeight: 600,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      border: "none",
      cursor: "pointer",
      transition: "opacity 0.2s ease-in-out",
    }}
    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
  >
    Learn More →
  </button>

  <button
    style={{
      padding: "10px 28px",
      borderRadius: "18px",
    background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
      color: "#fff",
      fontWeight: 600,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      border: "none",
      cursor: "pointer",
      transition: "opacity 0.2s ease-in-out",
    }}
    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
  >
    Get 7 Day Free Trial →
  </button>
</div>


        {/* Brand Logos */}
        <p className="text-sm text-gray-600 fw-700 mb-5">Join 200+ companies already growing with us</p>
<div className="relative overflow-hidden mx-auto w-full lg:w-[50%]">
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
      display: flex;
      animation: scroll 15s linear infinite;
    }
  `}</style>

  <div className="animate-scroll w-[200%]">
    {/* First batch */}
    <div className="flex w-1/2 flex-shrink-0 items-center gap-8">
      <img src="./assets/img/Color Logos/Logo 1.png" alt="brand" width="120" height="60" />
      <img src="./assets/img/Color Logos/Logo 2.png" alt="brand" width="120" height="60" />
      <img src="./assets/img/Color Logos/Logo 3.png" alt="brand" width="120" height="60" />
      <img src="./assets/img/Color Logos/Logo 4.png" alt="brand" width="120" height="60" />
    </div>

    {/* Second batch */}
    <div className="flex w-1/2 flex-shrink-0 items-center gap-8">
      <img src="./assets/img/Color Logos/Logo 1.png" alt="brand" width="120" height="60" />
      <img src="./assets/img/Color Logos/Logo 2.png" alt="brand" width="120" height="60" />
      <img src="./assets/img/Color Logos/Logo 3.png" alt="brand" width="120" height="60" />
      <img src="./assets/img/Color Logos/Logo 4.png" alt="brand" width="120" height="60" />
    </div>
  </div>
</div>


      </div>

     {/* Decorative Stats */}
<div
  style={{
    position: "absolute",
    bottom: "10rem",
    left: "13rem",
    width: "14rem",
    transform: "rotate(-8deg)",
    display: window.innerWidth >= 1024 ? "block" : "none",
  }}
>
  <img
    src="https://framerusercontent.com/images/4x6Oi7JmCZ1ITUYzGOx7Ei8JVg.png"
    alt="stats"
    width="260"
    height="160"
  />
</div>

<div
  style={{
    position: "absolute",
    top: "10rem",
    right: "2.5rem",
    width: "18rem",
    transform: "rotate(8deg)",
    display: window.innerWidth >= 1024 ? "block" : "none",
  }}
>
  <img
    src="./assets/img/gDhp3w4pA74orElh0c2VuCs3Z8.png"
    alt="stats2"
    width="260"
    height="160"
  />
</div>

<div
  style={{
    position: "absolute",
    bottom: "19rem",
    right: "6rem",
    width: "20rem",
    transform: "rotate(-7deg)",
    display: window.innerWidth >= 1024 ? "block" : "none",
  }}
>
  <img
    src="https://framerusercontent.com/images/2VxsRmb0uljTnJnCoksVqF36h0.png"
    alt="stats3"
    width="240"
    height="130"
  />
</div>
<div
  style={{
    position: "absolute",
    top: "13rem",
    left: "21rem",
    width: "20rem",
    // transform: "rotate(-7deg)",
    display: window.innerWidth >= 1024 ? "block" : "none",
  }}
>
  <img
    src="https://framerusercontent.com/images/oJjztZe8llqa3OydYPTVmY1p8.svg"
    alt="stats3"
    width="20"
    height="30"
  />
</div>
<div
  style={{
    position: "absolute",
    top: "10rem",
    right: "0rem",
    width: "20rem",

    display: window.innerWidth >= 1024 ? "block" : "none",
  }}
>
  <img
    src="https://framerusercontent.com/images/oTvlhnrajpOSXNcvPl23aws1J8c.svg"
    alt="stats3"
    width="20"
    height="130"
  />
</div>

    </section>

      <FeaturesSection/>
      <BenefitsSection />
      <OperationalExcellenceSection />
      <UsefulFeaturesSection />
      <WhyChooseUs/>
      {/* <WholeWordIcon /> */}
      <HowToUseSection />
      <Pricing />
      <ClientTestimonial />
      <IntegrationsSection />
      <FaqSection />
      <CustomerCTA />
      
      {/* <ClientsSection /> */}
    </>
  
  );
}