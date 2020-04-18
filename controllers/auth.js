const _User = require("../models/user");
const _Manager = require("../models/manager/manager");
const _Transporter = require("../models/transporter/transporter");

// After getting response from firebase, we should register user into our db
exports.register = async function (req, res) {
  const User = new _User({
    uid: req.body.uid,
    email: req.body.email,
    created: {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    },
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

exports.pickType = function (req, res) {
  const filter = { uid: req.body.uid };
  const update = { $set: { type: req.body.type } };
  const options = { new: true };
  _User
    .findOneAndUpdate(filter, update, options)
    .then((docs) => {
      console.log(docs.email);
      const EMAIL = docs.email;
      if (docs.type === "transporter") {
        const Transporter = new _Transporter({
          uid: req.body.uid,
          email: EMAIL,
          created: {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
          },
        });
        Transporter.save()
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((err) => {
            res.status(500).send({
              error: err,
            });
          });
      }
      if (docs.type === "manager") {
        const Manager = new _Manager({
          uid: req.body.uid,
          email: EMAIL,
          created: {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
          },
        });
        Manager.save()
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((err) => {
            res.status(500).send({
              error: err,
            });
          });
      } else {
        res.send("error");
      }
    })
    .catch((err) => console.log(err)(err));
};

// fetch a user having fire base id
exports.user = async function (req, res) {
  _User
    .findOne({ _id: req.params.id })
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
};
