const mongoose = require("mongoose");

const TransporterSchema = mongoose.Schema({
  username: { type: String },
  fireID: { type: String },
  activity: { type: Number },
  contracts: { type: Array },
  created: { type: String },
});

module.exports = mongoose.model("Transporter", TransporterSchema);
