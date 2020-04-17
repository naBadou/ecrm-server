const _User = require("../models/user");

// Fetch all users
exports.users = async function (req, res) {
  const users = await _User.find();
  res.send(users);
};
