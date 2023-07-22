const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  showtimes: {
    type: [String],
    required: true,
  },
});

// Define the Theatre schema
const theatreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  movies: {
    type: [movieSchema],
    default: [],
    required: false,
  },
});

// Create the Theatre model
module.exports = mongoose.model("Theatre", theatreSchema);
