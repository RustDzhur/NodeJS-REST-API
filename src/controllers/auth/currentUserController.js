const { ctrlWrapper } = require('../../decorators/ctrlWrapper');

const currentUserController = async (req, res) => {
	const { email, name } = req.user;
	res.json({ name, email });
};

module.exports = {
    currentUserController: ctrlWrapper(currentUserController),
};
