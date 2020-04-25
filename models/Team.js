const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = Schema({
  name: { type: String },
  avatar: { type: String },
  created,
  leader: { type: Schema.Types.ObjectId, ref: "Manager" },
  members: [
    {
      id: { type: Schema.Types.ObjectId },
      type: { type: String },
      status: { type: String },
    },
  ],
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

module.exports = mongoose.model("Team", schema);

// TODO : Define uniques

// { type: String }
