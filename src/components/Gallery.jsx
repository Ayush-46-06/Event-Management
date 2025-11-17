import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const images = [
  { url: "/images/20.jpg", title: "lorem ckdkkcz" },
  { url: "/images/hero3.jpg", title: "lorem ckdkkcz" },
  { url: "/images/hero2.jpg", title: "lorem ckdkkcz" },
  { url: "/images/hero3.jpg", title: "lorem ckdkkcz" },
  { url: "/images/hero1.webp", title: "lorem ckdkkcz" },
  { url: "/images/hero2.jpg", title: "lorem ckdkkcz" },
  { url: "/images/hero1.webp", title: "lorem ckdkkcz" },
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
  const timer = setInterval(() => nextSlide(), 2000);
  return () => clearInterval(timer);
}, [current]);

  const getPositionClass = (index) => {
    const diff = (index - current + images.length) % images.length;

    switch (diff) {
      case 0:
        return "translate-x-0 scale-100 z-40 opacity-100"; // Center
      case 1:
        return "translate-x-48 scale-90 z-30 opacity-90 rotate-2"; // Right 1
      case 2:
        return "translate-x-80 scale-80 z-20 opacity-70 rotate-3"; // Right 2
      case 3:
        return "translate-x-96 scale-70 z-10 opacity-50 rotate-6"; // Right 3
      case images.length - 1:
        return "-translate-x-48 scale-90 z-30 opacity-90 -rotate-2"; // Left 1
      case images.length - 2:
        return "-translate-x-80 scale-80 z-20 opacity-70 -rotate-3"; // Left 2
      case images.length - 3:
        return "-translate-x-96 scale-70 z-10 opacity-50 -rotate-6"; // Left 3
      default:
        return "opacity-0 scale-50";
    }
  };

  return (
    <div className="w-full m-2 h-screen bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 flex flex-col items-center justify-center overflow-hidden text-center">
      <h1 className="text-4xl font-extrabold text-gray-800  tracking-wide drop-shadow-md">
        Gallery Showcase
      </h1>

      <div className="relative w-[90%] h-[460px] flex items-center justify-center">
       
        <button
          onClick={prevSlide}
          className="absolute left-6 z-50 p-3 text-white bg-black/40 hover:bg-black/70 rounded-full transition-all hover:scale-110"
        >
          <FaChevronLeft size={22} />
        </button>

        
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out ${getPositionClass(
                index
              )}`}
            >
              <div className="relative w-[420px] h-[270px] rounded-xl overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
                <p className="absolute bottom-0 left-0 right-0  text-center text-white font-semibold py-2">
                  {img.title}
                </p>
                
              </div>
            </div>
          ))}
        </div>

       
        <button
          onClick={nextSlide}
          className="absolute right-6 z-50 p-3 text-white bg-black/40 hover:bg-black/70 rounded-full transition-all hover:scale-110"
        >
          <FaChevronRight size={22} />
        </button>
      </div>

    
      <Link
        to="/events"
        className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl transform hover:scale-105 transition duration-300"
      >
        Go to Gallery →
      </Link>
    </div>
  );
};

export default Gallery;
