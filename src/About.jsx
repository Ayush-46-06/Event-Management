import React, { useEffect, useState } from 'react';
import imagePng from './images/aboutUs_bg.png';
import aboutWedding from './images/about-wedding.png';
import aboutCorporate from './images/about-corporate.png';
import aboutExhibition from './images/about-exhibitions.png';
import aboutConcert from './images/about-concert.png';
import { FaUsers } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { IoIosStarOutline } from "react-icons/io";
import { motion } from "framer-motion";
import TeamMember from './components/TeamMember';
import AboutUs from './components/AboutUs';
import Testimonial from './components/testimonial';


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



const About = () => {

    const isMobile = useIsMobile();

    return (
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-lg">
            <section className="w-full bg-cover bg-center bg-no-repeat bg-[url('./images/aboutUs_bg_1.png')] py-20 md:px-32 h-[700px]">
                <div className="mx-full px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                        {/* LEFT TEXT BLOCK */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 flex-1 justify-center py-30">

                            <motion.h1
                                initial={{ opacity: 0, y: -40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-lg"
                            >
                                About Us
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="text-lg md:text-xl text-white font-semibold md:max-w-3xl leading-relaxed drop-shadow"
                            >
                                We don’t just plan events "We craft unforgettable experiences that
                                inspire, connect, and celebrate life. From concept to perfection,
                                every detail is shaped with passion and precision to create moments
                                that spark joy, build memories, and tell stories worth remembering".
                            </motion.p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Achievments */}
            <section className="py-6 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 ">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white font-semibold">
                        {[
                            { icon: <FaUsers className="text-5xl" />, value: "20,000+", label: "Unique Users" },
                            { icon: <GiPartyPopper className="text-5xl" />, value: "10,000+", label: "Annual Events" },
                            { icon: <IoIosStarOutline className="text-5xl" />, value: "20M+", label: "Reviews" },
                            { icon: <LiaNetworkWiredSolid className="text-5xl" />, value: "10M+", label: "Monthly Reach" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                {item.icon}
                                <h2 className="text-3xl">{item.value}</h2>
                                {/* <CountUp
                                    start={0}
                                    end={item.value}
                                    duration={2.5}
                                    separator=","
                                    suffix={item.suffix}
                                    enableScrollSpy
                                    scrollSpyOnce
                                /> */}
                                <p className="text-lg">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AboutUs />
            {/* Our Mission & Our Vision */}
            <section className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 py-16 px-6">
                <div className="container mx-auto px-4 ">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto ">

                        {/* Our Mission */}
                        <div className="w-full md:w-1/2 text-center ">
                            <div className=" rounded-2xl shadow-xl p-10 text-center">
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    className="text-4xl font-bold mb-8 text-indigo-900"
                                >
                                    Our Mission
                                </motion.h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mx-auto mb-8"></div>
                                <div className="space-y-6 text-indigo-800">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                        className="text-lg md:text-xl leading-relaxed"
                                    >
                                        At our company, we believe every occasion is a chance to create unforgettable experiences and
                                        meaningful connections. Our mission is to turn your vision into reality through seamless,
                                        creative, and impactful event management solutions that go beyond expectations.
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                        className="text-lg md:text-xl leading-relaxed"
                                    >
                                        With years of expertise and a proven track record of organizing hundreds of successful events
                                        from corporate conferences and tech summits to cultural festivals and community celebrations,
                                        we bring professionalism, passion, and precision to every project.
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                        className="text-lg md:text-xl leading-relaxed"
                                    >
                                        Our team of dedicated event specialists ensures that every element, from planning to execution,
                                        is handled with care and creativity. At Event, we combine innovation, meticulous attention to
                                        detail, and a commitment to excellence to make your event truly exceptional.
                                    </motion.p>
                                </div>
                            </div>
                        </div>

                        {/* Our Vision */}
                        <div className="w-full md:w-1/2 text-center ">
                            <div className=" rounded-2xl shadow-xl p-10 text-center">
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    className="text-4xl font-bold mb-8 text-indigo-900"
                                >
                                    Our Vision
                                </motion.h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mx-auto mb-8"></div>
                                <div className="space-y-6 text-indigo-800">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                        className="text-lg md:text-xl leading-relaxed"
                                    >
                                        At our company, our vision is to become a leading name in the world of event management by
                                        creating experiences that go beyond expectations. We believe that every event tells a story
                                        one that deserves to be celebrated with creativity, passion, and perfection.
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                        className="text-lg md:text-xl leading-relaxed"
                                    >
                                        We aim to redefine the standards of event management by blending innovative ideas with seamless
                                        execution. Whether it’s an elegant wedding, a high-impact corporate meet, a dynamic exhibition,
                                        or a grand celebrity concert, we focus on delivering excellence in every detail.
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                        className="text-lg md:text-xl leading-relaxed"
                                    >
                                        Driven by dedication and innovation, we continuously evolve with changing trends and technologies
                                        to provide modern, efficient, and memorable event solutions. Our ultimate goal is to build lasting
                                        relationships with our clients by turning their special moments into unforgettable experiences.
                                    </motion.p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Events Section */}

            <section className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 overflow-hidden w-full
">
                <div className="container mx-auto flex flex-col justify-center items-center">
                    <div className='grid grid-cols-1 gap-16 mt-12'>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:px-10 p-18">
                            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center gap-6 flex-1 animate-fade-in-left max-w-3xl mx-auto">
                                <motion.h2 initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
                                    Weddings Events
                                </motion.h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mx-auto mb-8"></div>
                                <motion.p
                                    initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    className="text-lg md:text-xl flex leading-relaxed text-indigo-800 items-center ">
                                    Your dream wedding deserves nothing less than perfection. We design and manage beautiful, stress-free weddings that reflect your unique love story. From intimate gatherings to grand celebrations, our team takes care of every detail — from décor, venue setup, and entertainment to seamless coordination on your special day. With creativity and precision, we transform your vision into a magical celebration that you and your guests will cherish forever.
                                </motion.p>
                            </div>
                            <div className="flex justify-center md:justify-end flex-1 animate-fade-in-right animate-delay-500">
                                <motion.img
                                    src={aboutWedding}
                                    alt="About Us"
                                    initial={{ opacity: 0, x: isMobile ? 0 : 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    className="w-full max-w-xl md:max-w-2xl h-auto object-cover rounded-2xl shadow-lg"
                                />
                            </div>

                        </div>
                        {/* <div className="w-full h-1 mx-auto mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"></div> */}
                        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:px-10 p-18">
                            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center   gap-6 flex-1 animate-fade-in-left max-w-3xl mx-auto">
                                <motion.h2 initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
                                    Corporate Events
                                </motion.h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mx-auto mb-8"></div>
                                <motion.p
                                    initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    className="text-lg md:text-xl flex leading-relaxed text-indigo-800 items-center ">
                                    We bring professionalism and creativity together to deliver flawless corporate experiences.
                                    From conferences and product launches to award ceremonies and annual meets, our team ensures every event reflects your brand’s identity and goals. We manage every detail — from planning, logistics, and stage design to audio-visual setups and guest coordination — creating impactful events that inspire teams and impress clients.
                                </motion.p>
                            </div>
                            <div className="flex justify-center md:justify-end flex-1 animate-fade-in-right animate-delay-500">
                                <motion.img
                                    src={aboutCorporate}
                                    alt="About Us"
                                    initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    className="w-full max-w-xl md:max-w-2xl h-auto object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>
                        {/* <div className="w-full h-1 mx-auto mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"></div> */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:px-10 p-18 ">
                            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center     gap-6 flex-1 animate-fade-in-left max-w-3xl mx-auto">
                                <motion.h2 initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
                                    Exhibition Events
                                </motion.h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mx-auto mb-8"></div>
                                <motion.p
                                    initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    className="text-lg md:text-xl flex leading-relaxed text-indigo-800 items-center ">
                                    We design and manage engaging exhibition experiences that capture attention and build connections.
                                    Our team handles everything from booth design and layout planning to branding and visitor engagement. Whether it’s a trade show, art exhibition, or product showcase, we ensure a professional and visually stunning setup that highlights your brand and attracts your audience effectively.
                                </motion.p>
                            </div>
                            <div className="flex justify-center md:justify-end flex-1 animate-fade-in-right animate-delay-500">
                                <motion.img
                                    src={aboutExhibition}
                                    alt="About Us"
                                    initial={{ opacity: 0, x: isMobile ? 0 : 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    className="w-full max-w-xl md:max-w-2xl h-auto object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>
                        {/* <div className="w-full h-1 mx-auto mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"></div> */}
                        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:px-10 p-18 ">
                            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center   gap-6 flex-1 animate-fade-in-left max-w-3xl mx-auto">
                                <motion.h2 initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
                                    Celebrity Concerts
                                </motion.h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mx-auto mb-8"></div>
                                <motion.p
                                    initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    className="text-lg md:text-xl flex leading-relaxed text-indigo-800 items-center ">
                                    We create high-energy entertainment experiences that audiences will never forget.
                                    From stage setup and artist management to crowd coordination and technical arrangements, we handle every aspect of celebrity concerts with precision. Our team ensures a seamless and safe experience for both performers and audiences, delivering spectacular live shows that leave lasting impressions.
                                </motion.p>
                            </div>
                            <div className="flex justify-center md:justify-end flex-1 animate-fade-in-right animate-delay-500">
                                <motion.img
                                    src={aboutConcert}
                                    alt="About Us"
                                    initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    className="w-full max-w-xl md:max-w-2xl h-auto object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>
                        {/* <div className="w-full h-1 mx-auto mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"></div> */}
                    </div>

                </div>
            </section >
            <TeamMember />
            <Testimonial />
        </div >
    );
};

export default About;