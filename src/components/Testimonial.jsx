import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Stella Smith",
        role: "Eventor Live Max",
        text: "Thank you for running the event so smoothly – I had a great time, not only presenting, but also watching other sessions and interacting with attendees.",
        img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        name: "Stella Smith",
        role: "Eventor Live Max",
        text: "Thank you for running the event so smoothly – I had a great time, not only presenting, but also watching other sessions and interacting with attendees.",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "Stella Smith",
        role: "Eventor Live Max",
        text: "Thank you for running the event so smoothly – I had a great time, not only presenting, but also watching other sessions and interacting with attendees.",
        img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        name: "Stella Smith",
        role: "Eventor Live Max",
        text: "Thank you for running the event so smoothly – I had a great time, not only presenting, but also watching other sessions and interacting with attendees.",
        img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
];

const Testimonial = () => {
    return (
        <section className="relative bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 py-20 px-6 rounded-lg">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-indigo-900 tracking-wide">
                    What Our Clients Say About Us
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mx-auto mb-8"></div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 backdrop-blur-lg shadow-lg rounded-2xl p-6 
                border border-white/40 text-left flex flex-col items-start 
                hover:-translate-y-2 transition-all duration-300">

                                <p className="text-indigo-800 mb-6 italic text-sm">
                                    “{t.text}”
                                </p>

                                <div className="flex items-center gap-4 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100">
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover shadow-md"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 text-lg">
                                            {t.name}
                                        </h4>
                                        <p className="text-sm text-indigo-700">{t.role}</p>
                                    </div>
                                </div>

                                {/* Ratings */}
                                <div className="mt-4 flex items-center text-yellow-400">
                                    {Array(5)
                                        .fill(0)
                                        .map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5"
                                            >
                                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.416 8.253L12 18.896l-7.416 4.627L6 15.27 0 9.423l8.332-1.268z" />
                                            </svg>
                                        ))}
                                    <span className="ml-2 text-sm text-indigo-800">
                                        5/5 Rating
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
