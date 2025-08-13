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
    <section className="relative overflow-hidden bg-white pt-16 pb-10 sm:pt-24 lg:pt-32">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-100 blur-[120px] rounded-full opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block mb-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white text-sm font-semibold px-4 py-1 shadow-sm">
          #1 AI Funnels, Sales and Marketing Automation System 🚀
        </div>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-2 font-medium">
          #1 Go to Business Operating System FOR Entrepreneurs & Business owners
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Simplest System Ever Built to <br className="hidden sm:inline" />
          Automate & Scale Your Business <br className="hidden sm:inline" />
          <span className="text-black">without Limits.</span>
        </h1>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Scale Your Business with a Comprehensive Suite of Tools that Slash
          Costs at-least by 80% and Amplify Results with AI Precision Tracking
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700 mb-10">
          <div className="flex items-center gap-2">
            <img src="/img/y8BBNbAsFSb2eCv8Of7CxxTLGOc.svg" alt="support" width="20" height="20" />
            24*7 Support
          </div>
          <div className="flex items-center gap-2">
            <img src="/img/y8BBNbAsFSb2eCv8Of7CxxTLGOc.svg" alt="secure" width="20" height="20" />
            Secure Data
          </div>
          <div className="flex items-center gap-2">
            <img src="/img/y8BBNbAsFSb2eCv8Of7CxxTLGOc.svg" alt="custom" width="20" height="20" />
            Customizable
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold shadow hover:opacity-90 transition">
            Learn More →
          </button>
          <button className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow hover:opacity-90 transition">
            Get 7 Day Free Trial →
          </button>
        </div>

        {/* Brand Logos */}
        <p className="text-sm text-gray-400 mb-3">Join 200+ companies already growing with us</p>
<div className="relative overflow-hidden mx-auto w-full lg:w-[37%]">
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
      <img src="/img/Color Logos/Logo 1.png" alt="brand" width="80" height="40" />
      <img src="/img/Color Logos/Logo 2.png" alt="brand" width="80" height="40" />
      <img src="/img/Color Logos/Logo 3.png" alt="brand" width="80" height="40" />
      <img src="/img/Color Logos/Logo 4.png" alt="brand" width="80" height="40" />
    </div>

    {/* Second batch */}
    <div className="flex w-1/2 flex-shrink-0 items-center gap-8">
      <img src="/img/Color Logos/Logo 1.png" alt="brand" width="80" height="40" />
      <img src="/img/Color Logos/Logo 2.png" alt="brand" width="80" height="40" />
      <img src="/img/Color Logos/Logo 3.png" alt="brand" width="80" height="40" />
      <img src="/img/Color Logos/Logo 4.png" alt="brand" width="80" height="40" />
    </div>
  </div>
</div>


      </div>

      {/* Decorative Stats */}
      <div className="absolute bottom-60 left-20 w-56 sm:w-64 rotate-[-8deg]">
        <img src="/img/gDhp3w4pA74orElh0c2VuCs3Z8.png" alt="stats" width="260" height="160" />
      </div>
      <div className="absolute top-40 right-10 w-56 sm:w-64 rotate-[10deg]">
        <img src="/img/gDhp3w4pA74orElh0c2VuCs3Z8.png" alt="stats2" width="260" height="160" />
      </div>
      <div className="absolute bottom-80 right-40 w-48 sm:w-56 rotate-[-5deg]">
        <img src="/img/gDhp3w4pA74orElh0c2VuCs3Z8.png" alt="stats3" width="200" height="120" />
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