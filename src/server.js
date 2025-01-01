const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const bookingRoutes = require("./routes/bookingRoutes");
const { connectToDatabase } = require("./models/db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using the external module
connectToDatabase();

// Use booking routes
app.use("/api/bookings", bookingRoutes);
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

// Start the server
app.listen(config.port, () =>
  console.log(`Server running on port http://localhost:${config.port}`)
);
