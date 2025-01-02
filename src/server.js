const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const bookingRoutes = require("./routes/bookingRoutes");
const { connectToDatabase } = require("./models/db");
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using the external module
connectToDatabase();

// Use booking routes
app.use("/api/bookings", bookingRoutes);
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(config.port, () =>
  console.log(`Server running on port http://localhost:${config.port}`)
);
