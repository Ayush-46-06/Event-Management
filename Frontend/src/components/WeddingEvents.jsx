import React from "react";
import { CalendarDays, MapPin, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WeddingEvent = () => {
  const images = [
    "/wedding1.jpg",
    "/wedding2.jpg",
    "/wedding3.jpg",
    "/wedding4.jpg",
    "/wedding5.jpg",
    "/wedding6.jpg",
  ];

  return (
    <div className="min-h-screen items-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-12">
      
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          to="/events/wedding"
          className="inline-flex items-center px-5 py-2 rounded-xl bg-white shadow hover:bg-gray-100 transition"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Events
        </Link>
      </div>

      <div className="max-w-9xl px-60 items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Royal Wedding Ceremony
          </h1>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Join us for an unforgettable wedding celebration filled with love, elegance,
            and cherished moments. Experience beautifully crafted decor, soothing
            melodies, and heartwarming memories with family and friends.
          </p>

          {/* EVENT DETAILS */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3">
              <CalendarDays className="text-purple-600" />
              <span className="text-gray-700 font-medium">March 22, 2025</span>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="text-purple-600" />
              <span className="text-gray-700 font-medium">5:00 PM - 10:00 PM</span>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="text-purple-600" />
              <span className="text-gray-700 font-medium">Royal Orchid Banquet, New Delhi</span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">About this Wedding</h2>
            <p className="text-gray-600 leading-relaxed">
              The evening includes traditional rituals, a beautiful stage setup,
              floral arrangements, and a warm gathering of loved ones. Enjoy
              delicious cuisine, candid moments, and a heartwarming celebration
              of two souls uniting in love.
            </p>
          </div>
        </div>

        {/* RIGHT GALLERY */}
        <div className="grid grid-cols-3 gap-4 mt-7">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={img}
                alt="wedding"
                className="w-full h-48 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingEvent;
