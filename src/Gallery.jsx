import React from 'react'
import { motion } from "framer-motion";


const Gallery = () => {
    [
        {
            name: "John Smith",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            description:
                "With over 15 years of experience in event management, John leads our team with passion and vision.",
        },
        {
            name: "Sarah Johnson",
            role: "Event Director",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            description:
                "Sarah brings creativity and precision to every event, ensuring flawless execution from planning to completion.",
        },
        {
            name: "Michael Chen",
            role: "Technical Lead",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
            description:
                "Michael ensures our digital platforms run smoothly, providing seamless experiences for both organizers and attendees.",
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Manager",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            description:
                "Emily drives our marketing strategy, helping events reach wider audiences and maximize engagement.",
        },
        {
            name: "David Kim",
            role: "Operations Manager",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            description:
                "David oversees day-to-day operations, ensuring flawless coordination and smooth execution.",
        },
        {
            name: "Lisa Anderson",
            role: "Customer Success",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
            description:
                "Lisa provides exceptional client support, ensuring every event exceeds expectations.",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-lg flex justify-center">
            <div className="max-w-7xl mx-auto px-6 flex items-center">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="text-4xl md:text-5xl font-bold text-center text-indigo-900 mb-12"
                >
                    Events Gallery
                </motion.h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mx-auto mb-8"></div>

                <motion.p className='max-w-3xl text-center text-lg text-indigo-800 mb-16 px-4 flex justify-center'>
                    Our gallery showcases the unforgettable moments we’ve created across weddings, corporate events, concerts, exhibitions, and more. Every picture reflects our passion for creativity, detail, and flawless execution.
                </motion.p>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-lg backdrop-blur-lg rounded shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center"
                        >
                            {/* Image */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-40 h-40 rounded-full object-cover shadow-md mb-4 transition-transform duration-700 hover:scale-105"
                            />

                            {/* Name */}
                            <h3 className="text-xl font-bold text-indigo-900 mb-1">
                                {member.name}
                            </h3>

                            {/* Role */}
                            <p className="text-md font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
                                {member.role}
                            </p>

                            {/* Description */}
                            <p className="text-indigo-800 text-sm leading-relaxed">
                                {member.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
