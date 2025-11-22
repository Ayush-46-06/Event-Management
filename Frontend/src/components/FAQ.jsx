import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question:
      "What types of events do you organize?",
    answer:
      "We manage cultural events, tech events, corporate functions, and weddings with complete planning and execution.",
  },
  {
    question:
      "How early should I book an event?",
    answer:
      "We recommend booking at least 2–4 weeks in advance to ensure availability and smooth planning.",
  },
  {
    question: "Do you offer custom event packages?",
    answer:
      "Yes, all our packages can be customized based on your theme, budget, and requirements.",
  },
  {
    question: "Can you handle full event management?",
    answer:
      "Absolutely — we take care of everything including planning, decor, logistics, and on-day coordination.",
  },
  {
    question: "Do you provide on-site support during the event?",
    answer:
      "Yes, our team is present throughout the event to ensure everything runs flawlessly.",
  },
  {
    question:
      "What is your pricing structure?",
    answer:
      "Pricing depends on event type, scale, and services chosen; we offer transparent and flexible costing.",
  },
  {
    question:
      "Can you manage last-minute changes?",
    answer:
      "Yes, we handle last-minute adjustments efficiently to keep your event stress-free.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative m-2 bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 py-16 rounded-lg px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl md:text-4xl text-center font-extrabold text-indigo-900 mb-10">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "bg-pink-50 border-pink-300" : "bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left p-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <FaQuestionCircle
                    className={`text-lg ${
                      activeIndex === index ? "text-pink-500" : "text-purple-400"
                    }`}
                  />
                  <span>{faq.question}</span>
                </div>
                <span
                  className={`text-2xl font-bold transition-transform ${
                    activeIndex === index ? "rotate-45 text-pink-500" : "rotate-0 text-gray-500"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`px-6 pb-4 text-gray-600 text-sm md:text-base transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
