const _User = require("../models/user");
const _Transporter = require("../models/transporter/transporter");
const _Manager = require("../models/manager/manager");

exports.publicTransporter = async function (req, res) {
  const paramsID = req.params.uid;
  const filter = { uid: paramsID };
  _Transporter
    .findOne(filter)
    .then((transporter) => res.send(transporter))
    .catch((err) => res.send(err));
};
exports.publicManager = async function (req, res) {
  const paramsID = req.params.uid;
  const filter = { uid: paramsID };
  _Manager
    .findOne(filter)
    .then((manager) => res.send(manager))
    .catch((err) => res.send(err));
};
