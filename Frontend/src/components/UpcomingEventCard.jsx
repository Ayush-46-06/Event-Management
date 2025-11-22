import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UpcomingEventCard = ({ image, name, date, time, venue, targetDate, link }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-[350px] hover:scale-105 transition duration-300">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover pt-4 rounded-lg" />

        {/* Countdown Timer Overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white rounded-xl px-6 py-3 flex justify-between items-center gap-4 backdrop-blur-md shadow-md">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">{timeLeft.days}</p>
            <span className="text-sm text-gray-300">Days</span>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">{timeLeft.hours}</p>
            <span className="text-sm text-gray-300">Hours</span>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">{timeLeft.minutes}</p>
            <span className="text-sm text-gray-300">Minutes</span>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">{timeLeft.seconds}</p>
            <span className="text-sm text-gray-300">Sec</span>
          </div>
        </div>
      </div>

      {/* Event Info */}
      <div className="p-5 text-center relative h-55">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">📅 {date}</span> • 🕒 {time}
        </p>
        <p className="text-gray-700 mt-2">📍 {venue}</p>
        <Link 
        to={link}
        className=" absolute bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        ><button>Know More</button></Link>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
