import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full mb-15 bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 ">
      <div className="max-w-3xl mx-auto text-center px-4">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Stay Updated with <span className="text-indigo-600">GRAPHURA</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mt-3">
          Subscribe to our newsletter to get the latest event insights,<br />
          announcements, and exclusive updates.
        </p>

        {/* Input + Button */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full max-w-md px-5 py-3 rounded-full 
                       bg-white shadow border border-gray-300
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            className="px-6 py-3 rounded-full font-semibold text-white 
                       bg-gradient-to-r from-indigo-500 to-purple-600
                       shadow-md hover:scale-105 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
