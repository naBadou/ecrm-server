const mongoose = require("mongoose");

const ContractSchema = mongoose.Schema({
  username: { type: String },
  manager: { type: String },
  transporter: { type: String },
  status: { type: String },
  start: { type: String },
  end: { type: String },
  orders: { type: Array },
  created: { type: String },
});

module.exports = mongoose.model("Contract", ContractSchema);
