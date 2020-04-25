const { Schema, model } = require('mongoose');

const schema = Schema(
	{
		_id: Schema.Types.ObjectId,
		name: { type: String, required: true },
		price: { type: String },
		image: { type: String },
		quantity: { type: Number },
		owner: { type: Schema.Types.ObjectId },
	},
	{ timestamps: true },
);

module.exports = model('Product', schema);
