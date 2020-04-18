const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  uid: { type: String },
  created: {
    day: { type: Number },
    month: { type: Number },
    year: { type: Number },
  },
  email: { type: String },
  type: { type: String },
});

// UserSchema.pre("save", function (next) {
//   this._id = this._id.toString();
//   next();
// });

module.exports = mongoose.model("User", UserSchema);
