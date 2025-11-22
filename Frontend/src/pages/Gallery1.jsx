import React, { useState } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Navbar from "../components/Navbar";
import Footer1 from "./Footer1";

const Gallery = () => {

  const weddingImages = [
    "/images/wedding1.jpg",
    "/images/wedding2.jpg",
    "/images/wedding3.jpg",
    "/images/wedding4.jpg",
    "/images/wedding5.jpg",
    "/images/wedding6.jpg",
  ];

  const corporateImages = [
    "/images/corporate1.jpg",
    "/images/corporate2.jpg",
    "/images/corporate3.jpg",
    "/images/corporate4.jpg",
    "/images/corporate5.jpg",
    "/images/corporate6.jpg",
  ];

  const culturalImages = [
    "/images/cultural1.jpg",
    "/images/cultural2.jpg",
    "/images/cultural3.jpg",
    "/images/cultural4.jpg",
    "/images/cultural5.jpg",
    "/images/cultural6.jpg",
  ];


  const [showMore, setShowMore] = useState({
    wedding: false,
    corporate: false,
    cultural: false,
  });

  const handleSeeMore = (section) => {
    setShowMore((prev) => ({ ...prev, [section]: true }));
  };

  const Section = ({ title, images, sectionKey }) => {
    const visibleImages = showMore[sectionKey] ? images : images.slice(0, 3);

    return (
        
      <section className="my-12">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 tracking-wide">
          {title}
        </h2>

        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4"
        >
          {visibleImages.map((src, i) => (
            <a
              key={i}
              href={src}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
            </a>
          ))}

         
          {!showMore[sectionKey] && (
            <div
              onClick={() => handleSeeMore(sectionKey)}
              className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold rounded-xl cursor-pointer hover:scale-105 transition"
            >
              See More →
            </div>
          )}
        </LightGallery>
      </section>
    );
  };

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen py-10 mt-20">
        
      <h1 className="text-4xl font-extrabold text-center text-red-500 mb-8">
        Our Event Gallery
      </h1>

      <Section
        title="✨ Wedding Moments"
        images={weddingImages}
        sectionKey="wedding"
      />
      <Section
        title="💼 Corporate Events"
        images={corporateImages}
        sectionKey="corporate"
      />
      <Section
        title="🎭 Cultural Celebrations"
        images={culturalImages}
        sectionKey="cultural"
      />
    </div>
    <Footer1 />
    </>
  );
};

export default Gallery;
