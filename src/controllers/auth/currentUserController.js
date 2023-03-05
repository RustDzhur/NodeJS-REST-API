const { User } = require('../../db/authSchema');

const currentUserController = async (req, res) => {
	try {
	  const user = await User.findById(req.user.id);
	  if (!user) {
		return res.status(401).json({ message: 'Not authorized' });
	  }
	  res.json({
		email: user.email,
		subscription: user.subscription,
	  });
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  }

  module.exports = {
    currentUserController
  }