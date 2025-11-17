import React, { useState } from "react";
import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

const categories = ["All", "Corporate", "Cultural", "Tech", "Private", "Exhibitions"];

const galleryData = {
    Corporate: [
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600",
    ],
    Cultural: [
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600",
        "https://images.unsplash.com/photo-1482849297070-f4fae2173efe?w=600",
        "https://i.pinimg.com/1200x/49/62/d1/4962d15328ee2c9aafdfeb46f2d5955a.jpg",
    ],
    Private: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600",
    ],
    Exhibitions: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600",
        "https://images.unsplash.com/photo-1482849297070-f4fae2173efe?w=600",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=600",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600",
    ],
    Tech: [
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=600",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=6000",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=600",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
    ],
}

const Gallery = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");


    const categoriesToShow =
        selectedCategory === "All"
            ? Object.keys(galleryData)
            : [selectedCategory];

    return (
        <section className="py-20 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 tracking-tight">
                        Events Gallery
                    </h2>
                    <div className="w-28 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
                    <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-indigo-800 leading-relaxed">
                        Explore moments captured across our corporate, cultural, private, and exhibition events.
                    </p>
                </motion.div>


                {/* Filter Section */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full text-lg font-semibold shadow-md transition-all duration-300 backdrop-blur-lg border
${selectedCategory === cat
                                    ? "bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white border-transparent scale-105"
                                    : "bg-white/70 text-indigo-900 border-indigo-200 hover:shadow-lg"}
`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                {/* Gallery Sections: only render categoriesToShow */}
                {categoriesToShow.map((category) => (
                    <div key={category} className="mb-20">
                        <h3 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
                            {category} Events
                        </h3>


                        {/* Images Grid with Lightbox */}
                        <LightGallery speed={500} plugins={[lgZoom, lgThumbnail]}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {galleryData[category].slice(0, 3).map((img, idx) => (
                                    <a href={img} key={idx} className="block">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                                            className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                                        >
                                            <img src={img} alt={`${category} event ${idx + 1}`} className="w-full h-64 object-cover" />
                                        </motion.div>
                                    </a>
                                ))}
                            </div>
                        </LightGallery>


                        {/* Show More Button */}
                        <div className="text-center mt-6">
                            <button
                                onClick={() => alert(`Show more clicked for ${category} events`)}
                                className="px-8 py-3 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 shadow-lg hover:scale-105 transition-all cursor-pointer"
                            >
                                Show More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Gallery;
