import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, Zap, Crown, Rocket } from "lucide-react";

// Master features list
const allFeatures = [
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
  "Wordpress",
  "Ads Manager",
  "Reputation Management",
  "24/7 Priority Support"
];

// Each plan specifies which features it includes
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
    features: {
      "Unlimited Funnels": true,
      "Unlimited Automations": true,
      "Unlimited Forms & Surveys": true,
      "Appointment Booking": true,
      "CRM with Unlimited Leads": true,
      "Unlimited Pipelines": true,
      "Unlimited Courses": true,
      "Unlimited Blogs": true,
      "Social Media Posts Scheduler": true,
      "AI Paid Ads Tracking": true,
      "Detailed Reports & Analytics": true,
      "A/B Split Testing": true,
      "Team Management": true,
      "Website Builder": true,
      "AI Inbox": true,
      "Unlimited Domains": true,
      "3000+ Templates": true,
      "Link Tracking & Redirections": true,
      "AI Agents - Voice, Chat, Content": true,
      "GMB Reviews & Messaging": true,
      "In-Built WhatsApp API": false,
      "Email Marketing": false,
      "2 Way Text & Email Conversations": false,
      "Wordpress": false,
      "Ads Manager": false,
      "Reputation Management": false,
      "24/7 Priority Support": false
    }
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
    features: {
      ...allFeatures.reduce((acc, f) => ({ ...acc, [f]: false }), {}), // default false
      "Unlimited Funnels": true,
      "Unlimited Automations": true,
      "Unlimited Forms & Surveys": true,
      "Appointment Booking": true,
      "CRM with Unlimited Leads": true,
      "Unlimited Pipelines": true,
      "Unlimited Courses": true,
      "Unlimited Blogs": true,
      "Social Media Posts Scheduler": true,
      "AI Paid Ads Tracking": true,
      "Detailed Reports & Analytics": true,
      "A/B Split Testing": true,
      "Team Management": true,
      "Website Builder": true,
      "AI Inbox": true,
      "Unlimited Domains": true,
      "3000+ Templates": true,
      "Link Tracking & Redirections": true,
      "AI Agents - Voice, Chat, Content": true,
      "GMB Reviews & Messaging": true,
      "In-Built WhatsApp API": true,
      "Email Marketing": true,
      "2 Way Text & Email Conversations": true,
      "24/7 Priority Support": true
    }
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
    features: {
      ...allFeatures.reduce((acc, f) => ({ ...acc, [f]: true }), {}), // Enterprise has all
      "Wordpress": true,
      "Ads Manager": true
    }
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50" id="pricing">
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
            <span className={`text-lg font-medium ${!isYearly ? "text-gray-900" : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isYearly ? "text-gray-900" : "text-gray-500"}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const currentPrice = isYearly ? plan.yearlyPrice : plan.price;
            const currentPeriod = isYearly ? plan.yearlyPeriod : plan.period;
            const currentPlanId = isYearly ? plan.yearlyId : plan.id;

            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all hover:scale-105 ${
                  plan.popular ? "border-purple-500 ring-2 ring-purple-200" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                        plan.color === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : plan.color === "purple"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                    <div className="flex items-baseline justify-center mt-4">
                      <span className="text-4xl font-bold">{currentPrice}</span>
                      <span className="text-lg text-gray-500 ml-1">/{currentPeriod}</span>
                    </div>
                    <Link
                      to={`/payment/${currentPlanId}`}
                      className="mt-4 w-full inline-flex justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
                    >
                      Get 7 Day Trial
                    </Link>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-3">
                    {allFeatures.map((feature) => (
                      <li key={feature} className="flex items-start">
                        {plan.features[feature] ? (
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        )}
                        <span className={plan.features[feature] ? "text-gray-700" : "text-gray-400"}>
                          {feature}
                        </span>
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
