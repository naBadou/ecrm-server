const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  // for every account
  phone: { type: String },
  password: { type: String },
  type: { type: String, default: "new" },
  created: {
    y: { type: Number, default: new Date().getFullYear() },
    m: { type: Number, default: new Date().getMonth() },
    d: { type: Number, default: new Date().getDate() },
    hours: { type: Number, default: new Date().getHours() },
    minutes: { type: Number, default: new Date().getMinutes() },
  },

  // if account is manager
  // if account is transporter
});

module.exports = mongoose.model("Account", Schema);
