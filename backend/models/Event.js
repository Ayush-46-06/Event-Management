import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, 
  date: { type: Date, required: true },   
  attendees: { type: Number, default: 0 },
  status: { type: String, default: "Scheduled" },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
