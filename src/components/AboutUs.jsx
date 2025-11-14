import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import conferenceImg from '../images/conferenceImg.jpg';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return isMobile;
};


const AboutUs = () => {

    const isMobile = useIsMobile();

    return (
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 px-4 py-16 flex justify-center">
            <div className="max-w-7xl w-full flex flex-col items-center">

                {/* Section Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: isMobile ? 0 : -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6 text-center"
                >
                    What We Do
                </motion.h1>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mx-auto mb-8"></div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="max-w-3xl text-center text-lg text-indigo-800 mb-16 px-4"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae optio quos labore non sapiente officiis nihil perferendis. Fuga deserunt tempora hic architecto quo dolor quia voluptas.
                </motion.p>

                {/* Image + Text Side by Side */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full px-4">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: isMobile ? 0 : -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full md:w-1/2 flex justify-center"
                    >
                        {/* Decorative soft circles */}
                        <div className="absolute -left-6 -top-10 w-40 h-40 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>
                        <div className="absolute -right-4 -bottom-6 w-52 h-36 bg-purple-200 rounded-full opacity-50 blur-xl"></div>

                        {/* Main Image */}
                        <img
                            src={conferenceImg}
                            alt="Conference"
                            className="rounded-2xl shadow-xl w-full max-w-md z-10 transition-transform duration-700 hover:scale-105"
                        />

                        {/* Floating cards */}
                        <motion.div
                            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            className="absolute left-4 bottom-6 bg-white rounded-xl shadow-lg px-5 py-3 z-20 hidden sm:block"
                        >
                            <div className="font-semibold text-sm text-gray-700 mb-1">Theme</div>
                            <div className="flex gap-2">
                                <div className="w-5 h-5 bg-green-600 rounded"></div>
                                <div className="w-5 h-5 bg-purple-800 rounded"></div>
                                <div className="w-5 h-5 bg-white border border-gray-400"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: isMobile ? 0 : -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                            className="absolute right-4 top-6 bg-white rounded-xl shadow-lg px-5 py-3 z-20 hidden sm:block"
                        >
                            <div className="font-semibold text-sm text-gray-700 mb-1">Website</div>
                            <p className="text-xs text-gray-500">Event Info, Product Info</p>
                        </motion.div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: isMobile ? 0 : 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full md:w-1/2 text-center md:text-left space-y-6 px-2"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900">
                            We help event planners and marketers bring their events to life
                        </h2>

                        <p className="text-md text-indigo-800 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                            quidem. Voluptatum quos quae voluptatem quibusdam voluptates quas officiis.
                        </p>

                        <p className="text-md text-indigo-800 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugiat totam ab
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
                            >
                                Plan an Event →
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
