const { db } = require("../models/db");

exports.createBooking = async (req, res) => {
  try {
    console.log(req.body);
    const { date, time, guests, name, contact } = req.body;
    const reqData = {
      date,
      time,
      guests,
      name,
      contact,
    };
    console.log("name = ", name);
    const newBooking = db.Booking(reqData);
    await newBooking.save();
    return res
      .status(201)
      .json({ message: "Booking created successfully", booking: newBooking });
  } catch (err) {
    return res.status(500).json({ error: "Failed to create booking" });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (!deletedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete booking" });
  }
};
