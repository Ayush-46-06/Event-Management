import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question:
      "lorem ipsum dolor sit amet, can you help us in travel and accommodation arrangements?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    question:
      "lorem ipsum dolor sit amet, can you help us in travel and accommodation arrangements?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    question: "Do you offer management services for dealers meet in Rajasthan?",
    answer:
      "Yes, we have extensive experience organizing dealer and distributor meets in various locations across Rajasthan.",
  },
  {
    question: "How do you do an exhibition?",
    answer:
      "We manage everything from venue booking, booth setup, design, branding, logistics, and on-site coordination for a seamless exhibition experience.",
  },
  {
    question: "What is the best time to organize a conference in Rajasthan?",
    answer:
      "The ideal time for conferences in Rajasthan is from October to March, when the weather is pleasant and perfect for events.",
  },
  {
    question:
      "Can you organize an entertainment event also along with the conference?",
    answer:
      "Yes! We can integrate entertainment programs, gala dinners, and live performances with your conference to make it engaging and memorable.",
  },
  {
    question:
      "Is there any significant difference in management of conference and dealer/distributor meeting?",
    answer:
      "While both require meticulous planning, conferences usually focus on knowledge sharing, whereas dealer meetings emphasize networking and relationship building.",
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
