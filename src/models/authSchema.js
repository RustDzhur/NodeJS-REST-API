const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchemaSignup = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().pattern(emailRegExp).required(),
	password: Joi.string().min(6).required(),
});

const userSchemaSignin = Joi.object({
	email: Joi.string().pattern(emailRegExp).required(),
	password: Joi.string().min(6).required(),
});

const emailSchema = Joi.object ({
	email: Joi.string().pattern(emailRegExp).required()
})

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: emailRegExp,
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
		},
		token: {
			type: String,
			default: "",
		},
		avatarUrl: {
			type: String,
			required: true
		},
		verify: {
			type: Boolean,
			default: false
		},
		verificationCode: {
			type: String,
			default: ''
		}
	},
	{ versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const schemas = {
	userSchemaSignup,
	userSchemaSignin,
	emailSchema
};

module.exports = { User, schemas };
