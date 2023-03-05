const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	password: {
		type: String,
		required: [true, "Password is required"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
	},
	subscription: {
		type: String,
		enum: ["starter", "pro", "business"],
		default: "starter",
	},
	token: {
		type: String,
		default: null,
	},
});

userSchema.pre("save", async function () {
	if (this.isNew) {
		this.password = await bcrypt.hash(this.password, bcrypt.genSaltSync(10));
	}
});

const User = mongoose.model("user", userSchema);

module.exports = {
	User,
};
