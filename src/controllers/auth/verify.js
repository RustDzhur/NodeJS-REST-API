const { ctrlWrapper } = require('../../decorators/ctrlWrapper');
const { HttpError, sendEmail } = require('../../helpers');
const { User, schemas } = require('../../models/authSchema');
const BASE_URL = process.env.BASE_URL;

const verify = async (req, res) => {
    const { error } = schemas.emailSchema.validate(req.body);
    if (error) throw HttpError(401, error.message);
    const { email } = req.body;
    const findUser = await User.findOne({ email });
    if (!findUser) throw HttpError(400, 'missing required field email');
    if (findUser.verificationToken === null)
        throw HttpError(400, 'Verification has already been passed');
    const verifyEmail = {
        to: email,
        subject: 'Verify email',
        html: `<a target="_blanc" href= "${BASE_URL}/api/users/verify/${findUser.verificationToken}">Click for verifying your email</a>`,
    };
    await sendEmail(verifyEmail);
    res.json({
        message: 'Verification email sent',
    });
};

module.exports = { verify: ctrlWrapper(verify) };
