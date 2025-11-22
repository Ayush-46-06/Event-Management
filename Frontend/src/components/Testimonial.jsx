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
    img: "https://randomuser.me/api/portraits/men/45.jpg",
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
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 m-2 py-16 rounded-lg px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-indigo-900">
          What Our Clients Say About Us 
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-lg rounded-2xl p-6 text-left flex flex-col items-start transition-all duration-300 hover:-translate-y-2">
                <p className="text-gray-700 mb-6 italic">“{t.text}”</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
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
                  <span className="ml-2 text-sm text-gray-600">5/5 Rating</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
