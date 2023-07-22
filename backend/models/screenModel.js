const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
  screenId: {
    type: Number,
    required: true,
  },
  movieName: {
    type: String,
    required: true,
  },
  showTime: {
    type: Date,
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  bookedSeats: {
    type: [Number],
    required: true,
  },
});

module.exports = mongoose.model("Screen", screenSchema, "screens");