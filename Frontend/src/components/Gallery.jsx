import React from "react";
import { Link } from "react-router-dom";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const images = [
  { src: "/images/19.png", size: "h-[260px]" },
  { src: "/images/29.webp", size: "h-[260px]" },
  { src: "/images/30.webp", size: "h-[260px]" },
  { src: "/images/31.webp", size: "h-[200px]" },
  { src: "/images/32.webp", size: "h-[350px]" },
  { src: "/images/33.jpg", size: "h-[280px]" },
  { src: "/images/34.jpg", size: "h-[240px]" },
  { src: "/images/35.webp", size: "h-[200px]" },
  { src: "/images/36.jpg", size: "h-[280px]" },
  { src: "/images/37.jpg", size: "h-[260px]" },
  { src: "/images/39.jpg", size: "h-[240px]" },
];

const GallerySection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-40 ">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900">
          Check our latest gallery
        </h2>
        <p className="text-indigo-800 items-start mt-3 max-w-2xl mx-auto">
          Explore moments from our cultural, corporate, wedding, and tech events.<br />
          Each picture reflects our commitment to detail, creativity, and flawless execution.
        </p>
      </div>

      {/* 3 Column Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            className={`w-full object-cover rounded-2xl shadow-md hover:scale-[1.02] transition ${img.size}`}
            alt="Event Gallery"
          />
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <Link to="/gallery">
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg transition">
          View All Gallery
        </button>
        </Link>
      </div>

    </section>
  );
};

export default GallerySection;
