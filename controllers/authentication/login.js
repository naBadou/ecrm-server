const _ACCOUNT = require("../../models/Account");
var jwt = require("jsonwebtoken");
exports.login = async function (req, res) {
  // TODO crypt password
  const data = {
    phone: req.body.phone,
    password: req.body.password,
  };

  _ACCOUNT.findOne({ phone: data.phone }).then((match) => {
    if (!match) {
      return res.send({
        error: true,
        message: "Phone is not existing",
      });
    }
    if (match.password !== data.password) {
      return res.send({
        error: true,
        message: "Phone is not existing",
      });
    }
    var tok = jwt.sign(match.toJSON(), "shhhhh");
    if (!tok) {
      res.send({ error: true, message: "Couldn't create token" });
    }
    res.send(tok);
  });
};
