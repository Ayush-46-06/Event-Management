import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer1 from "../pages/Footer1";

const CulturalEvent = () => {
  const events = [
    {
      id: 1,
      title: "Folk Fusion Night 2025",
      category: "Traditional Dance",
      date: "Nov 21st, 2025",
      location: "Faridabad, Haryana",
      image: "/images/folk-dance.jpg",
    },
    {
      id: 2,
      title: "Winter Rhythms 2025",
      category: "Music Festival",
      date: "Dec 22nd, 2025",
      location: "Shimla, Himachal Pradesh",
      image: "/images/winter-dance.jpg",
    },
    {
      id: 3,
      title: "Canvas Chronicles 2025",
      category: "Art Exhibition",
      date: "Dec 23rd, 2025",
      location: "Delhi, India",
      image: "/images/exibition.jpg",
    },
    {
      id: 4,
      title: "Great Indian Drama 2025",
      category: "Theater Play",
      date: "Dec 30th, 2025",
      location: "Dehradhun, Uttarakhand",
      image: "/images/indian-drama.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <>
    <Navbar />
    <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100">
      {/* <h1 className="text-[#57699b] font-bold text-2xl py-2 px-4 bg-white">
        Cultural Events
      </h1> */}
      <section className="banner w-full overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-4">
        <img
          src="/images/cultural-banner.png"
          alt="Cultural Banner"
          className="w-full h-[35vh] sm:h-[40vh] md:h-[45vh] object-cover"
        />
      </section>

      <section className="category-filter">
        <div className="w-full border-b border-gray-300">
          <nav className="categories overflow-x-auto scrollbar-hide py-2">
            <ul className="flex items-center min-w-max gap-2 md:gap-4 lg:gap-6 px-4 sm:justify-center">
              {[
                "All",
                "Traditional Dance",
                "Music Festival",
                "Art Exhibition",
                "Theater Play",
              ].map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer font-semibold py-2 px-5 rounded-3xl border border-gray-300 transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-linear-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-white text-[#57699b]"
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <section className="event-cards">
        <div className="px-4 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="mt-3 pb-2 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-2 cursor-pointer"
            >
              <div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="px-5 py-2">
                <h2 className="font-bold text-xl text-[#333]">{event.title}</h2>
                <p className="text-gray-500 py-1">
                  <i className="fa-regular fa-calendar pr-2"></i> {event.date}
                </p>
                <p className="text-gray-500 py-1">
                  <i className="fa-solid fa-location-dot pr-2"></i>{" "}
                  {event.location}
                </p>
                <button className="mt-1 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-white w-full rounded-xl cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer1 />
    </>
  );
};

export default CulturalEvent;