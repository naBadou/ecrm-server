const _User = require("../models/user");

// Fetch all users
exports.users = async function (req, res) {
  const users = await _User.find();
  res.send(users);
};

// Insert a user 1 (while creating firebase)
exports.newUser = async function (req, res) {
  const User = new _User({
    email: req.body.email,
    password: req.body.password,
    fireID: req.body.fireID,
    type: req.body.type,
    activity: req.body.activity,
    contracts: req.body.contracts,
  });
  User.save()
    .then((data) =>
      res.send({
        success: true,
        data: data,
      })
    )
    .catch((err) => console.log(err));
};
exports.patchUser = async function (req, res) {
  _User
    .updateOne(
      { fireID: req.body.fireID },
      {
        type: req.body.type,
        activity: req.body.activity,
        contracts: req.body.contracts,
      }
    )
    .then((data) =>
      res.send({
        success: true,
        data: data,
      })
    )
    .catch((err) => console.log(err));
};
