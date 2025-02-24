const { ctrlWrapper } = require('../../decorators/ctrlWrapper');
const { HttpError } = require('../../helpers');
const {User} = require('../../models/authSchema');

const emailVerify = async (req, res) => {
    const { verificationToken } = req.params;
    const findUser = await User.findOne({ verificationToken });

    if (!findUser) throw HttpError(404, 'User not found');
    await User.findByIdAndUpdate(findUser._id, {
        verificationToken: null,
        verify: true,
    });
    res.json({message: 'Verification successful'})
};

module.exports = {emailVerify: ctrlWrapper(emailVerify)};
