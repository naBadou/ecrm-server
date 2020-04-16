const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  username: { type: String },
  product: { type: String },
  price: { type: String },
  customer: { type: String },
  start: { type: String },
  end: { type: String },
  orders: { type: Array },
  created: { type: String },
});

module.exports = mongoose.model("Order", OrderSchema);
