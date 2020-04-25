const _ACCOUNT = require('../models/User/Account');
const _MANAGER = require('../models/User/Manager');
const _TRANSPORTER = require('../models/User/Transporter');

exports.accounts = async function (req, res) {
	const query = await _ACCOUNT.find();
	res.send(query);
};
exports.transporters = async function (req, res) {
	const query = await _TRANSPORTER.find();
	res.send(query);
};
exports.managers = async function (req, res) {
	const query = await _MANAGER.find();
	res.send(query);
};

exports.accounts_delete = function (req, res) {
	_ACCOUNT
		.deleteMany()
		.then(rs => {
			if (rs.deletedCount > 0) return res.json({ error: false, message: 'All docs deleted' });
			res.json({ error: true, message: 'Nothing was deleted' });
		})
		.catch(err => res.json({ error: true, message: err }));
};
exports.transporters_delete = function (req, res) {
	_TRANSPORTER
		.remove()
		.then(rs => {
			if (rs.deletedCount > 0) return res.json({ error: false, message: 'All docs deleted' });
			res.json({ error: true, message: 'Nothing was deleted' });
		})
		.catch(err => res.json({ error: true, message: err }));
};
exports.managers_delete = function (req, res) {
	_MANAGER
		.remove()
		.then(rs => {
			if (rs.deletedCount > 0) return res.json({ error: false, message: 'All docs deleted' });
			res.json({ error: true, message: 'Nothing was deleted' });
		})
		.catch(err => res.json({ error: true, message: err }));
};

exports.account = async function (req, res) {
	const paramsID = req.params.id;
	await _ACCOUNT
		.remove({ id: paramsID })
		.then(account => {
			res.send(account);
		})
		.catch(err => console.log(err));
};

exports.transporter = async function (req, res) {
	const paramsID = req.params.id;
	await _TRANSPORTER
		.findOne({ accountID: paramsID })
		.then(transporter => {
			res.send(transporter);
		})
		.catch(err => console.log(err));
};
exports.manager = async function (req, res) {
	const paramsID = req.params.id;
	await _ACCOUNT
		.findOne({ accountID: paramsID })
		.then(manager => {
			res.send(manager);
		})
		.catch(err => console.log(err));
};
