const { schemas } = require('../../models/authSchema');
const { ctrlWrapper } = require('../../decorators/ctrlWrapper');
const { HttpError } = require('../../helpers');
const { signup } = require('../../models/authUser');

const registrationController = async (req, res) => {
    const { error } = schemas.userSchemaSignup.validate(req.body);
    if (error) throw HttpError(400, error.message);
    const { email, password, name } = req.body;
    await signup({ email, password, name });
    res.status(201).json({
        user: {
            email,
            subscription: 'starter',
            message: 'Verification email sent',
        },
    });
};

module.exports = {
    registrationController: ctrlWrapper(registrationController),
};
