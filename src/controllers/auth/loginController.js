const { signin } = require('../../models/authUser');

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await signin(email, password);

        if (token) {
            res.status(200).json({
                token: token,
                user: {
                    email,
                    subscription: 'starter',
                },
            });
        }
    } catch (error) {
        console.error(error);
        res.status(401).json({
            message: error.message,
        });
    }
};

module.exports = {
    loginController,
};
