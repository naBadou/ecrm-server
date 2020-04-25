const _ACCOUNT = require('../../models/User/Account');
const _MANAGER = require('../../models/User/Manager');
const _TRANSPORTER = require('../../models/User/Transporter');

var jwt = require('jsonwebtoken');

require('../../constants/config');

exports.auth = function (req, res) {
	const decoded = jwt.decode(req.body.token, process.env.JWT_SECRET);

	if (!decoded) {
		return res.json({
			error: true,
			message: 'Token invalide',
		});
	}
	res.json(decoded);
};
