import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ import framer-motion
import UpcomingEventCard from "../components/UpcomingEventCard";

import eventPoster1 from "/images/hero2.jpg";
import eventPoster2 from "/images/hero3.jpg";
import eventPoster3 from "/images/hero2.jpg";


const UpcomingEvent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 text-indigo-900 rounded-lg m-2 flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-12 text-center"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Upcoming Events
      </motion.h1>

      {/* Cards Container */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 text-indigo-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25, // delay between each card
            },
          },
        }}
      >
        {[ 
          {
            image: eventPoster1,
            name: "Tech Innovators 2025",
            date: "25 December 2025",
            time: "10:00 AM - 5:00 PM",
            venue: "Auditorium, Code Catalyst Campus",
            targetDate: "2025-12-25T10:00:00",
            link: "/event1",
          },
          {
            image: eventPoster2,
            name: "AI & Robotics Expo",
            date: "10 January 2026",
            time: "9:00 AM - 4:00 PM",
            venue: "Main Hall, Innovation Hub",
            targetDate: "2026-01-10T09:00:00",
            link: "/event2",
          },
          {
            image: eventPoster3,
            name: "Tech Fest 2025",
            date: "15 February 2026",
            time: "11:00 AM - 6:00 PM",
            venue: "Innovation Hall, Code Catalyst Campus",
            targetDate: "2026-02-15T11:00:00",
            link: "/event3",
          },
        ].map((event, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <UpcomingEventCard {...event} />
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link
          to="/events"
          className="inline-block mt-20 bg-gradient-to-r from-blue-500 to-purple-600 
                     hover:from-blue-700 hover:to-purple-700 text-white px-12 py-5 
                     rounded-2xl font-black text-xl shadow-2xl transform hover:scale-105 
                     transition-all duration-300"
        >
          View all events →
        </Link>
      </motion.div>
    </div>
  );
};

export default UpcomingEvent;
