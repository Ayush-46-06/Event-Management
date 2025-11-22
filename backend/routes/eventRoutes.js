import express from "express";
import Event from "../models/Event.js";

const router = express.Router();


router.get("/all", async (req, res) => {
  try {
    const events = await Event.find();
    res.json({ success: true, events });
  } catch (err) {
    res.json({ success: false, message: "Error fetching events" });
  }
});


router.post("/add", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();

    res.json({
      success: true,
      message: "Event added successfully",
      event: newEvent,
    });
  } catch (err) {
    res.json({ success: false, message: "Error adding event" });
  }
});


router.put("/update/:id", async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.json({ success: false, message: "Event not found" });
    }

    res.json({ success: true, event: updated });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Server Error" });
  }
});

export default router;
