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

  if (req.body.type === "transporter") {
    _User
      .findOneAndUpdate(filter, update, options)
      .then((docs) => {
        const EMAIL = docs.email;
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
            res.send({
              account: docs,
              user: data,
            });
          })
          .catch((err) => {
            res.send({ error: true, message: err });
          });
      })
      .catch((err) => console.log(err)(err));
  }
  if (req.body.type === "manager") {
    _User
      .findOneAndUpdate(filter, update, options)
      .then((docs) => {
        const EMAIL = docs.email;
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
            res.send({
              account: docs,
              user: data,
            });
          })
          .catch((err) => {
            res.send({ error: true, message: err });
          });
      })
      .catch((err) => console.log(err)(err));
  }
};

// fetch a user having fire base id
exports.user = async function (req, res) {
  const ID = req.params.uid;
  _User
    .findOne({ uid: ID })
    .then((user) => {
      if (user) {
        res.send(user);
      } else {
        res.send({ error: true });
      }
    })
    .catch((err) => console.log(err));
};
