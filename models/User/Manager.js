const { Schema, model } = require('mongoose');

const schema = Schema(
	{
		_id: Schema.Types.ObjectId,
		accountID: { type: Schema.Types.ObjectId, ref: 'Account' },
		name: {
			first: { type: String },
			last: { type: String },
		},
		orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
		products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],

		transporters: [
			{
				id: { type: Schema.Types.ObjectId, ref: 'Transporter' },
				ready: { type: Boolean },
			},
		],
	},
	{ timestamps: true },
);

module.exports = model('Manager', schema);
