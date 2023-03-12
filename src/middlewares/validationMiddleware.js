const Joi = require("joi");

module.exports = {
	authtValidation: (req, res, next) => {
		const schema = Joi.object({
			email: Joi.string().email({
				minDomainSegments: 2
			}).required(),
			password: Joi.string().min(6).max(38).required(),
		});
		const validationResult = schema.validate(req.body);
		if (validationResult.error) {
			console.log(validationResult.error);
			return res.status(400).json({ message: "missing required  fields" });
		}
		next();
	},
};
