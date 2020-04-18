const mongoose = require("mongoose");

const ManagerSchema = mongoose.Schema({
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
    city: { type: String },
    region: { type: String },
  },
  contracts: { type: Array },
});

module.exports = mongoose.model("Manager", ManagerSchema);
