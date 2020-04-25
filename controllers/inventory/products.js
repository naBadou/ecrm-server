const _PRODUCT = require('../../models/Product');
const _MANAGER = require('../../models/User/Manager');
const mongoose = require('mongoose');



exports.show_all_products = async function (req, res) {
	const query = await _PRODUCT.find();
	res.send(query);
};

exports.add_single_product = function (req, res) {
	console.log(req.file)
	const Product = new _PRODUCT({
		_id: new mongoose.Types.ObjectId(),
		owner: req.body.owner,
		name: req.body.name,
		image: req.file.path,
		price: req.body.price,
		quantity: req.body.quantity,
	});
	Product.save()
		.then(product => res.send(product))
		.catch(err => res.send({ error: true, message: err }));
};

exports.show_single_product = async function (req, res) {
	_PRODUCT.findOne({ _id: req.params.id }).then(match => {
		if (!match)
			return res.json({
				error: true,
				message: 'There is no match',
			});
		res.json({
			error: false,
			match,
		});
	});
};
