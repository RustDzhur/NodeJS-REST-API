const { schemas } = require('../../models/authSchema');
const { ctrlWrapper } = require('../../decorators/ctrlWrapper');
const { HttpError } = require('../../helpers');
const { signin } = require('../../models/authUser');

const loginController = async (req, res) => {
    const { error } = schemas.userSchemaSignin.validate(req.body);
    if (error) throw HttpError(400, error.message);
    const { email } = req.body;
    const token = await signin(req.body);
    if (token) {
        res.status(200).json({
            token: token,
            user: {
                email,
                subscription: 'starter',
            },
        });
    }
};

module.exports = {
    loginController: ctrlWrapper(loginController),
};
