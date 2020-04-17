const _User = require("../models/user");
const mongoose = require("mongoose");

// After getting response from firebase, we should register user into our db
exports.register = async function (req, res) {
  const User = new _User({
    _id: new mongoose.Types.ObjectId(),
    fireID: req.body.fireID,
    email: req.body.email,
    password: req.body.password,
  });
  User.save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        error: err,
      });
    });
};

// After registering user is logged, and now he should pick a type
exports.pickType = async function (req, res) {
  _User
    .findOneAndUpdate({ fireID: req.body.fireID }, { type: req.body.type })
    .then(res.send("success"))
    .catch((err) => console.log(err));
};

// fetch a user having fire base id
exports.user = async function (req, res) {
  _User
    .findOne({ fireID: req.params.fireID })
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
};
