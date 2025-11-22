import React from "react";
import { motion } from "framer-motion";

const Speakers = [
  {
    name: "Aarohi Verma",
    role: "Head of Human Resources",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    desc: "Aarohi drives people-first culture and ensures smooth team collaboration across all departments.",
  },
  {
    name: "Rohit Sharma",
    role: "Co-Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    desc: "Rohit is the visionary behind our event series, blending innovation and leadership to inspire creative excellence.",
  },
  {
    name: "Vikas Mehta",
    role: "Creative Director",
    img: "https://randomuser.me/api/portraits/men/24.jpg",
    desc: "Vikas leads the design and branding aspects of our events, ensuring each theme stands out with artistic impact.",
  },
  {
    name: "Sonia Patel",
    role: "Head of Operations",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    desc: "Sonia manages event logistics, making sure every experience runs seamlessly from start to finish.",
  },
];

const Speaker = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 m-2 rounded-lg py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4 flex items-center justify-center gap-2">
          <span className="text-indigo-600">🎙️</span> Meet Our Speakers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover the passionate leaders, creators, and innovators who make this event an unforgettable experience.
        </p>
      </motion.div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {Speakers.map((speaker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group bg-white shadow-xl rounded-2xl overflow-hidden border border-transparent hover:border-indigo-400 hover:shadow-2xl transform transition-all duration-300"
          >
            <div className="relative">
              <img
                src={speaker.img}
                alt={speaker.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-opacity-10 group-hover:bg-opacity-30 transition duration-300"></div>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                {speaker.name}
              </h3>
              <p className="text-indigo-600 font-medium mb-2">{speaker.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {speaker.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Speaker;
