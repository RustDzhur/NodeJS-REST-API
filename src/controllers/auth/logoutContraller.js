const { User } = require('../../db/authSchema');

const logoutController = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        console.log(user);
        if (!user) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        req.token = null;
        await user.save();

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    logoutController,
};
