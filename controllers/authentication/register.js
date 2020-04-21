const _ACCOUNT = require("../../models/Account");
var jwt = require("jsonwebtoken");

exports.register = async function (req, res) {
  // TODO crypt password

  const data = {
    phone: req.body.phone,
    password: req.body.password,
  };

  _ACCOUNT.findOne({ phone: data.phone }).then((match) => {
    if (match) {
      return res.send({
        error: true,
        message: "Phone already registred",
      });
    }
  });

  new _ACCOUNT({
    phone: req.body.phone,
    password: req.body.password,
  })
    .save()
    .then((acc) => {
      if (!acc) {
        return res.send({
          error: true,
          message: "Database couldn't register user",
        });
      }
      var tok = jwt.sign(acc.toJSON(), "shhhhh");
      if (!tok) {
        res.send({ error: true, message: "Couldn't create token" });
      }
      res.send(tok);
    });
};
