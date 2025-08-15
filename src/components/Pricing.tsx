import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const plans = [
  {
    id: "plan_R1uo385RzbRIKA",
    name: "Standard Plan",
    price: "₹4,850",
    yearlyPrice: "₹48,500",
    period: "month",
    yearlyPeriod: "year",
    yearlyId: "plan_R1usIilBLpME0T",
    description: "Small businesses",
    icon: Zap,
    color: "blue",
    features: [
      "Unlimited Funnels",
      "Unlimited Automations",
      "Unlimited Forms & Surveys",
      "Appointment Booking",
      "CRM with Unlimited Leads",
      "Unlimited Pipelines",
      "Unlimited Courses",
      "Unlimited Blogs",
      "Social Media Posts Scheduler",
      "AI Paid Ads Tracking",
      "Detailed Reports & Analytics",
      "A/B Split Testing",
      "Team Management",
      "Website Builder",
      "AI Inbox",
      "Unlimited Domains",
      "3000+ Templates",
      "Link Tracking & Redirections",
      "AI Agents - Voice, Chat, Content",
      "GMB Reviews & Messaging"
    ]
  },
  {
    id: "plan_R1uqJGdXsakTwx",
    name: "Premium Plan",
    price: "₹6,450",
    yearlyPrice: "₹64,500",
    period: "month",
    yearlyPeriod: "year",
    yearlyId: "plan_R1uyUso2JEH0hG",
    description: "Growing businesses",
    icon: Crown,
    color: "purple",
    popular: true,
    features: [
      "Unlimited Funnels",
      "Unlimited Automations",
      "Unlimited Forms & Surveys",
      "Appointment Booking",
      "CRM with Unlimited Leads",
      "Unlimited Pipelines",
      "Unlimited Courses",
      "Unlimited Blogs",
      "Social Media Posts Scheduler",
      "AI Paid Ads Tracking",
      "Detailed Reports & Analytics",
      "A/B Split Testing",
      "Team Management",
      "Website Builder",
      "AI Inbox",
      "Unlimited Domains",
      "3000+ Templates",
      "Link Tracking & Redirections",
      "AI Agents - Voice, Chat, Content",
      "GMB Reviews & Messaging",
      "In-Built WhatsApp API",
      "Email Marketing",
      "2 Way Text & Email Conversations",
      "24/7 Priority Support"
    ]
  },
  {
    id: "plan_R1uqvnksOBtSEH",
    name: "Enterprise Plan",
    price: "₹9,850",
    yearlyPrice: "₹98,500",
    period: "month",
    yearlyPeriod: "year",
    yearlyId: "plan_R1v1VETXTsHy3p",
    description: "Large businesses",
    icon: Rocket,
    color: "red",
    features: [
      "Unlimited Funnels",
      "Unlimited Automations",
      "Unlimited Forms & Surveys",
      "Appointment Booking",
      "CRM with Unlimited Leads",
      "Unlimited Pipelines",
      "Unlimited Courses",
      "Unlimited Blogs",
      "Social Media Posts Scheduler",
      "AI Paid Ads Tracking",
      "Detailed Reports & Analytics",
      "A/B Split Testing",
      "Team Management",
      "Website Builder",
      "AI Inbox",
      "Unlimited Domains",
      "3000+ Templates",
      "Link Tracking & Redirections",
      "AI Agents - Voice, Chat, Content",
      "GMB Reviews & Messaging",
      "In-Built WhatsApp API",
      "Email Marketing",
      "2 Way Text & Email Conversations",
      "Reputation Management",
      "24/7 Priority Support"
    ]
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
            Our Pricing Plan
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose the Best Plan for Your Business
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find the right plan for your needs, with flexible choices and transparent pricing details.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isYearly ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            const currentPrice = isYearly ? plan.yearlyPrice : plan.price;
            const currentPeriod = isYearly ? plan.yearlyPeriod : plan.period;
            const currentPlanId = isYearly ? plan.yearlyId : plan.id;
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-purple-500 ring-2 ring-purple-200' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      plan.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      plan.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">{currentPrice}</span>
                      
                      <span className="text-lg text-gray-500 ml-1">/{currentPeriod}</span>
                    </div>
                    <Link
                    to={`/payment/${currentPlanId}`}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                        : plan.color === 'blue'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : plan.color === 'red'
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get 7 Day Trial
                  </Link>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
