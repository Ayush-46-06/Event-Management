import mongoose from "mongoose";

const eventdataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    date2: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    schedule: { type: [String] },
    speakers: [
      {
        name: { type: String, required: true },
        role: { type: String, required: true },
        bio: { type: String },
        photo: { type: String },
      },
    ],
    price: { type: Number },
    seats: { type: Number },
    attendees: { type: Number },
    category: { type: [String] },
    paid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const EventData = mongoose.model("EventData", eventdataSchema);
export default EventData;
