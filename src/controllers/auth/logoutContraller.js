const { User } = require('../../models/authSchema');
const { ctrlWrapper } = require('../../decorators/ctrlWrapper');

const logoutController = async (req, res) => {
	const { _id } = req.user;
	await User.findByIdAndUpdate(_id, { token: "" });
	res.json({ message: "logout success" });
};

module.exports = {
    logoutController: ctrlWrapper(logoutController),
};
