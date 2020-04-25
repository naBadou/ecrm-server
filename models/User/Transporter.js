const { Schema, model } = require('mongoose');

const schema = Schema(
	{
		_id: Schema.Types.ObjectId,
		accountID: { type: Schema.Types.ObjectId, ref: 'Account' },
		name: {
			first: { type: String },
			last: { type: String },
		},
		city: { type: String },
		image: { type: String },
		ways: [
			{
				region: { type: String },
				city: { type: String },
				zone: { type: String },
				tarif: { delivery: { type: String }, canceled: { type: String } },
			},
		],
		orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
	},
	{ timestamps: true },
);

module.exports = model('Transporter', schema);
