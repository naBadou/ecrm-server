const _ACCOUNT = require("../../models/Account");
var jwt = require("jsonwebtoken");

exports.auth = function (req, res) {
  const token = req.body.token;
  // check if expired
  // check if valid
  const data = jwt.verify(token, "shhhhh");

  if (!data) {
    return res.send({
      error: true,
      message: "Token is not valid",
    });
  }
  res.send(data);
};
