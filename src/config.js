const dotenv = require("dotenv");

// Load environment variables from a .env file
dotenv.config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT || 5000,
};