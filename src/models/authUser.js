const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const gravatar = require('gravatar');
const { v4: uuidv4 } = require("uuid");
const { User } = require('./authSchema');
const { HttpError, sendEmail } = require('../helpers');
const BASE_URL = process.env.BASE_URL;

const signup = async body => {
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (user) throw HttpError(409, 'Email already in use');
    const avatarUrl = gravatar.url(email);
    const hashPassword = await bcrypt.hash(password, 10);
    const verificationToken = uuidv4();
    await User.create({
        ...body,
        avatarUrl,
        password: hashPassword,
        verificationToken,
    });
    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blanc" href= "${BASE_URL}/api/users/verify/${verificationToken}">Click for verifying your email</a>`,
    };
    await sendEmail(verifyEmail);
};

const signin = async body => {
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!user) throw HttpError(404, 'Not found');
    const passCompare = await bcrypt.compare(password, user.password);
    if (!passCompare) throw HttpError(401, 'Email or password is wrong');
    const payload = {
        id: user._id,
    };
    const token = await jsonwebtoken.sign(payload, process.env.SECRET, {
        expiresIn: '1h',
    });
    await User.findByIdAndUpdate(user._id, { token: token });
    return token;
};

module.exports = {
    signup,
    signin,
};
