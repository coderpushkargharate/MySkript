import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const plans = [
  {
    id: "plan_R1uo385RzbRIKA",
    name: "Standard",
    price: "₹4,850",
    yearlyPrice: "₹48,500",
    period: "month",
    yearlyPeriod: "year",
    yearlyId: "plan_R1usIilBLpME0T",
    description: "Perfect for small businesses and startups",
    icon: Zap,
    color: "blue",
    features: [
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
    name: "Premium",
    price: "₹6,450",
    yearlyPrice: "₹64,500",
    period: "month",
    yearlyPeriod: "year",
    yearlyId: "plan_R1uyUso2JEH0hG",
    description: "Ideal for growing businesses",
    icon: Crown,
    color: "purple",
    popular: true,
    features: [
      "Everything in Standard",
      "Advanced Analytics",
      "Priority Support",
      "Custom Integrations",
      "Advanced AI Features",
      "White-label Options",
      "API Access"
    ]
  },
  {
    id: "plan_R1uqvnksOBtSEH",
    name: "Enterprise",
    price: "₹9,850",
    yearlyPrice: "₹98,500",
    period: "month",
    yearlyPeriod: "year",
    yearlyId: "plan_R1v1VETXTsHy3p",
    description: "For large organizations",
    icon: Rocket,
    color: "red",
    features: [
      "Everything in Premium",
      "Dedicated Account Manager",
      "Custom Development",
      "Enterprise Security",
      "SLA Guarantee",
      "Advanced Reporting",
      "Multi-team Management"
    ]
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
            <h1 className="text-2xl font-bold text-gray-900">BusinessPro</h1>
          </div>
          <Link 
            to="/login"
            className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          >
            Dashboard Login
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
            Simple Pricing
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose the Perfect Plan for Your Business
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start with a 7-day free trial. No credit card required. Cancel anytime.
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
              Annual
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name} Plan</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">{currentPrice}</span>
                      <span className="text-lg text-gray-500 ml-1">/{currentPeriod}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

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
                    Start Free Trial
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 pb-16">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What happens next?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">7-day free trial starts immediately</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Full access to all features</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Cancel anytime during the trial</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Only ₹5 registration fee required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}