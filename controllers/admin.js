const _User = require("../models/user");
const _Transporter = require("../models/transporter/transporter");
const _Manager = require("../models/manager/manager");

const mongoose = require("mongoose");

// Fetch all users
exports.users = async function (req, res) {
  const users = await _User.find();
  res.send(users);
};
exports.removeUsers = async function (req, res) {
  const removed = await _User.remove();
  res.send(removed);
};
// Fetch all Transporters
exports.transporters = async function (req, res) {
  const transporters = await _Transporter.find();
  res.send(transporters);
};
exports.removeTransporters = async function (req, res) {
  const removed = await _Transporter.remove();
  res.send(removed);
};
// Fetch all Managers
exports.managers = async function (req, res) {
  const managers = await _Manager.find();
  res.send(managers);
};
exports.removeTManagers = async function (req, res) {
  const removed = await _Manager.remove();
  res.send(removed);
};

// fetsh single user
exports.user = async function (req, res) {
  const paramsID = req.params.uid;
  _User
    .findOne({ uid: paramsID })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => console.log(err));
};
