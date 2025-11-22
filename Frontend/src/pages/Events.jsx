import React, { useState, useEffect } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [form, setForm] = useState({
    name: "",
    type: "Corporate",
    date: "",
    attendees: "",
    status: "Upcoming",
  });

  const [editId, setEditId] = useState(null);

  // Fetch all events
  const fetchEvents = async () => {
    const res = await axios.get("http://localhost:5000/api/events/all");
    setEvents(res.data.events);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Input change handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add Event
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/events/add", form);

    if (res.data.success) {
      setOpenModal(false);
      fetchEvents();
    }
  };

  // Edit Event – open modal with data
  const openEditModal = (event) => {
    setIsEdit(true);
    setEditId(event._id);
    setForm({
      name: event.name,
      type: event.type,
      date: event.date,
      attendees: event.attendees,
      status: event.status,
    });
    setOpenModal(true);
  };

  // Update Event
  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `http://localhost:5000/api/events/update/${editId}`,
      form
    );

    if (res.data.success) {
      setOpenModal(false);
      setIsEdit(false);
      fetchEvents();
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Upcoming": return "bg-blue-100 text-blue-800";
      case "Ongoing": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Corporate": return "bg-blue-500 text-white";
      case "Wedding": return "bg-pink-500 text-white";
      case "Cultural": return "bg-purple-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">All Events</h2>

          <button
            onClick={() => {
              setIsEdit(false);
              setForm({
                name: "",
                type: "Corporate",
                date: "",
                attendees: "",
                status: "Upcoming",
              });
              setOpenModal(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add New Event
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-gray-600">Event Name</th>
                <th className="py-3 px-4 text-gray-600">Type</th>
                <th className="py-3 px-4 text-gray-600">Date</th>
                <th className="py-3 px-4 text-gray-600">Attendees</th>
                <th className="py-3 px-4 text-gray-600">Status</th>
                <th className="py-3 px-4 text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">{event.name}</td>

                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </td>

                  <td className="py-4 px-4">{event.date}</td>
                  <td className="py-4 px-4">{event.attendees}</td>

                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </td>

                  <td
                    onClick={() => openEditModal(event)}
                    className="py-4 px-4 text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    Edit
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
  <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-transparent">
    <div className="bg-white p-6 rounded-xl shadow-2xl w-96 border border-gray-200">

      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit Event" : "Add New Event"}
      </h2>

      <form onSubmit={isEdit ? handleUpdate : handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Event Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <select
          name="type"
          value={form.type}
          className="w-full border p-2 rounded"
          onChange={handleChange}
        >
          <option value="Corporate">Corporate</option>
          <option value="Wedding">Wedding</option>
          <option value="Cultural">Cultural</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="number"
          name="attendees"
          value={form.attendees}
          placeholder="Attendees"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          className="w-full border p-2 rounded"
          onChange={handleChange}
        >
          <option value="Upcoming">Upcoming</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
        </select>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setOpenModal(false)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {isEdit ? "Update Event" : "Add Event"}
          </button>
        </div>

      </form>
    </div>
  </div>
)}
    </div>
  );
};

export default Events;
