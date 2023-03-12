const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Set name for contact"],
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
	favorite: {
		type: Boolean,
		default: false,
	},
	owner: {
		type: SchemaTypes.ObjectId,
		ref: 'contacts',
	}
});

const ContactModel  = mongoose.model("contacts", schema);

module.exports = {
	ContactModel ,
};
