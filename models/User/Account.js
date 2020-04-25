const { Schema, model } = require("mongoose");

const schema = Schema(
  {
    _id: Schema.Types.ObjectId,
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["manager", "transporter"] },
  },
  { timestamps: true }
);

module.exports = model("Account", schema);
