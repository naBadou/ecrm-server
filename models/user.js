const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: { type: String },
  passowrd: { type: String },
  fireID: { type: String },
  type: { type: String },
  activity: { type: Number },
  contracts: { type: Array },
  created: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
