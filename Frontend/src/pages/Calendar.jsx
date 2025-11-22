import React, { useState, useEffect } from "react";
import axios from "axios";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [allEvents, setAllEvents] = useState([]);  // store all events from DB
  const [eventsData, setEventsData] = useState({}); // store only events for selected month

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const typeColors = {
    Corporate: "bg-blue-500",
    Wedding: "bg-pink-500",
    Cultural: "bg-purple-500",
  };

  // Fetch all events ONCE
  useEffect(() => {
    axios.get("http://localhost:5000/api/events/all")
      .then(res => {
        if (res.data.success) {
          setAllEvents(res.data.events);
        }
      })
      .catch(err => console.log(err));
  }, []);

  // Filter events whenever current month changes OR event list loads
  useEffect(() => {
    filterEventsForMonth();
  }, [currentDate, allEvents]);

  const filterEventsForMonth = () => {
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const result = {};

    allEvents.forEach(event => {
      const eventDate = new Date(event.date);

      const eventMonth = eventDate.getMonth() + 1;
      const eventYear = eventDate.getFullYear();
      const day = eventDate.getDate();

      // ADD event if it belongs to selected month
      if (eventMonth === month && eventYear === year) {
        if (!result[day]) result[day] = [];
        result[day].push({
          name: event.name,
          type: event.type,
          color: typeColors[event.type] || "bg-gray-500",
        });
      }
    });

    setEventsData(result);
  };

  // Generate calendar days
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);

    return days;
  };

  const days = getDaysInMonth(currentDate);
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={goToPreviousMonth}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            ← Previous
          </button>

          <h2 className="text-2xl font-semibold text-gray-800">
            {monthNames[month]} {year}
          </h2>

          <button
            onClick={goToNextMonth}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            Next →
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center font-semibold text-gray-600 py-2">
              {day}
            </div>
          ))}

          {days.map((day, index) => (
            <div
              key={index}
              className="min-h-24 border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition"
            >
              {day && (
                <>
                  <div className="text-gray-800 font-semibold mb-1">{day}</div>

                  {eventsData[day] &&
                    eventsData[day].map((event, i) => (
                      <div
                        key={i}
                        className={`${event.color} text-white text-xs p-1 rounded mb-1 truncate`}
                      >
                        {event.name}
                      </div>
                    ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Events This Month
        </h2>

        <div className="space-y-3">
          {Object.entries(eventsData).length === 0 && (
            <p className="text-gray-500">No events this month.</p>
          )}

          {Object.entries(eventsData).map(([day, eventList]) =>
            eventList.map((event, i) => (
              <div
                key={`${day}-${i}`}
                className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className={`w-3 h-3 rounded-full ${event.color}`}></div>

                <div className="flex-1">
                  <p className="font-medium text-gray-800">{event.name}</p>
                  <p className="text-sm text-gray-500">
                    {monthNames[month]} {day}, {year}
                  </p>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs text-white ${event.color}`}>
                  {event.type}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
