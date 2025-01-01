const mongoose = require("mongoose");
const { Router } = require("express");

const router = Router();

const bookingSchema = new mongoose.Schema(
  {
    date: String,
    time: String,
    guests: Number,
    name: String,
    contact: String,
  },
  { timestamps: true }
); // Enable timestamps

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
