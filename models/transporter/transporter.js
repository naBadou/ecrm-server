const mongoose = require("mongoose");

const TransporterSchema = mongoose.Schema({
  uid: { type: String },
  created: {
    day: { type: Number },
    month: { type: Number },
    year: { type: Number },
  },
  avatar: { type: String },
  name: {
    first: { type: String },
    last: { type: String },
  },
  nickname: { type: String },
  email: { type: String },

  birthday: {
    day: { type: Number },
    month: { type: Number },
    year: { type: Number },
  },
  address: {
    address: { type: String },
    city: { type: Number, String },
    region: { type: Number, String },
  },
  contracts: { type: Array },
});

module.exports = mongoose.model("Transporter", TransporterSchema);
