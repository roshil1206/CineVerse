const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inquirySchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  groupName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  eventType: { type: String, required: true },
  groupType: { type: String, required: true },
  theatreProvince: { type: String, required: true },
  theatreCity: { type: String, required: true },
  preferredTheatre: { type: String, required: true },
  preferredDate: { type: Date, required: true },
  alternateDate: { type: Date },
  startTime: { type: String, required: true },
  numGuests: { type: Number, required: true },
  howHeard: { type: String, required: true },
  otherHowHeard: { type: String },
  eventDetails: { type: String },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;
