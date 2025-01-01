const mongoose = require("mongoose");
const config = require("../config");
const Booking = require("./Booking");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

const db = {
  Booking: Booking,
};

module.exports = { connectToDatabase, db };
