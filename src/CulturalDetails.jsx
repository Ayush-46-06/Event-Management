import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const CulturalDetails = () => {
  const location = useLocation();
  const event = location.state;

  return (
    <div className="bg-linear-to-r from-purple-100 via-blue-100 to-pink-100">
      <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            {event.title}
          </h1>
          <p className="mt-2 text-lg md:text-xl font-bold">{event.location}</p>
          <p className="mt-2 text-lg md:text-xl font-semibold">{event.date}</p>
        </div>
      </section>
      {/* about event */}
      <section className="flex justify-center">
        <div className="px-8 py-4 max-w-[1050px]">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
            About The Event
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            dolorem maxime sint iure libero. Fuga, voluptate blanditiis soluta
            quisquam error eaque voluptatum! Impedit animi quisquam nemo
            officiis distinctio labore doloremque ullam maiores! Amet ipsum
            voluptate iste odio minus provident est nisi consequatur vero dicta!
            Sint impedit molestiae iste, quos, repudiandae quo quod tempore
            alias, unde vero magnam. Tenetur officia alias ex ullam ab nulla
            reprehenderit voluptas, amet veniam dolor enim expedita, culpa
            sapiente voluptatibus nobis, aperiam iste blanditiis ducimus?
          </p>
        </div>
      </section>
      {/* schedule and speakers */}
      <section className="flex justify-center">
        <div className="mt-6 px-8 py-4 flex flex-wrap justify-center lg:justify-between gap-4 max-w-[1050px] w-full">
          <div className="w-full max-w-[400px] h-full flex flex-col max-h-[440px]">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
              Schedule
            </h2>
            <p className="font-semibold text-gray-500">{event.date}</p>
            <motion.div
              initial={{ opacity: 0, y: 60, x: -60 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="pl-8 border-l-2 border-gray-500 bg-white rounded-lg shadow-lg grow"
            >
              <div className="flex flex-col p-2 relative before:content-[''] before:absolute before:-left-10 before:top-1/3 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-purple-500 before:rounded-full before:shadow-[0_0_8px_3px_rgba(168,85,247,0.6)]">
                <span className="text-gray-500">4:30 -5:30 PM</span>
                <span className="font-semibold">Entry & Welcome</span>
              </div>
              <div className="flex flex-col p-2 relative before:content-[''] before:absolute before:-left-10 before:top-1/3 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-purple-500 before:rounded-full before:shadow-[0_0_8px_3px_rgba(168,85,247,0.6)]">
                <span className="text-gray-500">5:30 - 7:00 PM</span>
                <span className="font-semibold">
                  Lorem ipsum dolor sit amet.
                </span>
                <span className="text-gray-500 font-semibold">
                  By speaker 1
                </span>
              </div>
              <div className="flex flex-col p-2 relative before:content-[''] before:absolute before:-left-10 before:top-1/3 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-purple-500 before:rounded-full before:shadow-[0_0_8px_3px_rgba(168,85,247,0.6)]">
                <span className="text-gray-500">7:00 - 9:30 PM</span>
                <span className="font-semibold">
                  Lorem ipsum dolor sit amet.
                </span>
                <span className="text-gray-500 font-semibold">
                  By speaker 2
                </span>
              </div>
              <div className="flex flex-col p-2 relative before:content-[''] before:absolute before:-left-10 before:top-1/3 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-purple-500 before:rounded-full before:shadow-[0_0_8px_3px_rgba(168,85,247,0.6)]">
                <span className="text-gray-500">9:30 - 10:00</span>
                <span className="font-semibold">Final Performace</span>
                <span className="text-gray-500 font-semibold">
                  By speaker 3
                </span>
              </div>
            </motion.div>
          </div>
          <div className="w-full max-w-[500px]">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
              Speakers
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 60, x: 60 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-2 max-w-[500px] p-4"
            >
              {/* speaker 1 */}
              <div className="flex items-center p-3 mb-4 bg-white rounded-xl">
                <div className="flex items-center w-20 h-20 rounded-full overflow-hidden cursor-pointer">
                  <img
                    className="w-full object-cover"
                    src="/images/speaker.webp"
                    alt=""
                  />
                </div>
                <div className="flex flex-col pl-4">
                  <span className="font-bold md:text-lg">Speaker's Name</span>
                  <span className="text-purple-600 font-semibold">
                    Role: Lorem, ipsum dolor.
                  </span>
                  <span className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </div>
              </div>
              {/* speaker 2 */}
              <div className="flex items-center p-3 my-4 bg-white rounded-xl">
                <div className="flex items-center w-20 h-20 rounded-full overflow-hidden cursor-pointer">
                  <img
                    className="w-full object-cover"
                    src="/images/speaker.webp"
                    alt=""
                  />
                </div>
                <div className="flex flex-col pl-4">
                  <span className="font-bold md:text-lg">Speaker's Name</span>
                  <span className="text-purple-600 font-semibold">
                    Role: Lorem, ipsum dolor.
                  </span>
                  <span className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </div>
              </div>
              {/* speaker 3 */}
              <div className="flex items-center p-3 mt-4 bg-white rounded-xl">
                <div className="flex items-center w-20 h-20 rounded-full overflow-hidden cursor-pointer">
                  <img
                    className="w-full object-cover"
                    src="/images/speaker.webp"
                    alt=""
                  />
                </div>
                <div className="flex flex-col pl-4">
                  <span className="font-bold md:text-lg">Speaker's Name</span>
                  <span className="text-purple-600 font-semibold">
                    Role: Lorem, ipsum dolor.
                  </span>
                  <span className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* map and location */}
      <section className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full h-[350px] md:h-[450px] overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.1016389283036!2d76.77563887548958!3d28.325525675833763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d41000fe8670d%3A0x7b0a08f0043a22af!2sGraphura%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1763132796048!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
      {/* booking */}
      <section className="px-8 py-4 mt-10 pb-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-[1050px] w-full bg-white shadow-lg flex flex-col items-center p-4 rounded-lg"
        >
          <h2 className="text-xl font-bold md:text-2xl">Book Your Ticket</h2>
          <span className="text-center text-gray-500 font-semibold">
            Book your tickets now and be part of an unforgettable experience!
          </span>
          <button className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 duration-300 transition-all text-white font-semibold py-2 px-4 my-4 rounded-lg cursor-pointer shadow-lg">
            Book Now
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default CulturalDetails;
