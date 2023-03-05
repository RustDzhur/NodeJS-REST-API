const { signup } = require("../../models/authUser");

const registrationController = async (req, res) => {
	const { email, password } = req.body;
	try {
		const register = await signup(email, password);
		if (register) {
			res.status(201).json({
				user: {
					email,
					subscription: "starter",
				},
			});
		}
	} catch (error) {
    res.status(error.status || 409).json({message: error.message})
  }
};

module.exports = {
	registrationController,
};
