import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://i.pinimg.com/736x/d3/8f/01/d38f01586aef2a525c74a1916c67e0eb.jpg",
  "https://i.pinimg.com/1200x/c8/27/63/c827631d54c731bdf51a8bdbbea58d0e.jpg",
  "https://i.pinimg.com/1200x/8c/8b/8b/8c8b8bc362e892df991643c153e070fe.jpg",
  "https://i.pinimg.com/1200x/c7/3e/19/c73e196cc07fd84b0d66118711d77897.jpg",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[95vh] md:h-[90vh] overflow-hidden">
      {/* Image Slider */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-[95vh] md:h-[90vh] relative"
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
          Welcome to{" "}
          <span className="text-orange-500 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Graphura
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
          Empowering innovation through creativity and technology.
        </p>
        <Link to="/events" className="mt-8">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            Explore Events
          </button>
        </Link>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all"
      >
        ❮
      </button>
      <button
        onClick={() =>
          setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-orange-500" : "bg-white/50"
            } transition-all`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;