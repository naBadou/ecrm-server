const _ACCOUNT = require('../../models/User/Account');
const _MANAGER = require('../../models/User/Manager');
const _TRANSPORTER = require('../../models/User/Transporter');

const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

require('../../constants/config');

exports.login = async function (req, res) {
	// Checking for existing username
	_ACCOUNT
		.findOne({ username: req.body.username })
		.then(match => {
			if (!match)
				return res.json({
					error: true,
					message: 'Username wrong, and dont exist in db',
				});

			if (match.password !== req.body.password) {
				return res.json({
					error: true,
					message: 'Password wrong',
				});
			}

			if (match.role === 'transporter') {
				_TRANSPORTER
					.findOne({ accountID: match._id })
					.then(trasnporter => {
						var tok = jwt.sign(trasnporter.toJSON(), process.env.JWT_SECRET);
						if (!tok || tok.length < 1) return res.json({ error: true, message: "Couldn't create token" });
						res.json({
							error: false,
							token: tok,
						});
					})
					.catch(err => res.send({ error: true, message: err }));
			}

			if (match.role === 'manager') {
				_TRANSPORTER
					.findOne({ accountID: match._id })
					.then(manager => {
						var tok = jwt.sign(manager.toJSON(), process.env.JWT_SECRET);
						if (!tok || tok.length < 1) return res.json({ error: true, message: "Couldn't create token" });
						res.json({
							error: false,
							token: tok,
						});
					})
					.catch(err => res.send({ error: true, message: err }));
			}
		})
		.catch(err => res.send({ error: true, message: err }));

	// let account = new _ACCOUNT({
	// 	_id: mongoose.Types.ObjectId(),
	// 	username: req.body.username,
	// 	password: req.body.password,
	// 	role: req.body.role,
	// });

	// account
	// 	.save()
	// 	.then(acc => {
	// 		if (!acc) {
	// 			return res.json({
	// 				error: true,
	// 				message: "Database couldn't create account",
	// 			});
	// 		}

	// 		const isTransporter = acc.role === 'transporter';
	// 		const isManager = acc.role === 'manager';
	// 		let User;

	// 		if (isTransporter)
	// 			User = new _TRANSPORTER({
	// 				_id: mongoose.Types.ObjectId(),
	// 				accountID: acc._id,
	// 			})
	// 				.save()
	// 				.then(trasnporter => {
	// 					var tok = jwt.sign(trasnporter.toJSON(), process.env.JWT_SECRET);
	// 					if (!tok || tok.length < 1) return res.json({ error: true, message: "Couldn't create token" });
	// 					res.json({
	// 						error: false,
	// 						token: tok,
	// 					});
	// 				})
	// 				.catch(err => res.send({ error: true, message: err }));

	// 		if (isManager)
	// 			User = new _MANAGER({
	// 				_id: mongoose.Types.ObjectId(),
	// 				accountID: acc._id,
	// 			})
	// 				.save()
	// 				.then(manager => {
	// 					var tok = jwt.sign(manager.toJSON(), process.env.JWT_SECRET);
	// 					if (!tok || tok.length < 1) return res.json({ error: true, message: "Couldn't create token" });
	// 					res.json({
	// 						error: false,
	// 						token: tok,
	// 					});
	// 				})
	// 				.catch(err => res.send({ error: true, message: err }));

	// var tok = jwt.sign(acc.toJSON(), process.env.JWT_SECRET);
	// if (!tok || tok.length < 1) {
	//   return res.send({ error: true, message: "Couldn't create token" });
	// }
	// 	// res.send(Choice);
	// })
	// .catch(err => res.send({ error: true, message: err }));
};
