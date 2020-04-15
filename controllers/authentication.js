const _Manager = require("../models/manager");
const _Transporter = require("../models/transporter");

// Fetch all users
exports.managers = async function (req, res) {
  const managers = await _Manager.find();
  res.send(managers);
};
exports.transporters = async function (req, res) {
  const transporters = await _Transporter.find();
  res.send(transporters);
};

// Insert a new user

exports.newManager = async function (req, res) {
  const User = new Shift({
    username: req.body.username,
    fireID: req.body.fireID,
    activity: req.body.activity,
    contracts: req.body.contracts,
    created: new Date(),
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
exports.newTransporter = async function (req, res) {
  const User = new Shift({
    username: req.body.username,
    fireID: req.body.fireID,
    activity: req.body.activity,
    contracts: req.body.contracts,
    created: new Date(),
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
