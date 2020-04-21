const _ACCOUNT = require("../models/Account");

exports.accounts = async function (req, res) {
  const query = await _ACCOUNT.find();
  res.send(query);
};
exports.accountsRemoval = function (req, res) {
  const query = _ACCOUNT.remove();
  res.send(query);
};
exports.account = async function (req, res) {
  const paramsID = req.params.id;
  await _ACCOUNT
    .findOne({ id: paramsID })
    .then((account) => {
      res.send(account);
    })
    .catch((err) => console.log(err));
};
