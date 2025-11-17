import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const GalleryDetailsPage = () => {
   const location = useLocation();
  const { selectedImage, images, title, description } = location.state || {};

  const [selected, setSelected] = useState(selectedImage); // Store selected image for lightbox
  const [isLightboxOpen, setLightboxOpen] = useState(false); // Control lightbox visibility

  // Open lightbox with selected image
  const openLightbox = (img) => {
    setSelected(img);  // Update only the selected image
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Disable body scroll when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto"; // Re-enable body scroll
  };

  return (
    <>
       {/* BANNER */}
      <div className="relative w-full h-[65vh] overflow-hidden">
        <img
          src={selectedImage}
          className="w-full h-full object-cover object-center"
          alt="Banner"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 z-40">
          <Link to="/gallery">
            <button className="px-4 py-2 bg-black/40 backdrop-blur text-white rounded-xl flex items-center gap-1 cursor-pointer hover:bg-gray-800 hover:scale-105 transition duration-100">
              <ChevronLeft size={18} /> Back to Gallery
            </button>
          </Link>
        </div>

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="max-w-2xl sm:text-lg text-[12px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* IMAGE GALLERY BELOW */}
      <div className="py-10 lg:px-40 px-10">
        <h2 className="text-3xl font-bold text-black mb-6">Event Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* LARGE LEFT (Main Image) */}
          <div
            className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => openLightbox(selected)} // Clicking the main image opens the lightbox
          >
            <img src={selected} className="w-full h-full object-cover" />
          </div>

          {/* RIGHT SMALL IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(img)} // Clicking any image on the right side opens the lightbox
              >
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80"
          >
            <div className="absolute inset-0" onClick={closeLightbox}></div>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full mx-auto rounded-2xl overflow-hidden"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-50 p-2 bg-white/20 text-white rounded-full backdrop-blur"
              >
                <X size={20} />
              </button>

              <img
                src={selected}
                className="w-full max-h-[80vh] object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryDetailsPage;
