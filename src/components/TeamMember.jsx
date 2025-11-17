import React from 'react'
import { motion } from "framer-motion";

const team = [
    {
        name: "John Smith",
        role: "CEO & Founder",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        description:
            "With over 15 years of experience in event management, John leads our team with passion and vision.",
    },
    {
        name: "Sarah Johnson",
        role: "Event Director",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        description:
            "Sarah brings creativity and precision to every event, ensuring flawless execution from planning to completion.",
    },
    {
        name: "Michael Chen",
        role: "Technical Lead",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        description:
            "Michael ensures our digital platforms run smoothly, providing seamless experiences for event organizers and attendees.",
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Manager",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        description:
            "Emily drives our marketing strategy, helping events reach their target audience and maximize engagement.",
    },
    {
        name: "David Kim",
        role: "Operations Manager",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        description:
            "David oversees day-to-day operations, ensuring everything runs smoothly and efficiently.",
    },
    {
        name: "Lisa Anderson",
        role: "Customer Success",
        image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        description:
            "Lisa ensures our clients receive exceptional support and their events exceed expectations.",
    },
];

const TeamMember = () => {
    return (
        <section className="py-16 bg-gray-50 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 p-6 rounded-lg ">
            <div className="container max-w-7xl px-4 mx-auto">
                <motion.h2 initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="text-4xl font-bold mb-12 text-center text-indigo-900">
                    Our Team
                </motion.h2>
                <div className="grid sm:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="p-6 text-center">
                                <motion.h3 initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    className="text-xl font-bold text-gray-800 text-indigo-900">
                                    {member.name}
                                </motion.h3>
                                <motion.p initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }} className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{member.role}</motion.p>
                            </div>
                            <motion.p initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                className="pb-6 px-4 text-center text-indigo-800">{member.description}</motion.p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamMember