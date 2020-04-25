const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
	_id: Schema.Types.ObjectId,

	product: { type: Schema.Types.ObjectId, ref: 'Product' },
	price: { type: Number },

	customer: {
		name: { type: String },
		address: {
			region: { type: String },
			city: { type: String },
			street: { type: String },
		},
	},

	delivered: { type: Boolean },
	canceled: { type: Boolean },

	// history: [
	//   {
	//     label: { type: String },
	//     by: { type: Schema.Types.ObjectId },
	//     to: { type: Schema.Types.ObjectId },
	//     notes: { type: String },
	//     when: { type: Date },
	//   },
	// ],
});

module.exports = mongoose.model('Order', schema);
