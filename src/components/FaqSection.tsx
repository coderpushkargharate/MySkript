'use client';

import { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How can a Myskript.io benefit my business?',
    answer:
      'It can boost efficiency, improve customer service, organize data better, and increase sales by offering insights into customer behavior and preferences.',
  },
  {
    question: 'What kind of customer support do you provide?',
    answer:
      'We offer 24/7 customer support through live chat, email, and helpdesk to ensure your experience remains smooth and productive.',
  },
  {
    question: 'Can I change or cancel my subscription?',
    answer:
      'Yes, you can easily change or cancel your subscription anytime from your account dashboard.',
  },
  {
    question: 'Can I try the Myskript.io before making a purchase?',
    answer:
      'Absolutely! We offer a 7-day free trial so you can explore the features and benefits without any risk.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-center">
      {/* Header */}
      <div className="mb-12">
        <span
  style={{
    display: "inline-block",                   // inline-block
    padding: "0.25rem 1rem",                   // py-1 px-4
    marginBottom: "1rem",                      // mb-4
    borderRadius: "9999px",                    // rounded-full
    fontSize: "0.875rem",                      // text-sm
    fontWeight: 600,                           // font-semibold
    color: "#ffffff",                          // text-white
    background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"  // shadow
  }}
>
  Common Question
</span>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQs */}
      <div className="max-w-2xl mx-auto space-y-4 text-left">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl transition-all duration-300 ease-in-out ${
              openIndex === index ? 'bg-gray-50 shadow' : ''
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 text-lg font-medium text-gray-800 focus:outline-none"
            >
              {item.question}
              <ChevronUp
                className={`h-5 w-5 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
