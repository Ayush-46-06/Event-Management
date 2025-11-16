// const weddingImages = [
//     "/images/wedding1.jpg",
//     "/images/wedding2.jpg",
//     "/images/wedding3.jpg",
//     "/images/wedding4.jpg",
//     "/images/wedding5.jpg",
//     "/images/wedding6.jpg",
// ];

// const corporateImages = [
//     "/images/corporate1.jpg",
//     "/images/corporate2.jpg",
//     "/images/corporate3.jpg",
//     "/images/corporate4.jpg",
//     "/images/corporate5.jpg",
//     "/images/corporate6.jpg",
// ];

// const culturalImages = [
//     "/images/cultural1.jpg",
//     "/images/cultural2.jpg",
//     "/images/cultural3.jpg",
//     "/images/cultural4.jpg",
//     "/images/cultural5.jpg",
//     "/images/cultural6.jpg",
// ];

// const [showMore, setShowMore] = useState({
//     wedding: false,
//     corporate: false,
//     cultural: false,
// });

// const handleSeeMore = (section) => {
//     setShowMore((prev) => ({ ...prev, [section]: true }));
// };

// {/* Beautiful Gradient Heading */ }
// <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-indigo-900">
//     {title}
// </h2>

// {/* Gallery Grid */ }
// <LightGallery
//     speed={500}
//     plugins={[lgThumbnail, lgZoom]}
//     elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10"
// >
//     {visibleImages.map((src, i) => (
//         <a
//             key={i}
//             href={src}
//             className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
//         >
//             <img
//                 src={src}
//                 alt={title}
//                 className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
//             />

//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//             {/* Title Text on hover */}
//             <p className="absolute bottom-4 left-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
//                 View Photo →
//             </p>
//         </a>
//     ))}

//     {/* SEE MORE Button */}
//     {!showMore[sectionKey] && (
//         <div
//             onClick={() => handleSeeMore(sectionKey)}
//             className="flex items-center justify-center h-64 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-xl cursor-pointer transition-all group"
//         >
//             <span className="text-xl font-semibold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition">
//                 See More →
//             </span>
//         </div>
//     )}
// </LightGallery>
//             </section >
//         );
//     };

// return (
//     <section className="bg-gray-50 py-16 md:py-20 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-lg">

//         {/* Main Page Title */}
//         <h1 className="text-5xl font-extrabold text-center mb-14 bg-indigo-900 bg-clip-text text-transparent drop-shadow-lg">
//             Our Event Gallery
//         </h1>

//         <Section
//             title="✨ Wedding Moments"
//             images={weddingImages}
//             sectionKey="wedding"
//         />

//         <Section
//             title="💼 Corporate Events"
//             images={corporateImages}
//             sectionKey="corporate"
//         />
    
//         <Section
//             title="🎭 Cultural Celebrations"
//             images={culturalImages}
//             sectionKey="cultural"
//         />

//     </section>
// );